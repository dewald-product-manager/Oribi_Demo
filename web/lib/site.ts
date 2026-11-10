/** Site-wide settings. Values come from environment variables at build time. */

/** Path prefix when the site is served from a sub-folder, e.g. "/Oribi_Demo" on GitHub Pages. */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

/** Public address of the site, used for absolute links in social previews. */
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.oribi.com.na';

/** Base address of the enquiry API. When empty, the form runs in preview mode and sends nothing. */
export const enquiryApi = process.env.NEXT_PUBLIC_ENQUIRY_API ?? '';

/** Prefixes a file in /public with the base path, for plain <img> tags and CSS masks. */
export function asset(path: string): string {
  return `${basePath}${path}`;
}

export const nav = [
  { href: '/flagship', label: 'Flagship farm' },
  { href: '/market', label: 'Market' },
  { href: '/investors', label: 'Investors' },
  { href: '/produce', label: 'Produce' },
  { href: '/supply', label: 'Supply' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
] as const;
