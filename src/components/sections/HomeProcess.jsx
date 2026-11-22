const steps = [
  [
    "Discover",
    "We go deep into your brand, market, audience, and competitors to uncover what others miss.",
    "owned-39e678bace03e40d.png",
  ],
  [
    "Strategize",
    "We build a precise roadmap, channels, budget, messaging, and milestones, before a single dollar is spent.",
    "owned-9f096bb4cce16e6d.png",
  ],
  [
    "Execute",
    "Our team of designers, strategists, and media buyers launches every campaign with obsessive detail.",
    "owned-c19eb480fb61188d.png",
  ],
  [
    "Optimize",
    "We track every metric, kill what doesn’t work, scale what does, and report everything transparently.",
    "owned-eff85262f535440a.png",
  ],
];
export default function HomeProcess() {
  return (
    <section className="process-section">
      <div className="process-pin">
        <div className="process-heading">
          <h2>
            Our
            <br />
            Process
          </h2>
          <p>
            A disciplined four step framework that eliminates guesswork and
            delivers predictable growth.
          </p>
        </div>
        <div className="process-grid">
          {steps.map(([title, copy, image], i) => (
            <div
              className="process-column"
              style={{ "--card-index": i }}
              key={title}
            >
              <article
                className="process-card"
                style={{ "--card-index": i }}
                key={title}
                tabIndex={0}
              >
                <img loading="lazy" src={"/assets/" + image} alt="" />
                <div className="process-card-content">
                  <span>0{i + 1}</span>
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
