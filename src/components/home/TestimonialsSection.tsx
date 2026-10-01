'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '@/lib/data/testimonials';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduce = useReducedMotion();

  const prev = () =>
    setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () =>
    setActiveIndex((i) => (i + 1) % testimonials.length);

  const current = testimonials[activeIndex];

  return (
    <section
      className="bg-white section-padding"
      id="testimonials"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-wide">
        <ScrollReveal className="mb-16">
          <SectionLabel number="07">Testimonials</SectionLabel>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto text-center relative min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={shouldReduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Quotation mark */}
              <div
                className="text-[120px] leading-none text-[#0B1F3A]/08 font-serif absolute -top-6 left-1/2 -translate-x-1/2 select-none pointer-events-none"
                aria-hidden="true"
              >
                "
              </div>

              <h2
                id="testimonials-heading"
                className="relative z-10 text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0B0F14] leading-[1.25] tracking-[-0.02em] mb-10 italic"
              >
                {current.isPlaceholder ? (
                  <span className="text-[#98A2B3] not-italic">
                    Client testimonials will appear here once approved.
                    <br />
                    <span className="text-sm font-normal">
                      See <code>/src/lib/data/testimonials.ts</code>
                    </span>
                  </span>
                ) : (
                  `"${current.quote}"`
                )}
              </h2>

              {!current.isPlaceholder && (
                <div className="flex flex-col items-center gap-1">
                  <span className="text-sm font-bold text-[#0B0F14]">{current.name}</span>
                  <span className="text-xs text-[#98A2B3]">
                    {current.role} · {current.company}
                  </span>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6 mt-12">
          <button
            onClick={prev}
            className="w-10 h-10 border border-[#0B1F3A]/20 flex items-center justify-center hover:bg-[#0B1F3A] hover:text-white hover:border-[#0B1F3A] transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          {/* Index dots */}
          <div className="flex gap-2" role="tablist" aria-label="Testimonial navigation">
            {testimonials.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === activeIndex}
                onClick={() => setActiveIndex(i)}
                className={`h-1 transition-all duration-300 ${
                  i === activeIndex ? 'w-6 bg-[#0B1F3A]' : 'w-2 bg-[#98A2B3]/40'
                }`}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 border border-[#0B1F3A]/20 flex items-center justify-center hover:bg-[#0B1F3A] hover:text-white hover:border-[#0B1F3A] transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
