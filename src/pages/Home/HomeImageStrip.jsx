import './HomeImageStrip.css'

function HomeImageStrip() {
  return (
    <section
      className="home-image-strip"
      aria-hidden="true"
    >
      <div className="home-image-strip__inner">
        <img
          className="home-image-strip__image"
          src="/socialmbt/images/2025/06/home1-lines-scaled.png"
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>
    </section>
  )
}

export default HomeImageStrip