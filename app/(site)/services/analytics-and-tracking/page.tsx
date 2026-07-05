import type { Metadata } from "next";
import { PageHero, BlockHead, CardGrid, TwoColList, CtaBand } from "@/components/content/Primitives";

export const metadata: Metadata = {
  title: "Analytics & Tracking Auckland | Tiberius Digital",
  description: "Full analytics stacks that track every click, sale and behaviour across your marketing channels.",
  alternates: { canonical: "https://www.tiberius.co.nz/services/analytics-and-tracking" },
};

export default function AnalyticsPage() {
  return (
    <>
      <PageHero
        title="Know Exactly What's Working — And What's Not"
        lede="We eliminate guesswork. Tiberius sets up full analytics stacks that track every click, sale and behaviour across your marketing channels."
        ctaLabel="Get Analytics Setup"
        ctaSubject="Analytics — setup request"
        secondaryLabel="View All Services"
        secondaryHref="/services"
      />

      <section className="content-section">
        <BlockHead eyebrow="What we set up" title="Complete analytics infrastructure" />
        <CardGrid
          columns={2}
          items={[
            { title: "GA4 & Tag Manager", desc: "Advanced Google Analytics 4 setup with comprehensive event tracking." },
            { title: "Conversion Tracking", desc: "Cross-platform tracking that follows customers through your entire funnel." },
            { title: "Custom Dashboards", desc: "Looker Studio dashboards with real-time performance insights." },
            { title: "First-Party Data", desc: "Clean data collection and attribution for accurate reporting." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="AI-ready insights" title="Clean data pipelines for the future of marketing intelligence" />
        <TwoColList
          left={{
            title: "Advanced Analytics Features",
            items: [
              "Custom event tracking for every user interaction",
              "Cross-device and cross-platform attribution",
              "Enhanced eCommerce tracking for revenue insights",
              "Real-time data streaming and alerts",
              "Privacy-compliant data collection methods",
            ],
          }}
          right={{
            title: "AI & Predictive Capabilities",
            items: [
              "Predictive models for customer lifetime value",
              "Performance forecasting and trend analysis",
              "AI prompts for automated insights generation",
              "Anomaly detection for performance monitoring",
              "Automated reporting with actionable recommendations",
            ],
          }}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Custom dashboard features" title="Turn data into actionable insights" />
        <CardGrid
          columns={3}
          items={[
            { title: "Revenue Tracking", desc: "MRR, customer acquisition cost, ROAS, and lifetime value analysis." },
            { title: "Traffic Analysis", desc: "Source/medium performance, behaviour flow mapping, conversion funnel analysis." },
            { title: "Campaign Performance", desc: "Multi-channel attribution, cost per acquisition, ROI comparison, audience segment analysis." },
          ]}
        />
      </section>

      <CtaBand
        eyebrow="Ready to track what matters?"
        title="Ready to Track What Matters?"
        lede="Get a complete analytics setup that reveals exactly where your revenue comes from."
        ctaLabel="Get Analytics Setup"
        ctaSubject="Analytics — setup request"
      />
    </>
  );
}
