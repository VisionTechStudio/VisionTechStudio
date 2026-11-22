import { useEffect } from 'react';
import { site } from '../config/site';

export function usePageTitle(title, readySelector) {
  useEffect(() => {
    const update = () => {
      if (document.querySelector(readySelector) && document.title !== `${title} | ${site.name}`) document.title = `${title} | ${site.name}`;
    };
    const observer = new MutationObserver(update);
    observer.observe(document.body, { childList: true, subtree: true });
    observer.observe(document.head, { childList: true, subtree: true, characterData: true });
    update();
    return () => observer.disconnect();
  }, [title, readySelector]);
}
