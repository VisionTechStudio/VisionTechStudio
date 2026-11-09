import { useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../../data/site";

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  return (
    <section className="services-section" id="services">
      <div className="services-heading">
        <h1>What we offer / Service</h1>
        <p>End to end solutions to build, grow, and scale your brand.</p>
      </div>
      {services.map((service, index) => {
        const expanded = active === index;
        return (
          <article
            className={`service-row ${expanded ? "expanded" : ""}`}
            key={service.title}
            onMouseEnter={() => setActive(index)}
          >
            <div className="service-presentation">
              <div className="service-visual-column">
                <span className="service-number">0{index + 1}</span>
                {expanded && (
                  <div className="service-artwork">
                    <img
                      src="/assets/67a2eff83ebbd812852c.png"
                      alt="Creative campaign artwork"
                      width="967"
                      height="1200"
                    />
                  </div>
                )}
              </div>
              <div className="service-content-column">
                <div className="service-row-top">
                  <button
                    className="service-toggle"
                    type="button"
                    onFocus={() => setActive(index)}
                    onClick={() => setActive(index)}
                    aria-expanded={expanded}
                    aria-controls={`service-details-${index}`}
                  >
                    <span>
                      <small>{service.category}</small>
                      <h2>{service.title}</h2>
                    </span>
                  </button>
                  <Link className="button" to="/contact/">
                    Start your project ↗
                  </Link>
                </div>
                <div
                  id={`service-details-${index}`}
                  hidden={!expanded}
                  className="service-details"
                >
                  {index === 0 && (
                    <div className="service-project-count">
                      <strong>34+</strong>
                      <span>projects done</span>
                    </div>
                  )}
                  <p>{service.description}</p>
                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
}
