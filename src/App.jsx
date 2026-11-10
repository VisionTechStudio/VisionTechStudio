import React from 'react';
import BrandFilters from './components/BrandFilters';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';

class PageErrorBoundary extends React.Component {
  state = { error: null };
  static getDerivedStateFromError(error) { return { error }; }
  render() {
    if (this.state.error) return <div role="alert" style={{ padding: 32, fontFamily: 'sans-serif' }}><h1>The page could not load.</h1><p>Please refresh to try again.</p><button onClick={() => window.location.reload()}>Reload page</button></div>;
    return this.props.children;
  }
}
export default function App() {
  const contact = window.location.pathname.replace(/\/$/, '') === '/contact';
  return <PageErrorBoundary><BrandFilters />{contact ? <ContactPage /> : <HomePage />}</PageErrorBoundary>;
}
