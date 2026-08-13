export default function AboutSection() {
  const features = [
    "Professional team of 1,300+ lawyers and investigators",
    "Cost-effective, transparent fee structure",
    "92% case success rate",
    "100% confidential and secure case handling",
  ];

  return (
    <section id="about" className="py-24 bg-[#F6F2EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="/team-group.jpg"
              alt="Refund & Associates team"
              className="w-full h-auto"
              data-testid="img-team"
            />
          </div>
          <div>
            <p className="text-xs text-[#7B1418] uppercase tracking-widest font-bold mb-4">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#000000] uppercase leading-none tracking-tight mb-8">
              A Team of Seasoned<br />Professionals
            </h2>
            <p className="text-gray-400 mb-10 leading-relaxed text-sm">
              Our team includes over 1,300 skilled lawyers and fraud investigators, each bringing
              specialized expertise to every case. With deep industry knowledge and advanced
              investigative tools, we handle even the most complex fraud cases with precision
              and discretion.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-sm text-[#000000]"
                  data-testid={`feature-${index}`}
                >
                  <span className="text-[#7B1418] font-bold flex-shrink-0 mt-px">—</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
