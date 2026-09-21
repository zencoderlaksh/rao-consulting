import React from "react";

function Logo({ size = 38, showText = true, subtitle = "PEOPLE · SKILLS · OPPORTUNITIES" }) {
  return (
    <div className="brand-logo-wrap" style={{ display: "inline-flex", alignItems: "center", gap: 11 }}>
      {/* High-Tech Geometric SVG Monogram */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="brand-vector-logo"
      >
        <defs>
          <linearGradient id="raoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#673DE6" />
            <stop offset="50%" stopColor="#8B5CF6" />
            <stop offset="100%" stopColor="#D946EF" />
          </linearGradient>
          <linearGradient id="raoGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D946EF" />
            <stop offset="100%" stopColor="#673DE6" />
          </linearGradient>
          <filter id="raoGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#673DE6" floodOpacity="0.45" />
          </filter>
        </defs>

        {/* Outer Hex-Shield Base */}
        <rect
          x="3"
          y="3"
          width="42"
          height="42"
          rx="12"
          fill="#131127"
          stroke="url(#raoGrad1)"
          strokeWidth="1.5"
          filter="url(#raoGlow)"
        />

        {/* Ambient Grid Line Accent */}
        <path
          d="M3 24H45M24 3V45"
          stroke="rgba(139, 92, 246, 0.15)"
          strokeWidth="1"
          strokeDasharray="2 3"
        />

        {/* Stylized Modern 'R' Architecture */}
        {/* Left Vertical Spine */}
        <rect x="13" y="12" width="4.5" height="24" rx="2.25" fill="url(#raoGrad1)" />

        {/* Top Arc Loop */}
        <path
          d="M17.5 12H26C29.866 12 33 15.134 33 19C33 22.866 29.866 26 26 26H17.5V12Z"
          fill="url(#raoGrad1)"
        />
        {/* Inner Cutout */}
        <path
          d="M17.5 16.5H25C26.3807 16.5 27.5 17.6193 27.5 19C27.5 20.3807 26.3807 21.5 25 21.5H17.5V16.5Z"
          fill="#131127"
        />

        {/* Dynamic Forward Thrust Leg */}
        <path
          d="M23 23.5L32.5 35.5C33.2 36.4 32.5 36 30.5 36H26L18.5 25.5H23Z"
          fill="url(#raoGrad2)"
        />

        {/* Futuristic Radiant Core Dot */}
        <circle cx="34" cy="14" r="2.5" fill="#D946EF" />
        <circle cx="34" cy="14" r="1.2" fill="#FFFFFF" />
      </svg>

      {showText && (
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
          <span style={{ fontSize: 18, fontWeight: 900, letterSpacing: "-0.5px", color: "inherit" }}>
            RAO
          </span>
          {subtitle && (
            <small
              style={{
                fontSize: 7.5,
                fontWeight: 700,
                color: "var(--muted)",
                letterSpacing: "1.2px",
                textTransform: "uppercase",
                marginTop: 2,
              }}
            >
              {subtitle}
            </small>
          )}
        </div>
      )}
    </div>
  );
}

export default Logo;
