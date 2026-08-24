'use client';

import { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, className = '', delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
    }, { threshold: 0.12 });
    obs.observe(node);
    return () => obs.disconnect();
  }, []);
  return <div ref={ref} style={{ '--reveal-delay': `${delay}ms` }} className={`reveal ${visible ? 'visible' : ''} ${className}`}>{children}</div>;
}
