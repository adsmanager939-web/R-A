export default function InvestigationsSection() {
  const services = [
    {
      number: "01",
      title: "Investment & Broker Fraud",
      description: "We take formal steps to pursue recovery in investment and broker fraud cases through the appropriate channels."
    },
    {
      number: "02",
      title: "Cryptocurrency Fraud",
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
      description: "We review other online scam cases. Submit details and we will confirm eligibility for support."
    }
  ];

  return (
    <section id="investigations" className="py-24 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs text-[#FFD700] uppercase tracking-widest font-bold mb-4">Services</p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-none tracking-tight">
            What We Handle
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="border-t border-white/15 py-10 md:pr-16 grid grid-cols-[48px_1fr] gap-6"
              data-testid={`service-${index}`}
            >
              <span className="text-xs font-bold text-white/40 uppercase tracking-widest pt-1">
                {service.number}
              </span>
              <div>
                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/70 leading-relaxed text-base">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
