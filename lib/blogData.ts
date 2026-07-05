export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  teaser: string;
  blocks?: BlogBlock[];
  related?: { label: string; href: string }[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "bing-ai-seo",
    title: "Bing Can NO LONGER Be Ignored for Local SEO",
    date: "June 2, 2025",
    teaser:
      "With ChatGPT and AI on the scene, Bing Places has become a must claim listing. Businesses that want to show up in ChatGPT's local results need a strong Bing presence.",
    related: [
      { label: "Local SEO Services", href: "/services/seo/local-seo" },
      { label: "AI Marketing Automation", href: "/services/ai-automation" },
    ],
    blocks: [
      { type: "p", text: "With ChatGPT and AI on the scene, Bing Places has become a must claim listing." },
      { type: "p", text: "Businesses that want to show up in ChatGPT's local results need a strong Bing presence." },
      { type: "p", text: "ChatGPT is changing how customers find local services. It doesn't only trust Google — it pulls data from Bing and other sources." },
      { type: "p", text: "If your business is only on Google, you're likely invisible in these AI driven searches." },
      { type: "p", text: "You need to be visible on Bing Places, Localist and other platforms ChatGPT taps for local info." },
      { type: "p", text: "Why Bing Places? Because ChatGPT often leans on Bing's search index to pick out local recommendations. In fact, ChatGPT appears to prefer businesses with a verified, complete Bing Places listing." },
      { type: "p", text: 'No Bing listing = a much lower chance you will be mentioned when someone asks ChatGPT for "the best [your service] in Auckland."' },
      { type: "p", text: "The good news: getting on Bing Places is easy — you can import your Google Business Profile directly." },
      { type: "p", text: "Microsoft lets you one click transfer your Google listing into Bing, so you don't have to start from scratch." },
      { type: "p", text: "Here's a step by step guide to claim and optimise your Bing Places listing:" },
      {
        type: "p",
        text: 'STEP 1: Visit BingPlaces.com and sign in with your Microsoft account (or create one). Click "Import from Google Business Profile" — Bing will pull in your existing info. Make sure to check "I want to sync my business data" and choose how often to sync (e.g. weekly). This way, any updates you make on Google (new photos, hours, etc.) automatically sync to Bing!',
      },
      {
        type: "p",
        text: "STEP 2: Sign in to your Google account when prompted and allow Bing Places to access your Business Profile data. If you manage multiple locations, select the correct business from your Google listings to import. Bing will then automatically import your business name, address, phone, website, hours, photos, all that good stuff — right into Bing Places.",
      },
      { type: "p", text: "STEP 3: Fill in a few extra details that Bing asks for after import:" },
      {
        type: "ul",
        items: [
          "Segment of Business — Choose a broad category segment for your business (e.g. Business-to-Business, Healthcare, Home Services, etc.). This is a unique Bing step — think of it as an extra layer above your specific category.",
          "Primary Category — Confirm or select the specific category that best fits your service (similar to how you have a category in Google). You can add additional categories if relevant.",
          'Address Visibility — If you\'re a home based or service area business (e.g. a plumber who goes to customers), Bing still requires an address for verification. Enter your address — you can hide it from public view by selecting "No, hide this address" so it won\'t show up on the listing. This way, you get verified but keep your home address private.',
          "Photos & Details — Upload a clear logo and any service photos. Add a detailed business description and double check your hours. Bing even lets you add links to Facebook, Yellow Pages, etc. and other details (e.g. service areas, amenities) in its dashboard. Complete profiles stand out more in search results!",
        ],
      },
      {
        type: "p",
        text: "STEP 4: Submit and verify your listing. Bing might ask to verify ownership by sending a PIN postcard to your address (similar to Google's process). Follow the instructions to enter the PIN and verify. Now be patient — Bing says it can take up to 14 days for your business to appear in Bing search results (in one case it took ~28 days, so don't panic if it isn't instant!). You'll get an email once your listing is live, along with a link to view your business on Bing Maps.",
      },
      {
        type: "p",
        text: "Bottom line: Claiming and optimising your Bing Places listing is a strategic move to stay ahead. It boosts your local visibility on Bing (the #2 search engine) and increases your chances of showing up in ChatGPT's answers and other AI-driven results. You want to be where your competitors might not be yet.",
      },
      { type: "p", text: "Bing is definitely gonna play a more important role soon. ChatGPT & Bing are both owned by Microsoft. It's a battle between Google and Microsoft!" },
      { type: "p", text: "So don't let them have the edge. Get your Bing Places in shape and capture that AI powered local search traffic!" },
      { type: "h3", text: "Beyond Bing Places: Other AI-Directories to Consider" },
      { type: "p", text: "While Bing Places is the biggest opportunity right now, don't overlook these other platforms that AI models pull from:" },
      {
        type: "ul",
        items: [
          "Apple Business Connect — Apple's answer to Google Business Profile. Essential for appearing in Apple Maps, Siri, and Spotlight searches on iPhones and Macs.",
          "Localist (New Zealand) — A major NZ business directory that feeds into various local search platforms. Make sure your listing is current.",
          "Industry-Specific Directories — Depending on your trade, directories like NoCowboys (for NZ tradies), HealthPoint (for medical), or industry association listings can provide strong local signals.",
          "Social Media Profiles — LinkedIn, Facebook Business Pages, and even Instagram profiles are indexed and can appear in AI-generated local recommendations.",
        ],
      },
      { type: "h3", text: "Monitoring Your AI Visibility" },
      { type: "p", text: "Once your listings are optimized, you should track whether you're actually showing up in AI search results:" },
      {
        type: "ul",
        items: [
          'Ask ChatGPT directly: "What are the best [your service] in [your city]?" See if your business gets mentioned.',
          "Check Bing Chat (Copilot): Search for your services and see which businesses appear in the AI-generated summaries.",
          "Track referral traffic: Use Google Analytics 4 to monitor traffic from Bing and other search engines.",
          "Set up Google Alerts for your business name + city to catch mentions across the web.",
        ],
      },
    ],
  },
  {
    slug: "google-maps-sauce",
    title: "Google Maps Sauce: Strategic Reviews for Higher Rankings",
    date: "May 15, 2025",
    teaser: "Want to rank higher on Google Maps? Here's why you need strategic reviews, not just more reviews.",
    related: [
      { label: "Local SEO Services", href: "/services/seo/local-seo" },
      { label: "Google Ads Management", href: "/services/google-ads" },
    ],
    blocks: [
      { type: "p", text: "Want to rank higher on Google Maps?" },
      { type: "p", text: "Here's why you need strategic reviews, not just more reviews." },
      { type: "p", text: 'We searched for "good healthy food near me."' },
      { type: "p", text: 'The top 2 spots? Both had reviews that mentioned "healthy food."' },
      { type: "p", text: "Google scans your reviews for keywords." },
      {
        type: "ul",
        items: ["The words your customers use = ranking signals.", "Mentioning services + city = better local SEO."],
      },
      { type: "p", text: "So yes, reviews are social proof… But they're also free SEO content." },
      { type: "h3", text: "How Review Keywords Actually Work" },
      {
        type: "p",
        text: "Google's algorithm for local search is more sophisticated than most business owners realize. When someone searches for a specific service or product in their area, Google doesn't just look at your business name and category. It crawls the text of your reviews to understand what you actually do and whether you match the user's intent.",
      },
      {
        type: "p",
        text: 'For example, if a customer writes: "The team at Smith Plumbing did an amazing job fixing our hot water cylinder in Wellington. Highly recommend their emergency plumbing services." — Google now associates your business with "hot water cylinder," "Wellington," "emergency plumbing," and "plumbing services." This dramatically increases your chances of appearing when someone searches for those exact terms.',
      },
      { type: "h3", text: "The Data Behind Review Signals" },
      {
        type: "p",
        text: "Studies by local SEO experts have shown that businesses in the Google Maps top 3 positions typically have reviews that mention their primary services 2-3x more frequently than businesses ranking lower. This isn't coincidence — it's a direct ranking factor.",
      },
      { type: "p", text: "Google also looks at:" },
      {
        type: "ul",
        items: [
          "Review recency: Fresh reviews signal an active, thriving business.",
          "Review velocity: A steady stream of new reviews beats a sudden burst followed by silence.",
          "Review diversity: Reviews from different users (not the same people repeatedly) carry more weight.",
          "Review length: Longer, detailed reviews provide more keyword context than short one-liners.",
          "Review responses: Businesses that reply to reviews show engagement, which Google rewards.",
        ],
      },
      { type: "h3", text: "Practical Strategies for Review Optimization" },
      {
        type: "ul",
        items: [
          'Train Your Team to Prompt Keyword-Rich Feedback: After completing a job, ask your customer: "If you had a great experience, would you mind mentioning what service we provided and what area you\'re in? It really helps other locals find us." Most customers are happy to do this when they understand the value.',
          'Create a Follow-Up Email Template: Send a friendly email 24-48 hours after service completion. Include direct links to your Google Business Profile review page. Mention: "We\'d love if you could share what service we helped you with and your general area — this helps other [your city] residents find us!"',
          'Use QR Codes at Point of Service: Place a QR code on invoices, receipts, or business cards that links directly to your review page. Add a small note: "Mention what we helped you with — it really boosts our local visibility!"',
          'Review Your Existing Reviews: Go through your current reviews and identify gaps. If none mention a key service you offer (e.g., "emergency plumbing" or "roof repairs"), make a focused effort to ask recent customers of those services specifically for reviews.',
          'Respond Strategically to Reviews: When you reply to customer reviews, naturally incorporate relevant keywords in your response. For example: "Thanks so much for trusting us with your roof repair in [suburb]! We\'re glad our team could fix the leak quickly." This reinforces the keyword association without being spammy.',
        ],
      },
      { type: "h3", text: "What NOT to Do" },
      {
        type: "ul",
        items: [
          "Never write fake reviews or pay for fake reviews. Google's detection systems are advanced, and penalties can include permanent suspension from Google Business Profile.",
          "Don't pressure customers for positive reviews. Ask for honest feedback — authenticity matters more than perfection.",
          "Avoid keyword-stuffing in review responses. Keep replies natural and human.",
        ],
      },
      { type: "h3", text: "The Bottom Line" },
      {
        type: "p",
        text: "Reviews are one of the most powerful (and underutilized) SEO tools for local businesses. Every review is an opportunity to tell Google exactly what you do, where you do it, and how well you do it. By being intentional about the language in your reviews, you can climb the Google Maps rankings faster than through traditional SEO alone.",
      },
      {
        type: "p",
        text: "Start implementing these strategies this week. Even a small increase in keyword-rich reviews can move you from page 2 to page 1 of Google Maps — and in local search, that's the difference between getting calls and getting ignored.",
      },
    ],
  },
  {
    slug: "ai-search-disrupting-local-marketing",
    title: "How AI Search is Disrupting Local Marketing",
    date: "April 28, 2025",
    teaser: "The AI shift is real: AI-driven search is rewriting local marketing. 1.5 – 2.5 million Kiwis now use generative AI as their main search tool.",
    related: [{ label: "AI Search Optimization", href: "/services/seo/ai-search-optimization" }],
  },
  {
    slug: "future-of-seo-ai-local",
    title: "The Future of SEO is AI & Local",
    date: "April 10, 2025",
    teaser: "Local businesses need to prep for an AI-driven search future. It's about being the trusted answer, not just a keyword-stuffed page.",
    related: [{ label: "SEO Services", href: "/services/seo" }],
  },
  {
    slug: "google-business-profile-local-seo",
    title: "Google Business Profile: Still the King of Local SEO?",
    date: "March 25, 2025",
    teaser: "Even with AI search on the rise, a well-optimized Google Business Profile (GBP) is non-negotiable for local visibility.",
    related: [{ label: "Local SEO Services", href: "/services/seo/local-seo" }],
  },
  {
    slug: "local-seo-tradies",
    title: "Local SEO for Tradies: Get Found by Homeowners Who Need You NOW",
    date: "March 10, 2025",
    teaser: "Plumbers, electricians, roofers — your customers are searching online when they have an urgent need. Here's how to be the one they find.",
    related: [{ label: "Local SEO Services", href: "/services/seo/local-seo" }],
  },
  {
    slug: "topical-authority-eeat-ai-search",
    title: "Beyond Keywords: How Topical Authority & E-E-A-T Win in AI Search",
    date: "February 22, 2025",
    teaser: "AI search prioritizes expertise. Building topical authority and demonstrating E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) is crucial.",
    related: [{ label: "AI Search Optimization", href: "/services/seo/ai-search-optimization" }],
  },
  {
    slug: "user-behavior-signals-local-seo",
    title: "Cracking the Code: How User Behavior Signals Impact Local SEO",
    date: "February 5, 2025",
    teaser: "Google is watching how users interact with your listing. Click-through rates, calls, direction requests — they all matter for local rankings.",
    related: [{ label: "Local SEO Services", href: "/services/seo/local-seo" }],
  },
  {
    slug: "visual-search-local-business",
    title: "The Rise of Visual Search: Is Your Local Business Ready?",
    date: "January 18, 2025",
    teaser: "People are searching with images, not just text. Optimizing your business's visual assets for platforms like Google Lens is becoming essential.",
    related: [{ label: "SEO Services", href: "/services/seo" }],
  },
  {
    slug: "zero-click-searches-local-seo",
    title: "Zero-Click Searches: Thriving When Google Answers Directly",
    date: "January 5, 2025",
    teaser: "Many Google searches end on the results page itself, with users getting answers from Local Packs, Knowledge Panels, or Featured Snippets. Here's how to win.",
    related: [{ label: "SEO Audits", href: "/services/seo/seo-audits" }],
  },
  {
    slug: "local-service-ads-tradies",
    title: "Local Service Ads (LSAs): The Pay-Per-Lead Game Changer for Tradies",
    date: "December 15, 2024",
    teaser: "Google's LSAs put qualified tradies at the very top of search results, and you only pay for valid leads. A must-consider for plumbers, electricians, etc.",
    related: [{ label: "Google Ads Management", href: "/services/google-ads" }],
  },
  {
    slug: "ai-ethics-marketing",
    title: "Navigating the Ethical Landscape of AI in Marketing",
    date: "November 28, 2024",
    teaser: "AI offers powerful marketing tools, but it comes with ethical responsibilities regarding data privacy, bias, and transparency.",
    related: [{ label: "AI Marketing Automation", href: "/services/ai-automation" }],
  },
  {
    slug: "seo-content-marketing-symbiosis",
    title: "The Symbiotic Relationship Between SEO and Content Marketing",
    date: "November 10, 2024",
    teaser: "SEO and Content Marketing aren't separate disciplines; they're two sides of the same coin, working together to attract and engage your target audience.",
    related: [{ label: "SEO Services", href: "/services/seo" }],
  },
  {
    slug: "reputation-management-digital-age",
    title: "Reputation Management in the Digital Age: Building Trust and Credibility",
    date: "October 25, 2024",
    teaser: "Your online reputation is your most valuable asset. Proactively managing reviews, social mentions, and search results is crucial for success.",
    related: [{ label: "Local SEO Services", href: "/services/seo/local-seo" }],
  },
  {
    slug: "science-of-viral-marketing",
    title: "The Science of Viral Marketing: Understanding Memetics",
    date: "February 16, 2026",
    teaser: "Discover how understanding memetics — the study of how information replicates through social networks — can transform your marketing strategy and make your content go viral.",
    related: [{ label: "Social Media Marketing", href: "/services/social-media-marketing" }],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((p) => p.slug === slug);
}
