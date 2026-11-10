import type { Metadata } from 'next';
import { CtaBand } from '@/components/CtaBand';
import Link from 'next/link';
import { Arrow } from '@/components/Arrow';
import { NextUp } from '@/components/NextUp';
import { asset } from '@/lib/site';

export const metadata: Metadata = {
  title: "The Oribi farm, Okahandja: a market gap, filled",
  description: "Namibia imports much of its fresh food. The Oribi farm outside Okahandja grows it locally: 9,500 m\u00b2 under cover, a hatchery, greenhouse, net house and high-care packhouse on one off-grid site.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero has-img">
        <div className="bg" data-parallax="0.1"><img src={asset("/assets/img/aerial-blue.jpg")} alt="Aerial view of the Oribi farm outside Okahandja, with the greenhouse bays and net house in farmland" /></div>
        <div className="wrap">
          <div className="eyebrow reveal">Flagship · Okahandja, Namibia</div>
          <h1 className="reveal" style={{ "--d": ".08s" }}>A market gap, <em>filled.</em></h1>
          <p className="lede reveal" style={{ "--d": ".16s" }}>This is the asset the rest of the site keeps pointing at. A farm 70 km north of Windhoek that grows, at home, what Namibia used to import: one of the largest commercial aquaponics facilities in Africa, with 9,500 m² under cover and six independent growing systems.</p>
          <div className="hero-actions reveal" style={{ "--d": ".24s" }}><Link className="btn btn-primary" href="/investors#enquire">Request the investor briefing <Arrow /></Link></div>
        </div>
      </section>
      <nav className="subnav" aria-label="On this page">
        <div className="wrap"><a href="#problem">Problem</a><a href="#gap">Gap</a><a href="#solution">Solution</a><a href="#proof">Proof</a><a href="#opportunity">Opportunity</a><a href="#method">Method</a><a href="#data">Data</a> <Link className="cta" href="/investors#enquire">Investor briefing</Link></div>
      </nav>
      <section className="section" id="problem">
        <div className="wrap">
          <div className="sec-label reveal"><b>01</b> The problem</div>
          <p className="words wide">Fresh food that travels more than a thousand kilometres arrives <em>dearer and older.</em></p>
          <div className="grid g3" style={{ marginTop: "clamp(48px,7vw,88px)" }}>
            <div className="card reveal">
              <div className="k">Cost</div>
              <h3>Distance is priced in</h3>
              <p>Fresh produce crosses the border by road, often from more than a thousand kilometres away. Every kilometre shows up in the price on the shelf.</p>
            </div>
            <div className="card reveal" style={{ "--d": ".08s" }}>
              <div className="k">Quality</div>
              <h3>Days lost on the way</h3>
              <p>A bag of salad leaves used to travel about 1,600 km from Johannesburg to a Windhoek shelf, giving up days of shelf life in transit.</p>
            </div>
            <div className="card reveal" style={{ "--d": ".16s" }}>
              <div className="k">Dependence</div>
              <h3>A supply chain Namibia does not control</h3>
              <p>Where local supply at retail scale and standard is missing, the country buys in what it could grow.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section tint" id="gap">
        <div className="wrap split">
          <div>
            <div className="sec-label reveal"><b>02</b> The gap</div>
            <h2 className="reveal">Demand for local supply was there. <em>Supply at scale was not.</em></h2>
            <p className="muted reveal">National policy already pulls toward local production: the Namibian Agronomic Board's Market Share Promotion scheme requires traders to buy a minimum share of fresh produce from Namibian growers. The minimum is currently 47%, up from 5% when the scheme began in 2005 (Namibian Agronomic Board). <Link href="/market#namibia">See the market data.</Link></p>
            <p className="muted reveal">Retailers want consistency, shelf life and food safety. Early local production often could not offer them all three, every week. That is the gap we built into.</p>
          </div>
          <figure className="photo tall px reveal-img">
            <img src={asset("/assets/img/beds-wide.jpg")} alt="Rows of green and red lettuce under the greenhouse roof" loading="lazy" />
            <figcaption>Aquaponic greenhouse</figcaption>
          </figure>
        </div>
      </section>
      <section className="section" id="solution">
        <div className="wrap">
          <div className="sec-label reveal"><b>03</b> The solution</div>
          <h2 className="reveal" style={{ maxWidth: "22ch" }}>One site. <em>Seed to shelf.</em></h2>
          <p className="muted reveal narrow">Everything the product needs is on one farm, so nothing waits on a supplier or a truck.</p>
          <div className="map reveal-img" style={{ marginTop: "48px" }}>
            <img src={asset("/assets/img/site-topdown.jpg")} alt="Top-down aerial of the Oribi site with its greenhouse, net house and solar array marked" loading="lazy" />
            <div className="hot" style={{ left: "50%", top: "65%" }}><b></b><span>Aquaponic greenhouse, 5,000 m²</span></div>
            <div className="hot" style={{ left: "60%", top: "21%" }}><b></b><span>Net house, 4,500 m²</span></div>
            <div className="hot" style={{ left: "41%", top: "25%" }}><b></b><span>Solar array</span></div>
          </div>
          <div className="steps invest" style={{ marginTop: "56px", gridTemplateColumns: "repeat(3,1fr)" }}>
            <div className="step reveal">
              <h3>Hatchery</h3>
              <p>Our own red tilapia, selected for Namibian heat and cold winter nights.</p>
            </div>
            <div className="step reveal" style={{ "--d": ".08s" }}>
              <h3>Seedling house</h3>
              <p>A weekly sowing programme matched to retail orders.</p>
            </div>
            <div className="step reveal" style={{ "--d": ".16s" }}>
              <h3>Aquaponic greenhouse</h3>
              <p>5,000 m² of floating-raft beds for lettuce, celery, leeks, spring onions and soft herbs.</p>
            </div>
            <div className="step reveal">
              <h3>Net house</h3>
              <p>4,500 m² of soil beds for herbs and leaf crops that prefer soil, such as rocket and baby spinach.</p>
            </div>
            <div className="step reveal" style={{ "--d": ".08s" }}>
              <h3>High-care packhouse</h3>
              <p>Temperature-controlled washing, drying and packing, with cold storage before and after.</p>
            </div>
            <div className="step reveal" style={{ "--d": ".16s" }}>
              <h3>Own power</h3>
              <p>An off-grid solar system built with SolarSaver, with a generator as backup.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section navy" id="proof">
        <div className="wrap">
          <div className="sec-label reveal"><b>04</b> Evidence the gap is closing</div>
          <h2 className="reveal" style={{ maxWidth: "22ch" }}>Results the market can <em>verify.</em></h2>
          <p className="lead muted narrow reveal" style={{ "--d": ".08s", marginTop: "18px" }}>We would rather show you four numbers than ten adjectives. Each one is either a public policy fact, a company figure, or an estimate we label as ours.</p>
          <div className="grid g4" style={{ marginTop: "56px" }}>
            <div className="reveal">
              <div className="stat-big"><span data-count="30">30</span>–<span data-count="50">50</span>%</div>
              <p className="muted">estimated fall in the price of fancy lettuce since we entered the market in late 2023, with quality rising as price fell.</p>
            </div>
            <div className="reveal" style={{ "--d": ".08s" }}>
              <div className="stat-big"><span className="pre">Up to</span><span data-count="90">90</span>%</div>
              <p className="muted">less water than growing the same crop in a field. Roof rainwater supplies the system.</p>
            </div>
            <div className="reveal" style={{ "--d": ".16s" }}>
              <div className="stat-big"><span data-count="12000" data-format="group">12,000</span>+</div>
              <p className="muted">lettuce plants planted out every week, as capacity, to a fixed specification all year.</p>
            </div>
            <div className="reveal" style={{ "--d": ".24s" }}>
              <div className="stat-big"><span data-count="35">35</span></div>
              <p className="muted">people employed, 22 of them in permanent jobs.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="opportunity">
        <div className="wrap">
          <div className="sec-label reveal"><b>05</b> What it makes possible</div>
          <h2 className="reveal" style={{ maxWidth: "20ch" }}>A closed gap creates <em>room to build.</em></h2>
          <p className="lead muted narrow reveal" style={{ "--d": ".08s", marginTop: "18px" }}>One farm does not close a national import gap. What it does is prove the gap can be closed, and show four groups of people exactly what that is worth to them.</p>
          <ol className="unlock">
            <li className="reveal">
              <span className="n">01</span>
              <div>
                <h3>For investors</h3>
                <span className="kv">An asset, not a plan</span>
              </div>
              <p>An operating asset with a record that can be verified on site, and a playbook that can be repeated rather than reinvented. Investor information is available on request, and participation is by conversation and subject to documentation.</p>
            </li>
            <li className="reveal" style={{ "--d": ".06s" }}>
              <span className="n">02</span>
              <div>
                <h3>For the local economy</h3>
                <span className="kv">Value that stays</span>
              </div>
              <p>Skilled jobs, local procurement and import substitution: 35 people on the farm, 22 of them in permanent roles, and value kept in Namibia instead of leaving the country with every truckload.</p>
            </li>
            <li className="reveal" style={{ "--d": ".12s" }}>
              <span className="n">03</span>
              <div>
                <h3>For retailers and food service</h3>
                <span className="kv">A supplier you can plan around</span>
              </div>
              <p>A local grower that can hold a weekly programme to a fixed specification, shorten the chain from days to hours, and put fresher product on the shelf at a lower landed cost.</p>
            </li>
            <li className="reveal" style={{ "--d": ".18s" }}>
              <span className="n">04</span>
              <div>
                <h3>For the next asset</h3>
                <span className="kv">The method travels</span>
              </div>
              <p>The same reasoning applies beyond salad and beyond primary farming, into processing. What was learned here about water, nutrients, data and food safety is what the next project starts with. Further projects are in development.</p>
            </li>
          </ol>
        </div>
      </section>
      <section className="band grain" aria-label="Produce detail">
        <img src={asset("/assets/img/tex-lettuce-frill.jpg")} alt="" loading="lazy" aria-hidden="true" />
        <div className="wrap">
          <div className="sec-label reveal">The product</div>
          <p className="q reveal" style={{ "--d": ".06s" }}>Quality rose as the price came down. That is the part the market noticed.</p>
          <p className="by reveal" style={{ "--d": ".12s" }}>Fancy lettuce, Namibia, since late 2023 · Oribi estimate</p>
        </div>
      </section>
      <section className="section story" id="method">
        <div className="wrap">
          <div className="sec-label reveal"><b>06</b> How we grow</div>
          <h2 className="reveal" style={{ maxWidth: "22ch" }}>Aquaponics is the method, <em>not the headline.</em></h2>
          <p className="muted reveal narrow">Fish provide the nutrient base. We measure the water, add precisely what each crop stage needs, and recirculate it. Fish do not supply everything a crop needs, which is why most commercial projects fail. We test every system, make small regular water changes, and harvest lettuce up to 11 times a year to the same specification each time.</p>
          <div className="story-wrap">
            <div className="story-media" aria-hidden="true">
              <div className="count">01 / 05</div>
              <figure>
                <img src={asset("/assets/img/aerial-oblique-900.jpg")} alt="" loading="lazy" />
                <figcaption><small>The system</small>Greenhouse bays at Okahandja</figcaption>
              </figure>
              <figure>
                <img src={asset("/assets/img/beds-wide-900.jpg")} alt="" loading="lazy" />
                <figcaption><small>Recirculating beds</small>Water tested in every system</figcaption>
              </figure>
              <figure>
                <img src={asset("/assets/img/raft-red-900.jpg")} alt="" loading="lazy" />
                <figcaption><small>Floating rafts</small>Red oak seedlings</figcaption>
              </figure>
              <figure>
                <img src={asset("/assets/img/net-house-packing-900.jpg")} alt="" loading="lazy" />
                <figcaption><small>On-farm packing</small>Washed and dried at harvest</figcaption>
              </figure>
              <figure>
                <img src={asset("/assets/img/spring-onions-900.jpg")} alt="" loading="lazy" />
                <figcaption><small>At harvest</small>Bunched and sleeved for the store</figcaption>
              </figure>
            </div>
            <div className="story-steps">
              <div className="story-step">
                <div className="no">01</div>
                <h3>Fish</h3>
                <p>Our tilapia provide the nutrient base.</p>
              </div>
              <div className="story-step">
                <div className="no">02</div>
                <h3>Water</h3>
                <p>We test it, add precisely what each crop stage needs, and recirculate it.</p>
              </div>
              <div className="story-step">
                <div className="no">03</div>
                <h3>Plants</h3>
                <p>Lettuce, herbs and greens grow on floating rafts and clean the water for the fish.</p>
              </div>
              <div className="story-step">
                <div className="no">04</div>
                <h3>Pack</h3>
                <p>Leaves are washed, dried and packed on the farm in a high-care facility.</p>
              </div>
              <div className="story-step">
                <div className="no">05</div>
                <h3>Shelf</h3>
                <p>Kept cold all the way to the store.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="data">
        <div className="wrap">
          <div className="sec-label reveal"><b>07</b> Run on data</div>
          <h2 className="reveal" style={{ maxWidth: "20ch" }}>Every batch tracked from <em>seed to pack.</em></h2>
          <div className="grid g3" style={{ marginTop: "48px" }}>
            <div className="card reveal">
              <div className="stat-big"><span data-count="1100" data-format="group">1,100</span>+</div>
              <p className="muted">batch records since April 2025, across 74 weekly batches.</p>
            </div>
            <div className="card reveal" style={{ "--d": ".1s" }}>
              <div className="stat-big">7</div>
              <p className="muted">water parameters logged in all six systems: pH, salinity, nitrate, potassium, calcium, dissolved oxygen and temperature.</p>
            </div>
            <div className="card reveal" style={{ "--d": ".2s" }}>
              <div className="stat-big"><span data-count="470">470</span>+</div>
              <p className="muted">days of packhouse temperature and wash-water records.</p>
            </div>
          </div>
          <p className="lead reveal" style={{ marginTop: "40px" }}>When a number drifts, we see it before the crop does.</p>
        </div>
      </section>
      <section className="section tint">
        <div className="wrap split">
          <div>
            <div className="sec-label reveal"><b>08</b> What it took</div>
            <h2 className="reveal">We did not get this right <em>the first time.</em></h2>
            <p className="muted reveal">Early production was inconsistent, in ways a hobby system can live with and a retail supplier cannot. We reviewed the whole process, rebuilt how we manage water and nutrients, and wrote our own production tracker.</p>
            <p className="muted reveal">In 2026 we doubled the aquaponic growing area, added the net house and seedling house, and expanded the packhouse.</p>
          </div>
          <div>
            <div className="sec-label reveal"><b>09</b> Certified</div>
            <ul className="facts reveal">
              <li><span>Local GAP</span><span>Primary Farm Assurance: food safety, quality, traceability</span></li>
              <li><span>Namibian Agronomic Board</span><span>Registered producer</span></li>
            </ul>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="grid g2">
            <figure className="photo std px reveal-img">
              <img src={asset("/assets/img/leeks.jpg")} alt="Leeks growing in the net house with bushveld beyond" loading="lazy" />
              <figcaption>Net house, soil beds</figcaption>
            </figure>
            <figure className="photo std px reveal-img" style={{ transitionDelay: ".12s" }}>
              <img src={asset("/assets/img/aerial-oblique.jpg")} alt="Aerial view of the greenhouse bays" loading="lazy" />
              <figcaption>Okahandja, 70 km north of Windhoek</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <CtaBand label="Next step" title={<>An asset you can <em>verify</em>, and a playbook you can <em>repeat</em>.</>} secondary={{ href: "/contact", label: "Arrange a visit" }}>
        Visit the farm, meet the team and review investor information on request. Participation is by conversation and subject to documentation.
      </CtaBand>
      <NextUp href="/market" title="The market behind it: Africa, SADC and Namibia" />
    </>
  );
}
