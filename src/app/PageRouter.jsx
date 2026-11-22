import { lazy, Suspense } from 'react';
import HomePage from '../pages/HomePage';
import ContactPage from '../pages/ContactPage';
import NotFoundPage from '../pages/NotFoundPage';
import PageLoader from '../components/feedback/PageLoader';

const AboutPage = lazy(() => import('../pages/AboutPage'));
const BlogPage = lazy(() => import('../pages/BlogPage'));
const BlogArticlePage = lazy(() => import('../pages/BlogArticlePage'));
const pages = { home: HomePage, contact: ContactPage, about: AboutPage, blog: BlogPage, article: BlogArticlePage, notFound: NotFoundPage };

export default function PageRouter({ route }) {
  const Page = pages[route.name] || NotFoundPage;
  return <Suspense fallback={<PageLoader />}><Page slug={route.slug} /></Suspense>;
}
