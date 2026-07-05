import { placeholderImg } from "@/lib/placeholder";

const partners = [
  "Ideal Painting/Crown Wash",
  "Climber Property",
  "Grease Monkey Shop",
  "RE/MAX",
  "Peel Away",
  "Mansons TCLM Limited",
  "Natural Funeral",
  "Vartech Air",
  "Green Doctors",
  "Accumulus",
  "Ecotone Coatings",
  "NZ Gates",
  "Out The Mud",
  "Hard2Kill Apparel",
  "Stronghold Group",
  "Lil Ragu",
  "Pacific Pools",
  "Teebay",
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
      {partners.map((name) => (
        <div className="partner-cell" data-reveal key={name}>
          <img src={placeholderImg(name, 200, 90)} alt={name} width={200} height={90} loading="lazy" />
        </div>
      ))}
    </div>
  </section>
    </>
  );
}
