'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, Menu, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { track } from '@/lib/analytics';

const navLinks = [
  { href: '/work', label: 'Work' },
  {
    href: '/services',
    label: 'Services',
    children: [
      { href: '/services/seo', label: 'SEO' },
      { href: '/services/web-development', label: 'Web Development' },
      { href: '/services/brand-development', label: 'Brand Development' },
      { href: '/services/general-marketing', label: 'General Marketing' },
      { href: '/services/media-advisory', label: 'Media Advisory' },
    ],
  },
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Insights' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();
  const shouldReduce = useReducedMotion();
  const servicesRef = useRef<HTMLDivElement>(null);

  // Hero pages that start with transparent nav
  const isHeroPage = pathname === '/';

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 48);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Close services dropdown on outside click
  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const solidNav = scrolled || !isHeroPage || menuOpen;

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          solidNav
            ? 'bg-white border-b border-[#0B1F3A]/10 shadow-[0_1px_0_0_rgba(11,31,58,0.06)]'
            : 'bg-transparent'
        )}
        style={{ height: 80 }}
      >
        <div className="container-wide h-full flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Pentagon Creed Integrations — Home"
          >
            <PentagonMark
              className={cn(
                'transition-colors duration-500',
                solidNav ? 'text-[#0B1F3A]' : 'text-white'
              )}
            />
            <span
              className={cn(
                'text-sm font-bold tracking-[0.06em] uppercase transition-colors duration-500 hidden sm:block',
                solidNav ? 'text-[#0B1F3A]' : 'text-white'
              )}
            >
              Pentagon Creed
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => {
              if (link.children) {
                return (
                  <div key={link.href} className="relative" ref={servicesRef}>
                    <button
                      className={cn(
                        'flex items-center gap-1 text-sm font-medium transition-colors duration-300',
                        'focus-visible:outline-none focus-visible:underline',
                        solidNav ? 'text-[#344054] hover:text-[#0B1F3A]' : 'text-white/80 hover:text-white'
                      )}
                      onClick={() => setServicesOpen((v) => !v)}
                      aria-expanded={servicesOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown
                        className={cn(
                          'h-3.5 w-3.5 transition-transform duration-200',
                          servicesOpen && 'rotate-180'
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={shouldReduce ? false : { opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -8 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white shadow-lg border border-[#0B1F3A]/10 py-2"
                        >
                          <Link
                            href={link.href}
                            className="block px-4 py-2 text-sm font-semibold text-[#0B1F3A] hover:bg-[#F2F4F7] transition-colors border-b border-[#0B1F3A]/08 mb-1"
                            onClick={() => setServicesOpen(false)}
                          >
                            All Services
                          </Link>
                          {link.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-[#344054] hover:text-[#0B1F3A] hover:bg-[#F2F4F7] transition-colors"
                              onClick={() => setServicesOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors duration-300 relative',
                    'after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0',
                    'after:bg-current after:transition-all after:duration-300',
                    'hover:after:w-full focus-visible:after:w-full',
                    'focus-visible:outline-none',
                    isActive
                      ? solidNav
                        ? 'text-[#0B1F3A] after:w-full'
                        : 'text-white after:w-full'
                      : solidNav
                      ? 'text-[#344054] hover:text-[#0B1F3A]'
                      : 'text-white/80 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              onClick={() => track('cta_click', { label: 'nav-consultation' })}
              className={cn(
                'h-10 px-5 text-sm font-semibold inline-flex items-center gap-2',
                'transition-colors duration-300',
                solidNav
                  ? 'bg-[#0B1F3A] text-white hover:bg-[#102d54]'
                  : 'bg-white text-[#0B1F3A] hover:bg-white/90'
              )}
            >
              Request a Consultation
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className={cn('h-6 w-6', solidNav ? 'text-[#0B1F3A]' : 'text-white')} />
            ) : (
              <Menu className={cn('h-6 w-6', solidNav ? 'text-[#0B1F3A]' : 'text-white')} />
            )}
          </button>
        </div>
      </header>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={shouldReduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#061426] flex flex-col"
            style={{ paddingTop: 80 }}
          >
            <div className="flex-1 overflow-y-auto px-6 py-10">
              <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={shouldReduce ? false : { opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        'block py-4 text-2xl font-bold text-white border-b border-white/10',
                        'hover:text-[#C9A84C] transition-colors duration-200',
                        pathname === link.href && 'text-[#C9A84C]'
                      )}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <div className="pl-4 pb-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block py-2.5 text-base text-white/60 hover:text-white transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={shouldReduce ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-10"
              >
                <Link
                  href="/contact"
                  onClick={() => track('cta_click', { label: 'mobile-nav-consultation' })}
                  className="w-full h-14 inline-flex items-center justify-center bg-white text-[#0B1F3A] text-base font-bold"
                >
                  Request a Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function PentagonMark({ className }: { className?: string }) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Five-sided mark — abstract, not literal pentagon */}
      <path
        d="M16 2L29.4 11.8L24.5 27.5H7.5L2.6 11.8L16 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M16 7L23.9 13.1L21 21.5H11L8.1 13.1L16 7Z"
        fill="currentColor"
        opacity="0.4"
      />
    </svg>
  );
}
