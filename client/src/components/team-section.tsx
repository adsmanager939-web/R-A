import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, User } from "lucide-react";

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

  // Placeholder team members - images will be added later
  const teamMembers = [
    { id: 1, name: "Team Member 1", position: "Position Title" },
    { id: 2, name: "Team Member 2", position: "Position Title" },
    { id: 3, name: "Team Member 3", position: "Position Title" },
    { id: 4, name: "Team Member 4", position: "Position Title" },
    { id: 5, name: "Team Member 5", position: "Position Title" },
    { id: 6, name: "Team Member 6", position: "Position Title" },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1a3a52] mb-4">Our Expert Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A global network of seasoned investigators, attorneys, and fraud recovery specialists
          </p>
        </div>
        
        <div className="relative">
          {/* Carousel */}
          <div className="overflow-hidden" ref={emblaRef} data-testid="team-carousel">
            <div className="flex gap-8">
              {teamMembers.map((member) => (
                <div 
                  key={member.id}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
                  data-testid={`team-member-${member.id}`}
                >
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Placeholder for team member image */}
                    <div className="aspect-[3/4] bg-gradient-to-br from-[#1a3a52] to-[#2a4a62] flex items-center justify-center">
                      <User className="w-24 h-24 text-[#d4af37]/30" />
                    </div>
                    
                    {/* Team member info */}
                    <div className="p-6 text-center">
                      <h3 className="text-xl font-bold text-[#1a3a52] mb-2">{member.name}</h3>
                      <p className="text-gray-600">{member.position}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="Previous team member"
            data-testid="carousel-prev"
          >
            <ChevronLeft className="w-6 h-6 text-[#1a3a52]" />
          </button>
          
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors z-10"
            aria-label="Next team member"
            data-testid="carousel-next"
          >
            <ChevronRight className="w-6 h-6 text-[#1a3a52]" />
          </button>
        </div>

        {/* Instructions for scrolling */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          Use the arrow buttons or swipe to view more team members
        </div>
      </div>
    </section>
  );
}
