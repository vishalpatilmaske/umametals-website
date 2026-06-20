import { useId } from 'react';
import { GearIcon } from './icons/Icons';

export default function Logo({ className = '', variant = 'default' }) {
  const gradId = useId();
  const isLight = variant === 'light';

  return (
    <span className={`logo-mark ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.625rem' }}>
      <GearIcon size={28} className="logo-gear" style={{ color: 'var(--color-primary)' }} />
      <svg
        className="logo-text"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 180 32"
        fill="none"
        aria-hidden="true"
        style={{ height: 28, width: 'auto' }}
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FF6B00" />
            <stop offset="100%" stopColor="#F37021" />
          </linearGradient>
        </defs>
        <text x="0" y="14" fontFamily="var(--font-heading)" fontSize="13" fontWeight="800" letterSpacing="0.04em" fill={`url(#${gradId})`}>
          UMA
        </text>
        <text x="0" y="28" fontFamily="var(--font-heading)" fontSize="9" fontWeight="600" letterSpacing="0.18em" fill={isLight ? 'rgba(255,255,255,0.9)' : 'currentColor'}>
          METAL CRAFT
        </text>
      </svg>
    </span>
  );
}
