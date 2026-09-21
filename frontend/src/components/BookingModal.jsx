import React, { useState } from "react";
import confetti from "canvas-confetti";
import { X, CheckCircle, Sparkles, Clock } from "lucide-react";

function BookingModal({ isOpen, onClose, defaultTrack = "Placement Accelerator Workshop" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    org: "",
    track: defaultTrack,
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#673DE6", "#8B5CF6", "#D946EF", "#10B981"],
      });
    } catch (e) {}
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    triggerConfetti();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      org: "",
      track: defaultTrack,
      message: "",
    });
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container booking-modal-wide" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {!submitted ? (
          <>
            <div className="modal-header">
              <div className="fomo-urgency-badge">
                <Clock size={13} />
                <span>Cohort 14 • Only 4 Seats Remaining</span>
              </div>
              <h2>Fast-Track Admissions & Consultation</h2>
              <p>
                Reserve your spot in RAO Technologies' high-impact accelerator programs or request a custom SaaS proposal.
                Applications processed on a rolling basis.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="booking-form">
              <div className="form-row">
                <div className="input-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sanya Kapoor"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div className="input-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="sanya@gmail.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="input-group">
                  <label>Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="input-group">
                  <label>College / Company / Startup</label>
                  <input
                    type="text"
                    placeholder="e.g. SRM / Infosys / StartupX"
                    value={formData.org}
                    onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Select Preferred Program or Service Track</label>
                <select
                  value={formData.track}
                  onChange={(e) => setFormData({ ...formData, track: e.target.value })}
                >
                  <option value="Placement Accelerator Workshop">
                    🔥 Placement Accelerator Workshop (4-Week Intensive)
                  </option>
                  <option value="Custom SaaS Solution Development">
                    🚀 Custom SaaS Solution Engineering & Delivery
                  </option>
                  <option value="Full-Stack & Cloud Internship">
                    💼 Real-World Internship (3-6 Months with Mentorship)
                  </option>
                  <option value="Corporate Tech Upskilling">
                    🏢 Corporate Training & Enterprise Tech Stacks
                  </option>
                  <option value="College MoU & Campus Incubation">
                    🎓 School & College Institutional Collaboration
                  </option>
                </select>
              </div>

              <div className="input-group">
                <label>Goals, Project Scope or Specific Queries (Optional)</label>
                <textarea
                  rows={3}
                  placeholder="Share your target CTC goals, corporate team size, or SaaS software specifications..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="booking-modal-cta">
                <button type="submit" className="btn primary full-width glow-btn">
                  Lock In My Reservation →
                </button>
                <div className="guarantee-text">
                  <Sparkles size={14} color="#D946EF" />
                  <span>Instant verification link & priority queue pass generated upon submission</span>
                </div>
              </div>
            </form>
          </>
        ) : (
          <div className="success-state">
            <div className="success-icon-wrap">
              <CheckCircle size={44} color="#10B981" />
            </div>
            <h2>Spot Provisionally Reserved! 🎉</h2>
            <p>
              Congratulations <strong>{formData.name}</strong>! Your application for{" "}
              <strong>{formData.track}</strong> has been prioritized.
            </p>
            <div className="ticket-card">
              <div className="ticket-header">
                <span className="badge-live">PRIORITY QUEUE #14</span>
                <span className="ticket-id">PASS-RAO-{Math.floor(1000 + Math.random() * 9000)}</span>
              </div>
              <div className="ticket-body">
                <div>
                  <small>CANDIDATE / CLIENT</small>
                  <b>{formData.name}</b>
                </div>
                <div>
                  <small>TRACK</small>
                  <b>{formData.track.split("(")[0]}</b>
                </div>
              </div>
            </div>
            <p className="subtext">
              Our academic counselor or solutions architect will reach out via WhatsApp / Email at{" "}
              <strong>{formData.email}</strong> within 2 business hours.
            </p>
            <button type="button" className="btn primary full-width" onClick={handleReset}>
              Done & Return to Site
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default BookingModal;
