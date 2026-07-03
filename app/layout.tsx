import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tiberius Digital — Digital Marketing Agency Auckland | SEO, Google Ads, Web Development & AI Automation",
  description:
    "Tiberius Digital is Auckland's full-service digital growth agency. SEO, Google Ads, website development, AI automation & chatbots, CRO and digital strategy — built to generate qualified leads and measurable revenue.",
  keywords:
    "digital marketing agency Auckland, SEO Auckland, SEO services Auckland, Google Ads Auckland, website development Auckland, AI automation, AI search optimisation, voice search optimisation, CRO, conversion rate optimisation",
  alternates: { canonical: "https://www.tiberius.co.nz/" },
  openGraph: {
    type: "website",
    title: "Tiberius Digital — Digital Marketing Agency Auckland",
    description:
      "SEO, Google Ads, website development and AI automation engineered for measurable growth. Book a free strategy call.",
    url: "https://www.tiberius.co.nz/",
    locale: "en_NZ"
  }
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#04070F"
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Tiberius Digital",
  "description": "Full-service digital growth agency in Auckland, New Zealand. SEO, Google Ads, website development, AI automation and chatbots, social media marketing, CRO, analytics and digital strategy.",
  "url": "https://www.tiberius.co.nz/",
  "email": "hello@tiberius.co.nz",
  "address": { "@type": "PostalAddress", "addressLocality": "Auckland", "addressCountry": "NZ" },
  "areaServed": ["Auckland", "New Zealand", "Australia"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Marketing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development Auckland" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Services Auckland" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Google Ads Management Auckland" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Automation & Chatbots" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Search & Voice Search Optimisation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Social Media Marketing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conversion Rate Optimisation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Analytics & Tracking" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Strategy & Consulting" } }
    ]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="is-locked">
        <noscript>
          <style>{`
            #loader,#gl,#gl-dim,#cursor,#cursor-dot{display:none!important}
            body.is-locked{overflow:auto!important;height:auto!important}
            .site-header,[data-reveal],[data-reveal-blur]{opacity:1!important;transform:none!important;filter:none!important}
            .manifesto .word{opacity:1!important}
            .testi-slide:first-child{opacity:1!important;visibility:visible!important;position:relative!important}
            .work-media{clip-path:none!important}
          `}</style>
        </noscript>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
