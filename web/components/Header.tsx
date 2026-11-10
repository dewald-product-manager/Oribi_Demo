import Link from 'next/link';
import { Arrow } from './Arrow';
import { Wordmark } from './Brand';
import { nav } from '@/lib/site';

export function Header() {
  return (
    <header className="site-header" id="top">
      <div className="wrap">
        <Link className="brand" href="/" aria-label="Oribi home">
          <Wordmark />
          <i className="brand-rule" aria-hidden="true" />
        </Link>
        <button className="menu-btn" type="button" aria-label="Open menu" aria-expanded="false" aria-controls="nav">
          <span />
        </button>
        <nav className="nav" id="nav" aria-label="Main">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} data-nav={item.href}>
              {item.label}
            </Link>
          ))}
          <Link className="btn btn-primary" href="/investors#enquire">
            Investor briefing <Arrow />
          </Link>
        </nav>
      </div>
    </header>
  );
}
