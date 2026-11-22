import { useEffect, useRef, useState } from "react";
import { site } from "../../config/site";
import NavigationLinks from "./NavigationLinks";

export default function MobileHeader() {
  const [open, setOpen] = useState(false);
  const header = useRef(null);
  const toggle = useRef(null);
  useEffect(() => {
    const closeOutside = (event) => {
      if (!header.current?.contains(event.target)) setOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const close = () => setOpen(false);
    const media = matchMedia("(max-width:809.98px)");
    document.addEventListener("click", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    media.addEventListener("change", close);
    return () => {
      document.removeEventListener("click", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
      media.removeEventListener("change", close);
    };
  }, []);
  return (
    <header className="mobile-site-header" ref={header}>
      <a
        className="mobile-brand"
        href="/#home"
        aria-label={`${site.name} home`}
      >
        <img src={site.logo} alt={site.name} />
      </a>
      <button
        className="mobile-menu-toggle"
        ref={toggle}
        type="button"
        aria-label="Toggle navigation"
        aria-expanded={open}
        aria-controls="mobile-section-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
        <span />
      </button>
      <nav
        id="mobile-section-menu"
        className="mobile-section-menu"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        <NavigationLinks
          includeContact
          mobile
          onNavigate={() => setOpen(false)}
        />
      </nav>
    </header>
  );
}
