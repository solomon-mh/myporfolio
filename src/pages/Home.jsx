import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import {
  AboutMe,
  Footer,
  Nav,
  Hero,
  MyProjects,
  ScrollToTop,
  Services,
} from "../model/componentsModel";
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
      <Nav />
      <main className='md:w-9/10 m-auto md:my-24 mb-24 md:mt-12'>
        <Hero />
        <AboutMe />
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
