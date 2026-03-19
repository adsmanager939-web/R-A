import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon, Phone } from "lucide-react";
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
    { id: "about", label: "About" },
    { id: "investigations", label: "Services" },
    { id: "how-it-works", label: "How It Works" },
    { id: "help", label: "FAQ" },
    { id: "our-work", label: "Results" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#000000] border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo variant="white" />

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="relative px-4 py-2 text-white/80 font-medium text-sm uppercase tracking-widest hover:text-[#FFD700] transition-colors"
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/16134160183"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 text-white/70 hover:text-[#FFD700] transition-colors text-sm"
              data-testid="header-phone"
            >
              <Phone className="w-4 h-4" />
              <span>+1 (613) 416-0183</span>
            </a>

            <Button
              onClick={() => scrollToSection("contact")}
              className="hidden lg:flex bg-[#7B1418] hover:bg-[#5E0F12] text-white font-semibold px-5 py-2 text-sm rounded"
              data-testid="button-get-consultation-header"
            >
              Free Consultation
            </Button>

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden" data-testid="button-mobile-menu">
                  <MenuIcon className="h-6 w-6 text-white" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-[#000000] text-white border-l border-white/10">
                <div className="flex flex-col space-y-6 mt-12">
                  <Logo variant="white" />
                  {navItems.map((item) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-white/80 hover:text-[#FFD700] font-medium text-base py-2 uppercase tracking-widest transition-colors"
                      data-testid={`mobile-nav-${item.id}`}
                    >
                      {item.label}
                    </button>
                  ))}
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="mt-4 bg-[#7B1418] hover:bg-[#5E0F12] text-white font-bold py-5 rounded"
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
