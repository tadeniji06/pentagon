export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: FAQCategory;
}

export type FAQCategory =
  | "General"
  | "Services"
  | "Pricing"
  | "Process"
  | "SEO"
  | "Web Development"
  | "Brand"
  | "General Marketing"
  | "Media Advisory";

export const faqCategories: FAQCategory[] = [
  "General",
  "Services",
  "Pricing",
  "Process",
  "SEO",
  "Web Development",
  "Brand",
  "General Marketing",
  "Media Advisory",
];

export const faqs: FAQ[] = [
  // General
  {
    id: "g-01",
    question: "What is Pentagon Creed Integrations?",
    answer:
      "Pentagon Creed Integrations is a multidisciplinary business solutions company. We help organisations build stronger brands, digital experiences, market presence, and business operations through an integrated approach to strategy, creativity, and execution.",
    category: "General",
  },
  {
    id: "g-02",
    question: "What industries do you work with?",
    answer:
      "We work across a range of industries including consumer goods, food and beverage, financial services, professional services, retail, real estate, healthcare, and technology. Our approach is adaptable to the specific dynamics of your market.",
    category: "General",
  },
  {
    id: "g-03",
    question: "Where are you based and do you work with clients outside Nigeria?",
    answer:
      "We are based in Nigeria and work with clients across Africa and internationally. Many of our engagements are conducted remotely, with on-ground presence where campaigns require it.",
    category: "General",
  },
  // Services
  {
    id: "s-01",
    question: "Do you offer all services together or as standalone engagements?",
    answer:
      "Both. Clients can engage us for a single service — SEO, web development, branding, market activation, or media advisory — or for integrated programmes combining multiple disciplines. Integrated engagements tend to produce stronger and more consistent results.",
    category: "Services",
  },
  {
    id: "s-02",
    question: "What is your most popular service combination?",
    answer:
      "Brand development combined with web development and SEO is a common starting point — particularly for businesses launching, repositioning, or looking to grow their digital presence. Market activation is frequently added for consumer-facing brands.",
    category: "Services",
  },
  // Pricing
  {
    id: "p-01",
    question: "How is your work priced?",
    answer:
      "Our engagements are priced based on scope, complexity, and duration. We provide detailed proposals after an initial consultation. We do not publish standard rate cards because effective solutions are scoped to your specific needs.",
    category: "Pricing",
  },
  {
    id: "p-02",
    question: "Do you offer retainer arrangements?",
    answer:
      "Yes. We offer monthly retainers for ongoing services including SEO management, website management, and brand stewardship. Retainers provide continuity of strategy and a dedicated team relationship.",
    category: "Pricing",
  },
  // Process
  {
    id: "pr-01",
    question: "How do we start working together?",
    answer:
      "The first step is a consultation — a focused conversation about your situation, objectives, and what success looks like. From there, we scope a proposal. To request a consultation, use the contact form or reach out directly.",
    category: "Process",
  },
  {
    id: "pr-02",
    question: "What does a typical engagement look like from start to finish?",
    answer:
      "Every engagement follows our five-stage framework: Discover, Define, Design, Deploy, Deliver. The stages vary in length depending on the service. We communicate clearly at every stage, and provide detailed briefs, status updates, and deliverables on schedule.",
    category: "Process",
  },
  {
    id: "pr-03",
    question: "How involved do we need to be as a client?",
    answer:
      "We believe in genuine collaboration. Your input — particularly at strategy and review stages — significantly improves outcomes. That said, we structure our processes to respect your time. We make it easy to give focused feedback without requiring constant availability.",
    category: "Process",
  },
  // SEO
  {
    id: "seo-01",
    question: "Can you guarantee specific search rankings?",
    answer:
      "No ethical SEO provider can guarantee specific rankings — search engines are independent systems. What we can commit to is a rigorous, evidence-based approach that consistently improves your organic visibility, traffic, and the business outcomes those produce.",
    category: "SEO",
  },
  {
    id: "seo-02",
    question: "How do you approach local SEO?",
    answer:
      "Local SEO involves optimising your Google Business Profile, building local citation consistency, developing locally-relevant content, and earning local links. We tailor the approach to your specific geography and competitive environment.",
    category: "SEO",
  },
  // Web Development
  {
    id: "wd-01",
    question: "Do we own the website once it is built?",
    answer:
      "Yes. The website, all its code, and all design assets are yours on delivery. We hand over full access and documentation. If you choose a management retainer, we act as an extension of your team — but the asset is always yours.",
    category: "Web Development",
  },
  {
    id: "wd-02",
    question: "What if we already have a website and just need it improved?",
    answer:
      "We handle website audits, redesigns, performance improvements, and ongoing management for existing sites. We don't require that you start from scratch.",
    category: "Web Development",
  },
  // Brand
  {
    id: "b-01",
    question: "We already have a logo. Does that mean we have a brand?",
    answer:
      "A logo is one element of a brand identity, which is itself one component of a full brand. A brand also includes your positioning, personality, messaging, how you behave, and the experience you create. Many organisations with strong logos have underdeveloped brands.",
    category: "Brand",
  },
  // General Marketing
  {
    id: "ma-01",
    question: "What metrics do you use to measure activation success?",
    answer:
      "We track reach (number of consumers engaged), depth of engagement, product trial rates, conversion at point of contact, and attitudinal shifts where measurable. We provide a structured post-activation report with all key metrics and strategic recommendations.",
    category: "General Marketing",
  },
  // Media Advisory
  {
    id: "med-01",
    question: "Do you write press releases?",
    answer:
      "Yes. We develop press releases as part of a broader media relations strategy — not as standalone documents. A press release without a relationship strategy rarely achieves meaningful coverage. We combine strong writing with active media engagement.",
    category: "Media Advisory",
  },
];

export function getFAQsByCategory(category: FAQCategory): FAQ[] {
  return faqs.filter((f) => f.category === category);
}
