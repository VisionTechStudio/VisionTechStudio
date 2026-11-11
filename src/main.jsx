import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { installAboutLinks } from './about/navigation';
import { installNavigation } from './preserved/enhancements/navigation';
import { installContactForm } from './preserved/enhancements/contactForm';
import { restoreInitialSectionHash } from './preserved/enhancements/initialHash';
import './preserved/preserved.css';
import './preserved/mobile.css';

// These are the same navigation/form enhancements as the approved HTML version.
document.body.classList.toggle('about-page', window.location.pathname.replace(/\/$/, '') === '/about');
document.body.classList.toggle('blog-page', /^\/blog(?:\/|$)/.test(window.location.pathname));
installNavigation();
installAboutLinks();
if (window.location.pathname.startsWith('/contact')) installContactForm();
restoreInitialSectionHash();
createRoot(document.getElementById('main')).render(<App />);
