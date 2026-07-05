import type { Metadata } from "next";
import { PageHero, BlockHead, CardGrid, ProcessSteps, CtaBand } from "@/components/content/Primitives";

export const metadata: Metadata = {
  title: "Marketing Strategy | Tiberius Digital",
  description: "Comprehensive marketing strategies that drive growth, maximise ROI, and create sustainable competitive advantages.",
  alternates: { canonical: "https://www.tiberius.co.nz/services/marketing-strategy" },
};

export default function MarketingStrategyPage() {
  return (
    <>
      <PageHero
        title="Marketing Strategy"
        lede="Develop comprehensive marketing strategies that drive growth, maximize ROI, and create sustainable competitive advantages in your market."
        ctaLabel="Start Your Marketing Strategy"
        ctaSubject="Marketing strategy — get started"
        secondaryLabel="View All Services"
        secondaryHref="/services"
      />

      <section className="content-section">
        <CardGrid
          columns={3}
          items={[
            { title: "Data-Driven Growth", desc: "Strategic planning based on market research, analytics, and proven growth frameworks." },
            { title: "ROI Optimization", desc: "Maximise marketing spend efficiency and drive measurable business results." },
            { title: "Integrated Approach", desc: "Unified marketing strategy across all channels and touchpoints for maximum impact." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Our services" title="Marketing Strategy Services" />
        <CardGrid
          columns={2}
          items={[
            { title: "Market Research & Analysis", desc: "Target audience segmentation, competitive landscape analysis, market opportunity assessment, consumer behaviour insights, industry trend analysis." },
            { title: "Strategic Planning", desc: "Marketing objectives definition, channel strategy development, budget allocation planning, timeline & milestone setting, KPI framework creation." },
            { title: "Customer Journey Mapping", desc: "Touchpoint identification, experience optimisation, conversion funnel design, pain point analysis, retention strategy development." },
            { title: "Performance Optimization", desc: "Campaign performance analysis, A/B testing strategies, conversion rate optimisation, attribution modelling, continuous improvement plans." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Framework" title="Our Strategic Framework" />
        <ProcessSteps
          steps={[
            { title: "Analyze", desc: "Market research and competitive analysis." },
            { title: "Strategize", desc: "Develop comprehensive marketing strategy." },
            { title: "Execute", desc: "Implement campaigns across channels." },
            { title: "Measure", desc: "Track performance and analyse results." },
            { title: "Optimize", desc: "Refine and improve strategies." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Focus areas" title="Strategic Focus Areas" />
        <CardGrid
          columns={3}
          items={[
            { title: "Digital Marketing Strategy", desc: "SEO & content marketing, paid advertising optimisation, social media strategy, email marketing automation, martech stack." },
            { title: "Growth Marketing", desc: "Customer acquisition strategies, retention & loyalty programs, viral marketing tactics, product-led growth, referral program design." },
            { title: "Brand Marketing", desc: "Brand awareness campaigns, thought leadership strategy, PR & media relations, event marketing, partnership marketing." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Why choose us" title="Why Choose Our Marketing Strategy Services" />
        <CardGrid
          columns={2}
          items={[
            { title: "Proven Methodology", desc: "Our strategic framework has been tested across industries and consistently delivers measurable growth and ROI improvements." },
            { title: "Cross-Channel Expertise", desc: "Deep knowledge across all marketing channels ensures integrated strategies that maximise impact and efficiency." },
            { title: "Data-Driven Decisions", desc: "Every strategic recommendation is backed by data analysis, market research, and performance metrics." },
            { title: "Agile Optimization", desc: "Continuous monitoring and optimisation ensure your marketing strategy evolves with market changes and opportunities." },
          ]}
        />
      </section>

      <CtaBand
        eyebrow="Ready to accelerate your growth?"
        title="Ready to Accelerate Your Growth?"
        lede="Let's develop a comprehensive marketing strategy that drives sustainable growth and competitive advantage."
        ctaLabel="Start Your Marketing Strategy"
        ctaSubject="Marketing strategy — get started"
      />
    </>
  );
}
