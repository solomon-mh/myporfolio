import { faMouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const ScrollDown = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollTo = () => {
    setScrollPosition((prev) => prev + 100);
    console.log(scrollPosition);
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className='mx-12 font-extrabold text-sm'>
      <button
        onClick={scrollTo}
        className='transition-all duration-500 hover:text-indigo-400'
      >
        <i className='px-1'>
          <FontAwesomeIcon icon={faMouse} />
        </i>
        Scroll Down <span className='text-lg'>&darr;</span>
      </button>
    </div>
  );
};

export default ScrollDown;
