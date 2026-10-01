import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Briefcase } from 'lucide-react';
import { getActiveJobs } from '@/lib/data/jobOpenings';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Build your career at Pentagon Creed Integrations. Explore open positions in brand, SEO, web development, market activation, and media.',
  alternates: { canonical: 'https://www.pentagoncreedintegrations.com/careers' },
};

const whyWork = [
  {
    title: 'Integrated work',
    description:
      "You'll work across disciplines — strategy, creative, digital, and market — not confined to a single function.",
  },
  {
    title: 'Real ownership',
    description:
      'We give people responsibility from day one. Growth comes from doing, not waiting for permission.',
  },
  {
    title: 'Ambitious clients',
    description:
      'We work with organisations that want to actually build something — which means the work has real stakes.',
  },
  {
    title: 'Learning culture',
    description:
      'The industry changes constantly. We invest in staying sharp — and we expect the same from everyone on the team.',
  },
];

const careerAreas = [
  { area: 'SEO', description: 'Technical and content-led search strategy' },
  { area: 'Web Development', description: 'Modern frontend and full-stack engineering' },
  { area: 'Brand Strategy', description: 'Strategic positioning and identity' },
  { area: 'Market Activation', description: 'Consumer engagement and field marketing' },
  { area: 'Media', description: 'Communications, PR, and advisory' },
  { area: 'Client Strategy', description: 'Business development and account leadership' },
];

export default function CareersPage() {
  const activeJobs = getActiveJobs();

  return (
    <>
      {/* Hero */}
      <section className="bg-[#061426] pt-[140px] pb-20">
        <div className="container-wide">
          <ScrollReveal>
            <SectionLabel light>Careers</SectionLabel>
            <h1 className="mt-8 text-[52px] sm:text-[68px] lg:text-[80px] font-extrabold leading-[1.03] tracking-[-0.03em] text-white max-w-3xl">
              Build something
              <br />
              that <span className="text-[#C9A84C]">moves.</span>
            </h1>
            <p className="mt-8 text-xl text-white/55 max-w-xl leading-relaxed">
              We're building a company where serious people do meaningful work. If that's you, read on.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why work here */}
      <section className="bg-white section-padding">
        <div className="container-wide">
          <ScrollReveal className="mb-16">
            <SectionLabel>Why Pentagon Creed</SectionLabel>
            <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-[#0B0F14] tracking-[-0.02em]">
              What makes this different.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#0B1F3A]/08">
            {whyWork.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08} className="bg-white p-8">
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#C9A84C] block mb-5">
                  0{i + 1}
                </span>
                <h3 className="text-lg font-bold text-[#0B0F14] mb-3">{item.title}</h3>
                <p className="text-sm text-[#98A2B3] leading-relaxed">{item.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open positions */}
      <section className="bg-[#F2F4F7] section-padding">
        <div className="container-wide">
          <ScrollReveal className="mb-16">
            <SectionLabel>Open Positions</SectionLabel>
            <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-[#0B0F14] tracking-[-0.02em]">
              Current openings.
            </h2>
          </ScrollReveal>

          {activeJobs.length === 0 ? (
            <ScrollReveal>
              <div className="py-16 flex flex-col items-start gap-4">
                <div className="w-12 h-12 border border-[#0B1F3A]/15 flex items-center justify-center">
                  <Briefcase className="h-5 w-5 text-[#98A2B3]" />
                </div>
                <h3 className="text-xl font-bold text-[#0B0F14]">No open positions right now.</h3>
                <p className="text-[#344054] max-w-lg">
                  We don't always have open roles listed, but we do consider speculative applications
                  from exceptional candidates. If you believe you belong here, send us your information.
                </p>
                <Link
                  href="/contact"
                  className="mt-4 h-12 px-6 bg-[#0B1F3A] text-white text-sm font-semibold inline-flex items-center gap-2 hover:bg-[#102d54] transition-colors group"
                >
                  Send a speculative application
                  <ArrowRight className="h-4 w-4 transition-transform duration-250 group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
          ) : (
            <div className="flex flex-col gap-4">
              {activeJobs.map((job, i) => (
                <ScrollReveal key={job.id} delay={i * 0.08}>
                  <Link
                    href={`/careers/${job.slug}`}
                    className="group block border border-[#0B1F3A]/10 bg-white hover:border-[#0B1F3A]/30 transition-colors p-8"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-[#0B0F14] group-hover:text-[#0B1F3A] transition-colors mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-xs text-[#98A2B3]">{job.department}</span>
                          <span className="w-1 h-1 rounded-full bg-[#98A2B3]" />
                          <span className="text-xs text-[#98A2B3]">{job.location}</span>
                          <span className="w-1 h-1 rounded-full bg-[#98A2B3]" />
                          <span className="text-xs text-[#98A2B3]">{job.employmentType}</span>
                          <span className="w-1 h-1 rounded-full bg-[#98A2B3]" />
                          <span className="text-xs text-[#98A2B3]">{job.experienceLevel}</span>
                        </div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-[#0B1F3A] opacity-30 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Career guides */}
      <section className="bg-white section-padding">
        <div className="container-wide">
          <ScrollReveal className="mb-16">
            <SectionLabel>Career Guides</SectionLabel>
            <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-[#0B0F14] tracking-[-0.02em] max-w-2xl">
              Starting a career in our industry.
            </h2>
            <p className="mt-6 text-lg text-[#344054] max-w-xl leading-relaxed">
              Whether you're entering the industry for the first time or transitioning from another field,
              these resources will help you understand the landscape and build the right foundations.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {careerAreas.map((area, i) => (
              <ScrollReveal key={area.area} delay={i * 0.06} className="border border-[#0B1F3A]/10 p-6 hover:border-[#0B1F3A]/30 transition-colors">
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#C9A84C] block mb-4">
                  {area.area}
                </span>
                <p className="text-sm text-[#344054]">{area.description}</p>
                <p className="text-xs text-[#98A2B3] mt-3">
                  Career guide articles coming soon via Insights.
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline={"Think you\nbelong here?"}
        subheadline="Send your CV and a note about what you'd bring to the team."
      />
    </>
  );
}
