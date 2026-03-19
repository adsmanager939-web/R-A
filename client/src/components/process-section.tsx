import { Button } from "@/components/ui/button";

export default function ProcessSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const steps = [
    {
      number: "01",
      title: "Send Your Request",
      description: "Contact us through the online form. Share your details — we reply within 24 hours for an initial review."
    },
    {
      number: "02",
      title: "Case Review & Strategy",
      description: "We review the facts, check the payment trail, and outline a recovery route based on the strongest available path."
    },
    {
      number: "03",
      title: "Agreement & Formal Action",
      description: "After an agreement is in place, we begin formal steps and handle requests, disputes, and escalation where applicable."
    },
    {
      number: "04",
      title: "Recovery & Resolution",
      description: "We follow the process through the relevant channels to an outcome and keep you updated along the way."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <p className="text-xs text-[#7B1418] uppercase tracking-widest font-bold mb-4">The Process</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#000000] uppercase leading-none tracking-tight">
            How We<br />Help You
          </h2>
        </div>

        <div className="space-y-0">
          {steps.map((step, index) => (
            <div
              key={index}
              className="border-t border-black/10 py-10 grid grid-cols-1 md:grid-cols-[120px_1fr_1fr] gap-6 md:gap-12 group hover:border-[#7B1418]/30 transition-colors"
              data-testid={`step-${index + 1}`}
            >
              <span className="text-6xl font-black text-[#FFD700] leading-none">
                {step.number}
              </span>
              <h3 className="text-2xl font-bold text-[#000000] self-center">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed self-center">{step.description}</p>
            </div>
          ))}
          <div className="border-t border-black/10"></div>
        </div>

        <div className="mt-12">
          <Button
            size="lg"
            onClick={scrollToContact}
            className="bg-[#7B1418] hover:bg-[#5E0F12] text-white px-8 py-6 text-base font-bold uppercase tracking-wider rounded-none"
            data-testid="button-start-recovery"
          >
            Start Your Recovery Today
          </Button>
        </div>
      </div>
    </section>
  );
}
