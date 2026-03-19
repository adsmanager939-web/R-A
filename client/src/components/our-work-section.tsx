import { CheckCircle } from "lucide-react";

export default function OurWorkSection() {
  const bullets = [
    "Canada-wide support for cross-border disputes",
    "Structured, evidence-led process",
    "Clear scope & transparent fees upfront",
    "Confidential handling of sensitive cases",
    "No false promises or recovery scam tactics",
  ];

  return (
    <section id="our-work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs text-[#7B1418] uppercase tracking-widest font-bold mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#000000] uppercase leading-none tracking-tight mb-8">
              Proven Experience<br />in Fraud Recovery
            </h2>
            <div className="flex items-end gap-4 mb-8">
              <span className="text-8xl font-black text-[#7B1418]" data-testid="stat-success-rate">92%</span>
              <div className="pb-3">
                <div className="text-[#000000] font-bold text-lg">Success Rate</div>
                <div className="text-gray-400 text-sm">In Recovery</div>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-600">
                  <CheckCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-300 leading-relaxed">
              Results are not guaranteed. Outcomes depend on evidence, timing, and third parties.
            </p>
          </div>
          <div>
            <img
              src="/our-work.png"
              alt="Fraudsters arrested by authorities"
              className="w-full h-auto"
              data-testid="img-arrests"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
