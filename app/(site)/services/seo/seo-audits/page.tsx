import type { Metadata } from "next";
import { PageHero, BlockHead, CardGrid, ProcessSteps, TwoColList, CtaBand } from "@/components/content/Primitives";

export const metadata: Metadata = {
  title: "SEO Audits | Tiberius Digital",
  description: "A complete diagnostic of your website's search performance. We find the leaks, fix the gaps, and give you a prioritized action plan.",
  alternates: { canonical: "https://www.tiberius.co.nz/services/seo/seo-audits" },
};

export default function SeoAuditsPage() {
  return (
    <>
      <PageHero
        title="SEO Audits"
        lede="A complete diagnostic of your website's search performance. We find the leaks, fix the gaps, and give you a prioritized action plan."
        ctaLabel="Request an SEO Audit"
        ctaSubject="SEO audit — request"
        secondaryLabel="View All SEO Services"
        secondaryHref="/services/seo"
      />

      <section className="content-section">
        <BlockHead eyebrow="What's included" title="Every audit covers three pillars of modern SEO" />
        <CardGrid
          columns={3}
          items={[
            { title: "Technical Audit", desc: "Crawl errors, page speed, mobile usability, index coverage, and Core Web Vitals." },
            { title: "On-Page Audit", desc: "Content gaps, keyword cannibalisation, internal linking, and metadata optimisation." },
            { title: "Off-Page Audit", desc: "Backlink profile analysis, authority scores, and competitor comparison." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="What we analyze" title="We go deeper than automated tools" />
        <CardGrid
          columns={3}
          items={[
            { title: "Site Architecture", desc: "URL structure, internal linking depth, navigation flow, crawl efficiency analysis." },
            { title: "Page Speed & Core Web Vitals", desc: "LCP, FID, CLS scoring with specific fixes for each metric below threshold." },
            { title: "Content Quality", desc: "Thin content detection, duplicate analysis, keyword cannibalisation, topical gaps." },
            { title: "Backlink Profile", desc: "Authority score analysis, toxic link detection, anchor text distribution." },
            { title: "Mobile Experience", desc: "Responsive design audits, mobile usability errors, touch-target optimisation." },
            { title: "JavaScript & Rendering", desc: "Client-side rendering audits, hydration issues, dynamic content indexability." },
            { title: "Security & Trust Signals", desc: "SSL configuration, mixed content, security headers, trust badge placement." },
            { title: "Competitor Benchmarking", desc: "Side-by-side comparison with top 3 competitors — where you lag and lead." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Process" title="A thorough, methodical process" />
        <ProcessSteps
          steps={[
            { title: "Discovery", desc: "Deep dive into your site, analytics, and Search Console data." },
            { title: "Crawl & Test", desc: "Run comprehensive crawls, speed tests, and manual checks." },
            { title: "Analyze", desc: "Compare findings against best practices and competitor benchmarks." },
            { title: "Report", desc: "Deliver a prioritised action plan with impact estimates and timelines." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Who benefits" title="Every website has blind spots" />
        <CardGrid
          columns={3}
          items={[
            { title: "New Websites", desc: "Launch with a solid SEO foundation instead of fixing problems later." },
            { title: "Stagnant Sites", desc: "Traffic flatlined? An audit reveals exactly what is choking your growth." },
            { title: "Redesign Projects", desc: "Migrate without losing rankings by auditing before, during, and after launch." },
            { title: "E-commerce Stores", desc: "Product catalogs and faceted navigation create hidden technical debt." },
            { title: "Local Businesses", desc: "Compete effectively against national brands in your service area." },
            { title: "Enterprise Organizations", desc: "Governance, scale, and multi-site coordination issues identified and resolved." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="What you get" title="A report designed for action, not just reading" />
        <TwoColList
          left={{
            title: "Audit Deliverables",
            items: [
              "Executive summary with top 10 priority fixes",
              "Detailed technical report with screenshots and evidence",
              "Content gap analysis with topic opportunities",
              "Competitor benchmark report",
              "90-day implementation roadmap",
            ],
          }}
          right={{
            title: "Results You Can Expect",
            items: [
              "Clear understanding of what is hurting your rankings",
              "Prioritised action plan with effort vs. impact scoring",
              "Content opportunities your competitors are missing",
              "Technical fixes that improve UX and conversions",
              "Baseline metrics to measure future progress",
            ],
          }}
        />
      </section>

      <CtaBand
        eyebrow="Get your audit"
        title="Comprehensive SEO Audit, Delivered in 5 Business Days"
        ctaLabel="Request SEO Audit"
        ctaSubject="SEO audit — request"
      />
    </>
  );
}
