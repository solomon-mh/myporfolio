import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MyQualification from "./components/MyQualification";
import MySkills from "./components/MySkills";
import Projects from "./components/Projects";
import ScrollDown from "./utils/ScrollDown";

function App() {
  return (
    <div className='App sm:w-4/5 m-auto my-24 mt-12 '>
      <header>
        <Header />
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
