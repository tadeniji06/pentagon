import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { caseStudies } from '@/lib/data/caseStudies';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import ParallaxImage from '@/components/ui/ParallaxImage';

export default function FeaturedWork() {
  return (
    <section
      className="bg-[#061426] section-padding"
      id="work"
      aria-labelledby="work-heading"
    >
      <div className="container-wide">
        {/* Header */}
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 lg:mb-20">
          <div>
            <SectionLabel number="04" light>Selected Work</SectionLabel>
            <h2
              id="work-heading"
              className="mt-6 text-[42px] sm:text-[52px] font-extrabold leading-[1.06] tracking-[-0.02em] text-white"
            >
              What we've
              <br />built.
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-colors group self-start sm:self-end"
          >
            View all work
            <ArrowRight className="h-4 w-4 transition-transform duration-250 group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>

        {/* Case study cards */}
        <div className="flex flex-col gap-6">
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.id} study={study} index={i} />
          ))}
        </div>


      </div>
    </section>
  );
}

function CaseStudyCard({
  study,
  index,
}: {
  study: (typeof caseStudies)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <ScrollReveal delay={index * 0.1}>
      <Link href={`/work/${study.slug}`} className="group block">
        <div
          className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-0 border border-white/08 hover:border-white/20 transition-colors duration-500 overflow-hidden`}
        >
          {/* Image area with Parallax */}
          <div className="w-full lg:w-[55%] lg:min-h-[320px] relative">
            <ParallaxImage
              aspectRatio="aspect-[3/2] lg:aspect-auto h-full w-full"
              speed={0.15}
              className="bg-[#0B1F3A]/60"
            >
              {/* Optional overlay on hover */}
              <div className="absolute inset-0 bg-[#061426]/0 group-hover:bg-[#061426]/20 transition-colors duration-500 z-20 pointer-events-none" />
              
              {/* Placeholder abstract graphic inside parallax */}
              <div className="absolute inset-0 flex items-center justify-center opacity-30 z-10">
                <svg width="200" height="200" viewBox="0 0 400 400" fill="none">
                   <circle cx="200" cy="200" r="150" stroke="white" strokeWidth="2" strokeDasharray="10 10"/>
                   <rect x="100" y="100" width="200" height="200" stroke="#C9A84C" strokeWidth="1" transform="rotate(45 200 200)"/>
                </svg>
              </div>
            </ParallaxImage>
          </div>

          {/* Content */}
          <div className="w-full lg:w-[45%] p-8 lg:p-12 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#C9A84C]">
                  {study.industry}
                </span>
                <span className="w-1 h-1 rounded-full bg-white/20" aria-hidden="true" />
                <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/30">
                  {study.year}
                </span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white leading-tight tracking-[-0.01em] mb-4 group-hover:text-white transition-colors">
                {study.headline}
              </h3>
              <p className="text-sm text-white/50 leading-relaxed mb-8">
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
            <div className="mt-8 pt-8 border-t border-white/08">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 group-hover:text-white transition-colors">
                View Case Study
                <ArrowRight className="h-4 w-4 transition-transform duration-250 group-hover:translate-x-1" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </ScrollReveal>
  );
}
