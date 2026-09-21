import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAppAuth } from "../context/AuthContext";
import Logo from "./Logo";
import { LogOut, Menu, X, Sparkles, ChevronDown } from "lucide-react";

function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const location = useLocation();

  const { isSignedIn, user, openSignIn, openSignUp, signOut, isClerk } = useAppAuth();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
  }, [location.pathname]);

  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container navin">
        {/* Modern Vector Brand Logo */}
        <Link to="/" className="logo-brand-link">
          <Logo size={36} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="links">
          <NavLink to="/" end className="nav-tab-link">
            Home
          </NavLink>

          <NavLink to="/workshops" className="nav-tab-link">
            Workshops
          </NavLink>

          <NavLink to="/clients" className="nav-tab-link">
            Clients & Placements
          </NavLink>

          <NavLink to="/collabs" className="nav-tab-link">
            Collabs & Internships
          </NavLink>

          <NavLink to="/about" className="nav-tab-link">
            About
          </NavLink>
        </nav>

        {/* Right CTA / Auth Controls */}
        <div className="nav-actions">
          {isSignedIn && user ? (
            <div className="user-profile-menu">
              <button
                type="button"
                className="user-profile-trigger"
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              >
                <div className="user-avatar-badge">
                  {user.imageUrl ? (
                    <img src={user.imageUrl} alt={user.fullName} className="user-avatar-img" />
                  ) : (
                    user.avatarText || "U"
                  )}
                </div>
                <span className="user-name-text">{user.firstName || "Member"}</span>
                <ChevronDown size={14} />
              </button>

              {userDropdownOpen && (
                <div className="user-dropdown-card animate-fade-in">
                  <div className="dropdown-user-header">
                    <strong>{user.fullName}</strong>
                    <small>{user.email}</small>
                    <span className="role-tag">{user.role || "Member"}</span>
                  </div>
                  <hr className="dropdown-divider" />
                  <button
                    type="button"
                    className="dropdown-item"
                    onClick={() => {
                      setUserDropdownOpen(false);
                      onOpenBooking("Candidate Fast-Track Desk");
                    }}
                  >
                    <Sparkles size={14} color="#8B5CF6" />
                    <span>My Applications</span>
                  </button>
                  <button
                    type="button"
                    className="dropdown-item danger"
                    onClick={() => {
                      setUserDropdownOpen(false);
                      signOut();
                    }}
                  >
                    <LogOut size={14} />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="auth-btn-group">
              <button
                type="button"
                className="btn-text"
                onClick={openSignIn}
              >
                Sign In
              </button>
              <button
                type="button"
                className="btn primary nav-cta glow-btn"
                onClick={() => onOpenBooking("General Placement Pass")}
              >
                Apply Now →
              </button>
            </div>
          )}

          {/* Mobile Menu Trigger */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-fade-in">
          <div className="mobile-links">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/workshops">
              Workshops
            </NavLink>
            <NavLink to="/clients">
              Clients & Placements
            </NavLink>
            <NavLink to="/collabs">
              Collabs & Internships
            </NavLink>
            <NavLink to="/about">
              About RAO
            </NavLink>
            <NavLink to="/contact">
              Contact & Inquiries
            </NavLink>

            <div className="mobile-auth-area">
              {isSignedIn ? (
                <button
                  type="button"
                  className="btn outline full-width"
                  onClick={signOut}
                >
                  <LogOut size={16} /> Sign Out ({user.firstName})
                </button>
              ) : (
                <>
                  <button
                    type="button"
                    className="btn outline full-width"
                    onClick={openSignIn}
                  >
                    Sign In / Register
                  </button>
                  <button
                    type="button"
                    className="btn primary full-width glow-btn"
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenBooking("Priority Mobile Pass");
                    }}
                  >
                    Apply for Cohort 14 →
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;