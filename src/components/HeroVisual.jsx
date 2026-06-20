export default function HeroVisual() {
  return (
    <svg
      className="hero-visual-svg"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hv-bg" x1="0" y1="0" x2="640" y2="480" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1e293b" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="hv-metal-a" x1="0" y1="0" x2="0" y2="200" gradientUnits="userSpaceOnUse">
          <stop stopColor="#64748b" />
          <stop offset="0.45" stopColor="#cbd5e1" />
          <stop offset="1" stopColor="#475569" />
        </linearGradient>
        <linearGradient id="hv-metal-b" x1="0" y1="0" x2="200" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#334155" />
          <stop offset="0.5" stopColor="#94a3b8" />
          <stop offset="1" stopColor="#334155" />
        </linearGradient>
        <linearGradient id="hv-accent" x1="0" y1="0" x2="120" y2="0" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0d9488" />
          <stop offset="1" stopColor="#14b8a6" />
        </linearGradient>
        <pattern id="hv-grid" width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="640" height="480" fill="url(#hv-bg)" />
      <rect width="640" height="480" fill="url(#hv-grid)" />
      <rect x="48" y="120" width="220" height="160" rx="4" fill="url(#hv-metal-a)" />
      <rect x="56" y="128" width="204" height="144" rx="2" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
      <path
        d="M300 160V100h80v40h-40v100h-40v-60h-40z"
        fill="url(#hv-metal-b)"
      />
      <circle cx="460" cy="200" r="56" stroke="url(#hv-metal-a)" strokeWidth="14" fill="none" />
      <circle cx="460" cy="200" r="36" fill="#0f172a" />
      <rect x="500" y="108" width="96" height="32" rx="3" fill="url(#hv-metal-b)" />
      <rect x="516" y="96" width="16" height="56" rx="2" fill="url(#hv-metal-a)" />
      <rect x="564" y="96" width="16" height="56" rx="2" fill="url(#hv-metal-a)" />
      <rect x="48" y="320" width="100" height="3" fill="url(#hv-accent)" />
      <text x="48" y="352" fill="#64748b" fontFamily="ui-monospace, monospace" fontSize="11" letterSpacing="2">
        PRECISION · ±0.1mm
      </text>
      <line x1="32" y1="32" x2="32" y2="56" stroke="#b45309" strokeWidth="1" opacity="0.5" />
      <line x1="20" y1="44" x2="44" y2="44" stroke="#b45309" strokeWidth="1" opacity="0.5" />
    </svg>
  );
}
