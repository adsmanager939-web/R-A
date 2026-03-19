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

export default function CollaborationSection() {
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
    <section id="collaboration" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs text-[#7B1418] uppercase tracking-widest font-bold mb-4">Our Network</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#000000] uppercase leading-none tracking-tight">
            Global<br />Partners
          </h2>
        </div>

        <div className="mb-14">
          <img
            src="/global-network.jpg"
            alt="International collaboration and partnership"
            className="w-full h-auto"
            data-testid="img-collaboration"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-16">
          {[
            { title: "Law Enforcement", desc: "Direct collaboration with FBI, Interpol, and local police departments worldwide." },
            { title: "International Authorities", desc: "Partnerships with regulatory bodies and financial crime units across 50+ countries." },
            { title: "Financial Institutions", desc: "Working relationships with major banks and payment processors for fund recovery." },
          ].map((item, index) => (
            <div key={index} className="border-l border-black/10 pl-8 py-4" data-testid={`collaboration-card-${index}`}>
              <h3 className="text-lg font-bold text-[#000000] mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="border-t border-black/10 pt-12">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-8">Trusted Partners & Regulators</p>
          <div className="relative overflow-hidden">
            <style
              dangerouslySetInnerHTML={{
                __html: `
              @keyframes scroll-left {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
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
                  className="flex-shrink-0 mx-10 flex items-center justify-center w-36 h-16"
                  data-testid={`partner-logo-${index}`}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-12 max-w-full w-auto h-auto object-contain opacity-50 hover:opacity-80 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
