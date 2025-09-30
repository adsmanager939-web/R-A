import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import InvestigationsSection from "@/components/investigations-section";
import CollaborationSection from "@/components/collaboration-section";
import OurWorkSection from "@/components/our-work-section";
import TestimonialsSection from "@/components/testimonials-section";
import AboutSection from "@/components/about-section";
import TeamSection from "@/components/team-section";
import LocationsSection from "@/components/locations-section";
import HelpSection from "@/components/help-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <InvestigationsSection />
      <CollaborationSection />
      <OurWorkSection />
      <TestimonialsSection />
      <AboutSection />
      <TeamSection />
      <LocationsSection />
      <HelpSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
