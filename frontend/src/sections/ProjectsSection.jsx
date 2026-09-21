import { Link } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";

function ProjectsSection() {
  return (
    <section className="projects">
      <div className="container">
        <SectionHeader
          eyebrow="PORTFOLIO & CASE STUDIES"
          title="Engineered for Real-World Impact"
          description="Explore production-grade applications, AI agents, and enterprise tools built by our cohort members."
        />

        <div className="projectgrid">
          <div className="feature">
            <div className="circle" />

            <div className="eyebrow">FEATURED SHOWCASE</div>

            <h3>Cloud Intelligence Dashboard</h3>

            <p>
              An automated observability and cost-optimization platform built with React,
              Node.js, and serverless architectures handling high-throughput telemetry data.
            </p>

            <Link to="/clients" className="btn primary">
              Explore Case Study →
            </Link>
          </div>

          <div className="minis">
            <div className="mini">
              <div className="eyebrow">AI & AUTOMATION</div>
              <h3>Intelligent Code Reviewer</h3>
              <p>
                LLM-powered GitHub bot providing automated linting, security analysis,
                and performance optimization tips.
              </p>
            </div>

            <div className="mini">
              <div className="eyebrow">DISTRIBUTED SYSTEMS</div>
              <h3>FinTech Payment Gateway</h3>
              <p>
                High-concurrency microservice system processing transactions with strict
                consistency and idempotency.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
