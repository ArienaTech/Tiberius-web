import type { Metadata } from "next";
import { PageHero, BlockHead, CardGrid, ProcessSteps, StatsRow, CtaBand } from "@/components/content/Primitives";

export const metadata: Metadata = {
  title: "Google Ads Management Auckland | Tiberius Digital",
  description:
    "Expert Google Ads management in Auckland. Lower CPC, higher conversions, and maximum ROI. Search, Display, Shopping, and YouTube ads managed by certified specialists.",
  alternates: { canonical: "https://www.tiberius.co.nz/services/google-ads" },
};

export default function GoogleAdsPage() {
  return (
    <>
      <PageHero
        title="Google Ads Management That Drives ROI"
        subtitle="Smarter Ad Spend. Greater Returns."
        lede="Stop burning money on ads that don't convert. Our precision-targeted Google and YouTube campaigns generate customers, not just clicks. Every dollar is tracked, every campaign is optimised, every result is measurable."
        ctaLabel="Get Your Free Ad Account Audit"
        ctaSubject="Google Ads — free account audit"
      />

      <section className="content-section">
        <BlockHead eyebrow="Why most Google Ads fail" title="Spray and pray doesn't work" />
        <CardGrid
          columns={3}
          items={[
            { title: "Spray and Pray Targeting", desc: "Broad targeting that wastes budget on unqualified clicks." },
            { title: "Poor Landing Page Match", desc: "Ads that don't align with landing page content and offers." },
            { title: "No Conversion Tracking", desc: "Can't measure what matters — actual sales and leads." },
            { title: "Set and Forget Mentality", desc: "No ongoing optimisation or performance monitoring." },
            { title: "Generic Ad Copy", desc: "Boring ads that don't stand out or compel action." },
            { title: "Budget Mismanagement", desc: "Overspending on low-performing keywords and audiences." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Our approach" title="The Tiberius Ads Approach" />
        <p className="lede" style={{ marginBottom: 24 }}>
          We don't just run ads — we engineer customer acquisition systems. Every campaign is built for maximum
          ROAS with precision targeting, compelling creative, and relentless optimisation.
        </p>
        <CardGrid
          columns={3}
          items={[
            { title: "Precision Targeting", desc: "Reach the right customers at the exact moment they're ready to buy." },
            { title: "Data-Driven Optimisation", desc: "Every campaign decision backed by performance data and testing." },
            { title: "ROAS Focused", desc: "We optimise for return on ad spend, not just clicks or impressions." },
            { title: "Continuous Improvement", desc: "Daily monitoring and weekly optimisations to maximise performance." },
            { title: "Scalable Growth", desc: "Start small, scale fast — we grow your ad spend as performance improves." },
            { title: "Transparent Reporting", desc: "Real-time dashboards showing exactly where every dollar goes." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Our Google Ads services" title="Every channel, managed" />
        <CardGrid
          columns={3}
          items={[
            { title: "Google Search Ads", desc: "Target high-intent keywords when customers are actively searching." },
            { title: "Google Shopping Ads", desc: "Showcase products directly in search results with images and prices." },
            { title: "YouTube Advertising", desc: "Video ads that build brand awareness and drive conversions." },
            { title: "Display Advertising", desc: "Visual ads across Google's network for awareness and retargeting." },
            { title: "Local Service Ads", desc: "Dominate local searches for service-based businesses." },
            { title: "Performance Max", desc: "AI-powered campaigns across all Google channels simultaneously." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Process" title="Our Proven Ad Management Process" />
        <ProcessSteps
          steps={[
            { title: "Account Audit & Strategy", desc: "Deep dive into current performance, competitor analysis, and custom strategy." },
            { title: "Keyword Research & Targeting", desc: "Identify high-intent keywords and audience segments that convert." },
            { title: "Campaign Setup & Tracking", desc: "Build campaigns with proper structure, conversion tracking, and monitoring." },
            { title: "Creative Development", desc: "Compelling ad copy and visuals that stop the scroll and drive action." },
            { title: "Launch & Monitor", desc: "Careful campaign launch with daily monitoring and immediate optimisations." },
            { title: "Optimise & Scale", desc: "Continuous testing and optimisation to scale successful campaigns." },
          ]}
        />
      </section>

      <section className="content-section narrow">
        <div className="prose">
          <h2>What&apos;s Included in Our Ad Management</h2>
          <ul>
            <li>Complete account setup and structure</li>
            <li>Keyword research and competitor analysis</li>
            <li>Ad copy creation and A/B testing</li>
            <li>Landing page optimisation recommendations</li>
            <li>Conversion tracking setup</li>
            <li>Audience targeting and remarketing</li>
            <li>Daily campaign monitoring</li>
            <li>Weekly optimisation and adjustments</li>
            <li>Monthly performance reports</li>
            <li>Real-time dashboard access</li>
            <li>Strategic consultation calls</li>
            <li>Dedicated account manager</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Real results" title="Real Google Ads Results" />
        <StatsRow
          stats={[
            { value: "300–500%", label: "Avg ROAS within 90 days" },
            { value: "-40%", label: "Avg cost per acquisition reduction" },
            { value: "2 Weeks", label: "To see initial performance improvements" },
          ]}
        />
      </section>

      <section className="content-section narrow">
        <div className="prose">
          <h2>Investment & Pricing</h2>
          <p>
            <strong>Management Fee:</strong> 15% of ad spend (minimum $1,500/month) — complete campaign management,
            daily monitoring and optimisation, monthly strategy calls, performance reporting.
          </p>
          <p>
            <strong>Setup Fee:</strong> $2,500 one-time (waived for 6+ month contracts) — account audit and
            strategy, campaign setup and structure, conversion tracking implementation, initial creative
            development.
          </p>
          <p>
            <strong>Minimum Ad Spend:</strong> $2,000/month to ensure sufficient data for optimisation.
          </p>
          <p>We only succeed when you succeed. Our fee structure aligns our interests with your growth.</p>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready to scale your ad performance?"
        title="Stop Wasting Money on Ads That Don't Convert"
        lede="Get a free audit of your current campaigns and see exactly how we can improve your ROAS."
        ctaLabel="Get Your Free Ad Audit"
        ctaSubject="Google Ads — free ad audit"
      />
    </>
  );
}
