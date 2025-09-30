import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-primary text-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Get Your Money Back From <span className="text-white font-extrabold">Scammers</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-white/90 leading-relaxed max-w-3xl mx-auto">
            Professional fraud investigators and legal experts helping victims recover funds lost to romance scams, crypto fraud, and investment scams.
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
              <div className="text-4xl font-bold mb-2" data-testid="stat-recovered">$2.4M+</div>
              <div className="text-white/90 font-medium">Recovered for Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2" data-testid="stat-cases">500+</div>
              <div className="text-white/90 font-medium">Successful Cases</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-4xl font-bold mb-2" data-testid="stat-support">24/7</div>
              <div className="text-white/90 font-medium">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
