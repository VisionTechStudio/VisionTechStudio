import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigation } from "../data/site";
export default function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location]);
  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          to="/#home"
          className="brand-icon"
          aria-label="Vision Tech Studio home"
        >
          <img
            src="/assets/vision-tech-studio-logo.png"
            alt="Vision Tech Studio"
          />
        </Link>
        <nav
          className={`site-navigation ${open ? "is-open" : ""}`}
          id="site-navigation"
          aria-label="Main navigation"
        >
          {navigation.map(([id, label]) => (
            <Link key={id} to={`/#${id}`} onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <Link className="button mobile-contact" to="/contact/">
            Contact Us ↗
          </Link>
        </nav>
        <Link className="button header-contact" to="/contact/">
          Contact Us ↗
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
