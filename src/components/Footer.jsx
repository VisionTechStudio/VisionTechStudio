import { Link } from "react-router-dom";
import { brand, navigation } from "../data/site";
import NewsletterForm from "./NewsletterForm";
export default function Footer() {
  return (
    <footer className="site-footer" id="footer">
      <div className="footer-content">
        <div className="footer-intro">
          <div>
            <Link
              to="/#home"
              className="brand-icon footer-brand"
              aria-label="Vision Tech Studio home"
            >
              <img
                src="/assets/vision-tech-studio-logo.png"
                alt="Vision Tech Studio"
              />
            </Link>
            <p>
              Vision Tech Studio is a modern agency focused on building brands
              through strategy, design, development, and marketing, creating
              systems that drive clarity, consistency, and real growth.
            </p>
          </div>
          <NewsletterForm />
        </div>
        <div className="footer-columns">
          <div>
            <h3>Navigation</h3>
            <nav className="footer-navigation" aria-label="Footer navigation">
              {[...navigation, ["contact", "Contact"]].map(([id, label]) => (
                <Link key={id} to={id === "contact" ? "/contact/" : `/#${id}`}>
                  {label}
                </Link>
              ))}
            </nav>
          </div>
          <div className="footer-social">
            <h3>Social Links</h3>
            {[
              ["Facebook", "https://www.facebook.com/"],
              ["Instagram", "https://www.instagram.com/"],
              ["Twitter / X", "https://x.com/"],
              ["LinkedIn", "https://www.linkedin.com/"],
            ].map(([name, url]) => (
              <a key={name} href={url} target="_blank" rel="noreferrer">
                {name}
              </a>
            ))}
          </div>
          <div className="footer-contact">
            <h3>Have a question?</h3>
            <a href={brand.phoneHref}>↗ &nbsp; {brand.phone}</a>
            <small>Monday to Friday, 9am to 5pm</small>
            <Link to="/contact/">Vision Tech Studio</Link>
            <small>Tell us about your project</small>
          </div>
        </div>
      </div>
      <div className="footer-wordmark" aria-label="Vision Tech Studio">
        Vision Tech Studio
      </div>
    </footer>
  );
}
