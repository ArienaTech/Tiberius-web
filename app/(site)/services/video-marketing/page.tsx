import type { Metadata } from "next";
import { PageHero, BlockHead, CardGrid, TwoColList, ProcessSteps, CtaBand } from "@/components/content/Primitives";

export const metadata: Metadata = {
  title: "Video & Drone Marketing Auckland | Tiberius Digital",
  description: "Video content built to win attention, build trust and drive conversions — from 4K drone flyovers to YouTube ad creatives.",
  alternates: { canonical: "https://www.tiberius.co.nz/services/video-marketing" },
};

export default function VideoMarketingPage() {
  return (
    <>
      <PageHero
        title="Tell Your Story. Build Your Brand. Convert With Confidence."
        lede="We craft video content that does more than just look good — it performs. Our videos are built to win attention, build trust and drive conversions across every digital touchpoint."
        ctaLabel="Get Video Strategy"
        ctaSubject="Video marketing — strategy request"
        secondaryLabel="View All Services"
        secondaryHref="/services"
      />

      <section className="content-section">
        <BlockHead eyebrow="What we create" title="Content We Create" />
        <CardGrid
          columns={3}
          items={[
            { title: "4K Drone Flyovers", desc: "Cinematic aerial footage that showcases your business from stunning perspectives." },
            { title: "Short Form Reels", desc: "Vertical content optimised for Instagram, TikTok and Facebook engagement." },
            { title: "Brand Story Videos", desc: "Compelling testimonials and brand narratives that build trust and credibility." },
            { title: "Animated Explainers", desc: "How-to tutorials and service overviews that educate and convert." },
            { title: "YouTube Ad Creatives", desc: "High-converting ad content and intro videos designed for maximum impact." },
            { title: "Product Showcases", desc: "Service overviews and product demonstrations that drive sales." },
          ]}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Built for every channel" title="Where your video works hardest" />
        <TwoColList
          left={{
            title: "Social Media Platforms",
            items: [
              "Facebook and Instagram reels optimised for engagement",
              "LinkedIn B2B brand videos for professional audiences",
              "TikTok UGC style content that feels authentic",
              "YouTube ads and retargeting videos",
              "Website hero videos and case studies",
            ],
          }}
          right={{
            title: "AI Advantage",
            items: [
              "SEO rich video transcripts and captions",
              "Summaries for AI tools and smart snippets",
              "Visual metadata tagging for discoverability",
              "Scene detection and optimal clip segmenting",
              "Speech to text indexing for long form videos",
            ],
          }}
        />
      </section>

      <section className="content-section">
        <BlockHead eyebrow="Process" title="Full Service Video Production" />
        <ProcessSteps
          steps={[
            { title: "Pre-Production", desc: "Strategy planning, scripting, and storyboard development tailored to your goals." },
            { title: "Production", desc: "High-end cameras, drone filming, voiceovers, and professional animation." },
            { title: "Post-Production", desc: "Editing, optimisation, thumbnail creation, and multi-platform formatting." },
          ]}
        />
      </section>

      <CtaBand
        eyebrow="Ready to turn views into value?"
        title="Ready to Turn Views Into Value?"
        lede="Let's create video content that works as hard as you do."
        ctaLabel="Get Video Strategy"
        ctaSubject="Video marketing — strategy request"
      />
    </>
  );
}
