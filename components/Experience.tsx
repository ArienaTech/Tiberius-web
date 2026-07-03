"use client";

import { useEffect } from "react";
import { initSite } from "@/lib/site-engine";

/**
 * Boots the WebGL stage, smooth scroll and all scroll/interaction
 * choreography after hydration. Renders nothing itself.
 */
export default function Experience() {
  useEffect(() => {
    const destroy = initSite();
    return destroy;
  }, []);
  return null;
}
