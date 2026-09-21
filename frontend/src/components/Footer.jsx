import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import { CheckCircle2, ArrowRight, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti";

function Footer() {
  const [subscribedEmail, setSubscribedEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 50,
        spread: 50,
        origin: { y: 0.8 },
        colors: ["#673DE6", "#D946EF"],
      });
    } catch (err) {}
    setSubscribed(true);
  };

  return (
    <footer className="footer-expanded">
      <div className="container footer-main-grid">
        {/* Brand Column with Modern SVG Logo */}
        <div className="footer-brand-col">
          <Link to="/" className="logo-brand-link">
            <Logo size={36} />
          </Link>
          <p className="footer-brand-desc">
            RAO Technologies accelerates engineering careers and powers custom SaaS solutions.
            We specialize in tier-1 placement workshops, bespoke software development, corporate upskilling,
            and collegiate campus collaborations.
          </p>
          <div className="footer-trust-tag">
            <ShieldCheck size={16} color="#10B981" />
            <span>ISO 9001:2015 Certified Educational Partner</span>
          </div>
        </div>

        {/* Links Col 1 */}
        <div className="footer-links-col">
          <h4>Accelerators</h4>
          <ul>
            <li>
              <Link to="/workshops">Placement Workshops</Link>
            </li>
            <li>
              <Link to="/workshops">Full-Stack Sprint</Link>
            </li>
            <li>
              <Link to="/workshops">GenAI & Agent Architecture</Link>
            </li>
            <li>
              <Link to="/workshops">Distributed Systems Masterclass</Link>
            </li>
            <li>
              <Link to="/collabs">Production Internships</Link>
            </li>
          </ul>
        </div>

        {/* Links Col 2 */}
        <div className="footer-links-col">
          <h4>Enterprises & Campuses</h4>
          <ul>
            <li>
              <Link to="/saas">Custom SaaS Solutions</Link>
            </li>
            <li>
              <Link to="/corporate-training">Corporate Training</Link>
            </li>
            <li>
              <Link to="/clients">Clients & Placement Records</Link>
            </li>
            <li>
              <Link to="/collabs">College MoUs & CoE Labs</Link>
            </li>
            <li>
              <Link to="/clients">Hire RAO Graduates</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter / Updates Col */}
        <div className="footer-newsletter-col">
          <h4>Weekly Tech & Hiring Dispatch</h4>
          <p>Get exclusive interview problem breakdowns, hiring alerts, and architecture case studies.</p>
          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="footer-newsletter-form">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={subscribedEmail}
                onChange={(e) => setSubscribedEmail(e.target.value)}
              />
              <button type="submit" aria-label="Subscribe to newsletter">
                <ArrowRight size={16} />
              </button>
            </form>
          ) : (
            <div className="subscribed-success">
              <CheckCircle2 size={16} color="#10B981" />
              <span>You're subscribed to the priority dispatch!</span>
            </div>
          )}
          <div className="fomo-footer-stat">
            <span className="pulse-dot-sm" />
            <small>Over 32,000 engineers read weekly</small>
          </div>
        </div>
      </div>

      <div className="container footer-bottom-bar">
        <span>© 2026 RAO Technologies. All rights reserved.</span>
        <div className="footer-bottom-links">
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Support</Link>
          <Link to="/saas">SaaS Delivery SLAs</Link>
          <Link to="/contact">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;