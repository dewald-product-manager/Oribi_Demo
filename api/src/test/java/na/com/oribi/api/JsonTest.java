package na.com.oribi.api;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertThrows;

import java.util.LinkedHashMap;
import java.util.Map;
import org.junit.jupiter.api.Test;

class JsonTest {

    @Test
    void readsFlatObjectWithEscapes() throws Exception {
        Map<String, String> m = Json.parseFlatObject(
                "{\"name\":\"Ana \\\"A\\\" Silva\",\"note\":\"line1\\nline2 \\u00e9\",\"n\":12,\"ok\":true,\"x\":null}");
        assertEquals("Ana \"A\" Silva", m.get("name"));
        assertEquals("line1\nline2 é", m.get("note"));
        assertEquals("12", m.get("n"));
        assertEquals("true", m.get("ok"));
        assertFalse(m.containsKey("x"));
    }

    @Test
    void readsEmptyObject() throws Exception {
        assertEquals(0, Json.parseFlatObject(" { } ").size());
    }

    @Test
    void rejectsNestedAndMalformedInput() {
        assertThrows(Json.ParseException.class, () -> Json.parseFlatObject("{\"a\":{\"b\":1}}"));
        assertThrows(Json.ParseException.class, () -> Json.parseFlatObject("{\"a\":[1]}"));
        assertThrows(Json.ParseException.class, () -> Json.parseFlatObject("{\"a\":\"open"));
        assertThrows(Json.ParseException.class, () -> Json.parseFlatObject("{\"a\":1} trailing"));
        assertThrows(Json.ParseException.class, () -> Json.parseFlatObject("[]"));
        assertThrows(Json.ParseException.class, () -> Json.parseFlatObject(""));
    }

    @Test
    void writesAndReadsBack() throws Exception {
        Map<String, Object> m = new LinkedHashMap<>();
        m.put("text", "Quote \" slash \\ tab \t newline \n");
        m.put("count", 3);
        String json = Json.write(m);
        assertEquals("{\"text\":\"Quote \\\" slash \\\\ tab \\t newline \\n\",\"count\":3}", json);
        assertEquals("Quote \" slash \\ tab \t newline \n", Json.parseFlatObject(json).get("text"));
    }
}
