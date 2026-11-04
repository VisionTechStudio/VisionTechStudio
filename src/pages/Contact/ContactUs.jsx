
import { useState } from 'react';
import './ContactUs.css';

const initialFormData = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

function ContactUs() {
  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Frontend demo only. Backend integration will be added later.
    setSubmitted(true);
    setFormData(initialFormData);
  };

  return (
    <main className="contact-page">

      {/* FULL SCREEN HERO */}
      <section className="contact-hero">

        <img
         className="contact-hero-bg"
         src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=90"
         alt="Team collaborating in a creative workspace"
        />

        <div className="contact-hero-overlay"></div>

        <div className="contact-hero-content">

          <span className="contact-eyebrow">
            <span className="contact-eyebrow-line"></span>
            LET'S CONNECT
          </span>

          <h1>
            Let's Build Something
            <span>Amazing Together.</span>
          </h1>

          <p>
            Have an idea, a project, or a challenge?
            Let's turn your vision into a powerful digital
            experience with creativity, technology, and innovation.
          </p>

          <div className="contact-hero-actions">
            <a href="#contact-form" className="contact-hero-btn">
              Start a Conversation
              <span>↗</span>
            </a>

            <a href="#contact-details" className="contact-hero-secondary">
              Explore Contact Details
            </a>
          </div>

          <div className="contact-hero-features">
            <span>Creative Solutions</span>
            <span>Modern Technology</span>
            <span>Digital Growth</span>
          </div>

        </div>

        <div className="contact-hero-bottom">
          <span>VISIONTECHSTUDIO</span>
          <span>CONNECT · CREATE · GROW</span>
        </div>

        <a href="#contact-intro" className="contact-scroll">
          <span className="contact-scroll-line"></span>
          SCROLL TO EXPLORE
        </a>

      </section>

      {/* INTRODUCTION */}
      <section className="contact-intro" id="contact-intro">

        <span className="contact-section-label">
          GET IN TOUCH
        </span>

        <h2>
          We'd Love to
          <span> Hear From You.</span>
        </h2>

        <p>
          Whether you need a new website, a mobile application,
          or a complete digital solution, let's discuss how
          we can help your business grow.
        </p>

      </section>

      {/* CONTACT INFORMATION + FORM */}
      <section className="contact-main">

        {/* CONTACT DETAILS */}
        <div className="contact-info-panel" id="contact-details">

          <div className="contact-info-heading">
            <span className="contact-section-label">
              CONTACT DETAILS
            </span>

            <h2>Let's Talk</h2>

            <p>
              Have questions or want to discuss a project?
              Choose the easiest way to reach us.
            </p>
          </div>

          <div className="contact-detail-card">
            <div className="contact-detail-icon">✉</div>

            <div>
              <span>Email Address</span>
              <h3>info@visiontechstudio.com</h3>
              <small>Send us your project details</small>
            </div>
          </div>

          <div className="contact-detail-card">
            <div className="contact-detail-icon">☎</div>

            <div>
              <span>Phone Number</span>
              <h3>+92 300 0000000</h3>
              <small>Talk to our team directly</small>
            </div>
          </div>

          <div className="contact-detail-card">
            <div className="contact-detail-icon">⌖</div>

            <div>
              <span>Our Location</span>
              <h3>Lahore, Pakistan</h3>
              <small>Serving clients with digital solutions</small>
            </div>
          </div>

          <div className="contact-info-footer">
            <span>Have an idea?</span>
            <strong>Let's make it happen.</strong>
          </div>

        </div>

        {/* CONTACT FORM */}
        <div className="contact-form-wrapper" id="contact-form">

          <div className="contact-form-heading">
            <span className="contact-section-label">
              SEND AN INQUIRY
            </span>

            <h2>Tell Us About Your Project</h2>

            <p>
              Fill in the details below and tell us what
              you're looking to create.
            </p>
          </div>

          {submitted && (
            <div className="contact-success-message" role="status">
              <span>✓</span>

              <div>
                <strong>Thank you for contacting us!</strong>
                <p>
                  Your form has been submitted in this demo.
                  Message delivery will work after backend integration.
                </p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit}>

            <div className="contact-form-row">

              <div className="contact-input-group">
                <label htmlFor="contact-name">Full Name *</label>

                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="contact-input-group">
                <label htmlFor="contact-email">Email Address *</label>

                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>

            </div>

            <div className="contact-form-row">

              <div className="contact-input-group">
                <label htmlFor="contact-phone">Phone Number</label>

                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  placeholder="+92 300 1234567"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                />
              </div>

              <div className="contact-input-group">
                <label htmlFor="contact-service">
                  Interested Service *
                </label>

                <select
                  id="contact-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choose a service</option>
                  <option value="Web Development">Web Development</option>
                  <option value="App Development">App Development</option>
                  <option value="UI/UX Design">UI/UX Design</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="SEO Services">SEO Services</option>
                  <option value="Other">Other</option>
                </select>
              </div>

            </div>

            <div className="contact-input-group">
              <label htmlFor="contact-message">Your Message *</label>

              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell us about your idea, project requirements, or questions..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-submit-btn">
              <span>Send Your Message</span>
              <span className="contact-submit-arrow">↗</span>
            </button>

            <p className="contact-form-disclaimer">
              Your information is used only to respond to your inquiry.
            </p>

          </form>

        </div>

      </section>

      {/* BOTTOM CTA */}
      <section className="contact-bottom-cta">

        <div className="contact-cta-content">
          <span className="contact-section-label">
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            Your Next Big Idea
            <span> Starts Here.</span>
          </h2>

          <p>
            Let's work together to create digital experiences
            that make a difference.
          </p>
        </div>

        <a href="#contact-form" className="contact-cta-link">
          Let's Talk
          <span>↗</span>
        </a>

      </section>

    </main>
  );
}

export default ContactUs;
