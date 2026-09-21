import React from "react";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";

function CTASection({ onOpenBooking }) {
  return (
    <section className="container section-padding">
      <div className="cta">
        <div>
          <div className="eyebrow" style={{ color: "#D946EF" }}>
            DON'T MISS THE NEXT HIRING CYCLE
          </div>
          <h2>Ready to Launch Your Tech Career?</h2>
          <p>
            Join Cohort 14, master production-grade system architectures, and get connected directly
            with 120+ partnered enterprises without ATS barriers.
          </p>
        </div>

        <div className="actions">
          <button
            type="button"
            className="btn primary glow-btn"
            onClick={() => onOpenBooking ? onOpenBooking("Global CTA Reservation") : null}
          >
            Apply for Cohort 14 Spot →
          </button>
          <Link to="/workshops" className="btn outline">
            Explore All Tracks
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
