import { useEffect, useLayoutEffect } from "react";
import { installContactDraft } from "../../features/contactDraft";
import useHomeMotion from '../../hooks/useHomeMotion';
export default function SiteEnhancements({ route }) {
  useHomeMotion(route.name === 'home');
  useLayoutEffect(() => {
    document.body.classList.toggle("about-page", route.name === "about");
    document.body.classList.toggle(
      "blog-page",
      ["blog", "article"].includes(route.name),
    );
  }, [route.name]);
  useEffect(
    () => (route.name === "contact" ? installContactDraft() : undefined),
    [route.name],
  );
  useEffect(() => {
    document.title =
      {
        home: "Vision Tech Studio",
        about: "About Us | Vision Tech Studio",
        contact: "Contact Us | Vision Tech Studio",
        blog: "Insights | Vision Tech Studio",
      }[route.name] || "Insights | Vision Tech Studio";
    const id = location.hash.slice(1);
    if (id)
      requestAnimationFrame(() =>
        document.getElementById(id)?.scrollIntoView(),
      );
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.05 },
    );
    document
      .querySelectorAll(".owned-reveal")
      .forEach((e) => observer.observe(e));
    return () => observer.disconnect();
  }, [route.name]);
  return null;
}
