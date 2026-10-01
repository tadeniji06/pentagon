'use client';

import { useState, useEffect, useRef, useCallback, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { motion, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import HeroFallback from '@/components/three/HeroFallback';
import { track } from '@/lib/analytics';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => <HeroFallback />,
});

const easeSharp = [0.76, 0, 0.24, 1] as const;
const easeSmooth = [0.16, 1, 0.3, 1] as const;

function HeadlineWord({ word, delay }: { word: string; delay: number }) {
  const shouldReduce = useReducedMotion();
  return (
    <span className="overflow-hidden inline-block">
      <motion.span
        className="inline-block"
        initial={shouldReduce ? false : { y: '105%' }}
        animate={{ y: '0%' }}
        transition={{ duration: 0.85, ease: easeSharp, delay }}
      >
        {word}
      </motion.span>
    </span>
  );
}

export default function HeroSection() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef<HTMLElement>(null);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (shouldReduce || isMobile || !heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      setMouseX((e.clientX - cx) / (rect.width / 2));
      setMouseY((e.clientY - cy) / (rect.height / 2));
    },
    [shouldReduce, isMobile]
  );

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  // Words for line-by-line reveal
  const line1Words = ['Where', 'Strategy'];
  const line2Words = ['Becomes', 'Momentum.'];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col bg-[#061426] overflow-hidden"
      aria-label="Hero"
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
        aria-hidden="true"
      />

      {/* Radial glow — subtle navy warmth in top-left */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 20% 20%, rgba(26,69,128,0.3) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="container-wide flex-1 flex flex-col lg:flex-row items-center gap-12 lg:gap-0 pt-[120px] pb-20 lg:pt-0">

        {/* Left — copy */}
        <div className="w-full lg:w-[55%] flex flex-col justify-center lg:pr-12 lg:py-20 relative z-10">

          {/* Label */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeSmooth, delay: 0.1 }}
            className="flex items-center gap-3 mb-10"
          >
            <span className="h-px w-8 bg-[#C9A84C]" aria-hidden="true" />
            <span className="text-[10px] font-semibold tracking-[0.22em] uppercase text-white/40">
              Multidisciplinary Business Solutions
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="text-[56px] sm:text-[68px] lg:text-[80px] xl:text-[96px] font-extrabold leading-[1.02] tracking-[-0.03em] text-white mb-8">
            <div className="flex gap-[0.28em] flex-wrap">
              {line1Words.map((word, i) => (
                <HeadlineWord key={word} word={word} delay={0.25 + i * 0.06} />
              ))}
            </div>
            <div className="flex gap-[0.28em] flex-wrap mt-1">
              {line2Words.map((word, i) => (
                <HeadlineWord
                  key={word}
                  word={i === line2Words.length - 1 ? (
                    <span className="text-[#C9A84C]">{word}</span>
                  ) as unknown as string : word}
                  delay={0.25 + (line1Words.length + i) * 0.06}
                />
              ))}
            </div>
          </h1>

          {/* Sub-headline */}
          <motion.p
            initial={shouldReduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeSmooth, delay: 0.65 }}
            className="text-lg sm:text-xl text-white/55 leading-relaxed max-w-xl mb-12"
          >
            We help organisations build stronger brands, digital experiences, market presence,
            and business operations — through an integrated approach to strategy and execution.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easeSmooth, delay: 0.8 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              href="/contact"
              onClick={() => track('cta_click', { label: 'hero-primary' })}
              className="h-14 px-8 bg-white text-[#0B1F3A] inline-flex items-center gap-3 text-sm font-bold hover:bg-white/90 transition-colors group"
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4 transition-transform duration-250 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/services"
              onClick={() => track('cta_click', { label: 'hero-secondary' })}
              className="h-14 px-8 border border-white/25 text-white inline-flex items-center gap-3 text-sm font-semibold hover:border-white/50 hover:bg-white/5 transition-all"
            >
              Explore Our Services
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={shouldReduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex items-center gap-4 mt-16 lg:mt-20"
            aria-hidden="true"
          >
            <div className="flex flex-col items-center gap-1">
              <div className="w-px h-10 bg-white/20 relative overflow-hidden">
                <motion.div
                  className="absolute top-0 left-0 w-full bg-white/60"
                  style={{ height: '40%' }}
                  animate={{ y: ['-40%', '140%'] }}
                  transition={{ duration: 1.4, ease: 'easeInOut', repeat: Infinity, repeatDelay: 0.4 }}
                />
              </div>
            </div>
            <span className="text-[10px] tracking-[0.2em] uppercase text-white/30">
              Scroll
            </span>
          </motion.div>
        </div>

        {/* Right — geometric visual */}
        <div
          className="w-full lg:w-[45%] flex items-center justify-center relative"
          style={{ minHeight: isMobile ? 280 : 'calc(100vh - 80px)' }}
          aria-hidden="true"
        >
          {isMobile ? (
            <motion.div
              className="w-full"
              initial={shouldReduce ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: easeSmooth, delay: 0.5 }}
            >
              <HeroFallback />
            </motion.div>
          ) : (
            <motion.div
              className="absolute inset-0"
              initial={shouldReduce ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: easeSmooth, delay: 0.4 }}
            >
              <Suspense fallback={<div className="w-full h-full flex items-center justify-center"><HeroFallback /></div>}>
                <HeroScene mouseX={mouseX} mouseY={mouseY} />
              </Suspense>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
