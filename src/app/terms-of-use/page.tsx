import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms of Use for the Pentagon Creed Integrations website.',
};

export default function TermsOfUsePage() {
  return (
    <section className="bg-white pt-[140px] pb-24">
      <div className="container-wide max-w-3xl">
        <h1 className="text-4xl font-extrabold text-[#0B0F14] tracking-[-0.02em] mb-4">Terms of Use</h1>
        <p className="text-sm text-[#98A2B3] mb-12">Last updated: [DATE — PLACEHOLDER]</p>

        <div className="prose prose-lg text-[#344054] space-y-8">


          <div>
            <h2 className="text-xl font-bold text-[#0B0F14] mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the Pentagon Creed Integrations website, you accept and agree
              to be bound by these Terms of Use.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0B0F14] mb-4">2. Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, logos, and code — is the
              property of Pentagon Creed Integrations and may not be reproduced without permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0B0F14] mb-4">3. Limitation of Liability</h2>
            <p>
              Pentagon Creed Integrations provides this website on an "as is" basis and makes no
              warranties regarding accuracy or availability. We are not liable for any indirect or
              consequential damages arising from use of this website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0B0F14] mb-4">4. Governing Law</h2>
            <p>
              These terms are governed by the laws of the Federal Republic of Nigeria.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#0B0F14] mb-4">5. Contact</h2>
            <p>
              For questions about these terms:{' '}
              <a href="mailto:hello@pentagoncreedintegrations.com" className="text-[#0B1F3A] underline">
                hello@pentagoncreedintegrations.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
