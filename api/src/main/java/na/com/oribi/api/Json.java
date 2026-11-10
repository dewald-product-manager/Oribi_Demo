package na.com.oribi.api;

import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.Map;

/**
 * Small JSON reader and writer.
 *
 * <p>The enquiry endpoint only ever receives a flat object of text fields, so the reader accepts
 * exactly that: one object whose values are strings, numbers, booleans or null. Nested objects and
 * arrays are rejected, which keeps the attack surface small.
 */
final class Json {

    static final class ParseException extends Exception {
        private static final long serialVersionUID = 1L;

        ParseException(String message) {
            super(message);
        }
    }

    private Json() {}

    static Map<String, String> parseFlatObject(String text) throws ParseException {
        return new Reader(text).readObject();
    }

    static String write(Map<String, ?> map) {
        StringBuilder sb = new StringBuilder();
        writeValue(sb, map);
        return sb.toString();
    }

    private static void writeValue(StringBuilder sb, Object value) {
        if (value == null) {
            sb.append("null");
        } else if (value instanceof String s) {
            quote(sb, s);
        } else if (value instanceof Number || value instanceof Boolean) {
            sb.append(value);
        } else if (value instanceof Map<?, ?> m) {
            sb.append('{');
            Iterator<? extends Map.Entry<?, ?>> it = m.entrySet().iterator();
            while (it.hasNext()) {
                Map.Entry<?, ?> e = it.next();
                quote(sb, String.valueOf(e.getKey()));
                sb.append(':');
                writeValue(sb, e.getValue());
                if (it.hasNext()) sb.append(',');
            }
            sb.append('}');
        } else {
            quote(sb, value.toString());
        }
    }

    private static void quote(StringBuilder sb, String s) {
        sb.append('"');
        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);
            switch (c) {
                case '"' -> sb.append("\\\"");
                case '\\' -> sb.append("\\\\");
                case '\n' -> sb.append("\\n");
                case '\r' -> sb.append("\\r");
                case '\t' -> sb.append("\\t");
                case '\b' -> sb.append("\\b");
                case '\f' -> sb.append("\\f");
                default -> {
                    if (c < 0x20 || c == ' ' || c == ' ') {
                        sb.append(String.format("\\u%04x", (int) c));
                    } else {
                        sb.append(c);
                    }
                }
            }
        }
        sb.append('"');
    }

    private static final class Reader {
        private final String s;
        private int i;

        Reader(String s) {
            this.s = s == null ? "" : s;
        }

        Map<String, String> readObject() throws ParseException {
            Map<String, String> out = new LinkedHashMap<>();
            skipWs();
            expect('{');
            skipWs();
            if (peek() == '}') {
                i++;
                return finish(out);
            }
            while (true) {
                skipWs();
                String key = readString();
                skipWs();
                expect(':');
                skipWs();
                String value = readScalar();
                if (value != null) out.put(key, value);
                skipWs();
                char c = next();
                if (c == '}') return finish(out);
                if (c != ',') throw new ParseException("Expected ',' or '}' at position " + (i - 1));
            }
        }

        private Map<String, String> finish(Map<String, String> out) throws ParseException {
            skipWs();
            if (i != s.length()) throw new ParseException("Unexpected content after the object");
            return out;
        }

        private String readScalar() throws ParseException {
            char c = peek();
            if (c == '"') return readString();
            if (c == '{' || c == '[') throw new ParseException("Nested values are not accepted");
            int start = i;
            while (i < s.length() && ",} \t\r\n".indexOf(s.charAt(i)) < 0) i++;
            String raw = s.substring(start, i);
            if (raw.equals("null")) return null;
            if (raw.equals("true") || raw.equals("false")) return raw;
            if (raw.matches("-?(0|[1-9]\\d*)(\\.\\d+)?([eE][+-]?\\d+)?")) return raw;
            throw new ParseException("Invalid value at position " + start);
        }

        private String readString() throws ParseException {
            expect('"');
            StringBuilder sb = new StringBuilder();
            while (true) {
                if (i >= s.length()) throw new ParseException("Unterminated string");
                char c = s.charAt(i++);
                if (c == '"') return sb.toString();
                if (c < 0x20) throw new ParseException("Control character in string");
                if (c != '\\') {
                    sb.append(c);
                    continue;
                }
                char e = next();
                switch (e) {
                    case '"', '\\', '/' -> sb.append(e);
                    case 'b' -> sb.append('\b');
                    case 'f' -> sb.append('\f');
                    case 'n' -> sb.append('\n');
                    case 'r' -> sb.append('\r');
                    case 't' -> sb.append('\t');
                    case 'u' -> {
                        if (i + 4 > s.length()) throw new ParseException("Bad unicode escape");
                        try {
                            sb.append((char) Integer.parseInt(s.substring(i, i + 4), 16));
                        } catch (NumberFormatException ex) {
                            throw new ParseException("Bad unicode escape");
                        }
                        i += 4;
                    }
                    default -> throw new ParseException("Bad escape '\\" + e + "'");
                }
            }
        }

        private void skipWs() {
            while (i < s.length() && " \t\r\n".indexOf(s.charAt(i)) >= 0) i++;
        }

        private char peek() throws ParseException {
            if (i >= s.length()) throw new ParseException("Unexpected end of input");
            return s.charAt(i);
        }

        private char next() throws ParseException {
            char c = peek();
            i++;
            return c;
        }

        private void expect(char c) throws ParseException {
            if (next() != c) throw new ParseException("Expected '" + c + "' at position " + (i - 1));
        }
    }
}
