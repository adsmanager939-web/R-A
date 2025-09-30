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
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Logo variant="white" className="mb-6" />
            <p className="text-blue-100 mb-6 max-w-md">
              Leverage AI-driven insights to investigate financial crime and fraud. Our team of over 1,300 skilled lawyers and fraud investigators has helped over 200,000 clients with an 86% success rate.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-blue-200 hover:text-white transition-colors"
                data-testid="link-linkedin"
              >
                <LinkedinIcon className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-blue-200 hover:text-white transition-colors"
                data-testid="link-twitter"
              >
                <TwitterIcon className="w-6 h-6" />
              </a>
              <a 
                href="#" 
                className="text-blue-200 hover:text-white transition-colors"
                data-testid="link-facebook"
              >
                <FacebookIcon className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-blue-200">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="hover:text-white transition-colors"
                  data-testid="footer-link-home"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("about")}
                  className="hover:text-white transition-colors"
                  data-testid="footer-link-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("how-it-works")}
                  className="hover:text-white transition-colors"
                  data-testid="footer-link-how-it-works"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("success-stories")}
                  className="hover:text-white transition-colors"
                  data-testid="footer-link-success-stories"
                >
                  Success Stories
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-white transition-colors"
                  data-testid="footer-link-contact"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-blue-200">
              <li data-testid="footer-phone">+1 (226) 479-6091</li>
              <li data-testid="footer-email">contact@trueclaim.com</li>
              <li>Available 24/7</li>
              <li>Emergency Hotline</li>
            </ul>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-2">Certifications</h5>
              <div className="text-sm text-blue-200">
                <p>BBB A+ Rating</p>
                <p>NAIS Certified</p>
                <p>Licensed in 50 States</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-700 mt-12 pt-8 text-center text-blue-200">
          <p>&copy; 2024 TrueClaim. All rights reserved. Licensed fraud investigation and legal services.</p>
        </div>
      </div>
    </footer>
  );
}
