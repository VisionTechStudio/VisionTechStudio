
import { useEffect, useRef } from 'react'
import './HomeConsultation.css'

const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'Understand your brand, goals, audience and current digital presence.',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '02',
    title: 'Strategize',
    description:
      'Develop a focused marketing strategy and actionable roadmap.',
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '03',
    title: 'Execute',
    description:
      'Implement campaigns, publish content and manage digital activities.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
  {
    number: '04',
    title: 'Optimize',
    description:
      'Evaluate performance, identify opportunities and refine the strategy.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
]

function HomeConsultation() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const elements = section.querySelectorAll('[data-reveal]')

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      elements.forEach((element) => {
        element.classList.add('is-visible')
      })
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
      { threshold: 0.2, rootMargin: '0px 0px -60px 0px' },
    )

    elements.forEach((element) => observer.observe(element))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      className="vt-process"
      id="process"
      ref={sectionRef}
    >
      <div className="vt-process__container">

        <div className="vt-process__heading">
          <h2>
            Our
            <br />
            Process
          </h2>

          <p>
            A disciplined four step framework that eliminates
            guesswork and delivers predictable growth.
          </p>
        </div>

        <div className="vt-process__grid">
          {processSteps.map((step, index) => (
            <article
              className="vt-process-card"
              key={step.number}
              data-reveal
              style={{
                '--reveal-delay': `${index * 150}ms`,
                backgroundImage: `linear-gradient(180deg, rgba(10,18,38,0.35) 0%, rgba(10,18,38,0.85) 100%), url(${step.image})`,
              }}
            >
              <span className="vt-process-card__number">
                {step.number}
              </span>

              <div className="vt-process-card__bottom">
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HomeConsultation
