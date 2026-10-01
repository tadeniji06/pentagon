import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#061426] flex flex-col items-start justify-center">
      <div className="container-wide">
        <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#C9A84C] block mb-8">
          404 — Page Not Found
        </span>
        <h1 className="text-[80px] sm:text-[120px] lg:text-[160px] font-extrabold text-white leading-none tracking-[-0.04em] mb-4">
          404.
        </h1>
        <p className="text-xl text-white/50 max-w-md leading-relaxed mb-12">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/"
            className="h-14 px-8 bg-white text-[#0B1F3A] inline-flex items-center gap-3 text-sm font-bold hover:bg-white/90 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="h-14 px-8 border border-white/25 text-white inline-flex items-center gap-3 text-sm font-semibold hover:border-white/50 hover:bg-white/5 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
