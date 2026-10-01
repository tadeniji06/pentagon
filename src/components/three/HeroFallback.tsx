// Static SVG fallback for the Three.js hero scene.
// Used on mobile and as the initial SSR placeholder.
// Matches the visual language of the WebGL icosahedron.

export default function HeroFallback() {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full max-w-[380px] mx-auto opacity-70"
      aria-hidden="true"
    >
      {/* Outer pentagon path */}
      <path
        d="M200 30L362 145.5L301 344H99L38 145.5L200 30Z"
        stroke="rgba(152,162,179,0.25)"
        strokeWidth="1"
        fill="none"
      />
      {/* Inner pentagon */}
      <path
        d="M200 80L314 160L273 288H127L86 160L200 80Z"
        stroke="rgba(152,162,179,0.15)"
        strokeWidth="1"
        fill="rgba(26,69,128,0.12)"
      />
      {/* Icosahedron edges — approximated */}
      <line x1="200" y1="30" x2="362" y2="145.5" stroke="rgba(152,162,179,0.18)" strokeWidth="1" />
      <line x1="362" y1="145.5" x2="301" y2="344" stroke="rgba(152,162,179,0.18)" strokeWidth="1" />
      <line x1="301" y1="344" x2="99" y2="344" stroke="rgba(152,162,179,0.18)" strokeWidth="1" />
      <line x1="99" y1="344" x2="38" y2="145.5" stroke="rgba(152,162,179,0.18)" strokeWidth="1" />
      <line x1="38" y1="145.5" x2="200" y2="30" stroke="rgba(152,162,179,0.18)" strokeWidth="1" />
      {/* Interior cross lines */}
      <line x1="200" y1="30" x2="200" y2="200" stroke="rgba(152,162,179,0.10)" strokeWidth="1" />
      <line x1="362" y1="145.5" x2="99" y2="344" stroke="rgba(152,162,179,0.10)" strokeWidth="1" />
      <line x1="38" y1="145.5" x2="301" y2="344" stroke="rgba(152,162,179,0.10)" strokeWidth="1" />
      <line x1="200" y1="30" x2="99" y2="344" stroke="rgba(152,162,179,0.08)" strokeWidth="1" />
      <line x1="200" y1="30" x2="301" y2="344" stroke="rgba(152,162,179,0.08)" strokeWidth="1" />
      {/* Centre mass */}
      <circle cx="200" cy="200" r="32" fill="rgba(26,69,128,0.2)" />
      <circle cx="200" cy="200" r="8" fill="rgba(201,168,76,0.35)" />
      {/* Vertices */}
      <circle cx="200" cy="30" r="3" fill="rgba(152,162,179,0.4)" />
      <circle cx="362" cy="145.5" r="3" fill="rgba(152,162,179,0.4)" />
      <circle cx="301" cy="344" r="3" fill="rgba(152,162,179,0.4)" />
      <circle cx="99" cy="344" r="3" fill="rgba(152,162,179,0.4)" />
      <circle cx="38" cy="145.5" r="3" fill="rgba(152,162,179,0.4)" />
    </svg>
  );
}
