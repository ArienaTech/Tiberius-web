"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const resultsLinks = [
  { href: "/global-results", label: "Global Results" },
  { href: "/case-studies", label: "Local Results" },
];

export default function SiteHeader({ intro = false }: { intro?: boolean }) {
  const pathname = usePathname();
  const [isResultsOpen, setResultsOpen] = useState(false);
  const [isMobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setResultsOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("nav-open", isMobileOpen);
    return () => document.body.classList.remove("nav-open");
  }, [isMobileOpen]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setResultsOpen(false);
      }
    }
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setResultsOpen(false);
        setMobileOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <>
      <header className={`site-header${intro ? " is-intro" : ""}`}>
        <Link className="brand" href="/">
          TIBERIUS<sup>®</sup>
        </Link>
        <nav className="main-nav">
          <Link href="/services">
            <i>01</i>SERVICES
          </Link>
          <Link href="/about-us">
            <i>02</i>ABOUT
          </Link>
          <div className={`nav-dropdown${isResultsOpen ? " is-open" : ""}`} ref={dropdownRef}>
            <button
              type="button"
              className="nav-dropdown-trigger"
              aria-haspopup="true"
              aria-expanded={isResultsOpen}
              onClick={() => setResultsOpen((v) => !v)}
            >
              <i>03</i>RESULTS<span className="caret" aria-hidden="true"></span>
            </button>
            <div className="nav-dropdown-menu" role="menu">
              {resultsLinks.map((l) => (
                <Link key={l.href} href={l.href} role="menuitem" onClick={() => setResultsOpen(false)}>
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/contact">
            <i>04</i>CONTACT
          </Link>
        </nav>
        <div className="header-right">
          <Link className="header-cta" href="/contact">
            BOOK A STRATEGY CALL
          </Link>
          <button
            type="button"
            className={`nav-toggle${isMobileOpen ? " is-open" : ""}`}
            aria-label="Menu"
            aria-expanded={isMobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <div className={`mobile-nav${isMobileOpen ? " is-open" : ""}`}>
        <Link href="/services" onClick={() => setMobileOpen(false)}>
          Services
        </Link>
        <Link href="/about-us" onClick={() => setMobileOpen(false)}>
          About
        </Link>
        <span className="mobile-nav-label">Results</span>
        <div className="mobile-nav-sub">
          {resultsLinks.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
        <Link href="/contact" onClick={() => setMobileOpen(false)}>
          Contact
        </Link>
        <Link className="btn-pill mobile-nav-cta" href="/contact" onClick={() => setMobileOpen(false)}>
          <span className="btn-fill"></span>
          <span className="btn-label">Book a Strategy Call</span>
          <span className="btn-arrow">→</span>
        </Link>
      </div>
    </>
  );
}
