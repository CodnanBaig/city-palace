'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    fn();
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <Link className="wordmark" href="/" aria-label="City Palace Museum Jaipur home">
        <span>CITY PALACE</span><small>MUSEUM · JAIPUR</small>
      </Link>
      <div className="header-actions">
        <a className="visit-pill" href="#visit">Plan your visit <span>↓</span></a>
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
      </div>
      <div className="footer-bottom">
        <span>© The City Palace Museum, Jaipur</span>
        <span>The City Palace, Jaipur, Rajasthan</span>
        <a href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}

export function Shell({ children, dark = false }) {
  return <div className={dark ? 'site dark-site' : 'site'} id="top"><Header />{children}<Footer /></div>;
}
