import { useEffect, useState } from "react";

export function BadmintonLoader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show smooth 2-player rally animation, then smoothly dissolve
    const fadeTimer = setTimeout(() => setFadeOut(true), 2400);
    const removeTimer = setTimeout(() => setLoading(false), 3100);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      aria-hidden={fadeOut}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-all duration-700 ease-out select-none ${
        fadeOut ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Background court grid lines & atmospheric ambient glow */}
      <div className="absolute inset-0 topo opacity-35 pointer-events-none" />
      <div className="absolute h-96 w-96 rounded-full bg-primary/10 blur-3xl pointer-events-none animate-pulse" />

      {/* Two Players Badminton Rally Stage */}
      <div className="relative mb-5 flex flex-col items-center justify-center w-full max-w-md px-4">
        <svg
          viewBox="0 0 340 170"
          className="w-full max-w-[340px] drop-shadow-[0_0_24px_rgba(210,255,0,0.12)] overflow-visible"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Linear gradient for court floor */}
            <linearGradient id="courtFloorGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0" />
              <stop offset="20%" stopColor="var(--primary)" stopOpacity="0.4" />
              <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.8" />
              <stop offset="80%" stopColor="var(--primary)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
            </linearGradient>

            {/* Net mesh pattern */}
            <pattern id="netMesh" width="4" height="4" patternUnits="userSpaceOnUse">
              <path d="M 0 0 L 4 4 M 4 0 L 0 4" stroke="currentColor" strokeWidth="0.5" className="text-foreground/30" />
            </pattern>

            {/* Hit radial glow */}
            <radialGradient id="hitGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="1" />
              <stop offset="50%" stopColor="var(--primary)" stopOpacity="0.5" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* ─── Court Floor & Markings ─── */}
          {/* Subtle court surface glow */}
          <ellipse cx="170" cy="144" rx="140" ry="12" fill="var(--primary)" opacity="0.05" />

          {/* Baseline floor */}
          <line x1="20" y1="144" x2="320" y2="144" stroke="url(#courtFloorGrad)" strokeWidth="2" strokeLinecap="round" />

          {/* Service line markers */}
          <line x1="105" y1="141" x2="105" y2="147" stroke="var(--primary)" strokeWidth="1.5" opacity="0.6" />
          <line x1="235" y1="141" x2="235" y2="147" stroke="var(--primary)" strokeWidth="1.5" opacity="0.6" />

          {/* Subtle player shadow ovals */}
          <ellipse cx="56" cy="145" rx="18" ry="4" fill="oklch(0 0 0 / 0.5)" />
          <ellipse cx="282" cy="145" rx="18" ry="4" fill="oklch(0 0 0 / 0.5)" />

          {/* ─── Badminton Net & Post ─── */}
          {/* Center Post */}
          <line x1="170" y1="65" x2="170" y2="144" stroke="oklch(0.4 0.01 120)" strokeWidth="2.5" strokeLinecap="round" />
          {/* Post base cap */}
          <circle cx="170" cy="144" r="3" fill="var(--primary)" />
          <circle cx="170" cy="65" r="2.5" fill="var(--primary)" />

          {/* Net body */}
          <rect x="166" y="70" width="8" height="48" fill="url(#netMesh)" />
          {/* Net white top cord / tape */}
          <rect x="165" y="67" width="10" height="3.5" rx="1" fill="#FFFFFF" className="drop-shadow-[0_0_4px_rgba(255,255,255,0.7)]" />

          {/* ─── Left Player (Attacking / Lift) ─── */}
          <g className="animate-rally-left-body">
            {/* Back Leg */}
            <path d="M50 114 L34 143" stroke="#A1A1AA" strokeWidth="4" strokeLinecap="round" />
            {/* Back Shoe (Volt) */}
            <path d="M30 143 L37 143 L36 140 Z" fill="var(--primary)" />

            {/* Front Leg */}
            <path d="M56 114 L65 128 L66 143" stroke="#D4D4D8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            {/* Front Shoe (Volt) */}
            <path d="M63 143 L72 143 L70 140 Z" fill="var(--primary)" />

            {/* Shorts */}
            <path d="M47 106 L62 106 L60 118 L53 118 L46 117 Z" fill="#27272A" stroke="#3F3F46" strokeWidth="1" />

            {/* Torso / Sport Jersey */}
            <path d="M49 88 L63 88 L62 107 L47 107 Z" fill="#F4F4F5" />
            {/* Jersey volt racing stripe */}
            <line x1="56" y1="89" x2="56" y2="106" stroke="var(--primary)" strokeWidth="2" />

            {/* Head & Neck */}
            <circle cx="56" cy="80" r="6.5" fill="#E4E4E7" />
            {/* Athletic Headband (Volt) */}
            <rect x="50" y="77" width="12" height="2.4" rx="1" fill="var(--primary)" />
            {/* Hair */}
            <path d="M50 78 Q55 72 62 76 Q60 72 52 74 Z" fill="#18181B" />

            {/* Off-hand (balancing backwards) */}
            <path d="M49 92 L40 102 L38 100" stroke="#D4D4D8" strokeWidth="3" strokeLinecap="round" />

            {/* Racket Arm & Badminton Racket (pivots around shoulder at 62, 92) */}
            <g transform="translate(62, 92)">
              <g className="animate-rally-left-arm">
                {/* Arm from shoulder to hand */}
                <path d="M0 0 L10 10 L14 4" stroke="#D4D4D8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                {/* Hand grip */}
                <circle cx="14" cy="4" r="2" fill="#E4E4E7" />
                {/* Racket Shaft */}
                <line x1="14" y1="4" x2="26" y2="-12" stroke="#A1A1AA" strokeWidth="1.5" />
                {/* Racket Throat / T-joint */}
                <circle cx="26" cy="-12" r="1.5" fill="var(--primary)" />
                {/* Racket Head / Frame */}
                <ellipse
                  cx="32"
                  cy="-20"
                  rx="7"
                  ry="9.5"
                  transform="rotate(35 32 -20)"
                  fill="oklch(0.2 0.01 120 / 0.3)"
                  stroke="var(--primary)"
                  strokeWidth="1.6"
                />
                {/* Racket Cross Strings */}
                <line x1="28" y1="-25" x2="36" y2="-15" stroke="var(--primary)" strokeWidth="0.6" opacity="0.7" />
                <line x1="27" y1="-17" x2="37" y2="-23" stroke="var(--primary)" strokeWidth="0.6" opacity="0.7" />
              </g>
            </g>
          </g>

          {/* Left Hit Shockwave / Flash at (80, 78) */}
          <g transform="translate(80, 78)">
            <circle cx="0" cy="0" r="12" fill="url(#hitGlow)" className="animate-rally-hit-left pointer-events-none" />
            <circle cx="0" cy="0" r="14" stroke="var(--primary)" strokeWidth="1.5" fill="none" className="animate-rally-hit-left pointer-events-none" />
          </g>

          {/* ─── Right Player (Jump Smash) ─── */}
          <g className="animate-rally-right-body">
            {/* Back Leg (kicking back) */}
            <path d="M285 112 L299 128 L302 142" stroke="#A1A1AA" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            {/* Back Shoe (Volt) */}
            <path d="M298 142 L306 142 L304 139 Z" fill="var(--primary)" />

            {/* Front Leg */}
            <path d="M278 112 L269 126 L267 142" stroke="#D4D4D8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            {/* Front Shoe (Volt) */}
            <path d="M263 142 L271 142 L269 139 Z" fill="var(--primary)" />

            {/* Shorts */}
            <path d="M272 105 L288 105 L291 116 L283 116 L274 115 Z" fill="#27272A" stroke="#3F3F46" strokeWidth="1" />

            {/* Torso / Sport Jersey (Athletic dark with volt accent) */}
            <path d="M271 86 L286 86 L287 105 L272 105 Z" fill="#27272A" />
            <path d="M274 86 L280 86 L281 105 L275 105 Z" fill="var(--primary)" />

            {/* Head & Neck */}
            <circle cx="278" cy="78" r="6.5" fill="#E4E4E7" />
            {/* Athletic Headband (Volt) */}
            <rect x="272" y="75" width="12" height="2.4" rx="1" fill="var(--primary)" />
            {/* Hair */}
            <path d="M272 76 Q277 70 284 74 Q282 70 274 72 Z" fill="#18181B" />

            {/* Off-hand (pointing up/forward to incoming shuttle) */}
            <path d="M272 90 L260 82 L256 80" stroke="#D4D4D8" strokeWidth="3" strokeLinecap="round" />

            {/* Racket Arm & Badminton Racket (pivots around shoulder at 274, 90) */}
            <g transform="translate(274, 90)">
              <g className="animate-rally-right-arm">
                {/* Arm raised high for smash */}
                <path d="M0 0 L-6 -12 L-4 -16" stroke="#D4D4D8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                {/* Hand grip */}
                <circle cx="-4" cy="-16" r="2" fill="#E4E4E7" />
                {/* Racket Shaft */}
                <line x1="-4" y1="-16" x2="-14" y2="-32" stroke="#A1A1AA" strokeWidth="1.5" />
                {/* Racket T-joint */}
                <circle cx="-14" cy="-32" r="1.5" fill="var(--primary)" />
                {/* Racket Head / Frame */}
                <ellipse
                  cx="-19"
                  cy="-40"
                  rx="7"
                  ry="9.5"
                  transform="rotate(-25 -19 -40)"
                  fill="oklch(0.2 0.01 120 / 0.3)"
                  stroke="var(--primary)"
                  strokeWidth="1.6"
                />
                {/* Racket Cross Strings */}
                <line x1="-23" y1="-45" x2="-15" y2="-35" stroke="var(--primary)" strokeWidth="0.6" opacity="0.7" />
                <line x1="-24" y1="-37" x2="-14" y2="-43" stroke="var(--primary)" strokeWidth="0.6" opacity="0.7" />
              </g>
            </g>
          </g>

          {/* Right Hit Shockwave / Flash at (252, 64) */}
          <g transform="translate(252, 64)">
            <circle cx="0" cy="0" r="12" fill="url(#hitGlow)" className="animate-rally-hit-right pointer-events-none" />
            <circle cx="0" cy="0" r="14" stroke="var(--primary)" strokeWidth="1.5" fill="none" className="animate-rally-hit-right pointer-events-none" />
          </g>

          {/* ─── Animated Flying Shuttlecock ─── */}
          <g className="animate-rally-shuttle">
            {/* Shuttlecock Speed Glow Trail */}
            <ellipse cx="-8" cy="0" rx="6" ry="1.8" fill="var(--primary)" opacity="0.4" />

            {/* Shuttlecock SVG (Centered around (0,0) so flight & rotation follow tip) */}
            <g transform="scale(0.85)">
              {/* Feathers Skirt */}
              <path
                d="M-2 -2 L-10 -7 Q-7 0 -10 7 L-2 2 Z"
                fill="oklch(0.25 0.01 120 / 0.9)"
                stroke="var(--primary)"
                strokeWidth="1.1"
              />
              {/* Feather Quill Lines */}
              <line x1="-2" y1="-1" x2="-9" y2="-4" stroke="var(--primary)" strokeWidth="0.7" />
              <line x1="-2" y1="0" x2="-10" y2="0" stroke="var(--primary)" strokeWidth="0.8" />
              <line x1="-2" y1="1" x2="-9" y2="4" stroke="var(--primary)" strokeWidth="0.7" />
              {/* Skirt Binding Ring */}
              <path d="M-6 -4 Q-4 0 -6 4" stroke="var(--primary)" strokeWidth="1" fill="none" />

              {/* Cork Dome (Front Tip) */}
              <path
                d="M-2 -3 C2 -3 3 -2 3 0 C3 2 2 3 -2 3 Z"
                fill="var(--primary)"
                stroke="#FFFFFF"
                strokeWidth="0.6"
              />
              {/* Cork Band Stripe */}
              <line x1="-1" y1="-2.5" x2="-1" y2="2.5" stroke="oklch(0.12 0.01 120)" strokeWidth="1.2" />
            </g>
          </g>
        </svg>

        {/* Speed rally indicators */}
        <div className="flex items-center gap-2 mt-2">
          <span className="h-1 w-2 rounded-full bg-primary/40 animate-pulse" />
          <span className="h-1 w-6 rounded-full bg-primary animate-pulse" style={{ animationDelay: "0.2s" }} />
          <span className="h-1 w-2 rounded-full bg-primary/40 animate-pulse" style={{ animationDelay: "0.4s" }} />
        </div>
      </div>

      {/* Brand text */}
      <div className="text-center px-6">
        <div className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-wider text-foreground">
          Ranthushka <span className="text-primary">Karunathilaka</span>
        </div>
        <div className="mt-1 font-tech text-[10px] sm:text-xs font-semibold uppercase tracking-[0.35em] text-muted-foreground">
          Badminton Academy
        </div>
      </div>
    </div>
  );
}
