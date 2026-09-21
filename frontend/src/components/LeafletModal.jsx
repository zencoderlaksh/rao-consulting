import React, { useState } from "react";
import { X, Download, FileText, CheckCircle2, Sparkles, BookOpen, Layers, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

function LeafletModal({ isOpen, onClose, data }) {
  const [downloading, setDownloading] = useState(false);
  const [activePage, setActivePage] = useState(0);

  if (!isOpen || !data) return null;

  const handleDownload = () => {
    setDownloading(true);
    try {
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#673DE6", "#8B5CF6", "#10B981"],
      });
    } catch (e) {}

    setTimeout(() => {
      setDownloading(false);
      // Create a simulated download trigger
      const element = document.createElement("a");
      const file = new Blob(
        [
          `RAO TECHNOLOGIES - OFFICIAL LEAFLET\nProgram: ${data.title}\nDescription: ${data.description || data.tagline}\nKey Milestones:\n${(data.modules || []).map((m, i) => `  ${i + 1}. ${m}`).join("\n")}\n\nVisit: https://raotechnologies.io for admissions.`,
        ],
        { type: "text/plain" }
      );
      element.href = URL.createObjectURL(file);
      element.download = `RAO_${data.title ? data.title.replace(/[^a-zA-Z0-9]/g, "_") : "Leaflet"}.txt`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 800);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container leaflet-modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Leaflet Binder Header */}
        <div className="leaflet-header">
          <div className="leaflet-tag">
            <BookOpen size={14} />
            <span>INTERACTIVE BROCHURE & LEAFLET</span>
          </div>
          <h2>{data.title}</h2>
          <p>{data.tagline || data.description}</p>
        </div>

        {/* Leaflet Multi-Fold Preview Panel */}
        <div className="leaflet-body-wrap">
          <div className="leaflet-fold-card">
            <div className="leaflet-fold-spine" />
            <div className="leaflet-content-area">
              <div className="leaflet-section-head">
                <Layers size={16} color="#8B5CF6" />
                <strong>Architectural Curriculum & Industry Deliverables</strong>
              </div>

              <div className="leaflet-modules-list">
                {(data.modules || [
                  "Core System Architecture & Microservices Design Patterns",
                  "Event Loops, High-Concurrency Queuing (Kafka / Redis)",
                  "Production Cloud Deployments (Docker, Kubernetes, AWS)",
                  "Rigorous Code Reviews by FAANG Staff Architects",
                  "Direct ATS Bypass Referrals to 120+ Hiring Partners",
                ]).map((module, i) => (
                  <div key={i} className="leaflet-item">
                    <span className="leaflet-num">{String(i + 1).padStart(2, "0")}</span>
                    <div className="leaflet-text">
                      <b>{module}</b>
                      <small>Hands-on production lab with CI/CD grading</small>
                    </div>
                  </div>
                ))}
              </div>

              {data.stats && (
                <div className="leaflet-stat-banner">
                  <Sparkles size={16} color="#10B981" />
                  <span>{data.stats}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Leaflet Actions */}
        <div className="leaflet-actions-footer">
          <button
            type="button"
            className="btn outline download-btn"
            onClick={handleDownload}
            disabled={downloading}
          >
            <Download size={16} />
            <span>{downloading ? "Preparing Document..." : "Download Official Leaflet"}</span>
          </button>
          <button
            type="button"
            className="btn primary glow-btn"
            onClick={() => {
              onClose();
              if (data.onEnroll) data.onEnroll();
            }}
          >
            <span>Proceed to Reservation</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default LeafletModal;
