
import './HomeMarquee.css'

const marqueeItems = [
  'Social Media Strategy',
  'SEO & Growth',
  'Brand Strategy',
  'Digital Marketing',
  'Web Development',
  'Performance Ads',
]

function HomeMarquee() {
  return (
    <section
      className="vt-marquee"
      aria-label="Our creative services"
    >
      <div className="vt-marquee-top">
        <span className="vt-marquee-label">
          WHAT WE DO
        </span>

        <span className="vt-marquee-description">
          Creative thinking meets digital performance
        </span>
      </div>

      <div className="vt-marquee-viewport">
        <div className="vt-marquee-track">

          {[0, 1].map((group) => (
            <div
              className="vt-marquee-group"
              key={group}
              aria-hidden={group === 1}
            >
              {marqueeItems.map((item, index) => (
                <div
                  className="vt-marquee-item"
                  key={`${group}-${item}`}
                >
                  <span className="vt-marquee-text">
                    {item}
                  </span>

                  <span
                    className={`vt-marquee-symbol ${
                      index % 2 === 0
                        ? 'vt-marquee-symbol--circle'
                        : 'vt-marquee-symbol--star'
                    }`}
                  >
                    {index % 2 === 0 ? (
                      <svg viewBox="0 0 40 40" fill="none">
                        <circle
                          cx="20"
                          cy="20"
                          r="13"
                          stroke="currentColor"
                          strokeWidth="2"
                        />
                        <circle
                          cx="20"
                          cy="20"
                          r="5"
                          fill="currentColor"
                        />
                      </svg>
                    ) : (
                      <svg viewBox="0 0 40 40" fill="none">
                        <path
                          d="M20 2L24.5 15.5L38 20L24.5 24.5L20 38L15.5 24.5L2 20L15.5 15.5L20 2Z"
                          fill="currentColor"
                        />
                      </svg>
                    )}
                  </span>
                </div>
              ))}
            </div>
          ))}

        </div>
      </div>

      <div className="vt-marquee-bottom">
        <span className="vt-marquee-bottom-line" />

        <span>
          Building brands with purpose and precision
        </span>

        <span className="vt-marquee-bottom-line" />
      </div>
    </section>
  )
}

export default HomeMarquee
