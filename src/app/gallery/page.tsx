import type { Metadata } from 'next';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Campaign photography, events, brand work, and activation imagery from Pentagon Creed Integrations.',
  alternates: { canonical: 'https://www.pentagoncreedintegrations.com/gallery' },
};

const categories = ['All', 'Campaigns', 'Events', 'Brand Work', 'General Marketing', 'Digital Projects', 'Behind the Scenes'];

export default function GalleryPage() {
  return (
    <>
      <section className="bg-[#0B1F3A] pt-[140px] pb-20">
        <div className="container-wide">
          <ScrollReveal>
            <SectionLabel light>Gallery</SectionLabel>
            <h1 className="mt-8 text-[52px] sm:text-[68px] font-extrabold leading-[1.03] tracking-[-0.03em] text-white max-w-2xl">
              The work,
              <br />
              <span className="text-[#C9A84C]">in pictures.</span>
            </h1>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-[#F2F4F7] section-padding">
        <div className="container-wide">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-16">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`text-[10px] font-semibold tracking-[0.16em] uppercase px-4 py-2 border cursor-default ${
                  cat === 'All'
                    ? 'bg-[#0B1F3A] text-white border-[#0B1F3A]'
                    : 'border-[#0B1F3A]/20 text-[#344054]'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          <ScrollReveal>
            {/* Masonry placeholder grid */}
            <div className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3">
              {Array.from({ length: 12 }).map((_, i) => (
                <div
                  key={i}
                  className="break-inside-avoid bg-[#0B1F3A]/08 border border-[#0B1F3A]/10 flex items-center justify-center text-[#98A2B3] text-xs"
                  style={{ height: `${[200, 280, 240, 320, 200, 260, 300, 220, 280, 240, 200, 320][i]}px` }}
                >
                  Image {i + 1}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
