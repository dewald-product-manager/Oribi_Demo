import Link from 'next/link';
import { Arrow } from './Arrow';

/** Small persistent invitation, shown once the visitor is past the opening screen. */
export function FloatCta() {
  return (
    <Link className="float-cta" href="/investors#enquire">
      <span className="fc-text">
        <small>Asset One is operating</small>
        Request the investor briefing
      </span>
      <span className="fc-go">
        <Arrow />
      </span>
    </Link>
  );
}
