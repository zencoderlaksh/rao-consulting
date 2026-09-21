import React, { useState, useEffect } from "react";
import { CheckCircle2, TrendingUp, Users, Award, X } from "lucide-react";

const notifications = [
  {
    id: 1,
    icon: TrendingUp,
    color: "#10B981",
    name: "Ritesh Bagdi",
    action: "cracked ₹22.5 LPA SDE Offer at Razorpay",
    tag: "Placement Sprint Alum",
    time: "Just now",
  },
  {
    id: 2,
    icon: TrendingUp,
    color: "#10B981",
    name: "Rohan M.",
    action: "cracked ₹18.5 LPA Package at Swiggy",
    tag: "Placement Sprint Alum",
    time: "2 mins ago",
  },
  {
    id: 3,
    icon: Users,
    color: "#673DE6",
    name: "Shreya S. & 4 others",
    action: "reserved spots in Cohort 14 System Design",
    tag: "Only 3 seats left",
    time: "4 mins ago",
  },
  {
    id: 4,
    icon: Award,
    color: "#D946EF",
    name: "SRM University",
    action: "signed 2026 Campus Incubation MoU",
    tag: "College Collaboration",
    time: "7 mins ago",
  },
  {
    id: 5,
    icon: CheckCircle2,
    color: "#3B82F6",
    name: "FinTech Enterprise",
    action: "commissioned Custom SaaS Solution engineering",
    tag: "Custom SaaS Delivery",
    time: "12 mins ago",
  },
];

function FomoNotification() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Show initial notification after 2 seconds
    const initialTimer = setTimeout(() => {
      setVisible(true);
    }, 2000);

    // Loop through notifications
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % notifications.length);
        setVisible(true);
      }, 500);
    }, 7000);

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [dismissed]);

  if (dismissed || !visible) return null;

  const current = notifications[index];
  const IconComponent = current.icon;

  return (
    <div className="fomo-toast animate-slide-up">
      <div
        className="fomo-icon"
        style={{ background: `${current.color}15`, color: current.color }}
      >
        <IconComponent size={18} />
      </div>

      <div className="fomo-content">
        <div className="fomo-line1">
          <strong>{current.name}</strong> <span>{current.action}</span>
        </div>
        <div className="fomo-line2">
          <span className="fomo-tag">{current.tag}</span>
          <span className="fomo-dot">•</span>
          <span className="fomo-time">{current.time}</span>
        </div>
      </div>

      <button
        className="fomo-close"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss toast"
      >
        <X size={14} />
      </button>
    </div>
  );
}

export default FomoNotification;
