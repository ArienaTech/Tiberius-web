import type { Metadata } from "next";
import { PageHero, BlockHead, CardGrid, TwoColList, StatsRow, CtaBand, PersonCard } from "@/components/content/Primitives";
import { placeholderImg } from "@/lib/placeholder";

export const metadata: Metadata = {
  title: "About Us | Auckland Marketing Agency | Tiberius Digital",
  description:
    "Auckland's premier digital marketing agency. We deliver results-driven SEO, Google Ads, and web development for businesses that refuse to stay small.",
  alternates: { canonical: "https://www.tiberius.co.nz/about-us" },
};

export default function AboutUsPage() {
  return (
    <>
      <PageHero
        title="The Auckland Team Building Tiberius Digital"
        subtitle="The Agency Built to Burn the Old Model Down."
        lede="Precision Strategy. Real Growth. We build digital sales machines that convert cold clicks into hot buyers."
        ctaLabel="Book Your Free Strategy Call"
        ctaSubject="About us — book a strategy call"
      />

      <section className="content-section narrow">
        <div className="prose">
          <h2>The Rebellion: Why We Exist</h2>
          <p>
            Let&apos;s be real — most agencies are slow, overpriced, and allergic to accountability. They will sell
            you websites that don&apos;t rank, SEO that doesn&apos;t convert and campaigns that generate crickets
            instead of clients.
          </p>
          <p>Tiberius Digital was built to flip that model on its head.</p>
          <p>
            We are not a &ldquo;we&apos;ll get back to you next week&rdquo; type of team. We are the &ldquo;launch
            in 7 days, rank in 30, ROI in 90&rdquo; kind of team.
          </p>
          <p>We don&apos;t do fluff. We don&apos;t do excuses. We do growth. Fast. Measurable. Relentless.</p>

          <h2>The Legion: Who We Are</h2>
          <h3>Built by Battle Tested Closers, Not Creatives with Mood Boards.</h3>
          <p>We&apos;re not here to be your friend. We&apos;re here to be your weapon. We&apos;re here to make you money.</p>
          <p>
            After years in the agency world, watching clients overpay for pretty websites that didn&apos;t
            perform, we snapped.
          </p>
          <p>We knew business owners deserved better. So we left. And we started Tiberius Digital — to build the agency we wished existed.</p>
          <p>
            Since then, we have helped over 100+ brands across NZ, Australia and Oceania dominate their markets
            with sites and campaigns that actually drive conversions and sales, not just traffic.
          </p>

          <h2>Our Mission Is Simple</h2>
          <p>Help ambitious brands scale using proven digital strategies that convert cold clicks into hot buyers.</p>
          <p>We don&apos;t build websites. We build digital sales machines.</p>
          <p>We don&apos;t run ads. We create scalable lead pipelines.</p>
          <p>We don&apos;t rank for vanity keywords. We dominate buyer intent searches that move your bottom line.</p>
          <p>
            We are your growth enablers — with no excuses, no fluff, no hidden fees, battle tested strategy and ROI
            driven execution.
          </p>
        </div>
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Venture partner" title="Leadership & Venture Partners" />
        <div className="leader-card">
          <img
            className="person-photo"
            src={placeholderImg("Mālik Mbaye", 280, 280)}
            alt="Mālik Mbaye"
            width={280}
            height={280}
            loading="lazy"
          />
          <div>
            <b>Mālik Mbaye — Director of Growth &amp; Venture Partner</b>
            <p>Ex-Meta | $50M+ Raised | Black Lotus Ventures</p>
            <p>
              In collaboration with Black Lotus Ventures: Mālik Mbaye is a venture operator and product strategist
              with experience at Meta, Lyft and Upwork and early career experience across firms including Morgan
              Stanley and Accenture. Through Black Lotus Ventures, he has helped startups raise over $50M and
              launch 100+ products globally. As Director of Growth &amp; Venture Partner at Tiberius, he leads
              growth strategy and venture level execution to help founders scale from idea to market.
            </p>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-3)" }}>
              malik@tiberius.co.nz · hello@blacklotus.co
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <BlockHead eyebrow="The team" title="Meet Our Team" />
        <div className="person-grid">
          <PersonCard name="Nabi Tabarruk" role="Founder, Chief Executive — nabi@tiberius.co.nz" />
          <PersonCard name="Exavier Lattimore" role="Founder, Chief of Technology — exavier@tiberius.co.nz" />
          <PersonCard name="Alex Breich" role="Chief of Operations — hello@tiberius.co.nz" />
          <PersonCard name="Tom Howard" role="Director — support@tiberius.co.nz" />
        </div>
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Our arsenal" title="Our Arsenal Includes" />
        <CardGrid
          columns={3}
          items={[
            { title: "Website-as-a-Service (WaaS)", desc: "Launch fast. No upfront costs. SEO ready from day one." },
            { title: "SEO", desc: "Real rankings. Real leads. Real ROI." },
            { title: "Google & YouTube Ads", desc: "Target. Convert. Scale." },
            { title: "Social Media Marketing", desc: "Omnipresence that sells." },
            { title: "4K Video & Drone Content", desc: "Tell your story. Dominate your niche." },
            { title: "AI Automation & Chatbots", desc: "Automate sales. Book calls 24/7." },
            { title: "Analytics & GA4 Tracking", desc: "Know exactly where every dollar goes." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="The blueprint" title="Our Technology Stack" />
        <p className="lede" style={{ marginBottom: 24 }}>
          Everything we use is precision engineered to win battles in the digital arena. We run a tight ship —
          every pixel, every funnel, every keyword has a job: to generate more leads, clients, and profit.
        </p>
        <TwoColList
          left={{
            title: "Core Technologies",
            items: [
              "Web Framework: Next.js + React",
              "Tracking: Google Analytics 4, Tag Manager",
              "AI Platforms: Claude & Gemini",
              "Voice AI: Interactive Voice Systems",
            ],
          }}
          right={{
            title: "Creative Stack",
            items: ["Design Stack: Tailwind CSS + Adobe Creative Suite", "Video Stack: DaVinci Resolve + 4K Drone Capture"],
          }}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Real clients, real results" title="Real Clients. Real Results." />
        <p className="lede" style={{ marginBottom: 24 }}>
          We&apos;ve helped tradies 10X their leads. We&apos;ve scaled eCommerce stores from zero to consistent 5
          figure weeks. We&apos;ve helped consultants go from chasing clients… to closing them in their sleep.
        </p>
        <StatsRow
          stats={[
            { value: "+300%", label: "ROAS" },
            { value: "+44%", label: "SEO growth in 90 days" },
            { value: "92%", label: "Retention rate — results build loyalty" },
          ]}
        />
      </section>

      <section className="content-section narrow">
        <div className="prose">
          <h2>The March Forward: Are You Ready?</h2>
          <p>If you&apos;re tired of being outranked, outspent, and outperformed —</p>
          <p>If you&apos;re serious about scaling fast —</p>
          <p>If you want to dominate instead of survive —</p>
          <p>Then it&apos;s time we deployed a strategy that actually delivers.</p>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready to dominate your market?"
        title="This Is Your Empire. We're Just Here to Help You Conquer It."
        lede="Tiberius Digital — Precision Strategy. Real Growth."
        ctaLabel="Book Your Free Strategy Call"
        ctaSubject="About us — book a strategy call"
      />
    </>
  );
}
