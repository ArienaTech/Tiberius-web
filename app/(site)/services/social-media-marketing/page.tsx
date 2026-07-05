import type { Metadata } from "next";
import { PageHero, BlockHead, CardGrid, ProcessSteps, StatsRow, CtaBand } from "@/components/content/Primitives";

export const metadata: Metadata = {
  title: "Social Media Marketing Auckland | Tiberius Digital",
  description: "Data-driven social media strategies across Facebook, Instagram, LinkedIn, and TikTok that turn followers into customers.",
  alternates: { canonical: "https://www.tiberius.co.nz/services/social-media-marketing" },
};

export default function SocialMediaPage() {
  return (
    <>
      <PageHero
        title="Social Media Marketing"
        subtitle="Omnipresence That Converts."
        lede="Stop posting into the void. Our data-driven social media strategies create omnipresence across Facebook, Instagram, LinkedIn, and TikTok — turning followers into customers and engagement into revenue."
        ctaLabel="Get Your Social Media Strategy"
        ctaSubject="Social media — strategy request"
      />

      <section className="content-section">
        <BlockHead eyebrow="Why most social fails" title="Posting isn't a strategy" />
        <CardGrid
          columns={3}
          items={[
            { title: "Posting Without Purpose", desc: "Random content that doesn't align with business goals." },
            { title: "Vanity Metrics Focus", desc: "Chasing likes and followers instead of conversions." },
            { title: "Inconsistent Messaging", desc: "Brand voice that changes with every post." },
            { title: "No Clear Funnel", desc: "Social media that doesn't guide users to conversion." },
            { title: "Platform Misunderstanding", desc: "Same content across all platforms without optimisation." },
            { title: "Poor Targeting", desc: "Broad audiences that waste ad spend and dilute messaging." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Our approach" title="The Tiberius Social Media Approach" />
        <p className="lede" style={{ marginBottom: 24 }}>
          We don't just manage social media — we engineer social selling systems. Every post, every campaign, every
          interaction is designed to move prospects through your funnel.
        </p>
        <CardGrid
          columns={3}
          items={[
            { title: "Organic Social Management", desc: "Daily posting, community management, and engagement strategies." },
            { title: "Paid Social Campaigns", desc: "Targeted advertising across all major social platforms." },
            { title: "Content Creation", desc: "High-quality visuals, videos, and copy that stops the scroll." },
            { title: "Social Analytics", desc: "Performance tracking and optimisation based on real data." },
            { title: "Influencer Partnerships", desc: "Strategic collaborations with relevant influencers in your niche." },
            { title: "Community Building", desc: "Foster engaged communities that become loyal customers." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Process" title="Content That Converts" />
        <ProcessSteps
          steps={[
            { title: "Social Media Audit & Strategy", desc: "Analyse current performance, competitor landscape, and develop custom strategy." },
            { title: "Content Calendar & Planning", desc: "Comprehensive content calendar with platform-specific optimisation." },
            { title: "Content Creation & Design", desc: "High-quality visuals, videos, and copy that align with your brand." },
            { title: "Community Management", desc: "Active engagement, response management, and community building." },
            { title: "Paid Social Campaigns", desc: "Strategic advertising campaigns designed to amplify reach." },
            { title: "Analytics & Optimisation", desc: "Continuous monitoring, performance analysis, and strategy refinement." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Real results" title="Real Social Media Results" />
        <StatsRow
          stats={[
            { value: "+250%", label: "Avg engagement rate increase" },
            { value: "+180%", label: "Social media generated leads" },
            { value: "400%", label: "Avg ROAS on paid social campaigns" },
          ]}
        />
      </section>

      <CtaBand
        eyebrow="Ready to dominate social media?"
        title="Stop Posting Into the Void"
        lede="Get a comprehensive social media strategy that turns followers into customers and engagement into revenue."
        ctaLabel="Get Your Social Media Strategy"
        ctaSubject="Social media — strategy request"
      />
    </>
  );
}
