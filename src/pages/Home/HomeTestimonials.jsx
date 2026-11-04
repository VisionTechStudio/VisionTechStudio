
import './HomeTestimonials.css'

const testimonials = [
  {
    id: 1,
    quote:
      'Working with VisionTechStudio has been a pleasure. Their leadership, positive attitude, and support makes every collaboration smooth and productive.',
    name: 'Imran Khalid',
    location: 'Lahore, PK',
    photo:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80',
    position: 'vt-flip--top',
  },
  {
    id: 2,
    quote:
      'Very responsive and great to work with. They have a fresh, creative perspective on getting our story across. Highly recommend.',
    name: 'Sara Ahmed',
    location: 'Karachi, PK',
    photo:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80',
    position: 'vt-flip--bottom',
  },
]

function StarRow() {
  return (
    <div className="vt-flip-card__stars" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <svg key={index} viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.31l-5.8 3.05 1.11-6.46-4.7-4.58 6.49-.94L12 2.5z" />
        </svg>
      ))}
    </div>
  )
}

function HomeTestimonials() {
  return (
    <section className="vt-trust" id="testimonials">
      <div
        className="vt-trust__bg"
        aria-hidden="true"
      />
      <div
        className="vt-trust__overlay"
        aria-hidden="true"
      />

      <div className="vt-trust__container">
        <h2>
          Trusted by
          <br />
          Happy Clients.
        </h2>

        <p>
          Discover how our strategy and design work has made a lasting
          impact on brands and businesses just like yours.
        </p>

        {testimonials.map((item) => (
          <div className={`vt-flip ${item.position}`} key={item.id}>
            <div className="vt-flip__inner">
              <div className="vt-flip-card">
                <StarRow />
                <p className="vt-flip-card__quote">{item.quote}</p>
                <div className="vt-flip-card__footer">
                  <strong>{item.name}</strong>
                  <span>{item.location}</span>
                </div>
              </div>

              <div className="vt-flip-photo">
                <img src={item.photo} alt={item.name} loading="lazy" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HomeTestimonials
