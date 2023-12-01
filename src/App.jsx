import AboutMe from "./components/AboutMe";
import Hero from "./components/Hero";
import MyImage from "./components/MyImage";
import MyQualification from "./components/MyQualification";
import MySkills from "./components/MySkills";
import MySocialLinks from "./components/MySocialLinks";
import ScrollDown from "./utils/ScrollDown";

function App() {
  return (
    <div className='App my-24 mt-12'>
      <header className='py-12 flex justify-around items-center'>
        <MySocialLinks />
        <MyImage />
      </header>
      <main>
        <Hero />
        <ScrollDown />
        <AboutMe />
        <MySkills />
        <MyQualification />
      </main>
    </div>
  );
}

export default App;
