import type { Metadata } from "next";
import { PageHero, LinkBtn, MailtoBtn } from "@/components/content/Primitives";

export const metadata: Metadata = {
  title: "FAQs | Frequently Asked Questions | Tiberius Digital",
  description: "Got questions? We've got answers. Everything about our services, pricing, process and results.",
  alternates: { canonical: "https://www.tiberius.co.nz/faqs" },
};

const categories: { title: string; items: { q: string; a: string }[] }[] = [
  {
    title: "General Services",
    items: [
      {
        q: "What makes Tiberius Digital different from other agencies?",
        a: "We're growth engineers, not a \"wait and see\" agency. Every service — website, SEO, ads, AI automation — is built as one connected growth system with transparent monthly reporting, no bloated timelines and no generic campaigns.",
      },
      {
        q: "Do you work with businesses outside New Zealand?",
        a: "Yes. We're based in Auckland with a second office in London, Ontario, Canada, and — through our partnership with Black Lotus Ventures — we work with venture-backed startups and enterprise organisations internationally.",
      },
      {
        q: "What size businesses do you typically work with?",
        a: "Everything from local trades and startups to scaling eCommerce brands, SaaS companies and enterprise organisations. If you sell something worth finding, we can make you findable.",
      },
      {
        q: "How quickly can you start working on my project?",
        a: "Most engagements start with a strategy call within days of enquiry. WaaS websites can be live in as little as 2 weeks, and Google Ads accounts are typically restructured within the first two weeks of onboarding.",
      },
    ],
  },
  {
    title: "Website-as-a-Service (WaaS)",
    items: [
      {
        q: "What is Website-as-a-Service and how does it work?",
        a: "WaaS is a subscription-based website service — a custom, SEO-ready, conversion-focused website with zero upfront cost. You pay monthly instead of a large upfront build fee, and hosting, maintenance and updates are included.",
      },
      {
        q: "How long does it take to launch a WaaS website?",
        a: "As little as 2 weeks from your strategy call to a live, fully optimised website.",
      },
      {
        q: "What's included in the monthly WaaS fee?",
        a: "Custom responsive design, SEO optimisation, SSL and security, fast hosting and CDN, backups, analytics integration, lead capture forms, social integration, monthly maintenance, performance monitoring, technical support and up to 2 hours of content updates.",
      },
      {
        q: "Can I cancel my WaaS subscription anytime?",
        a: "Yes, with 30 days notice. You can then purchase the website outright or migrate to your own hosting — we provide all necessary files.",
      },
    ],
  },
  {
    title: "SEO Services",
    items: [
      {
        q: "How long does SEO take to show results?",
        a: "Most clients see initial ranking improvements within 30 days, with meaningful movement in 3–6 months. Our average client sees 44% organic growth in 90 days.",
      },
      {
        q: "Do you guarantee first page rankings?",
        a: "No. Nobody can honestly guarantee rankings — search algorithms change constantly and we don't make ranking or ROAS guarantees. That said, 85% of our clients see page 1 rankings within 6 months.",
      },
      {
        q: "What's included in your SEO services?",
        a: "A comprehensive audit, keyword research and strategy, technical optimisation, content strategy and creation, link building, and ongoing monitoring — plus specialised local, international, eCommerce, technical and AI search optimisation.",
      },
      {
        q: "Do you work with eCommerce SEO?",
        a: "Yes — product and category optimisation, technical SEO for Shopify, WooCommerce and Magento stores, and schema for reviews, pricing and availability.",
      },
    ],
  },
  {
    title: "Google & YouTube Ads",
    items: [
      {
        q: "What's your approach to Google Ads management?",
        a: "We engineer customer acquisition systems, not just campaigns — precision targeting, conversion tracking, compelling creative and daily monitoring, optimised for ROAS rather than clicks or impressions.",
      },
      {
        q: "What kind of ROAS can I expect?",
        a: "Clients typically see 300–500% average ROAS within 90 days, alongside a 40% average reduction in cost per acquisition.",
      },
      {
        q: "Do you manage YouTube advertising?",
        a: "Yes, YouTube advertising is one of our core Google Ads services alongside Search, Shopping, Display, Local Service Ads and Performance Max.",
      },
      {
        q: "What's your minimum ad spend requirement?",
        a: "We recommend a minimum of $2,000/month in ad spend to gather sufficient data for optimisation, with a management fee of 15% of spend (minimum $1,500/month).",
      },
    ],
  },
  {
    title: "Social Media Marketing",
    items: [
      {
        q: "Which social media platforms do you manage?",
        a: "Facebook, Instagram, LinkedIn and TikTok — with organic management, paid campaigns and content creation across all four.",
      },
      {
        q: "Do you create content or just manage ads?",
        a: "Both. We handle organic posting and community management, paid social campaigns, and all content creation — visuals, video and copy.",
      },
      {
        q: "How do you measure social media ROI?",
        a: "Through social analytics tied to your broader tracking stack — engagement rate, leads generated and ROAS on paid campaigns, reported monthly.",
      },
    ],
  },
  {
    title: "AI & Automation",
    items: [
      {
        q: "What can AI chatbots do for my business?",
        a: "They qualify leads, answer product and service questions, book appointments, integrate with your CRM and calendar, and hand off complex issues to your team — all 24/7.",
      },
      {
        q: "How 'smart' are your AI chatbots?",
        a: "Our standard chatbots use sentiment analysis, predictive flow branching and lead scoring. For more advanced needs, our Agentic AI (OpenClaw) agents go further — handling multi-step conversations and taking real actions, not just scripted replies.",
      },
      {
        q: "Can AI chatbots integrate with my existing CRM?",
        a: "Yes — we integrate with HubSpot, Salesforce, Mailchimp, Calendly and most major CRM and scheduling platforms.",
      },
    ],
  },
  {
    title: "Analytics & Tracking",
    items: [
      {
        q: "What analytics platforms do you use?",
        a: "GA4 and Google Tag Manager as standard, with custom Looker Studio dashboards for real-time reporting.",
      },
      {
        q: "How often do you report on performance?",
        a: "Monthly, in plain English — leads generated, cost per lead, rankings moved and revenue attributed, with live dashboard access in between.",
      },
      {
        q: "Do you help with conversion tracking setup?",
        a: "Yes — cross-platform conversion tracking, enhanced eCommerce tracking and first-party data collection are part of every analytics engagement.",
      },
    ],
  },
  {
    title: "Pricing & Contracts",
    items: [
      {
        q: "How do you structure your pricing?",
        a: "It depends on the service — WaaS runs on a monthly subscription from $499/month, Google Ads is a 15% management fee on spend, and SEO, strategy and other services are quoted as retainers based on your audit. Every quote starts with a free audit so it's based on your numbers, not a rate card.",
      },
      {
        q: "Do you require long-term contracts?",
        a: "No lock-in contracts on most services. Standard engagements run month to month; a 6+ month term simply waives our one-time Google Ads setup fee.",
      },
      {
        q: "Are there any setup fees?",
        a: "Only where noted — Google Ads carries a one-time $2,500 setup fee (waived on 6+ month contracts). WaaS and most other services have zero upfront cost.",
      },
      {
        q: "Do you offer payment plans?",
        a: "Yes. Project-based work is typically 50% deposit and 50% on completion, and retainers (SEO, ads, WaaS) are billed monthly in advance.",
      },
    ],
  },
  {
    title: "Results & Expectations",
    items: [
      {
        q: "What kind of results should I expect in the first 90 days?",
        a: "It varies by service, but clients typically see initial SEO ranking movement, a fully rebuilt and optimised ad account, or a live WaaS website within that window — with our average client seeing 44% organic growth and 300%+ ROAS in that period.",
      },
      {
        q: "How do you handle underperforming campaigns?",
        a: "We monitor and report monthly, and if a channel isn't justifying its spend, we tell you first and rework the strategy — not wait for a renewal conversation.",
      },
      {
        q: "What happens if I'm not satisfied with the results?",
        a: "All work carries a 30-day warranty period, and month-to-month engagements can be ended with 30 days notice — we don't lock you into a channel that isn't working for you.",
      },
    ],
  },
  {
    title: "Technical Questions",
    items: [
      {
        q: "What technologies do you use for website development?",
        a: "React, Next.js, TypeScript and Tailwind CSS, hosted on fast, scalable infrastructure with automatic backups and SSL.",
      },
      {
        q: "Are your websites mobile-optimized?",
        a: "Yes — every site we build is fully responsive and tested across devices, with mobile-first indexing compliance baked in.",
      },
      {
        q: "Do you handle website security and backups?",
        a: "Yes — SSL certificates, security headers, automated backups and performance monitoring are included on every website we manage.",
      },
      {
        q: "Can you work with my existing website?",
        a: "Often, yes — we can run an SEO or technical audit on your current site and optimise it directly, or migrate you onto a new WaaS build if a rebuild makes more sense.",
      },
    ],
  },
];

export default function FaqsPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        lede="Got questions? We've got answers. If you don't find what you're looking for, reach out and we'll get back to you within 24 hours."
        ctaLabel="Contact Us"
        ctaSubject="FAQs — I have a question"
      />

      <section className="content-section narrow">
        {categories.map((cat) => (
          <div className="faq-category" key={cat.title}>
            <h3>{cat.title}</h3>
            {cat.items.map((item) => (
              <details className="faq-details" key={item.q}>
                <summary>{item.q}</summary>
                <div className="faq-details-a">
                  <p>{item.a}</p>
                </div>
              </details>
            ))}
          </div>
        ))}
      </section>

      <section className="content-section" style={{ textAlign: "center" }}>
        <h2 className="display" style={{ fontSize: "clamp(28px,4vw,48px)", marginBottom: 18 }}>
          Still Have Questions?
        </h2>
        <p className="lede" style={{ margin: "0 auto 28px", textAlign: "center" }}>
          Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
        </p>
        <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
          <MailtoBtn subject="FAQs — I have a question" label="Contact Us" />
          <LinkBtn href="/services" label="View All Services" />
        </div>
      </section>
    </>
  );
}
