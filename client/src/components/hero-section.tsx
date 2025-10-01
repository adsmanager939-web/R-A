import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative text-white py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a52] via-[#2a4a62] to-[#1a3a52] opacity-95"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-lg font-semibold mb-4 text-white/90">Professional Fraud Investigation & Asset Recovery</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            TRUSTED BY MORE THAN 200,000 CANADIANS
          </h1>
          <p className="text-lg md:text-xl mb-10 text-white/90 leading-relaxed max-w-3xl mx-auto">
            Leverage AI-driven insights to investigate financial crime and fraud, illuminate blockchain transactions, and resolve crypto cases with speed and confidence. Our veteran investigators use advanced forensics tools to track fund flows across banking systems and multiple blockchains, delivering actionable intelligence for asset recovery and criminal prosecution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#b8941f] hover:to-[#d4af37] text-white px-8 py-6 text-lg font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
              data-testid="button-book-consultation"
            >
              Book a Free Consultation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("investigations")}
              className="border-2 border-white text-white hover:bg-white hover:text-[#1a3a52] px-8 py-6 text-lg font-semibold transition-all"
              data-testid="button-learn-how-works"
            >
              Learn How It Works
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-xl">
              <div className="text-4xl font-bold mb-2" data-testid="stat-recovered">4.9 / 5</div>
              <div className="text-white font-medium">Client Rating</div>
            </div>
            <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-xl">
              <div className="text-4xl font-bold mb-2" data-testid="stat-cases">92%</div>
              <div className="text-white font-medium">Success Rate</div>
            </div>
            <div className="bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-xl">
              <div className="text-4xl font-bold mb-2" data-testid="stat-support">1,300+</div>
              <div className="text-white font-medium">Expert Team</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
