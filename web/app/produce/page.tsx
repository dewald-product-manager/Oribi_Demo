import type { Metadata } from 'next';
import { CtaBand } from '@/components/CtaBand';
import Link from 'next/link';
import { NextUp } from '@/components/NextUp';
import { asset } from '@/lib/site';

export const metadata: Metadata = {
  title: "Lettuce, herbs and greens: Oribi produce",
  description: "Washed, ready-to-eat pillow packs, fresh herbs, celery, leeks, spring onions and salad bowls, grown and packed in Namibia.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero has-img">
        <div className="bg" data-parallax="0.1"><img src={asset("/assets/img/raft-red.jpg")} alt="A raft of red oak lettuce seedlings in the greenhouse" /></div>
        <div className="wrap">
          <div className="eyebrow reveal">Produce</div>
          <h1 className="reveal" style={{ "--d": ".08s" }}>Washed. Ready to eat. <em>Grown here.</em></h1>
          <p className="lede reveal" style={{ "--d": ".16s" }}>More than 20 lines of lettuce, herbs and greens, harvested, washed and packed on the farm, and on a shelf 70 km away instead of 1,600. Fresher when it arrives, and fresher for longer at home.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="sec-label reveal"><b>01</b> The range</div>
          <div className="p-head" style={{ marginBottom: "clamp(36px,5vw,56px)" }}>
            <h2 className="reveal">Twenty lines, <em>one standard.</em></h2>
            <p className="reveal">Lettuce, spinach, herbs and greens, each grown to the same specification, cut and packed on the farm, and kept cold all the way to the shelf.</p>
          </div>
          <div className="prod-grid">
            <figure className="photo a px reveal-img">
              <img src={asset("/assets/img/beds-wide.jpg")} alt="Rows of green and red lettuce under the greenhouse roof" loading="lazy" />
              <figcaption>Lettuce, by the bed</figcaption>
            </figure>
            <figure className="photo b px reveal-img" style={{ transitionDelay: ".1s" }}>
              <img src={asset("/assets/img/hands-red.jpg")} alt="Hands planting a red lettuce seedling" loading="lazy" />
              <figcaption>Planted by hand</figcaption>
            </figure>
            <figure className="photo c px reveal-img">
              <img src={asset("/assets/img/raft-red.jpg")} alt="A raft of red oak lettuce seedlings" loading="lazy" />
              <figcaption>Red oak</figcaption>
            </figure>
            <figure className="photo d px reveal-img" style={{ transitionDelay: ".1s" }}>
              <img src={asset("/assets/img/spring-onions.jpg")} alt="Spring onions being bundled" loading="lazy" />
              <figcaption>Spring onions</figcaption>
            </figure>
            <figure className="photo e px reveal-img" style={{ transitionDelay: ".2s" }}>
              <img src={asset("/assets/img/leeks.jpg")} alt="Leeks growing in the net house" loading="lazy" />
              <figcaption>Leeks</figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section className="band grain" aria-label="Fresh herbs">
        <img src={asset("/assets/img/tex-herbs-dark.jpg")} alt="" loading="lazy" aria-hidden="true" />
        <div className="wrap">
          <div className="sec-label reveal">The range</div>
          <p className="q reveal" style={{ "--d": ".06s" }}>More than twenty lines, cut and packed a short drive from the shelf.</p>
          <p className="by reveal" style={{ "--d": ".12s" }}>Lettuce · spinach · herbs · greens · salad bowls</p>
        </div>
      </section>
      <section className="section tint">
        <div className="wrap">
          <div className="sec-label reveal"><b>02</b> The lines</div>
          <h2 className="reveal" style={{ marginBottom: "clamp(32px,4vw,52px)" }}>What we grow, <em>week in, week out.</em></h2>
        </div>
        <div className="wrap split top">
          <div>
            <div className="sec-label reveal">Lettuce and salad mixes</div>
            <p className="muted reveal">Pillow packs, washed and ready to eat, in 130 g and 200 g. Butter and Cos are also sold as whole heads.</p>
            <ul className="prod-list reveal">
              <li>Butter</li>
              <li>Red Butter</li>
              <li>Crisp</li>
              <li>Frilly</li>
              <li>Red Oak</li>
              <li>Green Oak</li>
              <li>Lolla Rosso</li>
              <li>Cos</li>
              <li>Little Gem</li>
              <li>Mixed Leaf</li>
              <li>Crispy Crunch</li>
              <li>Lettuce &amp; Herb Mix</li>
            </ul>
          </div>
          <div>
            <div className="sec-label reveal">Spinach</div>
            <p className="muted reveal">Spinach, Cut Spinach and Baby Spinach, in pillow packs.</p>
            <div className="sec-label reveal" style={{ marginTop: "40px" }}>Herbs</div>
            <p className="muted reveal">Clamshell packs of mint, basil, curly parsley, Italian parsley, coriander, dill, chives and rocket.</p>
            <div className="sec-label reveal" style={{ marginTop: "40px" }}>Greens</div>
            <p className="muted reveal">Celery, leeks and spring onions, sleeved in bunches.</p>
            <div className="sec-label reveal" style={{ marginTop: "40px" }}>Salad bowls</div>
            <p className="muted reveal">Heat-sealed bowls made on the farm, in single-serve, for-two and for-four sizes.</p>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="wrap split">
          <div>
            <div className="sec-label reveal"><b>03</b> Why a pillow pack</div>
            <h2 className="reveal">The pack protects <em>the leaves.</em></h2>
            <p className="muted reveal">The leaves last longer in your fridge. They are already washed, so there is nothing to do but open it. And because the lettuce was cut a short drive from the store, it starts fresher than anything that crossed a border to get there.</p>
          </div>
          <div>
            <div className="sec-label reveal"><b>04</b> Where to buy</div>
            <p className="lead reveal">Look for the ORIBI label at Checkers, SPAR, Food Lover's Market and Metro across Namibia.</p>
            <p className="muted reveal">Buying for a store or a kitchen? <Link href="/supply">Talk to our sales team.</Link></p>
          </div>
        </div>
      </section>
      <CtaBand label="For buyers" title={<>Stock Oribi <em>in your store.</em></>} primary={{ href: "/supply", label: "Supply enquiry" }} secondary={{ href: "/contact", label: "Contact sales" }}>
        Weekly programmes for retailers, wholesalers and kitchens, packed to your specification and delivered from 70 kilometres away.
      </CtaBand>
      <NextUp href="/supply" title="Supply: a local partner you can plan around" />
    </>
  );
}
