'use client';

import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const marqueeItems = [
  'SEO',
  'Web Development',
  'Brand Strategy',
  'General Marketing',
  'Media Advisory',
  'Consumer Engagement',
  'Digital Experience',
  'Brand Identity',
  'Campaign Execution',
  'Search Visibility',
  'Reputation Management',
  'Business Growth',
];

export default function MarqueeBar() {
  const shouldReduce = useReducedMotion();
  const items = [...marqueeItems, ...marqueeItems]; // duplicate for seamless loop

  return (
    <div
      className="relative bg-white border-y border-[#0B1F3A]/08 overflow-hidden py-4"
      aria-hidden="true"
    >
      {/* Fade edges */}
      <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-12 w-max"
        animate={shouldReduce ? {} : { x: ['0%', '-50%'] }}
        transition={{
          duration: 30,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        }}
      >
        {items.map((item, i) => (
          <div key={`${item}-${i}`} className="flex items-center gap-12 flex-shrink-0">
            <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-[#98A2B3] whitespace-nowrap">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#C9A84C] flex-shrink-0" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
