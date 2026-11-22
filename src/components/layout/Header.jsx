import AnimatedButton from "../ui/AnimatedButton";
import { site } from "../../config/site";
import NavigationLinks from "./NavigationLinks";
import MobileHeader from "./MobileHeader";
export default function Header() {
  return (
    <>
      <MobileHeader />
      <header className="owned-header">
        <a href="/#home" aria-label="Vision Tech Studio home">
          <img src={site.logo} alt="Vision Tech Studio" />
        </a>
        <nav aria-label="Main navigation">
          <NavigationLinks />
        </nav>
        <AnimatedButton href={"/contact/"}>{"Contact Us"}</AnimatedButton>
      </header>
    </>
  );
}
