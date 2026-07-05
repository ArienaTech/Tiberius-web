import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, BlockHead, CardGrid, ProcessSteps, StatsRow, TwoColList, CtaBand } from "@/components/content/Primitives";

export const metadata: Metadata = {
  title: "SEO Services Auckland | Tiberius Digital",
  description:
    "Professional SEO services in Auckland. #1 Google rankings, increased organic traffic, and real ROI. Local SEO, technical SEO, and content optimization.",
  alternates: { canonical: "https://www.tiberius.co.nz/services/seo" },
};

const subPages = [
  { title: "Local SEO", desc: "Dominate local search results and Google My Business listings", href: "/services/seo/local-seo" },
  { title: "International SEO", desc: "Scale globally with multi-region and multilingual optimisation", href: "/services/seo/international-seo" },
  { title: "eCommerce SEO", desc: "Product and category optimisation that drives sales", href: "/services/seo/ecommerce-seo" },
  { title: "Technical SEO", desc: "Site speed, crawlability, and technical foundation optimisation", href: "/services/seo/technical-seo" },
  { title: "SEO Audits", desc: "Comprehensive analysis and actionable optimisation roadmap", href: "/services/seo/seo-audits" },
  { title: "AI Search Optimization", desc: "Future-proof your content for AI search and voice queries", href: "/services/seo/ai-search-optimization" },
];

export default function SeoPage() {
  return (
    <>
      <PageHero
        title="SEO Services for Auckland Businesses"
        subtitle="Rank #1. Dominate Google, AI Search & Voice."
        lede="Stop playing SEO roulette. Our proven optimisation strategies don't just improve rankings — they drive qualified traffic that converts into customers. From local dominance to global visibility, we make your business impossible to ignore."
        ctaLabel="Get Your Free SEO Audit"
        ctaSubject="SEO — get my free audit"
      />

      <section className="content-section">
        <BlockHead eyebrow="Why most SEO fails" title="Vanity metrics won't grow your business" />
        <CardGrid
          columns={3}
          items={[
            { title: "Vanity Metrics Focus", desc: "Ranking for keywords that don't convert into customers." },
            { title: "Technical Neglect", desc: "Ignoring site speed, mobile optimisation, and crawlability." },
            { title: "Content Without Strategy", desc: "Publishing content that doesn't match search intent." },
            { title: "Outdated Tactics", desc: "Using old-school SEO strategies in today's AI-driven landscape." },
            { title: "No Local Optimisation", desc: "Missing out on \"near me\" searches and local customers." },
            { title: "Poor Tracking", desc: "Can't prove ROI or identify what's actually working." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Our approach" title="The Tiberius SEO Approach" />
        <p className="lede" style={{ marginBottom: 24 }}>
          We don't just optimise for search engines — we optimise for business results. Every keyword, every page,
          every link is chosen to drive qualified traffic that converts.
        </p>
        <CardGrid
          columns={3}
          items={[
            { title: "Proven Results", desc: "Average 44% organic growth in 90 days across all clients." },
            { title: "Conversion-Focused", desc: "We target keywords that drive customers, not just traffic." },
            { title: "Data-Driven", desc: "Every strategy backed by comprehensive analysis and testing." },
            { title: "Fast Implementation", desc: "See initial improvements within 30 days of optimisation." },
            { title: "White-Hat Only", desc: "Sustainable strategies that protect your long-term rankings." },
            { title: "Transparent Reporting", desc: "Monthly reports showing exactly what's working and what's not." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Process" title="Our Proven SEO Process" />
        <ProcessSteps
          steps={[
            { title: "Comprehensive SEO Audit", desc: "Deep analysis of your current SEO performance, technical issues, and competitive landscape." },
            { title: "Keyword Research & Strategy", desc: "We identify high-intent keywords your customers actually search for." },
            { title: "Technical Optimisation", desc: "Fix site speed, mobile responsiveness, crawlability and technical ranking factors." },
            { title: "Content Strategy & Creation", desc: "Develop content that matches search intent and guides users through your funnel." },
            { title: "Link Building & Authority", desc: "Build high-quality backlinks and establish your domain as an industry authority." },
            { title: "Monitor, Measure & Optimise", desc: "Continuous monitoring and optimisation based on performance data and algorithm updates." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Specialised SEO services" title="A dedicated page for every discipline" />
        <div className="card-grid" style={{ ["--cols" as string]: 3 }}>
          {subPages.map((s) => (
            <Link className="card-cell" href={s.href} key={s.href} style={{ display: "flex" }}>
              <b>{s.title}</b>
              <p>{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="content-section">
        <BlockHead eyebrow="AI-ready SEO" title="Built for the future of search" />
        <TwoColList
          left={{
            title: "AI Search Optimization",
            items: [
              "Schema markup for enhanced understanding",
              "Natural language content optimisation",
              "Featured snippet targeting",
              "Entity-based SEO strategies",
            ],
          }}
          right={{
            title: "Voice Search Ready",
            items: [
              "Conversational keyword targeting",
              "FAQ-style content structure",
              "Local voice search optimisation",
              "Mobile-first indexing compliance",
            ],
          }}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Real results" title="SEO results that hold up" />
        <StatsRow
          stats={[
            { value: "+44%", label: "Avg organic growth in 90 days" },
            { value: "30", label: "Days to see initial ranking improvements" },
            { value: "85%", label: "Of clients see page 1 rankings within 6 months" },
          ]}
        />
      </section>

      <CtaBand
        eyebrow="Ready to dominate search?"
        title="Ready to Dominate Search Results?"
        lede="Stop losing customers to competitors who rank higher. Get a comprehensive SEO audit and custom strategy that drives real business growth."
        ctaLabel="Get Your Free SEO Audit"
        ctaSubject="SEO — get my free audit"
      />
    </>
  );
}
