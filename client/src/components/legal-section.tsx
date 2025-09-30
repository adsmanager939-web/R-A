export default function LegalSection() {
  return (
    <section id="legal" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">Legal Disclaimer</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>TrueClaim provides fraud investigation and recovery services. Results cannot be guaranteed and depend on various factors including the nature of the fraud, available evidence, and cooperation of financial institutions.</p>
              <p>This website does not constitute legal advice. Individual cases may require different approaches and outcomes vary. Past results do not guarantee future performance.</p>
              <p>By submitting a case inquiry, you are not establishing an attorney-client relationship. Such relationship is only established through a signed retainer agreement.</p>
              <p>Licensed to practice in all 50 states. Member of the National Association of Investigative Specialists (NAIS) and Better Business Bureau (A+ Rating).</p>
            </div>
          </div>
          
          <div id="privacy">
            <h3 className="text-2xl font-semibold text-foreground mb-6">Privacy Policy</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>Your privacy is paramount to our mission. All personal information shared with TrueClaim is protected under attorney-client privilege and industry-standard encryption.</p>
              <p><strong>Information Collection:</strong> We collect only information necessary to evaluate and pursue your case, including contact details, case specifics, and financial documentation.</p>
              <p><strong>Information Use:</strong> Data is used solely for case evaluation, investigation, and recovery efforts. We never sell or share personal information with third parties except as required by law.</p>
              <p><strong>Data Security:</strong> All communications are encrypted using SSL technology. Physical documents are stored in secure, access-controlled facilities.</p>
              <p><strong>Contact:</strong> Questions about our privacy practices can be directed to privacy@trueclaim.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
