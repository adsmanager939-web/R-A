import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-[#1a3a52] text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="text-sm font-semibold mb-4 text-white/80">TRUSTED BY MORE THAN 200,000 CLIENTS</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Get Your Money Back From <span className="text-white font-extrabold">Scammers</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-white/90 leading-relaxed max-w-3xl mx-auto">
            Leverage AI-driven insights to investigate financial crime and fraud, illuminate blockchain transactions, and resolve crypto cases with speed and confidence. Our veteran investigators use advanced forensics tools to track fund flows across banking systems and multiple blockchains, delivering actionable intelligence for asset recovery and criminal prosecution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg"
              variant="secondary"
              onClick={() => scrollToSection("contact")}
              className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
              data-testid="button-book-consultation"
            >
              Book a Free Consultation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("how-it-works")}
              className="border-2 border-white/80 text-white hover:bg-white hover:text-primary px-8 py-6 text-lg font-semibold transition-all"
              data-testid="button-learn-how-works"
            >
              Learn How It Works
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2" data-testid="stat-recovered">4.9 / 5</div>
              <div className="text-white/90 font-medium">Client Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2" data-testid="stat-cases">86%</div>
              <div className="text-white/90 font-medium">Success Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2" data-testid="stat-support">1,300+</div>
              <div className="text-white/90 font-medium">Expert Team</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
