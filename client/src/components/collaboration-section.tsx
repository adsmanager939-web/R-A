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

  const logoPartners = [
    { name: "Partner 1", logo: "https://via.placeholder.com/150x60/1a3a52/d4af37?text=Partner+1" },
    { name: "Partner 2", logo: "https://via.placeholder.com/150x60/1a3a52/d4af37?text=Partner+2" },
    { name: "Partner 3", logo: "https://via.placeholder.com/150x60/1a3a52/d4af37?text=Partner+3" },
    { name: "Partner 4", logo: "https://via.placeholder.com/150x60/1a3a52/d4af37?text=Partner+4" },
    { name: "Partner 5", logo: "https://via.placeholder.com/150x60/1a3a52/d4af37?text=Partner+5" },
    { name: "Partner 6", logo: "https://via.placeholder.com/150x60/1a3a52/d4af37?text=Partner+6" },
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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

        <div className="relative overflow-hidden bg-gray-50 py-8 rounded-xl">
          <style dangerouslySetInnerHTML={{ __html: `
            @keyframes scroll-left {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-scroll-left {
              animation: scroll-left 30s linear infinite;
            }
            .animate-scroll-left:hover {
              animation-play-state: paused;
            }
          `}} />
          <div className="flex animate-scroll-left" data-testid="logo-marquee">
            {[...logoPartners, ...logoPartners].map((partner, index) => (
              <div 
                key={index}
                className="flex-shrink-0 mx-8 flex items-center justify-center"
                data-testid={`partner-logo-${index}`}
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-16 w-auto opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
