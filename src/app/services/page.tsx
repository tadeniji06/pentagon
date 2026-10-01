import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/data/services';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'SEO, Web Development, Brand Development, Market Activation, and Media Advisory — five integrated disciplines, one strategic partner.',
  alternates: { canonical: 'https://www.pentagoncreedintegrations.com/services' },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0B1F3A] pt-[140px] pb-20">
        <div className="container-wide">
          <ScrollReveal>
            <SectionLabel light>Services</SectionLabel>
            <h1 className="mt-8 text-[52px] sm:text-[68px] lg:text-[80px] font-extrabold leading-[1.03] tracking-[-0.03em] text-white max-w-3xl">
              Five disciplines.
              <br />
              One partner.{' '}
              <span className="text-[#C9A84C]">Fully integrated.</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-white section-padding">
        <div className="container-wide">
          {services.map((service, i) => (
            <ScrollReveal key={service.id} delay={i * 0.08}>
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 py-16 ${i < services.length - 1 ? 'border-b border-[#0B1F3A]/10' : ''}`}>
                <div className="lg:col-span-4">
                  <span className="text-[10px] font-bold tracking-[0.25em] text-[#C9A84C] block mb-4">
                    {service.number}
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold text-[#0B0F14] leading-tight tracking-[-0.01em] mb-4">
                    {service.name}
                  </h2>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F3A] group mt-2"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform duration-250 group-hover:translate-x-1" />
                  </Link>
                </div>
                <div className="lg:col-span-8">
                  <p className="text-lg text-[#344054] leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="text-[10px] font-semibold tracking-[0.1em] uppercase text-[#344054] border border-[#0B1F3A]/15 px-3 py-1.5"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
