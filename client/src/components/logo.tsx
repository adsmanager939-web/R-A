import { CheckIcon } from "lucide-react";

interface LogoProps {
  className?: string;
  variant?: "default" | "white";
}

export default function Logo({ className = "", variant = "default" }: LogoProps) {
  const sealBgClass = variant === "white" ? "bg-white" : "bg-primary";
  const checkColorClass = variant === "white" ? "text-primary" : "text-primary-foreground";
  const textColorClass = variant === "white" ? "text-white" : "text-primary";
  const subtextColorClass = variant === "white" ? "text-blue-200" : "text-muted-foreground";

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className={`logo-seal ${sealBgClass}`}>
        <CheckIcon className={`${checkColorClass} w-6 h-6`} />
      </div>
      <div>
        <h1 className={`text-xl font-bold ${textColorClass}`}>TrueClaim</h1>
        <p className={`text-xs ${subtextColorClass}`}>Fraud Recovery Experts</p>
      </div>
    </div>
  );
}
