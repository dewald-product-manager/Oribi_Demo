/**
 * The site is exported as static files (the `out` folder), so it can be served by GitHub Pages
 * today and by Cloudflare Pages later without a server.
 *
 * NEXT_PUBLIC_BASE_PATH  Sub-folder the site is served from, e.g. "/Oribi_Demo". Empty on a custom domain.
 * NEXT_PUBLIC_SITE_URL   Public address, used for social previews.
 * NEXT_PUBLIC_ENQUIRY_API  Address of the enquiry API. Empty keeps the form in preview mode.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: false,
  images: { unoptimized: true },
  reactStrictMode: true,
  poweredByHeader: false,
};

export default nextConfig;
