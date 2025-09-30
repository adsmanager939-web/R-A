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
      number: 1,
      title: "Gather the Evidence",
      description: "We collect essential documentation, including bank statements, transaction history, and relevant correspondence, to thoroughly pursue your case. All information is kept strictly confidential and used solely for internal purposes."
    },
    {
      number: 2,
      title: "Cooperation with Authorities",
      description: "Systematically confronting entities involved in the illicit transfer of your assets, we leverage our proven expertise and tenacity to recover your funds. Our team collaborates with government departments and international investigative agencies to track transactions, identify perpetrators, and bring them to justice."
    },
    {
      number: 3,
      title: "Recover the Funds",
      description: "Conducting a thorough preliminary assessment, we carefully evaluate each case's recovery potential, leveraging our 86% success rate to guide our approach. We prioritize secure, legally compliant transactions to ensure a safe recovery process."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How We Help You Recover Your Funds</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 3-step process has helped over 200,000 clients recover their lost funds with an 86% success rate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="step-card bg-card p-8 rounded-xl text-center" data-testid={`step-${step.number}`}>
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg"
            onClick={scrollToContact}
            className="px-8 py-4 text-lg font-semibold"
            data-testid="button-start-recovery"
          >
            Start Your Recovery Today
          </Button>
        </div>
      </div>
    </section>
  );
}
