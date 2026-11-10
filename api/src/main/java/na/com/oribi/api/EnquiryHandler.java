package na.com.oribi.api;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import java.io.IOException;
import java.time.Instant;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.UUID;
import java.util.logging.Level;
import java.util.logging.Logger;

/** POST /api/enquiries: validates, stores and forwards a website enquiry. */
final class EnquiryHandler implements HttpHandler {

    private static final Logger LOG = Logger.getLogger(EnquiryHandler.class.getName());

    private final Config config;
    private final RateLimiter limiter;
    private final EnquiryStore store;
    private final Notifier notifier;

    EnquiryHandler(Config config, RateLimiter limiter, EnquiryStore store, Notifier notifier) {
        this.config = config;
        this.limiter = limiter;
        this.store = store;
        this.notifier = notifier;
    }

    @Override
    public void handle(HttpExchange ex) throws IOException {
        try {
            String origin = ex.getRequestHeaders().getFirst("Origin");
            if (origin != null) {
                if (!config.allowedOrigins().contains(origin)) {
                    Http.json(ex, 403, Map.of("error", "This origin is not allowed to send enquiries."));
                    return;
                }
                var h = ex.getResponseHeaders();
                h.set("Access-Control-Allow-Origin", origin);
                h.set("Vary", "Origin");
            }

            String method = ex.getRequestMethod();
            if (method.equals("OPTIONS")) {
                var h = ex.getResponseHeaders();
                h.set("Access-Control-Allow-Methods", "POST, OPTIONS");
                h.set("Access-Control-Allow-Headers", "Content-Type");
                h.set("Access-Control-Max-Age", "86400");
                Http.empty(ex, 204);
                return;
            }
            if (!method.equals("POST")) {
                ex.getResponseHeaders().set("Allow", "POST, OPTIONS");
                Http.json(ex, 405, Map.of("error", "Use POST to send an enquiry."));
                return;
            }

            String type = ex.getRequestHeaders().getFirst("Content-Type");
            if (type == null || !type.toLowerCase().startsWith("application/json")) {
                Http.json(ex, 415, Map.of("error", "Send the enquiry as application/json."));
                return;
            }

            String ip = Http.clientIp(ex, config.trustProxy());
            if (!limiter.tryAcquire(ip)) {
                ex.getResponseHeaders().set("Retry-After", String.valueOf(limiter.retryAfterSeconds(ip)));
                Http.json(ex, 429, Map.of("error", "Too many enquiries from this connection. Please try again shortly."));
                return;
            }

            Map<String, String> fields;
            try {
                fields = Json.parseFlatObject(Http.readBody(ex, config.maxBodyBytes()));
            } catch (Http.TooLargeException e) {
                Http.json(ex, 413, Map.of("error", "The enquiry is too large."));
                return;
            } catch (Json.ParseException e) {
                Http.json(ex, 400, Map.of("error", "The request body is not valid JSON."));
                return;
            }

            String id = UUID.randomUUID().toString();
            // Hidden field that people never see; automated submissions tend to fill it in.
            String trap = fields.getOrDefault("website", "");
            if (!trap.isBlank()) {
                Http.json(ex, 201, Map.of("id", id, "status", "received"));
                return;
            }

            Enquiry enquiry = Enquiry.from(fields);
            Map<String, String> errors = enquiry.validate();
            if (!errors.isEmpty()) {
                Http.json(ex, 422, Map.of("error", "Please check the highlighted fields.", "errors", errors));
                return;
            }

            String receivedAt = Instant.now().toString();
            Map<String, Object> record = new LinkedHashMap<>();
            record.put("id", id);
            record.put("receivedAt", receivedAt);
            record.putAll(enquiry.toMap());
            store.append(record);
            notifier.notifyAsync(id, receivedAt, enquiry);
            LOG.info("Enquiry " + id + " received (" + (enquiry.type().isEmpty() ? "no type" : enquiry.type()) + ")");

            Http.json(ex, 201, Map.of("id", id, "status", "received"));
        } catch (IOException e) {
            LOG.log(Level.SEVERE, "Could not save enquiry", e);
            try {
                Http.json(ex, 500, Map.of("error", "We could not save your enquiry. Please email us instead."));
            } catch (IOException ignored) {
                // response already started
            }
        } finally {
            ex.close();
        }
    }
}
