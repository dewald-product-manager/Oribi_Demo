package na.com.oribi.api;

import java.time.Clock;
import java.time.Duration;
import java.util.ArrayDeque;
import java.util.Deque;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

/** Sliding-window limit per client key, held in memory. */
final class RateLimiter {

    private final int limit;
    private final long windowMillis;
    private final Clock clock;
    private final Map<String, Deque<Long>> hits = new ConcurrentHashMap<>();

    RateLimiter(int limit, Duration window) {
        this(limit, window, Clock.systemUTC());
    }

    RateLimiter(int limit, Duration window, Clock clock) {
        this.limit = limit;
        this.windowMillis = window.toMillis();
        this.clock = clock;
    }

    /** Records an attempt and returns true when it is within the limit. */
    boolean tryAcquire(String key) {
        long now = clock.millis();
        Deque<Long> q = hits.computeIfAbsent(key, k -> new ArrayDeque<>());
        synchronized (q) {
            while (!q.isEmpty() && now - q.peekFirst() >= windowMillis) q.pollFirst();
            if (q.size() >= limit) return false;
            q.addLast(now);
            return true;
        }
    }

    /** Seconds until the oldest attempt for this key leaves the window. */
    long retryAfterSeconds(String key) {
        Deque<Long> q = hits.get(key);
        if (q == null) return 0;
        synchronized (q) {
            if (q.isEmpty()) return 0;
            long wait = windowMillis - (clock.millis() - q.peekFirst());
            return Math.max(1, (wait + 999) / 1000);
        }
    }

    /** Drops keys with no recent attempts so memory stays bounded. */
    void prune() {
        long now = clock.millis();
        hits.entrySet().removeIf(e -> {
            Deque<Long> q = e.getValue();
            synchronized (q) {
                return q.isEmpty() || now - q.peekLast() >= windowMillis;
            }
        });
    }
}
