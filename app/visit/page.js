import Image from 'next/image';
import { Shell } from '@/components/SiteChrome';
import PageHero from '@/components/PageHero';

const tickets = [
  {name:'City Palace Museum',price:'₹400',note:'Indian adult',includes:['Palace courtyards','Museum galleries','Youth concession ₹200']},
  {name:'Composite',price:'₹500',note:'Indian adult',includes:['Palace courtyards','Museum galleries','Jaigarh','Royal Cenotaphs']},
  {name:'Museum at Night',price:'₹510',note:'Indian adult',includes:['Palace courtyards','Museum galleries','Light & sound show','Temporarily closed']},
];

export default function VisitPage(){
 return <Shell><main className="page-main">
   <PageHero kicker="Visitor information" title={<>Plan your<br/>visit</>} copy="Everything you need for a smooth day at the City Palace Museum, from admission and opening hours to access, transport and the Royal Tour." image="/images/mubarak-night.jpg" />
   <section className="content-wrap">
     <div className="content-intro"><p className="eyebrow">Admission</p><div><h2>Choose how you want to experience the Palace.</h2><p>These cards use the current Indian resident pricing published by the museum. Concessions apply to eligible visitors; international resident pricing can differ.</p></div></div>
     <div className="ticket-grid">{tickets.map((t,i)=><article className="ticket-card" key={t.name}><div><div className="ticket-top"><span>0{i+1}</span><span>{t.note}</span></div><h3>{t.name}</h3><div className="price">{t.price}<small> / adult</small></div></div><ul>{t.includes.map(x=><li key={x}>{x}</li>)}</ul></article>)}</div>
   </section>
   <section className="dark-block">
     <div className="split-feature"><div className="feature-media"><Image src="/images/royal-tour.jpg" alt="Chhavi Niwas on the Royal Tour" fill sizes="(max-width:1000px) 100vw,50vw" /></div><div className="feature-copy"><p className="eyebrow light">Chandra Mahal</p><h2>The Royal Tour</h2><p>Go beyond the main museum route into parts of the seven-storey Chandra Mahal, still associated with the Royal Family of Jaipur. The experience includes a personal guide and access to a sequence of richly decorated rooms.</p><div className="detail-list"><div className="detail-row"><span>Indian adult</span><strong>₹4,000</strong></div><div className="detail-row"><span>Youth concession</span><strong>₹2,000</strong></div><div className="detail-row"><span>Availability</span><strong>Ticket counter</strong></div></div></div></div>
   </section>
   <section className="content-wrap">
     <div className="content-intro"><p className="eyebrow">Opening hours</p><div><h2>Arrive with time to wander.</h2><p>The main museum is open daily except Dhulandi, the second day of Holi. Last tickets are sold shortly before closing.</p></div></div>
     <div className="info-grid"><article className="info-card"><span className="eyebrow">Museum</span><strong>9:30 AM — 6:30 PM</strong><p>Last tickets at 6:00 PM.</p></article><article className="info-card"><span className="eyebrow">Parking</span><strong>Gate 2 · Jaleb Chowk</strong><p>Primary visitor parking is available near the Gate 2 approach.</p></article><article className="info-card"><span className="eyebrow">Metro</span><strong>Badi Chaupar</strong><p>Closest station on Jaipur Metro's Pink Line.</p></article></div>
   </section>
   <section className="dark-block"><div className="split-feature"><div className="feature-copy"><p className="eyebrow light">Jaipur Centre for Art</p><h2>Contemporary work inside a historic complex.</h2><p>A rotating contemporary programme sits in dialogue with the Palace’s historic collections and spaces.</p><div className="detail-list"><div className="detail-row"><span>Adult / Youth</span><strong>₹100</strong></div><div className="detail-row"><span>Programme</span><strong>Rotating exhibitions</strong></div></div></div><div className="feature-media"><Image src="/images/jca-visit.jpg" alt="Jaipur Centre for Art" fill sizes="(max-width:1000px) 100vw,50vw" /></div></div></section>
   <section className="map-section"><div className="content-intro"><p className="eyebrow">Visitor map</p><div><h2>Find your way through the courtyards.</h2><p>The official visitor map marks galleries, gates, shops, food, ticketing and accessibility services.</p><p><a className="text-link" href="/City-Palace-Brochure.pdf" target="_blank">Open visitor brochure <span>↗</span></a></p></div></div><Image src="/images/palace-map.jpg" alt="Official illustrated map of City Palace Museum Jaipur" width={1500} height={748} /></section>
 </main></Shell>
}
