package na.com.oribi.api;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;
import java.util.Map;

/**
 * Appends every accepted enquiry to a JSON Lines file, one object per line.
 *
 * <p>The file is the durable record. Notifications are sent after the write, so an enquiry is never
 * lost because a webhook was unavailable.
 */
final class EnquiryStore {

    private final Path file;

    EnquiryStore(Path dataDir) throws IOException {
        Files.createDirectories(dataDir);
        this.file = dataDir.resolve("enquiries.jsonl");
    }

    synchronized void append(Map<String, ?> record) throws IOException {
        Files.writeString(
                file,
                Json.write(record) + "\n",
                StandardCharsets.UTF_8,
                StandardOpenOption.CREATE,
                StandardOpenOption.APPEND,
                StandardOpenOption.WRITE);
    }

    Path file() {
        return file;
    }
}
