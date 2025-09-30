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
      amount: "Six Figures Recovered",
      quote: "Henry was so helpful with getting all my money back that I lost through crypto. He was so helpful and informative the whole way through the process. I will always recommend him to anyone who needs help recovering funds. I personally lost six figures, which he got back for me within two weeks. UNBELIEVABLE SERVICE.",
      initials: "M.S.",
      name: "Marie S.",
      type: "Quebec"
    },
    {
      id: 2,
      amount: "Highly Recommended",
      quote: "The team at TrueClaim has been really amazing. Jack has been absolutely great with how he has handled my case so far with the banks. They have recovered some of my funds and are working on recovering the rest for me now. I really wasn't expecting anything back at all, so I'm very grateful for this. The whole team pays a lot of attention to detail and replies quickly to my queries.",
      initials: "B.L.",
      name: "Ben L.",
      type: "Ontario"
    },
    {
      id: 3,
      amount: "Outstanding Results",
      quote: "Anthony and his team have done an outstanding job and should be commended for their determination, professionalism, and patience in resolving my case successfully. From the very beginning, they kept me informed and worked tirelessly to ensure that my funds were recovered. Their dedication and thorough approach made all the difference.",
      initials: "J.W.",
      name: "Jan W.",
      type: "Nova Scotia"
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
