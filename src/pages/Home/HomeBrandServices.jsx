
import { useState } from 'react'
import { Link } from 'react-router'
import './HomeBrandServices.css'

const services = [
  {
    number: '01',
    category: 'Marketing Service',
    title: 'Social Media Strategy',
    description:
      'Audience research, positioning, funnels, and messaging built around your business goals.',
    stat: '200+ projects done',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&h=700&q=85',
    features: ['Audience Research', 'Platform Selection', 'Content Planning'],
  },
  {
    number: '02',
    category: 'Content Service',
    title: 'Social Media Management',
    description:
      'Consistent content and community management that builds trust and engagement.',
    stat: '200+ projects done',
    image:
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&h=700&q=85',
    features: ['Content Scheduling', 'Community Management', 'Account Optimization'],
  },
  {
    number: '03',
    category: 'Media Service',
    title: 'Social Media Advertising',
    description:
      'Performance-driven paid campaigns built to convert, across every major platform.',
    stat: '200+ projects done',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&h=700&q=85',
    features: ['Campaign Planning', 'Audience Targeting', 'Ad Optimization'],
  },
  {
    number: '04',
    category: 'Design Service',
    title: 'Content Development',
    description:
      'Distinctive ideas, powerful hooks, and scroll-stopping content, tailored to your brand.',
    stat: '200+ projects done',
    image:
      'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=900&h=700&q=85',
    features: ['Creative Concepts', 'Visual Content', 'Brand Storytelling'],
  },
]

function HomeBrandServices() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="vt-offer">
      <div className="vt-offer__container">

        <div className="vt-offer__heading">
          <h2>What We Offer</h2>
          <p>End to end solutions to build, grow, and scale your brand.</p>
        </div>

        <div className="vt-offer__accordion">
          {services.map((service, index) => {
            const isOpen = openIndex === index

            return (
              <div
                className={`vt-offer-row ${isOpen ? 'is-open' : ''}`}
                key={service.number}
                onMouseEnter={() => setOpenIndex(index)}
              >
                <button
                  type="button"
                  className="vt-offer-row__header"
                  aria-expanded={isOpen}
                  aria-controls={`vt-offer-panel-${index}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className="vt-offer-row__number">{service.number}</span>
                  <span className="vt-offer-row__category">{service.category}</span>
                  <span className="vt-offer-row__title">{service.title}</span>
                  <span className="vt-offer-row__toggle" aria-hidden="true">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>

                <div
                  className="vt-offer-row__panel"
                  id={`vt-offer-panel-${index}`}
                >
                  <div className="vt-offer-row__panel-inner">
                    <div className="vt-offer-row__image">
                      <img src={service.image} alt={service.title} loading="lazy" />
                    </div>

                    <div className="vt-offer-row__content">
                      <div className="vt-offer-row__content-top">
                        <div className="vt-offer-row__stat">{service.stat}</div>

                        <Link to="/contact-us" className="vt-offer-row__cta">
                          Start Your Project
                          <span aria-hidden="true">↗</span>
                        </Link>
                      </div>

                      <p>{service.description}</p>

                      <div className="vt-offer-row__features">
                        {service.features.map((feature) => (
                          <span key={feature}>{feature}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}

export default HomeBrandServices
