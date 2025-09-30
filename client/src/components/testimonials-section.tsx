import { Button } from "@/components/ui/button";

export default function TestimonialsSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      id: 1,
      amount: "$85,000 Recovered",
      quote: "I lost $85,000 to a crypto investment scam. TrueClaim's team worked tirelessly for 8 months and recovered 100% of my funds. I can't thank them enough.",
      initials: "S.M.",
      name: "Sarah M.",
      type: "Crypto Scam Victim"
    },
    {
      id: 2,
      amount: "$42,500 Recovered",
      quote: "After falling victim to a romance scam, I thought my money was gone forever. TrueClaim proved me wrong and got most of it back through legal channels.",
      initials: "J.R.",
      name: "James R.",
      type: "Romance Scam Victim"
    },
    {
      id: 3,
      amount: "$120,000 Recovered",
      quote: "Professional, knowledgeable, and compassionate. They recovered my retirement savings from an investment fraud and guided me through every step.",
      initials: "M.T.",
      name: "Maria T.",
      type: "Investment Scam Victim"
    }
  ];

  return (
    <section id="success-stories" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Success Stories</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real recoveries from real clients. See how we've helped victims get their money back.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card p-8 rounded-xl" data-testid={`testimonial-${testimonial.id}`}>
              <div className="flex items-center mb-4">
                <div className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold">
                  {testimonial.amount}
                </div>
              </div>
              <blockquote className="text-muted-foreground mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.initials}
                </div>
                <div className="ml-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.type}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-primary text-primary-foreground rounded-xl p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Get Your Money Back?</h3>
          <p className="text-blue-100 mb-6">Join hundreds of satisfied clients who trusted us to recover their funds.</p>
          <Button 
            onClick={scrollToContact}
            variant="secondary"
            className="bg-white text-primary hover:bg-gray-50 px-8 py-3 font-semibold"
            data-testid="button-free-consultation-cta"
          >
            Get Your Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
