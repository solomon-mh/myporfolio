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
import Services from "./components/Services";

function App() {
  const toBottom = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(toBottom.current, {
      origin: "bottom",
      distance: "100px",
      duration: 2000,
      delay: 300,
      easing: "ease",
      reset: true,
    });
    ScrollReveal().reveal(bottomRef.current, {
      origin: "bottom",
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
      <main className='md:w-9/10 m-auto md:my-24 mb-24 md:mt-12'>
        <Hero />
        <ScrollDown />
        <AboutMe />
        <MySkills />
        <MyQualification />
        <Services />
        <article id='projects' ref={toBottom}>
          <div className='md:hidden'>
            <Projects />
          </div>
          <div>
            <ProjectsXI />
          </div>
        </article>
      </main>
      <div ref={bottomRef}>
        <ContactMe />
        <Footer />
      </div>
      <ScrollToTop />
    </div>
  );
}

export default App;
