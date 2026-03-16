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
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#000000] mb-4">Our Expert Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A global network of seasoned investigators, attorneys, and fraud recovery specialists
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef} data-testid="team-carousel">
            <div className="flex gap-8">
              {teamMembers.map((member) => (
                <div 
                  key={member.id}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                  data-testid={`team-member-${member.id}`}
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="aspect-[3/4] overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-[#000000] mb-2">{member.name}</h3>
                      <p className="text-gray-600">{member.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous team member"
            data-testid="carousel-prev"
          >
            <ChevronLeft className="w-6 h-6 text-[#000000]" />
          </button>
          
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="Next team member"
            data-testid="carousel-next"
          >
            <ChevronRight className="w-6 h-6 text-[#000000]" />
          </button>
        </div>

        <div className="text-center mt-8 text-gray-500 text-sm">
          Use the arrow buttons or swipe to view more team members
        </div>
      </div>
    </section>
  );
}
