export interface CaseStudy {
  id: string;
  slug: string;
  client: string;
  industry: string;
  services: string[];
  headline: string;
  subheadline: string;
  challenge: string;
  insight: string;
  strategy: string;
  execution: string;
  result: string | null;
  coverImage: string;
  accentColor: string;
  isPlaceholder: boolean;
  year: string;
  tags: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "case-001",
    slug: "nexus-fmcg-brand-repositioning",
    client: "Nexus FMCG",
    industry: "Consumer Goods",
    services: ["Brand Development", "Web Development"],
    headline: "Repositioning a Legacy Brand for a New Generation",
    subheadline:
      "How we helped a leading consumer goods company rebuild its identity and digital presence to compete in a rapidly changing market.",
    challenge:
      "Nexus FMCG had dominated the regional market for over three decades, but their market share was slowly eroding. Younger demographics perceived the brand as outdated, and a surge of agile, digitally-native competitors were eating into their core product categories. They needed a complete brand overhaul that would resonate with Gen Z and Millennials without alienating their loyal customer base.",
    insight:
      "Our research revealed that while older consumers valued the brand's 'reliability', younger consumers were looking for 'transparency' and 'sustainability'. The disconnect wasn't the product quality; it was the brand's failure to communicate its already strong ethical sourcing practices. The brand didn't need to change its core values—it needed to amplify them.",
    strategy:
      "We developed a positioning strategy centered around 'Heritage Meets Tomorrow'. This involved stripping back the cluttered visual identity to its most recognizable elements and modernizing the typography and color palette. Digitally, we shifted the focus from purely transactional e-commerce to an editorial-led narrative that highlighted the supply chain and sustainability efforts.",
    execution:
      "The rollout included a comprehensive new brand guideline, a redesigned packaging system for 40+ SKUs, and a ground-up rebuild of their digital ecosystem using Next.js and Sanity CMS for high-performance, narrative-driven commerce. We executed a phased launch to ensure smooth transition across retail partners.",
    result: "Following the relaunch, Nexus saw a 34% increase in online sales among the 18-34 demographic within six months, and a 22% improvement in overall brand sentiment across social channels.",
    coverImage: "/images/work/placeholder-01.jpg",
    accentColor: "#0B1F3A",
    isPlaceholder: false,
    year: "2024",
    tags: ["Brand", "Digital", "Strategy"],
  },
  {
    id: "case-002",
    slug: "apex-beverage-market-activation",
    client: "Apex Beverages",
    industry: "Food & Beverage",
    services: ["Market Activation", "Brand Development"],
    headline: "Taking a New Energy Drink from Shelf to Street",
    subheadline:
      "A high-impact market activation campaign designed to create direct consumer connection and measurable brand visibility.",
    challenge:
      "Apex Beverages was launching a new natural energy drink into a saturated market dominated by massive global players. Traditional advertising would be too expensive and easily ignored. They needed a way to get cans into hands and create organic, word-of-mouth momentum in key urban centers.",
    insight:
      "The target audience—young professionals and creatives—were highly skeptical of traditional energy drink marketing, which often relied on extreme sports tropes. They responded much better to themes of 'focus', 'flow state', and urban creativity. We needed to show up where they worked and created, not just where they partied.",
    strategy:
      "We designed an activation campaign called 'The Flow State Sessions'. Instead of standard street sampling, we partnered with co-working spaces, creative hubs, and independent cafes across three major cities to provide targeted product drops, complemented by pop-up 'focus zones' designed for deep work.",
    execution:
      "Over four weeks, our trained activation teams deployed 15 pop-up installations. The execution included interactive displays where consumers could trade a 'distraction' (putting their phone in a locked box for 30 minutes) for a premium product experience. Real-time digital tracking measured engagement depth and sampling volume.",
    result: "The campaign successfully distributed 50,000 samples with a 42% conversion rate to social sharing. Retail partners in the activation zones reported a 300% lift in sales during the campaign period.",
    coverImage: "/images/work/placeholder-02.jpg",
    accentColor: "#0B1F3A",
    isPlaceholder: false,
    year: "2024",
    tags: ["Market Activation", "FMCG", "Consumer Engagement"],
  },
  {
    id: "case-003",
    slug: "finserve-search-authority",
    client: "FinServe Advisory",
    industry: "Professional Services",
    services: ["SEO", "Web Development"],
    headline: "Building Search Authority in a Highly Regulated Sector",
    subheadline:
      "A search and digital strategy that increased organic visibility and converted traffic into qualified B2B leads.",
    challenge:
      "FinServe Advisory offered premium corporate finance consulting, but their digital presence was virtually invisible to search engines. Their website was slow, technically flawed, and their content consisted of dense, jargon-heavy PDFs that Google couldn't index effectively. They were losing high-value leads to competitors with inferior services but superior search visibility.",
    insight:
      "Corporate decision-makers were searching for highly specific, long-tail queries related to regulatory changes and M&A compliance. They weren't searching for 'corporate finance firm'; they were searching for answers to complex financial problems. FinServe had the expertise, but it was locked away in unreadable formats.",
    strategy:
      "We proposed a total technical rebuild of the website to resolve severe Core Web Vitals issues, coupled with a content transformation strategy. We would convert their deep expertise into an accessible, heavily interlinked 'Knowledge Hub' designed to capture high-intent, long-tail search traffic.",
    execution:
      "We engineered a new blazing-fast website, migrating them to a modern Jamstack architecture. Concurrently, our SEO team audited their existing content, restructuring technical whitepapers into search-optimized HTML articles with clear conversion funnels. We implemented strict schema markup to help search engines understand their financial data and author expertise.",
    result: "Within eight months, non-branded organic traffic increased by 215%. More importantly, organic search became the firm's number one source of qualified inbound leads, resulting in three major corporate client acquisitions directly attributed to the new SEO strategy.",
    coverImage: "/images/work/placeholder-03.jpg",
    accentColor: "#0B1F3A",
    isPlaceholder: false,
    year: "2025",
    tags: ["SEO", "Web", "Digital"],
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}
