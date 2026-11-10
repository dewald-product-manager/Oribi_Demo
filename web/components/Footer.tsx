import Link from 'next/link';
import { Wordmark } from './Brand';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="top">
          <div className="f-brand">
            <Link className="flogo" href="/" aria-label="Oribi home">
              <Wordmark />
              <i aria-hidden="true" />
            </Link>
            <p>
              Namibian food, grown in Namibia.
              <br />
              Production and processing that replaces imports.
            </p>
          </div>
          <div>
            <h4>The story</h4>
            <ul>
              <li><Link href="/flagship">Flagship farm</Link></li>
              <li><Link href="/market">Market</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/about#press">Press</Link></li>
            </ul>
          </div>
          <div>
            <h4>Work with us</h4>
            <ul>
              <li><Link href="/investors">Investors</Link></li>
              <li><Link href="/investors#enquire">Partnerships and investment</Link></li>
              <li><Link href="/supply">Supply enquiry</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4>Head office</h4>
            <p>
              Unit 4, Mandela Offices
              <br />
              Corner of Nelson Mandela and Simón Bolívar Street
              <br />
              Windhoek, Namibia
            </p>
          </div>
        </div>
        <p className="disclaimer">
          Nothing on this website is an offer or invitation to invest, or financial, legal or tax advice.
          Participation in any Oribi project is by conversation and subject to documentation. Figures describe
          capacity and structure, not sales. Third-party figures are attributed to their sources.
        </p>
        <div className="legal">
          <span>
            © <span id="yr">2026</span> Oribi. All rights reserved.
          </span>
          <span>Local GAP certified under Primary Farm Assurance · Registered producer, Namibian Agronomic Board</span>
        </div>
      </div>
    </footer>
  );
}
