package na.com.oribi.api;

import java.nio.file.Path;
import java.time.Duration;
import java.util.Arrays;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

/** Runtime settings, read from environment variables. */
public record Config(
        int port,
        Set<String> allowedOrigins,
        Path dataDir,
        String notifyWebhookUrl,
        String notifyWebhookToken,
        boolean trustProxy,
        int rateLimitRequests,
        Duration rateLimitWindow,
        int maxBodyBytes) {

    public static Config fromEnv() {
        return from(System.getenv());
    }

    static Config from(Map<String, String> env) {
        return new Config(
                intOf(env, "PORT", 8080),
                Arrays.stream(env.getOrDefault("ALLOWED_ORIGINS", "http://localhost:3000").split(","))
                        .map(String::trim)
                        .map(o -> o.endsWith("/") ? o.substring(0, o.length() - 1) : o)
                        .filter(o -> !o.isEmpty())
                        .collect(Collectors.toUnmodifiableSet()),
                Path.of(env.getOrDefault("DATA_DIR", "data")),
                blankToNull(env.get("NOTIFY_WEBHOOK_URL")),
                blankToNull(env.get("NOTIFY_WEBHOOK_TOKEN")),
                Boolean.parseBoolean(env.getOrDefault("TRUST_PROXY", "false")),
                intOf(env, "RATE_LIMIT_REQUESTS", 5),
                Duration.ofMinutes(intOf(env, "RATE_LIMIT_WINDOW_MINUTES", 10)),
                intOf(env, "MAX_BODY_BYTES", 16 * 1024));
    }

    private static int intOf(Map<String, String> env, String key, int fallback) {
        String v = env.get(key);
        if (v == null || v.isBlank()) return fallback;
        try {
            return Integer.parseInt(v.trim());
        } catch (NumberFormatException e) {
            throw new IllegalArgumentException(key + " must be a whole number, got: " + v);
        }
    }

    private static String blankToNull(String v) {
        return v == null || v.isBlank() ? null : v.trim();
    }
}
