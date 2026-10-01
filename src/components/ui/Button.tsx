'use client';

import { cn } from '@/lib/utils';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { track } from '@/lib/analytics';
import type { ComponentPropsWithoutRef } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';
type Arrow = 'right' | 'upRight' | 'none';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: Variant;
  size?: Size;
  arrow?: Arrow;
  href?: string;
  external?: boolean;
  analyticsEvent?: string;
  analyticsLabel?: string;
  asChild?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary: [
    'relative overflow-hidden',
    'bg-[#0B1F3A] text-white',
    'hover:bg-[#102d54]',
    'focus-visible:ring-2 focus-visible:ring-[#0B1F3A] focus-visible:ring-offset-2',
    'transition-colors duration-300',
  ].join(' '),
  secondary: [
    'relative overflow-hidden',
    'bg-white text-[#0B1F3A]',
    'border border-[#0B1F3A]/20',
    'hover:bg-[#F2F4F7] hover:border-[#0B1F3A]/40',
    'focus-visible:ring-2 focus-visible:ring-[#0B1F3A] focus-visible:ring-offset-2',
    'transition-colors duration-300',
  ].join(' '),
  ghost: [
    'text-[#0B1F3A] underline-offset-4',
    'hover:underline',
    'focus-visible:ring-2 focus-visible:ring-[#0B1F3A] focus-visible:ring-offset-2',
    'transition-all duration-200',
  ].join(' '),
  outline: [
    'relative overflow-hidden',
    'bg-transparent text-white',
    'border border-white/30',
    'hover:border-white/70 hover:bg-white/5',
    'focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2',
    'transition-all duration-300',
  ].join(' '),
};

const sizeClasses: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm gap-2',
  md: 'h-12 px-6 text-sm gap-2.5',
  lg: 'h-14 px-8 text-base gap-3',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  arrow = 'right',
  href,
  external,
  analyticsEvent,
  analyticsLabel,
  children,
  className,
  onClick,
  ...props
}: ButtonProps) {
  const shouldReduceMotion = useReducedMotion();

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    if (analyticsEvent) {
      track('cta_click', { label: analyticsLabel ?? analyticsEvent });
    }
    onClick?.(e);
  }

  const ArrowIcon = arrow === 'upRight' ? ArrowUpRight : ArrowRight;

  const inner = (
    <>
      <span>{children}</span>
      {arrow !== 'none' && (
        <motion.span
          className="flex-shrink-0"
          initial={false}
          whileHover={shouldReduceMotion ? {} : { x: 4 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <ArrowIcon
            className={cn(
              size === 'sm' && 'h-3.5 w-3.5',
              size === 'md' && 'h-4 w-4',
              size === 'lg' && 'h-5 w-5'
            )}
          />
        </motion.span>
      )}
    </>
  );

  const baseClasses = cn(
    'inline-flex items-center justify-center font-semibold rounded-none',
    'disabled:opacity-50 disabled:cursor-not-allowed',
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  if (href) {
    return (
      <a
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={baseClasses}
        onClick={() => {
          if (analyticsEvent) {
            track('cta_click', { label: analyticsLabel ?? analyticsEvent });
          }
        }}
      >
        {inner}
      </a>
    );
  }

  return (
    <button className={baseClasses} onClick={handleClick} {...props}>
      {inner}
    </button>
  );
}
