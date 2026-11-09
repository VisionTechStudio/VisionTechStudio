import { useState } from "react";
import { testimonials } from "../../data/testimonials";
export default function TestimonialsSection() {
  const [index, setIndex] = useState(0);
  const item = testimonials[index];
  return (
    <section className="testimonials-section">
      <div className="testimonials-inner">
        <article className="testimonial-card" aria-label="Client testimonial">
          <div className="testimonial-stars" aria-label="5 out of 5 stars">
            ★★★★★
          </div>
          <blockquote>{item.quote}</blockquote>
          <p className="testimonial-highlight">{item.highlight}</p>
          <div className="testimonial-person">
            <img src={item.image} alt="" width="48" height="48" />
            <div>
              <p>{item.name}</p>
              <span>{item.location}</span>
            </div>
          </div>
        </article>
        <div className="testimonials-intro">
          <h1>
            Trusted by
            <br />
            Happy Clients
          </h1>
          <p>
            Discover how our design solutions have made an impact on brands and
            businesses.
          </p>
          <div className="testimonial-controls">
            <button
              aria-label="Previous testimonial"
              onClick={() =>
                setIndex(
                  (index - 1 + testimonials.length) % testimonials.length,
                )
              }
            >
              ←
            </button>
            <span aria-live="polite">
              {index + 1} / {testimonials.length}
            </span>
            <button
              aria-label="Next testimonial"
              onClick={() => setIndex((index + 1) % testimonials.length)}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
