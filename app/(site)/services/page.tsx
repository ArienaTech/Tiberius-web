import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, BlockHead, CardGrid, TwoColList, CtaBand } from "@/components/content/Primitives";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Tiberius Digital",
  description:
    "Tiberius Digital delivers precision engineered digital services designed to turn traffic into tangible business outcomes — WaaS, SEO, Google Ads, CRO, AI automation and more.",
  alternates: { canonical: "https://www.tiberius.co.nz/services" },
};

const stackServices: { title: string; tagline: string; desc: string; href?: string }[] = [
  {
    title: "Website-as-a-Service (WaaS)",
    tagline: "Launch fast. Scale hard. Zero upfront cost.",
    desc: "Custom websites with SEO ready build and conversion optimisation.",
    href: "/services/website-as-a-service",
  },
  {
    title: "Search Engine Optimisation (SEO)",
    tagline: "Rank #1. Dominate Google, AI Search & Voice.",
    desc: "Real rankings that drive leads and revenue.",
    href: "/services/seo",
  },
  {
    title: "Google & YouTube Ads",
    tagline: "Smarter ad spend. Greater returns.",
    desc: "Precision targeted campaigns that generate customers, not just clicks.",
    href: "/services/google-ads",
  },
  {
    title: "Social Media Marketing",
    tagline: "Build communities that buy.",
    desc: "Strategic social campaigns that turn followers into customers.",
    href: "/services/social-media-marketing",
  },
  {
    title: "Conversion Rate Optimisation (CRO)",
    tagline: "Turn clicks into clients.",
    desc: "Data-driven optimisation that transforms your website into a sales machine. Folded into every WaaS and web build we ship.",
  },
  {
    title: "AI Chatbots & Automation",
    tagline: "Automate sales, support and bookings 24/7.",
    desc: "Custom AI agents that think, sell and convert.",
    href: "/services/ai-chatbots",
  },
  {
    title: "Video & Drone Content",
    tagline: "Content that converts.",
    desc: "Professional video production and drone footage that tells your story.",
    href: "/services/video-marketing",
  },
  {
    title: "Analytics & Tracking",
    tagline: "Know exactly what's working.",
    desc: "Full-stack analytics that eliminate guesswork and drive decisions.",
    href: "/services/analytics-and-tracking",
  },
  {
    title: "Email Marketing",
    tagline: "Email that sells while you sleep.",
    desc: "Automated flows that nurture leads and drive conversions.",
    href: "/services/email-marketing",
  },
  {
    title: "Digital Strategy & Growth Consulting",
    tagline: "Strategy that wins before execution begins.",
    desc: "Custom growth plans backed by data, not guesswork.",
    href: "/services/digital-strategy",
  },
];

const allServiceLinks = [
  { title: "Website-as-a-Service", href: "/services/website-as-a-service" },
  { title: "Web Development", href: "/services/web-development" },
  { title: "SEO Services", href: "/services/seo" },
  { title: "Local SEO", href: "/services/seo/local-seo" },
  { title: "International SEO", href: "/services/seo/international-seo" },
  { title: "eCommerce SEO", href: "/services/seo/ecommerce-seo" },
  { title: "Technical SEO", href: "/services/seo/technical-seo" },
  { title: "SEO Audits", href: "/services/seo/seo-audits" },
  { title: "AI Search Optimization", href: "/services/seo/ai-search-optimization" },
  { title: "Google Ads Management", href: "/services/google-ads" },
  { title: "Social Media Marketing", href: "/services/social-media-marketing" },
  { title: "AI Chatbots", href: "/services/ai-chatbots" },
  { title: "Agentic AI", href: "/services/agentic-ai" },
  { title: "AI Marketing Automation", href: "/services/ai-automation" },
  { title: "Video & Drone Marketing", href: "/services/video-marketing" },
  { title: "Analytics & Tracking", href: "/services/analytics-and-tracking" },
  { title: "Email Marketing", href: "/services/email-marketing" },
  { title: "Digital Strategy", href: "/services/digital-strategy" },
  { title: "Marketing Strategy", href: "/services/marketing-strategy" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services — Auckland & NZ-wide"
        title="Digital Marketing Services Auckland"
        lede="Tiberius Digital delivers precision engineered digital services designed to do one thing — turn your traffic into tangible business outcomes. Whether you're a startup scaling fast or an enterprise refining your funnel, our approach remains the same: build for visibility, optimise for conversion, and scale with strategy. No bloated timelines. No generic campaigns. Every service we offer — from Website-as-a-Service to AI powered chatbots — is backed by proven performance frameworks and designed to get results fast."
        ctaLabel="Book a Free Strategy Session"
        ctaSubject="Free strategy session request"
      />

      <section className="content-section">
        <BlockHead eyebrow="What we run" title="Our Growth Stack" />
        <CardGrid
          columns={3}
          items={[
            { title: "Conversion-optimised websites", desc: "Zero upfront cost, built on Website-as-a-Service." },
            { title: "Full funnel SEO", desc: "On page, off page, technical and AI search." },
            { title: "Google & YouTube Ads", desc: "Managed for maximum ROAS." },
            { title: "Social campaigns", desc: "Facebook, Instagram, TikTok and LinkedIn." },
            { title: "CRO & funnel strategy", desc: "Layered with behavioural insights." },
            { title: "Analytics & tracking", desc: "Reporting that fuels every decision." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="How we operate" title="Built for Results" />
        <p className="lede">
          We don't guess. We test, analyse and scale what works. Using data from heatmaps, session replays, campaign
          dashboards and AI powered forecasts, we continuously improve your marketing stack to reduce cost per
          acquisition and grow customer lifetime value.
        </p>
        <p className="lede" style={{ marginTop: 16 }}>
          Every click is measured. Every step of the customer journey is optimised. From ad to landing page to
          checkout — our team ensures nothing leaks.
        </p>
      </section>

      <section className="content-section">
        <BlockHead eyebrow="AI Advantage" title="We don't just use AI — we integrate it" />
        <TwoColList
          left={{
            title: "Smart Systems",
            items: [
              "Smart bid algorithms and budget distribution models",
              "Predictive lead scoring and behaviour mapping",
              "Automated creative fatigue detection",
            ],
          }}
          right={{
            title: "Content Intelligence",
            items: ["Sentiment analysis for content tuning", "LLM-ready content architecture for voice and AI search"],
          }}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Who we work with" title="Built for ambitious operators" />
        <CardGrid
          columns={3}
          items={[
            { title: "High growth startups", desc: "That need speed, not red tape." },
            { title: "Established brands", desc: "Looking for better ROI across channels." },
            { title: "eCommerce businesses", desc: "Chasing scale and retention." },
            { title: "Coaches & consultants", desc: "Building evergreen info-product funnels." },
            { title: "B2B enterprises", desc: "Needing full stack lead gen and analytics." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Our full stack" title="Digital Services" />
        <div className="card-grid" style={{ ["--cols" as string]: 2 }}>
          {stackServices.map((s) => {
            const inner = (
              <>
                <b>{s.title}</b>
                <span className="page-subtitle" style={{ fontSize: 14, margin: 0 }}>
                  {s.tagline}
                </span>
                <p>{s.desc}</p>
              </>
            );
            return s.href ? (
              <Link className="card-cell" href={s.href} key={s.title} style={{ display: "flex" }}>
                {inner}
              </Link>
            ) : (
              <div className="card-cell" key={s.title}>
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      <section className="content-section narrow">
        <div className="prose">
          <h2>Why Tiberius</h2>
          <p>
            Because we don't just run ads or design pretty sites. We engineer digital ecosystems that are
            measurable, optimised and built to dominate your market.
          </p>
          <p>
            If your current agency is still sending you vague reports, guessing at what works, or telling you to
            &ldquo;wait and see,&rdquo; it&apos;s time for an upgrade. We make your digital infrastructure work
            harder, convert better and scale smarter.
          </p>
          <h2>AI Friendly</h2>
          <p>
            Every service page, ad funnel and SEO strategy is structured for modern AI algorithms — including
            schema markup, compressed load times, voice search readiness and NLP-friendly formatting. Don&apos;t
            just grow — grow with precision.
          </p>
        </div>
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Full directory" title="All Services" />
        <div className="two-col-list" style={{ gridTemplateColumns: "repeat(3,1fr)" }}>
          <div>
            <ul>
              {allServiceLinks.slice(0, 7).map((s) => (
                <li key={s.href}>
                  <Link href={s.href}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              {allServiceLinks.slice(7, 13).map((s) => (
                <li key={s.href}>
                  <Link href={s.href}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              {allServiceLinks.slice(13).map((s) => (
                <li key={s.href}>
                  <Link href={s.href}>{s.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready to scale your business?"
        title="Let's discuss how our services can help your business grow"
        lede="Fill out the form below and our team will be in touch within 24 hours."
        ctaLabel="Send Message"
        ctaSubject="Services enquiry — send message"
      />
    </>
  );
}
