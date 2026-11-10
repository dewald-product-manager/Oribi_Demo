import type { Metadata } from 'next';
import { EnquiryForm } from '@/components/EnquiryForm';
import Link from 'next/link';
import { Arrow } from '@/components/Arrow';
import { NextUp } from '@/components/NextUp';
import { asset } from '@/lib/site';

export const metadata: Metadata = {
  title: "Invest with Oribi: Namibia first, Southern Africa next",
  description: "Oribi is a collective of investors and operators building Namibia's capacity to grow and process its own food. Partnerships and investment are handled by conversation.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero has-img">
        <div className="bg" data-parallax="0.1"><img src={asset("/assets/img/aerial-oblique.jpg")} alt="Aerial view of the Oribi farm in its dry Namibian setting" /></div>
        <div className="wrap">
          <div className="eyebrow reveal">Partnerships and investment</div>
          <h1 className="reveal" style={{ "--d": ".08s" }}>A team that has <em>already built it.</em></h1>
          <p className="lede reveal" style={{ "--d": ".16s" }}>Most opportunities in this region ask you to fund a plan. This one asks you to inspect a farm. Our first asset, in Okahandja, operates at scale, and the next projects are being structured now, with investors, development finance institutions and operating partners who see the same gap.</p>
          <div className="hero-actions reveal" style={{ "--d": ".24s" }}><a className="btn btn-primary" href="#enquire">Request the investor briefing <Arrow /></a></div>
        </div>
      </section>
      <nav className="subnav" aria-label="On this page">
        <div className="wrap"><a href="#asset">The asset</a><a href="#thesis">Thesis</a><a href="#namibia">Why Namibia</a><a href="#sadc">South Africa and SADC</a><a href="#process">Process</a><a href="#references">References</a> <a className="cta" href="#enquire">Investor briefing</a></div>
      </nav>
      <section className="section navy" id="asset">
        <div className="wrap">
          <div className="sec-label reveal"><b>01</b> Asset One</div>
          <h2 className="reveal" style={{ maxWidth: "22ch" }}>Before the pitch, <em>an inventory.</em></h2>
          <div className="grid g4" style={{ marginTop: "48px" }}>
            <div className="reveal">
              <div className="stat-big"><span data-count="9500" data-format="group">9,500</span></div>
              <p className="muted">m² under cover, one site</p>
            </div>
            <div className="reveal" style={{ "--d": ".08s" }}>
              <div className="stat-big"><span data-count="6">6</span></div>
              <p className="muted">independent growing systems</p>
            </div>
            <div className="reveal" style={{ "--d": ".16s" }}>
              <div className="stat-big"><span data-count="35">35</span></div>
              <p className="muted">jobs, 22 permanent</p>
            </div>
            <div className="reveal" style={{ "--d": ".24s" }}>
              <div className="stat-big">2</div>
              <p className="muted">certifications: Local GAP and Namibian Agronomic Board registration</p>
            </div>
          </div>
          <p className="reveal narrow" style={{ marginTop: "32px" }}>The farm began supplying Namibian retailers in late 2023 and doubled its growing area in 2026. Figures describe capacity and structure, not sales. <Link href="/flagship">See the farm in detail.</Link></p>
        </div>
      </section>
      <section className="section tint" id="thesis">
        <div className="wrap split">
          <div>
            <div className="sec-label reveal"><b>02</b> The thesis</div>
            <h2 className="reveal">Import <em>substitution.</em></h2>
            <p className="lead reveal">The simplest thesis in the book: Namibia buys in much of its fresh and processed food, so grow and process it locally, shorten the chain, and let the saving show up on the shelf.</p>
            <p className="muted reveal">We estimate fancy lettuce in Namibia now costs 30 to 50% less than before we entered the market in late 2023, and quality rose as the price fell. That is the evidence for the model.</p>
          </div>
          <div className="card reveal">
            <div className="k">Method, product and thesis are separate</div>
            <ul className="facts" style={{ marginTop: "20px" }}>
              <li><span>Thesis</span><span>Replace imports with local production and processing</span></li>
              <li><span>First asset</span><span>Oribi Aquaponics, Okahandja</span></li>
              <li><span>Method</span><span>Aquaponics and net-house growing</span></li>
              <li><span>Pipeline</span><span>Further projects in development</span></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <p className="words wide">Investors back <em>execution.</em> Oribi has built the first asset, runs it on data, and is structuring the next.</p>
          <div className="prod-grid" style={{ marginTop: "clamp(48px,7vw,96px)" }}>
            <figure className="photo a px reveal-img">
              <img src={asset("/assets/img/beds-wide.jpg")} alt="Rows of lettuce under the greenhouse roof" loading="lazy" />
              <figcaption>Aquaponic greenhouse</figcaption>
            </figure>
            <figure className="photo b px reveal-img" style={{ transitionDelay: ".1s" }}>
              <img src={asset("/assets/img/team-hairnets.jpg")} alt="Growers tending lettuce beds" loading="lazy" style={{ objectPosition: "60% 50%" }} />
              <figcaption>35 people, 22 permanent</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="section" id="namibia">
        <div className="wrap">
          <div className="sec-label reveal"><b>03</b> Why Namibia first</div>
          <h2 className="reveal" style={{ maxWidth: "24ch" }}>A proving ground for <em>Southern Africa.</em></h2>
          <div className="grid g3" style={{ marginTop: "48px" }}>
            <div className="card reveal">
              <h3>A real import gap</h3>
              <p className="muted">Fresh produce reaches Namibian shelves by road, often from more than a thousand kilometres away. A local producer at retail scale and standard changes the price and the freshness.</p>
            </div>
            <div className="card reveal" style={{ "--d": ".08s" }}>
              <h3>Policy pulls the same way</h3>
              <p className="muted">The Namibian Agronomic Board's Market Share Promotion scheme requires traders to buy a minimum share of fresh produce locally. The minimum is currently 47% (Namibian Agronomic Board). <Link href="/market#namibia">See the market data.</Link></p>
            </div>
            <div className="card reveal" style={{ "--d": ".16s" }}>
              <h3>A playbook that travels</h3>
              <p className="muted">What we learned in the dry Okahandja climate (water, nutrients, data, food safety, packing) applies wherever imports are expensive to move and quick to spoil.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section tint" id="sadc">
        <div className="wrap split">
          <div>
            <div className="sec-label reveal"><b>04</b> South Africa and the wider SADC</div>
            <h2 className="reveal">Looking at South Africa? <em>Let us compare notes.</em></h2>
            <p className="lead reveal">Namibia and South Africa trade closely, and many Namibian shelves are still stocked from across the border. Our energy partner already finances and operates commercial solar systems in Namibia, South Africa and Botswana.</p>
            <p className="muted reveal">We have no South African project to announce. We are developing further projects, and we want to hear from investors and operators who are looking at South Africa or elsewhere in the region, particularly where the model of local production and processing replacing imports can be repeated.</p>
          </div>
          <div className="card reveal" style={{ background: "var(--navy)", color: "#fff", border: "0" }}>
            <div className="k">Regional context</div>
            <p style={{ color: "rgba(255,255,255,.85)" }}>Regional institutions have put agricultural investment on the SADC agenda. In October 2025 the SADC Secretariat and the FAO presented a joint investment proposal of about US$2.1 billion for irrigation, mechanisation, agro-processing and trade integration. These are third-party reports, linked below.</p>
            <p style={{ margin: "18px 0 0" }}><Link className="clink" style={{ color: "#b8e08c" }} href="/market"><span>The full market data</span><Arrow /></Link></p>
          </div>
        </div>
      </section>
      <section className="band grain" aria-label="The opportunity">
        <img src={asset("/assets/img/tex-lettuce-rows.jpg")} alt="" loading="lazy" aria-hidden="true" />
        <div className="wrap">
          <div className="sec-label reveal">The thesis in one line</div>
          <p className="q reveal" style={{ "--d": ".06s" }}>Build where the food is already being bought, and grow it closer than the next truck can.</p>
          <p className="by reveal" style={{ "--d": ".12s" }}>Namibia first · Southern Africa next</p>
        </div>
      </section>
      <section className="section" id="process">
        <div className="wrap">
          <div className="sec-label reveal"><b>05</b> How a conversation works</div>
          <div className="steps invest" style={{ marginTop: "48px" }}>
            <div className="step reveal">
              <h3>Enquire</h3>
              <p>Tell us who you are and what you are looking at.</p>
            </div>
            <div className="step reveal" style={{ "--d": ".08s" }}>
              <h3>Introduce</h3>
              <p>A short call with the Oribi team.</p>
            </div>
            <div className="step reveal" style={{ "--d": ".16s" }}>
              <h3>Visit</h3>
              <p>See the farm, by appointment.</p>
            </div>
            <div className="step reveal" style={{ "--d": ".24s" }}>
              <h3>Review</h3>
              <p>Investor information is shared on request, subject to documentation.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section tint" id="enquire">
        <div className="wrap split top">
          <div className="sticky-col">
            <div className="sec-label reveal"><b>06</b> Partnerships and investment</div>
            <h2 className="reveal">Request the <em>investor briefing.</em></h2>
            <p className="muted reveal">This is an enquiry, not an application. A member of the Oribi team replies personally, usually with a short introductory call and, where it fits, a farm visit. Investor information is shared on request and subject to documentation.</p>
            <p className="reveal" style={{ marginTop: "28px" }}><Link className="clink" href="/contact"><span>Prefer to talk first? See all the ways to reach us</span><Arrow /></Link></p>
          </div>
          <EnquiryForm />
        </div>
      </section>
      <section className="section" id="references">
        <div className="wrap">
          <div className="sec-label reveal"><b>07</b> References</div>
          <ul className="refs" style={{ marginTop: "32px" }}>
            <li className="reveal"><span className="src">HortiDaily · Nov 2025</span><a href="https://www.hortidaily.com/article/9786653/namibian-aquaponics-group-geared-for-regional-expansion" target="_blank" rel="noopener">Namibian aquaponics group geared for regional expansion</a><span className="arrow">↗</span></li>
            <li className="reveal"><span className="src">The Brief · May 2026</span><a href="https://thebrief.com.na/2026/05/namibian-investors-back-n2-2bn-hydroponics-project-to-cut-food-imports/" target="_blank" rel="noopener">Namibian investors back N$2.2bn hydroponics project to cut food imports</a><span className="arrow">↗</span></li>
            <li className="reveal"><span className="src">SADC · Oct 2025</span><a href="https://www.sadc.int/latest-news/sadc-secretariat-and-fao-pitch-mobilise-us-21-billion-regional-investments-projects" target="_blank" rel="noopener">SADC Secretariat and FAO pitch to mobilise US$ 2.1 billion for Regional Investments Projects to transform Agri-food Systems in Southern Africa</a><span className="arrow">↗</span></li>
          </ul>
          <p className="note reveal">External links are third-party reports. Oribi is not responsible for their content.</p>
        </div>
      </section>
      <NextUp href="/about" title="The team behind Oribi" />
    </>
  );
}
