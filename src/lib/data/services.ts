export interface Service {
  id: string;
  number: string;
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  icon: string;
  capabilities: string[];
  deliverables: string[];
  benefits: string[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    id: "seo",
    number: "01",
    slug: "seo",
    name: "Search Engine Optimisation",
    shortName: "SEO",
    tagline: "Search visibility engineered around business growth.",
    description:
      "We build search strategies that go beyond rankings — connecting your brand to the people actively looking for what you offer, and converting that visibility into measurable business results.",
    icon: "Search",
    capabilities: [
      "Technical SEO audits & implementation",
      "On-page optimisation",
      "Content strategy & keyword research",
      "Local SEO",
      "Backlink profile development",
      "Core Web Vitals optimisation",
      "Search performance analytics & reporting",
      "Competitor gap analysis",
    ],
    deliverables: [
      "Comprehensive SEO audit report",
      "Keyword research & content map",
      "Technical recommendations document",
      "Monthly performance dashboard",
      "Quarterly strategic review",
    ],
    benefits: [
      "Increased organic traffic from high-intent audiences",
      "Reduced dependency on paid media",
      "Long-term, compounding search presence",
      "Clearer understanding of your market's search behaviour",
    ],
    process: [
      {
        step: 1,
        title: "Audit",
        description: "We conduct a deep technical and content audit to understand where you stand and why.",
      },
      {
        step: 2,
        title: "Research",
        description: "We map the search landscape — competitor positions, keyword opportunities, content gaps.",
      },
      {
        step: 3,
        title: "Strategy",
        description: "We build a prioritised roadmap aligned to your business objectives.",
      },
      {
        step: 4,
        title: "Implementation",
        description: "We execute on-page, technical, and content improvements in structured sprints.",
      },
      {
        step: 5,
        title: "Measure",
        description: "We track, report, and refine — continuously improving performance over time.",
      },
    ],
    faqs: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "Meaningful organic growth typically becomes visible between 3–6 months, depending on your current domain authority, competitive landscape, and how aggressively we implement. Technical fixes can show results faster; content strategies compound over time.",
      },
      {
        question: "Do you handle content creation as part of SEO?",
        answer:
          "Yes. Effective SEO requires high-quality content. We develop content strategy and can produce optimised content as part of an integrated engagement.",
      },
      {
        question: "How do you measure SEO success?",
        answer:
          "We track organic traffic, keyword rankings, click-through rates, and — most importantly — the business outcomes those drive: leads, enquiries, and conversions.",
      },
      {
        question: "Do you work with businesses outside Nigeria?",
        answer:
          "Yes. We work with businesses across Africa and internationally, building search strategies for local, national, and global markets.",
      },
    ],
  },
  {
    id: "web-development",
    number: "02",
    slug: "web-development",
    name: "Web Development & Management",
    shortName: "Web Development",
    tagline: "Digital experiences built to perform.",
    description:
      "We design and build websites and web applications that are fast, accessible, and strategically crafted to convert. Then we manage them — so you can focus on running your business.",
    icon: "Code2",
    capabilities: [
      "Corporate websites & landing pages",
      "Website redesign & migration",
      "CMS setup & management",
      "Web application development",
      "Performance optimisation",
      "Website security & maintenance",
      "Analytics integration",
      "Ongoing management retainers",
    ],
    deliverables: [
      "Design system & component library",
      "Responsive, accessible website",
      "CMS training documentation",
      "Performance baseline report",
      "Maintenance SLA agreement",
    ],
    benefits: [
      "A digital presence that reflects your brand's quality",
      "Faster load times and improved Core Web Vitals",
      "Reduced technical overhead for your team",
      "A website that evolves with your business",
    ],
    process: [
      {
        step: 1,
        title: "Discovery",
        description: "We map your goals, audience, and competitive landscape to define what success looks like.",
      },
      {
        step: 2,
        title: "Architecture",
        description: "We plan the information architecture, user flows, and technology stack.",
      },
      {
        step: 3,
        title: "Design",
        description: "We create high-fidelity designs grounded in your brand identity and user behaviour.",
      },
      {
        step: 4,
        title: "Build",
        description: "We develop the site with performance, accessibility, and maintainability as core requirements.",
      },
      {
        step: 5,
        title: "Launch & Manage",
        description: "We deploy, test, and transition to an ongoing management arrangement.",
      },
    ],
    faqs: [
      {
        question: "What platforms and technologies do you build on?",
        answer:
          "We primarily work with Next.js, React, and modern CMS platforms including Sanity, Contentful, and WordPress. The right stack depends on your specific requirements.",
      },
      {
        question: "How long does a website project take?",
        answer:
          "A typical corporate website takes 6–12 weeks from brief to launch. More complex web applications take longer. We establish clear timelines at the start of every engagement.",
      },
      {
        question: "Do you offer website maintenance after launch?",
        answer:
          "Yes. We offer structured maintenance retainers covering security updates, performance monitoring, content updates, and ongoing improvements.",
      },
    ],
  },
  {
    id: "brand-development",
    number: "03",
    slug: "brand-development",
    name: "Brand Development & Management",
    shortName: "Brand Development",
    tagline: "Brands designed for relevance and recognition.",
    description:
      "We help organisations build brands that people remember, trust, and choose — from strategy and identity through to the campaigns and communications that keep the brand alive in the market.",
    icon: "Layers",
    capabilities: [
      "Brand strategy & positioning",
      "Visual identity design",
      "Brand naming & messaging",
      "Brand guidelines",
      "Rebranding & brand refresh",
      "Brand communication",
      "Campaign creative direction",
      "Brand management consulting",
    ],
    deliverables: [
      "Brand strategy document",
      "Visual identity system",
      "Comprehensive brand guidelines",
      "Key messaging framework",
      "Brand asset library",
    ],
    benefits: [
      "A clear, distinctive market position",
      "Consistent brand presentation across all touchpoints",
      "Stronger customer recognition and recall",
      "A brand that attracts the right audience",
    ],
    process: [
      {
        step: 1,
        title: "Research",
        description: "We study your market, competitors, and audiences to identify white space and opportunity.",
      },
      {
        step: 2,
        title: "Strategy",
        description: "We define your positioning, personality, and promise — the foundation everything builds on.",
      },
      {
        step: 3,
        title: "Identity",
        description: "We create a visual identity that expresses your strategy with precision and distinction.",
      },
      {
        step: 4,
        title: "Expression",
        description: "We extend the identity across all relevant touchpoints — digital, print, environmental.",
      },
      {
        step: 5,
        title: "Stewardship",
        description: "We help you manage and evolve the brand over time, keeping it sharp and relevant.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between brand identity and brand strategy?",
        answer:
          "Brand strategy defines what your brand stands for, who it serves, and how it is positioned in the market. Brand identity is the visual and verbal expression of that strategy. One without the other produces either a beautiful brand with no direction, or a smart strategy with no memorable expression.",
      },
      {
        question: "Do you work with startups or only established businesses?",
        answer:
          "Both. Early-stage brands benefit enormously from getting strategy right before launching. Established brands often need a refresh or repositioning as their markets evolve.",
      },
      {
        question: "How long does a brand development project take?",
        answer:
          "A comprehensive brand strategy and identity project typically takes 8–14 weeks. Scope, stakeholder availability, and decision-making speed all affect timelines.",
      },
    ],
  },
  {
    id: "market-activation",
    number: "04",
    slug: "market-activation",
    name: "Market Activation",
    shortName: "Market Activation",
    tagline: "Ideas translated into real-world market engagement.",
    description:
      "We take brands off the screen and into the market — through campaigns, experiences, and activations that create direct, meaningful connections between your brand and the people you are trying to reach.",
    icon: "Zap",
    capabilities: [
      "Activation strategy & planning",
      "Experiential marketing",
      "Consumer engagement campaigns",
      "Field marketing & sampling",
      "Retail activation",
      "Event marketing & management",
      "Brand visibility & out-of-home",
      "Campaign execution & logistics",
      "Activation reporting & insights",
    ],
    deliverables: [
      "Activation strategy document",
      "Campaign execution plan",
      "Field team management",
      "Real-time reporting dashboard",
      "Post-activation insights report",
    ],
    benefits: [
      "Direct consumer connection with your brand",
      "Measurable engagement and conversion at point-of-contact",
      "Authentic brand experiences that generate word-of-mouth",
      "Data-driven insights on consumer behaviour",
    ],
    process: [
      {
        step: 1,
        title: "Insight",
        description: "We research the consumer environment — where they are, what they respond to, what drives them.",
      },
      {
        step: 2,
        title: "Strategy",
        description: "We develop an activation strategy aligned to your commercial objectives.",
      },
      {
        step: 3,
        title: "Creative",
        description: "We design the campaign experience — every touchpoint, every message, every moment.",
      },
      {
        step: 4,
        title: "Activation",
        description: "We deploy and manage the campaign — on the ground, in the market, with precision.",
      },
      {
        step: 5,
        title: "Engagement",
        description: "We capture consumer interactions and build real relationships, not just impressions.",
      },
      {
        step: 6,
        title: "Measurement",
        description: "We report on reach, engagement, and conversion — and what it means for next time.",
      },
    ],
    faqs: [
      {
        question: "What types of brands do you run activations for?",
        answer:
          "We work across FMCG, food and beverage, consumer electronics, financial services, and retail. Any brand that needs to build real-world consumer connection benefits from a structured activation strategy.",
      },
      {
        question: "How far in advance should we plan an activation?",
        answer:
          "For a well-executed activation, we recommend 6–10 weeks of planning time minimum. Larger campaigns or those involving event coordination may require more.",
      },
      {
        question: "Do you manage field teams directly?",
        answer:
          "Yes. We manage end-to-end campaign logistics including field team recruitment, training, deployment, and real-time monitoring.",
      },
      {
        question: "Can you run activations nationally?",
        answer:
          "Yes. We have the capacity to run coordinated activations across multiple states and regions simultaneously.",
      },
    ],
  },
  {
    id: "media-advisory",
    number: "05",
    slug: "media-advisory",
    name: "Media Advisory",
    shortName: "Media Advisory",
    tagline: "Strategic communication when reputation matters.",
    description:
      "We help organisations communicate clearly, credibly, and strategically — shaping narratives, managing reputations, and building the kind of media presence that creates sustained trust.",
    icon: "Mic2",
    capabilities: [
      "Media strategy & planning",
      "Media relations",
      "Press communication & release management",
      "Corporate communications",
      "Reputation management",
      "Crisis communication support",
      "Thought leadership development",
      "Media training",
    ],
    deliverables: [
      "Media strategy document",
      "Media contact database",
      "Press release & media kit",
      "Messaging framework",
      "Crisis communication playbook",
    ],
    benefits: [
      "Stronger, more credible media presence",
      "Proactive narrative control",
      "Prepared leadership teams for media engagement",
      "A communication strategy aligned to business objectives",
    ],
    process: [
      {
        step: 1,
        title: "Audit",
        description: "We assess your current media presence, messaging, and reputation positioning.",
      },
      {
        step: 2,
        title: "Strategy",
        description: "We define your communication objectives and the media approach that will achieve them.",
      },
      {
        step: 3,
        title: "Messaging",
        description: "We develop the core messages that should define your public-facing narrative.",
      },
      {
        step: 4,
        title: "Relations",
        description: "We build and manage relationships with relevant media — for coverage, commentary, and positioning.",
      },
      {
        step: 5,
        title: "Advisory",
        description: "We provide ongoing counsel on communications decisions, issues, and opportunities.",
      },
    ],
    faqs: [
      {
        question: "What is the difference between PR and media advisory?",
        answer:
          "Traditional PR often focuses on press releases and coverage. Media advisory is more strategic — it's about understanding how media relationships work, how narratives are shaped, and how communication decisions affect your organisation's long-term reputation.",
      },
      {
        question: "Do you handle crisis communications?",
        answer:
          "Yes. We can provide crisis communication support, including situation assessment, message development, and media response management. For organisations at risk of reputational challenges, we also offer crisis preparedness planning before an incident occurs.",
      },
      {
        question: "Do you provide media training for executives?",
        answer:
          "Yes. We prepare leadership teams for press interviews, public appearances, and broadcast engagements — covering message discipline, handling difficult questions, and presenting with authority.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
