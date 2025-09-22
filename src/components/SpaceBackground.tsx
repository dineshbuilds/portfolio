
const SpaceBackground = () => {
  // deterministic pseudo-random generator using sine (stable across renders)
  const prng = (n: number, salt = 1) => Math.abs(Math.sin(n * 12.9898 * salt) * 43758.5453) % 1;

  // helper to create stars along a logarithmic spiral
  const makeArmStars = (count: number, clockwise = true, seed = 1) => {
    const stars = [] as JSX.Element[];
    const a = 6; // base radius
    const b = 0.28; // spiral tightness (lower = more open)
    const thetaStart = 0.8;
    const thetaRange = 5.6;
    for (let i = 0; i < count; i++) {
      const t = i / Math.max(1, count - 1);
      const theta = thetaStart + (clockwise ? 1 : -1) * t * thetaRange;
      const r = a * Math.exp(b * theta);
      const jitterR = (prng(i, seed + 7) - 0.5) * 12;
      const jitterT = (prng(i, seed + 11) - 0.5) * 6;
      const x = r * Math.cos(theta) + jitterR;
      const y = r * Math.sin(theta) + jitterT;
      const sz = 0.45 + prng(i, seed + 3) * 1.8;
      const opacity = 0.45 + prng(i, seed + 5) * 0.55;
      const fill = prng(i, seed + 13) > 0.92 ? '#fff7d6' : '#ffffff';
      stars.push(
        <circle key={`${seed}-${i}`} cx={String(x)} cy={String(y)} r={String(sz)} fill={fill} opacity={String(Number(opacity).toFixed(2))} />
      );
    }
    return stars;
  };

  // build arms and bulge
  const armA = makeArmStars(300, true, 17);
  const armB = makeArmStars(260, false, 23);

  const bulgeStars = [] as JSX.Element[];
  for (let i = 0; i < 360; i++) {
    const u = prng(i, 2);
    const v = prng(i, 4);
    const rad = Math.sqrt(u) * 58 * (1 + 0.12 * v);
    const ang = v * Math.PI * 2;
    const x = rad * Math.cos(ang);
    const y = rad * Math.sin(ang);
    const sz = 0.5 + prng(i, 6) * 1.6;
    const opacity = 0.45 + prng(i, 8) * 0.6;
    bulgeStars.push(
      <circle key={`bulge-${i}`} cx={String(x)} cy={String(y)} r={String(sz)} fill="#fff8e6" opacity={String(Number(opacity).toFixed(2))} />
    );
  }

  // micro dots for fine grain across the whole galaxy (adds realism)
  const microDots = [] as JSX.Element[];
  const microCount = 320; // increased density
  for (let i = 0; i < microCount; i++) {
    const u = prng(i, 13);
    const ang = prng(i, 17) * Math.PI * 2;
    const rad = Math.sqrt(u) * 190 + (prng(i, 19) - 0.5) * 20; // wider spread
    const x = rad * Math.cos(ang);
    const y = rad * Math.sin(ang);
    const sz = 0.25 + prng(i, 23) * 1.1;
    const opacity = 0.2 + prng(i, 29) * 0.7;
    const fill = prng(i, 31) > 0.94 ? '#fff9d9' : '#ffffff';
    microDots.push(
      <circle key={`micro-${i}`} cx={String(x)} cy={String(y)} r={String(sz)} fill={fill} opacity={String(Number(opacity).toFixed(2))} />
    );
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-slate-900 to-black/80" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
  <svg aria-hidden="true" width="620" height="620" viewBox="0 0 376.038 376.038" className="opacity-28 dark:opacity-16 galaxy-spin" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="bulgeGrad" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#fff6e0" stopOpacity="1" />
              <stop offset="40%" stopColor="#ffd59e" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="6" result="g" />
              <feMerge>
                <feMergeNode in="g" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* scale down the whole galaxy so it doesn't dominate the hero */}
          <g transform="translate(188.019,187.982) scale(0.9)">
            {/* subtle disk */}
            <circle cx="0" cy="0" r="140" fill="#16202b" opacity="0.9" />

            {/* central bulge with glow */}
            <g filter="url(#softGlow)">
              <circle cx="0" cy="0" r="62" fill="url(#bulgeGrad)" />
            </g>

            {/* render user-provided decorative shapes but recolored smaller and darker */}
              {/* removed decorative green edge accents per request */}

            {/* small micro dots and generated stars for realism */}
            <g fill="#fff" opacity="0.95">
              {microDots}
            </g>

            <g transform="translate(0,0)" fill="#fff" opacity="0.95">
              {bulgeStars}
            </g>

            <g transform="translate(0,0)" fill="#fff8e6" opacity="0.9">
              {armA}
              {armB}
            </g>

            {/* accent central dot */}
            <circle cx="0" cy="0" r="6.2" fill="#ffb86b" filter="url(#softGlow)" />
          </g>
        </svg>
      </div>

      <style>{`
        .galaxy-spin { transform-origin: center; }
        @media (prefers-reduced-motion: no-preference) {
          .galaxy-spin { animation: galaxy-rotate 60s linear infinite; }
        }
        @keyframes galaxy-rotate { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
};

export default SpaceBackground;
