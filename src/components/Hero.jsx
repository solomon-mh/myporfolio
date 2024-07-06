import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyImage from "./MyImage";
import Typewriter from "../utils/TypeWriter";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { TeckStack } from "../components";
import { styles } from "../styles";

const Hero = () => {
  const topRef = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(topRef.current, {
      origin: "top",
      distance: "250px",
      duration: 2300,
      delay: 350,
      easing: "ease",
      reset: true,
    });
  }, []);
  const textToShow =
    "Passionate developer based in Ethiopia, dedicated to providing quality work in a timely manner.";

  return (
    <div className="pt-20 h-screen md:pt-32">
      <article
        ref={topRef}
        className="flex gap-2 md:gap-16 flex-col-reverse md:flex-row justify-between items-center w-9/10  mx-auto"
        id="home"
      >
        <section className="md:w-1/2 text-center md:text-left">
          <h1 className={`${styles.heroHeadText} hero-header text-white`}>
            Hi, I&apos;m{" "}
            <span className="hero-header text-[#915EFF]">Solomon</span>
          </h1>
          <p
            className={`${styles.heroSubText} hero-header text-xl font-extrabold inline-block text-lime-500 mb-4`}
          >
            FullStack Developer
          </p>
          <div className="mb-2 md:mb-8 hidden sm:block">
            <Typewriter text={textToShow} />
          </div>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://www.linkedin.com/in/solomonmuhye"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={`${styles.shimmeringBtnLdn}`}>
                <i className="pr-2">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </i>
                LinkedIn
              </button>
            </a>
            <a
              href="https://github.com/solomon-mh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className={`${styles.shimmeringBtnGit}`}>
                <i className="pr-2">
                  <FontAwesomeIcon icon={faGithub} />
                </i>
                GitHub
              </button>
            </a>
          </div>
        </section>
        <section className="md:w-1/2 md:mb-0">
          <MyImage />
        </section>
      </article>
      <div className="mx-12 md:w-4/5 flex flex-col md:my-10 mr-12 md:mx-auto text-[10px] md:text-base items-center sm:gap-6 sm:flex-row">
        <p className="text-xs md:text-lg font-semibold">My Tech Stack</p>
        <TeckStack />
      </div>
    </div>
  );
};

export default Hero;
