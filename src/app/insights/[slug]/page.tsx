import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { insights, getInsightBySlug } from '@/lib/data/insights';
import { formatDate } from '@/lib/utils';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import CTASection from '@/components/home/CTASection';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) return {};
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `https://www.pentagoncreedintegrations.com/insights/${slug}` },
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const article = getInsightBySlug(slug);
  if (!article) notFound();

  // Related articles (same category, excluding current)
  const related = insights.filter((a) => a.category === article.category && a.slug !== slug).slice(0, 2);

  return (
    <>
      <div className="bg-[#F2F4F7] pt-[100px]">
        <div className="container-wide">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-[#98A2B3] hover:text-[#0B1F3A] transition-colors py-4"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All Insights
          </Link>
        </div>
      </div>

      {/* Article hero */}
      <section className="bg-[#F2F4F7] pb-0 pt-8">
        <div className="container-wide">
          <ScrollReveal className="max-w-4xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#C9A84C]">
                {article.category}
              </span>
              <span className="w-1 h-1 rounded-full bg-[#98A2B3]" aria-hidden="true" />
              <span className="text-[10px] text-[#98A2B3]">{article.readingTimeMinutes} min read</span>
              <span className="w-1 h-1 rounded-full bg-[#98A2B3]" aria-hidden="true" />
              <span className="text-[10px] text-[#98A2B3]">{formatDate(article.publishedAt)}</span>
            </div>
            <h1 className="text-[40px] sm:text-[52px] lg:text-[60px] font-extrabold leading-[1.06] tracking-[-0.025em] text-[#0B0F14]">
              {article.title}
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Cover image placeholder */}
      <div className="bg-[#0B1F3A]/10 mx-auto aspect-[16/7] flex items-center justify-center mt-0">
        <p className="text-xs text-[#98A2B3] tracking-wider">Cover Image — PLACEHOLDER</p>
      </div>

      {/* Article body */}
      <section className="bg-white py-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Sidebar */}
            <aside className="lg:col-span-3 lg:sticky lg:top-[100px] lg:self-start order-2 lg:order-1">
              <div className="space-y-6">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#98A2B3] mb-2">Author</div>
                  <div className="text-sm font-semibold text-[#0B0F14]">{article.author}</div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#98A2B3] mb-2">Published</div>
                  <div className="text-sm text-[#344054]">{formatDate(article.publishedAt)}</div>
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#98A2B3] mb-2">Category</div>
                  <div className="text-sm text-[#344054]">{article.category}</div>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {article.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-semibold tracking-wide uppercase text-[#98A2B3] border border-[#0B1F3A]/15 px-2.5 py-1">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </aside>

            {/* Article content */}
            <div className="lg:col-span-9 order-1 lg:order-2">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-[#344054] leading-relaxed font-medium mb-8">
                  {article.excerpt}
                </p>
                <div className="text-[#344054] leading-relaxed">
                  <p>{article.body}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="bg-[#F2F4F7] py-20">
          <div className="container-wide">
            <SectionLabel className="mb-8">Related Insights</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#0B1F3A]/08">
              {related.map((a) => (
                <Link key={a.id} href={`/insights/${a.slug}`} className="bg-white group p-8 flex flex-col gap-4">
                  <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#C9A84C]">{a.category}</span>
                  <h3 className="text-lg font-bold text-[#0B0F14] group-hover:text-[#0B1F3A] transition-colors leading-snug">
                    {a.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#0B1F3A] mt-auto group-hover:gap-3 transition-all">
                    Read
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        light
        headline={"Enjoyed this?\nLet's talk strategy."}
        subheadline="Reach out for a consultation — no commitment required."
      />
    </>
  );
}
