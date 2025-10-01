import Logo from "./logo";
import { LinkedinIcon, TwitterIcon, FacebookIcon } from "lucide-react";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#1a3a52] to-[#2a4a62] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Logo variant="white" className="mb-6" />
            <p className="text-white/90 mb-6 max-w-md">
              Our mission is to give hope back to those who have been deceived. Through relentless investigation and unwavering advocacy, we help victims of fraud reclaim their confidence, their security, and their future.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-white/70 hover:text-[#d4af37] transition-colors"
                data-testid="link-linkedin"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-white/70 hover:text-[#d4af37] transition-colors"
                data-testid="link-twitter"
              >
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-white/70 hover:text-[#d4af37] transition-colors"
                data-testid="link-facebook"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="hover:text-[#d4af37] transition-colors"
                  data-testid="footer-link-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="hover:text-[#d4af37] transition-colors"
                  data-testid="footer-link-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("how-it-works")}
                  className="hover:text-[#d4af37] transition-colors"
                  data-testid="footer-link-how-it-works"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("success-stories")}
                  className="hover:text-[#d4af37] transition-colors"
                  data-testid="footer-link-success-stories"
                >
                  Success Stories
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-[#d4af37] transition-colors"
                  data-testid="footer-link-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <ul className="space-y-2 text-white/80">
              <li data-testid="footer-phone">+1 (226) 479-6091</li>
              <li data-testid="footer-email">contact@trueclaim.com</li>
              <li>Available 24/7</li>
              <li>Emergency Hotline</li>
            </ul>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2 text-white">Certifications</h5>
              <div className="text-sm text-white/80">
                <p>BBB A+ Rating</p>
                <p>NAIS Certified</p>
                <p>Licensed in 50 States</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-12 pt-8 text-center text-white">
          <p className="mb-4 font-semibold">&copy; 2013 TrueClaim & Associates Ltd. All rights reserved.</p>
          <div className="text-sm text-white/80 max-w-5xl mx-auto leading-relaxed space-y-2">
            <p>
              TrueClaim & Associates is a trading name of TrueClaim & Associates Ltd., registered in Canada as a subsidiary of Refund & Associates, with the following identifiers: FINTRAC authorized, Business Number (BN): 842594962, Registry ID: 2112580. Registered Office Location: Cambridge, Ontario. Status: Active (incorporated). Business Type: Ontario Business Corp. Created: September 7, 2006.
            </p>
            <p>
              TrueClaim & Associates is authorized and regulated by FINTRAC, ensuring compliance with Canadian anti-fraud and anti-money laundering regulations.
            </p>
            <p>
              TrueClaim & Associates offers free initial consultations to evaluate cases of fraud and asset recovery. If clients choose to proceed with our chargeback or other fund recovery services, these are subject to retainer agreements, fees, and/or commissions based on the specific case and service level selected. Please note, TrueClaim & Associates does not provide any financial investment services or financial advice.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
