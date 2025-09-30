import { Building2, Globe, Users, FileCheck } from "lucide-react";
import ciaLogo from "@assets/Govt-logos - Copy (2)_1759259283932.png";
import hsbc from "@assets/1280px-HSBC_logo_(2018).svg_1759259266986.png";
import wealthsimple from "@assets/Capture 12_1759259271299.png";
import crypto from "@assets/crypto-com-vector-logo_1759259274018.png";
import fcac from "@assets/download (1)2_1759259276530.png";
import scotiabank from "@assets/download_1759259278402.png";
import cibc from "@assets/download1_1759259280258.png";
import fintrac from "@assets/download3_1759259282166.png";
import dhs from "@assets/Govt-logos - Copy (3)_1759259285578.png";
import dia from "@assets/Govt-logos - Copy (4)_1759259286964.png";
import canadaGov from "@assets/images5_1759259288482.png";
import kraken from "@assets/kraken-vector-logo_1759259289917.png";
import rbc from "@assets/Royal-Bank-of-Canada-Logo_1759259293197.png";
import td from "@assets/TD-Toronto-Dominion-Bank-Logo-2009-present_1759259295411.jpg";
import collaborationImage from "@assets/Capture1265_1759260749955.png";

export default function CollaborationSection() {
  const partners = [
    {
      icon: Building2,
      title: "Law Enforcement Agencies",
      description: "Direct collaboration with FBI, Interpol, and local police departments worldwide",
    },
    {
      icon: Globe,
      title: "International Authorities",
      description: "Partnerships with regulatory bodies and financial crime units across 50+ countries",
    },
    {
      icon: Users,
      title: "Financial Institutions",
      description: "Working relationships with major banks and payment processors for fund recovery",
    },
    {
      icon: FileCheck,
      title: "Legal Partners",
      description: "Network of specialized attorneys and legal experts in financial crime prosecution",
    },
  ];

  const logoPartners = [
    { name: "Central Intelligence Agency", logo: ciaLogo },
    { name: "HSBC", logo: hsbc },
    { name: "Wealthsimple", logo: wealthsimple },
    { name: "Crypto.com", logo: crypto },
    { name: "Financial Consumer Agency of Canada", logo: fcac },
    { name: "Scotiabank", logo: scotiabank },
    { name: "CIBC", logo: cibc },
    { name: "FINTRAC", logo: fintrac },
    { name: "Department of Homeland Security", logo: dhs },
    { name: "Defense Intelligence Agency", logo: dia },
    { name: "Government of Canada", logo: canadaGov },
    { name: "Kraken", logo: kraken },
    { name: "Royal Bank of Canada", logo: rbc },
    { name: "TD Bank", logo: td },
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

        <div className="mb-16">
          <img 
            src={collaborationImage} 
            alt="International collaboration and partnership" 
            className="w-full h-auto rounded-xl shadow-lg"
            data-testid="img-collaboration"
          />
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
          <style
            dangerouslySetInnerHTML={{
              __html: `
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
          `,
            }}
          />
          <div className="flex animate-scroll-left" data-testid="logo-marquee">
            {[...logoPartners, ...logoPartners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-8 flex items-center justify-center w-40 h-20"
                data-testid={`partner-logo-${index}`}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-16 max-w-full w-auto h-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
