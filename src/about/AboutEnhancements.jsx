import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import AboutReviews from './AboutReviews';

export default function AboutEnhancements() {
  const [slot, setSlot] = useState(null);
  useLayoutEffect(() => {
    const holder = document.createElement('div');
    holder.className = 'about-reviews-slot';
    const place = () => {
      const cta = document.querySelector('section.framer-cTX5B');
      if (!cta?.parentElement) return;
      if (holder.parentElement !== cta.parentElement || holder.nextElementSibling !== cta) cta.before(holder);
      setSlot(current => current === holder ? current : holder);
      document.title = 'About Us | Vision Tech Studio';
    };
    const observer = new MutationObserver(place);
    observer.observe(document.getElementById('main') || document.body, { childList: true, subtree: true });
    place();
    return () => { observer.disconnect(); holder.remove(); };
  }, []);
  return slot ? createPortal(<AboutReviews />, slot) : null;
}
