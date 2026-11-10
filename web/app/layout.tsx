import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import '@/styles/globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { FloatCta } from '@/components/FloatCta';
import { Effects } from '@/components/Effects';
import { asset, siteUrl } from '@/lib/site';

const fonts =
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Inter+Tight:wght@200;300;400;500&family=Newsreader:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Oribi',
  description:
    'Oribi builds and operates food production and processing in Namibia that replaces imports, and is building the next projects across Southern Africa.',
  icons: { icon: asset('/assets/img/favicon.png'), apple: asset('/assets/img/apple-touch-icon.png') },
  openGraph: { type: 'website', siteName: 'Oribi', images: [asset('/assets/img/aerial-oblique-900.jpg')] },
};

export const viewport: Viewport = { themeColor: '#04203d' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" href={fonts} />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <FloatCta />
        <Effects />
      </body>
    </html>
  );
}
