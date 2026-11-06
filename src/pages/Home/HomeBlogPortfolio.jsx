
import { useEffect, useRef } from 'react'
import './HomeBlogPortfolio.css'

const posts = [
  {
    title: '7 Mistakes You’re Making on Social Media Strategy',
    category: 'Social Media Marketing',
    description:
      'It’s not the budget — it’s the strategy. Learn the common mistakes brands make and how to fix them.',
    image:
      'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=1200&q=85',
    url: 'https://socialmbt.com/7-mistakes-youre-making-on-social-media-strategy/',
    featured: true,
  },
  {
    title: 'Design That Sells: The Psychology Behind Branding',
    category: 'Brand Strategy',
    description:
      'Design isn’t just visual — it’s behavioral. Understand what actually influences user decisions.',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=85',
    url: 'https://socialmbt.com/seamless-user-interfaces-crafted-with-intent/',
  },
  {
    title: 'How Service Businesses Can Use Social Media to Get More Clients',
    category: 'Growth',
    description:
      'Smarter allocation beats bigger budgets. Here’s how to maximize ROI with better planning.',
    image:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=85',
    url: 'https://socialmbt.com/how-service-based-businesses-can-use-social-media-to-get-more-clients-in-2026/',
  },
]

function HomeBlogPortfolio() {
  const [featured, ...rest] = posts
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current

    if (!section) return

    const images = section.querySelectorAll('[data-reveal-image]')

    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !('IntersectionObserver' in window)
    ) {
      images.forEach((image) => image.classList.add('is-dropped'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-dropped')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -40px 0px' },
    )

    images.forEach((image) => observer.observe(image))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="home-blog" id="blog" ref={sectionRef}>
      <div className="home-blog__container">

        <div className="home-blog__header">
          <h2>
            Blog & Insights
            <br />
            That Drive Growth
          </h2>

          <div className="home-blog__header-right">
            <p>
              Explore marketing trends, strategies, and expert tips to
              help your brand grow faster and smarter in the digital world.
            </p>

            <a
              href="https://socialmbt.com/category/social-media-marketing/"
              className="home-blog__see-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              See all Articles
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <article className="home-blog__featured">
          <div className="home-blog__featured-image" data-reveal-image>
            <img src={featured.image} alt={featured.title} loading="lazy" />
          </div>

          <div className="home-blog__featured-content">
            <span className="home-blog__category">{featured.category}</span>
            <h3>{featured.title}</h3>
            <p>{featured.description}</p>

            <a
              href={featured.url}
              className="home-blog__view-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Blog
            </a>
          </div>
        </article>

        <div className="home-blog__grid">
          {rest.map((post, index) => (
            <article className="home-blog__card" key={post.title}>
              <div
                className="home-blog__card-image"
                data-reveal-image
                style={{ '--drop-delay': `${index * 150}ms` }}
              >
                <img src={post.image} alt={post.title} loading="lazy" />
                <span className="home-blog__category home-blog__category--overlay">
                  {post.category}
                </span>
              </div>

              <h3>
                <a href={post.url} target="_blank" rel="noopener noreferrer">
                  {post.title}
                </a>
              </h3>

              <p>{post.description}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HomeBlogPortfolio
