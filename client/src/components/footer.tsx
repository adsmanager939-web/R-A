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
    { id: "how-it-works", label: "How It Works" },
    { id: "help", label: "FAQ" },
    { id: "collaboration", label: "Insights" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer className="bg-[#000000] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Logo variant="white" />

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white/40 hover:text-[#FFD700] transition-colors text-xs uppercase tracking-widest"
                data-testid={`footer-link-${link.id}`}
              >
                {link.label}
              </button>
            ))}
            <Link
              href="/privacy-policy"
              className="text-white/40 hover:text-[#FFD700] transition-colors text-xs uppercase tracking-widest"
              data-testid="footer-link-privacy-nav"
            >
              Privacy
            </Link>
          </nav>

          <p className="text-xs text-white/25 text-center md:text-right">
            &copy; 2013 Refund &amp; Associates Ltd.<br />
            <span className="text-white/15">FINTRAC authorized &middot; BN: 842594962</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
