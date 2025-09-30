import { DollarSign, Users, Award, TrendingUp, Building2, UserX, Banknote } from "lucide-react";
import arrestImage from "@assets/image_1759267995836.png";

export default function OurWorkSection() {
  const stats = [
    { icon: DollarSign, value: "$890M", label: "Funds Recovered" },
    { icon: Users, value: "200,000+", label: "Clients Served" },
    { icon: Award, value: "92%", label: "Success Rate" },
    { icon: TrendingUp, value: "1,300+", label: "Expert Team" }
  ];

  const impactStats = [
    { icon: Building2, value: "140", label: "Fraud Companies Closed" },
    { icon: UserX, value: "3,650", label: "Fraudsters Arrested" },
    { icon: Banknote, value: "$1.2B CAD", label: "Recovered" }
  ];

  const caseStudies = [
    {
      title: "International Crypto Fraud Recovery",
      amount: "$200M",
      type: "Cryptocurrency Scam",
      description: "Successfully recovered funds from a sophisticated crypto investment scheme affecting 150+ victims across 12 countries."
    },
    {
      title: "Romance Scam Investigation",
      amount: "$16M",
      type: "Romance Fraud",
      description: "Tracked perpetrators across multiple jurisdictions and recovered funds for victims of an organized romance scam network."
    },
    {
      title: "Investment Fraud Case",
      amount: "$365M",
      type: "Ponzi Scheme",
      description: "Dismantled a fake investment platform and secured asset recovery for 200+ affected investors."
    }
  ];

  return (
    <section id="our-work" className="py-20 bg-gradient-to-br from-[#1a3a52] to-[#2a4a62] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Work & Results</h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Real results from real cases - our track record speaks for itself
          </p>
        </div>

        <div className="mb-16 max-w-4xl mx-auto text-center">
          <p className="text-lg text-white/90 leading-relaxed">
            Our relentless pursuit of justice has led to the closure of numerous fraud operations, the arrest of key perpetrators, and substantial financial recoveries for our clients. With years of experience and a commitment to excellence, our team consistently delivers results that restore trust and financial security to those affected by fraud.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center"
              data-testid={`stat-${index}`}
            >
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-[#d4af37]" />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20"
              data-testid={`case-study-${index}`}
            >
              <div className="text-[#d4af37] text-2xl font-bold mb-2">{study.amount}</div>
              <div className="text-sm text-white/70 mb-3">{study.type}</div>
              <h3 className="text-xl font-bold mb-3">{study.title}</h3>
              <p className="text-white/80 leading-relaxed">{study.description}</p>
            </div>
          ))}
        </div>

        <div className="mb-16 max-w-5xl mx-auto">
          <img 
            src={arrestImage} 
            alt="Fraudsters arrested by authorities" 
            className="w-full h-auto rounded-xl shadow-2xl"
            data-testid="img-arrests"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {impactStats.map((stat, index) => (
            <div 
              key={index}
              className="text-center bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
              data-testid={`impact-stat-${index}`}
            >
              <div className="w-20 h-20 bg-[#d4af37]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-10 h-10 text-[#d4af37]" />
              </div>
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
