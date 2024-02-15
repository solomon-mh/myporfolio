import { faMouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/component-stlyes.css";
const ScrollDown = () => {
  const scrollTo = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className='mx-12 font-extrabold text-sm'>
      <button
        onClick={() => scrollTo("qualification")}
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
