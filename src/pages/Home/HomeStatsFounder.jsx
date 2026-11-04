
import { useEffect, useRef } from 'react'
import './HomeStatsFounder.css'

function CollaborationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="5" cy="17" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="19" cy="17" r="2.4" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 10v3M9.5 16l-2-1M14.5 16l2-1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function InnovationIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M9 18h6M10 21h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M12 3a6 6 0 0 0-3.5 10.9c.6.45 1 1.17 1 1.95v.15h5v-.15c0-.78.4-1.5 1-1.95A6 6 0 0 0 12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  )
}

function IntegrityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l7 3v5.5c0 4.5-3 7.7-7 9.5-4-1.8-7-5-7-9.5V6l7-3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const values = [
  {
    icon: <CollaborationIcon />,
    title: 'Collaboration',
    description:
      'We work alongside you from day one, embedding into your team so strategy, design and execution stay aligned at every step.',
  },
  {
    icon: <InnovationIcon />,
    title: 'Innovation',
    description:
      'We push past templated playbooks, testing new formats, channels and creative ideas to keep your brand ahead of the curve.',
  },
  {
    icon: <IntegrityIcon />,
    title: 'Integrity',
    description:
      'Transparent reporting, honest timelines and clear communication — we only recommend what genuinely moves your business forward.',
  },
]

function HomeStatsFounder() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const elements = section.querySelectorAll('[data-reveal]')

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="vt-values" ref={sectionRef}>
      <div className="vt-values__container">

        <div className="vt-values__heading" data-reveal>
          <h2>Our Values</h2>
          <p>We fuel bold ideas, driving them forward with sharp strategy.</p>
        </div>

        <div className="vt-values__featured" data-reveal>
          <div className="vt-values__photo">
            <img
              src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
              alt="VisionTechStudio team collaborating in the studio"
              loading="lazy"
            />
          </div>

          <div className="vt-value">
            <span className="vt-value__icon">{values[0].icon}</span>
            <h3>{values[0].title}</h3>
            <p>{values[0].description}</p>
          </div>
        </div>

        <div className="vt-values__row">
          {values.slice(1).map((value, index) => (
            <div
              className="vt-value"
              key={value.title}
              data-reveal
              style={{ '--reveal-delay': `${index * 120}ms` }}
            >
              <span className="vt-value__icon">{value.icon}</span>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HomeStatsFounder
