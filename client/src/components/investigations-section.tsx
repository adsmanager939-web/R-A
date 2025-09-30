import { FileText, ShieldCheck, CircleDollarSign } from "lucide-react";

export default function InvestigationsSection() {
  const steps = [
    {
      icon: FileText,
      title: "Gather the evidence",
      description: "We collect essential documentation, including bank statements, transaction history, and relevant correspondence, to thoroughly pursue your case. All information is kept strictly confidential and used solely for internal purposes, with general contact details, like your email, occasionally used to connect with individuals in similar situations."
    },
    {
      icon: ShieldCheck,
      title: "Cooperation with authorities",
      description: "Systematically confronting entities involved in the illicit transfer of your assets, we leverage our proven expertise and tenacity to recover your funds. Our team collaborates with the appropriate government departments and international investigative agencies to track transactions, identify perpetrators, and bring them to justice."
    },
    {
      icon: CircleDollarSign,
      title: "Recover the funds",
      description: "Conducting a thorough preliminary assessment, we carefully evaluate each case's recovery potential, leveraging our 92% success rate to guide our approach. We prioritize secure, legally compliant transactions to ensure a safe recovery process and are committed to achieving the best possible outcomes to help individuals recover their lost funds."
    }
  ];

  return (
    <section id="investigations" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1a3a52] mb-4">Our Investigation Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A proven three-step approach to recovering your funds and bringing perpetrators to justice
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 text-center"
              data-testid={`investigation-step-${index}`}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a3a52] to-[#2a4a62] rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-10 h-10 text-[#d4af37]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a3a52] mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed text-left">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
