# Oribi website

Investor and partner website for Oribi, with the enquiry service behind it.

```
web/   Next.js site (React, TypeScript), exported as static files
api/   Java 21 service that receives partnerships and investment enquiries
```

## Website (`web/`)

Next.js App Router with React 19 and TypeScript. The site is exported to plain static files, so it runs on GitHub Pages now and on Cloudflare Pages later without a server.

```bash
cd web
cp .env.example .env.local     # adjust if needed
npm install
npm run dev                    # http://localhost:3000
npm run build                  # static site in web/out
npm run typecheck
```

Settings (build time, see `.env.example`):

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_BASE_PATH` | Sub-folder the site is served from. `/Oribi_Demo` for the GitHub Pages demo, empty on `www.oribi.com.na`. |
| `NEXT_PUBLIC_SITE_URL` | Public address, used for social previews. |
| `NEXT_PUBLIC_ENQUIRY_API` | Address of the enquiry API. While empty, the form validates but sends nothing and says so. |

Layout of the code:

- `app/` one folder per page, plus the shared layout, page template and 404 page
- `components/` header, footer, partner wall, team, press list, distance card, enquiry form, closing call to action
- `lib/effects.ts` scroll, reveal and hover behaviour (no dependencies, re-runs on navigation)
- `lib/enquiry.ts` form validation and submission
- `styles/globals.css` the full design system: tokens, type, section openers, buttons, components, motion, responsive rules
- `styles/cursor/` the Oribi leaf pointer, normal and hover states
- `public/assets/img/` photography, portraits and logos

### Publishing the demo

GitHub Pages serves `dewald-product-manager/Oribi_Demo`, branch `main`, folder `/ (root)`. Build with the demo sub-folder and copy the output to that repository:

```bash
cd web
NEXT_PUBLIC_BASE_PATH=/Oribi_Demo npm run build
# copy everything in web/out (including .nojekyll) to the root of Oribi_Demo and push to main
```

For `www.oribi.com.na` on Cloudflare Pages: build command `npm run build`, root directory `web`, output directory `out`, and leave `NEXT_PUBLIC_BASE_PATH` empty.

## Enquiry service (`api/`)

A small Java 21 service with no third-party runtime dependencies (JDK HTTP server and client only), so there is little to patch and it starts in milliseconds.

- `POST /api/enquiries` validates the enquiry, applies a per-connection rate limit, saves it to `enquiries.jsonl` and forwards it to a webhook
- `GET /health` returns `{"status":"ok"}`
- Cross-origin requests are accepted only from `ALLOWED_ORIGINS`
- A hidden form field filters out most automated submissions

```bash
cd api
mvn package                         # runs the tests, builds target/oribi-api.jar
ALLOWED_ORIGINS=http://localhost:3000 java -jar target/oribi-api.jar
# or
docker build -t oribi-api . && docker run -p 8080:8080 -e ALLOWED_ORIGINS=https://www.oribi.com.na -v oribi-data:/data oribi-api
```

| Variable | Default | Purpose |
| --- | --- | --- |
| `PORT` | `8080` | Listening port |
| `ALLOWED_ORIGINS` | `http://localhost:3000` | Comma-separated site addresses allowed to post enquiries |
| `DATA_DIR` | `data` | Folder for `enquiries.jsonl` |
| `NOTIFY_WEBHOOK_URL` | (off) | Webhook that receives each enquiry, for example a Make or Zapier scenario that emails the partnerships inbox |
| `NOTIFY_WEBHOOK_TOKEN` | (none) | Sent as a bearer token to the webhook |
| `TRUST_PROXY` | `false` | Read the visitor address from `CF-Connecting-IP` or `X-Forwarded-For` when behind a proxy |
| `RATE_LIMIT_REQUESTS` | `5` | Enquiries allowed per connection per window |
| `RATE_LIMIT_WINDOW_MINUTES` | `10` | Length of the rate-limit window |

Every enquiry is written to the file before the webhook is called, so nothing is lost if the webhook is down.

## Before launch

- Partnerships contact name and inbox; office number and general email
- Each principal's approval of their title and biography
- Private-label and Market Share Promotion wording on the Supply page
- Final brand green
- Host the enquiry service and set `NEXT_PUBLIC_ENQUIRY_API`
- Confirm the press list dates and the HortiDaily retailer report
