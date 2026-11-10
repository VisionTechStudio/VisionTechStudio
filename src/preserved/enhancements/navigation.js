export function installNavigation() {
  const targets = {home: '.framer-Tn8e5 > .framer-16gyzkb', services: '.framer-1xpcbiz-container', work: 'section.framer-nt0kpk', about: 'section.framer-1quk8jj', blog: 'section.framer-2eieck', contact: 'footer'};
  const links = [['home','Home'],['services','Services'],['work','Work'],['about','About'],['blog','Blog']];
  function closeMobileMenu() {
    const header = document.querySelector('.mobile-site-header');
    if (!header) return;
    header.querySelector('button').setAttribute('aria-expanded','false');
    header.querySelector('nav').hidden = true;
  }
  function createMobileHeader() {
    if (document.querySelector('.mobile-site-header')) return;
    const header = document.createElement('header');
    header.className = 'mobile-site-header';
    const onContact = location.pathname.startsWith('/contact');
    header.innerHTML = `<a class="mobile-brand" href="/#home" aria-label="Vision Tech Studio home"><img src="/assets/vision-tech-studio-logo.png" alt="Vision Tech Studio"></a><button class="mobile-menu-toggle" type="button" aria-label="Toggle navigation" aria-expanded="false" aria-controls="mobile-section-menu"><span></span><span></span><span></span></button><nav id="mobile-section-menu" class="mobile-section-menu" aria-label="Mobile navigation" hidden>${links.map(([id,label])=>`<a href="${onContact ? '/#'+id : '#'+id}">${label}</a>`).join('')}<a href="/contact/">Contact Us</a></nav>`;
    document.body.prepend(header);
  }
  function setup() {
    createMobileHeader();
    for (const [id, selector] of Object.entries(targets)) {
      const section = document.querySelector(selector);
      if (section && section.id !== id) section.id = id;
    }
    document.querySelectorAll('nav.framer-Gs2BG .framer-155vra').forEach(container => {
      if (container.querySelector('.homepage-section-links')) return;
      const menu = document.createElement('div');
      menu.className = 'homepage-section-links';
      menu.innerHTML = links.map(([id,label]) => `<a href="${id === 'contact' ? '/contact/' : location.pathname.startsWith('/contact') ? '/#'+id : '#'+id}">${label}</a>`).join('');
      container.append(menu);
    });
    document.querySelectorAll('footer .framer-1njhgww').forEach(container => {
      if (container.querySelector('.homepage-footer-links')) return;
      const menu = document.createElement('div');
      menu.className = 'homepage-footer-links';
      menu.innerHTML = '<p class="footer-menu-title">Navigation</p>' + [...links, ['contact','Contact']].map(([id,label]) => `<a href="${id === 'contact' ? '/contact/' : location.pathname.startsWith('/contact') ? '/#'+id : '#'+id}">${label}</a>`).join('');
      container.append(menu);
    });
    document.querySelectorAll('nav.framer-Gs2BG a').forEach(a => {
      if (/Contact Us/.test(a.textContent) && a.getAttribute('href') !== '/contact/') a.setAttribute('href','/contact/');
    });
  }
  document.addEventListener('click', event => {
    const toggle = event.target.closest('.mobile-menu-toggle');
    if (toggle) {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded',String(open));
      document.getElementById('mobile-section-menu').hidden = !open;
      return;
    }
    if (!event.target.closest('.mobile-site-header') || event.target.closest('.mobile-site-header a')) closeMobileMenu();
    const a = event.target.closest('a');
    if (!a || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    const href = a.getAttribute('href');
    if (href && (/^(?:https:\/\/marketinglab\.framer\.ai)?\/?contact\/?$/.test(href) || href === '#contact')) {
      event.preventDefault(); event.stopImmediatePropagation();
      if (location.pathname.startsWith('/contact')) document.querySelector('form.framer-7rfox')?.scrollIntoView({behavior:'smooth'});
      else location.href = '/contact/';
      return;
    }
    if (!a.closest('nav.framer-Gs2BG, .mobile-site-header, footer .homepage-footer-links')) return;
    const id = href === '/' ? 'home' : href?.startsWith('#') ? href.slice(1) : null;
    if (!id || !targets[id]) return;
    const target = document.querySelector(targets[id]);
    if (!target) return;
    event.preventDefault(); event.stopImmediatePropagation();
    target.scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block:'start'});
    history.replaceState(null, '', '#'+id);
  }, true);
  document.addEventListener('keydown',event=>{if(event.key === 'Escape'){closeMobileMenu();document.querySelector('.mobile-menu-toggle')?.focus();}});
  matchMedia('(max-width:809.98px)').addEventListener('change',closeMobileMenu);
  setup();
  new MutationObserver(setup).observe(document.body, {childList:true,subtree:true});
}
