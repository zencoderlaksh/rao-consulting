import React, { useState, useEffect } from "react";
import { Clock, Users, Award, ShieldCheck, CheckCircle2, ChevronRight, Zap, Sparkles, Calendar, FileText } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import RoiCalculator from "../components/RoiCalculator";

const workshopTracks = [
  {
    id: "fullstack-sprint",
    badge: "MOST POPULAR",
    badgeColor: "#673DE6",
    title: "Full-Stack Placement Sprint",
    duration: "6 Weeks Intensive",
    schedule: "Mon - Fri (8:00 PM - 10:30 PM IST)",
    seatsLeft: 4,
    totalSeats: 35,
    avgCtc: "₹14.2 LPA",
    tagline: "Build 3 production applications and ace technical architecture rounds.",
    modules: [
      "Advanced React 19, Server Components & State Machines",
      "Enterprise Node.js, Express, Microservices & Event Loops",
      "PostgreSQL, Redis Caching & Distributed Database Indexing",
      "Dockerization, AWS ECS Deployment & CI/CD Pipelines",
      "1:1 Mock System Design Interviews with Staff Engineers",
    ],
    mentors: "Ex-Uber & Razorpay Tech Leads",
  },
  {
    id: "genai-agents",
    badge: "HIGH DEMAND",
    badgeColor: "#D946EF",
    title: "Generative AI & Agent Architecture",
    duration: "4 Weeks Sprint",
    schedule: "Tue & Thu + Weekend Deep Dive",
    seatsLeft: 6,
    totalSeats: 30,
    avgCtc: "₹19.5 LPA",
    tagline: "Master autonomous AI agents, enterprise RAG systems, and production LLMs.",
    modules: [
      "Vector Embeddings, Pinecone/Qdrant & Semantic Search Systems",
      "Advanced RAG Architectures & Hybrid Search Strategies",
      "Autonomous Multi-Agent Frameworks (LangGraph, CrewAI)",
      "Fine-Tuning Open Source LLMs (Llama 3, Mistral) with LoRA",
      "AI Safety, Guardrails & Production Observability",
    ],
    mentors: "AI Research Engineers & Founders",
  },
  {
    id: "system-design",
    badge: "CAREER ACCELERATOR",
    badgeColor: "#8B5CF6",
    title: "Distributed Systems & Backend Masterclass",
    duration: "5 Weeks",
    schedule: "Weekend Masterclasses + Weekly Office Hours",
    seatsLeft: 3,
    totalSeats: 25,
    avgCtc: "₹17.8 LPA",
    tagline: "Crack tier-1 L4/L5 backend rounds with confidence and precision.",
    modules: [
      "Scalability Fundamentals: CAP Theorem, Partitioning, Consensus",
      "Message Brokers: Apache Kafka & RabbitMQ at 100k msg/sec",
      "Designing Global Systems: URL Shortener, Video Streaming, WhatsApp",
      "Database Sharding, Replication Lag & Zero-Downtime Migrations",
      "Live Whiteboard Architecture Simulation Rounds",
    ],
    mentors: "Principal Architects & FAANG Alumni",
  },
];

function Workshops({ onOpenBooking, onOpenLeaflet }) {
  // Real-time dynamic countdown simulation
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 14,
    minutes: 38,
    seconds: 42,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="workshops-page">
      {/* Page Hero with Urgency Timer (No 'LIVE' badge as requested) */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">
            <span>HIGH-IMPACT PLACEMENT BOOTCAMPS</span>
          </div>
          <h1>
            Transform Your Career in <span className="grad">30 Days</span>
          </h1>
          <p className="max-w-readable">
            Zero fluff. Direct industry immersion led by practicing architects from top tier
            tech companies. Guaranteed mock interview access and direct referral networks.
          </p>

          {/* FOMO Countdown Banner */}
          <div className="countdown-card">
            <div className="countdown-header">
              <span className="live-pulsing-dot" />
              <strong>COHORT 14 ADMISSIONS CLOSING SOON</strong>
            </div>
            <div className="countdown-grid">
              <div className="time-block">
                <span className="time-digit">{String(timeLeft.days).padStart(2, "0")}</span>
                <span className="time-label">DAYS</span>
              </div>
              <div className="time-sep">:</div>
              <div className="time-block">
                <span className="time-digit">{String(timeLeft.hours).padStart(2, "0")}</span>
                <span className="time-label">HOURS</span>
              </div>
              <div className="time-sep">:</div>
              <div className="time-block">
                <span className="time-digit">{String(timeLeft.minutes).padStart(2, "0")}</span>
                <span className="time-label">MINUTES</span>
              </div>
              <div className="time-sep">:</div>
              <div className="time-block">
                <span className="time-digit">{String(timeLeft.seconds).padStart(2, "0")}</span>
                <span className="time-label">SECONDS</span>
              </div>
            </div>
            <div className="countdown-footer">
              <Users size={14} />
              <span>Only 13 seats remaining across all 3 tracks</span>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Tracks */}
      <section className="container section-padding">
        <div className="section-header center">
          <div className="eyebrow">
            <span>SELECT YOUR DISCIPLINE</span>
          </div>
          <h2 className="title-with-dots">Industry-Crafted Placement Workshops</h2>
          <p className="max-w-readable">
            Each track is engineered around actual interview rubrics and daily production workflows
            of leading tech organizations.
          </p>
        </div>

        <div className="workshop-tracks-grid">
          {workshopTracks.map((track) => (
            <div key={track.id} className="workshop-card aligned-card-flex">
              <div className="card-top-block">
                <div className="workshop-header">
                  <span className="track-badge" style={{ background: `${track.badgeColor}15`, color: track.badgeColor }}>
                    {track.badge}
                  </span>
                  <div className="seat-warning">
                    <Clock size={13} color="#EF4444" />
                    <span>Only {track.seatsLeft} Seats Left!</span>
                  </div>
                </div>

                <h3>{track.title}</h3>
                <p className="track-tagline">{track.tagline}</p>

                {/* Progress Bar for Seats */}
                <div className="seat-meter-wrap">
                  <div className="meter-label">
                    <span>Admissions Progress</span>
                    <b>{Math.round(((track.totalSeats - track.seatsLeft) / track.totalSeats) * 100)}% Filled</b>
                  </div>
                  <div className="meter-bar">
                    <div
                      className="meter-fill"
                      style={{
                        width: `${((track.totalSeats - track.seatsLeft) / track.totalSeats) * 100}%`,
                      }}
                    />
                  </div>
                </div>

                <div className="track-meta">
                  <div className="meta-pill">
                    <Calendar size={13} />
                    <span>{track.duration}</span>
                  </div>
                  <div className="meta-pill highlight">
                    <Sparkles size={13} />
                    <span>Avg: {track.avgCtc}</span>
                  </div>
                </div>

                <div className="track-syllabus">
                  <h4>Core Curriculum Milestones:</h4>
                  <ul>
                    {track.modules.map((m, idx) => (
                      <li key={idx}>
                        <CheckCircle2 size={15} color="#10B981" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mentor-lead-note">
                  <ShieldCheck size={15} color="#673DE6" />
                  <span>Mentors: {track.mentors}</span>
                </div>
              </div>

              {/* Bottom-Aligned Action Area for 100% Consistent Alignment */}
              <div className="card-bottom-aligned-actions">
                <button
                  type="button"
                  className="btn primary full-width glow-btn"
                  onClick={() => onOpenBooking(`Workshop: ${track.title}`)}
                >
                  Apply for Cohort 14 Spot →
                </button>

                {onOpenLeaflet && (
                  <button
                    type="button"
                    className="btn outline full-width leaflet-card-btn"
                    onClick={() =>
                      onOpenLeaflet({
                        title: track.title,
                        tagline: track.tagline,
                        description: `Schedule: ${track.schedule} • Average Offer: ${track.avgCtc}`,
                        modules: track.modules,
                        stats: `Admissions open • ${track.seatsLeft} seats left`,
                        onEnroll: () => onOpenBooking(`Workshop: ${track.title}`),
                      })
                    }
                  >
                    <FileText size={14} />
                    <span>View Syllabus Leaflet</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROI Calculator Embed */}
      <section className="container section-padding">
        <RoiCalculator onOpenBooking={onOpenBooking} />
      </section>
    </div>
  );
}

export default Workshops;
