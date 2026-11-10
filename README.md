# Oribi

Oribi Group: investor and partner website (demo build).

Static HTML, CSS and JavaScript. No framework and no runtime dependencies.

## Structure

- `*.html` – built pages (committed, so the site can be served as-is)
- `src/*.html` – page sources
- `tools/build.py` – stitches the shared header and footer into each page. Run `python3 tools/build.py`
- `assets/` – CSS, JS, optimised images and logos
- `assets/js/config.js` – site settings (partnerships email for the enquiry form)

Edit `src/` and `tools/build.py`, then rebuild. Do not edit the built root pages by hand.

## Preview

Open `index.html` in a browser, or run `python3 -m http.server` in this folder.

## Demo hosting (GitHub Pages)

This work lives on the `investor-demo` branch. `main` is untouched.

1. Repository **Settings → Pages**
2. Source: **Deploy from a branch**; Branch: `investor-demo`, folder `/ (root)`
3. The demo appears at `https://<user>.github.io/Oribi/`

## Later: Cloudflare and the custom domain

Not connected yet. When the custom domain is ready, create a Cloudflare Pages project from this repo with no build command and output directory `/`, then attach the domain.

## Before launch

- Add the partnerships contact in `assets/js/config.js`, plus the contact page placeholders in `[square brackets]`
- Confirm principals' titles and biographies, retailer permissions, the Market Share Promotion rate and the private-label wording
- Confirm the brand green and replace the font links with self-hosted fonts if wanted
