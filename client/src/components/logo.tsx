interface LogoProps {
  className?: string;
  variant?: "default" | "white";
}

export default function Logo({ className = "", variant = "white" }: LogoProps) {
  const textColor = variant === "white" ? "text-white" : "text-[#000000]";

  return (
    <div className={`flex items-center gap-3 ${className}`} data-testid="logo">
      <svg
        width="44"
        height="50"
        viewBox="0 0 44 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M22 1L2 9V24C2 35.5 10.8 46.1 22 49C33.2 46.1 42 35.5 42 24V9L22 1Z"
          fill="#7B1418"
        />
        <path
          d="M22 4L5 11.2V24C5 33.9 12.7 43 22 45.8C31.3 43 39 33.9 39 24V11.2L22 4Z"
          fill="#5E0F12"
        />
        <path
          d="M22 4L5 11.2V24C5 33.9 12.7 43 22 45.8C31.3 43 39 33.9 39 24V11.2L22 4Z"
          fill="url(#shieldGrad)"
        />
        <text
          x="22"
          y="27"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontWeight="900"
          fontSize="16"
          fill="#FFD700"
          letterSpacing="-0.5"
        >
          R
        </text>
        <text
          x="22"
          y="37"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontWeight="700"
          fontSize="7"
          fill="white"
          letterSpacing="1.5"
        >
          &amp;A
        </text>
        <path
          d="M15 20L20 25L30 15"
          stroke="#FFD700"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.4"
        />
        <defs>
          <linearGradient id="shieldGrad" x1="22" y1="4" x2="22" y2="46" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#991B1E" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#3D0608" stopOpacity="0.4" />
          </linearGradient>
        </defs>
      </svg>

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
