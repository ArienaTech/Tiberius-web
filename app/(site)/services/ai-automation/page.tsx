import type { Metadata } from "next";
import { PageHero, BlockHead, CardGrid, ProcessSteps, StatsRow, LinkBtn } from "@/components/content/Primitives";

export const metadata: Metadata = {
  title: "AI Marketing Automation NZ | Tiberius Digital",
  description: "Automate repetitive tasks, qualify leads instantly, and scale your marketing with AI-powered automation.",
  alternates: { canonical: "https://www.tiberius.co.nz/services/ai-automation" },
};

export default function AiAutomationPage() {
  return (
    <>
      <PageHero
        title="AI Marketing Automation NZ"
        lede="Automate repetitive tasks, qualify leads instantly, and scale your marketing with AI-powered automation."
        ctaLabel="Get Started"
        ctaSubject="AI automation — get started"
      />

      <section className="content-section">
        <BlockHead eyebrow="What we automate" title="What We Automate" />
        <CardGrid
          columns={3}
          items={[
            { title: "AI Chatbots", desc: "24/7 customer support, lead qualification, and appointment booking powered by AI." },
            { title: "Email Automation", desc: "Personalised email sequences triggered by customer behaviour and lifecycle stage." },
            { title: "Lead Scoring", desc: "Automatically prioritise and route leads based on engagement and fit." },
            { title: "Social Media", desc: "Automated posting, response management, and engagement tracking." },
            { title: "CRM Integration", desc: "Sync data across platforms, eliminate manual entry, keep records current." },
            { title: "Reporting", desc: "Automated dashboards and reports delivered to your inbox on schedule." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Process" title="Our Process" />
        <ProcessSteps
          steps={[
            { title: "Workflow Audit", desc: "We map your current processes and identify automation opportunities." },
            { title: "Strategy & Design", desc: "Custom automation strategy aligned with your business goals." },
            { title: "Implementation", desc: "Build, test, and deploy automation workflows with your team." },
            { title: "Training & Handover", desc: "Comprehensive training so your team can manage and optimise." },
            { title: "Ongoing Optimization", desc: "Continuous monitoring and improvements to maximise ROI." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Results" title="Results We Drive" />
        <StatsRow
          stats={[
            { value: "40%", label: "Time saved on repetitive tasks" },
            { value: "3x", label: "Faster lead response time" },
            { value: "24/7", label: "Customer support availability" },
          ]}
        />
      </section>

      <section className="content-section narrow">
        <div className="prose">
          <h2>Frequently Asked Questions</h2>
          <h3>What is AI marketing automation?</h3>
          <p>
            AI marketing automation uses artificial intelligence to automate repetitive marketing tasks like email
            campaigns, lead scoring, and personalised messaging.
          </p>
          <h3>How much does AI automation cost?</h3>
          <p>
            Projects typically start from $3,000 for basic chatbot implementation to $20,000+ for comprehensive
            systems. Monthly costs range from $200–$1,000.
          </p>
          <h3>What can be automated with AI?</h3>
          <p>
            Customer support chatbots, email campaigns, lead qualification, social media posting, appointment
            scheduling, data entry, and report generation.
          </p>
          <h3>Will AI automation replace my team?</h3>
          <p>No, AI automation augments your team by handling repetitive tasks so they can focus on high-value activities.</p>
        </div>
      </section>

      <section className="content-section" style={{ textAlign: "center" }}>
        <h2 className="display" style={{ fontSize: "clamp(28px,4vw,48px)", marginBottom: 24 }}>
          Ready to Automate Your Marketing?
        </h2>
        <p className="lede" style={{ margin: "0 auto 28px", textAlign: "center" }}>
          Get a free automation audit and discover how AI can save your team 10+ hours per week.
        </p>
        <LinkBtn href="/contact" label="Get Started" />
      </section>
    </>
  );
}
