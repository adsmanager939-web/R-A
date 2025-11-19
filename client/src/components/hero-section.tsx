import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import heroVideo1 from "@assets/9e7294bd8dad4612843e7549769d422a_1763393843_1763588188880.mp4";
import heroVideo2 from "@assets/ba772ff89765402ca74b67c3b9f98eef_1763393936 - Trim_1763588367576.mp4";
import heroVideo3 from "@assets/ba772ff89765402ca74b67c3b9f98eef_1763393936 - Trim - Trim_1763589689650.mp4";
import heroVideo4 from "@assets/9e7294bd8dad4612843e7549769d422a_1763393843_1763589742567.mp4";
import heroVideo5 from "@assets/sora2-89f663547e1818952b0704e149b38058_1763589772160.mp4";
import heroVideo6 from "@assets/3a4c3809c2944bb0b4eff29a8fa4451a_1763589709_1763589840250.mp4";
import heroVideo7 from "@assets/video_1763589488284_1763589849836.mp4";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videos = [heroVideo1, heroVideo2, heroVideo3, heroVideo4, heroVideo5, heroVideo6, heroVideo7];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleVideoEnd = () => {
    const nextIndex = (currentVideoIndex + 1) % videos.length;
    setCurrentVideoIndex(nextIndex);
    
    if (videoRef.current) {
      videoRef.current.src = videos[nextIndex];
      videoRef.current.load();
      videoRef.current.play().catch((error) => {
        console.error("Video playback failed:", error);
      });
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = videos[currentVideoIndex];
      videoRef.current.load();
      videoRef.current.play().catch((error) => {
        console.error("Video playback failed:", error);
      });
    }
  }, []);

  return (
    <section id="home" className="relative text-white py-24 md:py-32 overflow-hidden">
      <video 
        ref={videoRef}
        muted 
        playsInline
        onEnded={handleVideoEnd}
        className="absolute inset-0 w-full h-full object-cover"
        data-testid="hero-video"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a3a52] via-[#2a4a62] to-[#1a3a52] opacity-75"></div>
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
