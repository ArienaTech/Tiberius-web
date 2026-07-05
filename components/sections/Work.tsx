import Link from "next/link";

export default function Work() {
  return (
    <>
<section id="work" aria-label="Featured work">
    <div className="sec-head">
      <span className="eyebrow" data-reveal>Results, not promises</span>
      <span className="sec-index" data-reveal>/ 02 — WORK</span>
    </div>
    <div className="work-grid">
      <article className="work-item" data-view>
        <div className="work-media" data-media><div className="work-visual"><div className="wv-core wv-aeris"></div><div className="wv-glyph"></div></div></div>
        <div className="work-info">
          <h3 className="work-title">Auckland Commercial Roofing</h3>
          <div className="work-meta">Technical SEO + Google Ads<br/>2026</div>
        </div>
        <p className="work-result">Complete rebuild of a stagnant, non-ranking site and ad account. <b>Cost per click down from $51.05 to $5.96</b> within 20 days, plus #1 organic rankings for its core commercial roofing terms.</p>
      </article>
      <article className="work-item" data-view>
        <div className="work-media" data-media><div className="work-visual"><div className="wv-core wv-obscura"></div><div className="wv-glyph"></div></div></div>
        <div className="work-info">
          <h3 className="work-title">The Natural Funeral Company</h3>
          <div className="work-meta">Google Ads + CRO<br/>2026</div>
        </div>
        <p className="work-result">Rebuilt an underbuilt, stagnant ad account and optimised the site to convert the extra traffic. <b>+277% conversion growth</b> year-on-year, cost per lead down 37.5%.</p>
      </article>
      <article className="work-item" data-view>
        <div className="work-media" data-media><div className="work-visual"><div className="wv-core wv-helix"></div><div className="wv-glyph"></div></div></div>
        <div className="work-info">
          <h3 className="work-title">Hard2Kill Apparel</h3>
          <div className="work-meta">Shopify + Next.js<br/>2025</div>
        </div>
        <p className="work-result">Custom React/Next.js storefront on Shopify for BKFC athlete Haze &ldquo;The Huntsman&rdquo; Hepi. <b>A flagship store built to scale</b> — now driving merchandise sales across NZ, Australia and internationally.</p>
      </article>
    </div>
    <div className="work-cta-row" data-reveal>
      <Link className="btn-pill" href="/case-studies" data-magnetic>
        <span className="btn-fill"></span>
        <span className="btn-label">Get results like these — book a call</span>
        <span className="btn-arrow">→</span>
      </Link>
    </div>
  </section>
    </>
  );
}
