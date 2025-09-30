import { HelpCircle, FileText, MessageCircle, Book } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HelpSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const helpResources = [
    {
      icon: HelpCircle,
      title: "FAQ",
      description: "Find answers to commonly asked questions about our services and process",
      items: [
        "How long does the recovery process take?",
        "What are your success rates?",
        "How much does it cost?",
        "What types of fraud do you handle?"
      ]
    },
    {
      icon: FileText,
      title: "Documentation",
      description: "What documents you need to prepare for your case",
      items: [
        "Transaction records and receipts",
        "Communication history with scammer",
        "Bank statements and financial records",
        "Any contracts or agreements"
      ]
    },
    {
      icon: MessageCircle,
      title: "Support",
      description: "Multiple ways to get in touch with our team",
      items: [
        "24/7 Phone Support",
        "Live Chat",
        "Email Support",
        "Schedule a Consultation"
      ]
    },
    {
      icon: Book,
      title: "Resources",
      description: "Educational materials to help you understand fraud recovery",
      items: [
        "Fraud Prevention Guide",
        "Recovery Process Overview",
        "Legal Rights & Options",
        "Case Studies & Success Stories"
      ]
    }
  ];

  return (
    <section id="help" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1a3a52] mb-4">How Can We Help You?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get the support and information you need to start your recovery journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {helpResources.map((resource, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg"
              data-testid={`help-card-${index}`}
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#1a3a52] to-[#2a4a62] rounded-lg flex items-center justify-center mb-4">
                <resource.icon className="w-7 h-7 text-[#d4af37]" />
              </div>
              <h3 className="text-xl font-bold text-[#1a3a52] mb-3">{resource.title}</h3>
              <p className="text-gray-600 mb-4">{resource.description}</p>
              <ul className="space-y-2">
                {resource.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-500 flex items-start">
                    <span className="text-[#d4af37] mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] rounded-xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
          <p className="mb-6">Our expert team is ready to assist you with any questions or concerns</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => scrollToSection("contact")}
              className="bg-white text-[#1a3a52] hover:bg-gray-100 font-bold px-8"
              data-testid="button-contact-from-help"
            >
              Contact Us Now
            </Button>
            <a href="tel:+12264796091">
              <Button 
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1a3a52] font-bold px-8"
                data-testid="button-call-from-help"
              >
                Call: +1 (226) 479-6091
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
