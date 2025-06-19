import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 w-[60px] h-[60px] bg-gradient-to-tr from-blue-600 to-purple-600 text-white text-xl p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition duration-300 group"
        aria-label="Scroll to top"
      >
        <FontAwesomeIcon icon={faArrowUp} className="group-hover:animate-bounce" />
      </button>
    )
  );
};

export default ScrollToTopButton;
