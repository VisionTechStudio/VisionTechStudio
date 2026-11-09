# Vision Tech Studio — React + Vite

Responsive marketing, development, and design agency website built with React, JavaScript, React Router, CSS, and Vite.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173. Python is no longer required.

## Build and verify

```bash
npm test
npm run build
npm run preview
```

Deploy `dist/` to a static host. Routes: `/` and `/contact/`. SPA fallback configuration is included for Netlify and Vercel; other hosts must serve `index.html` for unknown page paths.

## Source structure

- `src/pages/`: homepage and contact page
- `src/components/`: shared header, footer, FAQ, contact form, and newsletter form
- `src/components/sections/`: individual page sections; pricing is retained but not rendered
- `src/data/`: agency content, phone number, services, navigation, FAQs, and testimonials
- `src/styles/`: preserved design styles, mobile adjustments, and React component styles
- `public/assets/`: images, fonts, logo, and favicon
- `tests/`: FAQ, form, mobile navigation, and service interaction tests

Navigation, accordions, testimonials, forms, and mobile menu use React state. The original compiled Framer JavaScript runtime and static HTML pages have been removed. Some layout class names and styles from the reference are retained to preserve the visual design. Some media still loads from Framer-hosted URLs.

The contact form currently saves an enquiry draft in local storage and explicitly states that it has not been sent. Newsletter delivery is not connected. A backend or form service is required for live submissions.
