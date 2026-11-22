export function resolveRoute(pathname) {
  const path = pathname.replace(/\/+$/, '') || '/';
  const pages = { '/': 'home', '/about': 'about', '/blog': 'blog', '/contact': 'contact' };
  if (pages[path]) return { name: pages[path] };
  const article = path.match(/^\/blog\/([^/]+)$/);
  if (article) {
    try { return { name: 'article', slug: decodeURIComponent(article[1]) }; }
    catch { return { name: 'notFound' }; }
  }
  return { name: 'notFound' };
}
