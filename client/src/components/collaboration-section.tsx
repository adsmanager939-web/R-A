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

  const caseStudies = [
    {
      amount: "CAD 200M",
      type: "Cryptocurrency Scam",
      quote: "A trading platform showed consistent profits on a demo account. When I tried to withdraw, they demanded escalating fees. The dashboard kept showing gains while my money vanished.",
      tags: ["Fake trading platform", "Withdrawal blocked", "Escalating fees"],
    },
    {
      amount: "CAD 78M",
      type: "Romance Investment Scam",
      quote: "We talked for months before any mention of money. He introduced me to 'his broker' and I transferred funds in stages, always coached on what to say to my bank.",
      tags: ["Long grooming period", "Coached bank transfers", "Emotional manipulation"],
    },
    {
      amount: "CAD 42M",
      type: "Broker Impersonation",
      quote: "The platform looked legitimate — professional website, regulatory badges, a mobile app. The first small withdrawal worked, which made me trust them with more. Then the site went offline.",
      tags: ["Cloned broker branding", "Initial withdrawal allowed", "Platform disappeared"],
    },
  ];

  return (
    <section id="collaboration" className="py-24 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <div className="mb-12">
          <p className="text-xs text-[#FFD700] uppercase tracking-widest font-bold mb-4">Case Studies</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-none tracking-tight">
            Recent Cases
          </h2>
        </div>

        {/* Handshake banner image */}
        <div className="mb-14">
          <img
            src="/global-network.jpg"
            alt="International collaboration and partnership"
            className="w-full h-auto"
            data-testid="img-collaboration"
          />
        </div>

        {/* Case study cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mb-16">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="border border-white/10 p-8 hover:border-[#FFD700]/20 transition-colors"
              data-testid={`collaboration-card-${index}`}
            >
              <p className="text-xs text-white/40 uppercase tracking-widest mb-3">{study.type}</p>
              <div className="text-3xl font-black text-[#7B1418] mb-6">{study.amount}</div>
              <blockquote className="text-white/60 text-sm leading-relaxed mb-6 italic">
                "{study.quote}"
              </blockquote>
              <div className="flex flex-wrap gap-2">
                {study.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-white/5 text-white/40 px-3 py-1 border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-white/20 mb-16 leading-relaxed">
          Published with client consent. Some details may be adjusted for clarity. These summaries reflect common fraud patterns we encounter.
        </p>

        {/* Partner logos */}
        <div className="border-t border-white/10 pt-12">
          <p className="text-xs text-white/30 uppercase tracking-widest mb-8">Trusted Partners & Regulators</p>
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
                    className="max-h-12 max-w-full w-auto h-auto object-contain opacity-30 hover:opacity-60 transition-opacity"
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
