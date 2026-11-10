package na.com.oribi.api;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Map;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class EnquiryApiTest {

    private static final String ORIGIN = "https://www.oribi.com.na";

    private Path dir;
    private Application app;
    private final HttpClient client = HttpClient.newHttpClient();

    @BeforeEach
    void start() throws Exception {
        dir = Files.createTempDirectory("oribi-api-test");
        app = Application.start(Config.from(Map.of(
                "PORT", "0",
                "ALLOWED_ORIGINS", ORIGIN,
                "DATA_DIR", dir.toString(),
                "RATE_LIMIT_REQUESTS", "3")));
    }

    @AfterEach
    void stop() {
        app.stop();
    }

    private HttpResponse<String> post(String origin, String contentType, String body) throws Exception {
        HttpRequest.Builder b = HttpRequest.newBuilder(URI.create("http://127.0.0.1:" + app.port() + "/api/enquiries"))
                .header("Content-Type", contentType)
                .POST(HttpRequest.BodyPublishers.ofString(body));
        if (origin != null) b.header("Origin", origin);
        return client.send(b.build(), HttpResponse.BodyHandlers.ofString());
    }

    @Test
    void storesAValidEnquiry() throws Exception {
        HttpResponse<String> res = post(ORIGIN, "application/json",
                "{\"name\":\"Jo Bloggs\",\"email\":\"jo@fund.one\",\"type\":\"Investor\",\"region\":\"Namibia\"}");
        assertEquals(201, res.statusCode());
        assertEquals(ORIGIN, res.headers().firstValue("Access-Control-Allow-Origin").orElse(""));
        String saved = Files.readString(dir.resolve("enquiries.jsonl"));
        assertTrue(saved.contains("\"email\":\"jo@fund.one\""));
    }

    @Test
    void rejectsInvalidInputWithFieldErrors() throws Exception {
        HttpResponse<String> res = post(ORIGIN, "application/json", "{\"name\":\"J\",\"email\":\"nope\"}");
        assertEquals(422, res.statusCode());
        assertTrue(res.body().contains("\"email\""));
    }

    @Test
    void refusesUnknownOriginsAndWrongContentTypes() throws Exception {
        assertEquals(403, post("https://evil.example", "application/json", "{}").statusCode());
        assertEquals(415, post(ORIGIN, "text/plain", "{}").statusCode());
        assertEquals(400, post(ORIGIN, "application/json", "{bad").statusCode());
    }

    @Test
    void quietlyDropsHoneypotSubmissions() throws Exception {
        HttpResponse<String> res = post(ORIGIN, "application/json",
                "{\"name\":\"Bot\",\"email\":\"bot@spam.io\",\"website\":\"http://spam\"}");
        assertEquals(201, res.statusCode());
        assertTrue(Files.notExists(dir.resolve("enquiries.jsonl")));
    }

    @Test
    void limitsRepeatedSubmissions() throws Exception {
        String body = "{\"name\":\"Jo Bloggs\",\"email\":\"jo@fund.one\"}";
        for (int i = 0; i < 3; i++) assertEquals(201, post(ORIGIN, "application/json", body).statusCode());
        HttpResponse<String> res = post(ORIGIN, "application/json", body);
        assertEquals(429, res.statusCode());
        assertTrue(res.headers().firstValue("Retry-After").isPresent());
    }

    @Test
    void answersPreflightAndHealth() throws Exception {
        HttpResponse<String> pre = client.send(
                HttpRequest.newBuilder(URI.create("http://127.0.0.1:" + app.port() + "/api/enquiries"))
                        .method("OPTIONS", HttpRequest.BodyPublishers.noBody())
                        .header("Origin", ORIGIN)
                        .build(),
                HttpResponse.BodyHandlers.ofString());
        assertEquals(204, pre.statusCode());
        HttpResponse<String> health = client.send(
                HttpRequest.newBuilder(URI.create("http://127.0.0.1:" + app.port() + "/health")).build(),
                HttpResponse.BodyHandlers.ofString());
        assertEquals("{\"status\":\"ok\"}", health.body());
    }
}
