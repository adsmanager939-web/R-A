import { Button } from "@/components/ui/button";
import heroBg from "@assets/nano-banana-pro-7f550185ca2896b8c56e69c932a02c04_1770837759135.png";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative text-white min-h-screen flex items-center overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
        data-testid="hero-background"
      />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(100deg, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.82) 42%, rgba(0,0,0,0.38) 100%)" }}
      />
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <div className="inline-block bg-[#7B1418] text-white text-xs font-bold uppercase tracking-widest px-4 py-2 mb-8">
            Cases with losses from CAD 3,000+
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none mb-6 tracking-tight uppercase">
            Trusted by More Than<br />
            <span className="text-[#FFD700]">200,000</span> Canadians
          </h1>

          <p className="text-base text-white/60 mb-10 leading-relaxed max-w-lg">
            We help victims of online financial fraud pursue recovery through a structured,
            documentation-led approach. Formal demands, disputes, and escalation — not empty claims.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-[#7B1418] hover:bg-[#5E0F12] text-white px-8 py-6 text-sm font-bold uppercase tracking-wider rounded-none"
              data-testid="button-book-consultation"
            >
              Contact Us
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("about")}
              className="border border-white/30 text-white hover:bg-white/5 hover:border-white/60 px-8 py-6 text-sm font-bold uppercase tracking-wider rounded-none bg-transparent"
              data-testid="button-about-us"
            >
              About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
