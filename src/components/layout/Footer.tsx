'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

const serviceLinks = [
  { href: '/services/seo', label: 'SEO' },
  { href: '/services/web-development', label: 'Web Development' },
  { href: '/services/brand-development', label: 'Brand Development' },
  { href: '/services/general-marketing', label: 'General Marketing' },
  { href: '/services/media-advisory', label: 'Media Advisory' },
];

const companyLinks = [
  { href: '/work', label: 'Work' },
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Insights' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/careers', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
];

const legalLinks = [
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/terms-of-use', label: 'Terms of Use' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0F14] text-white" aria-label="Site footer">
      {/* Main footer grid */}
      <div className="container-wide pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-16 border-b border-white/10">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6 group" aria-label="Home">
              <Image
                src="/logo.png"
                alt="Pentagon Creed Logo"
                width={48}
                height={48}
                className="opacity-90 transition-opacity duration-300 group-hover:opacity-100 brightness-0 invert"
              />
              <span className="text-sm font-bold tracking-[0.06em] uppercase text-white">
                Pentagon Creed
              </span>
            </Link>
            <p className="text-sm text-white/50 leading-relaxed max-w-xs">
              A multidisciplinary business solutions company. Strategy, creativity, and execution — integrated.
            </p>

            {/* Social links */}
            <div className="flex items-center gap-4 mt-8">
              {/* PLACEHOLDER — replace hrefs with real social URLs */}
              <SocialLink href="#" label="Instagram" icon={<IgIcon />} />
              <SocialLink href="#" label="LinkedIn" icon={<LiIcon />} />
              <SocialLink href="#" label="X / Twitter" icon={<XIcon />} />
              <SocialLink href="#" label="Facebook" icon={<FbIcon />} />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.22em] uppercase text-white/30 mb-6">
              Services
            </h3>
            <ul className="flex flex-col gap-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.22em] uppercase text-white/30 mb-6">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.22em] uppercase text-white/30 mb-6">
              Get in Touch
            </h3>
            <ul className="flex flex-col gap-4">
              {/* PLACEHOLDER — replace with real contact details */}
              <li>
                <a
                  href="mailto:hello@pentagoncreedintegrations.com"
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>hello@pentagoncreedintegrations.com</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:[PLACEHOLDER]"
                  className="flex items-start gap-3 text-sm text-white/60 hover:text-white transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>[Phone — PLACEHOLDER]</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-sm text-white/40">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>[Office Address — PLACEHOLDER]</span>
                </div>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-white/30 mb-3">
                Newsletter
              </p>
              <NewsletterSignup />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {year} Pentagon Creed Integrations. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-white/30 hover:text-white/60 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="text-white/40 hover:text-white transition-colors duration-200 p-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
}

function NewsletterSignup() {
  return (
    <form
      className="flex"
      onSubmit={(e) => e.preventDefault()}
      aria-label="Newsletter signup"
    >
      <input
        type="email"
        required
        placeholder="Your email"
        className="flex-1 bg-white/8 border border-white/15 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-white/40 transition-colors min-w-0"
        aria-label="Email address"
      />
      <button
        type="submit"
        className="bg-white text-[#0B1F3A] px-4 py-2 text-xs font-semibold hover:bg-white/90 transition-colors flex-shrink-0"
      >
        Join
      </button>
    </form>
  );
}


function IgIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function LiIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.91-5.622Zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function FbIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
