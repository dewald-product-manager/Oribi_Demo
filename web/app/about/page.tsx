import type { Metadata } from 'next';
import { CtaBand } from '@/components/CtaBand';
import { PressList } from '@/components/Press';
import { Team } from '@/components/Team';
import Link from 'next/link';
import { Arrow } from '@/components/Arrow';
import { NextUp } from '@/components/NextUp';
import { asset } from '@/lib/site';

export const metadata: Metadata = {
  title: "About Oribi: a collective building Namibia's food capacity",
  description: "A collective building Namibia's capacity to grow and process its own food, replacing imports with local supply.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero has-img">
        <div className="bg" data-parallax="0.1"><img src={asset("/assets/img/beds-wide.jpg")} alt="Rows of green and red lettuce under the greenhouse roof" /></div>
        <div className="wrap">
          <div className="eyebrow reveal">About</div>
          <h1 className="reveal" style={{ "--d": ".08s" }}>A collective building Namibia's capacity to <em>grow and process its own food.</em></h1>
          <p className="lede reveal" style={{ "--d": ".16s" }}>Oribi brings together people from finance, farming, energy and business structuring. We find foods Namibia imports that it could make at home, and we build and run the operations that make them.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap split">
          <div>
            <div className="sec-label reveal"><b>01</b> What we believe</div>
            <h2 className="reveal">The distance shows up <em>twice.</em></h2>
            <p className="muted reveal">Namibia imports a large share of what it eats. Fresh produce crosses the border by road, often from more than a thousand kilometres away. The distance shows up in the price on the shelf, and in the days of freshness lost on the way.</p>
            <p className="muted reveal">What has been missing is local supply at retail scale and retail standard. That is the gap we work in. We start where the import is expensive to move and quick to spoil, because that is where local production wins first.</p>
          </div>
          <div>
            <div className="sec-label reveal"><b>02</b> What we have done</div>
            <h2 className="reveal">The first proof is <em>on the shelf.</em></h2>
            <p className="muted reveal">Our first project is the Oribi farm outside Okahandja. It began supplying retailers in late 2023 and doubled its growing area in 2026. It is now one of the largest commercial aquaponics facilities in Africa, with 9,500 m² under cover.</p>
            <p className="muted reveal">Washed, packed lettuce that once came from South Africa is now grown in Namibia, at higher quality and at a price we estimate to be 30 to 50% lower.</p>
          </div>
        </div>
      </section>
      <section className="section tint">
        <div className="wrap">
          <div className="sec-label reveal"><b>03</b> The people behind Oribi</div>
          <h2 className="reveal" style={{ maxWidth: "22ch" }}>Finance, structuring, farming and energy, <em>at one table.</em></h2>
          <Team />
          <p className="note" style={{ marginTop: "8px" }}>Titles and biographies are pending each person's approval.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="grid g2">
            <figure className="photo tall px reveal-img">
              <img src={asset("/assets/img/batch-portrait.jpg")} alt="A grower in a green overall crouching beside a raft bed, with a hand-written batch sign" loading="lazy" style={{ objectPosition: "50% 35%" }} />
              <figcaption>On the greenhouse floor</figcaption>
            </figure>
            <figure className="photo tall px reveal-img" style={{ transitionDelay: ".12s" }}>
              <img src={asset("/assets/img/team-hairnets.jpg")} alt="Two growers in hairnets tending lettuce in the greenhouse" loading="lazy" style={{ objectPosition: "62% 50%" }} />
              <figcaption>35 people work on the farm, 22 in permanent jobs</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="band grain" aria-label="What we grow">
        <img src={asset("/assets/img/tex-microgreens.jpg")} alt="" loading="lazy" aria-hidden="true" />
        <div className="wrap">
          <div className="sec-label reveal">What this is for</div>
          <p className="q reveal" style={{ "--d": ".06s" }}>Operators first, investors second. Everyone here has run something before.</p>
          <p className="by reveal" style={{ "--d": ".12s" }}>Oribi Collective</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="sec-label reveal"><b>04</b> Timeline</div>
          <ul className="timeline" style={{ marginTop: "40px" }}>
            <li className="reveal">
              <div className="y">Late 2023</div>
              <h3>Market entry</h3>
              <p>Oribi begins supplying Namibian retailers.</p>
            </li>
            <li className="reveal">
              <div className="y">2025</div>
              <h3>Run on data</h3>
              <p>Production tracking begins in April 2025 across all six systems.</p>
            </li>
            <li className="reveal">
              <div className="y">2026</div>
              <h3>Phase 1B</h3>
              <p>The aquaponic growing area doubles; net house, seedling house and expanded packhouse added.</p>
            </li>
            <li className="reveal">
              <div className="y">Next</div>
              <h3>Further projects</h3>
              <p>In development. <Link href="/investors#enquire">Talk to us.</Link></p>
            </li>
          </ul>
        </div>
      </section>
      <section className="section tint">
        <div className="wrap">
          <div className="sec-label reveal"><b>05</b> Founding team and stakeholders</div>
          <div className="split">
            <div>
              <h2 className="reveal">Bravura, at the table <em>from the start.</em></h2>
              <p className="muted reveal" style={{ margin: "0" }}>Bravura is a stakeholder in Oribi's projects and part of the founding team. Our chairman, Willem Bodenstein, heads Bravura Namibia, the Windhoek office of the Bravura advisory group, which supports structuring, governance and investor relationships.</p>
            </div>
            <div className="logo-tile reveal"><img src={asset("/assets/img/logo-bravura.png")} alt="Bravura" /></div>
          </div>
        </div>
      </section>
      <section className="section" id="press">
        <div className="wrap">
          <div className="sec-label reveal"><b>06</b> In the press</div>
          <div className="p-head">
            <h2 className="reveal">What the trade has <em>written about us.</em></h2>
            <p className="reveal">Independent coverage from the horticulture and farming press, in Namibia, South Africa and internationally.</p>
          </div>
          <PressList />
        </div>
      </section>
      <CtaBand label="Next step" title={<>Considering a role in the <em>next</em> project?</>} secondary={{ href: "/flagship", label: "See the flagship" }}>
        Tell us what you are looking at. We reply personally and share investor information on request.
      </CtaBand>
      <NextUp href="/contact" title="Talk to the right person" />
    </>
  );
}
