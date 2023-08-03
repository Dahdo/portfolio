import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import { ExperienceCard, ProjectCard, ResumePreview } from './minor_components';
import {experience1, project1}from './constants';

function Intro() {
  return(
    <div>
      <h1 className=" pb-2 text-gray-100 font-bold text-5xl">Daniel Ndashimye</h1>
      <h3 className=" text-gray-200 font-semibold text-md">A Computer Science Student</h3>
      <p className="max-w-4/5 pt-5 pr-11">Passionate about everything tech, System, Mobile, Web Desktop and much more!</p>
    </div>
  )
};

function NavBar() {
  return (
    <ul className="mt-20 space-y-5">
          <li>ABOUT</li>
          <li>PROJECTS</li>
          <li>EXPERIENCE</li>
    </ul>
  )
};

function Social() {
  return (
    <div className=" flex justify-start gap-5 text-3xl text-gray-300">
          <AiFillGithub/>
          <AiFillLinkedin/>
          <AiFillTwitterCircle/>
    </div>
  )
}

function About() {
  return (
    <div>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <br></br>
      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
    </div>
  );
};

function Experience() {
  return (
    <div className="flex flex-col gap-10">
              <ExperienceCard {...experience1} />
              <ExperienceCard {...experience1} />
              <ExperienceCard {...experience1} />
              <ResumePreview />
    </div>
  )
};

function Projects() {
  return(
    <div className="flex flex-col gap-10">
      <ProjectCard {...project1} />
      <ProjectCard {...project1} />
      <ProjectCard {...project1} />
      <ProjectCard {...project1} />
  </div>
  );
}

export {Intro, NavBar, Social, About, Experience, Projects};