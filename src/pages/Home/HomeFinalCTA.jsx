
import { Link } from 'react-router'
import './HomeFinalCTA.css'

function HomeFinalCTA() {
  return (
    <section className="vt-final-cta">
      <div className="vt-final-cta__container">

        <svg
          className="vt-final-cta__shape"
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="vt-final-cta-gradient" x1="0" y1="0" x2="200" y2="200">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#14213d" />
            </linearGradient>
          </defs>
          <path
            d="M18 60L60 18L102 60L60 102L18 60Z"
            fill="url(#vt-final-cta-gradient)"
          />
          <path
            d="M98 140L140 98L182 140L140 182L98 140Z"
            fill="url(#vt-final-cta-gradient)"
            opacity="0.55"
          />
        </svg>

        <h2>Ready to Grow Your Brand?</h2>
        <p>Let&apos;s build something that actually works.</p>

        <Link to="/contact-us" className="vt-final-cta__button">
          Contact Us
          <span aria-hidden="true">↗</span>
        </Link>

      </div>

      <span className="vt-final-cta__watermark" aria-hidden="true">
        VisionTech
      </span>
    </section>
  )
}

export default HomeFinalCTA
