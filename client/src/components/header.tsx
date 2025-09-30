import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";
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
    { id: "about", label: "About Us" },
    { id: "how-it-works", label: "How It Works" },
    { id: "success-stories", label: "Success Stories" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary font-medium transition-colors"
                data-testid={`nav-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <Button 
            onClick={() => scrollToSection("contact")}
            className="hidden md:block"
            data-testid="button-free-consultation-header"
          >
            Get Free Consultation
          </Button>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-mobile-menu">
                <MenuIcon className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-foreground hover:text-primary font-medium py-2"
                    data-testid={`mobile-nav-${item.id}`}
                  >
                    {item.label}
                  </button>
                ))}
                <Button 
                  onClick={() => scrollToSection("contact")}
                  className="mt-4"
                  data-testid="button-free-consultation-mobile"
                >
                  Get Free Consultation
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
