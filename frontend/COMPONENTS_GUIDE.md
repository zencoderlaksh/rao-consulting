# RAO Technologies • Frontend Architecture & Components Guide

This document provides a comprehensive technical overview of the components, design tokens, interactive modules, authentication systems, and pages developed for **RAO Technologies** ("Connect · Learn · Build · Launch").

---

## 1. Brand Identity & Design System

### Color Tokens
- **Primary Brand**: `#673DE6` (Electric Violet)
- **Secondary Accent**: `#8B5CF6` (Vibrant Purple)
- **High-Energy Highlight**: `#D946EF` (Neon Pink)
- **Brand Gradient**: `linear-gradient(100deg, #673DE6, #8B5CF6, #D946EF)`
- **Success & ROI Metrics**: `#10B981` (Emerald Green)
- **Urgency / FOMO**: `#EF4444` / `#DC2626` (Live Radar Crimson)
- **Backgrounds**: Pure White `#FFFFFF`, Soft `#F5F5F7`, Light Lavender `#F1EEFF`
- **Dark Surface Containers**: `#111113`, `#18181B`, `#0F172A`

### Visual Principles (Awwwards & Dribbble Influenced)
1. **Glassmorphism**: Soft background blurs (`backdrop-filter: blur(14px)`), translucent border lines, and gradient card glows.
2. **Psychological Urgency & FOMO**: Live countdown timers, seat availability progress bars, simulated live placement toasts, and verified salary hike comparison cards.
3. **Micro-Interactions**: Hover lifts (`translateY(-4px)`), smooth CSS transforms, pulsing radar dots, and celebratory `canvas-confetti` bursts on conversions.

---

## 2. Authentication Architecture (`@clerk/clerk-react`)

### Dual-Mode Auth Provider (`src/context/AuthContext.jsx`)
The platform supports **zero-friction presentation & testing** while being 100% production-ready for Clerk.

- **Mode A (Demo / Presentation Mode - Active by Default)**:
  - If no `VITE_CLERK_PUBLISHABLE_KEY` is present in `.env`, the system activates an interactive mock provider.
  - Allows you, your team, and clients to immediately test **1-Click Persona Logins**:
    * **Student Candidate**: Aarav Sharma (Cohort 14)
    * **Enterprise Recruiter**: Elena Verma (Hiring Lead @ Razorpay)
    * **College Dean**: Dr. Rajesh Kulkarni (MoU Partner)
  - Manages session state via `localStorage` and provides an authenticated profile avatar dropdown with role badges and sign-out capabilities.
- **Mode B (Live Clerk Production Mode)**:
  - When you add your Clerk publishable key (`pk_live_...` or `pk_test_...`) to `.env`, Clerk's native `<ClerkProvider>` automatically mounts, connecting seamlessly to Google, GitHub, Email Magic Links, and enterprise SSO.

### Interactive Auth Modal (`src/components/AuthModal.jsx`)
- Sleek modal with dual tabs (`Sign In` vs `Create Account`).
- Fast persona selector buttons for instantaneous client demonstrations.
- Security badge highlighting enterprise SSO and SSL encryption.

---

## 3. Interactive Engagement & FOMO Modules

### 1. Interactive Placement ROI & Salary Hike Calculator (`src/components/RoiCalculator.jsx`)
- **Purpose**: Eliminates hesitation by illustrating the financial return on learning investment.
- **Features**:
  * Dual persona toggle: "Working Professional" vs "College Fresher / Final Year".
  * Interactive range slider for current CTC (₹2.5 LPA to ₹18 LPA).
  * Engineering specialization selector (Full-Stack, GenAI, DevOps, Distributed Systems).
  * Dynamic math output: Real-time calculation of **Projected CTC**, **% Hike**, and **Annual Increment**.
  * Direct "Claim Placement Sprint Pass" CTA triggering the application modal with selected specialization pre-filled.

### 2. Live Social Proof Toast (`src/components/FomoNotification.jsx`)
- **Purpose**: Creates real-time FOMO by cycling through verified candidate placements and enrollment events.
- **Features**:
  * Smooth slide-up toast in the bottom-left corner.
  * Displays candidate name, secured role, hiring enterprise, verified package, and relative timestamp.
  * Automatically rotates every 8 seconds with dismissible close button.

### 3. Fast-Track Booking & Priority Pass Modal (`src/components/BookingModal.jsx`)
- **Purpose**: High-converting lead intake and enrollment form.
- **Features**:
  * Real-time urgency header: "Cohort 14 • Only 4 Seats Remaining".
  * Track selection dropdown (Placement Sprint, Internship, Corporate Training, College MoU).
  * On submit: Triggers multi-color `canvas-confetti` explosion and reveals a holographic **Priority Queue Pass** with custom Ticket ID (`PASS-RAO-XXXX`).

### 4. "Connect · Learn · Build · Launch" SaaS Workbench (`src/components/SaasTabs.jsx`)
- **Purpose**: Interactive showcase of RAO's proprietary SaaS platform.
- **Features**:
  * 4 interactive tabs with numbered indicators.
  * **Connect Tab**: Live mentor availability dashboard showing real-time active architects from Uber, Postman, etc.
  * **Learn Tab**: Interactive dark cloud IDE code viewer with syntax highlighting and passing unit tests badge.
  * **Build Tab**: Continuous delivery telemetry panel with production commit counts, test coverage metrics, and container uptime.
  * **Launch Tab**: Placement radar showing verified referral partners and hiring companies.

---

## 4. Navigation & Structural Components

### Global Floating Navbar (`src/components/Navbar.jsx`)
- Translucent backdrop on scroll (`scrolled` glass effect).
- Live pulse indicator badge on the `Workshops` tab.
- Links to all dedicated pages: `Home`, `Workshops`, `Corporate`, `Clients`, `Collabs`, `SaaS`, `About`.
- Dynamic authentication state: Displays "Sign In" / "Apply Now" or Authenticated User Pill with profile dropdown.
- Full mobile drawer menu for seamless responsive navigation.

### Expanded Corporate Footer (`src/components/Footer.jsx`)
- Brand mission statement with ISO 9001:2015 educational certification badge.
- Categorized navigation links for Accelerators, Enterprises, and Campuses.
- Weekly Tech Dispatch newsletter subscription with instant feedback.
- Legal, privacy, and platform terms links.

---

## 5. Dedicated Pages Overview

| Page Route | Component | Key Highlights |
| :--- | :--- | :--- |
| `/` | `pages/Home.jsx` | Showstopping Hero with 3D orbital CSS motion, FOMO alert pill, SaaS interactive tabs, ROI calculator, Programs, Stats, Capstones, and Quick-Action service cards. |
| `/workshops` | `pages/Workshops.jsx` | Placement bootcamps, **live countdown timer** (days/hours/mins/secs), **seat availability meter** ("87% Filled"), comprehensive syllabus milestones, and FAANG instructor credentials. |
| `/corporate-training` | `pages/CorporateTraining.jsx` | Enterprise upskilling for engineering pods, cloud migration curricula, developer velocity metrics (+50% faster ramp-up), verified case studies, and corporate RFP booking form. |
| `/clients` | `pages/Clients.jsx` | **Placement Hall of Fame**: 15+ hiring company logos (Google, Razorpay, Swiggy, Amazon), candidate before/after CTC cards with % hikes, and Employer Talent Intake portal. |
| `/collabs` | `pages/Collabs.jsx` | School & College Institutional Partnerships: Formal MoU process, Center of Excellence (CoE) labs, Faculty Development, and **Real-World Student Internships** with stipend and PPO tracks. |
| `/saas` | `pages/SaasPlatform.jsx` | Deep dive into the SaaS cloud platform, browser workspaces, automated architectural code evaluation, and feature comparison matrix against traditional online bootcamps. |
| `/about` | `pages/About.jsx` | Corporate backstory, mission, and stats. |
| `/contact` | `pages/Contact.jsx` | Direct inquiry channel with interactive contact form. |

---

## 6. How to Configure Clerk Live Credentials

To switch from Demo Auth mode to live Clerk production credentials:
1. Create a free account at [clerk.com](https://clerk.com).
2. Create a new application in the Clerk Dashboard.
3. In `frontend/.env`, set:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=pk_test_YOUR_ACTUAL_CLERK_KEY
   ```
4. Restart Vite (`npm run dev`). The application will automatically detect your key and switch to Clerk live authentication mode with zero code modifications.
