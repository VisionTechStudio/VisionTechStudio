import CallToAction from "../sections/CallToAction";
import BrandFilters from "../BrandFilters";
import Header from "./Header";
import Footer from "./Footer";
import SiteEnhancements from "./SiteEnhancements";
export default function SiteLayout({ route, children }) {
  return (
    <>
      <BrandFilters />
      <Header />
      {children}
      <CallToAction />
      <Footer />
      <SiteEnhancements route={route} />
    </>
  );
}
