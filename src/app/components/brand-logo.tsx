export function BrandLogo({ size = 40 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="bl-bg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#FB7185" />
          <stop offset="1" stopColor="#FB923C" />
        </linearGradient>
        <radialGradient id="bl-spark" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* squircle */}
      <rect x="0" y="0" width="64" height="64" rx="16" fill="url(#bl-bg)" />

      {/* highlighter swipe — the "pick" gesture */}
      <rect x="10" y="40" width="44" height="6" rx="3" fill="#ffffff" opacity="0.25" />

      {/* 拾 character */}
      <text
        x="30"
        y="44"
        textAnchor="middle"
        fontFamily="ui-serif, 'Songti SC', 'Source Han Serif SC', 'Noto Serif SC', serif"
        fontSize="36"
        fontWeight="700"
        fill="#ffffff"
        letterSpacing="0"
      >
        拾
      </text>

      {/* the picked-up sparkle */}
      <circle cx="50" cy="16" r="8" fill="url(#bl-spark)" opacity="0.9" />
      <path
        d="M50 10 L51.4 14.6 L56 16 L51.4 17.4 L50 22 L48.6 17.4 L44 16 L48.6 14.6 Z"
        fill="#ffffff"
      />
    </svg>
  );
}
