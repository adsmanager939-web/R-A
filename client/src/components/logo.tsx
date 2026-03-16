interface LogoProps {
  className?: string;
  variant?: "default" | "white";
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`} data-testid="logo">
      <div className="bg-white rounded-xl px-3 py-1 shadow-md">
        <img
          src="/logo-refund.jpg"
          alt="Refund & Associates"
          className="h-12 w-auto object-contain"
        />
      </div>
    </div>
  );
}
