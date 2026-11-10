package na.com.oribi.api;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;
import java.util.LinkedHashMap;
import java.util.Map;
import java.util.logging.Level;
import java.util.logging.Logger;

/**
 * Posts each new enquiry to a webhook, for example a Make or Zapier scenario that emails the
 * partnerships inbox, or a Slack or Teams channel. The payload carries a plain {@code text} line so
 * chat tools can show it without extra mapping.
 */
final class Notifier {

    private static final Logger LOG = Logger.getLogger(Notifier.class.getName());

    private final URI url;
    private final String token;
    private final HttpClient client;

    Notifier(String url, String token) {
        this.url = url == null ? null : URI.create(url);
        this.token = token;
        this.client = HttpClient.newBuilder().connectTimeout(Duration.ofSeconds(5)).build();
    }

    boolean enabled() {
        return url != null;
    }

    /** Sends in the background; the visitor never waits on the webhook. */
    void notifyAsync(String id, String receivedAt, Enquiry enquiry) {
        if (!enabled()) return;
        Thread.ofVirtual().name("notify-" + id).start(() -> send(id, receivedAt, enquiry));
    }

    private void send(String id, String receivedAt, Enquiry enquiry) {
        Map<String, Object> body = new LinkedHashMap<>();
        body.put("event", "enquiry.received");
        body.put("id", id);
        body.put("receivedAt", receivedAt);
        body.put("text", enquiry.summary());
        body.put("enquiry", enquiry.toMap());
        HttpRequest.Builder req = HttpRequest.newBuilder(url)
                .timeout(Duration.ofSeconds(10))
                .header("Content-Type", "application/json")
                .POST(HttpRequest.BodyPublishers.ofString(Json.write(body)));
        if (token != null) req.header("Authorization", "Bearer " + token);
        for (int attempt = 1; attempt <= 3; attempt++) {
            try {
                HttpResponse<Void> res = client.send(req.build(), HttpResponse.BodyHandlers.discarding());
                if (res.statusCode() < 300) return;
                LOG.warning("Webhook returned " + res.statusCode() + " for enquiry " + id + " (attempt " + attempt + ")");
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return;
            } catch (Exception e) {
                LOG.log(Level.WARNING, "Webhook failed for enquiry " + id + " (attempt " + attempt + ")", e);
            }
            try {
                Thread.sleep(1000L * attempt * attempt);
            } catch (InterruptedException e) {
                Thread.currentThread().interrupt();
                return;
            }
        }
        LOG.severe("Webhook gave up for enquiry " + id + "; it is still saved in the enquiry file.");
    }
}
