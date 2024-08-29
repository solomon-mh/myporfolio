import { myProjects } from "../../data/myProjectsInfo";
import Title from "../../utils/Title";
import Section from "../Section";
import { ShootingStarsAndStarsBackground } from "../ShootingStarsAndStarsBackground";
import ProjectCard from "./ProjectCard";
function MyProjects() {
  return (
    <Section
      id="projects"
      className="py-2"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
    >
      <ShootingStarsAndStarsBackground />
      <div>
        <Title title="Projects" subTitle="most recent projects" />
      </div>
      <section className="grid grid-cols-1 gap-24">
        {myProjects.map((proj, index) => {
          return <ProjectCard key={proj.id} index={index} project={proj} />;
        })}
      </section>
    </Section>
  );
}

export default MyProjects;
