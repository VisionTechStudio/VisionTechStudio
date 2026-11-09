import { after, afterEach, test } from "node:test";
import assert from "node:assert/strict";
import { JSDOM } from "jsdom";
import { createServer } from "vite";
import React from "react";
import { MemoryRouter, useLocation } from "react-router-dom";
const dom = new JSDOM("<!doctype html><html><body></body></html>", {
  url: "http://localhost/",
});
for (const key of [
  "window",
  "document",
  "HTMLElement",
  "Node",
  "MutationObserver",
  "localStorage",
])
  globalThis[key] = dom.window[key];
Object.defineProperty(globalThis, "navigator", {
  configurable: true,
  value: dom.window.navigator,
});
globalThis.IS_REACT_ACT_ENVIRONMENT = true;
const { render, screen, fireEvent, cleanup } =
  await import("@testing-library/react");
const server = await createServer({
  configFile: false,
  esbuild: { jsx: "automatic" },
  optimizeDeps: { noDiscovery: true, include: [] },
  server: { middlewareMode: true },
  appType: "custom",
});
const load = async (file) => (await server.ssrLoadModule(file)).default;
afterEach(() => {
  cleanup();
  localStorage.clear();
});
after(async () => {
  await server.close();
  dom.window.close();
});
test("FAQ opens and closes the selected answer with accessible state", async () => {
  const Faq = await load("/src/components/FaqAccordion.jsx");
  render(React.createElement(Faq));
  const first = screen.getByRole("button", { name: /What services/ });
  const second = screen.getByRole("button", { name: /Can you help/ });
  assert.equal(first.getAttribute("aria-expanded"), "true");
  fireEvent.click(second);
  assert.equal(first.getAttribute("aria-expanded"), "false");
  assert.equal(second.getAttribute("aria-expanded"), "true");
  fireEvent.click(second);
  assert.equal(second.getAttribute("aria-expanded"), "false");
});
test("Contact form stores the complete draft and does not claim it was sent", async () => {
  const Form = await load("/src/components/ContactForm.jsx");
  render(React.createElement(Form));
  for (const [label, value] of [
    ["First Name", "Areeb"],
    ["Last Name", "Ashfaq"],
    ["Email", "test@example.com"],
    ["Message", "A new website for our agency."],
  ])
    fireEvent.change(screen.getByLabelText(label), { target: { value } });
  fireEvent.change(screen.getByLabelText("Select Service"), {
    target: { value: "Web Development" },
  });
  fireEvent.submit(document.querySelector("form"));
  const draft = JSON.parse(
    localStorage.getItem("vision-tech-studio-inquiry-draft"),
  );
  assert.equal(draft.firstName, "Areeb");
  assert.equal(draft.service, "Web Development");
  assert.equal(draft.email, "test@example.com");
  assert.match(
    screen.getByRole("status").textContent,
    /no message has been sent/,
  );
});
test("Mobile menu toggles and contact navigation closes it", async () => {
  const Header = await load("/src/components/Header.jsx");
  function Location() {
    return React.createElement(
      "output",
      { "data-testid": "location" },
      useLocation().pathname,
    );
  }
  render(
    React.createElement(
      MemoryRouter,
      null,
      React.createElement(Header),
      React.createElement(Location),
    ),
  );
  const toggle = screen.getByRole("button", { name: "Open menu" });
  fireEvent.click(toggle);
  assert.equal(toggle.getAttribute("aria-expanded"), "true");
  fireEvent.click(screen.getAllByRole("link", { name: /Contact Us/ })[0]);
  assert.equal(screen.getByTestId("location").textContent, "/contact/");
  assert.equal(toggle.getAttribute("aria-expanded"), "false");
});
test("Service details follow the selected service", async () => {
  const Services = await load("/src/components/sections/ServicesSection.jsx");
  render(
    React.createElement(MemoryRouter, null, React.createElement(Services)),
  );
  const digital = screen.getByRole("button", { name: /Digital Marketing/ });
  const web = screen.getByRole("button", { name: /Media Planning/ });
  fireEvent.click(web);
  assert.equal(digital.getAttribute("aria-expanded"), "false");
  assert.equal(web.getAttribute("aria-expanded"), "true");
  assert.equal(
    document.getElementById(web.getAttribute("aria-controls")).hidden,
    false,
  );
});
test("Both React pages render their content and retain the requested branding", async () => {
  const { renderToString } = await import("react-dom/server");
  for (const [file, label] of [
    ["HomePage", "Home"],
    ["ContactPage", "Contact"],
  ]) {
    const Page = await load(`/src/pages/${file}.jsx`);
    const html = renderToString(
      React.createElement(MemoryRouter, null, React.createElement(Page)),
    );
    assert.ok(
      html.includes("What services does your agency offer?"),
      label + " FAQ",
    );
    assert.ok(
      !html.includes("/runtime/"),
      label + " has no compiled Framer runtime",
    );
    if (file === "HomePage") {
      assert.ok(html.includes("DEV, DESIGN &amp;"));
      assert.ok(html.includes("97%"));
      assert.ok(html.includes("IRELAND"));
      assert.ok(html.includes("CANADA"));
      assert.ok(!html.includes(">Simple, Transparent Pricing<"));
      for (const id of ["home", "about", "services", "work", "blog"])
        assert.ok(html.includes(`id="${id}"`), "Missing section " + id);
    } else {
      assert.ok(html.includes("tel:+923225396617"));
      assert.ok(html.includes('name="firstName"'));
    }
  }
});
test("Testimonial controls move between quotes", async () => {
  const Testimonials = await load(
    "/src/components/sections/TestimonialsSection.jsx",
  );
  render(React.createElement(Testimonials));
  assert.ok(screen.getByText("Michael Torres"));
  fireEvent.click(screen.getByRole("button", { name: "Next testimonial" }));
  assert.ok(screen.getByText("Jessica Chen"));
  fireEvent.click(screen.getByRole("button", { name: "Previous testimonial" }));
  assert.ok(screen.getByText("Michael Torres"));
});
test("Hovering a service restores its expanded artwork and details", async () => {
  const Services = await load("/src/components/sections/ServicesSection.jsx");
  render(
    React.createElement(MemoryRouter, null, React.createElement(Services)),
  );
  const visual = screen.getByRole("button", { name: /Visual Identity/ });
  fireEvent.mouseEnter(visual.closest("article"));
  assert.equal(visual.getAttribute("aria-expanded"), "true");
  assert.ok(
    visual
      .closest("article")
      .querySelector('img[alt="Creative campaign artwork"]'),
  );
  assert.equal(
    screen
      .getByRole("button", { name: /Digital Marketing/ })
      .getAttribute("aria-expanded"),
    "false",
  );
});
test("Client marquee exposes one accessible set of all five client logos", async () => {
  const Clients = await load("/src/components/sections/ClientsSection.jsx");
  render(React.createElement(Clients));
  assert.equal(screen.getAllByRole("img").length, 5);
  assert.ok(screen.getByRole("img", { name: "45 Degrees" }));
  assert.ok(screen.getByRole("img", { name: "Capsule" }));
});
