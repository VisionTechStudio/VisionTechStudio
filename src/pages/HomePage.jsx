import HomeHero from "../components/sections/HomeHero";
import HomeServiceTicker from "../components/sections/HomeServiceTicker";
import HomeIntroduction from "../components/sections/HomeIntroduction";
import HomeClients from "../components/sections/HomeClients";
import HomeProcess from "../components/sections/HomeProcess";
import HomeValues from "../components/sections/HomeValues";
import WhatWeOfferServiceSection6 from "../components/sections/Services";
import HomeWork from "../components/sections/HomeWork";
import HomeTestimonials from "../components/sections/HomeTestimonials";
import HomePricing from "../components/sections/HomePricing";
import FrequentlyAskedQuestionsSection10 from "../components/sections/Faq";
import HomeBlogPreview from "../components/sections/HomeBlogPreview";
import HomeDecorative from "../components/sections/HomeDecorative";

export default function Page() {
  return (
    <div className="vts-m53b6 vts-cn7gx">
      <div className="vts-Tn8e5 vts-7NU4V vts-UCaPq vts-72rtr7" data-vts-root>
        <HomeHero />
        <HomeServiceTicker />
        <HomeIntroduction />
        <HomeClients />
        <HomeProcess />
        <WhatWeOfferServiceSection6 />
        <HomeWork />
        <HomeValues />
        <HomeTestimonials />
        <FrequentlyAskedQuestionsSection10 />
        <HomeBlogPreview />
        <HomeDecorative />
      </div>
    </div>
  );
}
