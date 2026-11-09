import ContactHero from "../components/sections/ContactHero";
import ContactCards from "../components/sections/ContactCards";
import ContactFaqSection from "../components/sections/ContactFaqSection";
import ContactCallToAction from "../components/sections/ContactCallToAction";
export default function ContactPage() {
  return (
    <main className="page-shell">
      <div
        className="framer-tQ9MY framer-UCaPq framer-7NU4V framer-uJsZH framer-3eJGl framer-vCVlz framer-gnwx3u react-page-root"
        data-framer-root=""
      >
        <ContactHero />
        <ContactCards />
        <ContactFaqSection />
        <ContactCallToAction />
      </div>
    </main>
  );
}
