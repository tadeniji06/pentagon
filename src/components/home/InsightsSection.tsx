import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { insights } from '@/lib/data/insights';
import { formatDate } from '@/lib/utils';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';

export default function InsightsSection() {
  const featured = insights[0];
  const secondary = insights.slice(1, 3);

  return (
    <section
      className="bg-[#F2F4F7] section-padding"
      id="insights"
      aria-labelledby="insights-heading"
    >
      <div className="container-wide">
        {/* Header */}
        <ScrollReveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16">
          <div>
            <SectionLabel number="06">Insights</SectionLabel>
            <h2
              id="insights-heading"
              className="mt-6 text-[42px] sm:text-[52px] font-extrabold leading-[1.06] tracking-[-0.02em] text-[#0B0F14]"
            >
              What we're
              <br />thinking about.
            </h2>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F3A] group self-start sm:self-end"
          >
            Read all insights
            <ArrowRight className="h-4 w-4 transition-transform duration-250 group-hover:translate-x-1" />
          </Link>
        </ScrollReveal>

        {/* Editorial grid: 1 large + 2 smaller */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-[#0B1F3A]/08">
          {/* Featured article */}
          <ScrollReveal className="lg:col-span-7 bg-white group">
            <Link href={`/insights/${featured.slug}`} className="flex flex-col h-full p-8 lg:p-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#C9A84C]">
                  {featured.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-[#98A2B3]" aria-hidden="true" />
                <span className="text-[10px] text-[#98A2B3] tracking-wide">
                  {featured.readingTimeMinutes} min read
                </span>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-[#0B0F14] leading-tight tracking-[-0.01em] mb-6 group-hover:text-[#0B1F3A] transition-colors flex-1">
                {featured.title}
              </h3>
              <p className="text-base text-[#344054] leading-relaxed mb-8 line-clamp-3">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between pt-8 border-t border-[#0B1F3A]/08">
                <span className="text-xs text-[#98A2B3]">{formatDate(featured.publishedAt)}</span>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F3A] group-hover:gap-3 transition-all">
                  Read
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </ScrollReveal>

          {/* Secondary articles */}
          <div className="lg:col-span-5 flex flex-col gap-px">
            {secondary.map((article, i) => (
              <ScrollReveal key={article.id} delay={0.1 * (i + 1)} className="bg-white group flex-1">
                <Link href={`/insights/${article.slug}`} className="flex flex-col h-full p-8">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#C9A84C]">
                      {article.category}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-[#98A2B3]" aria-hidden="true" />
                    <span className="text-[10px] text-[#98A2B3]">
                      {article.readingTimeMinutes} min
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0B0F14] leading-snug tracking-[-0.01em] mb-4 flex-1 group-hover:text-[#0B1F3A] transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between pt-6 border-t border-[#0B1F3A]/08 mt-auto">
                    <span className="text-xs text-[#98A2B3]">{formatDate(article.publishedAt)}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-[#0B1F3A] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
