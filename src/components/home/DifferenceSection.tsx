'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, useReducedMotion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    number: '01',
    title: 'Discover',
    description:
      'We invest time understanding your business, market, and the people you serve — before we offer any recommendations.',
  },
  {
    number: '02',
    title: 'Define',
    description:
      'We sharpen the strategic brief. What is the real problem? What does success look like? What constraints shape the solution?',
  },
  {
    number: '03',
    title: 'Design',
    description:
      'We create the strategy, identity, campaign, or system that addresses the defined problem — with evidence and intent.',
  },
  {
    number: '04',
    title: 'Deploy',
    description:
      'We execute with precision. Whether digital, in-market, or in-media — the plan moves from document to reality.',
  },
  {
    number: '05',
    title: 'Deliver',
    description:
      'We measure what matters, report with transparency, and use what we learn to make the next cycle stronger.',
  },
];

export default function DifferenceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (shouldReduce || !lineRef.current || !sectionRef.current) return;

    const line = lineRef.current;
    const totalLength = line.getTotalLength?.() ?? 0;

    gsap.set(line, {
      strokeDasharray: totalLength,
      strokeDashoffset: totalLength,
    });

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top 70%',
      end: 'bottom 30%',
      scrub: 1,
      onUpdate: (self) => {
        gsap.set(line, {
          strokeDashoffset: totalLength * (1 - self.progress),
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [shouldReduce]);

  return (
    <section
      ref={sectionRef}
      className="bg-white section-padding overflow-hidden"
      id="difference"
      aria-labelledby="difference-heading"
    >
      <div className="container-wide">
        <ScrollReveal className="mb-16 lg:mb-24">
          <SectionLabel number="03">How We Think</SectionLabel>
          <h2
            id="difference-heading"
            className="mt-6 text-[42px] sm:text-[52px] font-extrabold leading-[1.06] tracking-[-0.02em] text-[#0B0F14] max-w-2xl"
          >
            The Pentagon Creed
            <br />
            <span className="text-[#0B1F3A]">framework.</span>
          </h2>
          <p className="mt-6 text-lg text-[#344054] max-w-xl leading-relaxed">
            Every engagement follows the same structured approach — because repeatable discipline
            is what separates good work from consistently excellent work.
          </p>
        </ScrollReveal>

        {/* Steps — horizontal desktop, vertical mobile */}
        <div className="relative">
          {/* Connecting SVG line (desktop only) */}
          <div className="hidden lg:block absolute top-[2.5rem] left-[4rem] right-[4rem] pointer-events-none" aria-hidden="true">
            <svg
              className="w-full"
              height="4"
              viewBox="0 0 1000 4"
              preserveAspectRatio="none"
            >
              <line
                ref={lineRef}
                x1="0"
                y1="2"
                x2="1000"
                y2="2"
                stroke="#C9A84C"
                strokeWidth="1.5"
                opacity="0.5"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4">
            {steps.map((step, i) => (
              <StepCard
                key={step.number}
                step={step}
                index={i}
                shouldReduce={shouldReduce ?? false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepCard({
  step,
  index,
  shouldReduce,
}: {
  step: (typeof steps)[0];
  index: number;
  shouldReduce: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (shouldReduce || !ref.current) return;

    gsap.from(ref.current, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      ease: 'power3.out',
      delay: index * 0.1,
      scrollTrigger: {
        trigger: ref.current,
        start: 'top 80%',
        once: true,
      },
    });
  }, [shouldReduce, index]);

  return (
    <div ref={ref} className="flex flex-col">
      {/* Number + dot */}
      <div className="flex items-center gap-3 mb-6 lg:flex-col lg:items-start lg:gap-0">
        <div className="w-5 h-5 rounded-full border-2 border-[#C9A84C] flex items-center justify-center flex-shrink-0 lg:mb-4">
          <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
        </div>
        <span className="text-[11px] font-bold tracking-[0.25em] text-[#C9A84C] lg:mt-0">
          {step.number}
        </span>
      </div>

      <h3 className="text-xl font-bold text-[#0B0F14] mb-3 tracking-[-0.01em]">
        {step.title}
      </h3>
      <p className="text-sm text-[#98A2B3] leading-relaxed">{step.description}</p>
    </div>
  );
}
