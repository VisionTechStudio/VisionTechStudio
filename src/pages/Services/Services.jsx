import React from 'react'
import { Link } from 'react-router'
import './Services.css'

const services = [
  {
    number: '01',
    icon: 'strategy',
    title: 'Social Media Strategy',
    description:
      'Build a powerful social media strategy aligned with your business goals, brand identity and target audience.',
    features: [
      'Audience research',
      'Platform selection',
      'Content planning',
    ],
  },
  {
    number: '02',
    icon: 'management',
    title: 'Social Media Management',
    description:
      'Maintain a consistent brand presence through strategic content, community engagement and account management.',
    features: [
      'Content scheduling',
      'Community management',
      'Account optimization',
    ],
  },
  {
    number: '03',
    icon: 'advertising',
    title: 'Social Media Advertising',
    description:
      'Create targeted advertising campaigns that connect your business with relevant audiences.',
    features: [
      'Campaign planning',
      'Audience targeting',
      'Ad optimization',
    ],
  },
  {
    number: '04',
    icon: 'content',
    title: 'Content Development',
    description:
      'Develop engaging and purposeful content that communicates your brand message across digital platforms.',
    features: [
      'Creative concepts',
      'Visual content',
      'Brand storytelling',
    ],
  },
  {
    number: '05',
    icon: 'analytics',
    title: 'Reporting & Analytics',
    description:
      'Understand your marketing performance through meaningful insights and transparent reporting.',
    features: [
      'Performance tracking',
      'Campaign reporting',
      'Growth insights',
    ],
  },
  {
    number: '06',
    icon: 'consulting',
    title: 'Consulting',
    description:
      'Get expert guidance to strengthen your digital presence and make more informed marketing decisions.',
    features: [
      'Marketing guidance',
      'Growth opportunities',
      'Strategic recommendations',
    ],
  },
]

const benefits = [
  {
    number: '01',
    title: 'Strategy First',
    description:
      'Every decision starts with understanding your business objectives and audience.',
  },
  {
    number: '02',
    title: 'Creative Excellence',
    description:
      'We combine creative thinking with purposeful brand communication.',
  },
  {
    number: '03',
    title: 'Data-Driven Approach',
    description:
      'Insights and performance data guide continuous improvement.',
  },
  {
    number: '04',
    title: 'Transparent Collaboration',
    description:
      'Clear communication and collaborative planning throughout the process.',
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Understand your brand, goals, audience and current digital presence.',
  },
  {
    number: '02',
    title: 'Strategize',
    description:
      'Develop a focused marketing strategy and actionable roadmap.',
  },
  {
    number: '03',
    title: 'Execute',
    description:
      'Implement campaigns, publish content and manage digital activities.',
  },
  {
    number: '04',
    title: 'Optimize',
    description:
      'Evaluate performance, identify opportunities and refine the strategy.',
  },
]

function ServiceIcon({ type }) {
  const icons = {
    strategy: (
      <>
        <path d="M12 3v3" />
        <path d="M5.6 5.6l2.1 2.1" />
        <path d="M3 12h3" />
        <path d="M12 21v-3" />
        <path d="M18.4 18.4l-2.1-2.1" />
        <path d="M21 12h-3" />
        <circle cx="12" cy="12" r="5" />
      </>
    ),
    management: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M8 9h8" />
        <path d="M8 13h5" />
        <path d="M8 17h3" />
      </>
    ),
    advertising: (
      <>
        <path d="M4 10v4h4l8 4V6l-8 4H4z" />
        <path d="M8 14l2 6" />
        <path d="M19 9l2-2" />
        <path d="M19 15l2 2" />
      </>
    ),
    content: (
      <>
        <rect x="4" y="4" width="16" height="16" rx="3" />
        <path d="M8 9h8" />
        <path d="M8 13h8" />
        <path d="M8 17h4" />
      </>
    ),
    analytics: (
      <>
        <path d="M4 19V5" />
        <path d="M4 19h16" />
        <rect x="7" y="12" width="3" height="5" rx="1" />
        <rect x="12" y="8" width="3" height="9" rx="1" />
        <rect x="17" y="5" width="3" height="12" rx="1" />
      </>
    ),
    consulting: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M5 20a7 7 0 0 1 14 0" />
        <path d="M18 5l2 2" />
      </>
    ),
  }

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[type]}
    </svg>
  )
}

function Services() {
  return (
    <main className="vt-services">

      {/* HERO SECTION */}
      <section className="vt-services-hero">
        <div className="vt-services-hero-overlay" />

        <div className="vt-services-container">
          <div className="vt-services-hero-content">

            <span className="vt-services-label">
              OUR SERVICES
            </span>

            <h1>
              Digital Marketing
              <span> That Moves </span>
              Your Brand Forward.
            </h1>

            <p>
              We combine strategy, creativity and technology
              to help businesses build meaningful digital
              connections and strengthen their online presence.
            </p>

            <div className="vt-services-hero-actions">

              <Link
                to="/contact-us"
                className="vt-services-btn vt-services-btn-primary"
              >
                Get Started
                <span aria-hidden="true">↗</span>
              </Link>

              <a
                href="#our-services"
                className="vt-services-btn vt-services-btn-outline"
              >
                Explore Services
                <span aria-hidden="true">↓</span>
              </a>

            </div>

            <div className="vt-services-hero-note">
              <span className="vt-services-status-dot" />
              Strategy-led. Creative-driven. Technology-enabled.
            </div>

          </div>
        </div>

        <a
          href="#our-services"
          className="vt-services-scroll"
          aria-label="Scroll to services"
        >
          <span className="vt-services-scroll-line" />
          <span>SCROLL TO EXPLORE</span>
        </a>

      </section>

      {/* SERVICES SECTION */}
      <section
        className="vt-services-section"
        id="our-services"
      >
        <div className="vt-services-container">

          <div className="vt-services-section-heading">

            <div>
              <span className="vt-services-label">
                WHAT WE DO
              </span>

              <h2>
                Everything Your Brand
                <span> Needs to Grow.</span>
              </h2>
            </div>

            <p>
              Comprehensive digital marketing services
              designed to help your brand communicate,
              connect and grow.
            </p>

          </div>

          <div className="vt-services-grid">

            {services.map((service) => (
              <article
                className="vt-service-card"
                key={service.number}
              >

                <div className="vt-service-card-top">

                  <div className="vt-service-icon">
                    <ServiceIcon type={service.icon} />
                  </div>

                  <span className="vt-service-number">
                    {service.number}
                  </span>

                </div>

                <h3>{service.title}</h3>

                <p className="vt-service-description">
                  {service.description}
                </p>

                <ul className="vt-service-features">
                  {service.features.map((feature) => (
                    <li key={feature}>
                      <span aria-hidden="true">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact-us"
                  className="vt-service-link"
                >
                  Discuss This Service
                  <span aria-hidden="true">↗</span>
                </Link>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="vt-services-benefits">
        <div className="vt-services-container">

          <div className="vt-services-section-heading">

            <div>
              <span className="vt-services-label">
                WHY VISIONTECHSTUDIO
              </span>

              <h2>
                More Than Marketing.
                <span> A Strategic Partner.</span>
              </h2>
            </div>

            <p>
              We focus on meaningful strategies,
              thoughtful execution and long-term
              brand development.
            </p>

          </div>

          <div className="vt-services-benefits-grid">

            {benefits.map((benefit) => (
              <article
                className="vt-services-benefit"
                key={benefit.number}
              >
                <span>{benefit.number}</span>

                <h3>{benefit.title}</h3>

                <p>{benefit.description}</p>
              </article>
            ))}

          </div>
        </div>
      </section>

      {/* PROCESS SECTION */}
      <section className="vt-services-process">
        <div className="vt-services-container">

          <div className="vt-services-process-heading">

            <span className="vt-services-label">
              HOW WE WORK
            </span>

            <h2>
              A Clear Process.
              <span> A Better Direction.</span>
            </h2>

            <p>
              From understanding your business to
              continuously improving performance,
              every step has a purpose.
            </p>

          </div>

          <div className="vt-services-process-grid">

            {processSteps.map((step) => (
              <article
                className="vt-services-process-step"
                key={step.number}
              >

                <span className="vt-services-process-number">
                  {step.number}
                </span>

                <div className="vt-services-process-line" />

                <h3>{step.title}</h3>

                <p>{step.description}</p>

              </article>
            ))}

          </div>
        </div>
      </section>

      {/* AI SECTION */}
      <section className="vt-services-ai">
        <div className="vt-services-container">

          <div className="vt-services-ai-card">

            <div className="vt-services-ai-content">

              <span className="vt-services-ai-label">
                TECHNOLOGY-ENABLED MARKETING
              </span>

              <h2>
                Smarter Marketing.
                <span> Better Insights.</span>
              </h2>

              <p>
                We embrace modern technology and AI-enabled
                workflows to support research, creative
                development, analysis and marketing optimization.
              </p>

              <Link
                to="/contact-us"
                className="vt-services-btn vt-services-btn-light"
              >
                Explore Possibilities
                <span aria-hidden="true">↗</span>
              </Link>

            </div>

            <div className="vt-services-ai-visual">

              <div className="vt-services-ai-circle vt-services-ai-circle-one" />

              <div className="vt-services-ai-circle vt-services-ai-circle-two" />

              <div className="vt-services-ai-center">
                <span>AI</span>
                <small>ENABLED</small>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="vt-services-final-cta">
        <div className="vt-services-container">

          <span className="vt-services-label">
            LET'S BUILD SOMETHING GREAT
          </span>

          <h2>
            Ready to Take Your
            <span> Brand Forward?</span>
          </h2>

          <p>
            Let's discuss your goals and find the
            right digital marketing solutions for
            your business.
          </p>

          <Link
            to="/contact-us"
            className="vt-services-btn vt-services-btn-primary"
          >
            Start a Conversation
            <span aria-hidden="true">↗</span>
          </Link>

        </div>
      </section>

    </main>
  )
}

export default Services