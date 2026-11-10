import type { Metadata } from 'next';
import Link from 'next/link';
import { Arrow } from '@/components/Arrow';
import { CtaBand } from '@/components/CtaBand';
import { Distance } from '@/components/Distance';
import { NextUp } from '@/components/NextUp';
import { PartnerWall } from '@/components/Partners';
import { PressList } from '@/components/Press';
import { Team } from '@/components/Team';
import { asset } from '@/lib/site';

export const metadata: Metadata = {
  title: "Oribi | Proven in Namibia, built to repeat",
  description: "Oribi builds and operates food production and processing in Namibia that replaces imports. Our first farm, outside Okahandja, supplies Namibia's major retailers all year.",
};

export default function Page() {
  return (
    <>
      <section className="hero">
        <div className="hero-media" data-parallax="0.12"><img src={asset("/assets/img/aerial-oblique.jpg")} alt="Aerial view of the Oribi farm outside Okahandja: white-roofed greenhouse bays, a green net house and solar panels in dry Namibian bushveld" fetchPriority="high" /></div>
        <div className="wrap hero-inner">
          <div className="eyebrow reveal">Namibia · Okahandja · Southern Africa</div>
          <h1 className="reveal" style={{ "--d": ".08s" }}>Proven in Namibia.<br /><em>Built to repeat.</em></h1>
          <p className="lede reveal" style={{ "--d": ".16s" }}>Namibia used to truck its salad in from 1,600 kilometres away. We built the farm that ended that: one of the largest commercial aquaponics facilities in Africa, with 9,500 m² under cover outside Okahandja. Now we are building the next one.</p>
          <div className="hero-actions reveal" style={{ "--d": ".24s" }}><Link className="btn btn-primary" href="/investors#enquire">Request the investor briefing <Arrow /></Link> <Link className="btn btn-ghost" href="/flagship">Explore the flagship</Link></div>
          <div className="proof">
            <div className="item">
              <div className="num"><span data-count="9500" data-format="group">9,500</span><small>m²</small></div>
              <div className="cap">under cover, in one of the driest countries on the continent</div>
            </div>
            <div className="item">
              <div className="num"><span data-count="12000" data-format="group">12,000</span><small>+</small></div>
              <div className="cap">lettuce plants planted out every week, as capacity</div>
            </div>
            <div className="item">
              <div className="num"><span className="pre">Up to</span><span data-count="90">90</span><small>%</small></div>
              <div className="cap">less water than field farming</div>
            </div>
            <div className="item">
              <div className="num"><span data-count="30">30</span>–<span data-count="50">50</span><small>%</small></div>
              <div className="cap">estimated fall in the price of fancy lettuce since we entered the market</div>
            </div>
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true">Scroll</div>
      </section>
      <section className="partners grain" aria-labelledby="partners-h">
        <div className="wrap">
          <div className="sec-label reveal">Our distribution partners</div>
          <div className="p-head">
            <h2 className="reveal" id="partners-h">On the shelves of the groups that <em>move Southern Africa's food.</em></h2>
            <p className="reveal" style={{ "--d": ".08s" }}>Some of the largest names in Southern African retail and wholesale. Nobody earns that shelf space on a promise. You earn it by meeting their specification, in volume, every week of the year. We have done it since 2023.</p>
          </div>
          <PartnerWall />
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="sec-label reveal"><b>01</b> The problem</div>
          <p className="words wide">A bag of salad leaves travelled 1,600 kilometres to reach a Windhoek shelf. <em>The shopper paid for every one of them.</em></p>
          <div className="split wide-l" style={{ marginTop: "clamp(48px,7vw,96px)" }}>
            <div>
              <p className="lead reveal">Namibia buys in much of its fresh food. Each kilometre adds cost, and each day on the road comes off the shelf life. By the time imported lettuce is on display, it is already old and already expensive.</p>
              <p className="muted reveal">Everyone in the trade knew it. The question was whether anyone could grow retail-grade produce, in volume, all year round, in one of the driest countries on the continent. We decided to find out.</p>
              <Link className="btn btn-line reveal" href="/market">See the size of the gap <Arrow /></Link>
            </div>
            <Distance />
          </div>
        </div>
      </section>
      <section className="section tint grain">
        <div className="wrap">
          <div className="split wide-r">
            <figure className="photo tall px reveal-img">
              <img src={asset("/assets/img/aerial-blue.jpg")} alt="Aerial view of the Oribi greenhouse bays and net house surrounded by Okahandja farmland" loading="lazy" />
              <figcaption>The Okahandja site · 9,500 m² under cover</figcaption>
            </figure>
            <div>
              <div className="sec-label reveal"><b>02</b> The answer</div>
              <h2 className="reveal">So we built the farm <em>70 kilometres away.</em></h2>
              <p className="lead reveal">A hatchery, a seedling house, a 5,000 m² aquaponic greenhouse, a 4,500 m² herb net house and a high-care packhouse, all on one site outside Okahandja.</p>
              <p className="muted reveal">It runs on its own off-grid solar system and is managed on data, batch by batch. We estimate fancy lettuce in Namibia now costs 30 to 50% less than before we entered the market in late 2023, and the quality went up as the price came down.</p>
              <Link className="btn btn-primary reveal" href="/flagship">Walk through the flagship <Arrow /></Link>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="sec-label reveal"><b>03</b> The people</div>
          <div className="p-head">
            <h2 className="reveal">Built by people who have <em>done this before.</em></h2>
            <p className="reveal" style={{ "--d": ".08s" }}>A chartered accountant, an advisory chairman, a grower with a national horticulture award and an energy financier. Around them, 35 people on the farm, 22 in permanent jobs, who still plant every seedling out by hand.</p>
          </div>
          <Team bios={false} />
          <p className="reveal" style={{ marginTop: "clamp(28px,4vw,44px)" }}><Link className="clink" href="/about"><span>Meet the team behind Oribi</span><Arrow /></Link></p>
        </div>
      </section>
      <section className="section navy grain">
        <div className="wrap">
          <div className="sec-label reveal"><b>04</b> The case</div>
          <div className="p-head">
            <h2 className="reveal">An operating asset, and a <em>platform</em> behind it.</h2>
            <p className="reveal" style={{ "--d": ".08s" }}>Most agricultural pitches ask you to believe in a plan. This one asks you to inspect a business. Four reasons the first farm is the foundation for the ones that follow.</p>
          </div>
          <div className="thesis" style={{ marginTop: "56px" }}>
            <div className="reveal">
              <div className="k">Track record</div>
              <h3>Built and trading</h3>
              <p>Supplying Namibian retailers every week since late 2023, with the growing area doubled in 2026.</p>
            </div>
            <div className="reveal" style={{ "--d": ".08s" }}>
              <div className="k">Integration</div>
              <h3>Seed to shelf, one site</h3>
              <p>Hatchery, seedlings, growing and a high-care packhouse under one management.</p>
            </div>
            <div className="reveal" style={{ "--d": ".16s" }}>
              <div className="k">Discipline</div>
              <h3>Run on data</h3>
              <p>More than 1,100 batch records and 470 days of packhouse logs since April 2025.</p>
            </div>
            <div className="reveal" style={{ "--d": ".24s" }}>
              <div className="k">Repeatability</div>
              <h3>A playbook for the next asset</h3>
              <p>The same logic applies wherever imports are costly to move and quick to spoil.</p>
            </div>
          </div>
          <div className="reveal" style={{ marginTop: "56px" }}><Link className="btn btn-primary" href="/investors#enquire">Request the investor briefing <Arrow /></Link></div>
        </div>
      </section>
      <section className="hscroll" aria-label="Gallery: the farm at work">
        <div className="hs-pin">
          <div className="hs-head">
            <div>
              <div className="sec-label"><b>05</b> See it for yourself</div>
              <h2>Not a rendering. <em>A working farm.</em></h2>
            </div>
            <div className="hs-count"><b>01</b>/ 09 <span className="hs-hint" style={{ marginLeft: "16px" }}>Keep scrolling</span></div>
          </div>
          <div className="hs-track">
            <figure className="hs-card wide">
              <img src={asset("/assets/img/beds-wide-900.jpg")} alt="Rows of green and red lettuce under the greenhouse roof" loading="lazy" />
              <figcaption><small>Aquaponic greenhouse</small>5,000 m² of floating-raft beds</figcaption>
            </figure>
            <figure className="hs-card">
              <img src={asset("/assets/img/raft-red-900.jpg")} alt="A raft of red oak lettuce seedlings being carried by a grower" loading="lazy" />
              <figcaption><small>Seedling house</small>Weekly sowing programme</figcaption>
            </figure>
            <figure className="hs-card">
              <img src={asset("/assets/img/hands-red-900.jpg")} alt="Hands planting a red lettuce seedling into a raft" loading="lazy" />
              <figcaption><small>Planting out</small>Placed by hand</figcaption>
            </figure>
            <figure className="hs-card wide">
              <img src={asset("/assets/img/team-hairnets-900.jpg")} alt="Two growers in hairnets tending lettuce in the greenhouse" loading="lazy" />
              <figcaption><small>The team</small>35 people, 22 permanent</figcaption>
            </figure>
            <figure className="hs-card">
              <img src={asset("/assets/img/spring-onions-900.jpg")} alt="Two workers bundling spring onions beside a raft bed" loading="lazy" />
              <figcaption><small>Spring onions</small>Sleeved in bunches</figcaption>
            </figure>
            <figure className="hs-card">
              <img src={asset("/assets/img/leeks-900.jpg")} alt="Leeks growing in the net house with bushveld beyond" loading="lazy" />
              <figcaption><small>Net house</small>4,500 m² of soil beds</figcaption>
            </figure>
            <figure className="hs-card wide">
              <img src={asset("/assets/img/aerial-oblique-900.jpg")} alt="Aerial view of the greenhouse bays" loading="lazy" />
              <figcaption><small>The site</small>Okahandja, 70 km north of Windhoek</figcaption>
            </figure>
            <figure className="hs-card">
              <img src={asset("/assets/img/batch-portrait-900.jpg")} alt="A grower in a green overall crouching beside a raft bed, with a hand-written batch sign" loading="lazy" style={{ objectPosition: "50% 30%" }} />
              <figcaption><small>Run on data</small>Every batch labelled, seed to pack</figcaption>
            </figure>
            <figure className="hs-card">
              <img src={asset("/assets/img/net-house-packing-900.jpg")} alt="Herbs being packed in the net house" loading="lazy" />
              <figcaption><small>Pack</small>Washed, dried, cold-chained</figcaption>
            </figure>
          </div>
          <div className="hs-bar"><i></i></div>
        </div>
      </section>
      <section className="section tint">
        <div className="wrap">
          <div className="sec-label reveal"><b>06</b> The record</div>
          <div className="p-head">
            <h2 className="reveal" style={{ maxWidth: "16ch" }}>Five things that are <em>already true.</em></h2>
            <p className="reveal" style={{ "--d": ".08s" }}>None of this is forecast. Each line below describes the farm as it stands today, and each can be checked on a site visit.</p>
          </div>
          <ol className="numbered" style={{ marginTop: "48px" }}>
            <li className="reveal">
              <span className="n">01</span>
              <h3>It works</h3>
              <p>A commercial agri-tech operation that reached scale and supplies retailers every week of the year. Phase 1B, which doubled the aquaponic growing area, completed in 2026.</p>
            </li>
            <li className="reveal">
              <span className="n">02</span>
              <h3>It replaces imports</h3>
              <p>Washed, packed lettuce that once came from South Africa is now grown in Namibia, at higher quality and at a price we estimate to be 30 to 50% lower.</p>
            </li>
            <li className="reveal">
              <span className="n">03</span>
              <h3>It is integrated</h3>
              <p>Hatchery, seedlings, growing, soil herbs and packing on one site, with six independent growing systems.</p>
            </li>
            <li className="reveal">
              <span className="n">04</span>
              <h3>It is run on data</h3>
              <p>Every batch is tracked from seed to pack. More than 1,100 batch records and 470 days of packhouse temperature logs since April 2025.</p>
            </li>
            <li className="reveal">
              <span className="n">05</span>
              <h3>It is certified</h3>
              <p>Local GAP certified under Primary Farm Assurance, and a registered producer with the Namibian Agronomic Board. 35 people work on the farm, 22 in permanent jobs.</p>
            </li>
          </ol>
        </div>
      </section>
      <section className="section navy grain" id="market-teaser">
        <div className="wrap">
          <div className="sec-label reveal"><b>07</b> The size of the gap</div>
          <div className="p-head">
            <h2 className="reveal">One farm closed one gap. <em>The gap is continental.</em></h2>
            <p className="reveal" style={{ "--d": ".08s" }}>Lettuce in Namibia was the first proof. The same imbalance, food bought far away that could be grown nearby, runs right across Southern Africa and the continent.</p>
          </div>
          <div className="figs" style={{ marginTop: "clamp(40px,5vw,64px)" }}>
            <div className="fig reveal"><span className="v"><span className="u">US$</span><span data-count="75">75</span><span className="u">bn</span></span><span className="l">Africa's annual food import bill.</span><span className="src">African Development Bank, 2023</span></div>
            <div className="fig reveal" style={{ "--d": ".08s" }}><span className="v"><span data-count="97">97</span>%</span><span className="l">of the fruit Namibians eat is imported.</span><span className="src">Namibian Agronomic Board, 2026</span></div>
            <div className="fig reveal" style={{ "--d": ".16s" }}><span className="v"><span data-count="53">53</span>%</span><span className="l">of Namibia's formal fresh-produce demand is imported.</span><span className="src">Namibian Agronomic Board</span></div>
            <div className="fig reveal" style={{ "--d": ".24s" }}><span className="v"><span className="u">US$</span><span data-count="2.1" data-decimals="1">2.1</span><span className="u">bn</span></span><span className="l">of agri-food investment cases presented for Southern Africa.</span><span className="src">SADC and FAO, Oct 2025</span></div>
          </div>
          <p className="reveal" style={{ marginTop: "40px" }}><Link className="btn btn-ghost" href="/market">Read the market data <Arrow /></Link></p>
        </div>
      </section>
      <div className="bigtext" aria-hidden="true"><span className="row">Namibia first. <em>Southern Africa next.</em> Namibia first.</span></div>
      <section className="section" id="press">
        <div className="wrap">
          <div className="sec-label reveal"><b>08</b> In the press</div>
          <div className="p-head">
            <h2 className="reveal">What the trade has <em>written about us.</em></h2>
            <p className="reveal" style={{ "--d": ".08s" }}>Independent coverage of the farm and of the plans for the next projects, from the horticulture and farming press.</p>
          </div>
          <PressList />
        </div>
      </section>
      <CtaBand number="09" label="The invitation" title={<>The first farm is built. <em>Help build the next.</em></>} secondary={{ href: "/supply", label: "Supply enquiry" }}>
        Oribi is a collective of investors and operators building the region's capacity to grow and process its own food. Further projects are in development. If you are an investor, a development finance institution or an operator who sees the same gap, the conversation starts with a briefing and a walk through the farm.
      </CtaBand>
      <NextUp href="/flagship" title="The flagship farm: a market gap, filled" />
    </>
  );
}
