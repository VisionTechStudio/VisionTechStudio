import { useState } from "react";
const initial = {
  firstName: "",
  lastName: "",
  email: "",
  service: "",
  message: "",
};
export default function ContactForm() {
  const [fields, setFields] = useState(initial);
  const [status, setStatus] = useState("");
  function change(event) {
    setFields({ ...fields, [event.target.name]: event.target.value });
    setStatus("");
  }
  function submit(event) {
    event.preventDefault();
    try {
      localStorage.setItem(
        "vision-tech-studio-inquiry-draft",
        JSON.stringify(fields),
      );
      setStatus(
        "Your enquiry draft is saved on this device. Online submission is not connected yet; no message has been sent.",
      );
    } catch {
      setStatus(
        "Your browser could not save this draft. Please copy your message before leaving this page.",
      );
    }
  }
  return (
    <form
      className="framer-7rfox agency-contact-form"
      id="project-inquiry"
      onSubmit={submit}
    >
      <div className="form-name-row">
        <label>
          First Name
          <input
            name="firstName"
            autoComplete="given-name"
            value={fields.firstName}
            onChange={change}
            required
            placeholder="Please enter your name"
          />
        </label>
        <label>
          Last Name
          <input
            name="lastName"
            autoComplete="family-name"
            value={fields.lastName}
            onChange={change}
            required
            placeholder="Please enter your last name"
          />
        </label>
      </div>
      <label>
        Email
        <input
          type="email"
          name="email"
          autoComplete="email"
          value={fields.email}
          onChange={change}
          required
          placeholder="Please enter your email"
        />
      </label>
      <label>
        Select Service
        <select
          name="service"
          value={fields.service}
          onChange={change}
          required
        >
          <option value="" disabled>
            Select Service…
          </option>
          {[
            "Digital Marketing",
            "Brand & Visual Identity",
            "Brand Strategy",
            "Web Development",
          ].map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </label>
      <label>
        Message
        <textarea
          name="message"
          rows={5}
          value={fields.message}
          onChange={change}
          required
          placeholder="Type here…"
        />
      </label>
      <button className="button" type="submit">
        Submit
      </button>
      {status && (
        <p className="form-status" role="status">
          {status}
        </p>
      )}
    </form>
  );
}
