export default function Faq() {
  return (
    <>
<section id="faq" aria-label="FAQ">
    <div className="faq-wrap">
      <div>
        <span className="eyebrow" data-reveal>Before the credits</span>
        <h2 className="display split-lines" data-split style={{marginTop:'36px',fontSize:'clamp(36px,4.6vw,68px)'}}>Straight answers, before you spend.</h2>
      </div>
      <div className="faq-list">
        <div className="faq-item" data-reveal>
          <button className="faq-q">What does SEO or Google Ads management cost in Auckland?<span className="faq-icon"></span></button>
          <div className="faq-a"><p>SEO retainers typically start around $1,500/month and Google Ads management from $800/month plus your ad spend, scaled to how competitive your market is. Every engagement starts with a free audit so the quote is based on your actual numbers — not a rate card. No lock-in contracts.</p></div>
        </div>
        <div className="faq-item" data-reveal>
          <button className="faq-q">How long until SEO shows results?<span className="faq-icon"></span></button>
          <div className="faq-a"><p>Honestly: three to six months for meaningful movement, longer in highly competitive niches. Anyone promising page one in weeks is selling you something. That’s why we usually pair SEO with Google Ads early — ads generate leads now while organic rankings compound in the background.</p></div>
        </div>
        <div className="faq-item" data-reveal>
          <button className="faq-q">What is AI search optimisation?<span className="faq-icon"></span></button>
          <div className="faq-a"><p>More buyers now ask ChatGPT, Claude or Google’s AI for recommendations instead of scrolling results. AI search optimisation structures your content, schema and authority signals so those assistants cite your business as the answer — alongside classic SEO and voice search, not instead of it.</p></div>
        </div>
        <div className="faq-item" data-reveal>
          <button className="faq-q">Who do you work with?<span className="faq-icon"></span></button>
          <div className="faq-a"><p>Small and medium businesses, local service companies, e-commerce, SaaS, startups and growing B2B firms across Auckland and New Zealand — plus enterprise teams that want better ROI from existing budgets. If you sell something worth finding, we can make you findable.</p></div>
        </div>
        <div className="faq-item" data-reveal>
          <button className="faq-q">How do you report on results?<span className="faq-icon"></span></button>
          <div className="faq-a"><p>Monthly, in plain English: leads generated, cost per lead, rankings moved, revenue attributed — with a live dashboard you can check any time. You own every account and asset we build. If the numbers ever stop justifying the retainer, we’ll tell you first.</p></div>
        </div>
      </div>
    </div>
  </section>
    </>
  );
}
