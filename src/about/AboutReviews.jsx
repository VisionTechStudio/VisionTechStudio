import { useEffect, useRef } from 'react';
import reviews from './reviews.json';

export default function AboutReviews() {
  const section = useRef(null);
  useEffect(() => {
    let frame = 0;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => {
      frame = 0;
      if (!section.current || reduced.matches) return;
      const bounds = section.current.getBoundingClientRect();
      const progress = (window.innerHeight / 2 - (bounds.top + bounds.height / 2)) / (window.innerHeight + bounds.height);
      section.current.querySelectorAll('.vts-review-track').forEach((track, index) => {
        track.style.setProperty('--review-shift', `${progress * 420 * [-1, 0.75, -0.85][index]}px`);
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    schedule();
    return () => { window.removeEventListener('scroll', schedule); window.removeEventListener('resize', schedule); cancelAnimationFrame(frame); };
  }, []);
  return <section className="vts-reviews" ref={section} aria-labelledby="vts-reviews-title">
    <div className="vts-reviews-inner">
      <div className="vts-reviews-heading">
        <p className="vts-reviews-eyebrow">Client feedback</p>
        <h2 className="vts-reviews-title" id="vts-reviews-title">Good work starts with good partnerships.</h2>
        <p className="vts-reviews-intro">A few ways thoughtful strategy and creative can help a business move forward.</p>
        <p className="vts-reviews-demo-banner">FICTIONAL DEMO CONTENT — replace names, quotes, and results before publishing.</p>
      </div>
      <div className="vts-review-grid" aria-label="Client review highlights">
        {reviews.map((column, columnIndex) => <div className="vts-review-column" key={columnIndex}>
          <div className="vts-review-track">{[0, 1].map(copy => <div className="vts-review-sequence" key={copy} aria-hidden={copy === 1 ? true : undefined}>
            {column.map((review, index) => <article className={`vts-review-card ${index === 1 ? 'vts-review-feature' : ''}`} key={review.name} style={{ '--review-image': `url("${review.portrait}")` }}>
              <div className="vts-review-card-top"><span className="vts-review-stars" aria-label="5 out of 5 stars">★★★★★</span><span className="vts-review-sample">FICTIONAL DEMO</span></div>
              <blockquote className="vts-review-quote">{review.quote}</blockquote>
              <p className="vts-review-result">{review.result}</p>
              <div className="vts-review-person"><span className="vts-review-avatar"><img src={review.portrait} alt="" loading="lazy" referrerPolicy="no-referrer" /></span><div><p className="vts-review-name">{review.name}</p><p className="vts-review-role">{review.role}</p></div></div>
            </article>)}
          </div>)}</div>
        </div>)}
      </div>
      <p className="vts-review-note">All people, businesses, quotes, and results shown here are fictional placeholders.</p>
    </div>
  </section>;
}
