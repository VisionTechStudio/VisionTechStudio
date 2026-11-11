export function installAboutLinks() {
  const setup = () => {
    const title = document.title.replace(/ - My Framer Site$/, ' | Vision Tech Studio');
    if (document.title !== title) document.title = title;
    document.querySelectorAll('a[href^="./blog/"]').forEach(link => link.setAttribute('href', link.getAttribute('href').slice(1)));
    document.querySelectorAll('.homepage-section-links a, .homepage-footer-links a, .mobile-section-menu a').forEach(link => {
      const label = link.textContent.trim();
      const destination = label === 'About' ? '/about/' : label === 'Blog' ? '/blog/' : null;
      if (destination && link.getAttribute('href') !== destination) link.setAttribute('href', destination);
      else if (/^\/(?:about|blog)(?:\/|$)/.test(window.location.pathname) && /^#(?:home|services|work)$/.test(link.getAttribute('href') || '')) link.setAttribute('href', '/' + link.getAttribute('href'));
    });
  };
  setup();
  const observer = new MutationObserver(setup);
  observer.observe(document.body, { childList: true, subtree: true });
  observer.observe(document.head, { childList: true, subtree: true, characterData: true });
}
