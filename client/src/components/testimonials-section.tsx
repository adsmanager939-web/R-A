import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

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
      quote: "Anthony and his team have done an outstanding job and should be commended for their determination, professionalism, and patience in resolving my case successfully. From the very beginning, they kept me informed and worked tirelessly to ensure that my funds were recovered.",
      name: "Jan Weber",
      location: "Nova Scotia",
      rating: 5
    },
    {
      id: 2,
      quote: "A big thank you to Jack and the team for helping me with my case and navigating all the hurdles along the way. I didn't expect to recover a penny, but with the help of Refund & Associates, a large portion of my capital was successfully recovered. Highly recommend!",
      name: "Tim Klein",
      location: "Ottawa",
      rating: 5
    },
    {
      id: 3,
      quote: "I picked up Refund & Associates on a Google search after reading the reviews, and contacted them to see if they could help me with a crypto scam. From the very start, they've been helpful and thorough. I'm only a month into the case, and they've already recovered some of my funds.",
      name: "Paul Richter",
      location: "British Columbia",
      rating: 5
    },
    {
      id: 4,
      quote: "Henry was so helpful with getting all my money back that I lost through crypto. He was so helpful and informative the whole way through the process. I personally lost six figures, which he got back for me within two weeks. UNBELIEVABLE SERVICE.",
      name: "Marie S.",
      location: "Quebec",
      rating: 5
    },
    {
      id: 5,
      quote: "The team at Refund & Associates has been really amazing. Jack has been absolutely great with how he has handled my case so far with the banks. They have recovered some of my funds and are working on recovering the rest for me now.",
      name: "Ben L.",
      location: "Ontario",
      rating: 5
    },
    {
      id: 6,
      quote: "I was scammed in a romance fraud scheme and lost over $85,000. Refund & Associates worked with international authorities to track down the perpetrators and recover most of my money. They were compassionate, professional, and kept me informed every step of the way.",
      name: "Sarah M.",
      location: "Alberta",
      rating: 5
    },
    {
      id: 7,
      quote: "After falling victim to an investment scam, I thought my retirement savings were gone forever. The investigators at Refund & Associates worked tirelessly for months and managed to recover 80% of my funds. Their expertise in financial fraud is unmatched.",
      name: "Robert K.",
      location: "Manitoba",
      rating: 5
    },
    {
      id: 8,
      quote: "Professional, efficient, and results-driven. Refund & Associates helped me recover funds from a business email compromise scam. They coordinated with banks across multiple countries and managed to freeze the accounts before the money disappeared.",
      name: "Jennifer T.",
      location: "Saskatchewan",
      rating: 5
    }
  ];

  return (
    <section id="success-stories" className="py-24 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs text-[#FFD700] uppercase tracking-widest font-bold mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-none tracking-tight">
            Success Stories
          </h2>
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
                  <div className="border border-white/10 p-8 h-full flex flex-col hover:border-[#FFD700]/20 transition-colors">
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FFD700] text-[#FFD700]" />
                      ))}
                    </div>

                    <blockquote className="text-white/60 mb-6 flex-grow leading-relaxed text-sm">
                      "{testimonial.quote}"
                    </blockquote>

                    <div className="flex items-center pt-4 border-t border-white/10">
                      <div className="w-10 h-10 bg-[#7B1418] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div className="ml-3">
                        <div className="font-bold text-white text-sm">{testimonial.name}</div>
                        <div className="text-xs text-white/40 uppercase tracking-widest">{testimonial.location}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 bg-[#7B1418] hover:bg-[#5E0F12] p-3 transition-colors z-10"
            data-testid="button-prev-testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-[#7B1418] hover:bg-[#5E0F12] p-3 transition-colors z-10"
            data-testid="button-next-testimonial"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
