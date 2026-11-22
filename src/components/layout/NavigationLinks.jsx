import { navigation } from "../../config/site";

export default function NavigationLinks({
  includeContact = false,
  onNavigate,
  mobile = false,
}) {
  function followSection(event, item) {
    onNavigate?.();
    if (
      !item.section ||
      window.location.pathname !== "/" ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    )
      return;
    const section = document.getElementById(item.section);
    if (!section) return;
    event.preventDefault();
    section.scrollIntoView({
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
      block: "start",
    });
    history.replaceState(null, "", "#" + item.section);
  }
  return navigation
    .filter((item) => includeContact || item.label !== "Contact")
    .map((item) => (
      <a
        key={item.label}
        href={item.href}
        onClick={(event) => followSection(event, item)}
      >
        {mobile && item.label === "Contact" ? "Contact Us" : item.label}
      </a>
    ));
}
