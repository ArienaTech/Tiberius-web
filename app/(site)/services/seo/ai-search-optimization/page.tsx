import type { Metadata } from "next";
import { PageHero, BlockHead, CardGrid, StatsRow, ProcessSteps, CtaBand } from "@/components/content/Primitives";

export const metadata: Metadata = {
  title: "AI Search Optimization | Tiberius Digital",
  description: "Get found in ChatGPT, Perplexity, Gemini, and AI-powered search. The future of SEO is already here — make sure your brand shows up.",
  alternates: { canonical: "https://www.tiberius.co.nz/services/seo/ai-search-optimization" },
};

export default function AiSearchOptimizationPage() {
  return (
    <>
      <PageHero
        title="AI Search Optimization"
        lede="Get found in ChatGPT, Perplexity, Gemini, and AI-powered search. The future of SEO is already here — make sure your brand shows up."
        ctaLabel="Optimize for AI Search"
        ctaSubject="AI search optimization — request"
        secondaryLabel="View All SEO Services"
        secondaryHref="/services/seo"
      />

      <section className="content-section">
        <BlockHead eyebrow="What's included" title="Structured for LLMs, optimised for zero-click answers" />
        <CardGrid
          columns={3}
          items={[
            { title: "Entity Optimization", desc: "Build clear entity relationships so AI understands who you are and what you do." },
            { title: "Schema Markup", desc: "Comprehensive structured data that LLMs use to generate accurate answers." },
            { title: "FAQ & Q&A Content", desc: "Natural-language Q&A formatting that AI assistants reference directly." },
            { title: "E-E-A-T Signals", desc: "Authority building through citations, authorship, and trust signals." },
            { title: "Knowledge Graph", desc: "Wikipedia, Wikidata, and Google Knowledge Panel optimisation." },
            { title: "Brand Mention Monitoring", desc: "Track and optimise how AI models reference your brand across the web." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="The landscape is changing" title="Traditional SEO alone is no longer enough" />
        <p className="lede" style={{ marginBottom: 24 }}>
          AI-powered search engines like ChatGPT, Perplexity, Gemini, and Copilot are reshaping how people
          discover businesses. If your brand is not optimised for these platforms, you are invisible to a growing
          segment of high-intent searchers.
        </p>
        <StatsRow
          stats={[
            { value: "73%", label: "Of users trust AI-generated answers over search results" },
            { value: "10x", label: "Growth in AI search queries year over year" },
            { value: "0", label: "Clicks if your brand isn't referenced by AI models" },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Why it matters" title="Essential for visibility, credibility, and revenue" />
        <CardGrid
          columns={2}
          items={[
            { title: "Higher Intent Traffic", desc: "Users asking AI for recommendations are further down the buying funnel and more likely to convert." },
            { title: "First-Mover Advantage", desc: "Most businesses have not optimised for AI search yet. Early adopters will dominate their niches." },
            { title: "Brand Authority", desc: "When AI models consistently recommend your brand, it builds massive trust and credibility." },
            { title: "Global Reach", desc: "AI search optimisation works across languages and regions, opening new markets without extra ad spend." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Industries we serve" title="Any business that wants to be discovered and trusted" />
        <CardGrid
          columns={3}
          items={[
            { title: "SaaS & Technology", desc: "Be the recommended solution when users ask AI for software recommendations." },
            { title: "E-commerce", desc: "Rank in AI product comparisons and buying guides." },
            { title: "Professional Services", desc: "Get recommended as the top provider in your city and industry." },
            { title: "Healthcare & Wellness", desc: "Build trust through authoritative mentions in AI health queries." },
            { title: "Education & Training", desc: "Appear in AI study guides, course recommendations, and learning pathways." },
            { title: "Finance & Insurance", desc: "Be referenced as a trusted option in AI financial advice and comparisons." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Process" title="Making your brand discoverable and recommendable" />
        <ProcessSteps
          steps={[
            { title: "Audit", desc: "Analyse how AI models currently reference your brand and identify gaps." },
            { title: "Optimize", desc: "Implement entity structuring, schema markup, and authoritative content." },
            { title: "Distribute", desc: "Build citations, mentions, and backlinks across high-authority sources." },
            { title: "Monitor", desc: "Track AI model references and refine strategy based on real data." },
          ]}
        />
      </section>

      <CtaBand
        eyebrow="Future-proof your search presence"
        title="Don't Wait for AI Search to Pass You By"
        lede="Start optimising now."
        ctaLabel="Get AI Search Strategy"
        ctaSubject="AI search optimization — request"
      />
    </>
  );
}
