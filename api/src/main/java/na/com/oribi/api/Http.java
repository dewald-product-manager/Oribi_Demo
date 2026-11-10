package na.com.oribi.api;

import com.sun.net.httpserver.HttpExchange;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.util.Map;

/** Shared helpers for reading requests and writing JSON responses. */
final class Http {

    static final class TooLargeException extends IOException {
        private static final long serialVersionUID = 1L;

        TooLargeException() {
            super("Request body too large");
        }
    }

    private Http() {}

    static void json(HttpExchange ex, int status, Map<String, ?> body) throws IOException {
        byte[] bytes = Json.write(body).getBytes(StandardCharsets.UTF_8);
        ex.getResponseHeaders().set("Content-Type", "application/json; charset=utf-8");
        ex.getResponseHeaders().set("Cache-Control", "no-store");
        ex.getResponseHeaders().set("X-Content-Type-Options", "nosniff");
        ex.sendResponseHeaders(status, bytes.length);
        try (OutputStream out = ex.getResponseBody()) {
            out.write(bytes);
        }
    }

    static void empty(HttpExchange ex, int status) throws IOException {
        ex.sendResponseHeaders(status, -1);
    }

    static String readBody(HttpExchange ex, int maxBytes) throws IOException {
        String declared = ex.getRequestHeaders().getFirst("Content-Length");
        if (declared != null) {
            try {
                if (Long.parseLong(declared.trim()) > maxBytes) throw new TooLargeException();
            } catch (NumberFormatException ignored) {
                // fall through to the streamed check
            }
        }
        try (InputStream in = ex.getRequestBody()) {
            ByteArrayOutputStream buf = new ByteArrayOutputStream();
            byte[] chunk = new byte[4096];
            int n;
            while ((n = in.read(chunk)) != -1) {
                if (buf.size() + n > maxBytes) throw new TooLargeException();
                buf.write(chunk, 0, n);
            }
            return buf.toString(StandardCharsets.UTF_8);
        }
    }

    /** The visitor's address, taken from proxy headers only when the service sits behind one. */
    static String clientIp(HttpExchange ex, boolean trustProxy) {
        if (trustProxy) {
            String cf = ex.getRequestHeaders().getFirst("CF-Connecting-IP");
            if (cf != null && !cf.isBlank()) return cf.trim();
            String xff = ex.getRequestHeaders().getFirst("X-Forwarded-For");
            if (xff != null && !xff.isBlank()) return xff.split(",")[0].trim();
        }
        return ex.getRemoteAddress().getAddress().getHostAddress();
    }
}
