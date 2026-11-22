import { useEffect, useRef } from "react";
import AnimatedButton from "../ui/AnimatedButton";
export default function CallToAction() {
  const section = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) =>
        section.current?.classList.toggle(
          "cta-motion-active",
          entry.isIntersecting,
        ),
      { rootMargin: "100px" },
    );
    observer.observe(section.current);
    return () => observer.disconnect();
  }, []);
  return (
    <section className="owned-cta" ref={section}>
      <img
        className="cta-ring"
        src="/assets/contact-ring.png"
        alt=""
        width="320"
        height="320"
        decoding="async"
      />
      <h2>Ready to Grow Your Brand?</h2>
      <p>Let’s build something that actually works.</p>
      <AnimatedButton href="/contact/">Contact Us</AnimatedButton>
    </section>
  );
}
