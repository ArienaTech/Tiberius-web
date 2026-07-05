import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy | Tiberius Digital",
  description: "How Tiberius Digital uses cookies across tiberius.co.nz and tiberius.digital.",
  alternates: { canonical: "https://www.tiberius.co.nz/cookie-policy" },
};

const cookieTable: { name: string; purpose: string; duration: string }[] = [
  { name: "__cf_bm (Cloudflare)", purpose: "Bot mitigation / security", duration: "30 minutes" },
  { name: "session", purpose: "Strictly necessary session state", duration: "Session" },
  { name: "_ga / _ga* (Google Analytics)", purpose: "Analytics", duration: "2 years" },
  { name: "_gid (Google Analytics)", purpose: "Analytics", duration: "24 hours" },
  { name: "_gat (Google Analytics)", purpose: "Analytics — rate limiting", duration: "1 minute" },
  { name: "_fbp / _fbc (Meta)", purpose: "Marketing / conversion tracking", duration: "3 months" },
  { name: "_gcl_au / _gcl_aw (Google Ads)", purpose: "Marketing / conversion tracking", duration: "3 months" },
  { name: "hubspotutk / __hstc (HubSpot)", purpose: "Marketing / functional", duration: "13 months" },
  { name: "__hssc (HubSpot)", purpose: "Functional", duration: "30 minutes" },
  { name: "__hssrc (HubSpot)", purpose: "Functional", duration: "Session" },
  { name: "bcookie (LinkedIn)", purpose: "Marketing", duration: "1 year" },
  { name: "lidc (LinkedIn)", purpose: "Marketing", duration: "24 hours" },
];

export default function CookiePolicyPage() {
  return (
    <section className="content-section narrow" style={{ paddingTop: "clamp(150px,20vw,210px)" }}>
      <h1 className="display page-title" style={{ fontSize: "clamp(32px,5vw,56px)" }}>
        Cookie Policy
      </h1>
      <p className="legal-meta">
        Last updated 16 March 2026 · Governed by New Zealand law · Tanama Limited trading as Tiberius Digital ·
        Covers tiberius.co.nz &amp; tiberius.digital
      </p>
      <div className="prose">
        <h2>1. What Cookies Are</h2>
        <p>
          Cookies are small text files placed on your device, either session (deleted when you close your browser)
          or persistent, and set either by us (first-party) or by our providers (third-party).
        </p>

        <h2>2. Categories We Use</h2>
        <p>Strictly necessary, analytics, marketing, and functional cookies.</p>

        <h2>3. Cookie Table</h2>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5 }}>
            <thead>
              <tr style={{ borderBottom: "1px solid var(--line-2)", textAlign: "left" }}>
                <th style={{ padding: "10px 12px" }}>Cookie</th>
                <th style={{ padding: "10px 12px" }}>Purpose</th>
                <th style={{ padding: "10px 12px" }}>Duration</th>
              </tr>
            </thead>
            <tbody>
              {cookieTable.map((c) => (
                <tr key={c.name} style={{ borderBottom: "1px solid var(--line)" }}>
                  <td style={{ padding: "10px 12px", color: "var(--ink)" }}>{c.name}</td>
                  <td style={{ padding: "10px 12px" }}>{c.purpose}</td>
                  <td style={{ padding: "10px 12px" }}>{c.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>4. Managing Your Preferences</h2>
        <p>
          You can manage cookies via our consent banner, your browser settings, Google Analytics opt-out, Meta ad
          preferences, or LinkedIn opt-out. We respect Do Not Track signals where technically supported.
        </p>

        <h2>5. Platform-Specific Disclosures</h2>
        <p>
          We use the Meta Pixel, Google Ads conversion tracking (with IP anonymisation), HubSpot, and the LinkedIn
          Insight Tag to measure and improve our marketing performance.
        </p>

        <h2>6. Changes</h2>
        <p>We may update this policy from time to time; the &ldquo;last updated&rdquo; date above reflects the current version.</p>

        <h2>7. Contact</h2>
        <p>support@tiberius.co.nz — 73 The Strand, Parnell, Auckland 1010, New Zealand.</p>
      </div>
    </section>
  );
}
