import { useEffect } from "react";
/** Native sticky handles pinning. JS updates only visible card scaling and text state. */
export default function useHomeMotion(enabled) {
  useEffect(() => {
    if (!enabled) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0,
      previousLetters = -1;
    const animations = new Set();
    const process = document.querySelector(".process-section");
    const processHeading = process?.querySelector(".process-heading");
    const firstProcessCard = process?.querySelector(".process-card");
    const intro = document.querySelector(".vts-7fqdl8-container");
    const workSection = document.querySelector(".vts-nt0kpk");
    const workStack = document.querySelector(".vts-1x6d7w0");
    const work = [...document.querySelectorAll(".vts-1x6d7w0 > div")];
    const translated = [
      ...document.querySelectorAll('.vts-h0gbet [style*="translateY"]'),
    ];
    const reviews = translated.filter((e) => e.querySelector(".vts-K4tom"));
    translated
      .filter((e) => !reviews.includes(e))
      .forEach((e) => (e.style.transform = "none"));
    const letters = intro
      ? [...intro.querySelectorAll("[aria-label] > span")]
      : [];
    const reveals = [
      ...document.querySelectorAll('[style*="will-change: transform"]'),
    ].filter(
      (e) =>
        e.style.transform.includes("translateY") && !e.closest(".vts-h0gbet"),
    );
    reveals.forEach((e) => (e.style.transform = "none"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (!isIntersecting) return;
          observer.unobserve(target);
          target.style.transform = "none";
          if (reduced.matches) return;
          const animation = target.animate(
            [
              { opacity: 0, transform: "translateY(60px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            { duration: 650, easing: "cubic-bezier(.2,.7,.2,1)" },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
      },
      { threshold: 0.08 },
    );
    reveals.forEach((e) => observer.observe(e));
    reviews.forEach((e) => {
      e.style.transform = reduced.matches ? "none" : "translateY(60px)";
      observer.observe(e);
    });
    const clamp = (x) => Math.max(0, Math.min(1, x));
    function update() {
      frame = 0;
      const vh = innerHeight;
      // Read geometry together before writing styles, avoiding layout thrashing.
      const workBounds = workSection?.getBoundingClientRect();

      const introBounds = intro?.getBoundingClientRect();
      const workVisible =
        workBounds && workBounds.top < vh && workBounds.bottom > 0;

      const stackTop = workVisible ? workStack.getBoundingClientRect().top : 0;
      const gap = workVisible
        ? parseFloat(getComputedStyle(workStack).rowGap) || 0
        : 0;
      const heights = workVisible ? work.map((e) => e.offsetHeight) : [];
      const processBounds = process?.getBoundingClientRect();
      const processVisible =
        innerWidth >= 810 &&
        processBounds &&
        processBounds.top < vh &&
        processBounds.bottom > 0;
      const cardTop = processVisible
        ? firstProcessCard.getBoundingClientRect().top
        : Infinity;
      // The sticky title must leave before the cards move through its space.
      // Use its layout height because visibility changes must not affect measurement.
      const headingBottom = processVisible
        ? processHeading.getBoundingClientRect().bottom
        : 0;
      const obscured = processVisible && cardTop < headingBottom + 24;
      if (process && process.dataset.headingObscured !== String(obscured))
        process.dataset.headingObscured = String(obscured);
      let naturalTop = stackTop;
      if (workVisible)
        work.forEach((card, i) => {
          const progress = clamp((vh * 0.436 - naturalTop) / (vh * 1.2));
          const minScale = i === 2 ? 0.9 : 0.8;
          const scale =
            i === work.length - 1 ? 1 : Math.max(minScale, 1 - progress * 0.2);
          const transform = reduced.matches
            ? "none"
            : `scale(${scale.toFixed(4)})`;
          if (card.style.transform !== transform)
            card.style.transform = transform;
          card.style.transformOrigin = "center center";
          naturalTop += heights[i] + gap;
        });
      if (introBounds) {
        const count = reduced.matches
          ? letters.length
          : Math.ceil(
              clamp((vh * 0.85 - introBounds.top) / (vh * 0.65)) *
                letters.length,
            );
        if (count !== previousLetters) {
          for (
            let i = Math.min(count, Math.max(0, previousLetters));
            i < Math.max(count, previousLetters);
            i++
          )
            letters[i].style.color = i < count ? "#0a0a0a" : "#aaa";
          if (previousLetters < 0)
            letters.forEach(
              (e, i) => (e.style.color = i < count ? "#0a0a0a" : "#aaa"),
            );
          previousLetters = count;
        }
      }
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    addEventListener("scroll", schedule, { passive: true });
    addEventListener("resize", schedule);
    reduced.addEventListener("change", schedule);
    update();
    return () => {
      observer.disconnect();
      animations.forEach((a) => a.cancel());
      cancelAnimationFrame(frame);
      removeEventListener("scroll", schedule);
      removeEventListener("resize", schedule);
      reduced.removeEventListener("change", schedule);
    };
  }, [enabled]);
}
