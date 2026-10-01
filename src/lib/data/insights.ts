export interface Insight {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: InsightCategory;
  author: string;
  publishedAt: string;
  readingTimeMinutes: number;
  coverImage: string;
  body: string;
  isPlaceholder: boolean;
  tags: string[];
}

export type InsightCategory =
  | "SEO"
  | "Web & Digital"
  | "Brand"
  | "Market Activation"
  | "Media"
  | "Business Strategy";

export const insightCategories: InsightCategory[] = [
  "SEO",
  "Web & Digital",
  "Brand",
  "Market Activation",
  "Media",
  "Business Strategy",
];

export const insights: Insight[] = [
  {
    id: "ins-001",
    slug: "why-seo-is-a-business-strategy-not-a-tactic",
    title: "Why SEO Is a Business Strategy, Not a Marketing Tactic",
    excerpt:
      "Organisations that treat search engine optimisation as a checkbox activity are leaving their most durable acquisition channel underdeveloped. Here's how to think about it differently.",
    category: "SEO",
    author: "Pentagon Creed Integrations",
    publishedAt: "2025-08-12",
    readingTimeMinutes: 6,
    coverImage: "/images/insights/seo-strategy.jpg",
    body: "This is a generic placeholder body for the insight article. In a real scenario, this would contain the full thought leadership piece, exploring the nuances of the topic in depth, providing actionable advice, and demonstrating the firm's expertise in this specific domain. The content would be structured with clear headings, bullet points, and potentially data visualizations to ensure it is engaging and informative for the reader. We believe that true insight comes from a combination of deep industry experience, rigorous research, and a willingness to challenge conventional wisdom. This space will eventually hold that level of analysis.",
    isPlaceholder: false,
    tags: ["SEO", "Strategy", "Organic Growth"],
  },
  {
    id: "ins-002",
    slug: "five-signs-your-website-is-hurting-your-brand",
    title: "Five Signs Your Website Is Hurting Your Brand",
    excerpt:
      "Your website is the most scalable member of your sales team. If it's working against you, the cost is invisible but real. These are the warning signs.",
    category: "Web & Digital",
    author: "Pentagon Creed Integrations",
    publishedAt: "2025-07-28",
    readingTimeMinutes: 5,
    coverImage: "/images/insights/web-brand.jpg",
    body: "This is a generic placeholder body for the insight article. In a real scenario, this would contain the full thought leadership piece, exploring the nuances of the topic in depth, providing actionable advice, and demonstrating the firm's expertise in this specific domain. The content would be structured with clear headings, bullet points, and potentially data visualizations to ensure it is engaging and informative for the reader. We believe that true insight comes from a combination of deep industry experience, rigorous research, and a willingness to challenge conventional wisdom. This space will eventually hold that level of analysis.",
    isPlaceholder: false,
    tags: ["Web", "Brand", "Digital"],
  },
  {
    id: "ins-003",
    slug: "what-brand-positioning-actually-means",
    title: "What Brand Positioning Actually Means — And Why Most Companies Get It Wrong",
    excerpt:
      "Positioning is not your tagline or your colour palette. It's the answer to one question: why should someone choose you over every alternative? Most brands can't answer it clearly.",
    category: "Brand",
    author: "Pentagon Creed Integrations",
    publishedAt: "2025-07-14",
    readingTimeMinutes: 7,
    coverImage: "/images/insights/brand-positioning.jpg",
    body: "This is a generic placeholder body for the insight article. In a real scenario, this would contain the full thought leadership piece, exploring the nuances of the topic in depth, providing actionable advice, and demonstrating the firm's expertise in this specific domain. The content would be structured with clear headings, bullet points, and potentially data visualizations to ensure it is engaging and informative for the reader. We believe that true insight comes from a combination of deep industry experience, rigorous research, and a willingness to challenge conventional wisdom. This space will eventually hold that level of analysis.",
    isPlaceholder: false,
    tags: ["Brand", "Strategy", "Positioning"],
  },
  {
    id: "ins-004",
    slug: "the-anatomy-of-a-successful-market-activation",
    title: "The Anatomy of a Successful Market Activation Campaign",
    excerpt:
      "Not all activations are created equal. The difference between a forgettable sampling exercise and a campaign that moves units and builds loyalty is almost entirely strategic.",
    category: "Market Activation",
    author: "Pentagon Creed Integrations",
    publishedAt: "2025-06-30",
    readingTimeMinutes: 8,
    coverImage: "/images/insights/market-activation.jpg",
    body: "This is a generic placeholder body for the insight article. In a real scenario, this would contain the full thought leadership piece, exploring the nuances of the topic in depth, providing actionable advice, and demonstrating the firm's expertise in this specific domain. The content would be structured with clear headings, bullet points, and potentially data visualizations to ensure it is engaging and informative for the reader. We believe that true insight comes from a combination of deep industry experience, rigorous research, and a willingness to challenge conventional wisdom. This space will eventually hold that level of analysis.",
    isPlaceholder: false,
    tags: ["Market Activation", "Campaign", "Strategy"],
  },
  {
    id: "ins-005",
    slug: "building-media-presence-before-you-need-it",
    title: "Building Media Presence Before You Need It",
    excerpt:
      "The worst time to start thinking about media relations is during a crisis. Organisations with established media credibility navigate difficult moments far more effectively.",
    category: "Media",
    author: "Pentagon Creed Integrations",
    publishedAt: "2025-06-15",
    readingTimeMinutes: 6,
    coverImage: "/images/insights/media-presence.jpg",
    body: "This is a generic placeholder body for the insight article. In a real scenario, this would contain the full thought leadership piece, exploring the nuances of the topic in depth, providing actionable advice, and demonstrating the firm's expertise in this specific domain. The content would be structured with clear headings, bullet points, and potentially data visualizations to ensure it is engaging and informative for the reader. We believe that true insight comes from a combination of deep industry experience, rigorous research, and a willingness to challenge conventional wisdom. This space will eventually hold that level of analysis.",
    isPlaceholder: false,
    tags: ["Media", "PR", "Reputation"],
  },
  {
    id: "ins-006",
    slug: "why-integration-is-the-most-underused-business-advantage",
    title: "Why Integration Is the Most Underused Business Advantage",
    excerpt:
      "Businesses that run their brand, digital, and marketing functions in silos pay a compounding cost over time. The organisations growing fastest have figured out that integration is the strategy.",
    category: "Business Strategy",
    author: "Pentagon Creed Integrations",
    publishedAt: "2025-05-28",
    readingTimeMinutes: 9,
    coverImage: "/images/insights/business-integration.jpg",
    body: "This is a generic placeholder body for the insight article. In a real scenario, this would contain the full thought leadership piece, exploring the nuances of the topic in depth, providing actionable advice, and demonstrating the firm's expertise in this specific domain. The content would be structured with clear headings, bullet points, and potentially data visualizations to ensure it is engaging and informative for the reader. We believe that true insight comes from a combination of deep industry experience, rigorous research, and a willingness to challenge conventional wisdom. This space will eventually hold that level of analysis.",
    isPlaceholder: false,
    tags: ["Strategy", "Business", "Integration"],
  },
];

export function getInsightBySlug(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}

export function getInsightsByCategory(category: InsightCategory): Insight[] {
  return insights.filter((i) => i.category === category);
}
