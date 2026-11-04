
import { useEffect, useRef } from 'react'
import './HomeIntro.css'

const infoLabels = ['GLOBAL CLIENTS', 'SOCIAL MEDIA', 'BRAND & WEB']

const clientLogos = [
  { name: 'Northbridge', mark: '◆' },
  { name: 'Alt+Form', mark: '≈' },
  { name: 'Capsule Co.', mark: '●' },
  { name: 'Forty-Five°', mark: '↗' },
  { name: 'Acme Labs', mark: '✦' },
  { name: 'Orbital', mark: '◎' },
]

function HomeIntro() {
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
        element.classList.add('intro-visible')
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('intro-visible')
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
    <section
      className="home-clients"
      ref={sectionRef}
      aria-labelledby="home-clients-title"
    >
      <div className="home-clients__container">

        <div className="home-clients__top">
          <div className="home-clients__labels" data-reveal>
            {infoLabels.map((label) => (
              <span key={label}>{label}</span>
            ))}
          </div>

          <p className="home-clients__statement" data-reveal>
            <span className="home-clients__statement-strong">
              We don&apos;t do generic. Every brand we touch gets
              a strategy built from scratch, backed by data,
            </span>
            <span className="home-clients__statement-muted">
              {' '}and executed with precision until the numbers
              actually move.
            </span>
          </p>
        </div>

        <div className="home-clients__heading-row" data-reveal>
          <h2 id="home-clients-title">Our Clients</h2>

          <div className="home-clients__meta">
            <p>Worked with 50+ brands across multiple industries</p>
            <span>Brand · Ecommerce · Service · Local Business</span>
          </div>
        </div>

        <div className="home-clients__strip" data-reveal>
          {clientLogos.map((client) => (
            <div className="home-clients__card" key={client.name}>
              <span className="home-clients__card-mark" aria-hidden="true">
                {client.mark}
              </span>
              <span>{client.name}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HomeIntro
