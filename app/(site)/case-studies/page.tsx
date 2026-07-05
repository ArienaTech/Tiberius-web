import type { Metadata } from "next";
import { PageHero, StatsRow, LinkBtn, MailtoBtn } from "@/components/content/Primitives";

export const metadata: Metadata = {
  title: "Case Studies | Real Results From NZ Businesses | Tiberius Digital",
  description: "See how we've helped businesses across industries achieve measurable growth through strategic digital marketing and proven execution.",
  alternates: { canonical: "https://www.tiberius.co.nz/case-studies" },
};

const testimonials = [
  {
    quote:
      "Great service, great attention to detail, made the whole process stress free and easy so I could focus on my upcoming fight.",
    person: "Haze 'The Huntsman' Hepi",
    role: "BKFC Athlete — Hard2Kill Apparel (hard2killapparel.com)",
  },
  {
    quote: "Our business is in a completely different position thanks to Tiberius. Profound impact working with these guys.",
    person: "The Natural Funeral Company",
    role: "naturalfuneralcompany.co.nz",
  },
  {
    quote:
      "Thanks for a great website, pleasure dealing with the Tiberius team. Prompt service, flexible meeting times and really assisted with ideas, suggestions and designed my site with a difference — just what I wanted. Very pleased, thanks again!",
    person: "Tony Davenport",
    role: "Accumulus (accumulus.nz)",
  },
  {
    quote: "The team was extremely helpful and easy to work with. A seamless experience start to finish.",
    person: "Andy Wolf",
    role: "Client",
  },
  {
    quote:
      "Tiberius Digital built us a completely custom site from scratch — new logo, online store, Afterpay integration. The process was smooth, professional and the result exceeded our expectations. Highly recommend.",
    person: "Grease Monkey Team",
    role: "greasemonkeyshop.co.nz",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        title="Real Results. Real Impact"
        lede="See how we've helped businesses across industries achieve measurable growth through strategic digital marketing and proven execution."
        ctaLabel="Get Started Now"
        ctaSubject="Case studies — get started"
      />

      <section className="content-section">
        <StatsRow
          stats={[
            { value: "500%+", label: "Average ROI Increase" },
            { value: "100+", label: "Successful Campaigns" },
            { value: "$10M+", label: "Revenue Generated" },
          ]}
        />
      </section>

      <section className="content-section">
        <div className="case-study-block">
          <div className="case-tags">
            <span>Complete Digital Overhaul</span>
            <span>Technical SEO</span>
            <span>Google Ads</span>
          </div>
          <h3>Auckland Commercial Roofing</h3>
          <div className="case-site">aklroof.co.nz</div>
          <h4>The Challenge</h4>
          <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "var(--ink-2)" }}>
            Auckland Commercial Roofing had an outdated website that was invisible in Google search and was
            burning budget on Google Ads — paying $51.05 per click with their previous provider, with minimal
            traffic and no real return. They needed a complete rebuild and a strategy partner who could actually
            move the needle.
          </p>
          <h4>The Results</h4>
          <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "var(--ink-2)" }}>
            #1 Google ranking for &ldquo;Commercial Roofing AKL&rdquo; and &ldquo;Commercial Roof NZ&rdquo;. 91
            PageSpeed performance score, 100 PageSpeed SEO score. Built with React / Next.js — 100/100
            accessibility, 100/100 SEO.
          </p>
          <h4>Google Ads Transformation — 20 Days After Tiberius Took Over</h4>
          <StatsRow
            stats={[
              { value: "$51.05 → $5.96", label: "Cost per click before vs after" },
              { value: "10x", label: "Lower CPC" },
              { value: "3x", label: "More clicks at half the budget" },
            ]}
          />
        </div>

        <div className="case-study-block">
          <div className="case-tags">
            <span>Google Ads Takeover</span>
            <span>CRO</span>
            <span>Website Opt.</span>
          </div>
          <h3>The Natural Funeral Company</h3>
          <div className="case-site">naturalfuneral.nz</div>
          <h4>The Situation</h4>
          <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "var(--ink-2)" }}>
            TNFC&apos;s Google Ads were basically invisible. Their previous provider had left campaigns underbuilt
            and stagnant — low reach, low volume and no meaningful growth. Tiberius took over the account,
            rebuilt the entire paid strategy from scratch and optimised the website alongside it to convert the
            increased traffic being driven.
          </p>
          <h4>Year-on-Year Results (Feb/Mar 2025 vs Feb/Mar 2026)</h4>
          <StatsRow
            stats={[
              { value: "+218%", label: "Click growth (445 vs 140)" },
              { value: "+310%", label: "Impression growth (4.67K vs 1.14K)" },
              { value: "+277%", label: "Conversion growth (33.92 vs 9 leads)" },
              { value: "-37.5%", label: "Cost per lead ($37 vs $59 CPA)" },
            ]}
          />
          <blockquote style={{ borderLeft: "2px solid var(--brass-dim)", paddingLeft: 20, marginTop: 24, color: "var(--ink)", fontStyle: "italic" }}>
            &ldquo;Our business is in a completely different position thanks to Tiberius. Profound impact working
            with these guys.&rdquo; — The Natural Funeral Company
          </blockquote>
        </div>

        <div className="case-study-block">
          <div className="case-tags">
            <span>Shopify Partner Build</span>
            <span>Next.js</span>
            <span>Ecommerce</span>
          </div>
          <h3>Hard2Kill Apparel</h3>
          <div className="case-site">hard2killapparel.com</div>
          <h4>The Brief</h4>
          <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "var(--ink-2)" }}>
            Haze &ldquo;The Huntsman&rdquo; Hepi is a professional boxer and BKFC athlete with a growing global
            fanbase. He needed an ecommerce store that matched his brand intensity — not a generic Shopify theme.
            Tiberius Digital built a fully custom React/Next.js frontend powered by Shopify, giving him a
            flagship store that performs like a premium international brand while keeping the backend completely
            effortless to manage.
          </p>
          <h4>The Outcome</h4>
          <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "var(--ink-2)" }}>
            Haze is now generating sales from Australia, New Zealand and internationally — using the store to
            drive merchandise revenue and build hype around upcoming fight events. The custom frontend loads at
            near-perfect PageSpeed and is built to scale as the brand grows globally.
          </p>
        </div>
      </section>

      <section className="content-section narrow" style={{ textAlign: "center" }}>
        <h2 className="display" style={{ fontSize: "clamp(26px,3.6vw,42px)" }}>
          Trusted by 100+ Brands Across Australasia &amp; Globally
        </h2>
        <p className="lede" style={{ margin: "18px auto 0", textAlign: "center" }}>
          We have worked with local service businesses, global ecommerce brands, national franchises and
          professional athletes — and every single engagement gets the same relentless standard of work. 5.0
          stars across 21 Google Reviews.
        </p>
      </section>

      <section className="content-section">
        <div className="card-grid" style={{ ["--cols" as string]: 3 }}>
          {testimonials.map((t) => (
            <div className="card-cell" key={t.person}>
              <p style={{ fontStyle: "italic" }}>&ldquo;{t.quote}&rdquo;</p>
              <b style={{ marginTop: 8 }}>{t.person}</b>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: ".1em", color: "var(--ink-3)", textTransform: "uppercase" }}>
                {t.role}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section" style={{ textAlign: "center" }}>
        <h2 className="display" style={{ fontSize: "clamp(28px,4vw,48px)", marginBottom: 18 }}>
          Ready to See the Same Results?
        </h2>
        <p className="lede" style={{ margin: "0 auto 28px", textAlign: "center" }}>
          Let&apos;s build something that actually works. We work with a select number of clients at any one
          time. If you are serious about growing your business online, we would love to hear from you.
        </p>
        <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
          <LinkBtn href="/onboarding" label="Get Started Now" />
          <MailtoBtn subject="Case studies — enquiry" label="Contact Us" to="support@tiberius.co.nz" />
        </div>
      </section>
    </>
  );
}
