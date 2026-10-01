import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { services, getServiceBySlug } from '@/lib/data/services';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import CTASection from '@/components/home/CTASection';
import ServiceFAQ from '@/components/services/ServiceFAQ';

// In Next.js 16 params is a Promise
type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.description,
    alternates: {
      canonical: `https://www.pentagoncreedintegrations.com/services/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      {/* Breadcrumb + back */}
      <div className="bg-[#F2F4F7] pt-[100px] pb-0">
        <div className="container-wide">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-[#98A2B3] hover:text-[#0B1F3A] transition-colors py-4"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All Services
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="bg-[#0B1F3A] pb-24">
        <div className="container-wide pt-12">
          <ScrollReveal>
            <SectionLabel light number={service.number}>{service.shortName}</SectionLabel>
            <h1 className="mt-8 text-[48px] sm:text-[64px] lg:text-[76px] font-extrabold leading-[1.04] tracking-[-0.03em] text-white max-w-3xl">
              {service.tagline}
            </h1>
            <p className="mt-8 text-lg text-white/55 max-w-xl leading-relaxed">
              {service.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Capabilities + Deliverables */}
      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Capabilities */}
            <ScrollReveal>
              <SectionLabel>What We Do</SectionLabel>
              <h2 className="mt-6 text-2xl lg:text-3xl font-bold text-[#0B0F14] tracking-[-0.01em] mb-10">
                Our {service.shortName} capabilities.
              </h2>
              <ul className="space-y-4">
                {service.capabilities.map((cap) => (
                  <li key={cap} className="flex items-start gap-3">
                    <CheckCircle2 className="h-4 w-4 text-[#C9A84C] mt-0.5 flex-shrink-0" />
                    <span className="text-[#344054] text-sm leading-relaxed">{cap}</span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Deliverables + Benefits */}
            <div className="space-y-12">
              <ScrollReveal delay={0.15}>
                <SectionLabel>Deliverables</SectionLabel>
                <h3 className="mt-6 text-xl font-bold text-[#0B0F14] mb-6">What you receive.</h3>
                <ul className="space-y-3">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0B1F3A] mt-2 flex-shrink-0" />
                      <span className="text-[#344054] text-sm">{d}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <SectionLabel>Benefits</SectionLabel>
                <h3 className="mt-6 text-xl font-bold text-[#0B0F14] mb-6">What changes for you.</h3>
                <ul className="space-y-3">
                  {service.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] mt-2 flex-shrink-0" />
                      <span className="text-[#344054] text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-[#F2F4F7] section-padding">
        <div className="container-wide">
          <ScrollReveal className="mb-16">
            <SectionLabel>Our Process</SectionLabel>
            <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-[#0B0F14] tracking-[-0.02em]">
              How we work.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-[#0B1F3A]/08">
            {service.process.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.08} className="bg-white p-8">
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#C9A84C] block mb-5">
                  0{step.step}
                </span>
                <h3 className="text-lg font-bold text-[#0B0F14] mb-3">{step.title}</h3>
                <p className="text-sm text-[#98A2B3] leading-relaxed">{step.description}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <ScrollReveal className="lg:col-span-4">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="mt-6 text-2xl lg:text-3xl font-bold text-[#0B0F14] tracking-[-0.01em]">
                Common questions about {service.shortName}.
              </h2>
            </ScrollReveal>
            <div className="lg:col-span-8">
              <ServiceFAQ faqs={service.faqs} />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        headline={`Ready to talk\nabout ${service.shortName}?`}
        subheadline={`Tell us about your situation and what you're trying to achieve. We'll respond within one business day.`}
      />
    </>
  );
}
