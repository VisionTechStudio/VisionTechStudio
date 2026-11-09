import { Link } from "react-router-dom";
export default function CallToAction() {
  return (
    <section className="brand-cta">
      <img
        src="/assets/7857198059fed6f6c39a.png"
        alt="Blue metallic sculpture"
        width="642"
        height="645"
      />
      <div>
        <h1>Ready to Grow Your Brand?</h1>
        <p>Let’s build something that actually works.</p>
        <Link className="button" to="/contact/">
          Contact Us ↗
        </Link>
      </div>
    </section>
  );
}
