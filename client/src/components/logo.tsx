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
            : "bg-gradient-to-br from-[#000000] to-[#111111] border-2 border-[#FFD700]/30"
        }`}>
          <div className="relative flex items-center justify-center">
            <Shield className="w-6 h-6 text-[#FFD700]" strokeWidth={3} />
            <Check className="w-3 h-3 absolute text-white" strokeWidth={3} />
          </div>
        </div>
        <div className={`absolute -top-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center ${
          isWhite ? "bg-white/20" : "bg-[#DC2626]"
        }`}>
          <Scale className="w-3 h-3 text-white" strokeWidth={3} />
        </div>
      </div>
      
      <div className="flex flex-col -mt-1">
        <div className="text-2xl font-bold tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
          <span className={isWhite ? "text-white" : "text-[#000000]"}>Refund</span>
          <span className="text-[#FFD700]">&</span>
          <span className={isWhite ? "text-white" : "text-[#000000]"}>Associates</span>
        </div>
      </div>
    </div>
  );
}
