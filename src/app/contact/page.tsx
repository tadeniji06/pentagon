import type { Metadata } from 'next';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/forms/ContactForm';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Pentagon Creed Integrations. Request a consultation, ask a question, or start a conversation about your business.',
  alternates: { canonical: 'https://www.pentagoncreedintegrations.com/contact' },
};

const contactDetails = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@pentagoncreedintegrations.com',
    href: 'mailto:hello@pentagoncreedintegrations.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '[Phone — PLACEHOLDER]',
    href: 'tel:[PLACEHOLDER]',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '[WhatsApp — PLACEHOLDER]',
    href: 'https://wa.me/[PLACEHOLDER]',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: '[Address — PLACEHOLDER]',
    href: undefined,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0B1F3A] pt-[140px] pb-20">
        <div className="container-wide">
          <ScrollReveal>
            <SectionLabel light>Contact</SectionLabel>
            <h1 className="mt-8 text-[52px] sm:text-[68px] font-extrabold leading-[1.03] tracking-[-0.03em] text-white max-w-2xl">
              Let's start a
              <br />
              <span className="text-[#C9A84C]">conversation.</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-white section-padding">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

            {/* Form */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <SectionLabel>Send a Message</SectionLabel>
                <h2 className="mt-6 text-2xl font-bold text-[#0B0F14] mb-10 tracking-[-0.01em]">
                  Tell us about your business.
                </h2>
                <ContactForm />
              </ScrollReveal>
            </div>

            {/* Contact details */}
            <div className="lg:col-span-5">
              <ScrollReveal delay={0.2}>
                <SectionLabel>Direct Contact</SectionLabel>
                <h2 className="mt-6 text-2xl font-bold text-[#0B0F14] mb-10 tracking-[-0.01em]">
                  Prefer to reach out directly?
                </h2>

                <div className="space-y-8">
                  {contactDetails.map(({ icon: Icon, label, value, href }) => (
                    <div key={label} className="flex items-start gap-4">
                      <div className="w-10 h-10 border border-[#0B1F3A]/15 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-4 w-4 text-[#0B1F3A]" />
                      </div>
                      <div>
                        <div className="text-[10px] font-semibold tracking-[0.18em] uppercase text-[#98A2B3] mb-1">
                          {label}
                        </div>
                        {href ? (
                          <a
                            href={href}
                            className="text-sm text-[#344054] hover:text-[#0B1F3A] transition-colors"
                          >
                            {value}
                          </a>
                        ) : (
                          <span className="text-sm text-[#98A2B3]">{value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Response time promise */}
                <div className="mt-12 p-6 bg-[#F2F4F7] border-l-2 border-[#0B1F3A]">
                  <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#98A2B3] mb-2">
                    Our commitment
                  </p>
                  <p className="text-sm text-[#344054] leading-relaxed">
                    We respond to all enquiries within <strong>one business day</strong>.
                    For urgent matters, please call or WhatsApp directly.
                  </p>
                </div>

                {/* Map placeholder */}
                <div className="mt-8 aspect-[4/3] bg-[#F2F4F7] flex items-center justify-center border border-[#0B1F3A]/10">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-[#98A2B3] mx-auto mb-2" />
                    <p className="text-xs text-[#98A2B3] tracking-wider">
                      Google Maps — PLACEHOLDER
                    </p>
                    <p className="text-[10px] text-[#98A2B3]/60 mt-1">
                      Embed once office address is confirmed
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
