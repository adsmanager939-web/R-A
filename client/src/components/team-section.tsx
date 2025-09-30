import { Users, Award, Globe, Briefcase } from "lucide-react";

export default function TeamSection() {
  const teamStats = [
    {
      icon: Users,
      value: "1,300+",
      label: "Expert Professionals"
    },
    {
      icon: Award,
      value: "50+",
      label: "Years Combined Experience"
    },
    {
      icon: Globe,
      value: "75+",
      label: "Countries Represented"
    },
    {
      icon: Briefcase,
      value: "24/7",
      label: "Global Support"
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1a3a52] mb-4">Our Expert Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A global network of seasoned investigators, attorneys, and fraud recovery specialists
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {teamStats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg text-center"
              data-testid={`team-stat-${index}`}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#1a3a52] to-[#2a4a62] rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-[#d4af37]" />
              </div>
              <div className="text-3xl font-bold text-[#1a3a52] mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-[#1a3a52] mb-6">Specialized Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="font-bold text-[#1a3a52] mb-2">Fraud Investigators</h4>
              <p className="text-gray-600">Former law enforcement officers and certified fraud examiners with decades of experience</p>
            </div>
            <div>
              <h4 className="font-bold text-[#1a3a52] mb-2">Legal Counsel</h4>
              <p className="text-gray-600">Specialized attorneys in financial crime, asset recovery, and international law</p>
            </div>
            <div>
              <h4 className="font-bold text-[#1a3a52] mb-2">Technology Experts</h4>
              <p className="text-gray-600">Blockchain analysts and cybersecurity specialists using cutting-edge forensic tools</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
