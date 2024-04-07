import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const ScrollToTop = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const treshHoldPosition = 150;

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      setShowArrow(scrollPosition > treshHoldPosition);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    showArrow && (
      <div
        onClick={() => scrollTo("nav")}
        className='arr__to__top fixed bottom-20 right-0 w-12 h-12 flex items-center justify-center bg-gray-700 z-50 rounded-full mx-5 cursor-pointer'
      >
        <FontAwesomeIcon icon={faArrowUp} />
      </div>
    )
  );
};

export default ScrollToTop;
