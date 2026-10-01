'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { track } from '@/lib/analytics';

const schema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(20, 'Please provide a message (minimum 20 characters)'),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to proceed' }),
  }),
});

type FormData = z.infer<typeof schema>;

const services = [
  'SEO',
  'Web Development & Management',
  'Brand Development & Management',
  'General Marketing',
  'Media Advisory',
  'Multiple Services',
  'General Enquiry',
];

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<SubmitState>('idle');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function onSubmit(data: FormData) {
    setSubmitState('loading');
    track('contact_form_submit', { service: data.service });

    // PLACEHOLDER — replace with real API endpoint
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
    await new Promise((resolve) => setTimeout(resolve, 1200));

    // Mock success (remove this and add real error handling)
    setSubmitState('success');
    reset();
  }

  if (submitState === 'success') {
    return (
      <div className="flex flex-col items-start gap-4 py-12">
        <div className="w-12 h-12 bg-[#0B1F3A]/08 flex items-center justify-center">
          <CheckCircle2 className="h-6 w-6 text-[#0B1F3A]" />
        </div>
        <h3 className="text-2xl font-bold text-[#0B0F14]">Message sent.</h3>
        <p className="text-[#344054]">
          Thank you for reaching out. A member of our team will respond within one business day.
        </p>
        <button
          onClick={() => setSubmitState('idle')}
          className="mt-4 text-sm font-semibold text-[#0B1F3A] underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Full Name" error={errors.name?.message} required>
          <input
            {...register('name')}
            type="text"
            id="name"
            autoComplete="name"
            placeholder="Jane Okafor"
            className={inputClass(!!errors.name)}
          />
        </Field>
        <Field label="Email Address" error={errors.email?.message} required>
          <input
            {...register('email')}
            type="email"
            id="email"
            autoComplete="email"
            placeholder="jane@company.com"
            className={inputClass(!!errors.email)}
          />
        </Field>
      </div>

      {/* Phone + Company */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Phone" error={errors.phone?.message}>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            autoComplete="tel"
            placeholder="+234 XXX XXX XXXX"
            className={inputClass(!!errors.phone)}
          />
        </Field>
        <Field label="Company" error={errors.company?.message}>
          <input
            {...register('company')}
            type="text"
            id="company"
            autoComplete="organization"
            placeholder="Your company"
            className={inputClass(!!errors.company)}
          />
        </Field>
      </div>

      {/* Service */}
      <Field label="Service of Interest" error={errors.service?.message} required>
        <select
          {...register('service')}
          id="service"
          defaultValue=""
          className={inputClass(!!errors.service)}
        >
          <option value="" disabled>Select a service</option>
          {services.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </Field>

      {/* Message */}
      <Field label="Message" error={errors.message?.message} required>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          placeholder="Tell us about your project, challenge, or question..."
          className={inputClass(!!errors.message) + ' resize-none'}
        />
      </Field>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          {...register('consent')}
          type="checkbox"
          id="consent"
          className="mt-1 h-4 w-4 border border-[#0B1F3A]/30 cursor-pointer accent-[#0B1F3A]"
        />
        <label htmlFor="consent" className="text-sm text-[#344054] cursor-pointer">
          I agree to Pentagon Creed Integrations processing my information to respond to this enquiry,
          in accordance with the{' '}
          <a href="/privacy-policy" className="underline hover:text-[#0B1F3A]">
            Privacy Policy
          </a>
          .
        </label>
      </div>
      {errors.consent && (
        <p className="text-xs text-red-600 flex items-center gap-1.5 -mt-3">
          <AlertCircle className="h-3.5 w-3.5" />
          {errors.consent.message}
        </p>
      )}

      {submitState === 'error' && (
        <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200">
          <AlertCircle className="h-4 w-4 text-red-600 mt-0.5" />
          <p className="text-sm text-red-700">
            Something went wrong. Please try again or email us directly.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={submitState === 'loading'}
        className="h-14 px-8 bg-[#0B1F3A] text-white text-sm font-bold inline-flex items-center gap-3 hover:bg-[#102d54] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {submitState === 'loading' ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold tracking-wide text-[#344054]">
        {label}
        {required && <span className="text-[#C9A84C] ml-0.5">*</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs text-red-600 flex items-center gap-1.5">
          <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(hasError: boolean) {
  return [
    'w-full h-12 px-4 text-sm text-[#0B0F14] bg-[#F2F4F7]',
    'border border-transparent',
    'focus:outline-none focus:border-[#0B1F3A] focus:bg-white',
    'placeholder:text-[#98A2B3]',
    'transition-colors duration-200',
    hasError ? 'border-red-400 bg-red-50' : '',
  ].join(' ');
}
