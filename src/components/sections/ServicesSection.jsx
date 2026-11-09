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
      {services.map((service, index) => (
        <article
          className={`service-row ${active === index ? "expanded" : ""}`}
          key={service.title}
        >
          <div className="service-row-top">
            <button
              className="service-toggle"
              onClick={() => setActive(active === index ? null : index)}
              aria-expanded={active === index}
              aria-controls={`service-details-${index}`}
            >
              <span className="service-number">0{index + 1}</span>
              <span>
                <small>{service.category}</small>
                <h2>{service.title}</h2>
              </span>
              <span className="service-expand" aria-hidden="true">
                {active === index ? "−" : "+"}
              </span>
            </button>
            <Link className="button" to="/contact/">
              Start your project ↗
            </Link>
          </div>
          <div
            id={`service-details-${index}`}
            hidden={active !== index}
            className="service-details"
          >
            <p>{service.description}</p>
            <ul>
              {service.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </section>
  );
}
