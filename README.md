# Vision Tech Studio — React + Vite

The approved website is rendered as a React app without redesigning its sections or replacing its animations.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173. Routes: `/`, `/about/`, `/blog/`, and `/contact/`.

```bash
npm test
npm run build
npm run preview
```

Deploy `dist/`. SPA fallback configuration is included for Netlify and Vercel.

## How the faithful conversion works

The approved HTML export already used React components and Framer motion code. Replacing those components changed the visual design and interactions. This version retains that original React component tree and the original styling and motion implementation.

- `src/main.jsx`: standard React DOM entry point.
- `src/App.jsx` and `src/pages/`: JSX application and page entry components.
- `src/preserved/PreservedPage.jsx`: renders the original React page tree with its original layout, router, and motion providers.
- `src/preserved/runtime/`: original page, component, ticker, scroll-reveal, and motion modules. A small compatibility module routes them to the app's single installed React 18 instance, matching the original export's React version.
- `src/preserved/preserved.css` and `mobile.css`: unchanged approved styling and responsive overrides.
- `src/preserved/enhancements/`: approved navigation and local enquiry-draft behavior.
- `src/preserved/initial-data.json`: original cached case-study/blog data, included by Vite before the app starts.
- `src/preserved/approved-manifest.json`: checksums identifying the approved page, component, motion, style, and enhancement implementations.
- `public/assets/`: logo, favicon, media, and fonts.
- `tests/`: source-preservation checks and actual React DOM mounting checks for all four pages.

There are no HTML iframes or `dangerouslySetInnerHTML` page wrappers. The original page components render through React. The original exporter bootstrap/editor badge is disabled because the JSX app owns mounting.

The approved baseline is commit `685ca00`, before the redesigning conversion. Pricing remains in its original component code and is hidden on the homepage, as requested. Some media and fonts continue to use Framer hosting.

The contact form retains the approved behavior: it saves a local browser draft and does not send an email. Live submission delivery still needs a backend or form service.

The About page integrates the supplied About layout and review design as React components. Its styles are scoped to `/about/`; the current shared header, footer, logo, and contact details are retained. Review names, quotes, and results from the supplied file remain clearly labeled fictional demo content.

The Blog listing uses the supplied four-article layout through the original React page module, with page-scoped styles and shared navigation to `/blog/`.

Blog article links also support direct loads and refreshes at `/blog/:slug`. The listing’s supplied data cache is merged with the homepage cache at build time so neither page waits for its initial article cards.
