import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TeamSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const teamMembers = [
    { id: 1, name: "P. David Andress", position: "CEO", image: "/team/member1.png" },
    { id: 2, name: "Jason B Law", position: "Fraud Investigator", image: "/team/member2.png" },
    { id: 3, name: "Jay A. Ebelhar", position: "Fraud Investigator", image: "/team/member3.png" },
    { id: 4, name: "James Ashford", position: "Lawyer", image: "/team/member4.png" },
    { id: 5, name: "Jack S Chamberlain", position: "Fraud Investigator", image: "/team/member5.png" },
    { id: 6, name: "Greer B. Mallette", position: "Lawyer", image: "/team/member6.png" },
    { id: 7, name: "Domenic Miller", position: "Fraud Investigator", image: "/team/member7.png" },
    { id: 8, name: "John T. Balhoff II", position: "Lawyer", image: "/team/member8.png" },
    { id: 9, name: "Jonathan Sundheimer", position: "Fraud Investigator", image: "/team/member9.png" },
    { id: 10, name: "Linsey Gleason", position: "Lawyer", image: "/team/member10.png" },
  ];

  return (
    <section id="team" className="py-24 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-xs text-[#FFD700] uppercase tracking-widest font-bold mb-4">Our People</p>
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase leading-none tracking-tight">
            Expert Team
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef} data-testid="team-carousel">
            <div className="flex gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                  data-testid={`team-member-${member.id}`}
                >
                  <div className="bg-[#111111] overflow-hidden">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div className="p-5 border-t border-white/10">
                      <h3 className="text-base font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-[#FFD700] text-xs uppercase tracking-widest">{member.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-[45%] -translate-y-1/2 -translate-x-3 bg-[#7B1418] hover:bg-[#5E0F12] p-3 transition-colors z-10"
            aria-label="Previous team member"
            data-testid="carousel-prev"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <button
            onClick={scrollNext}
            className="absolute right-0 top-[45%] -translate-y-1/2 translate-x-3 bg-[#7B1418] hover:bg-[#5E0F12] p-3 transition-colors z-10"
            aria-label="Next team member"
            data-testid="carousel-next"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
