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
          <h2 className="text-4xl font-bold text-[#000000] mb-4">Our Investigation Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A proven three-step approach to recovering your funds and bringing perpetrators to justice
          </p>
        </div>
        
        <div className="space-y-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 flex items-start gap-6"
              data-testid={`investigation-step-${index}`}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-[#000000] to-[#B91C1C] rounded-full flex items-center justify-center flex-shrink-0">
                <step.icon className="w-10 h-10 text-[#FFD700]" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl font-bold text-[#B91C1C]">{index + 1}.</span>
                  <h3 className="text-xl font-bold text-[#000000]">{step.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
