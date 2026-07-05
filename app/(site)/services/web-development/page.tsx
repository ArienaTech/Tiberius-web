import type { Metadata } from "next";
import { PageHero, BlockHead, CardGrid, ProcessSteps, StatsRow, LinkBtn } from "@/components/content/Primitives";

export const metadata: Metadata = {
  title: "Web Development & Design Auckland | Tiberius Digital",
  description: "Custom websites built for speed, conversions, and growth. Modern tech stack, SEO-ready, and designed to turn visitors into customers.",
  alternates: { canonical: "https://www.tiberius.co.nz/services/web-development" },
};

export default function WebDevelopmentPage() {
  return (
    <>
      <PageHero
        title="Web Development & Design Auckland"
        lede="Custom websites built for speed, conversions, and growth. Modern tech stack, SEO-ready, and designed to turn visitors into customers."
        ctaLabel="Get Started"
        ctaSubject="Web development — get started"
      />

      <section className="content-section">
        <BlockHead eyebrow="What's included" title="Everything a modern website needs" />
        <CardGrid
          columns={3}
          items={[
            { title: "Custom Design", desc: "Unique, conversion-focused designs tailored to your brand. No templates, no shortcuts." },
            { title: "Modern Tech Stack", desc: "Built with React, Next.js, and TypeScript for blazing-fast performance and scalability." },
            { title: "SEO-Ready", desc: "Optimised for search engines from day one. Clean code, fast loading, mobile-first." },
            { title: "Content Management", desc: "Easy-to-use CMS so you can update content without touching code." },
            { title: "Responsive Design", desc: "Perfect on every device — mobile, tablet, and desktop." },
            { title: "Conversion Optimization", desc: "Strategic CTAs, forms, and user flows designed to maximise conversions." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Process" title="Our Process" />
        <ProcessSteps
          steps={[
            { title: "Discovery & Strategy", desc: "We understand your business goals, target audience, and competitive landscape." },
            { title: "Design & Prototyping", desc: "Custom designs with user experience at the forefront. You approve before we code." },
            { title: "Development", desc: "Clean, modern code built with best practices. Fast, secure, and scalable." },
            { title: "Testing & Launch", desc: "Rigorous testing across devices and browsers. Smooth launch with zero downtime." },
            { title: "Support & Growth", desc: "Ongoing maintenance, updates, and optimisation to keep your site performing." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Results" title="Results We've Driven" />
        <StatsRow
          stats={[
            { value: "3.2s", label: "Average page load time" },
            { value: "+277%", label: "Conversion rate increase" },
            { value: "100%", label: "Mobile responsive" },
          ]}
        />
      </section>

      <section className="content-section narrow">
        <div className="prose">
          <h2>Frequently Asked Questions</h2>
          <h3>How much does a custom website cost in Auckland?</h3>
          <p>
            Custom website development typically ranges from $5,000 for a basic business website to $50,000+ for
            complex e-commerce or web applications. We also offer Website-as-a-Service starting from $499/month
            with zero upfront costs.
          </p>
          <h3>How long does it take to build a website?</h3>
          <p>
            A typical business website takes 4–8 weeks from kickoff to launch. E-commerce sites take 8–12 weeks.
            Our Website-as-a-Service offering can launch in as little as 2 weeks.
          </p>
          <h3>What technology stack do you use?</h3>
          <p>
            We build modern websites using React, Next.js, TypeScript, and Tailwind CSS. All sites are hosted on
            fast, scalable infrastructure with automatic backups and SSL certificates.
          </p>
          <h3>Will my website be mobile-friendly and SEO-optimized?</h3>
          <p>
            Absolutely. Every website we build is fully responsive and built with SEO best practices from day
            one — proper structure, meta tags, schema markup, and fast loading times.
          </p>
          <h3>Can I update the website content myself?</h3>
          <p>
            Yes, we build all websites with user-friendly content management systems. You&apos;ll be able to
            update text, images, and blog posts without any coding knowledge.
          </p>
        </div>
      </section>

      <section className="content-section" style={{ textAlign: "center" }}>
        <h2 className="display" style={{ fontSize: "clamp(28px,4vw,48px)", marginBottom: 24 }}>
          Ready to Build Your Website?
        </h2>
        <p className="lede" style={{ margin: "0 auto 28px", textAlign: "center" }}>
          Get a free consultation and quote. Let&apos;s discuss your project and how we can help you grow online.
        </p>
        <LinkBtn href="/contact" label="Get Started" />
      </section>
    </>
  );
}
