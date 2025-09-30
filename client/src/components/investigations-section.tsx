import { Search, Shield, TrendingUp, Scale } from "lucide-react";

export default function InvestigationsSection() {
  const services = [
    {
      icon: Search,
      title: "Blockchain Forensics",
      description: "Advanced tracking of cryptocurrency transactions across multiple blockchains to trace stolen funds and identify perpetrators."
    },
    {
      icon: Shield,
      title: "Romance Scam Investigation",
      description: "Comprehensive investigation of online romance fraud with evidence collection and coordination with law enforcement."
    },
    {
      icon: TrendingUp,
      title: "Investment Fraud Analysis",
      description: "In-depth analysis of fraudulent investment schemes, Ponzi schemes, and fake trading platforms."
    },
    {
      icon: Scale,
      title: "Legal Documentation",
      description: "Professional documentation and evidence preparation for legal proceedings and asset recovery."
    }
  ];

  return (
    <section id="investigations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1a3a52] mb-4">Our Investigation Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive fraud investigation services leveraging cutting-edge technology and decades of expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              data-testid={`investigation-card-${index}`}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#1a3a52] to-[#2a4a62] rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-[#d4af37]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a3a52] mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
