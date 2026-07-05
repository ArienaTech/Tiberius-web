import type { Metadata } from "next";
import { PageHero, BlockHead, CardGrid, ProcessSteps, LinkBtn, CtaBand } from "@/components/content/Primitives";

export const metadata: Metadata = {
  title: "Website-as-a-Service (WaaS) | Tiberius Digital",
  description:
    "Launch a custom, SEO-optimized, conversion-focused website in 2 weeks with zero upfront investment. Plans from $499/month.",
  alternates: { canonical: "https://www.tiberius.co.nz/services/website-as-a-service" },
};

export default function WaasPage() {
  return (
    <>
      <PageHero
        title="Website-as-a-Service (WaaS)"
        subtitle="Launch Fast. Scale Hard. Zero Upfront Cost."
        lede="Stop waiting months for a website. Get a custom, SEO-optimized, conversion-focused website launched in 2 weeks with zero upfront investment. Pay monthly, own your domain, dominate your market."
        ctaLabel="Get Your Website in 2 Weeks"
        ctaSubject="WaaS — get my website in 2 weeks"
      />

      <section className="content-section">
        <BlockHead eyebrow="The old way" title="The Problem with Traditional Web Development" />
        <CardGrid
          columns={3}
          items={[
            { title: "Massive Upfront Costs", desc: "$10,000–$50,000+ before you see a single page." },
            { title: "Endless Timelines", desc: "3–6 months of back-and-forth before launch." },
            { title: "Hidden Costs", desc: "Hosting, maintenance, updates all cost extra." },
            { title: "No SEO Strategy", desc: "Beautiful sites that nobody can find." },
            { title: "Poor Performance", desc: "Slow loading sites that kill conversions." },
            { title: "Maintenance Nightmares", desc: "Break something? That'll be another $2,000." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Our approach" title="The Tiberius WaaS Solution" />
        <p className="lede" style={{ marginBottom: 24 }}>
          We flipped the model. Instead of massive upfront costs and endless delays, you get a subscription-based
          website service that launches fast, performs better, and costs less.
        </p>
        <CardGrid
          columns={3}
          items={[
            { title: "2-Week Launch", desc: "From concept to live website in two weeks. No delays, no excuses." },
            { title: "Zero Upfront Cost", desc: "No massive initial investment. Start with a monthly subscription." },
            { title: "SEO Ready", desc: "Built for search engines from day one with proper structure and optimisation." },
            { title: "Mobile First", desc: "Responsive design that works perfectly on all devices." },
            { title: "Secure & Fast", desc: "SSL certificates, CDN, and optimised performance included." },
            { title: "Ongoing Updates", desc: "Regular updates, maintenance, and improvements included." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="How it works" title="From concept to live in 2 weeks" />
        <ProcessSteps
          steps={[
            { phase: "Days 1–2", title: "Strategy Call", desc: "We discuss your business, goals, and requirements. No fluff, just focused planning.", count: "STEP 01" },
            { phase: "Days 3–9", title: "Design & Development", desc: "Our team builds your custom website using proven conversion frameworks and SEO best practices.", count: "STEP 02" },
            { phase: "Days 10–12", title: "Review & Refine", desc: "You review the site, we make final adjustments. One round of revisions included.", count: "STEP 03" },
            { phase: "Days 13–14", title: "Launch", desc: "Your website goes live with full analytics, tracking, and optimisation in place.", count: "STEP 04" },
          ]}
        />
      </section>

      <section className="content-section narrow">
        <div className="prose">
          <h2>What&apos;s Included in Every WaaS Package</h2>
          <ul>
            <li>Custom responsive design</li>
            <li>SEO optimisation & structure</li>
            <li>SSL certificate & security</li>
            <li>Fast hosting & CDN</li>
            <li>Regular backups</li>
            <li>Analytics integration</li>
            <li>Contact forms & lead capture</li>
            <li>Social media integration</li>
            <li>Monthly updates & maintenance</li>
            <li>Performance monitoring</li>
            <li>Technical support</li>
            <li>Content updates (up to 2 hours/month)</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Pricing" title="Choose Your WaaS Package" />
        <div className="pricing-grid">
          <div className="pricing-card">
            <h3>Launch</h3>
            <div className="price">
              $499<span>+GST/month</span>
            </div>
            <p>Perfect for small businesses and startups</p>
            <ul>
              <li>5-page custom website</li>
              <li>Mobile responsive design</li>
              <li>Basic SEO optimisation</li>
              <li>Contact form integration</li>
              <li>SSL certificate & hosting</li>
              <li>Monthly updates & maintenance</li>
            </ul>
          </div>
          <div className="pricing-card is-popular">
            <span className="pricing-badge">Most Popular</span>
            <h3>Grow</h3>
            <div className="price">
              $599<span>+GST/month</span>
            </div>
            <p>Ideal for growing businesses</p>
            <ul>
              <li>10-page custom website</li>
              <li>Advanced SEO optimisation</li>
              <li>Blog/news section</li>
              <li>Analytics integration</li>
              <li>Lead capture forms</li>
              <li>Social media integration</li>
              <li>Priority support</li>
            </ul>
          </div>
          <div className="pricing-card">
            <h3>Scale</h3>
            <div className="price">
              $899<span>+GST/month</span>
            </div>
            <p>For established businesses needing advanced features</p>
            <ul>
              <li>Unlimited pages</li>
              <li>E-commerce functionality</li>
              <li>Custom integrations</li>
              <li>Advanced analytics</li>
              <li>A/B testing setup</li>
              <li>Conversion optimisation</li>
              <li>Dedicated account manager</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Under the hood" title="Built with Modern Technology" />
        <CardGrid
          columns={2}
          items={[
            {
              title: "Frontend",
              desc: "Next.js & React for modern, fast websites. Tailwind CSS for responsive design. Optimised images and assets. Progressive Web App capabilities.",
            },
            {
              title: "Backend & Infrastructure",
              desc: "Cloud hosting with global CDN. SSL certificates and security headers. Automated backups and monitoring. Performance optimisation.",
            },
          ]}
        />
      </section>

      <section className="content-section narrow">
        <div className="prose">
          <h2>Common Questions</h2>
          <h3>What happens if I cancel my subscription?</h3>
          <p>
            You can cancel anytime with 30 days notice. You&apos;ll need to either purchase the website outright or
            migrate to your own hosting. We&apos;ll provide all necessary files.
          </p>
          <h3>Do I own my domain?</h3>
          <p>Yes, you own your domain completely. We can register it for you or you can use an existing domain.</p>
          <h3>Can I make changes to my website?</h3>
          <p>
            Yes, up to 2 hours of content updates are included monthly. Larger changes or redesigns may require
            upgrading your package.
          </p>
          <h3>Is SEO really included?</h3>
          <p>
            Absolutely. We build with SEO best practices from day one — proper structure, meta tags, schema markup,
            and optimisation for speed and mobile.
          </p>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready to launch in 2 weeks?"
        title="Ready to Launch Your Website in 2 Weeks?"
        lede="Stop waiting. Stop overpaying. Get a professional, conversion-optimized website that works for your business, not against it."
        ctaLabel="Start Your 2-Week Website"
        ctaSubject="WaaS — start my 2-week website"
      />
      <section className="content-section" style={{ textAlign: "center", paddingTop: 0 }}>
        <LinkBtn href="/faqs" label="View All FAQs" />
      </section>
    </>
  );
}
