package na.com.oribi.api;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.Map;
import org.junit.jupiter.api.Test;

class EnquiryTest {

    @Test
    void acceptsAValidEnquiryAndNormalisesFields() {
        Enquiry e = Enquiry.from(Map.of(
                "name", "  Thandi   Nkosi ",
                "email", " Thandi@Example.COM ",
                "type", "Investor",
                "region", "Namibia",
                "message", "Hello\r\n\r\n\r\n\r\nWorld  "));
        assertTrue(e.validate().isEmpty());
        assertEquals("Thandi Nkosi", e.name());
        assertEquals("thandi@example.com", e.email());
        assertEquals("Hello\n\nWorld", e.message());
    }

    @Test
    void reportsEachProblemField() {
        Map<String, String> errors = Enquiry.from(Map.of(
                "name", "A",
                "email", "not-an-email",
                "type", "Pirate",
                "region", "Mars")).validate();
        assertEquals(4, errors.size());
        assertTrue(errors.containsKey("name"));
        assertTrue(errors.containsKey("email"));
        assertTrue(errors.containsKey("type"));
        assertTrue(errors.containsKey("region"));
    }

    @Test
    void requiresAnEmail() {
        assertTrue(Enquiry.from(Map.of("name", "Jo Bloggs")).validate().containsKey("email"));
    }

    @Test
    void summaryReadsNaturally() {
        Enquiry e = Enquiry.from(Map.of(
                "name", "Jo Bloggs", "organisation", "Fund One", "email", "jo@fund.one",
                "type", "Investor", "region", "South Africa"));
        assertEquals(
                "New partnerships enquiry from Jo Bloggs (Fund One), Investor, interested in South Africa. Reply to jo@fund.one.",
                e.summary());
    }
}
