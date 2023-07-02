import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
// import quiz from '../Images';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Quiz App"
          des="  An Application to create quizzes for students and evaluate their scores."
          src={projectOne}
        />
        <ProjectsCard
          title="Todo List"
          des=" Design an application to organize your task and increase your productivity"
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects