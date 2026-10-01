import type { Variants } from "framer-motion";

// Easing curves
export const easing = {
  smooth: [0.16, 1, 0.3, 1] as const,
  sharp: [0.76, 0, 0.24, 1] as const,
  gentle: [0.25, 0.46, 0.45, 0.94] as const,
};

// Fade + slide up — primary entrance
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easing.smooth },
  },
};

// Fade in only
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: easing.gentle },
  },
};

// Clip-path reveal (bottom to top)
export const clipReveal: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.9, ease: easing.sharp },
  },
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// Stagger container — slow
export const staggerContainerSlow: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

// Text line mask — individual line reveal
export const lineMask: Variants = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: { duration: 0.8, ease: easing.sharp },
  },
};

// Slide in from left
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easing.smooth },
  },
};

// Slide in from right
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easing.smooth },
  },
};

// Scale in
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easing.smooth },
  },
};

// Page transition overlay
export const pageOverlay: Variants = {
  initial: { scaleY: 0, originY: 0 },
  animate: { scaleY: 1, originY: 0 },
  exit: { scaleY: 0, originY: 1 },
};
