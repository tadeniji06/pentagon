'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { faqs, faqCategories, type FAQCategory, getFAQsByCategory } from '@/lib/data/faqs';

export default function FAQAccordion() {
  const [activeCategory, setActiveCategory] = useState<FAQCategory | 'All'>('All');
  const [openId, setOpenId] = useState<string | null>(null);
  const shouldReduce = useReducedMotion();

  const filteredFAQs =
    activeCategory === 'All' ? faqs : getFAQsByCategory(activeCategory);

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-2 mb-12">
        {(['All', ...faqCategories] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setActiveCategory(cat as FAQCategory | 'All');
              setOpenId(null);
            }}
            className={`text-[10px] font-semibold tracking-[0.16em] uppercase px-4 py-2 border transition-colors ${
              activeCategory === cat
                ? 'bg-[#0B1F3A] text-white border-[#0B1F3A]'
                : 'border-[#0B1F3A]/20 text-[#344054] hover:border-[#0B1F3A]/50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ items */}
      <div className="divide-y divide-[#0B1F3A]/10" role="list">
        {filteredFAQs.map((faq) => (
          <div key={faq.id} role="listitem">
            <button
              className="w-full flex items-start justify-between gap-6 py-6 text-left group"
              onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
              aria-expanded={openId === faq.id}
            >
              <span className="text-base font-semibold text-[#0B0F14] group-hover:text-[#0B1F3A] transition-colors">
                {faq.question}
              </span>
              <span
                className="flex-shrink-0 w-6 h-6 border border-[#0B1F3A]/25 flex items-center justify-center mt-0.5 group-hover:border-[#0B1F3A] transition-colors"
                aria-hidden="true"
              >
                {openId === faq.id ? (
                  <Minus className="h-3.5 w-3.5 text-[#0B1F3A]" />
                ) : (
                  <Plus className="h-3.5 w-3.5 text-[#0B1F3A]" />
                )}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {openId === faq.id && (
                <motion.div
                  initial={shouldReduce ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-[#344054] leading-relaxed">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}
