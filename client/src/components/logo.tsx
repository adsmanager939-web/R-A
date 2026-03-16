interface LogoProps {
  className?: string;
  variant?: "default" | "white";
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`} data-testid="logo">
      <img
        src="/logo-eagle.jpg"
        alt="Refund & Associates eagle"
        className="h-20 w-20 object-cover rounded-full"
      />
      <div className="flex flex-col leading-tight">
        <span className="text-3xl font-black text-white tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
          REFUND
        </span>
        <span className="text-base font-bold text-[#FFD700] uppercase tracking-widest">
          Associates
        </span>
      </div>
    </div>
  );
}
