import Image from 'next/image';

export default function PageHero({ kicker, title, copy, image, imagePosition = 'center' }) {
  return (
    <section className="page-hero">
      <div className="page-hero-copy">
        <p className="eyebrow">{kicker}</p>
        <h1>{title}</h1>
        {copy && <p className="lede">{copy}</p>}
      </div>
      <div className="page-hero-image arch-window">
        <Image src={image} alt="" fill priority sizes="(max-width: 800px) 100vw, 50vw" style={{ objectPosition: imagePosition }} />
      </div>
    </section>
  );
}
