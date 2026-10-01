import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for Pentagon Creed Integrations.',
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white pt-[140px] pb-24">
      <div className="container-wide max-w-3xl">
        <h1 className="text-4xl font-extrabold text-[#0B0F14] tracking-[-0.02em] mb-4">Privacy Policy</h1>
        <p className="text-sm text-[#98A2B3] mb-12">
          Last updated: [DATE — PLACEHOLDER]
        </p>

        <div className="prose prose-lg text-[#344054] space-y-8">


          <div>
            <h2 className="text-xl font-bold text-[#0B0F14] mb-4">1. Who We Are</h2>
            <p>
              Pentagon Creed Integrations ([LEGAL ENTITY NAME — PLACEHOLDER], registration number
              [PLACEHOLDER]) is the data controller responsible for your personal information.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0B0F14] mb-4">2. Information We Collect</h2>
            <p>We may collect information you provide directly, including:</p>
            <ul className="list-disc pl-6 space-y-1 mt-3">
              <li>Name, email address, phone number</li>
              <li>Company name and role</li>
              <li>Enquiry and message content</li>
              <li>CV and application documents (careers)</li>
            </ul>
            <p className="mt-4">We also collect data automatically through cookies and analytics tools.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0B0F14] mb-4">3. How We Use Your Information</h2>
            <p>We use personal information to respond to enquiries, process applications, improve our services, and (with consent) send communications.</p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0B0F14] mb-4">4. Data Sharing</h2>
            <p>
              We do not sell your personal data. We may share it with third-party service providers
              (e.g., email platforms, analytics) operating under appropriate data processing agreements.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0B0F14] mb-4">5. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data. To exercise these
              rights, contact us at [EMAIL — PLACEHOLDER].
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0B0F14] mb-4">6. Contact</h2>
            <p>
              For privacy-related enquiries: <a href="mailto:hello@pentagoncreedintegrations.com" className="text-[#0B1F3A] underline">hello@pentagoncreedintegrations.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
