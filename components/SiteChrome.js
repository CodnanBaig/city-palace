'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  ['Visit', '/visit'],
  ['Collections', '/collections'],
  ['About', '/about'],
  ['Food & Drink', '/food-and-drink'],
  ['Shop', '/shop'],
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const inner = pathname !== '/';

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`site-header ${inner ? 'inner' : ''} ${scrolled ? 'is-scrolled' : ''}`}>
      <Link className="wordmark" href="/" aria-label="City Palace Museum Jaipur home">
        <span>CITY PALACE</span><small>MUSEUM · JAIPUR</small>
      </Link>
      <nav className="desktop-nav" aria-label="Primary navigation">
        {links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <div className="header-actions">
        <Link className="visit-pill" href="/visit">Plan your visit <span>↗</span></Link>
        <button className="menu-button" aria-label="Open menu" onClick={() => setOpen(v => !v)}>
          <span></span><span></span>
        </button>
      </div>
      <div className={`mobile-panel ${open ? 'open' : ''}`}>
        {links.map(([label, href], i) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>
            <span>0{i + 1}</span>{label}
          </Link>
        ))}
        <Link href="/contact" onClick={() => setOpen(false)}><span>06</span>Contact</Link>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-rule" />
      <div className="footer-main">
        <div>
          <p className="eyebrow light">The City Palace Museum, Jaipur</p>
          <h2>Nearly three centuries<br/>of Jaipur, still unfolding.</h2>
        </div>
        <div className="footer-links">
          <Link href="/visit">Visit</Link><Link href="/collections">Collections</Link>
          <Link href="/about">About</Link><Link href="/research">Research</Link>
          <Link href="/careers">Careers</Link><Link href="/contact">Contact</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>Concept redesign · Next.js</span>
        <span>The City Palace, Jaipur, Rajasthan</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

export function Shell({ children, dark = false }) {
  return <div className={dark ? 'site dark-site' : 'site'} id="top"><Header />{children}<Footer /></div>;
}
