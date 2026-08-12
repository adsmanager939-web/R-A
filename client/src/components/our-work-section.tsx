export default function OurWorkSection() {
  const bullets = [
    "Canada-wide support for cross-border disputes",
    "Structured, evidence-led process",
    "Clear scope and transparent fees upfront",
    "Confidential handling of sensitive cases",
    "No false promises or recovery scam tactics",
  ];

  return (
    <section id="our-work" className="py-24 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs text-[#FFD700] uppercase tracking-widest font-bold mb-4">Why Choose Us</p>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-none tracking-tight mb-10">
              Proven Experience<br />in Fraud Recovery
            </h2>

            <div className="border-t border-white/10 pt-8 mb-10">
              <span className="text-6xl font-black text-white" data-testid="stat-success-rate">92%</span>
              <p className="text-white/30 text-xs uppercase tracking-widest mt-2">Case Success Rate</p>
            </div>

            <ul className="space-y-4 mb-8">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-4 text-white/60 text-sm">
                  <span className="text-[#7B1418] font-bold flex-shrink-0 mt-px">—</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-white/15 leading-relaxed">
              Results are not guaranteed. Outcomes depend on evidence, timing, and third parties.
            </p>
          </div>
          <div>
            <img
              src="/our-work.png"
              alt="Fraud recovery investigation"
              className="w-full h-auto"
              data-testid="img-arrests"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
