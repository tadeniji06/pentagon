import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';

const activationSteps = [
  { label: 'Insight', description: 'Consumer & market research' },
  { label: 'Strategy', description: 'Activation planning & objectives' },
  { label: 'Creative', description: 'Campaign concept & assets' },
  { label: 'Activation', description: 'On-ground deployment & management' },
  { label: 'Engagement', description: 'Consumer connection & trial' },
  { label: 'Measurement', description: 'Reporting & strategic learning' },
];

const capabilities = [
  'Digital Marketing',
  'Traditional Marketing',
  'Product Marketing (Market Activation)',
  'Email Marketing',
  'Influencer Marketing',
];

export default function GeneralMarketingFeature() {
  return (
    <section
      className="bg-white section-padding"
      id="general-marketing"
      aria-labelledby="activation-heading"
    >
      <div className="container-wide">
        {/* Asymmetric layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — process chain */}
          <ScrollReveal>
            <SectionLabel number="05">General Marketing</SectionLabel>

            <h2
              id="activation-heading"
              className="mt-6 text-[42px] sm:text-[52px] font-extrabold leading-[1.06] tracking-[-0.02em] text-[#0B0F14]"
            >
              From insight
              <br />to impact.
            </h2>

            {/* Process chain */}
            <div className="mt-12 relative">
              {/* Vertical connector */}
              <div
                className="absolute left-[15px] top-5 bottom-5 w-px bg-gradient-to-b from-[#C9A84C]/60 via-[#0B1F3A]/20 to-transparent"
                aria-hidden="true"
              />

              <div className="flex flex-col gap-0">
                {activationSteps.map((step, i) => (
                  <div key={step.label} className="flex items-start gap-5 py-4 relative">
                    {/* Dot */}
                    <div className="w-[30px] flex-shrink-0 flex items-center justify-center relative z-10">
                      <div
                        className="w-3 h-3 rounded-full border-2"
                        style={{
                          borderColor: i === 0 ? '#C9A84C' : 'rgba(11,31,58,0.2)',
                          backgroundColor: i === 0 ? '#C9A84C' : 'transparent',
                        }}
                      />
                    </div>
                    <div>
                      <span className="text-sm font-bold text-[#0B0F14] block">{step.label}</span>
                      <span className="text-xs text-[#98A2B3] mt-0.5 block">{step.description}</span>
                    </div>
                    {/* Arrow between steps */}
                    {i < activationSteps.length - 1 && (
                      <div className="absolute left-[13px] bottom-0 text-[#0B1F3A]/10 text-xs" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right — editorial copy */}
          <ScrollReveal delay={0.2} className="flex flex-col justify-center">
            <p className="text-xl text-[#344054] leading-relaxed mb-8">
              General marketing is where strategy proves itself. It's the difference between a
              brand that people know and a brand that people choose.
            </p>
            <p className="text-base text-[#98A2B3] leading-relaxed mb-10">
              We plan, design, and execute activation campaigns that create real-world brand
              connection — from consumer sampling and retail deployment to full-scale
              experiential events. Every touchpoint is managed. Every outcome is measured.
            </p>

            {/* Capability tags */}
            <div className="flex flex-wrap gap-2 mb-12">
              {capabilities.map((cap) => (
                <span
                  key={cap}
                  className="text-[10px] font-semibold tracking-[0.12em] uppercase text-[#0B1F3A] border border-[#0B1F3A]/20 px-3 py-1.5"
                >
                  {cap}
                </span>
              ))}
            </div>

            {/* Distinctive navy block */}
            <div className="bg-[#0B1F3A] p-8">
              <p className="text-sm font-semibold text-white/60 mb-3 tracking-wide uppercase text-[10px] tracking-[0.18em]">
                A strategic capability
              </p>
              <p className="text-white text-lg font-bold leading-snug mb-6">
                "The market doesn't wait for perfect. We build activation campaigns that move
                fast, land precisely, and generate the data that improves the next one."
              </p>
              <Link
                href="/services/general-marketing"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#C9A84C] group"
              >
                Explore General Marketing
                <ArrowRight className="h-4 w-4 transition-transform duration-250 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
