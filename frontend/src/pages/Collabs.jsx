import React, { useState } from "react";
import { GraduationCap, Briefcase, Award, CheckCircle, ShieldCheck, FileCheck, Building, FileText } from "lucide-react";
import confetti from "canvas-confetti";

const internshipPrograms = [
  {
    title: "Full-Stack Web Engineering Internship",
    duration: "3 - 6 Months (Remote / Hybrid)",
    stipend: "Performance-Based + PPO Opportunity",
    stack: "React 19, TypeScript, Express, PostgreSQL, AWS",
    description: "Work directly on RAO enterprise SaaS client modules with real code reviews and Agile sprint cadences.",
    perks: ["Direct PPO Placement Consideration", "Letter of Recommendation (LOR)", "Production Git Commits on Your Profile"],
    modules: [
      "Agile Sprint Planning & JIRA Workflows",
      "React 19 State Architecture & API Hydration",
      "Postgres Schema Migrations & Index Tuning",
      "Containerized Cloud Deployments via Docker",
    ],
  },
  {
    title: "AI & Machine Learning Research Intern",
    duration: "3 - 4 Months (Remote)",
    stipend: "Performance-Based + PPO Opportunity",
    stack: "Python, PyTorch, LangChain, Vector Embeddings, FastAPI",
    description: "Design multi-agent autonomous systems, build intelligent document parsing pipelines, and fine-tune open LLMs.",
    perks: ["Co-author Research / Tech Case Studies", "Access to GPU Compute Clusters", "Mentorship from AI Research Leads"],
    modules: [
      "Vector Search & Pinecone/Qdrant Setup",
      "Multi-Agent Workflow Modeling (LangGraph)",
      "Fine-Tuning Llama 3 with LoRA",
      "Deploying High-Concurrency FastAPI Endpoints",
    ],
  },
  {
    title: "DevOps & Cloud Infrastructure Intern",
    duration: "3 Months (Remote)",
    stipend: "Performance-Based + PPO Opportunity",
    stack: "Docker, Kubernetes, Terraform, GitHub Actions, Prometheus",
    description: "Manage staging environments, automate CI/CD release trains, and monitor production application health.",
    perks: ["Hands-on Cloud Credits & Sandboxes", "Real Incident Response Experience", "SRE Architecture Certification"],
    modules: [
      "Docker Multi-Stage Optimization",
      "Kubernetes Pod & Ingress Management",
      "Terraform Infrastructure as Code",
      "Prometheus & Grafana Observability Dashboards",
    ],
  },
];

const collegeBenefits = [
  {
    icon: Award,
    title: "Formal Institutional MoU",
    desc: "Seamless legal and academic framework tailored to university autonomous guidelines and NAAC/NBA accreditation criteria.",
  },
  {
    icon: Briefcase,
    title: "On-Campus Placement Drives",
    desc: "Exclusive recruitment drives connecting your final-year engineering batches with RAO's 120+ partnered product companies.",
  },
  {
    icon: GraduationCap,
    title: "Faculty Development Programs (FDP)",
    desc: "Hands-on upskilling for computer science faculty on modern generative AI, cloud microservices, and modern DevOps tools.",
  },
  {
    icon: Building,
    title: "Center of Excellence (CoE) Labs",
    desc: "Establish an accredited RAO Innovation & Coding Lab within your institution equipped with industry sandboxes.",
  },
];

function Collabs({ onOpenBooking, onOpenLeaflet }) {
  const [mouSubmitted, setMouSubmitted] = useState(false);
  const [mouForm, setMouForm] = useState({
    institutionName: "",
    contactPerson: "",
    designation: "Training & Placement Officer (TPO)",
    email: "",
    phone: "",
    studentCount: "500 - 1500 Students",
  });

  const handleMouSubmit = (e) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 110,
        spread: 75,
        origin: { y: 0.6 },
        colors: ["#673DE6", "#8B5CF6", "#10B981"],
      });
    } catch (err) {}
    setMouSubmitted(true);
  };

  return (
    <div className="collabs-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">
            <span>ACADEMIA & INDUSTRY CONVERGENCE</span>
          </div>
          <h1>
            Empowering Campuses. <span className="grad">Launching Careers.</span>
          </h1>
          <p className="max-w-readable">
            Bridging the gap between university lecture halls and high-impact engineering floors.
            Institutional MoUs, hands-on internships, and placement accelerator ecosystems.
          </p>

          <div className="corp-hero-stats">
            <div className="corp-stat-item">
              <GraduationCap size={20} color="#673DE6" />
              <div>
                <b>45+ Colleges</b>
                <small>Active Institutional MoUs</small>
              </div>
            </div>
            <div className="corp-stat-item">
              <Briefcase size={20} color="#10B981" />
              <div>
                <b>1,500+ Internships</b>
                <small>Completed with Verified LoRs</small>
              </div>
            </div>
            <div className="corp-stat-item">
              <Award size={20} color="#D946EF" />
              <div>
                <b>92% PPO Conversion</b>
                <small>For RAO Top-Tier Interns</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-World Internships Section */}
      <section className="container section-padding">
        <div className="section-header center">
          <div className="eyebrow">
            <span>STUDENT ACCELERATION</span>
          </div>
          <h2 className="title-with-dots">Industry-Standard Capstone Internships</h2>
          <p className="max-w-readable">
            Build real software for actual users. No synthetic dummy assignments—our interns contribute
            to living repositories and deploy code to production.
          </p>
        </div>

        <div className="internship-cards-grid">
          {internshipPrograms.map((prog, idx) => (
            <div key={idx} className="internship-card aligned-card-flex">
              <div className="card-top-block">
                <div className="intern-card-header">
                  <span className="intern-badge">APPLICATIONS OPEN</span>
                  <span className="intern-duration">{prog.duration}</span>
                </div>

                <h3>{prog.title}</h3>
                <p className="intern-desc">{prog.description}</p>

                <div className="intern-stack-box">
                  <small>TECH STACK:</small>
                  <span>{prog.stack}</span>
                </div>

                <div className="intern-perks-list">
                  {prog.perks.map((p, i) => (
                    <div key={i} className="perk-row">
                      <CheckCircle size={15} color="#10B981" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom-Aligned Action Block */}
              <div className="card-bottom-aligned-actions">
                <button
                  type="button"
                  className="btn primary full-width glow-btn"
                  onClick={() => onOpenBooking(`Internship: ${prog.title}`)}
                >
                  Apply for Internship Cohort →
                </button>
                {onOpenLeaflet && (
                  <button
                    type="button"
                    className="btn outline full-width leaflet-card-btn"
                    onClick={() =>
                      onOpenLeaflet({
                        title: prog.title,
                        tagline: `Duration: ${prog.duration} • ${prog.stipend}`,
                        description: prog.description,
                        modules: prog.modules,
                        stats: "Direct PPO & Verified LoR",
                        onEnroll: () => onOpenBooking(`Internship: ${prog.title}`),
                      })
                    }
                  >
                    <FileText size={14} />
                    <span>View Internship Leaflet</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* College Collab Benefits */}
      <section className="container section-padding">
        <div className="section-header center">
          <div className="eyebrow">
            <span>INSTITUTIONAL PARTNERSHIPS</span>
          </div>
          <h2 className="title-with-dots">Why Leading Universities Partner With RAO</h2>
          <p className="max-w-readable">
            Comprehensive institutional support tailored for engineering colleges, polytechnics, and higher education institutes.
          </p>
        </div>

        <div className="college-benefits-grid">
          {collegeBenefits.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="benefit-card">
                <div className="benefit-icon">
                  <Icon size={22} color="#673DE6" />
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* College MoU Application Form */}
      <section className="container section-padding">
        <div className="mou-application-card">
          <div className="mou-info-col">
            <div className="eyebrow">
              <span>CAMPUS COLLABORATION DESK</span>
            </div>
            <h2>Sign an Institutional MoU with RAO</h2>
            <p>
              Are you a College Principal, Dean, HOD, or Training & Placement Officer?
              Let’s partner to transform your department into an elite industry placement launchpad.
            </p>

            <div className="mou-highlights">
              <div className="mou-highlight-item">
                <FileCheck size={17} color="#10B981" />
                <span>Standardized zero-cost MoU model for eligible universities</span>
              </div>
              <div className="mou-highlight-item">
                <CheckCircle size={17} color="#10B981" />
                <span>Placement assurance workshops conducted on-premise or online</span>
              </div>
              <div className="mou-highlight-item">
                <ShieldCheck size={17} color="#10B981" />
                <span>Dedicated campus relationship manager and tracking dashboard</span>
              </div>
            </div>
          </div>

          <div className="mou-form-col">
            {!mouSubmitted ? (
              <form onSubmit={handleMouSubmit} className="mou-form">
                <h3>Submit MoU Interest</h3>

                <div className="input-group">
                  <label>Institution / College Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. National Institute of Technology"
                    value={mouForm.institutionName}
                    onChange={(e) => setMouForm({ ...mouForm, institutionName: e.target.value })}
                  />
                </div>

                <div className="form-row">
                  <div className="input-group">
                    <label>Official Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. S. K. Roy"
                      value={mouForm.contactPerson}
                      onChange={(e) => setMouForm({ ...mouForm, contactPerson: e.target.value })}
                    />
                  </div>
                  <div className="input-group">
                    <label>Designation *</label>
                    <select
                      value={mouForm.designation}
                      onChange={(e) => setMouForm({ ...mouForm, designation: e.target.value })}
                    >
                      <option>Training & Placement Officer (TPO)</option>
                      <option>Dean / Principal</option>
                      <option>Head of Department (CSE/IT)</option>
                      <option>Student Council Representative</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="input-group">
                    <label>Official Institutional Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="tpo@university.edu.in"
                      value={mouForm.email}
                      onChange={(e) => setMouForm({ ...mouForm, email: e.target.value })}
                    />
                  </div>
                  <div className="input-group">
                    <label>Contact Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={mouForm.phone}
                      onChange={(e) => setMouForm({ ...mouForm, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label>Eligible Engineering Batch Size</label>
                  <select
                    value={mouForm.studentCount}
                    onChange={(e) => setMouForm({ ...mouForm, studentCount: e.target.value })}
                  >
                    <option>100 - 300 Students</option>
                    <option>300 - 800 Students</option>
                    <option>800 - 2,000+ Students</option>
                  </select>
                </div>

                <button type="submit" className="btn primary full-width glow-btn">
                  Initiate MoU Discussion →
                </button>
              </form>
            ) : (
              <div className="success-corp-state">
                <div className="success-icon-wrap">
                  <CheckCircle size={40} color="#10B981" />
                </div>
                <h3>MoU Request Received!</h3>
                <p>
                  Thank you, <strong>{mouForm.contactPerson}</strong>. Our Institutional Alliances Director
                  will reach out to <strong>{mouForm.email}</strong> with our draft MoU and campus visit proposal.
                </p>
                <button
                  type="button"
                  className="btn outline full-width"
                  onClick={() => setMouSubmitted(false)}
                >
                  Submit Another Campus Inquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Collabs;
