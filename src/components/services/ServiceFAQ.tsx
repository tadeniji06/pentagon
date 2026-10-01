'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import type { Service } from '@/lib/data/services';

export default function ServiceFAQ({ faqs }: { faqs: Service['faqs'] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduce = useReducedMotion();

  return (
    <div className="divide-y divide-[#0B1F3A]/10" role="list">
      {faqs.map((faq, i) => (
        <div key={i} role="listitem">
          <button
            className="w-full flex items-start gap-4 py-6 text-left group"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
          >
            <span
              className="flex-shrink-0 w-5 h-5 border border-[#0B1F3A]/30 flex items-center justify-center mt-0.5 group-hover:border-[#0B1F3A] transition-colors"
              aria-hidden="true"
            >
              {openIndex === i ? (
                <Minus className="h-3 w-3 text-[#0B1F3A]" />
              ) : (
                <Plus className="h-3 w-3 text-[#0B1F3A]" />
              )}
            </span>
            <span className="text-base font-semibold text-[#0B0F14] group-hover:text-[#0B1F3A] transition-colors">
              {faq.question}
            </span>
          </button>
          <AnimatePresence initial={false}>
            {openIndex === i && (
              <motion.div
                initial={shouldReduce ? false : { height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="overflow-hidden"
              >
                <p className="pb-6 pl-9 text-[#344054] leading-relaxed text-sm">
                  {faq.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
