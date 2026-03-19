import { Link } from "wouter";
import Logo from "./logo";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "investigations", label: "Services" },
    { id: "help", label: "FAQ" },
    { id: "our-work", label: "Results" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer className="bg-[#000000] text-white border-t border-white/10">
      {/* Single-row main bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <Logo variant="white" />

          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white/50 hover:text-[#FFD700] transition-colors text-xs uppercase tracking-widest"
                data-testid={`footer-link-${link.id}`}
              >
                {link.label}
              </button>
            ))}
            <Link
              href="/privacy-policy"
              className="text-white/50 hover:text-[#FFD700] transition-colors text-xs uppercase tracking-widest"
              data-testid="footer-link-privacy-nav"
            >
              Privacy Policy
            </Link>
          </nav>

          <div className="text-xs text-white/30 text-right">
            &copy; 2013 Refund &amp; Associates Ltd.
          </div>
        </div>

        {/* Legal disclaimer */}
        <div className="border-t border-white/5 py-4">
          <p className="text-xs text-white/15 leading-relaxed">
            Refund & Associates is a trading name of Refund & Associates Ltd., registered in Canada. FINTRAC authorized, BN: 842594962, Registry ID: 2112580. Registered Office: Cambridge, Ontario. Refund & Associates does not provide financial investment services or financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
