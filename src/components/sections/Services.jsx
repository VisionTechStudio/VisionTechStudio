import AnimatedButton from "../ui/AnimatedButton";
import { useState } from "react";
const services = [
  [
    "Digital Marketing",
    "Marketing Service",
    "Streamline your workflows and nurture leads around the clock with intelligent, personalized communication systems.",
    ["Content Marketing", "Email Marketing Campaigns", "Analytics & Reporting"],
  ],
  [
    "Visual Identity",
    "Design Service",
    "Create a consistent visual language that brings your brand to life across every touchpoint.",
    ["Logo & Identity", "Design Systems", "Brand Guidelines"],
  ],
  [
    "Brand Strategy",
    "Strategy Service",
    "Define your positioning, understand your customers, and create a clear direction for your brand and communications.",
    ["Audience Research", "Brand Positioning", "Messaging & Tone of Voice"],
  ],
  [
    "Media Planning",
    "Media Service",
    "Reach the right audience with a thoughtful channel strategy, clear budgets, and continuous optimization.",
    ["Channel Strategy", "Campaign Planning", "Performance Reporting"],
  ],
];
const serviceArtwork = [
  {
    src: "/assets/36da3cd88a65fe8a0ca3.png",
    alt: "Digital experience and campaign interface",
  },
  {
    src: "/assets/325bbaf40f4d0337bc96.png",
    alt: "Blue visual identity and brand mark",
  },
  {
    src: "/assets/ba79b077a67dfac6ea0e.png",
    alt: "Brand positioning and creative website direction",
    blue: true,
  },
  {
    src: "/assets/a58d4ad5055dcb30237b.png",
    alt: "Skincare brand campaign creative",
  },
];
export default function Services() {
  const [open, setOpen] = useState(0);
  return (
    <section id="services" className="owned-services">
      <header>
        <h2>What we offer / Service</h2>
        <p>
          End to end solutions to build, grow, and scale your
          <br className="desktop-break" /> brand.
        </p>
      </header>
      {services.map(([title, type, description, items], i) => (
        <article
          key={title}
          className={open === i ? "expanded" : ""}
          onPointerEnter={(event) => {
            if (
              event.pointerType === "mouse" &&
              matchMedia("(min-width: 810px) and (hover: hover)").matches
            )
              setOpen(i);
          }}
        >
          <div className="service-inner">
            <span className="service-number">0{i + 1}</span>
            <div className="service-art" hidden={open !== i}>
              <img
                src={serviceArtwork[i].src}
                alt={serviceArtwork[i].alt}
                className={
                  serviceArtwork[i].blue ? "service-art-blue" : undefined
                }
                decoding="async"
              />
            </div>
            <div className="service-main">
              <div className="service-row">
                <button
                  aria-expanded={open === i}
                  aria-controls={"service-" + i}
                  onClick={() => setOpen(open === i ? null : i)}
                >
                  <small>{type}</small>
                  <h3>{title}</h3>
                  <b>{open === i ? "−" : "+"}</b>
                </button>
                <AnimatedButton
                  tone={open === i ? "light" : "blue"}
                  href={"/contact/"}
                >
                  {"Start your project"}
                </AnimatedButton>
              </div>
              <div
                id={"service-" + i}
                className="service-detail"
                hidden={open !== i}
              >
                <h4>
                  <strong>{["34+", "28+", "40+", "32+"][i]}</strong> projects
                  done
                </h4>
                <p>{description}</p>
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
