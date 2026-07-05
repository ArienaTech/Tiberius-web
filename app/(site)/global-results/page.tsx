import type { Metadata } from "next";
import { PageHero, BlockHead, CardGrid, StatsRow, TwoColList, LinkBtn, MailtoBtn } from "@/components/content/Primitives";

export const metadata: Metadata = {
  title: "Global Results & Case Studies | Tiberius Digital × Black Lotus Ventures",
  description: "Global growth, venture-level execution. Tiberius Digital delivers high performance digital strategy, product execution and revenue systems worldwide.",
  alternates: { canonical: "https://www.tiberius.co.nz/global-results" },
};

const portfolio: { title: string; tags: string }[] = [
  { title: 'Building the Caribbean "Amazon" of Agro Commerce', tags: "Branding, UX Design" },
  { title: "Ex-Microsoft Founders Launch Social Media App to Raise $4M from Twitter Ventures", tags: "Branding, Development, Marketing, UX Design" },
  { title: "Designing a Ridesharing App with a Twist You Never Thought Of", tags: "Branding, Product Design" },
  { title: "Fintech Startup Designs Mobile App to Simplify Warranties and Insurance", tags: "Fintech, Product Design" },
  { title: "Launching a Product Marketing Campaign for $10M Automotive SAAS Startup", tags: "Branding, Marketing, Product Design" },
  { title: "Launching the Guyana Economic Development Trust", tags: "Development, Fintech, Product Design, UX Design" },
  { title: "Designing a Modern Social Media App for Book Lovers", tags: "Marketing, Product Design" },
  { title: "Branded E-commerce Website to Elevate the Luxury Shopping Experience", tags: "Development, Product Design" },
  { title: "Ex-Paypal Founders Launch Clean Energy Startup to Raise $20M Series A", tags: "Development, Fintech, Marketing, Product Design, UX Design" },
  { title: "Launching HR SAAS Startup to Raise Seed Funding from Google", tags: "Branding, UX Design" },
  { title: "Redesigning a Digital Payments App for International Launch", tags: "Fintech, Product Design" },
  { title: "Launching a $2.6M Influencer Marketplace App for NCAA Athletes", tags: "Development, Marketing, UX Design" },
  { title: "Ex-Google Founders Launch Ed-Tech App to Connect College Students to Mentors", tags: "Development, Ed-Tech, Marketing, Product Design, UX Design" },
  { title: "Ex-Lyft Founders Launch E-commerce Desktop App that Leverages AI", tags: "Branding, UX Design" },
  { title: "Designing a New Product Concept for L'Oréal Men", tags: "Marketing, Product Design" },
  { title: "Building a Video Hosting and Live-streaming Platform for NYC Non-Profit", tags: "Development, Product Design, UX Design" },
  { title: "Designing a Fitness Social Media App and Scaling to $20K MRR", tags: "Development, Product Design" },
  { title: "Designing a Mobile App with NFC Technology to Transform How People Network", tags: "Branding, Development, Product Design" },
  { title: "Building a Travel Marketplace to Connect Travelers to Unique Cultural Experiences", tags: "Product Design" },
  { title: "Designing a Faith Based Audio Meditation App Inspired by Calm and Headspace", tags: "Branding, Product Design" },
  { title: "Launching Caribbean e-Learning App and Scaling to $30k MRR", tags: "Ed-Tech, Product Design" },
  { title: "Launching New Website for the Top Fitness Coach in Washington, D.C", tags: "Branding, Development, UX Design" },
  { title: "Product Education Campaign that Drove 207% Increase in Engagement", tags: "Development, Marketing, Product Design" },
  { title: "Designing a Startup Marketing Website for Innovative Fintech Startup", tags: "Development, Fintech, Product Design" },
  { title: "Launching a Photography Studio from Scratch", tags: "Branding, UX Design" },
  { title: "Launching Jamaica's #1 Youth Nonprofit with Bold New Website", tags: "Development, UX Design" },
  { title: "Launching Asset Management Startup and Scaling Revenue to $3M", tags: "Branding, Development, Fintech" },
  { title: "Building an Online Magazine to Amplify Marginalized Voices", tags: "Development, Marketing, Product Design" },
  { title: "Designing a SAAS Marketing Website for Jamaican Ed-Tech Startup", tags: "Development, Ed-Tech, Marketing, UX Design" },
  { title: "Bespoke Trust Management Website Design that Drove Increased Conversions", tags: "Branding, Development, Fintech, Marketing" },
];

export default function GlobalResultsPage() {
  return (
    <>
      <section className="page-hero" style={{ paddingBottom: 0 }}>
        <span className="eyebrow">Tiberius Digital × Black Lotus Ventures — In Partnership</span>
      </section>
      <PageHero
        title="Global Growth. Venture-Level Execution."
        lede="We don't just build websites. We build companies that scale. From local market domination to venture-backed growth, Tiberius delivers high performance digital strategy, product execution and revenue systems designed to generate real results. Built for businesses that refuse to stay small."
        ctaLabel="Get Started Now"
        ctaSubject="Global results — get started"
      />

      <section className="content-section narrow">
        <div className="prose">
          <h2>From Local Results → Global Impact</h2>
          <p>
            We built our name dominating local markets across New Zealand, Australia and Oceania. Now
            we&apos;ve expanded. Through our collaboration with Black Lotus Ventures, we are executing across
            international startups, venture backed companies and enterprise organisations. Same execution. Bigger
            stage.
          </p>
        </div>
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Proven results at scale" title="This Is Not Theory. This Is Execution." />
        <StatsRow
          stats={[
            { value: "$50M+", label: "Raised by startups" },
            { value: "$10M+", label: "Revenue generated" },
            { value: "100+", label: "Products launched" },
            { value: "1B+", label: "Global reach achieved" },
          ]}
        />
        <div style={{ marginTop: 48 }}>
          <CardGrid
            columns={4}
            items={[
              { title: "No Excuses", desc: "We own the outcome. Every time." },
              { title: "No Fluff", desc: "Every dollar is justified by results." },
              { title: "No Hidden Fees", desc: "Complete transparency from day one." },
              { title: "Battle Tested", desc: "ROI driven across 100+ brands." },
            ]}
          />
        </div>
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Venture-level operators" title="Built with Venture-Level Operators" />
        <p className="lede" style={{ marginBottom: 24 }}>
          Through our partnership with Black Lotus Ventures, we combine product strategy with growth systems.
          Together, we don&apos;t just market companies. We build them, launch them and scale them.
        </p>
        <TwoColList
          left={{
            title: "Black Lotus Ventures",
            items: ["Product strategy", "Startup development", "Venture scaling", "Go-to-market execution"],
          }}
          right={{
            title: "Tiberius Digital",
            items: ["Growth systems", "SEO & paid acquisition", "Conversion optimisation", "Revenue generation"],
          }}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="The proof is in the pudding" title="We Craft Amazing Apps, Websites, and Campaigns" />
        <div className="card-grid" style={{ ["--cols" as string]: 3 }}>
          {portfolio.map((p) => (
            <div className="card-cell" key={p.title}>
              <b>{p.title}</b>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".05em", color: "var(--ink-3)", textTransform: "uppercase" }}>
                {p.tags}
              </p>
            </div>
          ))}
        </div>
        <p className="lede" style={{ marginTop: 32, fontSize: 13 }}>
          Full case studies for these projects live on{" "}
          <a href="https://blacklotus.co/portfolio" target="_blank" rel="noopener" style={{ color: "var(--brass)" }}>
            blacklotus.co/portfolio
          </a>
          .
        </p>
      </section>

      <section className="content-section" style={{ textAlign: "center" }}>
        <h2 className="display" style={{ fontSize: "clamp(28px,4vw,48px)", marginBottom: 18 }}>
          Ready to See the Same Results?
        </h2>
        <p className="lede" style={{ margin: "0 auto 12px", textAlign: "center" }}>
          Let&apos;s build something that actually works. We work with a select number of clients at any one time —
          if you&apos;re serious about growing your business online, we&apos;d love to hear from you.
        </p>
        <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap", marginTop: 24 }}>
          <LinkBtn href="/onboarding" label="Get Started Now" />
          <MailtoBtn subject="Global results — enquiry" label="Contact Us" to="support@tiberius.co.nz" />
        </div>
        <p style={{ marginTop: 40, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".18em", color: "var(--ink-3)", textTransform: "uppercase" }}>
          tiberius.digital · tiberius.co.nz · support@tiberius.co.nz
        </p>
        <p style={{ marginTop: 12, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".1em", color: "var(--ink-3)" }}>
          React / Next.js · Shopify Partner · WordPress · Technical SEO · Google Ads · LinkedIn Ads · AI Solutions
        </p>
      </section>
    </>
  );
}
