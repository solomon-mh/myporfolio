import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import {
  AboutMe,
  Footer,
  Header,
  Hero,
  MySkills,
  MyQualification,
  MyProjects,
  ScrollToTop,
  Services,
} from "../components/componentsModel";
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
        <AboutMe />
        <MySkills />
        <MyQualification />
        <Services />
        <MyProjects />
      </main>
      <footer>
        <Footer />
      </footer>
      <aside>
        <ScrollToTop />
      </aside>
    </div>
  );
};

export default Home;
