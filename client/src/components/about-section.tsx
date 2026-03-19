import { CheckCircle } from "lucide-react";

export default function AboutSection() {
  const features = [
    "Professional team of 1,300+ lawyers & investigators",
    "Cost-effective, transparent fee structure",
    "Record time results with a 92% success rate",
    "100% Confidential & secure handling",
  ];

  return (
    <section id="about" className="py-24 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img
              src="/team-group.jpg"
              alt="Refund & Associates team of professionals"
              className="w-full h-auto"
              data-testid="img-team"
            />
          </div>
          <div>
            <p className="text-xs text-[#FFD700] uppercase tracking-widest font-bold mb-4">Who We Are</p>
            <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-none tracking-tight mb-8">
              A Team of Seasoned<br />Professionals
            </h2>
            <p className="text-white/60 mb-10 leading-relaxed">
              Our team includes over 1,300 skilled lawyers and fraud investigators, each bringing specialized expertise to every case. With deep industry knowledge and advanced investigative tools, we handle even the most complex fraud cases with precision and dedication.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                  data-testid={`feature-${index}`}
                >
                  <CheckCircle className="w-5 h-5 text-[#FFD700] flex-shrink-0 mt-0.5" />
                  <p className="text-white/80 font-medium">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
