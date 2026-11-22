import AboutIntro from "../components/sections/AboutIntro";
import AboutImpact from "../components/sections/AboutImpact";
import AboutClients from "../components/sections/AboutClients";
import AboutValues from "../components/sections/AboutValues";
import AboutTeam from "../components/sections/AboutTeam";
import AboutAwards from "../components/sections/AboutAwards";
import AboutFaq from "../components/sections/Faq";
import AboutDecorative from "../components/sections/AboutDecorative";
import AboutReviews from "../features/about/components/AboutReviews";
import "../features/about/styles/about.css";
export default function Page() {
  return (
    <div className="vts-m53b6 vts-cn7gx">
      <div className="vts-zXAh7 vts-7NU4V vts-UCaPq vts-3eJGl vts-OpUNh vts-XT27m vts-uJsZH vts-od7vi5">
        <AboutIntro />
        <AboutImpact />
        <AboutClients />
        <AboutValues />
        <AboutTeam />
        <AboutAwards />
        <AboutFaq />
        <AboutDecorative />
        <AboutReviews />
      </div>
    </div>
  );
}
