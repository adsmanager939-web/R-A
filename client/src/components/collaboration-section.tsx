import { Building2, Globe, Users, FileCheck } from "lucide-react";

export default function CollaborationSection() {
  const partners = [
    {
      icon: Building2,
      title: "Law Enforcement Agencies",
      description: "Direct collaboration with FBI, Interpol, and local police departments worldwide"
    },
    {
      icon: Globe,
      title: "International Authorities",
      description: "Partnerships with regulatory bodies and financial crime units across 50+ countries"
    },
    {
      icon: Users,
      title: "Financial Institutions",
      description: "Working relationships with major banks and payment processors for fund recovery"
    },
    {
      icon: FileCheck,
      title: "Legal Partners",
      description: "Network of specialized attorneys and legal experts in financial crime prosecution"
    }
  ];

  return (
    <section id="collaboration" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1a3a52] mb-4">Global Collaboration Network</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our success is built on strong partnerships with authorities and institutions worldwide
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="text-center p-6"
              data-testid={`collaboration-card-${index}`}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#d4af37] to-[#b8941f] rounded-full flex items-center justify-center mx-auto mb-4">
                <partner.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#1a3a52] mb-3">{partner.title}</h3>
              <p className="text-gray-600 leading-relaxed">{partner.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
