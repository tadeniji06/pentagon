import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { insights, insightCategories, type InsightCategory } from '@/lib/data/insights';
import { formatDate } from '@/lib/utils';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Strategy, brand, SEO, market activation, media, and business articles from the Pentagon Creed Integrations team.',
  alternates: { canonical: 'https://www.pentagoncreedintegrations.com/insights' },
};

export default function InsightsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0B1F3A] pt-[140px] pb-20">
        <div className="container-wide">
          <ScrollReveal>
            <SectionLabel light>Insights</SectionLabel>
            <h1 className="mt-8 text-[52px] sm:text-[68px] lg:text-[80px] font-extrabold leading-[1.03] tracking-[-0.03em] text-white max-w-3xl">
              Ideas worth
              <br />
              <span className="text-[#C9A84C]">acting on.</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Articles grid */}
      <section className="bg-[#F2F4F7] section-padding">
        <div className="container-wide">
          {/* Category labels */}
          <div className="flex flex-wrap gap-2 mb-16">
            {(['All', ...insightCategories] as const).map((cat) => (
              <span
                key={cat}
                className="text-[10px] font-semibold tracking-[0.16em] uppercase px-4 py-2 border border-[#0B1F3A]/20 text-[#344054] cursor-default"
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#0B1F3A]/08">
            {insights.map((article, i) => (
              <ScrollReveal key={article.id} delay={i * 0.06} className="bg-white group">
                <Link href={`/insights/${article.slug}`} className="flex flex-col h-full p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#C9A84C]">
                      {article.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#98A2B3]" aria-hidden="true" />
                    <span className="text-[10px] text-[#98A2B3]">
                      {article.readingTimeMinutes} min
                    </span>
                  </div>
                  <h2 className="text-lg font-bold text-[#0B0F14] leading-snug tracking-[-0.01em] mb-4 flex-1 group-hover:text-[#0B1F3A] transition-colors">
                    {article.title}
                  </h2>
                  <p className="text-sm text-[#98A2B3] leading-relaxed mb-8 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-[#0B1F3A]/08 mt-auto">
                    <span className="text-xs text-[#98A2B3]">{formatDate(article.publishedAt)}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#0B1F3A] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
