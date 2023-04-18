import React, { useEffect, useRef, useState } from "react";
import classes from "./ScrollToTopButton.module.css";

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const endOfPageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    });

    if (endOfPageRef.current) {
      observer.observe(endOfPageRef.current);
    }

    return () => {
      if (endOfPageRef.current) {
        observer.unobserve(endOfPageRef.current);
      }
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      className={ isVisible ? classes.btn : "hidden"}
      style={{
        display: isVisible ? "block" : "none",
      }}
      onClick={handleClick}
    >
      Scroll To Top
    </button>
  );
};

export default ScrollToTopButton;

