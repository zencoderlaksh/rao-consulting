import React from "react";
import { Link } from "react-router-dom";
import { FileText } from "lucide-react";
import HeroOrbit from "../components/HeroOrbit";

function Hero({ onOpenBooking, onOpenLeaflet }) {
  const subtitleWords = "RAO Technologies delivers bespoke custom SaaS solutions, tier-1 placement workshops, corporate workforce upskilling, and institutional collaborations with guaranteed outcomes.".split(" ");

  return (
    <section className="hero container">
      <div className="hero-content reveal">
        {/* FOMO Live Alert Pill (Removed 'LIVE' text, kept clean urgency) */}
        <div className="fomo-hero-pill">
          <span className="live-pulsing-dot" />
          <span>Cohort 14 Admissions Closing • Only 4 Seats Left</span>
          <span className="pill-arrow">→</span>
        </div>

        {/* Eyebrow badge */}
        <div className="eyebrow">
          BRIDGING TALENT WITH INDUSTRY SCALE
        </div>

        <h1>
          Connect. Learn.
          <br />
          <span className="grad">
            Build & Launch.
          </span>
        </h1>

        {/* Word-by-Word Smooth Animated Description */}
        <p className="hero-word-by-word">
          {subtitleWords.map((word, index) => (
            <span
              key={index}
              className="staggered-word"
              style={{ animationDelay: `${0.15 + index * 0.035}s` }}
            >
              {word}&nbsp;
            </span>
          ))}
        </p>

        <div className="actions">
          <button
            type="button"
            className="btn primary glow-btn"
            onClick={() => onOpenBooking ? onOpenBooking("Hero Fast-Track Pass") : null}
          >
            Explore Cohorts & Apply →
          </button>

          <Link
            to="/saas"
            className="btn outline"
          >
            Custom SaaS Solutions
          </Link>

          {onOpenLeaflet && (
            <button
              type="button"
              className="btn-leaflet-quick"
              onClick={() =>
                onOpenLeaflet({
                  title: "RAO Technologies Master Overview Leaflet",
                  tagline: "Comprehensive overview of placement sprints, custom SaaS delivery, and institutional MoUs.",
                  description: "Full roadmap covering our 4 core offerings, mentors, compensation benchmarks, and partner network.",
                  modules: [
                    "Bespoke SaaS Solution Engineering & Cloud Architecture",
                    "Tier-1 Placement Accelerator Sprint (Full-Stack / GenAI / Cloud)",
                    "Corporate Engineering Upskilling & Capability Center Training",
                    "College Institutional MoUs & Center of Excellence Setup",
                    "Direct ATS Bypass Pipeline to 120+ Partnered Companies",
                  ],
                  stats: "14,000+ Placements • 94.2% Placement Rate",
                  onEnroll: () => onOpenBooking("Master Overview Pass"),
                })
              }
            >
              <FileText size={15} />
              <span>Brochure Leaflet</span>
            </button>
          )}
        </div>

        <div className="micro">
          <div>
            <b>14,000+</b>
            Graduates Placed
          </div>

          <div>
            <b>₹15.8 LPA</b>
            Average CTC
          </div>

          <div>
            <b>120+</b>
            Hiring Partners
          </div>
        </div>
      </div>

      {/* Interactive Orbiting Planetary Ecosystem (Requested by user) */}
      <div className="hero-orbit-col reveal">
        <HeroOrbit onOpenBooking={onOpenBooking} />
      </div>
    </section>
  );
}

export default Hero;
