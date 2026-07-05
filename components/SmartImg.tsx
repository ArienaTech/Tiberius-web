"use client";

import { useState } from "react";

/**
 * Plain <img> that swaps to a fallback source if the primary one
 * fails to load (external CDNs can rotate or remove images).
 */
export default function SmartImg({
  src,
  fallback,
  alt,
  ...rest
}: React.ImgHTMLAttributes<HTMLImageElement> & { fallback?: string }) {
  const [failed, setFailed] = useState(false);
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      {...rest}
      alt={alt ?? ""}
      src={failed && fallback ? fallback : src}
      onError={() => setFailed(true)}
    />
  );
}
