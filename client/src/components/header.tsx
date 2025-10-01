import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon, Phone, Award, Users, TrendingUp } from "lucide-react";
import Logo from "./logo";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "investigations", label: "Investigations" },
    { id: "collaboration", label: "Partners" },
    { id: "our-work", label: "Our Work" },
    { id: "testimonials", label: "Testimonials" },
    { id: "about", label: "About us" },
    { id: "team", label: "Team" },
    { id: "locations", label: "Locations" },
    { id: "help", label: "Help" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top Bar - Trust Indicators */}
      <div className="bg-gradient-to-r from-[#1a3a52] via-[#2a4a62] to-[#1a3a52] text-white py-2 border-b border-[#d4af37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-xs md:text-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2" data-testid="trust-clients">
                <Users className="w-4 h-4 text-[#d4af37]" />
                <span className="hidden sm:inline">200,000+ Canadians Served</span>
                <span className="sm:hidden">200K+ Canadians</span>
              </div>
              <div className="flex items-center gap-2" data-testid="trust-rating">
                <Award className="w-4 h-4 text-[#d4af37]" />
                <span>4.9/5 Rating</span>
              </div>
              <div className="flex items-center gap-2" data-testid="trust-success">
                <TrendingUp className="w-4 h-4 text-[#d4af37]" />
                <span className="hidden md:inline">92% Success Rate</span>
                <span className="md:hidden">92% Success</span>
              </div>
            </div>
            <a 
              href="tel:+12264796091" 
              className="flex items-center gap-2 hover:text-[#d4af37] transition-colors font-semibold"
              data-testid="header-phone"
            >
              <Phone className="w-4 h-4" />
              <span>+1 (226) 479-6091</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-gradient-to-r from-[#0a1929] via-[#1a3a52] to-[#0a1929] backdrop-blur-lg shadow-2xl border-b border-[#d4af37]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center gap-8">
              <Logo variant="white" />
            </div>
            
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-4 py-2 text-white/90 font-semibold text-sm uppercase tracking-wide hover:text-[#d4af37] transition-all group"
                  data-testid={`nav-${item.id}`}
                  style={{ letterSpacing: '0.05em' }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#d4af37] to-[#b8941f] group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </nav>
            
            <Button 
              onClick={() => scrollToSection("contact")}
              className="hidden lg:flex bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#b8941f] hover:to-[#d4af37] text-white font-bold px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              data-testid="button-free-consultation-header"
            >
              Free Consultation
            </Button>
            
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" data-testid="button-mobile-menu">
                  <MenuIcon className="h-6 w-6 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-gradient-to-br from-[#1a3a52] to-[#2a4a62] text-white border-l border-[#d4af37]/20">
                <div className="flex flex-col space-y-6 mt-12">
                  <Logo variant="white" />
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-white hover:text-[#d4af37] font-semibold text-lg py-3 uppercase tracking-wide transition-colors"
                      data-testid={`mobile-nav-${item.id}`}
                      style={{ letterSpacing: '0.05em' }}
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button 
                    onClick={() => scrollToSection("contact")}
                    className="mt-4 bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#b8941f] hover:to-[#d4af37] text-white font-bold py-6 rounded-full"
                    data-testid="button-free-consultation-mobile"
                  >
                    Free Consultation
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
