
import { Link } from 'react-router'
import './HomePricing.css'

const plans = [
  {
    name: 'Starter',
    tagline: 'Ideal for small businesses',
    price: '499',
    popular: false,
    features: [
      'Social media audit & strategy',
      'Single-channel content plan',
      'Monthly performance report',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    tagline: 'Perfect for growing businesses',
    price: '1,200',
    popular: true,
    features: [
      'Full social media management',
      'Paid ad campaign setup',
      'Content creation & scheduling',
      'Analytics & tracking integration',
      'Priority support',
    ],
  },
  {
    name: 'Scale',
    tagline: 'A great fit for ambitious brands',
    price: '2,500',
    popular: false,
    features: [
      'Full-funnel marketing strategy',
      'Website & landing page design',
      'Multi-channel ad management',
      'Dedicated account strategist',
      'Weekly performance reviews',
    ],
  },
]

function HomePricing() {
  return (
    <section className="vt-pricing" id="pricing">
      <div className="vt-pricing__container">

        <div className="vt-pricing__heading">
          <h2>Simple, Transparent Pricing</h2>
          <p>
            Choose the right package for where your business is today —
            every engagement starts with a free consultation.
          </p>
        </div>

        <div className="vt-pricing__grid">
          {plans.map((plan) => (
            <div
              className={`vt-pricing-card ${plan.popular ? 'is-popular' : ''}`}
              key={plan.name}
            >
              <div className="vt-pricing-card__top">
                <div className="vt-pricing-card__title-row">
                  <h3>{plan.name}</h3>
                  {plan.popular && (
                    <span className="vt-pricing-card__badge">Popular</span>
                  )}
                </div>

                <p>{plan.tagline}</p>

                <div className="vt-pricing-card__price">
                  <span className="vt-pricing-card__currency">$</span>
                  {plan.price}
                  <span className="vt-pricing-card__period">starting at</span>
                </div>

                <Link to="/contact-us" className="vt-pricing-card__cta">
                  Get Started
                </Link>
              </div>

              <div className="vt-pricing-card__features">
                <span className="vt-pricing-card__features-label">
                  Features:
                </span>

                <ul>
                  {plan.features.map((feature) => (
                    <li key={feature}>
                      <span className="vt-pricing-card__dot" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HomePricing
