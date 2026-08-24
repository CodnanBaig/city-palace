import Image from 'next/image';
import Link from 'next/link';
import { Shell } from '@/components/SiteChrome';
import Reveal from '@/components/Reveal';

const collections = [
  ['Sileh Khana Gallery', '/images/sileh-khana.jpg'],
  ['Sabha Niwas Gallery', '/images/sabha-niwas.jpg'],
  ['Painting & Photography', '/images/painting-photography.jpg'],
  ['Mubarak Mahal Gallery', '/images/mubarak-mahal-gallery.jpg'],
  ['Rath Khana Gallery', '/images/rath-khana.jpg'],
  ['Jaipur Centre for Art', '/images/jaipur-centre-art.jpg'],
  ['Pritam Niwas Courtyard', '/images/pritam-niwas.jpg'],
  ['Chhavi Niwas', '/images/chhavi-niwas.jpg'],
];

export default function HomePage() {
  return (
    <Shell>
      <main>
        <section className="hero">
          <div className="hero-media"><Image src="/images/arches.jpg" alt="Ornate arches inside the City Palace Museum Jaipur" fill priority sizes="100vw" /></div>
          <div className="hero-top-note">Photographic archive · Jaipur</div>
          <div className="hero-copy">
            <Reveal><h1>City Palace<br/><span className="outline">Museum Jaipur</span></h1></Reveal>
            <Reveal className="hero-side" delay={160}>
              <p>A living royal complex where architecture, objects, craft and contemporary culture meet across nearly three centuries of Jaipur history.</p>
              <Link className="text-link" href="/visit">Plan your visit <span>→</span></Link>
            </Reveal>
          </div>
          <div className="hero-index">26.9258° N · 75.8237° E</div>
        </section>

        <section className="intro">
          <div className="ornament-line" />
          <div className="intro-grid">
            <Reveal><p className="eyebrow">Established 1959 · Jaipur</p></Reveal>
            <div>
              <Reveal><h2 className="display-copy">A palace museum shaped by centuries of collecting, commissioning, ritual and artistic patronage.</h2></Reveal>
              <Reveal delay={100}><p className="intro-note">The museum brings together architecture and collections connected to the Kachhwaha rulers of Amer and Jaipur, presenting the city’s cultural legacy as something active rather than frozen in time.</p></Reveal>
            </div>
          </div>
        </section>

        <section className="collection-section">
          <div className="section-head">
            <Reveal><div><p className="eyebrow light">Explore the Palace</p><h2>Collections</h2></div></Reveal>
            <Reveal delay={100}><p className="mini-copy">From historic arms and courtly textiles to royal photography, ceremonial spaces and contemporary art.</p></Reveal>
          </div>
          <div className="collection-rail">
            {collections.map(([name, src], i) => (
              <Link href="/collections" className="collection-card" key={name}>
                <div className="collection-image"><Image src={src} alt={name} fill sizes="(max-width: 800px) 82vw, 32vw" /><span className="collection-number">{String(i+1).padStart(2,'0')}</span></div>
                <div className="collection-title"><h3>{name}</h3><span>↗</span></div>
              </Link>
            ))}
          </div>
          <div className="collection-cta"><Link className="text-link" href="/collections">View all collections <span>→</span></Link></div>
        </section>

        <section className="arch-story">
          <div className="arch-story-media"><Image src="/images/historic-palace.jpg" alt="Historic photograph of the City Palace" fill sizes="(max-width: 1000px) 100vw, 52vw" /></div>
          <div className="arch-story-copy">
            <Reveal><p className="eyebrow">The Palace</p><h2>More than a royal residence.</h2></Reveal>
            <Reveal delay={80}><p>The City Palace developed over generations into a complex of courtyards, halls and residences. It served ceremonial, administrative, social and artistic roles while supporting a remarkable network of royal craft traditions.</p></Reveal>
            <div className="stat-row">
              <Reveal><div className="stat"><strong>1959</strong><span>Museum established</span></div></Reveal>
              <Reveal delay={80}><div className="stat"><strong>36</strong><span>Art forms patronised</span></div></Reveal>
              <Reveal delay={160}><div className="stat"><strong>2027</strong><span>Jaipur turns 300</span></div></Reveal>
            </div>
          </div>
        </section>

        <section className="visit-band">
          <Image src="/images/mubarak-night.jpg" alt="Mubarak Mahal illuminated at night" fill sizes="100vw" />
          <div className="visit-band-content">
            <Reveal><div><p className="eyebrow light">Open seven days a week</p><h2>Visit<br/>the Palace</h2></div></Reveal>
            <Reveal className="visit-details" delay={120}>
              <strong>9:30 AM — 6:30 PM</strong>
              <p>Last museum tickets at 6:00 PM. Entry is available from gates near Jantar Mantar and Jaleb Chowk.</p>
              <Link className="text-link" href="/visit">Tickets & information <span>→</span></Link>
            </Reveal>
          </div>
        </section>

        <section className="editorial-cards">
          <div className="editorial-head">
            <Reveal><h2>Stay a little longer.</h2></Reveal>
            <Reveal delay={100}><p>The City Palace is more than galleries: dine within the complex, discover contemporary and traditional craft, and take home something rooted in Jaipur.</p></Reveal>
          </div>
          <div className="editorial-grid">
            <Link href="/food-and-drink" className="editorial-card">
              <Image src="/images/food.jpg" alt="Dining at City Palace" fill sizes="(max-width: 1000px) 100vw, 50vw" />
              <div className="editorial-card-copy"><h3>Food & Drink</h3><p>Baradari, The Gallery Cafe and seasonal dining experiences.</p></div>
            </Link>
            <Link href="/shop" className="editorial-card">
              <Image src="/images/shop.jpg" alt="The Palace Atelier shop" fill sizes="(max-width: 1000px) 100vw, 50vw" />
              <div className="editorial-card-copy"><h3>Shop the Palace</h3><p>Craft, books, gifts and contemporary pieces connected to Jaipur.</p></div>
            </Link>
          </div>
        </section>
      </main>
    </Shell>
  );
}
