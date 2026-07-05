import type { Metadata } from "next";
import { PageHero, BlockHead, CardGrid, TwoColList, ProcessSteps, CtaBand } from "@/components/content/Primitives";

export const metadata: Metadata = {
  title: "eCommerce SEO Services | Tiberius Digital",
  description: "Our eCommerce SEO services scale traffic, boost conversion rates and build lasting brand authority.",
  alternates: { canonical: "https://www.tiberius.co.nz/services/seo/ecommerce-seo" },
};

export default function EcommerceSeoPage() {
  return (
    <>
      <PageHero
        title="Turn Product Views Into Purchases With eCommerce SEO"
        lede="Getting your online store to rank is only part of the battle. The real goal? Turning those rankings into revenue. Our eCommerce SEO services scale traffic, boost conversion rates and build lasting brand authority."
        ctaLabel="Get eCommerce SEO Audit"
        ctaSubject="eCommerce SEO — audit request"
        secondaryLabel="View All SEO Services"
        secondaryHref="/services/seo"
      />

      <section className="content-section">
        <BlockHead eyebrow="Services include" title="Optimised for how search engines and shoppers behave" />
        <CardGrid
          columns={3}
          items={[
            { title: "Product Optimization", desc: "Title, meta and URL optimisation for maximum visibility." },
            { title: "Technical SEO", desc: "Crawl/index control and site structure optimisation." },
            { title: "Category SEO", desc: "Collection and category level optimisation." },
            { title: "Schema Markup", desc: "Reviews, pricing and availability rich snippets." },
            { title: "Mobile & Speed", desc: "UX and mobile speed enhancements." },
            { title: "Performance Audit", desc: "Deep audit to identify structural inefficiencies." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="AI-enhanced features" title="Built for traditional search and AI-powered discovery" />
        <TwoColList
          left={{
            title: "Smart Optimization",
            items: [
              "Dynamic product descriptions powered by LLMs",
              "Smart internal linking to drive crawl efficiency",
              "Automated detection of thin content and duplicate issues",
              "Voice search optimisation for product queries",
              "Image alt tagging and structured data enrichment",
            ],
          }}
          right={{
            title: "Perfect For",
            items: [
              "Shopify, WooCommerce & Magento (platform-specific strategies)",
              "DTC Brands scaling nationally or globally",
              "Online Retailers looking to reduce ad spend dependency",
            ],
          }}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Why it matters" title="SEO builds long-term, repeatable growth" />
        <CardGrid
          columns={3}
          items={[
            { title: "24/7 Discovery", desc: "Your products get discovered even while you sleep with strong search visibility." },
            { title: "Sustainable Growth", desc: "Scale sustainably without relying solely on paid advertising." },
            { title: "Higher Margins", desc: "More traffic, better brand exposure and higher profit margins." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Process" title="From deep audit to conversion optimisation" />
        <ProcessSteps
          steps={[
            { title: "Deep Audit", desc: "Identify structural inefficiencies and content gaps." },
            { title: "Optimize", desc: "Product pages, categories, and technical infrastructure." },
            { title: "Enhance", desc: "Schema markup and rich snippets implementation." },
            { title: "Monitor", desc: "Continuous optimisation and performance tracking." },
          ]}
        />
      </section>

      <section className="content-section narrow">
        <div className="prose">
          <h2>Proven Results</h2>
          <p>
            Our clients include fashion brands, tech retailers, food and beverage companies, and niche product
            stores — all achieving better rankings and increased conversions.
          </p>
          <ul>
            <li>Monthly reports with keyword movement and traffic by product line</li>
            <li>A/B tests and heatmaps for continuous optimisation</li>
            <li>Page performance and conversion rate tracking</li>
            <li>Long-tail keyword targeting for better conversions</li>
          </ul>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready to grow your online store?"
        title="Ready To Grow Your Online Store?"
        lede="Let's turn product views into real purchases with strategic eCommerce SEO."
        ctaLabel="Get eCommerce SEO Audit"
        ctaSubject="eCommerce SEO — audit request"
      />
    </>
  );
}
