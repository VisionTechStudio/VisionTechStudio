import AnimatedButton from "../ui/AnimatedButton";
import { useState } from "react";
import { site } from "../../config/site";
import NavigationLinks from "./NavigationLinks";
export default function Footer() {
  const [message, setMessage] = useState("");
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div>
          <a className="footer-brand" href="/#home">
            <img src={site.logo} alt={site.name} />
          </a>
          <p>
            Vision Tech Studio is a modern agency focused on building brands
            through strategy, design, and marketing, creating systems that drive
            clarity, consistency, and real growth.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setMessage(
              "Newsletter signup is not connected yet. Please contact us for updates.",
            );
          }}
        >
          <label htmlFor="newsletter-email">Subscribe to Our Newsletter</label>
          <div>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter your email"
              required
            />
            <AnimatedButton tone="light" type={"submit"}>
              {"Subscribe"}
            </AnimatedButton>
          </div>
          <p role="status">{message || "No spam. Just great content."}</p>
        </form>
      </div>
      <div className="footer-bottom">
        <div className="footer-navigation">
          <h3>Navigation</h3>
          <nav aria-label="Footer navigation">
            <NavigationLinks includeContact />
          </nav>
        </div>
        <div className="footer-social">
          <h3>Social Links</h3>
          {Object.entries(site.social).map(([name, href]) => (
            <a href={href} key={name} target="_blank" rel="noreferrer">
              {name}
            </a>
          ))}
        </div>
        <div className="footer-contact">
          <h3>Have a question?</h3>
          <a href={"tel:" + site.phone.replaceAll(" ", "")}>
            <span>↗</span>
            <div>
              {site.phone}
              <small>Monday to Friday, 9am to 5pm</small>
            </div>
          </a>
          <a href={site.whatsapp} target="_blank" rel="noreferrer">
            <span>☏</span>
            <div>
              Vision Tech Studio<small>We aim to reply in 24 hours</small>
            </div>
          </a>
          <a href="/contact/">
            <span>✉</span>
            <div>
              Vision Tech Studio<small>Press and media inquiries</small>
            </div>
          </a>
        </div>
      </div>
      <div className="footer-wordmark" aria-label="Vision Tech Studio">
        Vision Tech Studio
      </div>
    </footer>
  );
}
