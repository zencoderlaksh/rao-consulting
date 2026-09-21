import React from "react";
import { Sparkles, Terminal, Cpu, Cloud, Shield, CheckCircle, ArrowRight, Zap, Code, Users, Layers, ShieldCheck } from "lucide-react";
import SaasTabs from "../components/SaasTabs";
import SectionHeader from "../components/SectionHeader";

const saasCapabilities = [
  {
    icon: Layers,
    title: "Custom Multi-Tenant Architecture",
    desc: "Bespoke database schemas with logical or physical tenant isolation, automated workspace provisioning, and compliance readiness.",
  },
  {
    icon: Cpu,
    title: "AI-Powered SaaS Capabilities",
    desc: "Seamless integration of intelligent AI agents, custom RAG search, semantic document parsing, and automated workflows directly into your SaaS product.",
  },
  {
    icon: Cloud,
    title: "Enterprise Subscription & Billing",
    desc: "Turnkey integration of Stripe / Razorpay recurring subscriptions, usage-based metered billing, invoices, and automated dunning.",
  },
  {
    icon: ShieldCheck,
    title: "Zero-Trust Security & RBAC",
    desc: "Enterprise SSO (SAML, Okta, Clerk, Google Workspace), fine-grained role-based access control, SOC2-ready audit logging, and automated secrets vaulting.",
  },
];

const deliveryComparison = [
  {
    feature: "Development Model",
    traditional: "Generic offshore agencies with low transparency",
    rao: "Dedicated senior engineering pods with weekly sprint demos & clean Git commits",
  },
  {
    feature: "Architecture Quality",
    traditional: "Fragile monoliths that break when scaling past 1,000 users",
    rao: "Scalable microservices with Kubernetes, Redis caching, and Kafka pipelines",
  },
  {
    feature: "IP Ownership",
    traditional: "Vendor lock-in with proprietary platform dependencies",
    rao: "100% full intellectual property & codebase ownership transferred to you",
  },
  {
    feature: "Go-To-Market Speed",
    traditional: "9 to 14 months of scoping hurdles",
    rao: "Production-ready MVP in 6 to 10 weeks, enterprise release in 14 weeks",
  },
  {
    feature: "Post-Launch SLA",
    traditional: "Left on your own or steep maintenance retainers",
    rao: "Guaranteed 99.99% uptime SLA with dedicated DevOps reliability engineering",
  },
];

function SaasPlatform({ onOpenBooking, onOpenLeaflet }) {
  return (
    <div className="saas-page">
      {/* Page Hero */}
      <section className="page-hero">
        <div className="container">
          <div className="eyebrow">
            <span>TAILOR-MADE SAAS SOLUTIONS & PLATFORM DELIVERY</span>
          </div>
          <h1>
            We Engineer & Launch <span className="grad">Custom SaaS Products</span>
          </h1>
          <p className="max-w-readable">
            Turn your business vision into a scalable, high-margin SaaS platform. From technical discovery
            to cloud-native deployment, RAO Technologies builds bespoke software solutions engineered
            to your precise specifications.
          </p>

          <div className="saas-hero-actions">
            <button
              type="button"
              className="btn primary glow-btn"
              onClick={() => onOpenBooking("Custom SaaS Solutions RFP")}
            >
              Discuss Your SaaS Requirements →
            </button>
            {onOpenLeaflet && (
              <button
                type="button"
                className="btn outline"
                onClick={() =>
                  onOpenLeaflet({
                    title: "Bespoke SaaS Delivery Architecture",
                    tagline: "End-to-end software development lifecycle for enterprises and funded startups.",
                    description: "Detailed breakdown of our SaaS delivery process, tech stack, SLA tiers, and IP transfer terms.",
                    modules: [
                      "Technical Discovery, Architecture Scope & PRD Approval",
                      "Full-Stack Multi-Tenant Web App (React 19, TypeScript)",
                      "Distributed Cloud Backend (Postgres, Redis, Kafka)",
                      "Enterprise Billing & Role-Based Access Control",
                      "Automated CI/CD Release Trains on AWS/GCP Kubernetes",
                    ],
                    stats: "100% IP Ownership • 99.99% Uptime SLA",
                    onEnroll: () => onOpenBooking("Custom SaaS Solutions RFP"),
                  })
                }
              >
                📄 View SaaS Architecture Leaflet
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Embedded Interactive Connect-Learn-Build-Launch Tabs */}
      <SaasTabs onOpenBooking={onOpenBooking} onOpenLeaflet={onOpenLeaflet} />

      {/* Advanced Capabilities Grid */}
      <section className="container section-padding">
        <SectionHeader
          eyebrow="ENGINEERING EXCELLENCE"
          title="Engineered for Scalability & High Concurrency"
          description="We leverage enterprise-proven architectures so your custom SaaS platform scales smoothly from 10 to 100,000+ active tenants without rewrites."
        />

        <div className="saas-features-grid">
          {saasCapabilities.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div key={i} className="saas-feat-card">
                <div className="feat-icon-wrap">
                  <Icon size={22} color="#673DE6" />
                </div>
                <h3>{feat.title}</h3>
                <p>{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Delivery Comparison Matrix */}
      <section className="container section-padding">
        <SectionHeader
          eyebrow="THE RAO ADVANTAGE"
          title="Traditional Agencies vs RAO Custom SaaS Engineering"
          description="Why innovative startups and enterprise leaders trust RAO Technologies for mission-critical software solutions."
        />

        <div className="comparison-table-wrap">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Capabilities</th>
                <th>Traditional Software Agencies</th>
                <th className="highlight-header">RAO SaaS Engineering</th>
              </tr>
            </thead>
            <tbody>
              {deliveryComparison.map((row, idx) => (
                <tr key={idx}>
                  <td className="feat-col">{row.feature}</td>
                  <td className="trad-col">{row.traditional}</td>
                  <td className="rao-col">
                    <div className="table-rao-cell">
                      <CheckCircle size={16} color="#10B981" />
                      <span>{row.rao}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="container section-padding">
        <div className="saas-cta-banner">
          <div className="saas-cta-text">
            <h2>Ready to Build Your Custom SaaS Solution?</h2>
            <p>
              Schedule an architecture discovery session with our principal engineers. Receive a detailed
              scope, timeline, and architectural blueprint within 48 hours.
            </p>
          </div>
          <button
            type="button"
            className="btn primary glow-btn"
            onClick={() => onOpenBooking("Custom SaaS Consultation Desk")}
          >
            Schedule Architectural Call →
          </button>
        </div>
      </section>
    </div>
  );
}

export default SaasPlatform;
