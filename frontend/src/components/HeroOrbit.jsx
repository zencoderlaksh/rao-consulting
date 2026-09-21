import React from "react";
import { Link } from "react-router-dom";

function HeroOrbit({ onOpenBooking }) {
  return (
    <div className="hero-orbit-wrap">
      <div className="hero-orbit-scene">
        {/* Ambient Radial Halo */}
        <div className="orbit-halo" />

        {/* Concentric Dotted Orbit Rings */}
        <div className="orbit-ring ring-1" />
        <div className="orbit-ring ring-2" />
        <div className="orbit-ring ring-3" />
        <div className="orbit-ring ring-4" />

        {/* Celestial Glowing Planetary Dots */}
        <div className="orbit-dot dot-top-right" />
        <div className="orbit-dot dot-mid-right" />
        <div className="orbit-dot dot-bot-left" />

        {/* Center Core Disc */}
        <div className="orbit-center-core">
          {/* High-Tech Geometric Monogram */}
          <svg
            width="46"
            height="46"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="orbit-core-icon"
          >
            <defs>
              <linearGradient id="orbitRaoGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#673DE6" />
                <stop offset="50%" stopColor="#8B5CF6" />
                <stop offset="100%" stopColor="#D946EF" />
              </linearGradient>
              <linearGradient id="orbitRaoGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D946EF" />
                <stop offset="100%" stopColor="#673DE6" />
              </linearGradient>
              <filter id="orbitRaoGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#673DE6" floodOpacity="0.45" />
              </filter>
            </defs>

            {/* Squircle Base */}
            <rect
              x="3"
              y="3"
              width="42"
              height="42"
              rx="12"
              fill="#131127"
              stroke="url(#orbitRaoGrad1)"
              strokeWidth="1.5"
              filter="url(#orbitRaoGlow)"
            />

            {/* Ambient Grid Line Accent */}
            <path
              d="M3 24H45M24 3V45"
              stroke="rgba(139, 92, 246, 0.15)"
              strokeWidth="1"
              strokeDasharray="2 3"
            />

            {/* Stylized Modern 'R' Architecture */}
            <rect x="13" y="12" width="4.5" height="24" rx="2.25" fill="url(#orbitRaoGrad1)" />

            <path
              d="M17.5 12H26C29.866 12 33 15.134 33 19C33 22.866 29.866 26 26 26H17.5V12Z"
              fill="url(#orbitRaoGrad1)"
            />
            <path
              d="M17.5 16.5H25C26.3807 16.5 27.5 17.6193 27.5 19C27.5 20.3807 26.3807 21.5 25 21.5H17.5V16.5Z"
              fill="#131127"
            />

            <path
              d="M23 23.5L32.5 35.5C33.2 36.4 32.5 36 30.5 36H26L18.5 25.5H23Z"
              fill="url(#orbitRaoGrad2)"
            />

            {/* Radiant Spark Star Dot */}
            <circle cx="34" cy="14" r="2.5" fill="#D946EF" />
            <circle cx="34" cy="14" r="1.2" fill="#FFFFFF" />
          </svg>

          <span className="orbit-core-title">RAO</span>
          <span className="orbit-core-tagline">CONNECT · SCALE</span>
        </div>

        {/* 1. Placement Sprints (₹18+ LPA) - White Pill */}
        <div
          className="orbit-pill orbit-pos-placement"
          onClick={() => (onOpenBooking ? onOpenBooking("Placement Sprint (₹18+ LPA)") : null)}
          role="button"
          tabIndex={0}
        >
          <span className="orbit-pill-icon">⚡</span>
          <span className="orbit-pill-text">Placement Sprints (₹18+ LPA)</span>
        </div>

        {/* 2. Custom SaaS Delivery - White Pill */}
        <Link to="/saas" className="orbit-pill orbit-pos-saas">
          <span className="orbit-pill-icon">🚀</span>
          <span className="orbit-pill-text">Custom SaaS Delivery</span>
        </Link>

        {/* 3. React 19 - Dark Badge */}
        <div className="orbit-tech-badge orbit-pos-react">
          React 19
        </div>

        {/* 4. Kubernetes - Dark Badge */}
        <div className="orbit-tech-badge orbit-pos-k8s">
          Kubernetes
        </div>

        {/* 5. GenAI & Agents - White Pill */}
        <div
          className="orbit-pill orbit-pos-genai"
          onClick={() => (onOpenBooking ? onOpenBooking("GenAI & Agents Sprint") : null)}
          role="button"
          tabIndex={0}
        >
          <span className="orbit-pill-icon">🤖</span>
          <span className="orbit-pill-text">GenAI & Agents</span>
        </div>

        {/* 6. Production Capstones - White Pill */}
        <Link to="/workshops" className="orbit-pill orbit-pos-capstones">
          <span className="orbit-pill-icon">💻</span>
          <span className="orbit-pill-text">Production Capstones</span>
        </Link>

        {/* 7. Kafka - Dark Badge */}
        <div className="orbit-tech-badge orbit-pos-kafka">
          Kafka
        </div>

        {/* 8. Corporate Upskilling - White Pill */}
        <Link to="/corporate-training" className="orbit-pill orbit-pos-corporate">
          <span className="orbit-pill-icon">🏢</span>
          <span className="orbit-pill-text">Corporate Upskilling</span>
        </Link>

        {/* 9. LangChain - Dark Badge */}
        <div className="orbit-tech-badge orbit-pos-langchain">
          LangChain
        </div>

        {/* 10. College MoUs & CoE - White Pill */}
        <Link to="/collabs" className="orbit-pill orbit-pos-college">
          <span className="orbit-pill-icon">🎓</span>
          <span className="orbit-pill-text">College MoUs & CoE</span>
        </Link>
      </div>
    </div>
  );
}

export default HeroOrbit;
