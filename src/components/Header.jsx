import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  function scrollToSection() {
    console.log("Zero");
  }
  return (
    <header className='header min-w-full left-0 fixed flex justify-between items-center header z-50 bg-headerColor text-white text-xl py-4 px-8 top-0'>
      <h1>
        Solomon <span className='text-brightRed'>Muhye</span>
      </h1>
      <nav className='hidden md:block'>
        <button onClick={() => scrollToSection("Hero")} className='navlinks'>
          Home
        </button>
        <button
          onClick={() => scrollToSection("Features")}
          className='navlinks'
        >
          About
        </button>
        <button
          onClick={() => scrollToSection("HowItWorks")}
          className='navlinks'
        >
          Skills
        </button>
        <button
          onClick={() => scrollToSection("Testimonial")}
          className='navlinks'
        >
          Service
        </button>
        <button onClick={() => scrollToSection("Pricing")} className='navlinks'>
          Projects
        </button>
        <button onClick={() => scrollToSection("FAQ")} className='navlinks'>
          Contact
        </button>
        <div className='inline-block cursor-pointer'>
          <FontAwesomeIcon
            style={{ transform: "rotate(180deg)" }}
            icon={faMoon}
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
