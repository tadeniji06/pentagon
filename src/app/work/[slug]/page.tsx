import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { caseStudies, getCaseStudyBySlug } from '@/lib/data/caseStudies';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import CTASection from '@/components/home/CTASection';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) return {};
  return {
    title: study.headline,
    description: study.subheadline,
    alternates: { canonical: `https://www.pentagoncreedintegrations.com/work/${slug}` },
  };
}

const sections = [
  { key: 'challenge', label: 'The Challenge' },
  { key: 'insight', label: 'The Insight' },
  { key: 'strategy', label: 'The Strategy' },
  { key: 'execution', label: 'The Execution' },
  { key: 'result', label: 'The Result' },
] as const;

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudyBySlug(slug);
  if (!study) notFound();

  return (
    <>
      <div className="bg-[#061426] pt-[100px] pb-0">
        <div className="container-wide">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-white/40 hover:text-white transition-colors py-4"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All Work
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#061426] pb-24">
        <div className="container-wide pt-12">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#C9A84C]">
                {study.industry}
              </span>
              <span className="w-1 h-1 rounded-full bg-white/20" aria-hidden="true" />
              <span className="text-[10px] text-white/30 uppercase tracking-wider font-semibold">{study.year}</span>
            </div>
            <h1 className="text-[48px] sm:text-[64px] lg:text-[76px] font-extrabold leading-[1.04] tracking-[-0.03em] text-white max-w-4xl mb-8">
              {study.headline}
            </h1>
            <p className="text-xl text-white/55 max-w-2xl leading-relaxed">{study.subheadline}</p>

            <div className="flex flex-wrap gap-2 mt-10">
              {study.services.map((s) => (
                <span
                  key={s}
                  className="text-[10px] font-semibold tracking-[0.12em] uppercase text-white/40 border border-white/15 px-4 py-1.5"
                >
                  {s}
                </span>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Generic abstract campaign graphic */}
      <div className="bg-[#0B1F3A] aspect-[16/6] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" viewBox="0 0 1000 400" preserveAspectRatio="none">
            <path d="M0,0 L1000,400 M1000,0 L0,400" stroke="white" strokeWidth="2" />
            <circle cx="500" cy="200" r="150" stroke="white" strokeWidth="2" fill="none" />
            <rect x="350" y="50" width="300" height="300" stroke="white" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>

      {/* Story sections */}
      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 lg:sticky lg:top-[100px] lg:self-start">
              <ScrollReveal>
                <SectionLabel>Case Study</SectionLabel>
                <div className="mt-8 space-y-1">
                  <div className="text-xs text-[#98A2B3]">Client</div>
                  <div className="text-sm font-semibold text-[#0B0F14]">{study.client}</div>
                </div>
                <div className="mt-4 space-y-1">
                  <div className="text-xs text-[#98A2B3]">Industry</div>
                  <div className="text-sm font-semibold text-[#0B0F14]">{study.industry}</div>
                </div>
                <div className="mt-4 space-y-1">
                  <div className="text-xs text-[#98A2B3]">Services</div>
                  <div className="flex flex-col gap-1">
                    {study.services.map((s) => (
                      <div key={s} className="text-sm font-semibold text-[#0B0F14]">{s}</div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-8 space-y-16">
              {sections.map(({ key, label }) => {
                const content = study[key];
                if (!content) return null;
                return (
                  <ScrollReveal key={key}>
                    <SectionLabel>{label}</SectionLabel>
                    <p className="mt-6 text-lg text-[#344054] leading-relaxed">{content}</p>
                  </ScrollReveal>
                );
              })}


            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline={"Want results\nlike these?"}
        subheadline="Request a consultation and let's discuss what's possible for your business."
      />
    </>
  );
}
