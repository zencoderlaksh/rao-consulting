import React, { useState } from "react";
import { Users2, Code2, Cpu, Rocket, CheckCircle, Terminal, Shield, Sparkles, Cloud } from "lucide-react";

const saasDeliveryPillars = [
  {
    id: "connect",
    icon: Users2,
    number: "01",
    label: "Connect",
    title: "Domain Scoping & Technical Discovery",
    tagline: "Aligning architectural strategy with your exact business objectives.",
    description:
      "Connect with our principal architects to analyze your operational workflows, user journeys, compliance requirements, and third-party API dependencies to produce a crystal-clear execution roadmap.",
    bullets: [
      "Deep architectural discovery & PRD blueprinting",
      "Multi-tenant data isolation & compliance design",
      "Cost-optimized cloud infrastructure budgeting",
    ],
    mockType: "discovery",
    mockData: {
      clientOrg: "FinTech & Enterprise Logistics",
      blueprintStatus: "Architecture Scope Approved",
      milestones: [
        { phase: "Domain Modeling", status: "Completed", date: "Week 1" },
        { phase: "Multi-Tenant Schema", status: "Completed", date: "Week 2" },
        { phase: "Security & Role Matrices", status: "Active Now", date: "Week 3" },
      ],
    },
  },
  {
    id: "learn",
    icon: Code2,
    number: "02",
    label: "Learn",
    title: "System Architecture & Modeling",
    tagline: "Turning intricate business rules into resilient digital engines.",
    description:
      "We design low-latency database schemas, asynchronous event-driven pipelines, secure authentication mechanisms, and robust role-based access controls suited for enterprise multi-tenancy.",
    bullets: [
      "PostgreSQL / MongoDB multi-tenant schema partitioning",
      "Event-driven messaging via Apache Kafka & Redis Pub/Sub",
      "SOC2 / GDPR compliant encryption at rest and in transit",
    ],
    mockType: "code",
    mockData: {
      filename: "tenant-router.service.ts",
      codeSnippet: `export const resolveTenantWorkspace = async (
  tenantId: string,
  authContext: AuthSession
): Promise<TenantConfig> => {
  const cacheKey = \`tenant:config:\${tenantId}\`;
  const cached = await redis.get(cacheKey);
  if (cached) return JSON.parse(cached);

  const tenant = await db.tenants.findUniqueOrThrow({
    where: { id: tenantId, status: "ACTIVE" },
    include: { subscription: true, clusterEndpoints: true },
  });

  await auditLog.recordAccess(tenantId, authContext.userId);
  return tenant;
};`,
    },
  },
  {
    id: "build",
    icon: Cpu,
    number: "03",
    label: "Build",
    title: "Full-Stack Agile Product Engineering",
    tagline: "Crafted with modern React 19, Node.js, and cloud-native microservices.",
    description:
      "Our dedicated senior engineering pod writes clean, typed, modular code with complete automated unit, integration, and end-to-end test suites delivered in rapid bi-weekly sprints.",
    bullets: [
      "Modular React / Next.js / Tailwind frontends with ultra-low TTI",
      "High-throughput Go / Node / Spring Boot backend microservices",
      "90%+ test coverage with automated regression guardrails",
    ],
    mockType: "stats",
    mockData: {
      sprintsCompleted: "Sprint 8 of 10",
      testCoverage: "94.8% passing",
      featureDelivery: "On-Track (Ahead of SLA)",
      pipelineStatus: "All 18 Microservices Passing SonarQube",
    },
  },
  {
    id: "launch",
    icon: Rocket,
    number: "04",
    label: "Launch",
    title: "Zero-Downtime Deployment & Scale",
    tagline: "Zero-downtime CI/CD pipelines, automated canary rollouts, and 99.99% uptime.",
    description:
      "We provision production-grade AWS / GCP / Azure environments with Terraform, set up auto-healing Kubernetes clusters, continuous observability, and SLA-backed support.",
    bullets: [
      "Automated blue-green & canary zero-downtime deployments",
      "Datadog / Prometheus monitoring with automated auto-scaling",
      "Enterprise SLAs with 24/7 reliability engineering support",
    ],
    mockType: "launch",
    mockData: {
      uptime: "99.99%",
      p99Latency: "18ms",
      globalNodes: ["Mumbai", "Singapore", "Frankfurt", "Virginia"],
    },
  },
];

function SaasTabs({ onOpenBooking, onOpenLeaflet }) {
  const [activeTab, setActiveTab] = useState("connect");
  const [tabKey, setTabKey] = useState(0);

  const handleTabChange = (id) => {
    setActiveTab(id);
    setTabKey((prev) => prev + 1);
  };

  const currentPillar = saasDeliveryPillars.find((p) => p.id === activeTab) || saasDeliveryPillars[0];

  return (
    <section className="saas-tabs-section container section-padding">
      <div className="section-header center">
        <div className="eyebrow">
          <span>BESPOKE SAAS DEVELOPMENT & DELIVERY</span>
        </div>
        <h2 className="title-with-dots">
          Connect. Learn. Build. Launch.
        </h2>
        <p className="max-w-readable">
          We architect, engineer, and deliver tailor-made SaaS solutions for enterprise workflows,
          emerging startups, and high-growth products — precisely engineered to your unique requirements.
        </p>
      </div>

      {/* Tab Selector Navigation - Seamless Horizontal Marquee */}
      <div className="saas-tab-marquee-wrapper">
        <div className="saas-tab-marquee-track">
          {/* Primary Card Set */}
          <div className="saas-tab-group">
            {saasDeliveryPillars.map((pillar) => {
              const Icon = pillar.icon;
              const isActive = activeTab === pillar.id;
              return (
                <button
                  key={`primary-${pillar.id}`}
                  type="button"
                  className={`saas-tab-btn ${isActive ? "active" : ""}`}
                  onClick={() => handleTabChange(pillar.id)}
                >
                  <div className="tab-number">{pillar.number}</div>
                  <div className="tab-info">
                    <span className="tab-title">{pillar.label}</span>
                    <span className="tab-sub">{pillar.tagline.split(".")[0]}</span>
                  </div>
                  <Icon size={18} className="tab-icon" />
                </button>
              );
            })}
          </div>

          {/* Duplicate Card Set for Seamless Infinite Loop */}
          <div className="saas-tab-group" aria-hidden="true">
            {saasDeliveryPillars.map((pillar) => {
              const Icon = pillar.icon;
              const isActive = activeTab === pillar.id;
              return (
                <button
                  key={`clone-${pillar.id}`}
                  type="button"
                  className={`saas-tab-btn ${isActive ? "active" : ""}`}
                  onClick={() => handleTabChange(pillar.id)}
                  tabIndex={-1}
                >
                  <div className="tab-number">{pillar.number}</div>
                  <div className="tab-info">
                    <span className="tab-title">{pillar.label}</span>
                    <span className="tab-sub">{pillar.tagline.split(".")[0]}</span>
                  </div>
                  <Icon size={18} className="tab-icon" />
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Content Display with Transition */}
      <div key={tabKey} className="saas-tab-content-panel tab-fade-enter">
        <div className="saas-detail-col">
          <div className="pillar-badge">
            <Sparkles size={14} color="#8B5CF6" />
            <span>PHASE {currentPillar.number} • {currentPillar.label.toUpperCase()}</span>
          </div>
          <h3>{currentPillar.title}</h3>
          <p className="pillar-desc">{currentPillar.description}</p>

          <div className="pillar-checklist">
            {currentPillar.bullets.map((bullet, idx) => (
              <div key={idx} className="pillar-check-item">
                <CheckCircle size={17} color="#10B981" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>

          <div className="pillar-actions">
            <button
              type="button"
              className="btn primary glow-btn"
              onClick={() => onOpenBooking(`Custom SaaS Solutions (${currentPillar.label})`)}
            >
              Request SaaS Proposal →
            </button>
            {onOpenLeaflet && (
              <button
                type="button"
                className="btn outline"
                onClick={() =>
                  onOpenLeaflet({
                    title: `SaaS Solution Architecture: ${currentPillar.title}`,
                    tagline: currentPillar.tagline,
                    description: currentPillar.description,
                    modules: currentPillar.bullets,
                    stats: "Turnkey delivery with guaranteed IP ownership",
                    onEnroll: () => onOpenBooking(`Custom SaaS Proposal`),
                  })
                }
              >
                📄 View Solution Leaflet
              </button>
            )}
          </div>
        </div>

        {/* Live Mock Screen Column */}
        <div className="saas-preview-col">
          {currentPillar.id === "connect" && (
            <div className="mock-window">
              <div className="mock-window-header">
                <div className="mock-dots">
                  <span /> <span /> <span />
                </div>
                <div className="mock-title">RAO Solution Blueprinting • Scope Desk</div>
              </div>
              <div className="mock-body">
                <div className="mock-alert-box">
                  <span className="pulse-circle" />
                  <span>Target Scope: {currentPillar.mockData.clientOrg}</span>
                </div>
                <div className="mentor-list">
                  {currentPillar.mockData.milestones.map((m, i) => (
                    <div key={i} className="mentor-item">
                      <div className="mentor-avatar">{i + 1}</div>
                      <div className="mentor-info">
                        <strong>{m.phase}</strong>
                        <small>{m.date}</small>
                      </div>
                      <span className="status-pill">{m.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {currentPillar.id === "learn" && (
            <div className="mock-window code-dark">
              <div className="mock-window-header">
                <div className="mock-dots">
                  <span /> <span /> <span />
                </div>
                <div className="mock-title">
                  <Terminal size={12} style={{ display: "inline", marginRight: 6 }} />
                  {currentPillar.mockData.filename}
                </div>
              </div>
              <div className="mock-code-body">
                <pre>
                  <code>{currentPillar.mockData.codeSnippet}</code>
                </pre>
                <div className="code-runner-status">
                  <span className="code-badge">Isolated Tenant DBs</span>
                  <span className="code-badge latency">Latency: &lt; 5ms</span>
                </div>
              </div>
            </div>
          )}

          {currentPillar.id === "build" && (
            <div className="mock-window">
              <div className="mock-window-header">
                <div className="mock-dots">
                  <span /> <span /> <span />
                </div>
                <div className="mock-title">Custom Software Engineering Velocity</div>
              </div>
              <div className="mock-body">
                <div className="stats-metric-grid">
                  <div className="metric-box">
                    <small>DELIVERY CADENCE</small>
                    <h3>{currentPillar.mockData.sprintsCompleted}</h3>
                  </div>
                  <div className="metric-box">
                    <small>UNIT TEST COVERAGE</small>
                    <h3 style={{ color: "#10B981" }}>{currentPillar.mockData.testCoverage}</h3>
                  </div>
                  <div className="metric-box">
                    <small>VELOCITY STATUS</small>
                    <h3 style={{ color: "#673DE6" }}>{currentPillar.mockData.featureDelivery}</h3>
                  </div>
                </div>
                <div className="pipeline-alert">
                  <Shield size={16} color="#10B981" />
                  <span>{currentPillar.mockData.pipelineStatus}</span>
                </div>
              </div>
            </div>
          )}

          {currentPillar.id === "launch" && (
            <div className="mock-window">
              <div className="mock-window-header">
                <div className="mock-dots">
                  <span /> <span /> <span />
                </div>
                <div className="mock-title">Cloud Infrastructure & Production Health</div>
              </div>
              <div className="mock-body">
                <div className="radar-banner">
                  <div>
                    <small>PRODUCTION RELIABILITY SLA</small>
                    <h2>{currentPillar.mockData.uptime}</h2>
                  </div>
                  <div className="radar-badge">P99: {currentPillar.mockData.p99Latency}</div>
                </div>
                <div className="partner-chip-wrap">
                  <small style={{ width: "100%", color: "var(--muted)", marginBottom: 8, display: "block" }}>
                    DEPLOYED CLUSTER REGIONS:
                  </small>
                  {currentPillar.mockData.globalNodes.map((comp, i) => (
                    <span key={i} className="partner-chip">
                      <Cloud size={12} style={{ display: "inline", marginRight: 4 }} />
                      {comp}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SaasTabs;
