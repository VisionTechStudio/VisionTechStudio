
import { Link } from 'react-router'
import './HomeHero.css'

const heroWord = 'MARKETING'

const heroTags = [
  'Brand Strategy',
  'Performance Marketing',
  'Web Development',
  'Growth Systems',
]

const heroStats = [
  { value: '3+', label: 'Years in Marketing' },
  { value: '200+', label: 'Campaigns Delivered' },
  { value: '50+', label: 'Brands Served' },
]

function HomeHero() {
  return (
    <section className="vt-hero" aria-labelledby="vt-hero-title">

      {/* =================================
          HERO HEADING
      ================================= */}

      <div className="vt-hero__top">

        <div className="vt-hero__top-row">
          <span className="vt-hero__copyright">
            DESIGN AND
          </span>

          <span className="vt-hero__kicker">
            AGENCY
          </span>
        </div>

        <div className="vt-hero__word-frame">
          <h1
            id="vt-hero-title"
            className="vt-hero__word"
          >
            <img
              src="/Hero_pic .png"
              alt={heroWord}
              className="vt-hero__word-image"
            />
          </h1>
        </div>

      </div>

      {/* =================================
          HERO INFORMATION SECTION
      ================================= */}

      <div className="vt-hero__strip">

        <div
          className="vt-hero__strip-bg"
          aria-hidden="true"
        />

        <div
          className="vt-hero__strip-overlay"
          aria-hidden="true"
        />

        <div className="vt-hero__strip-inner">

          {/* TOP LABEL */}
          <div className="vt-hero__strip-heading">
            <span className="vt-hero__eyebrow">
              BUILT FOR BUSINESS GROWTH
            </span>

            <span className="vt-hero__location">
              CREATIVE DIGITAL AGENCY
            </span>
          </div>

          {/* STATS */}
          <div className="vt-hero__stats">

            {heroStats.map((stat) => (
              <div
                className="vt-hero__stat"
                key={stat.label}
              >
                <span className="vt-hero__stat-value">
                  {stat.value}
                </span>

                <span className="vt-hero__stat-label">
                  {stat.label}
                </span>
              </div>
            ))}

          </div>

          {/* BOTTOM CONTENT */}
          <div className="vt-hero__strip-bottom">

            <div className="vt-hero__intro">

              <span className="vt-hero__intro-label">
                WHAT WE DO
              </span>

              <p>
                Brand strategy, digital campaigns, and web
                experiences — crafted to grow your market share
                and move your business forward.
              </p>

              <div className="vt-hero__actions">

                <Link
                  to="/contact-us"
                  className="vt-hero__btn vt-hero__btn--light"
                >
                  Start Your Project
                  <span aria-hidden="true">↗</span>
                </Link>

                <Link
                  to="/services"
                  className="vt-hero__btn vt-hero__btn--outline"
                >
                  Explore Services
                  <span aria-hidden="true">↗</span>
                </Link>

              </div>
            </div>

            {/* SERVICE TAGS */}
            <div className="vt-hero__tags">

              <span className="vt-hero__tags-heading">
                OUR EXPERTISE
              </span>

              <div className="vt-hero__tags-list">
                {heroTags.map((tag) => (
                  <span
                    className="vt-hero__tag"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>

            </div>

          </div>

          {/* BOTTOM FOOTER */}
          <div className="vt-hero__footer">
            <span>VISIONTECH STUDIO</span>
            <span>STRATEGY · DESIGN · GROWTH</span>
          </div>

        </div>
      </div>

    </section>
  )
}

export default HomeHero
