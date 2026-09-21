import React, { useState } from "react";
import { TrendingUp, Award, Sparkles, Check, ArrowRight } from "lucide-react";

function RoiCalculator({ onOpenBooking }) {
  const [currentCtc, setCurrentCtc] = useState(4.5);
  const [targetTrack, setTargetTrack] = useState("fullstack");
  const [isFresher, setIsFresher] = useState(false);

  // Multipliers & base expectations
  const trackMultipliers = {
    fullstack: { name: "Full-Stack Software Engineer", avgCtc: 14.5, hikeFactor: 2.4 },
    aiml: { name: "Generative AI & ML Engineer", avgCtc: 18.0, hikeFactor: 2.8 },
    devops: { name: "Cloud & DevOps Specialist", avgCtc: 16.0, hikeFactor: 2.5 },
    system: { name: "Distributed Systems & Backend", avgCtc: 17.5, hikeFactor: 2.7 },
  };

  const selected = trackMultipliers[targetTrack];
  const projectedCtc = isFresher
    ? selected.avgCtc
    : Math.max(selected.avgCtc, Math.round((currentCtc * selected.hikeFactor) * 10) / 10);

  const percentageHike = isFresher
    ? "Direct High-Tier Entry"
    : `+${Math.round(((projectedCtc - currentCtc) / currentCtc) * 100)}% Hike`;

  const annualGain = isFresher
    ? `₹${projectedCtc} LPA Starting`
    : `+₹${(projectedCtc - currentCtc).toFixed(1)} LPA More / Year`;

  return (
    <div className="roi-calculator-card">
      <div className="roi-header">
        <div className="eyebrow">DATA-BACKED PROJECTIONS</div>
        <h2>Interactive Placement ROI Calculator</h2>
        <p>
          See how RAO's industry-driven placement sprints and capstone projects transform your
          earning potential.
        </p>
      </div>

      <div className="roi-grid">
        <div className="roi-controls">
          <div className="roi-toggle-fresher">
            <button
              type="button"
              className={`pill-btn ${!isFresher ? "active" : ""}`}
              onClick={() => setIsFresher(false)}
            >
              Working Professional
            </button>
            <button
              type="button"
              className={`pill-btn ${isFresher ? "active" : ""}`}
              onClick={() => setIsFresher(true)}
            >
              College Fresher / Final Year
            </button>
          </div>

          {!isFresher && (
            <div className="slider-group">
              <div className="slider-label">
                <span>Current Package</span>
                <span className="slider-val">₹{currentCtc.toFixed(1)} LPA</span>
              </div>
              <input
                type="range"
                min="2.5"
                max="18"
                step="0.5"
                value={currentCtc}
                onChange={(e) => setCurrentCtc(parseFloat(e.target.value))}
                className="custom-range"
              />
              <div className="slider-ticks">
                <span>₹2.5 LPA</span>
                <span>₹10 LPA</span>
                <span>₹18 LPA</span>
              </div>
            </div>
          )}

          <div className="input-group">
            <label>Target Engineering Specialization</label>
            <div className="track-selector-chips">
              {Object.entries(trackMultipliers).map(([key, data]) => (
                <button
                  key={key}
                  type="button"
                  className={`track-chip ${targetTrack === key ? "selected" : ""}`}
                  onClick={() => setTargetTrack(key)}
                >
                  {targetTrack === key && <Check size={14} />}
                  <span>{data.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="roi-results-box">
          <div className="result-badge">
            <Sparkles size={14} />
            <span>ALUMNI BENCHMARK DATA</span>
          </div>

          <div className="result-metric-large">
            <span className="label">Projected Package</span>
            <div className="highlight-ctc">
              ₹{projectedCtc} <small>LPA</small>
            </div>
            <div className="hike-tag">{percentageHike}</div>
          </div>

          <div className="roi-comparison-stats">
            <div className="stat-subcard">
              <span className="stat-name">Annual Increment</span>
              <strong>{annualGain}</strong>
            </div>
            <div className="stat-subcard">
              <span className="stat-name">Avg. Interview Shortlists</span>
              <strong>6 - 8 Top Tech Offers</strong>
            </div>
          </div>

          <div className="roi-proof-list">
            <div className="proof-item">
              <span className="bullet">✓</span>
              <span>1:1 Mock Interviews with Senior Architects</span>
            </div>
            <div className="proof-item">
              <span className="bullet">✓</span>
              <span>Direct ATS-bypass referrals to 120+ hiring partners</span>
            </div>
            <div className="proof-item">
              <span className="bullet">✓</span>
              <span>Production GitHub repositories that recruiters inspect</span>
            </div>
          </div>

          <button
            type="button"
            className="btn primary full-width glow-btn"
            onClick={() => onOpenBooking(`Placement Accelerator (${selected.name})`)}
          >
            Claim Your Placement Sprint Pass →
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoiCalculator;
