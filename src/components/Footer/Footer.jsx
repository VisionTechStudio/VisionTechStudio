
import { Link } from 'react-router';
import './Footer.css';

const footerLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'About Us', path: '/about-us' },
  { label: 'Blogs', path: '/blogs' },
  { label: 'Contact Us', path: '/contact-us' },
];

const socialLinks = [
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/socialmbt/',
    icon: 'instagram',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/company/socialmbt/',
    icon: 'linkedin',
  },
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/Socialmbtfb',
    icon: 'facebook',
  },
  {
    label: 'X',
    url: 'https://x.com/socialmbt_',
    icon: 'x',
  },
];

// Social media SVG icons
function SocialIcon({ type }) {
  const commonProps = {
    width: 19,
    height: 19,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
    'aria-hidden': true,
  };

  switch (type) {
    case 'instagram':
      return (
        <svg {...commonProps}>
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            stroke="currentColor"
            strokeWidth="1.8"
          />
          <circle cx="17.5" cy="6.8" r="1.1" fill="currentColor" />
        </svg>
      );

    case 'linkedin':
      return (
        <svg {...commonProps}>
          <path
            d="M5 9V19M5 5.5V5.6M10 19V9H14V10.5C14.8 9.4 16 8.8 17.2 8.8C20 8.8 20 11 20 13V19M10 13.2C10 11 11.5 9 14 9"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case 'facebook':
      return (
        <svg {...commonProps}>
          <path
            d="M14.2 21V13.2H17L17.4 10.1H14.2V8.1C14.2 7.2 14.5 6.5 15.8 6.5H17.5V3.7C17.2 3.7 16.1 3.6 14.9 3.6C12.2 3.6 10.4 5.2 10.4 8V10.1H7.5V13.2H10.4V21"
            fill="currentColor"
          />
        </svg>
      );

    case 'x':
      return (
        <svg {...commonProps}>
          <path
            d="M5 4L19 20M19 4L5 20M5 4H9L19 20H15L5 4Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    default:
      return null;
  }
}

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* Top CTA Section */}
        <div className="footer-cta">
          <div className="footer-cta-content">
            <span className="footer-eyebrow">
              LET'S BUILD SOMETHING GREAT
            </span>

            <h2>
              Have a project in mind?
              <span> Let's talk.</span>
            </h2>

            <p>
              We help businesses turn ideas into meaningful digital
              experiences through creative design and technology.
            </p>
          </div>

          <Link to="/contact-us" className="footer-cta-button">
            Start a Conversation
            <span className="footer-button-arrow">↗</span>
          </Link>
        </div>

        <div className="footer-divider" />

        {/* Main Footer */}
        <div className="footer-main">

          {/* Brand Column */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <span className="footer-logo-mark">V</span>

              <span className="footer-logo-text">
                VisionTech<span>Studio</span>
              </span>
            </Link>

            <p className="footer-description">
              We create modern digital solutions that help businesses
              grow, connect with customers and build a stronger online
              presence.
            </p>

            <div className="footer-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit our ${social.label} page`}
                  className="footer-social-link"
                >
                  <SocialIcon type={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="footer-column">
            <h3>Explore</h3>

            <ul className="footer-nav-list">
              {footerLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>
                    <span>{item.label}</span>
                    <span className="footer-link-arrow">↗</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="footer-column">
            <h3>What We Do</h3>

            <ul className="footer-nav-list">
              <li>
                <Link to="/services">
                  <span>Web Development</span>
                  <span className="footer-link-arrow">↗</span>
                </Link>
              </li>

              <li>
                <Link to="/services">
                  <span>App Development</span>
                  <span className="footer-link-arrow">↗</span>
                </Link>
              </li>

              <li>
                <Link to="/services">
                  <span>UI/UX Design</span>
                  <span className="footer-link-arrow">↗</span>
                </Link>
              </li>

              <li>
                <Link to="/services">
                  <span>Digital Marketing</span>
                  <span className="footer-link-arrow">↗</span>
                </Link>
              </li>

              <li>
                <Link to="/services">
                  <span>SEO Services</span>
                  <span className="footer-link-arrow">↗</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-column footer-contact">
            <h3>Get in Touch</h3>

            <p className="footer-contact-text">
              Have a question or want to discuss your next project?
              We'd love to hear from you.
            </p>

            <a
              href="mailto:info@visiontechstudio.com"
              className="footer-email"
            >
              info@visiontechstudio.com
            </a>

            <Link to="/contact-us" className="footer-contact-link">
              Contact Our Team
              <span>→</span>
            </Link>
          </div>
        </div>

        <div className="footer-divider footer-bottom-divider" />

        {/* Bottom Footer */}
        <div className="footer-bottom">
          <p>
            © {currentYear} VisionTechStudio. All rights reserved.
          </p>

          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms &amp; Conditions</Link>
          </div>

          <a href="#top" className="footer-back-top">
            Back to top <span>↑</span>
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
