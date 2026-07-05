import type { Metadata } from "next";
import { PageHero, BlockHead, CardGrid, TwoColList, CtaBand } from "@/components/content/Primitives";

export const metadata: Metadata = {
  title: "AI Chatbots Auckland | Tiberius Digital",
  description: "Custom-built AI chatbots that think, sell and convert like your top salesperson — qualifying leads, booking appointments and closing sales 24/7.",
  alternates: { canonical: "https://www.tiberius.co.nz/services/ai-chatbots" },
};

export default function AiChatbotsPage() {
  return (
    <>
      <PageHero
        title="Automate Sales Support and Bookings 24/7"
        lede="Custom-built AI chatbots that think, sell and convert like your top salesperson. These aren't basic scripted bots — they're intelligent, brand-trained systems designed to qualify leads, book appointments and close sales while you sleep."
        ctaLabel="Get AI Chatbot Demo"
        ctaSubject="AI chatbots — demo request"
        secondaryLabel="View All Services"
        secondaryHref="/services"
      />

      <section className="content-section">
        <BlockHead eyebrow="What we build" title="Intelligent systems that act, book, qualify and convert" />
        <CardGrid
          columns={3}
          items={[
            { title: "AI Chatbots", desc: "Website and Messenger bots that engage visitors and convert them into leads." },
            { title: "Voice Assistants", desc: "Smart booking systems that handle calls and appointments automatically." },
            { title: "CRM Integration", desc: "Lead bots and sales flows integrated with your existing systems." },
            { title: "Brand Training", desc: "Custom dialogue systems trained on your unique brand voice." },
            { title: "FAQ Automation", desc: "Helpdesk automation that handles common questions instantly." },
            { title: "Mobile Engagement", desc: "WhatsApp and SMS bots for seamless mobile customer interactions." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="AI enhanced features" title="Why Bots Work" />
        <TwoColList
          left={{
            title: "Smart Conversation Flow",
            items: [
              "Sentiment and tone analysis for personalised responses",
              "Predictive flow branching based on user intent",
              "Lead scoring and qualification via AI models",
              "Voice to text support for hands-free interaction",
              "Heatmap clustering on bot engagement points",
            ],
          }}
          right={{
            title: "Why Bots Work",
            items: [
              "Reduce response times to seconds, not hours",
              "Increase lead qualification accuracy",
              "Handle objections instantly with smart responses",
              "Improve customer satisfaction with 24/7 availability",
              "Free up your team to close bigger deals",
            ],
          }}
        />
      </section>

      <section className="content-section narrow">
        <div className="prose">
          <h2>Seamless Integration</h2>
          <p>Our chatbots integrate with your existing CRM, email flows and sales funnel:</p>
          <ul>
            <li>HubSpot — Lead capture & nurturing</li>
            <li>Salesforce — CRM data sync</li>
            <li>Mailchimp — Email automation</li>
            <li>Calendly — Appointment booking</li>
          </ul>
        </div>
      </section>

      <CtaBand
        eyebrow="Ready to automate your sales?"
        title="Ready to Automate Your Sales?"
        lede="Get a custom AI chatbot demo and see how automation can transform your business."
        ctaLabel="Get AI Chatbot Demo"
        ctaSubject="AI chatbots — demo request"
      />
    </>
  );
}
