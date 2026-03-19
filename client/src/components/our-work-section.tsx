import { CheckCircle } from "lucide-react";

export default function OurWorkSection() {
  const bullets = [
    "Canada-wide support for cross-border disputes",
    "Structured, evidence-led process",
    "Clear scope & transparent fees upfront",
    "Confidential handling of sensitive cases",
    "No false promises or recovery scam tactics",
  ];

  const caseStudies = [
    {
      amount: "CAD 200M",
      type: "Cryptocurrency Scam",
      quote: "A trading platform showed consistent profits on a demo account. When I tried to withdraw, they demanded escalating fees. The dashboard kept showing gains while my money vanished.",
      tags: ["Fake trading platform", "Withdrawal blocked", "Escalating fees"],
    },
    {
      amount: "CAD 16M",
      type: "Romance Investment Scam",
      quote: "We talked for months before any mention of money. He introduced me to 'his broker' and I transferred funds in stages, always coached on what to say to my bank.",
      tags: ["Long grooming period", "Coached bank transfers", "Emotional manipulation"],
    },
    {
      amount: "CAD 365M",
      type: "Broker Impersonation",
      quote: "The platform looked legitimate — professional website, regulatory badges, a mobile app. The first small withdrawal worked, which made me trust them with more. Then the site went offline.",
      tags: ["Cloned broker branding", "Small initial withdrawal", "Platform disappeared"],
    },
  ];

  return (
    <section id="our-work" className="py-24 bg-[#000000] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
          <div>
            <p className="text-xs text-[#FFD700] uppercase tracking-widest font-bold mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-none tracking-tight mb-8">
              Proven Experience<br />in Fraud Recovery
            </h2>
            <div className="flex items-end gap-4 mb-8">
              <span className="text-8xl font-black text-[#FFD700]" data-testid="stat-success-rate">92%</span>
              <div className="pb-3">
                <div className="text-white font-bold text-lg">Success Rate</div>
                <div className="text-white/50 text-sm">In Recovery</div>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3 text-white/70">
                  <CheckCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-white/30 leading-relaxed">
              Results are not guaranteed. Outcomes depend on evidence, timing, and third parties.
            </p>
          </div>
          <div>
            <img
              src="/our-work.png"
              alt="Fraudsters arrested by authorities"
              className="w-full h-auto rounded-none"
              data-testid="img-arrests"
            />
          </div>
        </div>

        {/* Case Studies */}
        <div>
          <p className="text-xs text-[#FFD700] uppercase tracking-widest font-bold mb-4">Case Studies</p>
          <h2 className="text-4xl md:text-5xl font-black uppercase leading-none tracking-tight mb-12">
            Recent Cases
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="border border-white/10 p-8 hover:border-[#FFD700]/30 transition-colors"
                data-testid={`case-study-${index}`}
              >
                <p className="text-xs text-white/40 uppercase tracking-widest mb-3">{study.type}</p>
                <div className="text-3xl font-black text-[#7B1418] mb-6">{study.amount}</div>
                <blockquote className="text-white/60 text-sm leading-relaxed mb-6 italic">
                  "{study.quote}"
                </blockquote>
                <div className="flex flex-wrap gap-2">
                  {study.tags.map((tag, i) => (
                    <span key={i} className="text-xs bg-white/5 text-white/50 px-3 py-1 border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-white/25 mt-6 leading-relaxed">
            Published with client consent. Some details may be adjusted for clarity. These summaries reflect common fraud patterns we encounter.
          </p>
        </div>

      </div>
    </section>
  );
}
