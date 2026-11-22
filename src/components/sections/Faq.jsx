import { useState } from "react";
const faqs = [
  [
    "What services does your agency offer?",
    "We bring marketing, design, and development together: brand strategy, visual identity, website design and development, SEO, content, and paid campaigns. We can support a single project or build an ongoing plan around your goals.",
  ],
  [
    "Can you help with both a new brand and an existing business?",
    "Yes. We help new businesses build their identity and digital presence, and work with existing brands to improve their websites, positioning, and marketing.",
  ],
  [
    "How long does a project take?",
    "The timeline depends on scope, complexity, and feedback. We agree on milestones and a realistic schedule before work begins.",
  ],
  [
    "How do you measure marketing results?",
    "We agree on goals with you and track relevant measures such as qualified enquiries, conversions, acquisition costs, and revenue. We share clear reports and use the results to improve campaigns.",
  ],
  [
    "How do we get started, and what will it cost?",
    "Tell us about your goals using our contact form or WhatsApp. We will discuss your needs and provide a proposal with scope, timeline, and pricing before you commit.",
  ],
];
export default function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="owned-faq">
      <h2>Frequently Asked Questions</h2>
      <p>Answers about our marketing, design, and development services.</p>
      <div>
        {faqs.map(([q, a], i) => (
          <article key={q}>
            <button
              onClick={() => setOpen(open === i ? null : i)}
              aria-expanded={open === i}
              aria-controls={"answer-" + i}
            >
              {q}
              <span>{open === i ? "−" : "+"}</span>
            </button>
            <div id={"answer-" + i} hidden={open !== i}>
              <p>{a}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
