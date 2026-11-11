import React from 'react';
import BrandFilters from './components/BrandFilters';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
const BlogArticlePage = React.lazy(() => import('./pages/BlogArticlePage'));
const BlogPage = React.lazy(() => import('./pages/BlogPage'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));

class PageErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error) { return { error }; }
  render() {
    if (this.state.error) return <div role="alert" style={{ padding: 32, fontFamily: 'sans-serif' }}><h1>The page could not load.</h1><p>Please refresh to try again.</p><button onClick={() => window.location.reload()}>Reload page</button></div>;
    return this.props.children;
  }
}
export default function App() {
  const path = window.location.pathname.replace(/\/$/, '');
  const contact = path === '/contact';
  const about = path === '/about';
  const blog = path === '/blog';
  const articleSlug = path.startsWith('/blog/') ? decodeURIComponent(path.slice('/blog/'.length)) : null;
  return <PageErrorBoundary><BrandFilters />{articleSlug ? <React.Suspense fallback={null}><BlogArticlePage slug={articleSlug} /></React.Suspense> : blog ? <React.Suspense fallback={null}><BlogPage /></React.Suspense> : about ? <React.Suspense fallback={null}><AboutPage /></React.Suspense> : contact ? <ContactPage /> : <HomePage />}</PageErrorBoundary>;
}
