import React, { useState, useEffect } from "react";
import { Building, Award, TrendingUp, CheckCircle, ExternalLink, Star, ShieldCheck, Search, Users, FileText } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import confetti from "canvas-confetti";

const verifiedPlacements = [
  {
    name: "Ritesh Bagdi",
    prevRole: "Associate Trainee (₹3.6 LPA)",
    newRole: "Cloud & Full-Stack SDE @ Razorpay",
    newCtc: "₹22.5 LPA",
    hike: "+525% Hike",
    company: "Razorpay",
    tag: "Placement Sprint",
    avatar: "RB",
    quote: "RAO's live production capstone and distributed systems sprint changed my entire career trajectory. The 1:1 architectural mock interviews were identical to the real Razorpay round!",
  },
  {
    name: "Aman Singhania",
    prevRole: "Service-Desk Trainee (₹3.2 LPA)",
    newRole: "SDE 1 @ Razorpay",
    newCtc: "₹18.5 LPA",
    hike: "+478% Hike",
    company: "Razorpay",
    tag: "Placement Sprint",
    avatar: "AS",
    quote: "The live microservices capstone project was the exact topic my technical interviewer focused on for 45 minutes.",
  },
  {
    name: "Sneha Mukherjee",
    prevRole: "College Fresher (Tier-3 B.Tech)",
    newRole: "Full-Stack Engineer @ Swiggy",
    newCtc: "₹16.0 LPA",
    hike: "Direct High-Tier Entry",
    company: "Swiggy",
    tag: "Full-Stack Track",
    avatar: "SM",
    quote: "Coming from a tier-3 college, RAO gave me direct ATS-bypass referrals. I had 3 competing offers within 2 weeks.",
  },
  {
    name: "Karthik Raja",
    prevRole: "QA Automation (₹5.0 LPA)",
    newRole: "Cloud & DevOps SRE @ BrowserStack",
    newCtc: "₹19.2 LPA",
    hike: "+284% Hike",
    company: "BrowserStack",
    tag: "DevOps & Cloud",
    avatar: "KR",
    quote: "The hands-on Kubernetes and Terraform setups in RAO sandboxes gave me production-grade confidence.",
  },
  {
    name: "Pooja Deshmukh",
    prevRole: "Career Break (2 Years)",
    newRole: "AI Application Engineer @ Postman",
    newCtc: "₹22.0 LPA",
    hike: "Breakthrough Return",
    company: "Postman",
    tag: "GenAI & Agents",
    avatar: "PD",
    quote: "RAO's mentorship rebuilt my confidence. The autonomous multi-agent project made my resume stand out immediately.",
  },
  {
    name: "Varun Nair",
    prevRole: "Frontend Intern (₹15k/mo)",
    newRole: "Frontend Engineer @ PhonePe",
    newCtc: "₹17.5 LPA",
    hike: "+870% Hike",
    company: "PhonePe",
    tag: "React 19 & Next.js",
    avatar: "VN",
    quote: "State machines and web vitals optimization taught at RAO blew away the hiring manager in the UI round.",
  },
  {
    name: "Nidhi Agrawal",
    prevRole: "Junior Developer (₹4.2 LPA)",
    newRole: "Backend Engineer @ Zomato",
    newCtc: "₹18.0 LPA",
    hike: "+328% Hike",
    company: "Zomato",
    tag: "System Design Sprint",
    avatar: "NA",
    quote: "Mock system design interviews with Staff Engineers prepared me for all concurrency edge cases.",
  },
];

const hiringPartners = [
  "Google", "Razorpay", "Swiggy", "Amazon", "BrowserStack",
  "PhonePe", "Zomato", "Postman", "Paytm", "Flipkart",
  "Microsoft", "Uber", "CRED", "Groww", "Zepto"
];

function Clients({ onOpenBooking, onOpenLeaflet }) {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [hiringFormSubmitted, setHiringFormSubmitted] = useState(false);
  const [activePartnerIndex, setActivePartnerIndex] = useState(0);
  const [hiringForm, setHiringForm] = useState({
    company: "",
    recruiterEmail: "",
    rolesNeeded: "Full-Stack SDE",
    numOpenings: "5 - 10",
  });

  // Moving forward highlight one-by-one transition for hiring partners
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePartnerIndex((prev) => (prev + 1) % hiringPartners.length);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  const filteredPlacements = selectedFilter === "all"
    ? verifiedPlacements
    : verifiedPlacements.filter((p) => p.tag.toLowerCase().includes(selectedFilter.toLowerCase()));

  const handleRecruiterSubmit = (e) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 90,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#673DE6", "#8B5CF6", "#D946EF"],
      });
    } catch (err) {}
    setHiringFormSubmitted(true);
  };

  return (
    <div className="clients-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">
            <span>PROVEN OUTCOMES & INDUSTRY REPUTATION</span>
          </div>
          <h1>
            Our Clients & <span className="grad">Placement Hall of Fame</span>
          </h1>
          <p className="max-w-readable">
            Real candidates. Verifiable salary packages. Unmatched industry hiring partnerships.
            Discover how RAO graduates consistently secure tier-1 engineering positions.
          </p>

          <div className="client-stats-pill-row">
            <div className="client-pill">
              <TrendingUp size={16} color="#10B981" />
              <span>₹15.8 LPA Average Package</span>
            </div>
            <div className="client-pill">
              <Award size={16} color="#673DE6" />
              <span>₹42 LPA Highest Domestic Offer</span>
            </div>
            <div className="client-pill">
              <Building size={16} color="#D946EF" />
              <span>120+ Active Hiring Enterprises</span>
            </div>
          </div>
        </div>
      </section>

      {/* Hiring Partner Logo Ticker with Dynamic Forward-Moving Highlight Transition */}
      <section className="partner-logo-section">
        <div className="container">
          <div className="ticker-label-wrap">
            <span>EMPLOYERS WHO ACTIVELY RECRUIT FROM RAO:</span>
          </div>
          <div className="partner-logos-cloud">
            {hiringPartners.map((partner, i) => {
              const isHighlighted = activePartnerIndex === i;
              return (
                <div
                  key={i}
                  className={`partner-logo-chip ${isHighlighted ? "active-spotlight" : ""}`}
                >
                  <span className={`logo-dot ${isHighlighted ? "active-glow" : ""}`} />
                  <span className="partner-name">{partner}</span>
                  {isHighlighted && <span className="hiring-now-tag">Hiring</span>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Verified Placement Cards Grid with Ritesh Bagdi */}
      <section className="container section-padding">
        <div className="placement-header-row">
          <div className="section-header">
            <div className="eyebrow">
              <span>VERIFIED SUCCESS STORIES</span>
            </div>
            <h2 className="title-with-dots">Real People. Exponential Trajectories.</h2>
            <p className="max-w-readable">
              Explore verified candidate profiles who transitioned from low-growth roles or fresh graduations
              into high-compensation tech positions at top companies.
            </p>
          </div>

          {/* Filter Pills with Transition */}
          <div className="filter-chips">
            <button
              type="button"
              className={`filter-btn ${selectedFilter === "all" ? "active" : ""}`}
              onClick={() => setSelectedFilter("all")}
            >
              All Outcomes
            </button>
            <button
              type="button"
              className={`filter-btn ${selectedFilter === "placement" ? "active" : ""}`}
              onClick={() => setSelectedFilter("placement")}
            >
              Placement Sprints
            </button>
            <button
              type="button"
              className={`filter-btn ${selectedFilter === "genai" ? "active" : ""}`}
              onClick={() => setSelectedFilter("genai")}
            >
              GenAI & Agents
            </button>
            <button
              type="button"
              className={`filter-btn ${selectedFilter === "devops" ? "active" : ""}`}
              onClick={() => setSelectedFilter("devops")}
            >
              DevOps & Cloud
            </button>
          </div>
        </div>

        <div className="placements-grid">
          {filteredPlacements.map((candidate, idx) => (
            <div key={idx} className="placement-card tab-fade-enter">
              <div className="placement-card-top">
                <div className="candidate-avatar">{candidate.avatar}</div>
                <div className="candidate-info">
                  <h4>{candidate.name}</h4>
                  <span className="placed-company-badge">
                    Placed at <strong>{candidate.company}</strong>
                  </span>
                </div>
                <div className="hike-badge">{candidate.hike}</div>
              </div>

              <div className="ctc-comparison-box">
                <div className="ctc-item">
                  <small>PREVIOUS</small>
                  <span>{candidate.prevRole}</span>
                </div>
                <div className="ctc-arrow">→</div>
                <div className="ctc-item highlight">
                  <small>SECURED ROLE & CTC</small>
                  <strong>{candidate.newRole}</strong>
                  <span className="ctc-value">{candidate.newCtc}</span>
                </div>
              </div>

              <p className="candidate-quote">"{candidate.quote}"</p>

              <div className="placement-card-footer">
                <div className="verified-proof">
                  <ShieldCheck size={14} color="#10B981" />
                  <span>Offer Letter Verified by RAO</span>
                </div>
                <span className="track-badge-sub">{candidate.tag}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Employer Talent Request Box */}
      <section className="container section-padding">
        <div className="employer-cta-box">
          <div className="employer-cta-text">
            <div className="eyebrow">
              <span>FOR HIRING MANAGERS & RECRUITERS</span>
            </div>
            <h2>Looking to Hire Pre-Vetted Engineers?</h2>
            <p>
              Skip months of resume screening. Our graduates have built production microservices,
              passed whiteboard architecture rounds, and are available for immediate joining.
            </p>
            <div className="employer-perks">
              <div className="perk">
                <CheckCircle size={16} color="#10B981" />
                <span>Zero recruiter agency fees for verified partners</span>
              </div>
              <div className="perk">
                <CheckCircle size={16} color="#10B981" />
                <span>Pre-screened coding profiles with GitHub code reviews</span>
              </div>
              <div className="perk">
                <CheckCircle size={16} color="#10B981" />
                <span>Interview-ready candidates within 48 hours</span>
              </div>
            </div>
          </div>

          <div className="employer-cta-form-card">
            {!hiringFormSubmitted ? (
              <form onSubmit={handleRecruiterSubmit} className="employer-form">
                <h3>Request Candidate Profiles</h3>
                <div className="input-group">
                  <label>Company Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Swiggy, Cred, StartupX"
                    value={hiringForm.company}
                    onChange={(e) => setHiringForm({ ...hiringForm, company: e.target.value })}
                  />
                </div>
                <div className="input-group">
                  <label>Recruiter / Hiring Lead Email</label>
                  <input
                    type="email"
                    required
                    placeholder="recruiter@company.com"
                    value={hiringForm.recruiterEmail}
                    onChange={(e) => setHiringForm({ ...hiringForm, recruiterEmail: e.target.value })}
                  />
                </div>
                <div className="input-group">
                  <label>Profiles Required</label>
                  <select
                    value={hiringForm.rolesNeeded}
                    onChange={(e) => setHiringForm({ ...hiringForm, rolesNeeded: e.target.value })}
                  >
                    <option>Full-Stack SDE (React 19 / Node / SQL)</option>
                    <option>Generative AI & LLM Agent Developers</option>
                    <option>Cloud Infrastructure / DevOps Engineers</option>
                    <option>Backend Distributed Systems Engineers</option>
                  </select>
                </div>
                <button type="submit" className="btn primary full-width glow-btn">
                  Receive Vetted Resumes →
                </button>
              </form>
            ) : (
              <div className="success-corp-state">
                <div className="success-icon-wrap">
                  <CheckCircle size={44} color="#10B981" />
                </div>
                <h3>Talent Request Received!</h3>
                <p>
                  Our Placement Cell will dispatch a curated batch of verified portfolios to{" "}
                  <strong>{hiringForm.recruiterEmail}</strong> within 12 hours.
                </p>
                <button
                  type="button"
                  className="btn outline full-width"
                  onClick={() => setHiringFormSubmitted(false)}
                >
                  Send Another Request
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Clients;
