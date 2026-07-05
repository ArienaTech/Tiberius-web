import type { Metadata } from "next";
import { PageHero, BlockHead, CardGrid, TwoColList, ProcessSteps, CtaBand } from "@/components/content/Primitives";

export const metadata: Metadata = {
  title: "International SEO Services | Tiberius Digital",
  description: "We help ambitious brands expand their digital footprint across borders with consistent search visibility in multiple regions and languages.",
  alternates: { canonical: "https://www.tiberius.co.nz/services/seo/international-seo" },
};

export default function InternationalSeoPage() {
  return (
    <>
      <PageHero
        title="Go Global With International SEO That Works"
        lede="We specialize in helping ambitious brands expand their digital footprint across borders. Our international SEO strategies drive consistent search visibility in multiple regions and languages."
        ctaLabel="Get Global SEO Strategy"
        ctaSubject="International SEO — strategy request"
        secondaryLabel="View All SEO Services"
        secondaryHref="/services/seo"
      />

      <section className="content-section">
        <BlockHead eyebrow="What's covered" title="More than translation — localisation and intent mapping" />
        <CardGrid
          columns={3}
          items={[
            { title: "Multilingual Keywords", desc: "Research and localisation for target markets." },
            { title: "Hreflang Setup", desc: "Tag setup and validation for proper geo-targeting." },
            { title: "Domain Strategy", desc: "Country-level domain or subfolder structuring." },
            { title: "Regional Content", desc: "Culturally relevant and search-optimised content." },
            { title: "International Links", desc: "Link building and digital PR for global markets." },
            { title: "Market Research", desc: "Discovery and international market analysis." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="AI-friendly enhancements" title="Content that performs across AI-driven search" />
        <TwoColList
          left={{
            title: "Advanced Features",
            items: [
              "AI-assisted translation with native fluency checks",
              "Region-based content customisation tools",
              "Geo-targeting optimisation for AI search platforms",
              "Voice search enhancements tailored to international queries",
            ],
          }}
          right={{
            title: "Target Markets",
            items: ["Australia & APAC", "United States", "United Kingdom", "European Union", "North America", "Custom Markets"],
          }}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Perfect for" title="We understand the nuances of every territory" />
        <CardGrid
          columns={4}
          items={[
            { title: "Exporters", desc: "eCommerce brands entering new markets." },
            { title: "SaaS Companies", desc: "With regional product variants." },
            { title: "Tourism", desc: "Education and international services." },
            { title: "Agencies", desc: "Managing multinational campaigns." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Why it matters" title="Global reach starts with global visibility" />
        <CardGrid
          columns={3}
          items={[
            { title: "Market Expansion", desc: "Without strong international SEO, you'll struggle to gain traction in new markets." },
            { title: "Qualified Traffic", desc: "Drive conversion-ready audiences to your site in every location you operate." },
            { title: "Market Insights", desc: "Monitor behavioural differences across regions for long-term growth and agility." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Process" title="Our Process" />
        <ProcessSteps
          steps={[
            { title: "Discovery", desc: "International market research and competitor analysis." },
            { title: "Structure", desc: "Domain strategy and hreflang implementation." },
            { title: "Localize", desc: "Culturally relevant content creation and optimisation." },
            { title: "Scale", desc: "Region-specific reporting and continuous optimisation." },
          ]}
        />
      </section>

      <CtaBand
        eyebrow="Let's take your brand global"
        title="Ready to Dominate International Search?"
        lede="Let Tiberius put your brand on the world stage."
        ctaLabel="Get Global SEO Strategy"
        ctaSubject="International SEO — strategy request"
      />
    </>
  );
}
