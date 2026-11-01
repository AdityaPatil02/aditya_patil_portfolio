import type { BrandIconData } from '@/data/brandIcons';

interface BrandIconProps {
  icon: BrandIconData;
  size?: number | string;
  className?: string;
}

const DARK_BRAND_FALLBACK = '#f5f0e6';

function readableFill(hex: string) {
  const channels = [0, 2, 4].map((offset) => parseInt(hex.slice(offset, offset + 2), 16) / 255);
  const [r, g, b] = channels.map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
  const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  return luminance < 0.12 ? DARK_BRAND_FALLBACK : `#${hex}`;
}

export default function BrandIcon({ icon, size = 18, className = '' }: BrandIconProps) {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={readableFill(icon.hex)}
      className={`shrink-0 ${className}`}
    >
      <path d={icon.path} />
    </svg>
  );
}
