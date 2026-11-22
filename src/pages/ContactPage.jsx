import ContactIntro from "../components/sections/ContactIntro";
import ContactEnquiry from "../components/sections/ContactEnquiry";
import ContactFaq from "../components/sections/Faq";
import ContactDecorative from "../components/sections/ContactDecorative";

export default function Page() {
  return (
    <div className="vts-m53b6 vts-cn7gx">
      <div className="vts-tQ9MY vts-UCaPq vts-7NU4V vts-uJsZH vts-3eJGl vts-vCVlz vts-gnwx3u">
        <ContactIntro />
        <ContactEnquiry />
        <ContactFaq />
        <ContactDecorative />
      </div>
    </div>
  );
}
