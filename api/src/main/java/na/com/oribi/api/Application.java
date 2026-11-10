package na.com.oribi.api;

import com.sun.net.httpserver.HttpServer;
import java.io.IOException;
import java.net.InetSocketAddress;
import java.util.Map;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;
import java.util.logging.Logger;

/** Entry point for the Oribi website API. */
public final class Application {

    private static final Logger LOG = Logger.getLogger(Application.class.getName());

    private final HttpServer server;
    private final ScheduledExecutorService housekeeping;

    private Application(HttpServer server, ScheduledExecutorService housekeeping) {
        this.server = server;
        this.housekeeping = housekeeping;
    }

    public static void main(String[] args) throws IOException {
        System.setProperty("java.util.logging.SimpleFormatter.format", "%1$tFT%1$tT%1$tz %4$s %3$s: %5$s%6$s%n");
        Config config = Config.fromEnv();
        Application app = start(config);
        Runtime.getRuntime().addShutdownHook(new Thread(app::stop, "shutdown"));
        LOG.info("Listening on port " + app.port() + ", allowed origins " + config.allowedOrigins()
                + ", webhook " + (config.notifyWebhookUrl() == null ? "off" : "on"));
    }

    /** Starts the server; a port of 0 picks a free port, which tests rely on. */
    static Application start(Config config) throws IOException {
        RateLimiter limiter = new RateLimiter(config.rateLimitRequests(), config.rateLimitWindow());
        EnquiryStore store = new EnquiryStore(config.dataDir());
        Notifier notifier = new Notifier(config.notifyWebhookUrl(), config.notifyWebhookToken());

        HttpServer server = HttpServer.create(new InetSocketAddress(config.port()), 0);
        server.createContext("/api/enquiries", new EnquiryHandler(config, limiter, store, notifier));
        server.createContext("/health", ex -> {
            try {
                Http.json(ex, 200, Map.of("status", "ok"));
            } finally {
                ex.close();
            }
        });
        server.setExecutor(Executors.newVirtualThreadPerTaskExecutor());
        server.start();

        ScheduledExecutorService housekeeping = Executors.newSingleThreadScheduledExecutor(r -> {
            Thread t = new Thread(r, "housekeeping");
            t.setDaemon(true);
            return t;
        });
        housekeeping.scheduleAtFixedRate(limiter::prune, 5, 5, TimeUnit.MINUTES);
        return new Application(server, housekeeping);
    }

    int port() {
        return server.getAddress().getPort();
    }

    void stop() {
        housekeeping.shutdownNow();
        server.stop(2);
    }
}
