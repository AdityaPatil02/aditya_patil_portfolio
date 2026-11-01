import { profile } from '@/data/portfolio';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-xl bg-white px-3 py-1.5 ring-1 ring-gold-400/60 shadow-gold transition duration-500 hover:ring-gold-300 ${className}`}
    >
      <img
        src={profile.logo}
        alt="PATIL GROUPS logo"
        width={1311}
        height={877}
        className="h-12 w-auto object-contain"
      />
    </span>
  );
}
