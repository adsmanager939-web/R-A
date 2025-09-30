import { DollarSign, Users, Award, TrendingUp } from "lucide-react";

export default function OurWorkSection() {
  const stats = [
    { icon: DollarSign, value: "$2.4B+", label: "Funds Recovered" },
    { icon: Users, value: "200,000+", label: "Clients Served" },
    { icon: Award, value: "92%", label: "Success Rate" },
    { icon: TrendingUp, value: "1,300+", label: "Expert Team" }
  ];

  const caseStudies = [
    {
      title: "International Crypto Fraud Recovery",
      amount: "$4.2M",
      type: "Cryptocurrency Scam",
      description: "Successfully recovered funds from a sophisticated crypto investment scheme affecting 150+ victims across 12 countries."
    },
    {
      title: "Romance Scam Investigation",
      amount: "$850K",
      type: "Romance Fraud",
      description: "Tracked perpetrators across multiple jurisdictions and recovered funds for victims of an organized romance scam network."
    },
    {
      title: "Investment Fraud Case",
      amount: "$1.8M",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
}
