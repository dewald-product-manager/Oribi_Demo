import type { Metadata } from 'next';
import Link from 'next/link';
import { Arrow } from '@/components/Arrow';

export const metadata: Metadata = {
  title: 'Page not found | Oribi',
  description: 'This page has moved or no longer exists.',
};

export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="wrap">
        <div className="eyebrow">Page not found</div>
        <h1>
          This page has <em>moved on.</em>
        </h1>
        <p className="lede">The link may be out of date. The farm, the market data and the team are all one click away.</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" href="/">
            Back to the beginning <Arrow />
          </Link>
          <Link className="btn btn-line" href="/flagship">
            See the flagship
          </Link>
        </div>
      </div>
    </section>
  );
}
