// CSR integration only: preserve links arriving from the contact page to a home section.
export function restoreInitialSectionHash() {
  if (!window.location.hash) return;
  let id;
  try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
  const observer = new MutationObserver(scrollWhenReady);
  function scrollWhenReady() {
    const target = document.getElementById(id);
    if (!target) return;
    observer.disconnect();
    requestAnimationFrame(() => requestAnimationFrame(() => target.scrollIntoView({ block: 'start', behavior: 'auto' })));
  }
  observer.observe(document.getElementById('main'), { childList: true, subtree: true });
  scrollWhenReady();
}
