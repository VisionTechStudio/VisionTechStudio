import { useEffect } from 'react';
import PreservedPage from '../preserved/PreservedPage';
import '../blog/blog.css';

export default function BlogPage() {
  useEffect(() => {
    let frame;
    const updateTitle = () => {
      if (!document.querySelector('.framer-tBXNZ')) return;
      observer.disconnect();
      frame = requestAnimationFrame(() => { document.title = 'Blog | Vision Tech Studio'; });
    };
    const observer = new MutationObserver(updateTitle);
    observer.observe(document.body, { childList: true, subtree: true });
    updateTitle();
    return () => { observer.disconnect(); cancelAnimationFrame(frame); };
  }, []);
  return <PreservedPage routeId="PE0dlVRH1" />;
}
