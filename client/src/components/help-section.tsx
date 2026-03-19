import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HelpSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqs = [
    {
      question: "Which fraud types fall within your scope of work?",
      answer: "We focus on financial fraud cases involving documented losses, including cryptocurrency schemes, broker and forex fraud, investment fraud, romance-linked fraud, and business email compromise. We accept cases with losses starting from CAD 3,000. We do not handle e-commerce or marketplace disputes."
    },
    {
      question: "What outcomes can I realistically expect?",
      answer: "Recovery prospects depend on multiple case-specific factors: timing of the report, quality of available documentation, loss amount, traceability of funds, and payment method used. We provide an honest assessment during the initial consultation and only proceed when we see a realistic path to recovery."
    },
    {
      question: "How is your fee structure organized?",
      answer: "We offer transparent fee arrangements: a success-based fee (percentage of recovered funds — you pay only if we succeed), a hybrid arrangement (reduced retainer plus lower success fee), or an hourly rate for complex matters. The initial consultation is free with no commitment. Third-party costs are discussed separately."
    },
    {
      question: "What is the typical timeline for recovery?",
      answer: "Timelines vary: chargeback disputes typically take 30–90 days, bank recall requests 1–4 weeks if initiated promptly, straightforward domestic cases 3–6 months, and complex cross-border matters 6–18 months or longer. We begin work immediately upon engagement and provide regular updates."
    },
    {
      question: "Can you assist if the perpetrator operates abroad?",
      answer: "Yes. The majority of our cases involve international elements. We coordinate with legal counsel in relevant jurisdictions, pursue cross-border asset tracing and freezing applications, and conduct blockchain analysis to follow the money across borders."
    },
    {
      question: "What documents do I need to prepare?",
      answer: "Typically: bank statements and transaction records, communication history with the scammer (emails, chats, messages), any contracts or investment agreements, proof of payments made, and any screenshots or correspondence with the platform or person involved."
    }
  ];

  return (
    <section id="help" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
          <div>
            <p className="text-xs text-[#7B1418] uppercase tracking-widest font-bold mb-4">FAQ</p>
            <h2 className="text-4xl md:text-5xl font-black text-[#000000] uppercase leading-none tracking-tight mb-8">
              Common<br />Questions
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed text-sm">
              Get answers to the most common questions about our process, fees, and what you can expect.
            </p>
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-[#7B1418] hover:bg-[#5E0F12] text-white font-bold uppercase tracking-wider rounded-none px-6 py-5"
              data-testid="button-contact-from-help"
            >
              Ask Us Directly
            </Button>
          </div>

          <div className="space-y-0">
            {faqs.map((faq, index) => (
              <div key={index} className="border-t border-black/10" data-testid={`faq-${index}`}>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between py-6 text-left group"
                  data-testid={`faq-toggle-${index}`}
                >
                  <span className="flex items-center gap-4">
                    <span className="text-sm font-bold text-[#FFD700]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-[#000000] font-semibold group-hover:text-[#7B1418] transition-colors">
                      {faq.question}
                    </span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#FFD700] flex-shrink-0 ml-4 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                  />
                </button>
                {openIndex === index && (
                  <div className="pb-6 pl-10 pr-6">
                    <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
            <div className="border-t border-black/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
