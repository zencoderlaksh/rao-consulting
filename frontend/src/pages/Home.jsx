import React from "react";
import Hero from "../sections/Hero";
import Ticker from "../sections/Ticker";
import SaasTabs from "../components/SaasTabs";
import ProgramsSection from "../sections/ProgramsSection";
import StatsSection from "../sections/StatsSection";
import JourneySection from "../sections/JourneySection";
import ProjectsSection from "../sections/ProjectsSection";
import RoiCalculator from "../components/RoiCalculator";
import CTASection from "../sections/CTASection";
import { Link } from "react-router-dom";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, FileText } from "lucide-react";

function Home({ onOpenBooking, onOpenLeaflet }) {
  return (
    <>
      <Hero onOpenBooking={onOpenBooking} onOpenLeaflet={onOpenLeaflet} />
      <Ticker />

      {/* Interactive Bespoke SaaS Workflow Component */}
      <SaasTabs onOpenBooking={onOpenBooking} onOpenLeaflet={onOpenLeaflet} />

      {/* Programs and Specializations with aligned cards and leaflets */}
      <ProgramsSection onOpenLeaflet={onOpenLeaflet} onOpenBooking={onOpenBooking} />

      {/* Interactive ROI Calculator */}
      <section className="container section-padding">
        <RoiCalculator onOpenBooking={onOpenBooking} />
      </section>

      {/* Key Numbers & Reputation */}
      <StatsSection />

      {/* 4-Step Engineering Journey */}
      <JourneySection />

      {/* Real-World Industry Projects */}
      <ProjectsSection />

      {/* Fast Track Quick-Action Highlight Cards */}
      <section className="container section-padding">
        <div className="home-quick-cards-grid">
          <div className="quick-service-card aligned-card-flex">
            <div className="card-top-block">
              <span className="quick-badge">PLACEMENT ACCELERATOR</span>
              <h3>Placement Workshops</h3>
              <p>Weekend and evening sprints designed for working engineers and students targeting tier-1 product organizations.</p>
            </div>
            <div className="card-bottom-aligned-actions">
              <Link to="/workshops" className="arrow-link-btn">
                <span>Explore Live Cohorts →</span>
              </Link>
            </div>
          </div>

          <div className="quick-service-card aligned-card-flex">
            <div className="card-top-block">
              <span className="quick-badge purple">CUSTOM SAAS DELIVERY</span>
              <h3>Bespoke SaaS Solutions</h3>
              <p>Turnkey software engineering, multi-tenant architectures, cloud deployments, and continuous SLA support for your enterprise.</p>
            </div>
            <div className="card-bottom-aligned-actions">
              <Link to="/saas" className="arrow-link-btn">
                <span>Explore SaaS Solutions →</span>
              </Link>
            </div>
          </div>

          <div className="quick-service-card aligned-card-flex">
            <div className="card-top-block">
              <span className="quick-badge pink">ACADEMIC PARTNERSHIP</span>
              <h3>College MoUs & Incubation</h3>
              <p>MoU-backed campus placement drives, student capstone internships, and faculty development programs.</p>
            </div>
            <div className="card-bottom-aligned-actions">
              <Link to="/collabs" className="arrow-link-btn">
                <span>Explore Campus MoUs →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <CTASection onOpenBooking={onOpenBooking} />
    </>
  );
}

export default Home;
