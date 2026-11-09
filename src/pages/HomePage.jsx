import HeroSection from "../components/sections/HeroSection";
import BrandTicker from "../components/sections/BrandTicker";
import AboutSection from "../components/sections/AboutSection";
import ClientsSection from "../components/sections/ClientsSection";
import ProcessSection from "../components/sections/ProcessSection";
import ServicesSection from "../components/sections/ServicesSection";
import WorkSection from "../components/sections/WorkSection";
import ValuesSection from "../components/sections/ValuesSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import HomeFaqSection from "../components/sections/HomeFaqSection";
import BlogSection from "../components/sections/BlogSection";
import CallToAction from "../components/sections/CallToAction";
// PricingSection remains available in components/sections but is intentionally not mounted.
export default function HomePage() {
  return (
    <main className="page-shell">
      <div
        className="framer-Tn8e5 framer-7NU4V framer-UCaPq framer-72rtr7 react-page-root"
        data-framer-root=""
      >
        <HeroSection />
        <BrandTicker />
        <AboutSection />
        <ClientsSection />
        <ProcessSection />
        <ServicesSection />
        <WorkSection />
        <ValuesSection />
        <TestimonialsSection />
        <HomeFaqSection />
        <BlogSection />
        <CallToAction />
      </div>
    </main>
  );
}
