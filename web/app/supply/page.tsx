import type { Metadata } from 'next';
import { Arrow } from '@/components/Arrow';
import { CtaBand } from '@/components/CtaBand';
import { PartnerWall } from '@/components/Partners';
import { NextUp } from '@/components/NextUp';
import { asset } from '@/lib/site';

export const metadata: Metadata = {
  title: "Fresh produce supplier, Namibia: Oribi supply",
  description: "Year-round weekly supply for retailers, wholesalers and food service. Local GAP certified. Custom packs and private label.",
};

export default function Page() {
  return (
    <>
      <section className="page-hero has-img">
        <div className="bg" data-parallax="0.1"><img src={asset("/assets/img/leeks.jpg")} alt="Leeks growing in the net house, with bushveld beyond" /></div>
        <div className="wrap">
          <div className="eyebrow reveal">Supply</div>
          <h1 className="reveal" style={{ "--d": ".08s" }}>A local supplier <em>you can plan around.</em></h1>
          <p className="lede reveal" style={{ "--d": ".16s" }}>Buyers do not need another supplier. They need one that holds specification every week of the year. Weekly programmes, custom packs, short lead times, and one person who answers the phone.</p>
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="sec-label reveal"><b>01</b> Why buyers switch</div>
          <div className="p-head">
            <h2 className="reveal">Fresher on arrival, <em>steady all year.</em></h2>
            <p className="reveal">Imported leaf spends days on the road before it reaches a shelf. Ours is cut, packed and delivered from 70 kilometres away, to the same specification every week.</p>
          </div>
          <div className="grid g4" style={{ marginTop: "clamp(36px,5vw,56px)" }}>
            <div className="card reveal">
              <span className="k">Consistency</span>
              <h3>A programme, not a gamble</h3>
              <p>Weekly planting to a fixed programme means weekly supply to a fixed specification, summer and winter.</p>
            </div>
            <div className="card reveal" style={{ "--d": ".08s" }}>
              <span className="k">Shelf life</span>
              <h3>Days fresher</h3>
              <p>Washed, dried and packed in a high-care facility and kept in the cold chain from harvest to delivery.</p>
            </div>
            <div className="card reveal" style={{ "--d": ".16s" }}>
              <span className="k">Custom packs</span>
              <h3>Your pack, your label</h3>
              <p>Pack sizes, labels and artwork to your specification. [Private label to be confirmed before launch.]</p>
            </div>
            <div className="card reveal" style={{ "--d": ".24s" }}>
              <span className="k">Compliance</span>
              <h3>Certified and registered</h3>
              <p>Local GAP certified under Primary Farm Assurance, and registered with the Namibian Agronomic Board. [Market Share Promotion wording to be confirmed before launch.]</p>
            </div>
          </div>
        </div>
      </section>
      <section className="band grain" aria-label="Harvest">
        <img src={asset("/assets/img/spring-onions.jpg")} alt="" loading="lazy" aria-hidden="true" />
        <div className="wrap">
          <div className="sec-label reveal">From the net house</div>
          <p className="q reveal">Harvested in the morning, bunched by hand, and on its way to the shelf the same day it is packed.</p>
          <p className="by reveal">Spring onions · Okahandja</p>
        </div>
      </section>
      <section className="section tint">
        <div className="wrap">
          <div className="sec-label reveal"><b>02</b> Who we supply</div>
          <div className="p-head">
            <h2 className="reveal">Already on the shelves of <em>the biggest names.</em></h2>
            <p className="reveal">Shoprite Checkers through Freshmark, The SPAR Group Limited, Food Lover's Market, Metro Namibia and the Namibian Fresh Produce Market, as well as wholesalers and food-service customers.</p>
          </div>
          <PartnerWall />
        </div>
      </section>
      <section className="section">
        <div className="wrap">
          <div className="sec-label reveal"><b>03</b> Where we are heading</div>
          <div className="p-head">
            <h2 className="reveal">The markets we serve, and <em>the ones we are building toward.</em></h2>
            <p className="reveal">Retail proved the model. The same weekly reliability is what hotels, lodges and large kitchens struggle to find, especially far from the main towns.</p>
          </div>
          <div className="markets">
            <div className="market reveal"><span className="tag now">Supplying today</span><h3>Retail chains</h3><p>National grocery groups, supplied every week of the year, including through Freshmark.</p></div>
            <div className="market reveal" style={{ "--d": ".06s" }}><span className="tag now">Supplying today</span><h3>Wholesale and markets</h3><p>Wholesale buyers including Metro Namibia, and the Namibian Fresh Produce Market.</p></div>
            <div className="market reveal" style={{ "--d": ".12s" }}><span className="tag now">Supplying today</span><h3>Food service</h3><p>Restaurants, caterers and distributors who need consistent leaf and herbs to a fixed specification.</p></div>
            <div className="market reveal"><span className="tag">Target market</span><h3>Hospitality and tourism</h3><p>Lodges, hotels and safari operators, where fresh produce matters to the guest and is hard to source far from town.</p></div>
            <div className="market reveal" style={{ "--d": ".06s" }}><span className="tag">Target market</span><h3>Institutional catering</h3><p>Mining camps, hospitals, schools and other large kitchens that buy on contract and value reliable weekly supply.</p></div>
            <div className="market reveal" style={{ "--d": ".12s" }}><span className="tag">Target market</span><h3>Processing and own label</h3><p>Ready-to-eat salads, own-label packs and value-added lines as the collective moves into processing.</p></div>
          </div>
          <div className="routes" style={{ marginTop: "clamp(48px,6vw,80px)" }}>
            <div className="route reveal">
              <span className="idx">→</span>
              <div>
                <h3>Start a supply conversation</h3>
                <p>Tell us what you need each week and we will come back with a programme and a price list. Ordering by WhatsApp catalogue and the trade presenter are available on request.</p>
              </div>
              <div className="det">
                <span className="who">Clifford Steyn, Sales</span>
                <a className="clink" href="tel:+264831666301"><span>+264 831 666 301</span><Arrow /></a>
                <a className="clink" href="mailto:clifford.steyn@oribi.com.na"><span>clifford.steyn@oribi.com.na</span><Arrow /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaBand label="Next step" title={<>Need a local supplier you can <em>plan around?</em></>} primary={{ href: "/contact", label: "Start a supply conversation" }} secondary={{ href: "/produce", label: "See the range" }}>
        Weekly programmes, custom packs and short lead times, from a farm 70 kilometres from Windhoek.
      </CtaBand>
      <NextUp href="/contact" title="Talk to the right person first" />
    </>
  );
}
