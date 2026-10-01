import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '@/lib/data/caseStudies';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Selected work and case studies from Pentagon Creed Integrations — brand development, market activation, web development, SEO, and media advisory.',
  alternates: { canonical: 'https://www.pentagoncreedintegrations.com/work' },
};

export default function WorkPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#061426] pt-[140px] pb-20">
        <div className="container-wide">
          <ScrollReveal>
            <SectionLabel light>Work</SectionLabel>
            <h1 className="mt-8 text-[52px] sm:text-[68px] lg:text-[80px] font-extrabold leading-[1.03] tracking-[-0.03em] text-white max-w-3xl">
              Where strategy
              <br />
              became <span className="text-[#C9A84C]">results.</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-[#061426] pb-20">
        <div className="container-wide">
          <div className="flex flex-col gap-4">
            {caseStudies.map((study, i) => (
              <ScrollReveal key={study.id} delay={i * 0.1}>
                <Link
                  href={`/work/${study.slug}`}
                  className="group block border border-white/08 hover:border-white/20 transition-colors p-8 lg:p-12"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#C9A84C]">
                          {study.industry}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-white/20" aria-hidden="true" />
                        <span className="text-[10px] font-semibold text-white/30 uppercase tracking-wider">
                          {study.year}
                        </span>
                      </div>
                      <h2 className="text-2xl lg:text-3xl font-bold text-white leading-tight tracking-[-0.01em] mb-4 group-hover:text-white transition-colors">
                        {study.headline}
                      </h2>
                      <p className="text-[#98A2B3] text-sm leading-relaxed max-w-2xl mb-6">
                        {study.subheadline}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {study.services.map((s) => (
                          <span
                            key={s}
                            className="text-[10px] font-semibold tracking-[0.12em] uppercase text-white/40 border border-white/10 px-3 py-1"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/40 group-hover:text-white transition-colors">
                        View Case Study
                        <ArrowRight className="h-4 w-4 transition-transform duration-250 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>


        </div>
      </section>

      <CTASection />
    </>
  );
}
