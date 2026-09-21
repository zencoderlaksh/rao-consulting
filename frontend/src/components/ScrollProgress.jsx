import { useEffect, useState } from "react";

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const percentage = height
        ? scrollTop / height
        : 0;

      setProgress(percentage);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="progress"
      style={{
        width: `${progress * 100}%`,
      }}
    />
  );
}

export default ScrollProgress;