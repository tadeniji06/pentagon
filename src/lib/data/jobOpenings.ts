export interface JobOpening {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  employmentType: "Full-time" | "Part-time" | "Contract" | "Internship";
  experienceLevel: "Entry" | "Mid" | "Senior" | "Lead";
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  isActive: boolean;
  postedAt: string;
}

export const jobOpenings: JobOpening[] = [
  {
    id: "job-001",
    slug: "senior-brand-strategist",
    title: "Senior Brand Strategist",
    department: "Brand Development",
    location: "Lagos, Nigeria (Hybrid)",
    employmentType: "Full-time",
    experienceLevel: "Senior",
    description:
      "We are looking for a Senior Brand Strategist who understands that positioning isn't just about clever taglines, but about fundamental business strategy. You will lead client engagements from initial discovery through to strategic delivery, working closely with our creative and digital teams to ensure your strategies are executed flawlessly.",
    responsibilities: [
      "Lead primary and secondary market research to uncover actionable insights.",
      "Develop comprehensive brand strategies, positioning frameworks, and messaging architectures.",
      "Facilitate client workshops and present strategic recommendations to C-level executives.",
      "Collaborate with design and digital teams to translate strategy into tangible creative execution.",
      "Mentor mid-level strategists and contribute to our internal methodology."
    ],
    requirements: [
      "5+ years of experience in brand strategy, either at an agency or client-side.",
      "A portfolio of work that demonstrates clear strategic thinking and measurable business impact.",
      "Exceptional written and verbal communication skills.",
      "Strong analytical ability to interpret data and market trends.",
      "Experience leading complex client relationships."
    ],
    niceToHave: [
      "Experience in B2B service sectors or FMCG.",
      "Understanding of digital ecosystems and search behavior."
    ],
    isActive: true,
    postedAt: "2025-10-01",
  },
  {
    id: "job-002",
    slug: "frontend-engineer",
    title: "Frontend Engineer (React/Next.js)",
    department: "Web Development",
    location: "Remote",
    employmentType: "Full-time",
    experienceLevel: "Mid",
    description:
      "We are seeking a Frontend Engineer with a sharp eye for design and a deep understanding of modern web performance. You will be building premium corporate websites and web applications using Next.js and Tailwind CSS. The ideal candidate cares just as much about smooth animations and pixel-perfect implementation as they do about clean architecture and Core Web Vitals.",
    responsibilities: [
      "Build responsive, accessible, and highly performant user interfaces.",
      "Implement complex UI animations using Framer Motion and GSAP.",
      "Collaborate closely with UI/UX designers to bring static designs to life.",
      "Integrate headless CMS platforms (Sanity, Contentful) and REST/GraphQL APIs.",
      "Optimize applications for maximum speed and scalability."
    ],
    requirements: [
      "3+ years of professional experience with React and TypeScript.",
      "Strong proficiency with Next.js (App Router experience is a major plus) and Tailwind CSS.",
      "Experience building and deploying headless CMS architectures.",
      "Deep understanding of modern CSS and web animation techniques.",
      "A strong portfolio of live, performant web projects."
    ],
    isActive: true,
    postedAt: "2025-10-15",
  },
];

export function getActiveJobs(): JobOpening[] {
  return jobOpenings.filter((j) => j.isActive);
}

export function getJobBySlug(slug: string): JobOpening | undefined {
  return jobOpenings.find((j) => j.slug === slug);
}
