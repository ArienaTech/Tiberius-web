"use client";

import { useEffect } from "react";

/**
 * Inner content pages don't run the homepage's WebGL/smooth-scroll engine,
 * so they need the body's scroll-locking class removed for normal scrolling.
 */
export default function UnlockScroll() {
  useEffect(() => {
    document.body.classList.remove("is-locked");
    return () => {
      document.body.classList.add("is-locked");
    };
  }, []);
  return null;
}
