import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import MyImage from "./components/MyImage";
import MyQualification from "./components/MyQualification";
import MySkills from "./components/MySkills";
import MySocialLinks from "./components/MySocialLinks";
import Projects from "./components/Projects";
import ScrollDown from "./utils/ScrollDown";

function App() {
  return (
    <div className='App w-4/5 m-auto my-24 mt-12 '>
      <header className='py-12 w-4/5 m-auto flex justify-around items-center'>
        <MySocialLinks />
        <MyImage />
      </header>
      <main>
        <Hero />
        <ScrollDown />
        <AboutMe />
        <MySkills />
        <MyQualification />
        <Projects />
      </main>
    </div>
  );
}

export default App;
