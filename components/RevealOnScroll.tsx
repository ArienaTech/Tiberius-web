"use client";

import { useEffect } from "react";

/**
 * Progressive scroll-reveal for static inner pages (which don't run the
 * homepage's GSAP engine). Elements tagged with [data-anim] get an
 * `anim-ready` class (hidden state) and then `in-view` once they enter
 * the viewport. Without JS nothing is ever hidden, and reduced-motion
 * users skip the effect entirely.
 */
export default function RevealOnScroll() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-anim]"));
    if (!els.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (!("IntersectionObserver" in window)) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );

    els.forEach((el) => {
      // already on screen when the page loads → don't flash-hide it
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) return;
      el.classList.add("anim-ready");
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return null;
}
