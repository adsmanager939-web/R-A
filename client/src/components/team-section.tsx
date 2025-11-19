import { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import andrewOringer from "@assets/andrew-l-oringer-45070_1759490816557.jpg";
import barbaraWheaton from "@assets/barbara-k-wheaton-1506_1759490816558.jpg";
import benjaminBruner from "@assets/benjamin-d-bruner-185931_1759490816558.png";
import frankKnowlton from "@assets/frank-b-b-knowlton-83755_1759490816558.jpg";
import greerMallette from "@assets/greer-b-mallette-166565_1759490816559.jpg";
import jayEbelhar from "@assets/jay-a-ebelhar-204204_1759490816559.png";
import johnBalhoff from "@assets/john-t-balhoff-ii-117939_1759490816559.jpg";
import jonathanSundheimer from "@assets/jonathan-sundheimer-333814_1759490816559.jpg";
import linseyGleason from "@assets/linsey-gleason-200324_1759490816560.jpg";
import meganJerabek from "@assets/megan-jerabek-242237_1759490816560.jpg";
import nicholasPagliari from "@assets/nicholas-r-pagliari-195995_1759490816560.png";
import davidAndress from "@assets/p-david-andress-139548_1759490816560.png";

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
    { id: 1, name: "P. David Andress", position: "CEO", image: davidAndress },
    { id: 2, name: "Jason B Law", position: "Lawyer", image: andrewOringer },
    { id: 3, name: "Jay A. Ebelhar", position: "Fraud Investigator", image: barbaraWheaton },
    { id: 4, name: "James Ashford", position: "Lawyer", image: benjaminBruner },
    { id: 5, name: "Jack S Chamberlain", position: "Fraud Investigator", image: frankKnowlton },
    { id: 6, name: "Greer B. Mallette", position: "Lawyer", image: greerMallette },
    { id: 7, name: "Domenic Miller", position: "Fraud Investigator", image: jayEbelhar },
    { id: 8, name: "John T. Balhoff II", position: "Lawyer", image: johnBalhoff },
    { id: 9, name: "Jonathan Sundheimer", position: "Fraud Investigator", image: jonathanSundheimer },
    { id: 10, name: "Linsey Gleason", position: "Lawyer", image: linseyGleason },
    { id: 11, name: "Megan Jerabek", position: "Fraud Investigator", image: meganJerabek },
    { id: 12, name: "Nicholas R. Pagliari", position: "Lawyer", image: nicholasPagliari },
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
                    {/* Team member image */}
                    <div className="aspect-[3/4] overflow-hidden">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
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
