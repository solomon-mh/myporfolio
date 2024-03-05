import Header from "../components/Header";
import Hero from "../components/Hero";
import ScrollDown from "../utils/ScrollDown";
import AboutMe from "../components/AboutMe";
import MySkills from "../components/MySkills";
import MyQualification from "../components/MyQualification";
import Services from "../components/Services";
import Projects from "../components/Projects";
import ProjectsXl from "../components/ProjectsXl";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";

const Home = () => {
  const rightRef = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(rightRef.current, {
      origin: "right",
      distance: "400px",
      duration: 2000,
      delay: 200,
      rotate: { y: 90 },
      easing: "ease",
      reset: true,
    });
  }, []);
  return (
    <div>
      <Header />
      <main className='md:w-9/10 m-auto md:my-24 mb-24 md:mt-12'>
        <Hero />
        <ScrollDown />
        <AboutMe />
        <MySkills />
        <MyQualification />
        <Services />
        <article id='projects' ref={rightRef}>
          <div className='md:hidden'>
            <Projects />
          </div>
          <div>
            <ProjectsXl />
          </div>
        </article>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
