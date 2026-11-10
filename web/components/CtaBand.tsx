import Link from 'next/link';
import type { ReactNode } from 'react';
import { Arrow } from './Arrow';

type Action = { href: string; label: string };

export function CtaBand({
  number,
  label = 'Next step',
  title,
  children,
  primary = { href: '/investors#enquire', label: 'Request the investor briefing' },
  secondary,
}: {
  number?: string;
  label?: string;
  title: ReactNode;
  children: ReactNode;
  primary?: Action;
  secondary?: Action;
}) {
  return (
    <section className="section cta-end">
      <div className="wrap">
        <div className="cta-band reveal">
          <div>
            <div className="sec-label">
              {number && <b>{number}</b>} {label}
            </div>
            <h2>{title}</h2>
            <p>{children}</p>
          </div>
          <div className="actions">
            <Link className="btn btn-primary" href={primary.href}>
              {primary.label} <Arrow />
            </Link>
            {secondary && (
              <Link className="btn btn-ghost" href={secondary.href}>
                {secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
