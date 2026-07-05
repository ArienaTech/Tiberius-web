import type { Metadata } from "next";
import { PageHero, BlockHead, CardGrid, TwoColList, CtaBand } from "@/components/content/Primitives";

export const metadata: Metadata = {
  title: "Digital Strategy & Growth Consulting | Tiberius Digital",
  description: "Precision-engineered growth blueprints — market intelligence, customer personas, channel strategy, and ROI forecasting.",
  alternates: { canonical: "https://www.tiberius.co.nz/services/digital-strategy" },
};

export default function DigitalStrategyPage() {
  return (
    <>
      <PageHero
        title="Strategy That Wins Before Execution Begins"
        lede="We believe strategy is the foundation of scalable growth. Before we design a campaign, write a headline or launch a funnel, we go deep into your market, audience and business model."
        ctaLabel="Get Strategy Blueprint"
        ctaSubject="Digital strategy — blueprint request"
        secondaryLabel="View All Services"
        secondaryHref="/services"
      />

      <section className="content-section">
        <BlockHead eyebrow="What you get" title="Precision-engineered blueprints" />
        <CardGrid
          columns={3}
          items={[
            { title: "Market Intelligence", desc: "Competitor analysis and industry trend mapping to identify opportunities." },
            { title: "Customer Personas", desc: "Detailed audience profiles and messaging frameworks that convert." },
            { title: "Channel Strategy", desc: "Channel mix strategy and funnel mapping for maximum impact." },
            { title: "Action Plans", desc: "30, 60 and 90-day go-to-market implementation roadmaps." },
            { title: "Growth Forecasting", desc: "ROI forecast models and budget allocation recommendations." },
            { title: "Strategic Clarity", desc: "Clear roadmap with actionable recommendations and timeline-based plans." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="AI-enabled advantage" title="We build AI into your strategy from day one" />
        <TwoColList
          left={{
            title: "Advanced Capabilities",
            items: [
              "LLM-generated audience and industry analysis",
              "Predictive budget allocation modelling",
              "Conversion funnel diagnostics",
              "AI-powered content and keyword mapping",
              "Custom GPT prompts for messaging ideation",
            ],
          }}
          right={{
            title: "Strategy at Scale",
            items: [
              "See what others miss — from micro trends in customer behaviour to gaps in your competitive landscape",
              "Strategy at scale, precision and speed",
              "We process vast amounts of market data, competitor intelligence, and customer insights to deliver recommendations that would take traditional agencies weeks to compile",
            ],
          }}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Perfect for" title="Whether you're launching or scaling" />
        <CardGrid
          columns={4}
          items={[
            { title: "Startups", desc: "Preparing to launch or raise capital." },
            { title: "Service Businesses", desc: "Entering new markets." },
            { title: "Ecommerce", desc: "Scaling past seven figures." },
            { title: "Consultants", desc: "Coaches and SaaS founders." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Strategic deliverables" title="Everything you need to execute with confidence" />
        <TwoColList
          left={{
            title: "Core Strategy Pack",
            items: [
              "Audience segmentation and persona profiles",
              "Core messaging and brand story framework",
              "Platform-specific growth plans (SEO, Google Ads, Social, Email)",
              "Funnel structure and asset mapping",
              "KPI benchmarks and ROI forecast models",
            ],
          }}
          right={{
            title: "Implementation Support",
            items: ["Full-service execution", "In-house team collaboration", "Ongoing strategy refinement"],
          }}
        />
      </section>

      <CtaBand
        eyebrow="Ready to build a winning strategy?"
        title="Ready to Build a Winning Strategy?"
        lede="See how Tiberius Digital can blueprint your next growth move."
        ctaLabel="Get Strategy Blueprint"
        ctaSubject="Digital strategy — blueprint request"
      />
    </>
  );
}
