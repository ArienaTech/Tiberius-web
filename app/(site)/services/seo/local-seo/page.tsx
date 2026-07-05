import type { Metadata } from "next";
import { PageHero, BlockHead, CardGrid, TwoColList, ProcessSteps, CtaBand } from "@/components/content/Primitives";

export const metadata: Metadata = {
  title: "Local SEO Services Auckland | Tiberius Digital",
  description: "We specialize in helping businesses dominate their local search results — Google Maps, local directories and mobile search.",
  alternates: { canonical: "https://www.tiberius.co.nz/services/seo/local-seo" },
};

export default function LocalSeoPage() {
  return (
    <>
      <PageHero
        title="Rule Your Local Market With Smart SEO"
        lede="We specialize in helping businesses dominate their local search results. Show up where it matters — on Google Maps, local directories and mobile search to turn nearby searches into real customers."
        ctaLabel="Get Local SEO Strategy"
        ctaSubject="Local SEO — strategy request"
        secondaryLabel="View All SEO Services"
        secondaryHref="/services/seo"
      />

      <section className="content-section">
        <BlockHead eyebrow="What's included" title="Tailored to your community presence" />
        <CardGrid
          columns={3}
          items={[
            { title: "Google Business Profile", desc: "Complete setup and optimisation for maximum local visibility." },
            { title: "Local Keywords", desc: "Research and geo-targeted content optimisation." },
            { title: "Directory Listings", desc: "Citation management across all major directories." },
            { title: "Reputation Strategy", desc: "Review management and reputation building." },
            { title: "Schema Markup", desc: "Location-based indexing for enhanced visibility." },
            { title: "Performance Tracking", desc: "Monthly reports with rankings and lead volumes." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="AI-ready enhancements" title="Show up in voice and AI-assisted recommendations" />
        <TwoColList
          left={{
            title: "Smart Features",
            items: [
              "Location-based schema implementation",
              "Proximity signal triggers",
              "Voice search Q&A formatting for Google Assistant, Siri and Alexa",
              "AI-generated local content blocks",
            ],
          }}
          right={{
            title: "Perfect For",
            items: [
              "Trades & Services (Plumbers, electricians, home services)",
              "Local Businesses (Restaurants, gyms, cafes)",
              "Healthcare (Clinics, dental practices)",
              "Real Estate (Agents, property managers)",
            ],
          }}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="The advantage" title="One of the most cost-effective marketing strategies" />
        <CardGrid
          columns={3}
          items={[
            { title: "High Intent Traffic", desc: "When someone in your area searches for your service, they're often ready to book, visit or call." },
            { title: "Local Authority", desc: "Build your presence into a local authority through strategic listings and targeted content." },
            { title: "Measurable Results", desc: "More walk-ins, more service calls, and more repeat business from your local market." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Process" title="Our Process" />
        <ProcessSteps
          steps={[
            { title: "Audit", desc: "Current visibility analysis and competitor research." },
            { title: "Optimize", desc: "NAP consistency, landing pages, and keyword density." },
            { title: "Build", desc: "Citations, reviews, and local content creation." },
            { title: "Track", desc: "Monthly reporting and continuous refinement." },
          ]}
        />
      </section>

      <CtaBand
        eyebrow="Let's put you on the map"
        title="Ready to Become the Top-Ranked Business in Your Area?"
        ctaLabel="Get Local SEO Strategy"
        ctaSubject="Local SEO — strategy request"
      />
    </>
  );
}
