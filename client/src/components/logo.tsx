interface LogoProps {
  className?: string;
  variant?: "default" | "white";
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`} data-testid="logo">
      <img
        src="/logo-refund.jpg"
        alt="Refund & Associates"
        className="h-14 w-auto object-contain"
      />
    </div>
  );
}
