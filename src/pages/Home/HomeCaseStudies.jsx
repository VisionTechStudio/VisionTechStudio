
import './HomeCaseStudies.css'

const projects = [
  {
    title: 'Northbridge Rebrand',
    description:
      'A complete visual identity overhaul, including logo design, typography, and a design system that stays consistent across every platform.',
    client: 'Northbridge Legal Services',
    image:
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Orbital Growth Campaign',
    description:
      'A multi-channel digital marketing campaign spanning paid social, email nurturing, and search ads, with weekly creative refreshes.',
    client: 'Orbital Fitness',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Capsule Website Redesign',
    description:
      'A conversion-focused website rebuild with a refreshed UX, faster load times, and clear calls to action across every page.',
    client: 'Capsule Consulting',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85',
  },
  {
    title: 'Forty-Five Media Plan',
    description:
      'A data-led media planning engagement that reallocated spend across channels and lifted qualified leads quarter over quarter.',
    client: 'Forty-Five Financial Group',
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=85',
  },
]

function HomeCaseStudies() {
  return (
    <section className="vt-cases">
      <div className="vt-cases__container">

        <div className="vt-cases__heading">
          <h2>Work That Delivers Results</h2>
          <p>
            A closer look at how we help brands solve problems, improve
            performance, and achieve measurable growth.
          </p>
        </div>

        <div className="vt-cases__stack">
          {projects.map((project, index) => (
            <article
              className="vt-case-card"
              key={project.title}
              style={{ top: `${96 + index * 20}px` }}
            >
              <div className="vt-case-card__text">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="vt-case-card__divider" />

                <span className="vt-case-card__label">Client:</span>
                <div className="vt-case-card__client">
                  <span className="vt-case-card__dot" />
                  {project.client}
                </div>
              </div>

              <div className="vt-case-card__image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HomeCaseStudies
