
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

    const cards = Array.from(section.querySelectorAll('[data-reveal]'))

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      cards.forEach((card) => {
        card.style.setProperty('--scroll-progress', 1)
      })
      return
    }

    let ticking = false

    // The section is pinned in place (position: sticky) for an extra
    // stretch of scroll height while the user keeps scrolling, so the
    // cards have time to reveal one after another before the page is
    // allowed to move on to the next section. Progress is driven by how
    // far the section itself has scrolled through that extra runway —
    // not by each card's own position, since all four sit in one row
    // and would otherwise trigger at virtually the same moment.
    const updateProgress = () => {
      const viewportHeight = window.innerHeight
      const scrollableDistance = section.offsetHeight - viewportHeight

      let sectionProgress = 1

      if (scrollableDistance > 0) {
        const rect = section.getBoundingClientRect()
        sectionProgress = -rect.top / scrollableDistance
        sectionProgress = Math.min(1, Math.max(0, sectionProgress))
      }

      const slice = 1 / cards.length

      cards.forEach((card, index) => {
        const sliceStart = index * slice

        let progress = (sectionProgress - sliceStart) / slice
        progress = Math.min(1, Math.max(0, progress))

        card.style.setProperty('--scroll-progress', progress)
      })

      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      window.requestAnimationFrame(updateProgress)
    }

    updateProgress()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section
      className="vt-process"
      id="process"
      ref={sectionRef}
    >
      <div className="vt-process__pin">
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
            {processSteps.map((step) => (
              <article
                className="vt-process-card"
                key={step.number}
                data-reveal
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(10,18,38,0.3) 0%, rgba(10,18,38,0.9) 100%), url(${step.image})`,
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
      </div>
    </section>
  )
}

export default HomeConsultation
