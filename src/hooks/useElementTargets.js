import { useEffect, useState } from 'react';

/** Locate slots owned by the preserved layout without moving or replacing its nodes. */
export function useElementTargets(selector) {
  const [targets, setTargets] = useState([]);
  useEffect(() => {
    const discover = () => {
      const next = [...document.querySelectorAll(selector)];
      setTargets(previous => previous.length === next.length && previous.every((node, index) => node === next[index]) ? previous : next);
    };
    const observer = new MutationObserver(discover);
    observer.observe(document.getElementById('main') || document.body, { childList: true, subtree: true });
    discover();
    return () => observer.disconnect();
  }, [selector]);
  return targets;
}
