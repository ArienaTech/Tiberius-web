import type { Metadata } from "next";
import { PageHero, BlockHead, CardGrid, ProcessSteps, StatsRow, CtaBand } from "@/components/content/Primitives";
import { t } from "@/lib/i18n";

export const metadata: Metadata = {
  title: "Agentic AI Services | Tiberius Digital",
  description: "We deploy OpenClaw AI agents directly onto your website to automate customer service, capture leads, and handle tasks 24/7.",
  alternates: { canonical: "https://www.tiberius.co.nz/services/agentic-ai" },
};

export default function AgenticAiPage() {
  return (
    <>
      <PageHero
        eyebrow="Agentic AI Services"
        title="AI Agents That Work For Your Business 24/7"
        lede="We deploy OpenClaw AI agents directly onto your website to automate customer service, capture leads, and handle tasks — so your team can focus on what matters most."
        ctaLabel="Book a Free AI Demo"
        ctaSubject="Agentic AI — book a free demo"
        secondaryLabel="View All Services"
        secondaryHref="/services"
      />

      <section className="content-section narrow">
        <div className="prose">
          <h2>What is Agentic AI?</h2>
          <p>{t("agenticaiPage.what_p1")}</p>
          <p>
            Powered by OpenClaw, our AI agents understand context, handle multi-step conversations, integrate with
            your existing tools, and continuously learn from every interaction.
          </p>
          <ul>
            <li>Understands natural language — not just keywords</li>
            <li>Takes real actions — books meetings, sends emails, updates CRMs</li>
            <li>Learns from every conversation to improve over time</li>
            <li>Escalates complex issues to your team automatically</li>
          </ul>
        </div>
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Agent capabilities" title="From customer service to lead generation" />
        <CardGrid
          columns={3}
          items={[
            { title: "Customer Support", desc: "Answer product questions, troubleshoot issues, and resolve complaints instantly — reducing support tickets by up to 80%." },
            { title: "Lead Qualification", desc: "Engage every visitor, ask qualifying questions, score leads, and route hot prospects to your sales team." },
            { title: "Appointment Booking", desc: "Integrate with your calendar to book meetings, send confirmations, and handle rescheduling — conversationally." },
            { title: "Follow-Up Automation", desc: "Automatically send follow-up emails, reminders, and nurture sequences based on conversation outcomes." },
            { title: "Data Collection", desc: "Gather customer insights, feedback, and preferences through natural conversation — no boring forms." },
            { title: "Voice & Multi-Channel", desc: "Deploy across your website, SMS, WhatsApp, and voice channels — consistent experience everywhere." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Setup to launch in as little as 2 weeks" title="Use Cases & Process" />
        <ProcessSteps
          steps={[
            { title: "Discovery & Strategy", desc: "We audit your current customer journey and design your AI agent's personality, knowledge base, and workflow integrations." },
            { title: "Custom Training", desc: "We train your OpenClaw agent on your products, services, pricing, FAQs, brand voice, and policies." },
            { title: "Integration & Testing", desc: "We connect your agent to your CRM, calendar, email systems and rigorously test every conversation flow." },
            { title: "Launch & Optimise", desc: "Your AI agent goes live. We monitor performance, analyse conversations, and continuously optimise for results." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Impact" title="The Impact of AI Agents" />
        <StatsRow
          stats={[
            { value: "80%", label: "Queries resolved without human intervention" },
            { value: "3x", label: "More leads captured vs traditional contact forms" },
            { value: "60%", label: "Reduction in customer service costs" },
            { value: "24/7", label: "Always available — no sick days, no holidays" },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Every industry" title="Perfect For Every Industry" />
        <CardGrid
          columns={3}
          items={[
            { title: "Real Estate", desc: "Qualify property enquiries, book viewings, and provide instant property information to potential buyers." },
            { title: "E-Commerce", desc: "Product recommendations, order tracking, returns handling, and upselling — all automated." },
            { title: "Professional Services", desc: "Consultancy intake, appointment scheduling, and client onboarding for law firms, accountants, and agencies." },
            { title: "Healthcare", desc: "Patient triage, appointment booking, prescription refill requests, and health FAQ automation." },
            { title: "Hospitality", desc: "Reservation management, guest enquiries, room service orders, and review collection." },
            { title: "SaaS & Tech", desc: "Onboarding assistance, feature explanations, bug reporting, and tier-based support routing." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Head to head" title="Traditional Chatbot vs Agentic AI" />
        <div className="compare-grid">
          <div className="compare-col is-old">
            <h4>Traditional Chatbots</h4>
            <ul>
              <li>Scripted responses — can&apos;t handle unexpected questions</li>
              <li>Keyword matching only — misses context</li>
              <li>Can&apos;t take real actions or integrate with tools</li>
              <li>Frustrates customers — feels robotic</li>
              <li>Static — never improves without manual updates</li>
            </ul>
          </div>
          <div className="compare-col is-new">
            <h4>Agentic AI (OpenClaw)</h4>
            <ul>
              <li>Natural conversation — handles any question intelligently</li>
              <li>Deep understanding of context and intent</li>
              <li>Books appointments, sends emails, updates CRMs</li>
              <li>Feels human — customers love interacting with it</li>
              <li>Self-improving — learns from every conversation</li>
            </ul>
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready to put AI to work?"
        title="Ready to Put AI to Work?"
        lede="Get a free demo of how an OpenClaw AI agent would work on your website. See real results before you commit."
        ctaLabel="Book Your Free AI Demo"
        ctaSubject="Agentic AI — book a free demo"
      />
    </>
  );
}
