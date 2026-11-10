import type { Metadata } from 'next';
import { CtaBand } from '@/components/CtaBand';
import Link from 'next/link';
import { Arrow } from '@/components/Arrow';
import { NextUp } from '@/components/NextUp';
import { asset } from '@/lib/site';

export const metadata: Metadata = {
  title: "The market: Africa imports what it can grow | Oribi",
  description: "Africa's food import bill, Namibia's import dependence, SADC's agri-food investment agenda and what the Oribi flagship's success demonstrates. Every figure is attributed.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero has-img">
        <div className="bg" data-parallax="0.1"><img src={asset("/assets/img/aerial-blue.jpg")} alt="Aerial view of the Oribi farm, greenhouse and net house" /></div>
        <div className="wrap">
          <div className="eyebrow reveal">The market</div>
          <h1 className="reveal" style={{ "--d": ".08s" }}>Africa imports <em>what it can grow.</em></h1>
          <p className="lede reveal" style={{ "--d": ".16s" }}>A continent holding most of the world's unused farmland still spends tens of billions a year buying food from somewhere else. Southern Africa is now organising capital to change that. Oribi is an early, working proof that it can be done.</p>
          <div className="hero-actions reveal" style={{ "--d": ".24s" }}><Link className="btn btn-primary" href="/investors#enquire">Request the investor briefing <Arrow /></Link><a className="btn btn-ghost" href="#continent">Read the data</a></div>
        </div>
      </section>
      <nav className="subnav" aria-label="On this page">
        <div className="wrap"><a href="#continent">Continent</a><a href="#namibia">Namibia</a><a href="#policy">Policy</a><a href="#sadc">SADC</a><a href="#trends">Trends</a><a href="#significance">Significance</a><a href="#sources">Sources</a> <Link className="cta" href="/investors#enquire">Investor briefing</Link></div>
      </nav>
      <section className="section" id="continent">
        <div className="wrap">
          <div className="sec-label reveal"><b>01</b> The continent</div>
          <div className="p-head">
            <h2 className="reveal" style={{ maxWidth: "18ch" }}>A wide gap between <em>land and plate.</em></h2>
            <p className="lead muted reveal" style={{ "--d": ".08s" }}>The paradox is well documented. The land, the climate and the demand are all in place. What is missing is production close enough to the customer to compete with a truck from somewhere else.</p>
          </div>
          <div className="figs" style={{ marginTop: "clamp(40px,5vw,72px)" }}>
            <div className="fig reveal"><span className="v"><span className="u">US$</span><span data-count="75">75</span><span className="u">bn</span></span><span className="l">spent on imported food each year, up from US$35 billion in 2015.</span><span className="src">African Development Bank figures, via Creamer Media, 25 Jan 2023</span></div>
            <div className="fig reveal" style={{ "--d": ".08s" }}><span className="v"><span data-count="65">65</span>%</span><span className="l">of the world's uncultivated arable land sits in Africa.</span><span className="src">Dr Akinwumi Adesina, AfDB President, Borlaug Dialogue, reported 6 Nov 2023</span></div>
            <div className="fig reveal" style={{ "--d": ".16s" }}><span className="v"><span className="u">US$</span><span data-count="1">1</span><span className="u">trn</span></span><span className="l">projected value of Africa's food and agribusiness sector by 2030.</span><span className="src">AfDB President, as above. A projection, not a forecast we rely on</span></div>
          </div>
          <div className="split" style={{ marginTop: "clamp(48px,6vw,88px)", alignItems: "center" }}>
            <div className="bars">
              <div className="bar-row">
                <div className="lbl"><span>Food import bill, 2015</span><span>US$35 bn</span></div>
                <div className="bar alt"><i style={{ "--w": "46.7%" }}></i></div>
              </div>
              <div className="bar-row">
                <div className="lbl"><span>Food import bill, early 2023</span><span>US$75 bn</span></div>
                <div className="bar"><i style={{ "--w": "100%" }}></i></div>
              </div>
            </div>
            <p className="muted reveal" style={{ margin: "0" }}>Demand grows with cities and incomes while supply chains stay long and import-dependent. Import substitution is the most direct way to capture that demand, and the shortest route to a price the shopper notices.</p>
          </div>
        </div>
      </section>
      <div className="bigtext" aria-hidden="true"><span className="row">Grown somewhere else. <em>Paid for here.</em> Grown somewhere else.</span></div>
      <section className="section navy grain" id="namibia">
        <div className="wrap">
          <div className="sec-label reveal"><b>02</b> Namibia</div>
          <h2 className="reveal" style={{ maxWidth: "20ch" }}>Ninety-seven of every hundred pieces of fruit <em>arrive by road.</em></h2>
          <div className="split top" style={{ marginTop: "clamp(40px,5vw,64px)", alignItems: "center" }}>
            <div>
              <div className="dots" data-dots="97"></div>
              <div className="dots-key"><span className="on"><i></i>Imported fruit</span> <span><i></i>Grown in Namibia</span></div>
            </div>
            <div>
              <p className="lead reveal" style={{ marginBottom: "0" }}>Namibia is not short of appetite. It is short of local supply, and the cost of starting it is the barrier: establishing a commercial fruit orchard runs to between N$300,000 and N$600,000 a hectare.</p>
              <p className="src">Namibian Agronomic Board (Gilbert Mulonda), reported by The Brief, 17 Jul 2026</p>
            </div>
          </div>
          <div className="figs" style={{ marginTop: "clamp(44px,5vw,72px)" }}>
            <div className="fig reveal"><span className="v"><span className="u">About</span><span data-count="70">70</span>%</span><span className="l">of potatoes are imported, roughly N$162 million a year for one staple.</span><span className="src">Namibian Agronomic Board, via The Brief, 17 Jul 2026</span></div>
            <div className="fig reveal" style={{ "--d": ".08s" }}><span className="v"><span data-count="53">53</span>%</span><span className="l">of formal fresh-produce demand is imported, mainly from South Africa. Formal trade only.</span><span className="src">NAB, Market Share Promotion page</span></div>
            <div className="fig reveal" style={{ "--d": ".16s" }}><span className="v"><span className="u">N$</span><span data-count="600">600</span><span className="u">k</span></span><span className="l">a hectare at the top of the range to establish a commercial orchard, which is why local supply stays thin.</span><span className="src">NAB, via The Brief, 17 Jul 2026</span></div>
          </div>
        </div>
      </section>
      <section className="band grain" aria-label="Fresh produce">
        <img src={asset("/assets/img/tex-herbs-marble.jpg")} alt="" loading="lazy" aria-hidden="true" />
        <div className="wrap">
          <div className="sec-label reveal">The opportunity</div>
          <p className="q reveal" style={{ "--d": ".06s" }}>Every box that does not have to cross a border is a margin that does not have to be paid away.</p>
          <p className="by reveal" style={{ "--d": ".12s" }}>Why import substitution is the thesis</p>
        </div>
      </section>
      <section className="section" id="policy">
        <div className="wrap">
          <div className="sec-label reveal"><b>03</b> A deliberate policy</div>
          <div className="split top">
            <div>
              <h2 className="reveal" style={{ maxWidth: "16ch" }}>Local share of the market, <em>raised step by step.</em></h2>
              <p className="lead reveal" style={{ "--d": ".08s" }}>Under the Market Share Promotion scheme, importers, wholesalers and retailers must buy a minimum share of their fresh fruit and vegetables from Namibian growers each quarter to keep unrestricted import permits. The minimum has risen from 5% at the start to 47% today.</p>
              <p className="muted reveal" style={{ "--d": ".12s" }}>For a grower that can hold retail specification in volume, that is not a subsidy. It is a buyer with an obligation to find local supply.</p>
              <p className="src">Namibian Agronomic Board, Market Share Promotion page</p>
            </div>
            <div className="bars">
              <div className="bar-row">
                <div className="lbl"><span>2005</span><span>5%</span></div>
                <div className="bar"><i style={{ "--w": "5%" }}></i></div>
              </div>
              <div className="bar-row">
                <div className="lbl"><span>2012</span><span>37.5%</span></div>
                <div className="bar"><i style={{ "--w": "37.5%" }}></i></div>
              </div>
              <div className="bar-row">
                <div className="lbl"><span>2014</span><span>41.5%</span></div>
                <div className="bar"><i style={{ "--w": "41.5%" }}></i></div>
              </div>
              <div className="bar-row">
                <div className="lbl"><span>2016 to 2018</span><span>44%</span></div>
                <div className="bar"><i style={{ "--w": "44%" }}></i></div>
              </div>
              <div className="bar-row">
                <div className="lbl"><span>2019 onward</span><span>47%</span></div>
                <div className="bar alt"><i style={{ "--w": "47%" }}></i></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section navy grain" id="sadc">
        <div className="wrap">
          <div className="sec-label reveal"><b>04</b> Southern Africa</div>
          <div className="p-head">
            <h2 className="reveal" style={{ maxWidth: "22ch" }}>The region is already <em>packaging the opportunity</em> for investors.</h2>
            <p className="lead reveal" style={{ "--d": ".08s" }}>In October 2025 the SADC Secretariat and the FAO presented regional agri-food investment cases in Rome, deliberately framed as bankable projects for investors and development finance institutions. The four themes show where the region itself sees the gap.</p>
          </div>
          <div className="figs" style={{ marginTop: "clamp(40px,5vw,64px)" }}>
            <div className="fig reveal"><span className="v"><span className="u">US$</span>0.6<span className="u">bn</span></span><span className="l">Irrigation</span></div>
            <div className="fig reveal" style={{ "--d": ".06s" }}><span className="v"><span className="u">US$</span>0.3<span className="u">bn</span></span><span className="l">Mechanisation</span></div>
            <div className="fig reveal" style={{ "--d": ".12s" }}><span className="v"><span className="u">US$</span>0.4<span className="u">bn</span></span><span className="l">Agro-processing</span></div>
            <div className="fig reveal" style={{ "--d": ".18s" }}><span className="v"><span className="u">US$</span>0.8<span className="u">bn</span></span><span className="l">Trade facilitation</span></div>
          </div>
          <div className="split" style={{ marginTop: "clamp(40px,5vw,64px)", alignItems: "center" }}>
            <p className="muted" style={{ margin: "0" }}>About US$2.1 billion in total, with 7.8 million direct beneficiaries projected across the portfolio. These are investment cases rather than committed funds, but they show an organised regional pipeline where there used to be none.</p>
            <p className="src" style={{ margin: "0" }}>SADC Secretariat and FAO, Hand-in-Hand Investment Forum, Rome, 15 Oct 2025 (article dated 20 Oct 2025)</p>
          </div>
        </div>
      </section>
      <section className="section tint">
        <div className="wrap">
          <div className="sec-label reveal"><b>05</b> Why resilience matters</div>
          <div className="split" style={{ alignItems: "center" }}>
            <div>
              <h2 className="reveal" style={{ maxWidth: "16ch" }}>The 2024 drought <em>made the case.</em></h2>
              <p className="lead reveal" style={{ "--d": ".08s" }}>An El Niño drought in 2024 affected about 68 million people across Southern Africa, according to SADC, and wiped out crops across the region. SADC declared a regional emergency and called for scaled assistance; close to 4 million children were projected to suffer from wasting.</p>
              <p className="muted reveal" style={{ "--d": ".12s" }}>Production that uses a fraction of the water, under cover, close to the customer, is a direct answer to that risk rather than a hedge against it.</p>
              <p className="src">SADC statement reported 17 Aug 2024; SADC roundtable, Victoria Falls, 28 Nov 2024 (article dated 2 Dec 2024)</p>
            </div>
            <figure className="photo tall px reveal-img">
              <img src={asset("/assets/img/aerial-oblique.jpg")} alt="The Oribi farm in its dry Namibian setting" loading="lazy" />
              <figcaption>Okahandja · up to 90% less water than field farming</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="section navy grain" id="trends">
        <div className="wrap">
          <div className="sec-label reveal"><b>06</b> The trends</div>
          <h2 className="reveal" style={{ maxWidth: "22ch" }}>Protected cropping is <em>growing fast</em> from a small base.</h2>
          <div className="split top" style={{ marginTop: "clamp(40px,5vw,64px)" }}>
            <div>
              <div className="k">Africa, controlled-environment agriculture</div>
              <div className="bars">
                <div className="bar-row">
                  <div className="lbl"><span>2025 (estimate)</span><span>US$1.80 bn</span></div>
                  <div className="bar alt"><i style={{ "--w": "37.3%" }}></i></div>
                </div>
                <div className="bar-row">
                  <div className="lbl"><span>2032 (forecast)</span><span>US$4.82 bn</span></div>
                  <div className="bar"><i style={{ "--w": "100%" }}></i></div>
                </div>
              </div>
              <p className="muted" style={{ marginTop: "24px" }}>Forecast growth of 15.07% a year over 2026 to 2032.</p>
              <p className="src">BlueWeave Consulting, 5 Feb 2026. Market-research estimate</p>
            </div>
            <div>
              <div className="k">Global aquaponics</div>
              <div className="fig" style={{ borderTopColor: "rgba(255,255,255,.28)" }}><span className="v"><span className="u">US$</span><span data-count="2.29" data-decimals="2">2.29</span><span className="u">bn by 2030</span></span> <span className="l">Forecast growth of 13.5% a year over 2025 to 2030.</span> <span className="src">Grand View Research, Nov 2024. Market-research estimate</span></div>
              <p className="muted" style={{ marginTop: "28px" }}>Market-research forecasts differ between publishers and are estimates, not guarantees. We show them as a direction of travel, never as a projection for Oribi.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="band grain" aria-label="Produce detail">
        <img src={asset("/assets/img/tex-lettuce-green.jpg")} alt="" loading="lazy" aria-hidden="true" />
        <div className="wrap">
          <div className="sec-label reveal">From data to a crop</div>
          <p className="q reveal" style={{ "--d": ".06s" }}>All of the above is the case for doing it. Okahandja is the evidence that it works.</p>
          <p className="by reveal" style={{ "--d": ".12s" }}>Asset One · Okahandja, Namibia</p>
        </div>
      </section>
      <section className="section" id="significance">
        <div className="wrap">
          <div className="sec-label reveal"><b>07</b> The significance</div>
          <p className="words wide">Asset One is not a pilot. It is <em>a working answer</em> to the question every investor asks first: can it actually be done here?</p>
          <ol className="unlock">
            <li className="reveal">
              <span className="n">01</span>
              <div>
                <h3>Operating at scale</h3>
                <span className="kv">Built, not proposed</span>
              </div>
              <p>9,500 m² under cover, six independent growing systems and 35 jobs, 22 of them permanent, in one of the driest countries on the continent.</p>
            </li>
            <li className="reveal" style={{ "--d": ".06s" }}>
              <span className="n">02</span>
              <div>
                <h3>Retail standard</h3>
                <span className="kv">On the shelf since 2023</span>
              </div>
              <p>Supplying Namibian retailers every week of the year, Local GAP certified under Primary Farm Assurance and registered with the Namibian Agronomic Board.</p>
            </li>
            <li className="reveal" style={{ "--d": ".12s" }}>
              <span className="n">03</span>
              <div>
                <h3>A measurable market effect</h3>
                <span className="kv">Price down, quality up</span>
              </div>
              <p>We estimate fancy lettuce in Namibia now costs 30 to 50% less than before we entered the market in late 2023, and quality rose as the price fell.</p>
            </li>
            <li className="reveal" style={{ "--d": ".18s" }}>
              <span className="n">04</span>
              <div>
                <h3>A repeatable playbook</h3>
                <span className="kv">The next asset starts here</span>
              </div>
              <p>Water, nutrients, data, food safety and packing, proven in a hard growing climate against a real import gap. That is the part which travels to the next project.</p>
            </li>
          </ol>
          <p className="muted narrow reveal" style={{ marginTop: "36px" }}>Oribi addresses one part of a much larger import gap. Its value to the collective is the proof: a team, a method and a supply relationship that already work, ready to be repeated. <Link href="/flagship">See the flagship in detail.</Link></p>
        </div>
      </section>
      <section className="section tint" id="sources">
        <div className="wrap">
          <div className="sec-label reveal"><b>08</b> Sources</div>
          <h2 className="reveal" style={{ maxWidth: "20ch" }}>Every figure, <em>attributed.</em></h2>
          <p className="muted narrow reveal" style={{ "--d": ".08s", marginTop: "16px" }}>Third-party figures are listed with their publisher and date so they can be checked. Market-research forecasts are estimates and are labelled as such.</p>
          <ul className="facts reveal" style={{ marginTop: "36px" }}>
            <li><span>Africa food import bill, US$35bn (2015) to US$75bn</span><span><a href="https://newsletter.en.creamermedia.com/article/africa-needs-up-to-65bn-in-loans-every-year-to-curb-food-imports-2023-01-25" rel="noopener" target="_blank">Creamer Media, 25 Jan 2023</a></span></li>
            <li><span>US$1 trillion by 2030; 65% of uncultivated arable land</span><span><a href="https://millingmea.com/africa-food-and-agribusiness-sectors-worth-to-reach-us1-trillion-by-2030-afdb/" rel="noopener" target="_blank">Milling Middle East &amp; Africa, 6 Nov 2023</a></span></li>
            <li><span>97% of fruit imported; potatoes about 70%; orchard entry cost</span><span><a href="https://thebrief.com.na/2026/07/namibia-imports-97-of-its-fruit-as-n600000-entry-costs-stall-local-production/" rel="noopener" target="_blank">The Brief, 17 Jul 2026</a></span></li>
            <li><span>Market Share Promotion: 47%, history, 53% imported</span><span><a href="https://www.nab.com.na/horticulture/market-share-price/" rel="noopener" target="_blank">Namibian Agronomic Board</a></span></li>
            <li><span>US$2.1bn regional investment cases, 7.8m beneficiaries</span><span><a href="https://www.sadc.int/latest-news/sadc-secretariat-and-fao-pitch-mobilise-us-21-billion-regional-investments-projects" rel="noopener" target="_blank">SADC Secretariat, 20 Oct 2025</a></span></li>
            <li><span>2024 drought: regional emergency, child wasting</span><span><a href="https://sadc.int/latest-news/southern-africa-drought-sadc-and-humanitarian-partners-call-scaled-assistance-and" rel="noopener" target="_blank">SADC Secretariat, 2 Dec 2024</a></span></li>
            <li><span>2024 drought: about 68 million people affected</span><span><a href="https://www.thestar.com.my/news/world/2024/08/17/nearly-68-million-suffering-from-drought-in-southern-africa-says-regional-bloc" rel="noopener" target="_blank">The Star (Malaysia), 17 Aug 2024</a></span></li>
            <li><span>Africa CEA market, US$4.82bn by 2032</span><span><a href="https://www.blueweaveconsulting.com/press-release/africa-controlled-environment-agriculture-cea-market-to-surpass-usd-4-8-billion-by-2032" rel="noopener" target="_blank">BlueWeave Consulting, 5 Feb 2026</a></span></li>
            <li><span>Global aquaponics, US$2.29bn by 2030</span><span><a href="https://www.grandviewresearch.com/press-release/global-aquaponics-market" rel="noopener" target="_blank">Grand View Research, Nov 2024</a></span></li>
          </ul>
          <p className="muted narrow reveal" style={{ marginTop: "28px" }}>Oribi figures (area, systems, jobs, certifications) are company figures. The lettuce price effect is an Oribi estimate. Nothing on this page is an offer or invitation to invest.</p>
        </div>
      </section>
      <CtaBand label="Next step" title={<>See where the gap <em>meets the team.</em></>} secondary={{ href: "/flagship", label: "See the flagship" }}>
        Investors, development finance institutions and operating partners are welcome to ask for the briefing. Participation is by conversation and subject to documentation.
      </CtaBand>
      <NextUp href="/investors" title="Invest with Oribi: Namibia first, Southern Africa next" />
    </>
  );
}
