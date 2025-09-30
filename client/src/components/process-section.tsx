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
      title: "Share Your Case",
      description: "Tell us about your situation through our secure form or phone consultation. All information is confidential."
    },
    {
      number: 2,
      title: "Free Consultation",
      description: "Our experts review your case and provide a free assessment of recovery prospects and next steps."
    },
    {
      number: 3,
      title: "Investigation",
      description: "We trace funds, gather evidence, and work with law enforcement and financial institutions."
    },
    {
      number: 4,
      title: "Recovery",
      description: "We pursue all legal avenues to recover your funds and keep you informed throughout the process."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How We Help You Recover Your Funds</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our proven 4-step process has helped hundreds of victims recover millions in lost funds.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
