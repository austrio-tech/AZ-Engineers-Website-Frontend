// components/BackToTopButton.js
import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./style/BackToTopButton.css";

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const customScrollToTop = () => {
    const start = window.pageYOffset;
    const duration = 1500;
    const easingFunction = (t) => t * t * t * t * t; // Quartic easing in

    const startTime = performance.now();

    const scrollStep = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const easedProgress = easingFunction(progress);

      window.scrollTo(0, start * (1 - easedProgress));

      if (progress < 1) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className="back-to-top">
      {visible && (
        <button onClick={customScrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;
