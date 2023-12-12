import ScrollReveal from "scrollreveal";
import AboutMe from "./components/AboutMe";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MyQualification from "./components/MyQualification";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects";
import ProjectsXI from "./components/ProjectsXl";
import ScrollToTop from "./components/ScrollToTop";
import ScrollDown from "./utils/ScrollDown";
import { useEffect, useRef } from "react";

function App() {
  const topRef = useRef(null);
  useEffect(() => {
    ScrollReveal().reveal(topRef.current, {
      origin: "top",
      distance: "100px",
      duration: 2000,
      delay: 300,
      easing: "ease",
      reset: true,
    });
  }, []);
  return (
    <div className='App'>
      <Header />
      <figure>
        <ScrollToTop />
      </figure>
      <main className='md:w-9/10 m-auto md:my-24 mb-24 md:mt-12'>
        <Hero />
        <ScrollDown />
        <AboutMe />
        <MySkills />
        <MyQualification />
        <article id='projects' ref={topRef}>
          <div className='md:hidden'>
            <Projects />
          </div>
          <div>
            <ProjectsXI />
          </div>
        </article>
      </main>
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
