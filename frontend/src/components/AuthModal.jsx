import React, { useState } from "react";
import { useAppAuth } from "../context/AuthContext";
import Logo from "./Logo";
import { X, Sparkles, CheckCircle2, ShieldCheck, ArrowRight, UserCheck } from "lucide-react";

function AuthModal() {
  const {
    authModalOpen,
    authModalMode,
    setAuthModalMode,
    closeAuthModal,
    loginAsDemo,
    isClerk,
  } = useAppAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [role, setRole] = useState("student");

  if (!authModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    loginAsDemo(role);
  };

  return (
    <div className="modal-backdrop" onClick={closeAuthModal}>
      <div className="modal-container auth-modal-wide" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={closeAuthModal} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="auth-modal-grid">
          {/* Left Column: Brand, Value Proposition & Instant Persona Logins */}
          <div className="auth-left-sidebar">
            <Logo size={34} subtitle="AUTHENTICATION GATEWAY" />
            <h3>Your Portal into High-Tier Engineering</h3>
            <p>
              Access verified placement tracks, manage corporate training pods, or track your custom SaaS solution delivery.
            </p>

            <div className="auth-value-props">
              <div className="auth-prop-item">
                <CheckCircle2 size={16} color="#10B981" />
                <span>Single Sign-On (Google, GitHub, LinkedIn)</span>
              </div>
              <div className="auth-prop-item">
                <CheckCircle2 size={16} color="#10B981" />
                <span>Verified student & recruiter dashboards</span>
              </div>
              <div className="auth-prop-item">
                <CheckCircle2 size={16} color="#10B981" />
                <span>Live placement referral tracker access</span>
              </div>
            </div>

            {/* Instant Demo Logins */}
            <div className="demo-persona-box">
              <div className="demo-persona-title">
                <Sparkles size={14} color="#8B5CF6" />
                <span>1-Click Presentation Personas</span>
              </div>
              <div className="persona-buttons">
                <button
                  type="button"
                  className="persona-btn"
                  onClick={() => loginAsDemo("student")}
                >
                  <UserCheck size={14} />
                  <span>Student (Aarav Sharma - Cohort 14)</span>
                </button>
                <button
                  type="button"
                  className="persona-btn"
                  onClick={() => loginAsDemo("recruiter")}
                >
                  <UserCheck size={14} />
                  <span>Hiring Lead (Elena Verma @ Razorpay)</span>
                </button>
                <button
                  type="button"
                  className="persona-btn"
                  onClick={() => loginAsDemo("partner")}
                >
                  <UserCheck size={14} />
                  <span>Campus Dean (Dr. Rajesh Kulkarni)</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form & Tab Switcher */}
          <div className="auth-right-form">
            <div className="auth-tabs">
              <button
                type="button"
                className={`auth-tab ${authModalMode === "sign-in" ? "active" : ""}`}
                onClick={() => setAuthModalMode("sign-in")}
              >
                Sign In
              </button>
              <button
                type="button"
                className={`auth-tab ${authModalMode === "sign-up" ? "active" : ""}`}
                onClick={() => setAuthModalMode("sign-up")}
              >
                Create Account
              </button>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              {authModalMode === "sign-up" && (
                <div className="input-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder="e.g. Rahul Verma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              )}

              <div className="input-group">
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {authModalMode === "sign-up" && (
                <div className="input-group">
                  <label>Primary Interest</label>
                  <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="student">Placement Workshop & Internships</option>
                    <option value="recruiter">Corporate Training & Hiring</option>
                    <option value="partner">School / College Collaboration</option>
                    <option value="saas">Custom SaaS Solutions</option>
                  </select>
                </div>
              )}

              <button type="submit" className="btn primary full-width glow-btn" style={{ marginTop: 8 }}>
                {authModalMode === "sign-in" ? "Sign In to RAO" : "Get Started Instantly"}
                <ArrowRight size={16} />
              </button>
            </form>

            <div className="auth-security-notice">
              <ShieldCheck size={14} color="#673DE6" />
              <span>
                {isClerk
                  ? "Secured with Clerk Enterprise Auth & SSO"
                  : "Clerk-Ready Architecture with Instant Demo Mode"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AuthModal;
