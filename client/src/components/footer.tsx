import { Link } from "wouter";
import Logo from "./logo";
import { LinkedinIcon, TwitterIcon, FacebookIcon } from "lucide-react";

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
    { id: "our-work", label: "Results" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <footer className="bg-[#000000] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <Logo variant="white" className="mb-6" />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Our mission is to give hope back to those who have been deceived. Through relentless investigation and unwavering advocacy, we help victims of fraud reclaim their financial security.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-white/30 hover:text-[#FFD700] transition-colors" data-testid="link-linkedin">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/30 hover:text-[#FFD700] transition-colors" data-testid="link-twitter">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/30 hover:text-[#FFD700] transition-colors" data-testid="link-facebook">
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/60 hover:text-[#FFD700] transition-colors text-sm"
                    data-testid={`footer-link-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <Link href="/privacy-policy" className="text-white/60 hover:text-[#FFD700] transition-colors text-sm" data-testid="footer-link-privacy-nav">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-6">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://wa.me/16134160183" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#FFD700] transition-colors" data-testid="footer-phone">
                  +1 (613) 416-0183
                </a>
              </li>
              <li className="text-white/60" data-testid="footer-email">inquiry@refund-associates.com</li>
              <li className="text-white/60">Available 24/7</li>
            </ul>
            <div className="mt-8">
              <h5 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-3">Certifications</h5>
              <div className="text-sm text-white/50 space-y-1">
                <p>BBB A+ Rating</p>
                <p>NAIS Certified</p>
                <p>Licensed in 53 States</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <span className="text-xs text-white/30">&copy; 2013 Refund & Associates Ltd. All rights reserved.</span>
            <Link href="/privacy-policy" className="text-xs text-[#FFD700] hover:underline" data-testid="footer-link-privacy">
              Privacy Policy
            </Link>
          </div>
          <div className="text-xs text-white/20 leading-relaxed space-y-1">
            <p>
              Refund & Associates is a trading name of Refund & Associates Ltd., registered in Canada. FINTRAC authorized, Business Number (BN): 842594962, Registry ID: 2112580. Registered Office Location: Cambridge, Ontario. Created: September 7, 2006.
            </p>
            <p>
              Refund & Associates does not provide any financial investment services or financial advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
