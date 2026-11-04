import './HomeBrandQuote.css'

function HomeBrandQuote() {
  return (
    <section
      className="home-brand-quote"
      aria-label="Our approach"
    >
      <div className="home-brand-quote__inner">
        <span className="home-brand-quote__eyebrow">
          OUR PHILOSOPHY
        </span>

        <span
          className="home-brand-quote__mark"
          aria-hidden="true"
        >
          “
        </span>

        <h2 className="home-brand-quote__statement">
          Strong brands aren't built by being everywhere.
          They're built by making every interaction matter.
        </h2>

        <p className="home-brand-quote__description">
          The right strategy turns attention into trust
          — and trust into lasting growth.
        </p>

        <span className="home-brand-quote__accent" />
      </div>
    </section>
  )
}

export default HomeBrandQuote