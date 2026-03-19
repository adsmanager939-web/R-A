export default function InvestigationsSection() {
  const services = [
    {
      number: "01",
      title: "Investment & Broker Fraud",
      description: "We take formal steps to pursue recovery in investment and broker fraud cases through the appropriate channels."
    },
    {
      number: "02",
      title: "Crypto Fraud",
      description: "We pursue recovery actions in crypto fraud cases based on available evidence and the payment trail."
    },
    {
      number: "03",
      title: "Romance Scam",
      description: "We support romance scam cases using a confidential, structured intake and evidence review."
    },
    {
      number: "04",
      title: "Job Scam",
      description: "We assist with job scam cases and guide you through the formal steps and documentation."
    },
    {
      number: "05",
      title: "Phishing",
      description: "We help challenge unauthorized transactions and reduce further loss after phishing incidents."
    },
    {
      number: "06",
      title: "Other Online Scams",
      description: "We review other online scam cases. Submit details and we'll confirm eligibility for support."
    }
  ];

  return (
    <section id="investigations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs text-[#7B1418] uppercase tracking-widest font-bold mb-4">Our Services</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#000000] uppercase leading-none tracking-tight">
            What We<br />Handle
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-t border-black/10 py-10 px-2 md:pr-16 flex gap-8 group hover:border-[#7B1418]/30 transition-colors"
              data-testid={`service-${index}`}
            >
              <span className="text-5xl font-black text-[#FFD700]/40 group-hover:text-[#FFD700]/70 transition-colors leading-none flex-shrink-0 w-16">
                {service.number}
              </span>
              <div>
                <h3 className="text-xl font-bold text-[#000000] mb-3">{service.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
