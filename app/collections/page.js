import Image from 'next/image';
import { Shell } from '@/components/SiteChrome';
import PageHero from '@/components/PageHero';

const items=[
 ['Sileh Khana Gallery','/images/sileh-khana.jpg'],['Sabha Niwas Gallery','/images/sabha-niwas.jpg'],['Painting & Photography Gallery','/images/painting-photography.jpg'],['Mubarak Mahal Gallery','/images/mubarak-mahal-gallery.jpg'],['Rath Khana Gallery','/images/rath-khana.jpg'],['Jaipur Centre for Art','/images/jaipur-centre-art.jpg'],['Pritam Niwas Courtyard','/images/pritam-niwas.jpg'],['Sarvato Bhadra','/images/sarvato-bhadra.jpg'],['Chhavi Niwas','/images/chhavi-niwas.jpg'],['Sri Niwas','/images/sri-niwas.jpg'],['Mubarak Mahal','/images/mubarak-mahal.jpg'],['Shobha Niwas','/images/shobha-niwas.jpg']
]
export default function CollectionsPage(){return <Shell><main className="page-main"><PageHero kicker="Museum & Palace" title={<>Collection<br/>highlights</>} copy="Historic arms, textiles, paintings, photography, transport, architecture and ceremonial rooms sit alongside a growing contemporary art programme." image="/images/sileh-khana.jpg" />
<section className="content-wrap"><div className="content-intro"><p className="eyebrow">Explore</p><div><h2>A collection inseparable from its architecture.</h2><p>The museum route moves between purpose-built galleries and rooms whose decorative surfaces are themselves part of the collection. This redesign keeps the current image library front and centre.</p></div></div><div className="gallery-grid">{items.map(([name,src])=><article className="gallery-item" key={name}><Image src={src} alt={name} fill sizes="(max-width:1000px) 100vw,60vw"/><div className="gallery-caption">{name}</div></article>)}</div></section></main></Shell>}
