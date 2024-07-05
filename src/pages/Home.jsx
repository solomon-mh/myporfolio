import { useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import {
  AboutMe,
  NavBar,
  Hero,
  Footer,
  // MyProjects,
  ScrollToTop,
  Services,
  MyProjects,
} from "../components";
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
      <NavBar />
      <main className="m-auto md:my-24 mb-24 md:mt-12">
        <Hero />
        <AboutMe />
        <div className="hidden md:block">
          <Services />
        </div>
        <div className="block md:hidden">
          <MyProjects />
        </div>
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
