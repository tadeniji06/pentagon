import type { Metadata } from 'next';
import { testimonials } from '@/lib/data/testimonials';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'What our clients say about working with Pentagon Creed Integrations.',
  alternates: { canonical: 'https://www.pentagoncreedintegrations.com/testimonials' },
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-[#0B1F3A] pt-[140px] pb-20">
        <div className="container-wide">
          <ScrollReveal>
            <SectionLabel light>Testimonials</SectionLabel>
            <h1 className="mt-8 text-[52px] sm:text-[68px] font-extrabold leading-[1.03] tracking-[-0.03em] text-white max-w-2xl">
              What clients
              <br />
              <span className="text-[#C9A84C]">say.</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-wide">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#0B1F3A]/08">
              {testimonials.map((t, i) => (
                <ScrollReveal key={t.id} delay={i * 0.1} className="bg-white p-10 lg:p-16">
                  <div
                    className="text-[64px] leading-none text-[#0B1F3A]/10 font-serif mb-4 select-none"
                    aria-hidden="true"
                  >
                    "
                  </div>
                  <blockquote className="text-xl font-semibold text-[#0B0F14] leading-[1.4] tracking-[-0.01em] italic mb-8">
                    "{t.quote}"
                  </blockquote>
                  <div>
                    <div className="text-sm font-bold text-[#0B0F14]">{t.name}</div>
                    <div className="text-xs text-[#98A2B3] mt-1">
                      {t.role} · {t.company}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
        </div>
      </section>

      <CTASection
        light
        headline={"Ready to become\na success story?"}
        subheadline="Request a consultation and let's discuss what we can build together."
      />
    </>
  );
}
