'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { track } from '@/lib/analytics';
import ScrollReveal from '@/components/ui/ScrollReveal';

interface CTASectionProps {
  headline?: string;
  subheadline?: string;
  light?: boolean;
}

export default function CTASection({
  headline = "Let's build something\nthat moves.",
  subheadline = "Tell us about your organisation. We'll tell you what's possible.",
  light = false,
}: CTASectionProps) {
  const lines = headline.split('\n');

  return (
    <section
      className={`${light ? 'bg-[#F2F4F7]' : 'bg-[#061426]'} relative overflow-hidden`}
      style={{ paddingTop: '100px', paddingBottom: '100px' }}
      aria-labelledby="cta-heading"
    >
      {/* Subtle geometric decoration */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none"
        aria-hidden="true"
      >
        <svg width="600" height="600" viewBox="0 0 400 400" fill="none">
          <path
            d="M200 20L372 132.4L310.8 360H89.2L28 132.4L200 20Z"
            stroke={light ? '#0B1F3A' : 'white'}
            strokeWidth="1"
          />
          <path
            d="M200 60L330 149.3L285.4 308H114.6L70 149.3L200 60Z"
            stroke={light ? '#0B1F3A' : 'white'}
            strokeWidth="0.75"
          />
          <path
            d="M200 100L288 166.2L259.9 255H140.1L112 166.2L200 100Z"
            stroke={light ? '#0B1F3A' : 'white'}
            strokeWidth="0.5"
          />
        </svg>
      </div>

      <div className="container-wide relative z-10">
        <ScrollReveal>
          <div className="max-w-4xl">
            <h2
              id="cta-heading"
              className={`text-[52px] sm:text-[68px] lg:text-[80px] font-extrabold leading-[1.02] tracking-[-0.03em] mb-8 ${
                light ? 'text-[#0B0F14]' : 'text-white'
              }`}
            >
              {lines.map((line, i) => (
                <span key={i} className="block">
                  {i === lines.length - 1 && !light ? (
                    <>
                      {line.replace('moves.', '')}{' '}
                      <span className="text-[#C9A84C]">moves.</span>
                    </>
                  ) : (
                    line
                  )}
                </span>
              ))}
            </h2>

            <p
              className={`text-xl leading-relaxed mb-12 max-w-xl ${
                light ? 'text-[#344054]' : 'text-white/55'
              }`}
            >
              {subheadline}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                onClick={() => track('cta_click', { label: 'section-cta-primary' })}
                className={`h-14 px-8 inline-flex items-center gap-3 text-sm font-bold group transition-colors ${
                  light
                    ? 'bg-[#0B1F3A] text-white hover:bg-[#102d54]'
                    : 'bg-white text-[#0B1F3A] hover:bg-white/90'
                }`}
              >
                Request a Consultation
                <ArrowRight className="h-4 w-4 transition-transform duration-250 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                onClick={() => track('cta_click', { label: 'section-cta-secondary' })}
                className={`h-14 px-8 inline-flex items-center gap-3 text-sm font-semibold border transition-all ${
                  light
                    ? 'border-[#0B1F3A]/25 text-[#0B1F3A] hover:border-[#0B1F3A]/50'
                    : 'border-white/25 text-white hover:border-white/50 hover:bg-white/5'
                }`}
              >
                Talk to an Expert
              </Link>
            </div>

            {/* Contact detail nudge */}
            <div className={`mt-12 pt-12 border-t flex flex-wrap gap-8 ${light ? 'border-[#0B1F3A]/10' : 'border-white/10'}`}>
              <a
                href="mailto:hello@pentagoncreedintegrations.com"
                onClick={() => track('cta_click', { label: 'cta-email' })}
                className={`text-sm transition-colors ${light ? 'text-[#344054] hover:text-[#0B1F3A]' : 'text-white/50 hover:text-white'}`}
              >
                hello@pentagoncreedintegrations.com
              </a>
              <a
                href="tel:[PLACEHOLDER]"
                onClick={() => track('phone_click', { label: 'cta-phone' })}
                className={`text-sm transition-colors ${light ? 'text-[#344054] hover:text-[#0B1F3A]' : 'text-white/50 hover:text-white'}`}
              >
                [Phone — PLACEHOLDER]
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
