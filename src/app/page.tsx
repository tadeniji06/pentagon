import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import MarqueeBar from '@/components/home/MarqueeBar';
import ServicesSection from '@/components/home/ServicesSection';
import DifferenceSection from '@/components/home/DifferenceSection';
import FeaturedWork from '@/components/home/FeaturedWork';
import MarketActivationFeature from '@/components/home/MarketActivationFeature';
import InsightsSection from '@/components/home/InsightsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTASection from '@/components/home/CTASection';

export const metadata: Metadata = {
  title: 'Pentagon Creed Integrations — Where Strategy Becomes Momentum',
  description:
    'Pentagon Creed Integrations is a multidisciplinary business solutions company helping organisations build stronger brands, digital experiences, market presence and business operations.',
  alternates: {
    canonical: 'https://www.pentagoncreedintegrations.com',
  },
};

export default function HomePage() {
  return (
    <>
      {/* §01 Hero */}
      <HeroSection />

      {/* §02 Marquee */}
      <MarqueeBar />

      {/* §03 Services */}
      <ServicesSection />

      {/* §04 The Difference */}
      <DifferenceSection />

      {/* §05 Featured Work */}
      <FeaturedWork />

      {/* §06 Market Activation */}
      <MarketActivationFeature />

      {/* §07 Insights */}
      <InsightsSection />

      {/* §08 Testimonials */}
      <TestimonialsSection />

      {/* §09 Final CTA */}
      <CTASection />
    </>
  );
}
