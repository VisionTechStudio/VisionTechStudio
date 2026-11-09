import { useId, useState } from "react";
import { faqs } from "../data/site";
export default function FaqAccordion() {
  const [active, setActive] = useState(0);
  const prefix = useId();
  return (
    <div className="agency-faq">
      {faqs.map(([question, answer], index) => (
        <article
          className={`faq-item ${active === index ? "is-open" : ""}`}
          key={question}
        >
          <h3>
            <button
              type="button"
              id={`${prefix}-q${index}`}
              aria-expanded={active === index}
              aria-controls={`${prefix}-a${index}`}
              onClick={() => setActive(active === index ? null : index)}
            >
              {question}
              <span aria-hidden="true">{active === index ? "−" : "+"}</span>
            </button>
          </h3>
          <div
            id={`${prefix}-a${index}`}
            role="region"
            aria-labelledby={`${prefix}-q${index}`}
            hidden={active !== index}
          >
            <p>{answer}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
