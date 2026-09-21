import React from "react";
import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import { FileText, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: "⚡",
    title: "Full-Stack Software Engineering",
    description: "Modern JavaScript, React 19, Node.js, and cloud backends designed for enterprise application scale.",
    link: "/workshops",
    modules: [
      "Advanced React 19 & State Machines",
      "Enterprise Node.js & Microservices",
      "PostgreSQL, Redis Caching & DB Indexing",
      "AWS ECS Deployments & CI/CD Pipelines",
    ],
  },
  {
    icon: "✦",
    title: "Generative AI & Agent Systems",
    description: "Hands-on model development, autonomous multi-agent pipelines, RAG frameworks, and production LLMs.",
    link: "/workshops",
    modules: [
      "Vector Embeddings & Semantic Search",
      "Advanced RAG Architectures & Hybrid Search",
      "Autonomous Multi-Agent Systems (LangGraph)",
      "Fine-Tuning Open Source LLMs (Llama 3)",
    ],
  },
  {
    icon: "☁",
    title: "Cloud Architecture & DevOps",
    description: "Infrastructure as code, containerization with Docker, Kubernetes clusters, and zero-downtime releases.",
    link: "/workshops",
    modules: [
      "Docker & Kubernetes Containerization",
      "Terraform Infrastructure as Code",
      "CI/CD Pipeline Automation via GitHub Actions",
      "Prometheus & Datadog Production Telemetry",
    ],
  },
  {
    icon: "🛡",
    title: "Distributed Systems & Scalability",
    description: "Distributed systems, database sharding, API design patterns, and high-throughput messaging microservices.",
    link: "/workshops",
    modules: [
      "CAP Theorem & High Availability",
      "Apache Kafka Event Streams at 100k msg/sec",
      "Database Sharding & Replication Topologies",
      "Live Whiteboard Architecture Simulations",
    ],
  },
];

function ProgramsSection({ onOpenLeaflet, onOpenBooking }) {
  return (
    <section className="container section-padding">
      <div className="section-header center">
        <div className="eyebrow">
          <span>SPECIALIZED CAREER TRACKS</span>
        </div>
        <h2 className="title-with-dots">Comprehensive Industry Programs</h2>
        <p className="max-w-readable">
          Structured learning modules designed in collaboration with senior architects from tier-1 companies
          to prepare engineers for high-impact technical roles.
        </p>
      </div>

      <div className="cards programs-grid-aligned">
        {programs.map((program, index) => (
          <div key={index} className="card aligned-program-card">
            <div className="card-top-content">
              <div className="icon">{program.icon}</div>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
            </div>

            {/* Bottom-aligned Action Row ensuring all cards align perfectly */}
            <div className="card-bottom-actions">
              <Link to={program.link} className="arrow aligned-syllabus-link">
                <span>View Syllabus</span>
                <ArrowRight size={14} />
              </Link>
              {onOpenLeaflet && (
                <button
                  type="button"
                  className="leaflet-chip-btn"
                  onClick={() =>
                    onOpenLeaflet({
                      title: program.title,
                      description: program.description,
                      modules: program.modules,
                      stats: "Verified Industry Curriculum",
                      onEnroll: () => (onOpenBooking ? onOpenBooking(program.title) : null),
                    })
                  }
                  title="View Leaflet"
                >
                  <FileText size={13} />
                  <span>Leaflet</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProgramsSection;
