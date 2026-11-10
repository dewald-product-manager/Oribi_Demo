package na.com.oribi.api;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.regex.Pattern;

/** A partnerships and investment enquiry, as submitted from the website form. */
record Enquiry(
        String name,
        String organisation,
        String email,
        String type,
        String region,
        String size,
        String message,
        String page) {

    static final List<String> TYPES =
            List.of("Investor", "Development finance institution", "Operator", "Off-taker", "Other");
    static final List<String> REGIONS = List.of("Namibia", "South Africa", "Elsewhere in SADC");

    private static final Pattern EMAIL = Pattern.compile("^[^\\s@]+@[^\\s@]+\\.[^\\s@]{2,}$");

    /** Builds an enquiry from raw form fields, trimming and normalising whitespace. */
    static Enquiry from(Map<String, String> f) {
        return new Enquiry(
                line(f.get("name")),
                line(f.get("organisation")),
                line(f.get("email")).toLowerCase(),
                line(f.get("type")),
                line(f.get("region")),
                line(f.get("size")),
                text(f.get("message")),
                line(f.get("page")));
    }

    /** Returns field errors in a stable order, or an empty map when the enquiry is valid. */
    Map<String, String> validate() {
        Map<String, String> errors = new LinkedHashMap<>();
        if (name.length() < 2) errors.put("name", "Please tell us your name.");
        else if (name.length() > 120) errors.put("name", "Please shorten your name to 120 characters.");
        if (organisation.length() > 160) errors.put("organisation", "Please shorten to 160 characters.");
        if (email.isEmpty()) errors.put("email", "Please give an email address we can reply to.");
        else if (email.length() > 254 || !EMAIL.matcher(email).matches())
            errors.put("email", "That email address does not look complete.");
        if (!type.isEmpty() && !TYPES.contains(type)) errors.put("type", "Please choose one of the listed options.");
        if (!region.isEmpty() && !REGIONS.contains(region))
            errors.put("region", "Please choose one of the listed options.");
        if (size.length() > 80) errors.put("size", "Please shorten to 80 characters.");
        if (message.length() > 4000) errors.put("message", "Please keep the message under 4,000 characters.");
        if (page.length() > 200) errors.put("page", "Invalid page reference.");
        return errors;
    }

    Map<String, Object> toMap() {
        Map<String, Object> m = new LinkedHashMap<>();
        m.put("name", name);
        m.put("organisation", organisation);
        m.put("email", email);
        m.put("type", type);
        m.put("region", region);
        m.put("size", size);
        m.put("message", message);
        m.put("page", page);
        return m;
    }

    /** One readable line for chat or email notifications. */
    String summary() {
        StringBuilder sb = new StringBuilder("New partnerships enquiry from ").append(name);
        if (!organisation.isEmpty()) sb.append(" (").append(organisation).append(')');
        if (!type.isEmpty()) sb.append(", ").append(type);
        if (!region.isEmpty()) sb.append(", interested in ").append(region);
        return sb.append(". Reply to ").append(email).append('.').toString();
    }

    private static String line(String v) {
        if (v == null) return "";
        return stripControls(v).replaceAll("\\s+", " ").trim();
    }

    private static String text(String v) {
        if (v == null) return "";
        String s = v.replace("\r\n", "\n").replace('\r', '\n');
        s = stripControls(s).replaceAll("[ \\t]+\\n", "\n").replaceAll("\\n{3,}", "\n\n");
        return s.trim();
    }

    private static String stripControls(String v) {
        StringBuilder sb = new StringBuilder(v.length());
        for (int i = 0; i < v.length(); i++) {
            char c = v.charAt(i);
            if (c == '\n' || c == '\t' || c >= 0x20 && c != 0x7f) sb.append(c);
        }
        return sb.toString();
    }
}
