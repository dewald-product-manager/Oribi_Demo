package na.com.oribi.api;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.time.Clock;
import java.time.Duration;
import java.time.Instant;
import java.time.ZoneOffset;
import org.junit.jupiter.api.Test;

class RateLimiterTest {

    /** A clock the test can move forward by hand. */
    static final class ManualClock extends Clock {
        long now = 1_000_000L;

        @Override
        public ZoneOffset getZone() {
            return ZoneOffset.UTC;
        }

        @Override
        public Clock withZone(java.time.ZoneId zone) {
            return this;
        }

        @Override
        public Instant instant() {
            return Instant.ofEpochMilli(now);
        }
    }

    @Test
    void allowsUpToTheLimitThenBlocksUntilTheWindowPasses() {
        ManualClock clock = new ManualClock();
        RateLimiter limiter = new RateLimiter(2, Duration.ofMinutes(1), clock);
        assertTrue(limiter.tryAcquire("a"));
        assertTrue(limiter.tryAcquire("a"));
        assertFalse(limiter.tryAcquire("a"));
        assertTrue(limiter.tryAcquire("b"));
        assertEquals(60, limiter.retryAfterSeconds("a"));
        clock.now += 60_000;
        assertTrue(limiter.tryAcquire("a"));
    }
}
