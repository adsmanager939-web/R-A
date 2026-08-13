import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", slidesToScroll: 1 },
    [Autoplay({ delay: 3500, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => { if (emblaApi) emblaApi.scrollPrev(); }, [emblaApi]);
  const scrollNext = useCallback(() => { if (emblaApi) emblaApi.scrollNext(); }, [emblaApi]);

  const testimonials = [
    { id: 1, quote: "Anthony and his team have done an outstanding job and should be commended for their determination, professionalism, and patience in resolving my case successfully.", name: "Jan Weber", location: "Nova Scotia" },
    { id: 2, quote: "A big thank you to Jack and the team for helping me with my case and navigating all the hurdles along the way. A large portion of my capital was successfully recovered.", name: "Tim Klein", location: "Ottawa" },
    { id: 3, quote: "I found Refund & Associates on a Google search. From the very start, they have been helpful and thorough. I am only a month into the case, and they have already recovered some of my funds.", name: "Paul Richter", location: "British Columbia" },
    { id: 4, quote: "Henry was incredibly helpful with getting all my money back that I lost through crypto. I lost six figures, which he recovered within two weeks.", name: "Marie S.", location: "Quebec" },
    { id: 5, quote: "The team at Refund & Associates has been truly exceptional. Jack has handled my case with the banks in a very professional and thorough manner.", name: "Ben L.", location: "Ontario" },
    { id: 6, quote: "I was a victim of romance fraud and lost over $85,000. Refund & Associates worked with international authorities to trace the perpetrators and recover most of my funds.", name: "Sarah M.", location: "Alberta" },
    { id: 7, quote: "After an investment scam I thought my retirement savings were gone. The team managed to recover 80% of my funds. Their expertise in financial fraud is unmatched.", name: "Robert K.", location: "Manitoba" },
    { id: 8, quote: "Professional, efficient, and results-driven. Refund & Associates helped me recover funds from a business email compromise, coordinating with banks across multiple countries.", name: "Jennifer T.", location: "Saskatchewan" }
  ];

  return (
    <section id="success-stories" className="py-24 bg-[#F6F2EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs text-[#7B1418] uppercase tracking-widest font-bold mb-4">Testimonials</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#000000] uppercase leading-none tracking-tight">
            Client Accounts
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-px">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0"
                  data-testid={`testimonial-${t.id}`}
                >
                  <div className="border-l border-black/10 pl-8 pr-6 py-8 h-full flex flex-col">
                    <blockquote className="text-gray-400 flex-grow leading-relaxed text-sm mb-8 italic">
                      "{t.quote}"
                    </blockquote>
                    <div className="border-t border-black/10 pt-5">
                      <p className="font-bold text-[#000000] text-sm">{t.name}</p>
                      <p className="text-xs text-gray-300 uppercase tracking-widest mt-0.5">{t.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex gap-2 mt-10">
            <button
              onClick={scrollPrev}
              className="bg-[#7B1418] hover:bg-[#5E0F12] p-3 transition-colors"
              data-testid="button-prev-testimonial"
            >
              <ChevronLeft className="w-4 h-4 text-white" />
            </button>
            <button
              onClick={scrollNext}
              className="bg-[#7B1418] hover:bg-[#5E0F12] p-3 transition-colors"
              data-testid="button-next-testimonial"
            >
              <ChevronRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
