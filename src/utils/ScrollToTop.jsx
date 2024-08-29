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

  const scrollTo = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    showArrow && (
      <div
        onClick={() => scrollTo()}
        className={`arr__to__top  fixed bottom-20 bg-slate-400 dark:bg-slate-600 right-0 w-12 h-12 flex items-center justify-center z-50 rounded-full mx-5 cursor-pointer`}
      >
        <FontAwesomeIcon className="text-slate-50" icon={faArrowUp} />
      </div>
    )
  );
};

export default ScrollToTop;
