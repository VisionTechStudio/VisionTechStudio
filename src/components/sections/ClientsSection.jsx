const clients = [
  ["45 Degrees", "/assets/5f78996f77218e556911.svg"],
  ["Acme Corp", "/assets/1812da8ae5d69054a08c.svg"],
  ["Alt+Shift", "/assets/5790b0d1d8779761ebf5.svg"],
  ["BuildingBlocks", "/assets/af5dfdf56a777659ead4.svg"],
  ["Capsule", "/assets/c87c6085b0c860c80eef.svg"],
];
export default function ClientsSection() {
  return (
    <section className="clients-section" aria-labelledby="clients-heading">
      <div className="clients-heading">
        <h1 id="clients-heading">Our Clients</h1>
        <p>
          Worked with 50+ brands across multiple industries
          <br />
          Brand · Ecommerce · Service · Local Businesses
        </p>
      </div>
      <div
        className="client-marquee"
        tabIndex={0}
        aria-label="Client logos. Focus to pause scrolling."
      >
        <div className="client-marquee-track">
          {[0, 1].map((copy) => (
            <ul
              className="client-logo-group"
              key={copy}
              aria-hidden={copy === 1 ? true : undefined}
            >
              {clients.map(([name, src]) => (
                <li className="client-logo-card" key={name}>
                  <img
                    src={src}
                    alt={copy === 0 ? name : ""}
                    width="230"
                    height="54"
                    loading="eager"
                  />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
}
