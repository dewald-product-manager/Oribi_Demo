import type { Metadata } from 'next';
import { CtaBand } from '@/components/CtaBand';
import Link from 'next/link';
import { Arrow } from '@/components/Arrow';
import { NextUp } from '@/components/NextUp';
import { asset } from '@/lib/site';

export const metadata: Metadata = {
  title: "Contact Oribi: supply, partnerships and investment",
  description: "Talk to the right person first: supply and orders, partnerships and investment, or the head office in Windhoek. The farm is outside Okahandja and visits are by appointment.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero has-img">
        <div className="bg" data-parallax="0.1"><img src={asset("/assets/img/team-hairnets.jpg")} alt="Two Oribi growers in hairnets tending lettuce in the greenhouse" /></div>
        <div className="wrap">
          <div className="eyebrow reveal">Contact</div>
          <h1 className="reveal" style={{ "--d": ".08s" }}>Talk to the <em>right person first.</em></h1>
          <p className="lede reveal" style={{ "--d": ".16s" }}>Three ways in, depending on what you need. Each one goes to someone who can answer it rather than to a general inbox.</p>
          <div className="hero-actions reveal" style={{ "--d": ".24s" }}><Link className="btn btn-primary" href="/investors#enquire">Request the investor briefing <Arrow /></Link><a className="btn btn-ghost" href="#routes">See all three routes</a></div>
        </div>
      </section>
      <section className="section" id="routes">
        <div className="wrap">
          <div className="sec-label reveal"><b>01</b> How to reach us</div>
          <h2 className="reveal" style={{ maxWidth: "20ch" }}>Pick the route that <em>fits your question.</em></h2>
          <div className="routes">
            <div className="route reveal">
              <span className="idx">01</span>
              <div>
                <h3>Supply and orders</h3>
                <p>Weekly programmes, pack specifications, price lists and lead times for retailers, wholesalers and food service.</p>
              </div>
              <div className="det"><span className="who">Clifford Steyn, Sales</span> <a className="clink" href="tel:+264831666301"><span>+264 831 666 301</span><Arrow /></a> <a className="clink" href="mailto:clifford.steyn@oribi.com.na"><span>clifford.steyn@oribi.com.na</span><Arrow /></a> <Link className="clink" href="/supply"><span>What we supply</span><Arrow /></Link></div>
            </div>
            <div className="route reveal" style={{ "--d": ".06s" }}>
              <span className="idx">02</span>
              <div>
                <h3>Partnerships and investment</h3>
                <p>For investors, development finance institutions and operating partners. Investor information is available on request, and participation is by conversation and subject to documentation.</p>
              </div>
              <div className="det">
                <Link className="clink" href="/investors#enquire"><span>Request the investor briefing</span><Arrow /></Link> <Link className="clink" href="/market"><span>The market data behind it</span><Arrow /></Link>
                <p className="note" style={{ margin: "4px 0 0" }}>A named contact for this route is added before launch.</p>
              </div>
            </div>
            <div className="route reveal" style={{ "--d": ".12s" }}>
              <span className="idx">03</span>
              <div>
                <h3>Everything else</h3>
                <p>Press, careers, site visits and general enquiries. If you are not sure which route you need, start here and we will pass it on.</p>
              </div>
              <div className="det">
                <span className="who">Head office, Windhoek</span> <a className="clink" href="#offices"><span>Office address</span><Arrow /></a>
                <p className="note" style={{ margin: "4px 0 0" }}>The office number and general email address are confirmed before launch.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="band grain" aria-label="Visit the farm">
        <img src={asset("/assets/img/aerial-oblique.jpg")} alt="" loading="lazy" aria-hidden="true" />
        <div className="wrap">
          <div className="sec-label reveal">Come and see it</div>
          <p className="q reveal" style={{ "--d": ".06s" }}>The quickest way to understand the asset is to stand in it.</p>
          <p className="by reveal" style={{ "--d": ".12s" }}>Okahandja · 70 km north of Windhoek · visits by appointment</p>
          <div className="hero-actions reveal" style={{ "--d": ".18s", margin: "30px 0 0" }}><a className="btn btn-primary" href="mailto:clifford.steyn@oribi.com.na?subject=Farm%20visit%20request">Arrange a visit <Arrow /></a></div>
        </div>
      </section>
      <section className="section" id="offices">
        <div className="wrap">
          <div className="sec-label reveal"><b>02</b> Where we are</div>
          <h2 className="reveal" style={{ maxWidth: "18ch" }}>An office and <em>a farm.</em></h2>
          <div className="locs">
            <div className="loc reveal">
              <h3>Head office</h3>
              <p>Unit 4, Mandela Offices<br />Corner of Nelson Mandela and Simón Bolívar Street<br />Windhoek, Namibia</p>
              <p>P.O. Box 90693, Klein Windhoek</p>
              <span className="meta">Weekdays, by appointment</span>
            </div>
            <div className="loc reveal" style={{ "--d": ".08s" }}>
              <h3>The farm</h3>
              <p>Outside Okahandja, 70 kilometres north of Windhoek on the B1. The hatchery, greenhouse, net house and packhouse are all on the one site.</p>
              <p>Visits are arranged in advance so that someone can walk you through the full process.</p>
              <span className="meta">Visits by appointment</span>
            </div>
          </div>
          <div className="grid g2" style={{ marginTop: "clamp(40px,5vw,64px)" }}>
            <figure className="photo std px reveal-img">
              <img src={asset("/assets/img/net-house-packing-900.jpg")} alt="A team member packing herbs in the net house" loading="lazy" />
              <figcaption>The packhouse</figcaption>
            </figure>
            <figure className="photo std px reveal-img" style={{ transitionDelay: ".12s" }}>
              <img src={asset("/assets/img/aerial-blue-900.jpg")} alt="Aerial view of the Oribi greenhouse bays and net house" loading="lazy" />
              <figcaption>The Okahandja site</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <CtaBand label="Next step" title={<>Still deciding <em>who to ask?</em></>} secondary={{ href: "/about", label: "Meet the team" }}>
        Send the investor enquiry and we will route it. It reaches the people who built and run the farm, not a call centre.
      </CtaBand>
      <NextUp href="/" title="Back to the beginning: proven in Namibia, built to repeat" />
    </>
  );
}
