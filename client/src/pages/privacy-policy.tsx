import { Link } from "wouter";
import Logo from "@/components/logo";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-gradient-to-br from-[#000000] to-[#111111] text-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link href="/">
            <Logo variant="white" className="cursor-pointer" />
          </Link>
          <Link href="/" className="text-white/80 hover:text-[#FFD700] transition-colors text-sm">
            ← Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-[#000000] mb-2">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-10">Last updated: March 2, 2026</p>

        <div className="prose prose-lg max-w-none space-y-10 text-gray-700">

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-3">1. Introduction</h2>
            <p>
              Refund & Associates Ltd. ("Refund&Associates", "we", "our", or "us") is committed to protecting the personal information of the individuals we serve. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website at <strong>trueclaim.associates</strong> or engage our fraud investigation and asset recovery services.
            </p>
            <p className="mt-3">
              This policy is governed by the <strong>Personal Information Protection and Electronic Documents Act (PIPEDA)</strong> and applicable provincial privacy legislation in Canada. By using our website or services, you consent to the practices described in this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-3">2. Who We Are</h2>
            <p>
              Refund & Associates Ltd. is a fraud investigation and asset recovery firm registered in Canada, operating under Business Number (BN): 842594962, Registry ID: 2112580. Our registered office is located in <strong>Cambridge, Ontario, Canada</strong>.
            </p>
            <p className="mt-3">
              For privacy-related inquiries, you may contact our Privacy Officer at:
            </p>
            <ul className="list-none mt-2 space-y-1 pl-0">
              <li><strong>Email:</strong> inquiry@trueclaim-associates.com</li>
              <li><strong>Phone / WhatsApp:</strong> +1 (613) 416-0183</li>
              <li><strong>Address:</strong> Cambridge, Ontario, Canada</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-3">3. Information We Collect</h2>
            <p>We collect personal information only when it is necessary to provide our services. The types of information we may collect include:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Contact Information:</strong> Full name, email address, phone number.</li>
              <li><strong>Case Details:</strong> Type of fraud experienced, estimated financial loss, a description of your situation.</li>
              <li><strong>Financial Documentation:</strong> Transaction records, account statements, or other evidence relevant to your case (provided voluntarily by you).</li>
              <li><strong>Communications:</strong> Records of correspondence between you and Refund&Associates.</li>
              <li><strong>Website Usage Data:</strong> IP address, browser type, pages visited, and time spent on our site (collected automatically via standard server logs and analytics tools).</li>
              <li><strong>Lead Form Data:</strong> Personal information (name, email address, phone number) submitted through third-party lead generation platforms, including Meta Lead Ads on Facebook and Instagram.</li>
            </ul>
            <p className="mt-3">We do not collect sensitive personal information (such as Social Insurance Numbers or health data) unless specifically required for your case and with your explicit consent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-3">4. How We Use Your Information</h2>
            <p>Your personal information is used only for the purposes for which it was collected, including:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>Evaluating and responding to your case inquiry.</li>
              <li>Conducting fraud investigations and asset recovery on your behalf.</li>
              <li>Communicating with you about your case, updates, or our services.</li>
              <li>Following up on inquiries submitted through third-party lead generation platforms, including Meta (Facebook/Instagram) Lead Ads.</li>
              <li>Complying with legal obligations and regulatory requirements (e.g., FINTRAC reporting).</li>
              <li>Improving the quality of our website and services through anonymized analytics.</li>
            </ul>
            <p className="mt-3">We do not use your personal information for unsolicited marketing without your prior consent.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-3">5. Disclosure of Your Information</h2>
            <p>We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following limited circumstances:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Service Providers:</strong> Trusted third-party service providers who assist in delivering our services (e.g., secure cloud storage, legal counsel), bound by confidentiality obligations.</li>
              <li><strong>Meta Platforms Inc. (Facebook/Instagram):</strong> When you submit an inquiry through a Meta Lead Ad on Facebook or Instagram, your information is collected by Meta on our behalf and shared with us. This is governed by both this Privacy Policy and <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-[#000000] underline hover:text-[#FFD700]">Meta's Privacy Policy</a>.</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or regulatory authority (including FINTRAC), or to protect the rights and safety of Refund&Associates and its clients.</li>
              <li><strong>With Your Consent:</strong> Any other disclosure will only occur with your explicit prior consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-3">6. Lead Forms on Meta (Facebook &amp; Instagram)</h2>
            <p>
              Refund & Associates may use Meta Lead Ads on Facebook and Instagram to collect inquiries from individuals who have been affected by fraud. When you submit a lead form on these platforms, the following applies:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>The information you provide (name, email address, phone number) is collected by Meta on our behalf and shared with Refund & Associates for the purpose of following up on your inquiry.</li>
              <li>Submitting a lead form is entirely voluntary. You are not obligated to provide your information.</li>
              <li>Your information will only be used to contact you regarding fraud recovery services. We will not use it for unrelated marketing purposes.</li>
              <li>You may request that we delete your information at any time by contacting us at <strong>inquiry@trueclaim-associates.com</strong>.</li>
              <li>Meta's handling of your data on their platform is governed by <a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-[#000000] underline hover:text-[#FFD700]">Meta's Privacy Policy</a>.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-3">7. Data Security</h2>
            <p>
              We take the security of your personal information seriously and implement industry-standard safeguards, including:
            </p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li>SSL/TLS encryption for all data transmitted through our website.</li>
              <li>Restricted access to personal information — only authorized personnel with a need to know can access it.</li>
              <li>Secure storage of physical documents in access-controlled facilities.</li>
              <li>Regular security reviews and updates to our systems and processes.</li>
            </ul>
            <p className="mt-3">
              While we take every precaution, no method of transmission over the internet is 100% secure. We encourage you to contact us through our secure channels for highly sensitive information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-3">8. Retention of Information</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Case files are typically retained for a minimum of <strong>7 years</strong> following the conclusion of a matter, in compliance with Canadian legal and regulatory requirements. After this period, information is securely destroyed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-3">9. Your Rights Under PIPEDA</h2>
            <p>As an individual whose personal information we hold, you have the right to:</p>
            <ul className="list-disc pl-6 mt-3 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
              <li><strong>Correction:</strong> Request that inaccurate or incomplete information be corrected.</li>
              <li><strong>Withdrawal of Consent:</strong> Withdraw your consent to our use of your information (subject to legal and contractual restrictions).</li>
              <li><strong>Complaint:</strong> File a complaint with our Privacy Officer or with the <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer" className="text-[#000000] underline hover:text-[#FFD700]">Office of the Privacy Commissioner of Canada</a>.</li>
            </ul>
            <p className="mt-3">To exercise any of these rights, please contact us at <strong>inquiry@trueclaim-associates.com</strong>.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-3">10. Cookies and Website Analytics</h2>
            <p>
              Our website may use cookies and similar tracking technologies to improve your browsing experience and analyze site traffic. Cookies are small data files stored on your device. You can control cookie settings through your browser preferences. Disabling cookies may affect some functionality of our website.
            </p>
            <p className="mt-3">We do not use cookies for advertising or cross-site tracking purposes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-3">11. Third-Party Links</h2>
            <p>
              Our website may contain links to external websites. Refund&Associates is not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-3">12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. When we make material changes, we will update the "Last updated" date at the top of this page. We encourage you to review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#000000] mb-3">13. Contact Us</h2>
            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact our Privacy Officer:</p>
            <ul className="list-none mt-3 space-y-1 pl-0">
              <li><strong>Refund & Associates Ltd.</strong></li>
              <li>Cambridge, Ontario, Canada</li>
              <li><strong>Email:</strong> inquiry@trueclaim-associates.com</li>
              <li><strong>Phone / WhatsApp:</strong> +1 (613) 416-0183</li>
            </ul>
          </section>

        </div>
      </main>

      <footer className="bg-[#000000] text-white/70 text-center py-6 text-sm mt-10">
        <p>&copy; 2013 Refund & Associates Ltd. All rights reserved. | Cambridge, Ontario, Canada</p>
      </footer>
    </div>
  );
}
