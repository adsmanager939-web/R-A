import { Check } from "lucide-react";
import teamImage from "@assets/image_1759269073608.png";

export default function AboutSection() {
  const features = [
    "Professional team",
    "Cost-effective solutions",
    "Record time results",
    "100% Transparency"
  ];

  return (
    <section id="about" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">A Team of Seasoned Professionals</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our team includes over 1,300 skilled lawyers and fraud investigators, each bringing specialized expertise to every case. With deep industry knowledge and advanced investigative tools, we handle even the most complex fraud cases with precision and dedication.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <img 
              src={teamImage} 
              alt="Professional team of fraud investigators" 
              className="rounded-xl shadow-lg w-full h-auto"
              data-testid="img-team"
            />
          </div>
          <div className="space-y-4">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3"
                data-testid={`feature-${index}`}
              >
                <div className="bg-[#d4af37] text-white p-1.5 rounded-full flex-shrink-0">
                  <Check className="w-5 h-5" />
                </div>
                <p className="text-lg font-semibold text-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
