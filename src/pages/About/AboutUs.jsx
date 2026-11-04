
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <main className="about-page">

      {/* Full Screen Hero */}
      <section className="about-hero">
        <img
          className="about-hero-image"
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2000&q=90"
          alt="VisionTechStudio team working together"
        />

        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">
          <span className="about-hero-label">
            ABOUT VISIONTECHSTUDIO
          </span>

          <h1>
            We Build Digital
            <span> Experiences</span>
            That Matter.
          </h1>

          <p>
            We combine creativity, technology, and innovation to
            build modern digital solutions that help businesses
            grow and succeed in the digital world.
          </p>

          <div className="about-hero-buttons">
            <a href="/contact-us" className="about-btn primary-btn">
              Let's Talk
            </a>

            <a href="/services" className="about-btn outline-btn">
              Explore Services
            </a>
          </div>

          <div className="about-hero-bottom">
            <span>Creative Thinking</span>
            <span>Smart Solutions</span>
            <span>Digital Growth</span>
          </div>
        </div>

        <div className="about-scroll">
          <span></span>
          Scroll to explore
        </div>
      </section>

      {/* Our Story */}
      <section className="about-story section-padding">
        <div className="about-story-image">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85"
            alt="Modern creative workspace"
          />
          <div className="story-image-tag">
            <strong>Ideas</strong>
            <span>Into Reality</span>
          </div>
        </div>

        <div className="about-story-content">
          <span className="section-label">WHO WE ARE</span>
          <h2>
            Turning Ideas Into
            <span> Digital Reality</span>
          </h2>

          <p>
            VisionTechStudio is focused on creating meaningful
            digital experiences through modern technologies,
            creative design, and reliable development.
          </p>

          <p>
            We believe every great digital product starts with
            understanding a problem and building the right
            solution. Our goal is to help businesses establish
            a strong and effective digital presence.
          </p>

          <a href="/contact-us" className="text-link">
            Work With Us <span>→</span>
          </a>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="about-purpose section-padding">
        <div className="purpose-heading">
          <span className="section-label">OUR PURPOSE</span>
          <h2>What Drives Us Forward</h2>
          <p>
            Our work is guided by a clear purpose and a vision
            for better digital experiences.
          </p>
        </div>

        <div className="purpose-grid">
          <div className="purpose-card">
            <div className="purpose-icon">✦</div>
            <h3>Our Mission</h3>
            <p>
              To deliver innovative, reliable, and user-friendly
              digital solutions that help individuals and
              businesses achieve their goals.
            </p>
          </div>

          <div className="purpose-card">
            <div className="purpose-icon">◎</div>
            <h3>Our Vision</h3>
            <p>
              To become a trusted digital technology partner
              recognized for creativity, quality, and
              meaningful innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="about-values section-padding">
        <div className="values-heading">
          <span className="section-label">OUR VALUES</span>
          <h2>The Principles Behind Our Work</h2>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <span>01</span>
            <h3>Innovation</h3>
            <p>
              We explore new ideas and technologies to create
              better solutions.
            </p>
          </div>

          <div className="value-card">
            <span>02</span>
            <h3>Quality</h3>
            <p>
              We focus on delivering work that is reliable,
              effective, and carefully developed.
            </p>
          </div>

          <div className="value-card">
            <span>03</span>
            <h3>Transparency</h3>
            <p>
              We value clear communication and honest
              collaboration throughout every project.
            </p>
          </div>

          <div className="value-card">
            <span>04</span>
            <h3>Growth</h3>
            <p>
              We continuously learn, improve, and adapt to
              changing digital needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="about-services section-padding">
        <div className="services-heading">
          <span className="section-label">WHAT WE DO</span>
          <h2>Technology Meets Creativity</h2>
          <p>
            We provide digital services designed to support
            modern business needs.
          </p>
        </div>

        <div className="about-services-grid">
          <div className="service-card">
            <div className="service-icon">⌘</div>
            <h3>Web Development</h3>
            <p>
              Modern, responsive, and functional websites
              built around your business needs.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">✧</div>
            <h3>UI/UX Design</h3>
            <p>
              User-focused interfaces that make digital
              products easy and enjoyable to use.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">⚙</div>
            <h3>Software Solutions</h3>
            <p>
              Practical software solutions that simplify
              processes and improve productivity.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="about-why section-padding">
        <div className="why-content">
          <span className="section-label">WHY VISIONTECHSTUDIO</span>
          <h2>
            A Better Approach To
            <span> Digital Solutions</span>
          </h2>

          <p>
            We focus on understanding your requirements,
            planning carefully, and delivering solutions
            that create real value.
          </p>

          <ul>
            <li>✓ Modern technologies and creative thinking</li>
            <li>✓ User-focused design and development</li>
            <li>✓ Clear communication and collaboration</li>
            <li>✓ Focus on quality and continuous improvement</li>
          </ul>
        </div>

        <div className="why-image">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85"
            alt="Team collaborating on a project"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="cta-content">
          <span>HAVE A PROJECT IN MIND?</span>
          <h2>Let's Create Something Amazing Together.</h2>
          <p>
            Tell us about your idea and let's explore how
            we can turn it into a digital solution.
          </p>
          <a href="/contact-us" className="about-btn cta-btn">
            Get In Touch <span>→</span>
          </a>
        </div>
      </section>

    </main>
  );
};

export default AboutUs;
