import { ShieldCheck } from "lucide-react";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
}

export default function Logo({ className = "", variant = "white" }: LogoProps) {
  const textColor = variant === "white" ? "text-white" : "text-[#000000]";

  return (
    <div className={`flex items-center gap-3 ${className}`} data-testid="logo">
      <div className="bg-[#7B1418] p-2 flex-shrink-0">
        <ShieldCheck className="w-6 h-6 text-white" />
      </div>
      <div className="flex flex-col leading-none">
        <span className={`text-xl font-black ${textColor} tracking-tight uppercase`}>
          Refund &amp; Associates
        </span>
        <span className="text-[10px] font-semibold text-[#FFD700] uppercase tracking-[0.2em]">
          Fraud Recovery Specialists
        </span>
      </div>
    </div>
  );
}
