'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { fadeUp, staggerContainer } from '@/lib/animations';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: 'fadeUp' | 'fadeIn' | 'stagger';
  threshold?: number;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className,
  delay = 0,
  variant = 'fadeUp',
  threshold = 0.15,
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const shouldReduce = useReducedMotion();

  const motionVariant = variant === 'stagger' ? staggerContainer : fadeUp;

  const adjustedVariant = {
    ...motionVariant,
    visible: {
      ...('visible' in motionVariant ? motionVariant.visible : {}),
      transition: {
        ...(typeof (motionVariant as any).visible?.transition === 'object'
          ? (motionVariant as any).visible.transition
          : {}),
        delay: shouldReduce ? 0 : delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={shouldReduce ? undefined : adjustedVariant}
      initial={shouldReduce ? false : 'hidden'}
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}

// Stagger wrapper for lists
export function StaggerReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={shouldReduce ? undefined : staggerContainer}
      initial={shouldReduce ? false : 'hidden'}
      animate={isInView ? 'visible' : 'hidden'}
    >
      {children}
    </motion.div>
  );
}

// Individual item in a stagger sequence
export function RevealItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={shouldReduce ? undefined : fadeUp}
    >
      {children}
    </motion.div>
  );
}
