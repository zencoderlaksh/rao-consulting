import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisible, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      type="button"
      className="scroll-to-top-btn animate-fade-in"
      onClick={scrollToTop}
      aria-label="Scroll back to top"
      title="Back to Top"
    >
      <ArrowUp size={18} />
      <span className="scroll-btn-ring" />
    </button>
  );
}

export default ScrollToTop;
