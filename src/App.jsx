import PageRouter from './app/PageRouter';
import { resolveRoute } from './app/routes.mjs';
import PageErrorBoundary from './components/feedback/PageErrorBoundary';
import SiteLayout from './components/layout/SiteLayout';

export default function App() {
  const route = resolveRoute(window.location.pathname);
  return <PageErrorBoundary>
    <SiteLayout route={route}><PageRouter route={route} /></SiteLayout>
  </PageErrorBoundary>;
}
