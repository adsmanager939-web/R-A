import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const testimonials = [
    {
      id: 1,
      quote: "Anthony and his team have done an outstanding job and should be commended for their determination, professionalism, and patience in resolving my case successfully. From the very beginning, they kept me informed and worked tirelessly to ensure that my funds were recovered. Their dedication and thorough approach made all the difference. I truly appreciate their efforts and the level of care they showed throughout the process. I would highly recommend this company to anyone in need of expert assistance in recovering lost funds.",
      name: "Jan Weber",
      location: "Nova Scotia",
      rating: 5
    },
    {
      id: 2,
      quote: "A big thank you to Jack and the team for helping me with my case and navigating all the hurdles along the way. I didn't expect to recover a penny, but with the help of True Claim, a large portion of my capital was successfully recovered. Highly recommend!",
      name: "Tim Klein",
      location: "Ottawa",
      rating: 5
    },
    {
      id: 3,
      quote: "I picked up True Claim on a Google search after reading the reviews, and contacted them to see if they could help me with a crypto scam. From the very start, they've been helpful and thorough. I'm only a month into the case, and they've already recovered some of my funds. Can't recommend these guys enough — true lifesavers.",
      name: "Paul Richter",
      location: "British Columbia",
      rating: 5
    },
    {
      id: 4,
      quote: "Henry was so helpful with getting all my money back that I lost through crypto. He was so helpful and informative the whole way through the process. I will always recommend him to anyone who needs help recovering funds. I personally lost six figures, which he got back for me within two weeks. UNBELIEVABLE SERVICE.",
      name: "Marie S.",
      location: "Quebec",
      rating: 5
    },
    {
      id: 5,
      quote: "The team at TrueClaim has been really amazing. Jack has been absolutely great with how he has handled my case so far with the banks. They have recovered some of my funds and are working on recovering the rest for me now. I really wasn't expecting anything back at all, so I'm very grateful for this. The whole team pays a lot of attention to detail and replies quickly to my queries.",
      name: "Ben L.",
      location: "Ontario",
      rating: 5
    },
    {
      id: 6,
      quote: "I was scammed in a romance fraud scheme and lost over $85,000. TrueClaim worked with international authorities to track down the perpetrators and recover most of my money. They were compassionate, professional, and kept me informed every step of the way. I can't thank them enough for giving me hope when I thought all was lost.",
      name: "Sarah M.",
      location: "Alberta",
      rating: 5
    },
    {
      id: 7,
      quote: "After falling victim to an investment scam, I thought my retirement savings were gone forever. The investigators at TrueClaim worked tirelessly for months and managed to recover 80% of my funds. Their expertise in financial fraud is unmatched. I highly recommend their services to anyone who has been scammed.",
      name: "Robert K.",
      location: "Manitoba",
      rating: 5
    },
    {
      id: 8,
      quote: "Professional, efficient, and results-driven. TrueClaim helped me recover funds from a business email compromise scam. They coordinated with banks across multiple countries and managed to freeze the accounts before the money disappeared. Their quick action saved my business. Thank you!",
      name: "Jennifer T.",
      location: "Saskatchewan",
      rating: 5
    }
  ];

  return (
    <section id="success-stories" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a3a52] mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real recoveries from real clients. See how we've helped victims get their money back.
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                  data-testid={`testimonial-${testimonial.id}`}
                >
                  <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 h-full flex flex-col">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#d4af37] text-[#d4af37]" />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-700 mb-6 flex-grow leading-relaxed">
                      {testimonial.quote}
                    </blockquote>
                    
                    <div className="flex items-center pt-4 border-t border-gray-100">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#1a3a52] to-[#2a4a62] rounded-full flex items-center justify-center text-white font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="ml-4">
                        <div className="font-semibold text-[#1a3a52]">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg border-2 border-gray-200 hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-white transition-all z-10"
            data-testid="button-prev-testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg border-2 border-gray-200 hover:border-[#d4af37] hover:bg-[#d4af37] hover:text-white transition-all z-10"
            data-testid="button-next-testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
