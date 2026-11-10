import Link from 'next/link';
import { Arrow } from './Arrow';

export function NextUp({ href, title }: { href: string; title: string }) {
  return (
    <section className="next-up">
      <Link className="wrap" href={href}>
        <span className="eyebrow-n">Next</span>
        <strong>{title}</strong>
        <span className="go">
          <Arrow />
        </span>
      </Link>
    </section>
  );
}
