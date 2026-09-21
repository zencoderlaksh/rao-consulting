import React, { useState } from "react";
import { Building2, Award, Zap, TrendingUp, CheckCircle, ArrowRight, ShieldCheck, Users, FileText } from "lucide-react";
import confetti from "canvas-confetti";

const corporateTracks = [
  {
    title: "Cloud & Microservices Modernization",
    desc: "Migrate legacy monoliths into cloud-native architectures using Kubernetes, Docker, and event-driven patterns.",
    duration: "4 - 8 Weeks Modular",
    tech: ["Docker", "Kubernetes", "AWS/GCP", "Kafka", "PostgreSQL"],
    stats: "40% Lower Cloud Infra Waste",
    modules: [
      "Monolith Domain Deconstruction & Bounded Contexts",
      "Event-Driven Microservices with Apache Kafka",
      "Production Docker & Multi-Cluster Kubernetes",
      "Zero-Downtime Blue/Green Database Migrations",
    ],
  },
  {
    title: "Enterprise Generative AI & Copilot Adoption",
    desc: "Empower your engineering organization with AI-assisted software development, automated testing, and secure internal RAG systems.",
    duration: "2 - 4 Weeks Intensive",
    tech: ["OpenAI API", "LangChain", "Vector DBs", "Code Review AI", "Security Guardrails"],
    stats: "3.2x Faster Feature Delivery",
    modules: [
      "Engineering Workflows with Developer AI Copilots",
      "Building Secure In-House RAG Knowledge Engines",
      "Autonomous Code Auditing & Test Generation Agents",
      "AI Governance, Data Privacy & Guardrails",
    ],
  },
  {
    title: "Full-Stack Engineering Acceleration",
    desc: "Transform junior and mid-level hires into autonomous full-stack engineers fluent in React 19, TypeScript, and high-concurrency Node.js.",
    duration: "6 - 12 Weeks Bootcamp",
    tech: ["React 19", "Node.js", "TypeScript", "Redis", "CI/CD"],
    stats: "50% Faster Ramp-up to Production",
    modules: [
      "Modern React 19 & High-Performance Web Vitals",
      "Scalable Node.js / Express Microservices",
      "Redis Caching Topologies & Concurrency Locks",
      "Automated CI/CD Release Automation",
    ],
  },
  {
    title: "DevSecOps & Zero-Trust Engineering",
    desc: "Embed security directly into developer workflows with automated vulnerability scanning, secure secret management, and compliance pipelines.",
    duration: "3 - 6 Weeks Custom",
    tech: ["SonarQube", "HashiCorp Vault", "Trivy", "Terraform", "GitHub Actions"],
    stats: "Zero High-Severity Deploy Breaches",
    modules: [
      "Automated Static & Dynamic Code Analysis (SAST/DAST)",
      "HashiCorp Vault Secret Management in Containers",
      "Terraform Infrastructure as Code Guardrails",
      "Continuous Compliance & Threat Modeling",
    ],
  },
];

const enterpriseClients = [
  { name: "Apex Financial", size: "1,200+ Engineers Trained", verdict: "Decreased onboarding cycle from 90 days to 24 days." },
  { name: "CloudScale Technologies", size: "Global Capability Center", verdict: "Upskilled 180 engineers on AI copilots and high-scale Kafka pipelines." },
  { name: "Vanguard Health Systems", size: "Enterprise Healthcare", verdict: "Zero-downtime microservices training transformed our engineering velocity." },
];

function CorporateTraining({ onOpenBooking, onOpenLeaflet }) {
  const [formData, setFormData] = useState({
    companyName: "",
    workEmail: "",
    teamSize: "20 - 50 Engineers",
    interestTrack: "Cloud & Microservices Modernization",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#673DE6", "#8B5CF6", "#10B981"],
      });
    } catch (err) {}
    setSubmitted(true);
  };

  return (
    <div className="corporate-page">
      {/* Hero Section */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">
            <span>ENTERPRISE WORKFORCE TRANSFORMATION</span>
          </div>
          <h1>
            Upskill Your Engineering Pods <span className="grad">At Scale</span>
          </h1>
          <p className="max-w-readable">
            Customized, outcome-driven technical acceleration for tech enterprises, global capability
            centers, and high-growth startups.
          </p>

          <div className="corp-hero-stats">
            <div className="corp-stat-item">
              <TrendingUp size={20} color="#10B981" />
              <div>
                <b>50% Faster</b>
                <small>Ramp-up to First Production PR</small>
              </div>
            </div>
            <div className="corp-stat-item">
              <Users size={20} color="#673DE6" />
              <div>
                <b>12,000+</b>
                <small>Engineers Upskilled Across 80+ Orgs</small>
              </div>
            </div>
            <div className="corp-stat-item">
              <Award size={20} color="#D946EF" />
              <div>
                <b>98.4%</b>
                <small>Corporate Sponsor Satisfaction Score</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Tracks Grid */}
      <section className="container section-padding">
        <div className="section-header center">
          <div className="eyebrow">
            <span>ENTERPRISE CURRICULUM</span>
          </div>
          <h2 className="title-with-dots">Tailored Corporate Acceleration Programs</h2>
          <p className="max-w-readable">
            Designed directly with enterprise engineering leaders to solve tech debt, boost developer throughput,
            and standardize engineering practices.
          </p>
        </div>

        <div className="corporate-cards-grid">
          {corporateTracks.map((track, i) => (
            <div key={i} className="corporate-card aligned-card-flex">
              <div className="card-top-block">
                <div className="corp-card-header">
                  <div className="corp-icon-box">
                    <Zap size={20} color="#673DE6" />
                  </div>
                  <span className="corp-stat-tag">{track.stats}</span>
                </div>

                <h3>{track.title}</h3>
                <p>{track.desc}</p>

                <div className="corp-tech-tags">
                  {track.tech.map((t, idx) => (
                    <span key={idx} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Perfectly Aligned Bottom Actions */}
              <div className="corp-footer-meta">
                <span>Duration: {track.duration}</span>
                <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                  {onOpenLeaflet && (
                    <button
                      type="button"
                      className="leaflet-chip-btn"
                      onClick={() =>
                        onOpenLeaflet({
                          title: `Corporate Track: ${track.title}`,
                          tagline: `Duration: ${track.duration} • Impact: ${track.stats}`,
                          description: track.desc,
                          modules: track.modules,
                          stats: "Private Cloud Sandboxes Included",
                          onEnroll: () => onOpenBooking(`Corporate: ${track.title}`),
                        })
                      }
                      title="View Leaflet"
                    >
                      <FileText size={13} />
                      <span>Leaflet</span>
                    </button>
                  )}
                  <button
                    type="button"
                    className="arrow-link-btn"
                    onClick={() => onOpenBooking(`Corporate: ${track.title}`)}
                  >
                    Custom Syllabus →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise Impact Case Studies */}
      <section className="corp-case-studies container section-padding">
        <div className="section-header center">
          <div className="eyebrow">
            <span>VERIFIED IMPACT</span>
          </div>
          <h2 className="title-with-dots">Trusted By Leading Engineering Teams</h2>
          <p className="max-w-readable">
            Hear how forward-thinking CTOs and engineering directors use RAO to multiply team velocity.
          </p>
        </div>

        <div className="case-studies-grid">
          {enterpriseClients.map((client, idx) => (
            <div key={idx} className="case-card">
              <div className="case-icon">
                <Building2 size={22} color="#8B5CF6" />
              </div>
              <h4>{client.name}</h4>
              <span className="client-size-badge">{client.size}</span>
              <p className="case-quote">"{client.verdict}"</p>
              <div className="verified-check">
                <ShieldCheck size={15} color="#10B981" />
                <span>Verified Enterprise Case Study</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Inquiry Section */}
      <section className="container section-padding">
        <div className="corporate-inquiry-box">
          <div className="inquiry-content">
            <div className="eyebrow">
              <span>CUSTOM TRAINING ARCHITECTURE</span>
            </div>
            <h2>Request an Enterprise Consultation</h2>
            <p>
              Share your team’s current stack, target outcomes, and cohort size. We will construct a
              customized syllabus and delivery timeline within 24 hours.
            </p>
            <div className="inquiry-features">
              <div className="feat-item">
                <CheckCircle size={17} color="#10B981" />
                <span>Zero-risk pilot workshop available</span>
              </div>
              <div className="feat-item">
                <CheckCircle size={17} color="#10B981" />
                <span>Dedicated cloud sandboxes matching your infrastructure</span>
              </div>
              <div className="feat-item">
                <CheckCircle size={17} color="#10B981" />
                <span>Direct NDA-compliant customized code labs</span>
              </div>
            </div>
          </div>

          <div className="inquiry-form-card">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="corp-form">
                <div className="input-group">
                  <label>Company / Organization Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acme Corp / TechScale"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  />
                </div>

                <div className="input-group">
                  <label>Work Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="vp.engg@company.com"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  />
                </div>

                <div className="form-row">
                  <div className="input-group">
                    <label>Engineering Cohort Size</label>
                    <select
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    >
                      <option>10 - 25 Engineers</option>
                      <option>25 - 75 Engineers</option>
                      <option>75 - 200 Engineers</option>
                      <option>200+ Enterprise Tier</option>
                    </select>
                  </div>
                  <div className="input-group">
                    <label>Primary Focus Track</label>
                    <select
                      value={formData.interestTrack}
                      onChange={(e) => setFormData({ ...formData, interestTrack: e.target.value })}
                    >
                      <option>Cloud & Microservices Modernization</option>
                      <option>Generative AI & Copilot Workflows</option>
                      <option>Full-Stack Acceleration</option>
                      <option>DevSecOps & Reliability</option>
                    </select>
                  </div>
                </div>

                <div className="input-group">
                  <label>Additional Notes or Stack Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="e.g. Upskilling Java developers to Go and Kubernetes..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn primary full-width glow-btn">
                  Book Enterprise Architecture Call →
                </button>
              </form>
            ) : (
              <div className="success-corp-state">
                <div className="success-icon-wrap">
                  <CheckCircle size={40} color="#10B981" />
                </div>
                <h3>Consultation Confirmed!</h3>
                <p>
                  Thank you! An Enterprise Solutions Architect from RAO Technologies will contact{" "}
                  <strong>{formData.workEmail}</strong> shortly with your custom curriculum proposal.
                </p>
                <button
                  type="button"
                  className="btn outline full-width"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Request
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CorporateTraining;
