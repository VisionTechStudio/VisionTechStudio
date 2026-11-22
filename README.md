# Vision Tech Studio

Independent React 18 + Vite website. Pages render local JSX section components; images, fonts, and article content are served from this repository. There is no Framer runtime, CMS request, template embedding, or hosted page requirement.

## Local preview

```sh
npm install
npm run dev -- --port 5174
```

Open http://127.0.0.1:5174/. Build with `npm run build`; validate with `npm test`.

## Code structure

- `src/app`: route resolution and page selection.
- `src/pages`: Home, About, Blog, article and Contact compositions.
- `src/components/layout`: shared header, mobile menu and footer.
- `src/components/sections`: editable JSX sections, service and FAQ accordions.
- `src/features/about`: review content and scroll animation.
- `src/config/site.js`: brand, navigation, phone and social links.
- `src/styles`: locally retained visual styles and owned interaction styles. Opaque `vts-*` selectors preserve the existing design; they have no external runtime dependency.
- `public/assets`: local imagery, icons and fonts.

Pricing is retained as `HomePricing.jsx` but is not mounted on Home. The contact form saves a local draft; sending enquiries requires a backend integration. Changes are local for review and have not been pushed to GitHub.

## Browser regression checks

With the preview running, run `npm run test:browser`. The check compares process pinning and work/testimonial geometry to reference measurements, then checks five viewport widths and navigation/accordion behavior. On macOS it uses installed Google Chrome. Elsewhere install the test browser using `npx playwright install chromium`. Override the preview address with `PREVIEW_URL`.
