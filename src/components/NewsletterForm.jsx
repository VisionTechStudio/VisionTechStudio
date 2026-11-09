import { useState } from "react";
export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  return (
    <form
      className="newsletter-form"
      onSubmit={(event) => {
        event.preventDefault();
        setStatus(
          "Newsletter signup is not connected yet. Please check back soon.",
        );
      }}
    >
      <label htmlFor="newsletter-email">Subscribe to Our Newsletter</label>
      <div>
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          autoComplete="email"
        />
        <button type="submit">Subscribe ↗</button>
      </div>
      <small>No spam. Just great content.</small>
      {status && <p role="status">{status}</p>}
    </form>
  );
}
