import type { Metadata } from "next";
import { PageHero, BlockHead, CardGrid, StatsRow, ProcessSteps, CtaBand } from "@/components/content/Primitives";

export const metadata: Metadata = {
  title: "Technical SEO Services | Tiberius Digital",
  description: "Fix the foundation. Speed, crawlability, and indexability — the invisible work that makes everything else possible.",
  alternates: { canonical: "https://www.tiberius.co.nz/services/seo/technical-seo" },
};

export default function TechnicalSeoPage() {
  return (
    <>
      <PageHero
        title="Technical SEO"
        lede="Fix the foundation. Speed, crawlability, and indexability — the invisible work that makes everything else possible."
        ctaLabel="Book a Technical Audit"
        ctaSubject="Technical SEO — audit request"
        secondaryLabel="View All SEO Services"
        secondaryHref="/services/seo"
      />

      <section className="content-section">
        <BlockHead eyebrow="What's included" title="Deep technical fixes search engines and users both reward" />
        <CardGrid
          columns={3}
          items={[
            { title: "Site Speed Optimization", desc: "Core Web Vitals, lazy loading, and asset compression for sub-3-second loads." },
            { title: "Crawl & Index Fixes", desc: "XML sitemaps, robots.txt, canonical tags, and redirect mapping." },
            { title: "Mobile Optimization", desc: "Responsive audits, viewport issues, and touch-target fixes." },
            { title: "Structured Data", desc: "Schema markup implementation for rich snippets and AI search visibility." },
            { title: "JavaScript SEO", desc: "Rendering audits and hydration fixes for SPAs and dynamic content." },
            { title: "Security & HTTPS", desc: "SSL configuration, mixed-content fixes, and security headers." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Why it's critical" title="If search engines can't crawl it, you won't rank" />
        <p className="lede" style={{ marginBottom: 24 }}>
          You can have the best content in the world, but if search engines cannot crawl, render, and index your
          site efficiently, you will never rank. Technical SEO is the foundation everything else builds on.
        </p>
        <StatsRow
          stats={[
            { value: "53%", label: "Of mobile users abandon sites over 3s load time" },
            { value: "40%", label: "Revenue lost by sites with poor Core Web Vitals" },
            { value: "$0", label: "ROI of content search engines can't crawl or index" },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Common issues we fix" title="What we find on a regular basis" />
        <CardGrid
          columns={3}
          items={[
            { title: "Slow Page Speed", desc: "Unoptimised images, bloated JavaScript, and poor server response times." },
            { title: "Mobile Usability Errors", desc: "Viewport issues, touch target problems, and content-wider-than-screen errors." },
            { title: "Broken Links & Redirects", desc: "Orphan pages, redirect chains, and 404 errors that waste crawl budget." },
            { title: "Index Bloat", desc: "Duplicate content, thin pages, and faceted navigation creating low-value URLs." },
            { title: "Crawl Errors", desc: "Robots.txt blocking critical pages, incorrect canonical tags, sitemap issues." },
            { title: "Security Issues", desc: "Mixed content warnings, missing SSL, and security headers that erode trust." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Process" title="Diagnose, fix, and monitor" />
        <ProcessSteps
          steps={[
            { title: "Crawl", desc: "Comprehensive technical crawl to map every issue on your site." },
            { title: "Diagnose", desc: "Prioritise fixes by SEO impact and business criticality." },
            { title: "Fix", desc: "Implement solutions with zero downtime and full QA testing." },
            { title: "Monitor", desc: "Ongoing technical health tracking and reporting." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Industries we serve" title="Every website has technical SEO needs" />
        <CardGrid
          columns={3}
          items={[
            { title: "E-commerce", desc: "Product catalog optimisation, faceted navigation, speed tuning for high-traffic stores." },
            { title: "SaaS & Technology", desc: "SPA rendering, JavaScript SEO, and API-driven content indexing." },
            { title: "Publishing & Media", desc: "Large-scale site architecture, pagination, and ad-load optimisation." },
            { title: "Healthcare", desc: "HIPAA-compliant hosting, local schema, and appointment booking integration." },
            { title: "Real Estate", desc: "MLS feed integration, location pages, and dynamic content optimisation." },
            { title: "Enterprise", desc: "Multi-domain consolidation, international hreflang, and governance frameworks." },
          ]}
        />
      </section>

      <CtaBand
        eyebrow="Fix what's holding you back"
        title="Fix What's Holding You Back"
        lede="Book a technical SEO audit and find out exactly what's costing you rankings."
        ctaLabel="Book Technical Audit"
        ctaSubject="Technical SEO — audit request"
      />
    </>
  );
}
