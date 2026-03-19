import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ProcessSection from "@/components/process-section";
import InvestigationsSection from "@/components/investigations-section";
import CollaborationSection from "@/components/collaboration-section";
import OurWorkSection from "@/components/our-work-section";
import AboutSection from "@/components/about-section";
import TeamSection from "@/components/team-section";
import TestimonialsSection from "@/components/testimonials-section";
import LocationsSection from "@/components/locations-section";
import HelpSection from "@/components/help-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProcessSection />
      <InvestigationsSection />
      <CollaborationSection />
      <OurWorkSection />
      <AboutSection />
      <TeamSection />
      <TestimonialsSection />
      <LocationsSection />
      <HelpSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
