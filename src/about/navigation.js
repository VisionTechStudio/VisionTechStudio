export function installAboutLinks() {
  const setup = () => {
    document.querySelectorAll('.homepage-section-links a, .homepage-footer-links a, .mobile-section-menu a').forEach(link => {
      if (link.textContent.trim() === 'About' && link.getAttribute('href') !== '/about/') link.setAttribute('href', '/about/');
      else if (window.location.pathname.startsWith('/about') && /^#(?:home|services|work|blog)$/.test(link.getAttribute('href') || '')) link.setAttribute('href', '/' + link.getAttribute('href'));
    });
  };
  setup();
  const observer = new MutationObserver(setup);
  observer.observe(document.body, { childList: true, subtree: true });
}
