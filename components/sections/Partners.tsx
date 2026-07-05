const LOGO_BASE = "https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Tiberius/Logos";

/* Ordered for sales psychology (serial-position effect):
   — Primacy: open with the highest-authority, most recognisable names
     (RE/MAX's global brand, Mansons' corporate weight) so their
     credibility transfers to everything that follows.
   — Consistency: the brands featured in the Work and Voices sections
     (Grease Monkey, Natural Funeral, Hard2Kill) come next, so the logos
     reinforce the case studies the visitor just scrolled past.
   — Breadth: mixed industries through the middle show range.
   — Recency: close with the "+87 more" quantity cue, backing the
     "Trusted by 100+ brands" claim and ending on abundance. */
const partners = [
  { file: "ReMaxLogo.svg", name: "RE/MAX" },
  { file: "MansonsLogo.svg", name: "Mansons TCLM" },
  { file: "GreaseLogo.svg", name: "Grease Monkey Shop" },
  { file: "TheNatLogo.svg", name: "The Natural Funeral Company" },
  { file: "Hrd2killLogo.svg", name: "Hard2Kill Apparel" },
  { file: "GreenDocLogo.svg", name: "Green Doctors" },
  { file: "NZgatesLogo.svg", name: "NZ Gates" },
  { file: "PacificLogo.svg", name: "Pacific Pools" },
  { file: "VartechLogo.svg", name: "Vartech Air" },
  { file: "OutTheMudLogo.svg", name: "Out The Mud" },
  { file: "LilRaguLogo.svg", name: "Lil Ragu" },
  { file: "TheTeeLogo.svg", name: "The Tee" },
  { file: "Strongholdlogo.svg", name: "Stronghold Group" },
];

export default function Partners() {
  return (
    <>
<section id="partners" aria-label="Partners">
    <div className="sec-head">
      <span className="eyebrow" data-reveal>Trusted by 100+ brands</span>
      <span className="sec-index" data-reveal>/ 06 — PARTNERS</span>
    </div>
    <div className="partner-grid">
      {partners.map((p) => (
        <div className="partner-cell" data-reveal key={p.name}>
          <img src={`${LOGO_BASE}/${p.file}`} alt={p.name} height={44} loading="lazy" />
        </div>
      ))}
      <div className="partner-cell partner-more" data-reveal>
        <span>+87 more<br />NZ &amp; AU brands</span>
      </div>
    </div>
  </section>
    </>
  );
}
