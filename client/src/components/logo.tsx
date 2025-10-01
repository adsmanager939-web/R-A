import { Shield, Scale, Check } from "lucide-react";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
}

export default function Logo({ className = "", variant = "default" }: LogoProps) {
  const isWhite = variant === "white";
  
  return (
    <div className={`flex items-center gap-3 ${className}`} data-testid="logo">
      <div className="relative">
        <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
          isWhite 
            ? "bg-white/10 backdrop-blur-sm border-2 border-white/30" 
            : "bg-gradient-to-br from-[#1a3a52] to-[#2a4a62] border-2 border-[#d4af37]/30"
        }`}>
          <div className="relative flex items-center justify-center">
            <Shield className={`w-6 h-6 ${isWhite ? "text-white" : "text-[#d4af37]"}`} strokeWidth={2.5} />
            <Check className={`w-3 h-3 absolute ${isWhite ? "text-white" : "text-[#d4af37]"}`} strokeWidth={3} />
          </div>
        </div>
        <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center ${
          isWhite ? "bg-white/20" : "bg-[#d4af37]"
        }`}>
          <Scale className={`w-3 h-3 ${isWhite ? "text-white" : "text-white"}`} strokeWidth={3} />
        </div>
      </div>
      
      <div className="flex flex-col -mt-1">
        <div className={`text-2xl font-bold tracking-tight ${
          isWhite ? "text-white" : "text-[#1a3a52]"
        }`} style={{ fontFamily: 'Georgia, serif' }}>
          TrueClaim
        </div>
        <div className={`text-[10px] uppercase tracking-widest font-semibold -mt-1 ${
          isWhite ? "text-white/70" : "text-[#1a3a52]/60"
        }`} style={{ letterSpacing: '0.15em' }}>
          & Associates
        </div>
      </div>
    </div>
  );
}
