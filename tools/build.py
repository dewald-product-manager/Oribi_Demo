#!/usr/bin/env python3
"""Stitch src/*.html page bodies into full pages at the repo root.

Each source file starts with a one-line JSON meta comment:
  <!--meta {"title": "...", "desc": "...", "nav": "investors", "light": false} -->
Run from the repo root:  python3 tools/build.py
No dependencies. The output is plain static HTML for GitHub Pages or Cloudflare Pages.
"""
import json, pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "src"

NAV = [
    ("flagship", "Flagship farm", "flagship.html"),
    ("market", "Market", "market.html"),
    ("investors", "Investors", "investors.html"),
    ("produce", "Produce", "produce.html"),
    ("supply", "Supply", "supply.html"),
    ("about", "About", "about.html"),
    ("contact", "Contact", "contact.html"),
]

ARROW = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M2 8h11M9 3.5 13.5 8 9 12.5"/></svg>'

def header(active):
    links = "".join(
        f'<a href="{href}"{" aria-current=\"page\"" if key == active else ""}>{label}</a>'
        for key, label, href in NAV
    )
    return f'''<header class="site-header" id="top">
  <div class="wrap">
    <a class="brand" href="index.html" aria-label="Oribi home" style="min-width:180px">
      <img class="logo-white" src="assets/img/oribi-wordmark-white.png" alt="Oribi" width="124" height="34">
      <span class="logo-solid"><img src="assets/img/oribi-icon.png" alt="" width="38" height="38"><span>ORIBI</span></span>
    </a>
    <button class="menu-btn" aria-label="Menu" aria-expanded="false" aria-controls="nav"><span></span></button>
    <nav class="nav" id="nav" aria-label="Main">{links}<a class="btn btn-primary" href="investors.html#enquire">Investor briefing {ARROW}</a></nav>
  </div>
</header>'''

FOOTER = f'''<footer class="site-footer">
  <div class="wrap">
    <div class="top">
      <div>
        <img class="logo" src="assets/img/oribi-wordmark-white.png" alt="Oribi">
        <p>Namibian food, made in Namibia.<br>Production and processing that replaces imports.</p>
      </div>
      <div><h4>Explore</h4><ul><li><a href="flagship.html">Flagship farm</a></li><li><a href="market.html">Market</a></li><li><a href="investors.html">Investors</a></li><li><a href="produce.html">Produce</a></li><li><a href="about.html">About</a></li></ul></div>
      <div><h4>Work with us</h4><ul><li><a href="supply.html">Supply enquiry</a></li><li><a href="investors.html#enquire">Partnerships and investment</a></li><li><a href="contact.html">Contact</a></li></ul></div>
      <div><h4>Head office</h4><p>Unit 4, Mandela Offices<br>Corner of Nelson Mandela and Simón Bolívar Street<br>Windhoek, Namibia</p></div>
    </div>
    <p class="disclaimer">Nothing on this website is an offer or invitation to invest, or financial, legal or tax advice. Participation in any Oribi project is by conversation and subject to documentation. Figures describe capacity and structure, not sales. Third-party figures are attributed to their sources.</p>
    <div class="legal"><span>© <span id="yr">2026</span> Oribi. All rights reserved.</span><span>Local GAP certified under Primary Farm Assurance · Registered producer, Namibian Agronomic Board</span></div>
  </div>
</footer>'''

def nextup(n):
    if not n:
        return ""
    return (f'<section class="next-up"><a class="wrap" href="{n["href"]}"><span class="eyebrow-n">Next</span>'
            f'<strong>{n["title"]}</strong><span class="go">{ARROW}</span></a></section>')

PAGE = """<!doctype html>
<html lang="en-GB">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:type" content="website">
<meta property="og:image" content="assets/img/aerial-oblique-900.jpg">
<meta name="theme-color" content="#00498c">
<link rel="icon" type="image/png" href="assets/img/favicon.png">
<link rel="apple-touch-icon" href="assets/img/apple-touch-icon.png">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500;600&family=Newsreader:ital,wght@0,300;0,400;1,300;1,400&display=swap" rel="stylesheet">
<link rel="stylesheet" href="assets/css/style.css">
</head>
<body class="{bodyclass}">
<a class="skip" href="#main">Skip to content</a>
{header}
<main id="main">
{content}
{nextup}
</main>
{footer}
<script src="assets/js/config.js"></script>
<script src="assets/js/site.js"></script>
</body>
</html>
"""

def main():
    built = []
    for f in sorted(SRC.glob("*.html")):
        text = f.read_text(encoding="utf-8")
        m = re.match(r"\s*<!--meta (\{.*?\}) -->\s*", text, re.S)
        if not m:
            sys.exit(f"{f.name}: missing <!--meta {{...}} --> first line")
        meta = json.loads(m.group(1))
        content = text[m.end():].replace("{{ARROW}}", ARROW)
        html = PAGE.format(
            title=meta["title"], desc=meta["desc"],
            bodyclass="page-light" if meta.get("light") else "",
            header=header(meta.get("nav", "")), content=content, footer=FOOTER, nextup=nextup(meta.get("next")),
        )
        (ROOT / f.name).write_text(html, encoding="utf-8")
        built.append(f.name)
    print("built:", ", ".join(built))

if __name__ == "__main__":
    main()
