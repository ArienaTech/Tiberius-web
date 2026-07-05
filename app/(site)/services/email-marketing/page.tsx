import type { Metadata } from "next";
import { PageHero, BlockHead, CardGrid, TwoColList, CtaBand } from "@/components/content/Primitives";

export const metadata: Metadata = {
  title: "Email Marketing Auckland | Tiberius Digital",
  description: "Automated email sequences that close deals, nurture leads and bring customers back without lifting a finger.",
  alternates: { canonical: "https://www.tiberius.co.nz/services/email-marketing" },
};

export default function EmailMarketingPage() {
  return (
    <>
      <PageHero
        title="Email That Sells While You Sleep"
        lede="Email still delivers the highest ROI across all digital marketing channels — but only when it's done right. We craft automated email sequences that close deals, nurture leads and bring customers back without lifting a finger."
        ctaLabel="Get Email Strategy"
        ctaSubject="Email marketing — strategy request"
        secondaryLabel="View All Services"
        secondaryHref="/services"
      />

      <section className="content-section">
        <BlockHead eyebrow="Flows we build" title="Performance-tested automations" />
        <CardGrid
          columns={3}
          items={[
            { title: "Welcome Sequences", desc: "Onboarding journeys that introduce new subscribers to your brand and value." },
            { title: "Cart Recovery", desc: "Abandoned cart and checkout recovery sequences that rescue lost sales." },
            { title: "Re-engagement", desc: "Win-back campaigns that reactivate dormant subscribers and customers." },
            { title: "Upsell Automations", desc: "Cross-sell and upsell sequences that maximise customer lifetime value." },
            { title: "Review Requests", desc: "Post-purchase follow-ups that generate reviews and repeat business." },
            { title: "Event Triggers", desc: "Product launches, flash sales, and webinar follow-up automations." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="AI enhancement" title="Smart automation gets smarter with AI" />
        <TwoColList
          left={{
            title: "Smart Features",
            items: [
              "Behaviour-based triggers that adapt to user actions",
              "Subject line optimisation using predictive algorithms",
              "Smart send times based on engagement data",
              "Dynamic content blocks personalised per user",
              "AI-generated segmentation for tailored flows",
            ],
          }}
          right={{
            title: "Platform Integration",
            items: ["Klaviyo", "Mailchimp", "ActiveCampaign", "HubSpot"],
          }}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Reports and optimisation" title="Every campaign tracked, analysed and improved" />
        <CardGrid
          columns={3}
          items={[
            { title: "Performance Metrics", desc: "Open and click-through rate analysis, conversion tracking, revenue per email, subscriber growth." },
            { title: "Optimisation", desc: "A/B testing for content and layout, list hygiene and deliverability audits, send time optimisation." },
            { title: "Reporting", desc: "Monthly performance reports, campaign ROI analysis, actionable recommendations, growth forecasting." },
          ]}
        />
      </section>

      <CtaBand
        eyebrow="Ready to let email work while you sleep?"
        title="Ready to Let Email Work While You Sleep?"
        lede="Discover how email marketing can become your silent sales engine."
        ctaLabel="Get Email Strategy"
        ctaSubject="Email marketing — strategy request"
      />
    </>
  );
}
