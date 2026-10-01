import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Pentagon Creed Integrations is a multidisciplinary business solutions company built on the belief that strategy, creativity, and disciplined execution are most powerful when integrated.',
  alternates: { canonical: 'https://www.pentagoncreedintegrations.com/about' },
};

const values = [
  {
    word: 'Strategy',
    description:
      "We don't act on instinct alone. Every recommendation is grounded in research, context, and a clear understanding of what the business needs to achieve.",
  },
  {
    word: 'Integrity',
    description:
      'We tell clients what they need to hear, not what they want to hear. Long-term relationships are built on honest counsel.',
  },
  {
    word: 'Creativity',
    description:
      'Creativity is not decoration. It is the capacity to solve complex problems in ways that are memorable and effective.',
  },
  {
    word: 'Excellence',
    description:
      "We hold ourselves to a high standard because our clients' results depend on the quality of our work.",
  },
  {
    word: 'Impact',
    description:
      "Strategy that doesn't produce measurable results is incomplete. We measure what matters and improve continuously.",
  },
];

const strengths = [
  'Consumer Goods & FMCG',
  'Financial Services',
  'Professional Services',
  'Real Estate & Property',
  'Retail & E-commerce',
  'Healthcare',
  'Technology',
  'Education',
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-[#0B1F3A] pt-[140px] pb-20 lg:pb-28">
        <div className="container-wide">
          <ScrollReveal>
            <SectionLabel light>About Pentagon Creed</SectionLabel>
            <h1 className="mt-8 text-[52px] sm:text-[68px] lg:text-[80px] font-extrabold leading-[1.03] tracking-[-0.03em] text-white max-w-4xl">
              Integration isn't a{' '}
              <span className="text-[#C9A84C]">service.</span>
              <br />
              It's how we think.
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <ScrollReveal className="lg:col-span-5">
              <SectionLabel>Our Story</SectionLabel>
              <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-[#0B0F14] leading-tight tracking-[-0.02em]">
                Built for organisations that need more than one thing done well.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2} className="lg:col-span-7">
              <div className="space-y-6 text-lg text-[#344054] leading-relaxed">
                <p>
                  Pentagon Creed Integrations was founded on a single observation: that the
                  organisations with the most potential to grow were being underserved by
                  fragmented service providers — each doing their part in isolation, none
                  accountable for the whole.
                </p>
                <p>
                  We built Pentagon Creed as a different kind of company. One that understands
                  that brand, digital, search, market activation, and media are not separate
                  disciplines — they are five expressions of the same strategic intent.
                </p>
                <p>
                  When they work together — when they are genuinely integrated — they produce
                  results that none of them can achieve alone.
                </p>
                <p>
                  That is what we build for our clients. Not a logo. Not a website. Not a
                  campaign. A momentum.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#F2F4F7] section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#0B1F3A]/08">
            {[
              {
                label: 'Mission',
                text: 'To help organisations build momentum — through the integration of strategy, creativity, and disciplined execution across brand, digital, and market.',
              },
              {
                label: 'Vision',
                text: 'To be the most trusted multidisciplinary business solutions partner for ambitious organisations across Africa and beyond.',
              },
            ].map((item) => (
              <ScrollReveal key={item.label} className="bg-white p-10 lg:p-16">
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#C9A84C] block mb-6">
                  {item.label}
                </span>
                <p className="text-2xl lg:text-3xl font-bold text-[#0B0F14] leading-snug tracking-[-0.01em]">
                  {item.text}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white section-padding">
        <div className="container-wide">
          <ScrollReveal className="mb-16">
            <SectionLabel>Our Values</SectionLabel>
            <h2 className="mt-6 text-[40px] sm:text-[48px] font-extrabold leading-[1.06] tracking-[-0.02em] text-[#0B0F14]">
              Five words.
              <br />
              <span className="text-[#0B1F3A]">Non-negotiable.</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-px bg-[#0B1F3A]/08">
            {values.map((value, i) => (
              <ScrollReveal key={value.word} delay={i * 0.08} className="bg-white p-8">
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#C9A84C] block mb-5">
                  0{i + 1}
                </span>
                <h3 className="text-xl font-bold text-[#0B0F14] mb-4">{value.word}</h3>
                <p className="text-sm text-[#98A2B3] leading-relaxed">{value.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Strengths */}
      <section className="bg-[#F2F4F7] section-padding">
        <div className="container-wide">
          <ScrollReveal className="mb-12">
            <SectionLabel>Industries We Serve</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold text-[#0B0F14] tracking-[-0.01em]">
              Sector experience.
            </h2>
          </ScrollReveal>
          <div className="flex flex-wrap gap-3">
            {strengths.map((strength) => (
              <span
                key={strength}
                className="text-sm font-semibold text-[#344054] border border-[#0B1F3A]/20 px-5 py-3 hover:bg-[#0B1F3A] hover:text-white hover:border-[#0B1F3A] transition-colors cursor-default"
              >
                {strength}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Team placeholder */}
      <section className="bg-white section-padding">
        <div className="container-wide">
          <ScrollReveal className="mb-16">
            <SectionLabel>Leadership</SectionLabel>
            <h2 className="mt-6 text-3xl font-bold text-[#0B0F14] tracking-[-0.01em]">
              The team.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Dr. Ayo Balogun', role: 'Chief Executive Officer', bio: 'Strategic leader with 15+ years experience driving digital transformation for enterprise brands across emerging markets.' },
              { name: 'Sarah Jenkins', role: 'Head of Strategy', bio: 'Former McKinsey consultant specializing in brand positioning and market entry strategies for corporate clients.' },
              { name: 'Chinedu Eze', role: 'Technical Director', bio: 'Full-stack engineering veteran who architects robust, scalable platforms for our most demanding integrations.' },
            ].map((member, i) => (
              <ScrollReveal key={member.name} delay={i * 0.1} className="group">
                <div className="aspect-[4/5] bg-[#0B1F3A]/5 mb-6 overflow-hidden">
                  <div className="w-full h-full bg-[#E5E7EB] flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                    <span className="text-[#98A2B3] text-sm font-semibold tracking-wider uppercase">Photo</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[#0B0F14] mb-1">{member.name}</h3>
                <div className="text-sm font-bold text-[#C9A84C] mb-4">{member.role}</div>
                <p className="text-sm text-[#344054] leading-relaxed">{member.bio}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline={"Ready to work\nwith us?"}
        subheadline="Tell us about your business. We'll show you what integration can do for it."
      />
    </>
  );
}
