import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-gradient text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get Your Money Back From <span className="text-blue-200">Scammers</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Professional fraud investigators and legal experts helping victims recover funds lost to romance scams, crypto fraud, and investment scams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              variant="secondary"
              onClick={() => scrollToSection("contact")}
              className="bg-white text-primary hover:bg-gray-50 px-8 py-4 text-lg font-semibold"
              data-testid="button-book-consultation"
            >
              Book a Free Consultation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("how-it-works")}
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold"
              data-testid="button-learn-how-works"
            >
              Learn How It Works
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold" data-testid="stat-recovered">$2.4M+</div>
              <div className="text-blue-200">Recovered for Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold" data-testid="stat-cases">500+</div>
              <div className="text-blue-200">Successful Cases</div>
            </div>
            <div>
              <div className="text-3xl font-bold" data-testid="stat-support">24/7</div>
              <div className="text-blue-200">Expert Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
