'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { services } from '@/lib/data/services';
import { staggerContainer, fadeUp } from '@/lib/animations';
import ScrollReveal, { StaggerReveal, RevealItem } from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const shouldReduce = useReducedMotion();

  return (
    <section
      className="bg-[#F2F4F7] section-padding"
      id="services"
      aria-labelledby="services-heading"
    >
      <div className="container-wide">
        {/* Section intro — editorial two-column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-20">
          <div>
            <ScrollReveal>
              <SectionLabel number="02">What We Do</SectionLabel>
              <h2
                id="services-heading"
                className="mt-6 text-[42px] sm:text-[52px] font-extrabold leading-[1.06] tracking-[-0.02em] text-[#0B0F14]"
              >
                Five disciplines.
                <br />
                One integrated
                <br />
                <span className="text-[#0B1F3A]">strategy.</span>
              </h2>
            </ScrollReveal>
          </div>
          <div className="flex flex-col justify-end">
            <ScrollReveal delay={0.15}>
              <p className="text-lg text-[#344054] leading-relaxed mb-8 max-w-lg">
                We don't offer services in silos. Every capability we bring to your business is
                connected to a broader strategic intent — ensuring that what we do in one area
                strengthens everything else.
              </p>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F3A] group"
              >
                All Services
                <ArrowRight className="h-4 w-4 transition-transform duration-250 group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* Services list — editorial rows */}
        <StaggerReveal className="border-t border-[#0B1F3A]/10">
          {services.map((service) => (
            <RevealItem key={service.id}>
              <ServiceRow
                service={service}
                isHovered={hoveredId === service.id}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
                anyHovered={hoveredId !== null}
              />
            </RevealItem>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}

interface ServiceRowProps {
  service: (typeof services)[0];
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  anyHovered: boolean;
}

function ServiceRow({
  service,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  anyHovered,
}: ServiceRowProps) {
  const shouldReduce = useReducedMotion();

  return (
    <Link
      href={`/services/${service.slug}`}
      className="block group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        className="relative flex items-start sm:items-center gap-6 lg:gap-10 py-8 sm:py-10 border-b border-[#0B1F3A]/10 transition-colors duration-300"
        animate={
          shouldReduce
            ? {}
            : { opacity: anyHovered && !isHovered ? 0.45 : 1 }
        }
        transition={{ duration: 0.25 }}
      >
        {/* Background fill on hover */}
        <motion.div
          className="absolute inset-0 bg-[#0B1F3A]/[0.04] pointer-events-none"
          initial={shouldReduce ? false : { scaleX: 0, originX: 0 }}
          animate={shouldReduce ? {} : { scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        />

        {/* Number */}
        <span
          className="text-[11px] font-bold tracking-[0.25em] text-[#C9A84C] w-8 flex-shrink-0 pt-1 sm:pt-0"
          aria-hidden="true"
        >
          {service.number}
        </span>

        {/* Name */}
        <div className="flex-1 min-w-0">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#0B0F14] tracking-[-0.01em] group-hover:text-[#0B1F3A] transition-colors leading-tight">
            {service.name}
          </h3>
          <p className="mt-2 text-sm sm:text-base text-[#98A2B3] max-w-xl">
            {service.tagline}
          </p>
        </div>

        {/* Arrow */}
        <div className="flex-shrink-0 ml-auto pl-4">
          <motion.div
            animate={shouldReduce ? {} : { x: isHovered ? 6 : 0 }}
            transition={{ duration: 0.25 }}
          >
            <ArrowRight className="h-5 w-5 text-[#0B1F3A] opacity-40 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}
