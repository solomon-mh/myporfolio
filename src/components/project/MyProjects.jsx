import { myProjects } from "../../data/myProjectsInfo";
import Title from "../../utils/Title";
import ProjectCard from "./ProjectCard";
function MyProjects() {
  return (
    <div id='projects' className='py-2'>
      <div>
        <Title title='Projects' subTitle='most recent projects' />
      </div>
      <section className='grid grid-cols-1 gap-24'>
        {myProjects.map((proj, index) => {
          return <ProjectCard key={proj.id} index={index} project={proj} />;
        })}
      </section>
    </div>
  );
}

export default MyProjects;
