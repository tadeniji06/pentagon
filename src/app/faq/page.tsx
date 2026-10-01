import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import FAQAccordion from '@/components/shared/FAQAccordion';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Answers to common questions about Pentagon Creed Integrations — services, pricing, process, timelines, and more.',
  alternates: { canonical: 'https://www.pentagoncreedintegrations.com/faq' },
};

export default function FAQPage() {
  return (
    <>
      <section className="bg-[#0B1F3A] pt-[140px] pb-20">
        <div className="container-wide">
          <ScrollReveal>
            <SectionLabel light>FAQ</SectionLabel>
            <h1 className="mt-8 text-[52px] sm:text-[68px] font-extrabold leading-[1.03] tracking-[-0.03em] text-white max-w-2xl">
              Questions,
              <br />
              <span className="text-[#C9A84C]">answered.</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-white section-padding">
        <div className="container-wide max-w-4xl">
          <FAQAccordion />
        </div>
      </section>

      <CTASection
        light
        headline={"Still have\nquestions?"}
        subheadline="Reach out directly. We're happy to answer anything not covered here."
      />
    </>
  );
}
