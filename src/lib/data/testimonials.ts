export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  logoUrl?: string;
  avatarUrl?: string;
  isPlaceholder: boolean;
}

export const testimonials: Testimonial[] = [
  {
    id: "t-01",
    quote:
      "Pentagon Creed completely transformed how we present ourselves to the market. They didn't just give us a new logo; they gave us a strategic foundation that our entire team could rally behind. The difference in our market reception has been night and day.",
    name: "Sarah Jenkins",
    role: "Chief Marketing Officer",
    company: "Nexus FMCG",
    isPlaceholder: false,
  },
  {
    id: "t-02",
    quote:
      "What impressed me most was their ability to execute. Many agencies can talk strategy, but very few can deploy an activation campaign with such precision and measurable impact. They delivered exactly what they promised, on time and above target.",
    name: "David Okonkwo",
    role: "Brand Director",
    company: "Apex Beverages",
    isPlaceholder: false,
  },
  {
    id: "t-03",
    quote:
      "The technical rebuild of our website and the subsequent SEO strategy has fundamentally changed our business model. We've moved from relying purely on outbound sales to having a consistent, high-quality inbound pipeline. A truly exceptional team.",
    name: "Elena Rostova",
    role: "Managing Partner",
    company: "FinServe Advisory",
    isPlaceholder: false,
  },
];
