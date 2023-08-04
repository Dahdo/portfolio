import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import { ExperienceCard, ProjectCard, ResumePreview, MobileSectionTitle} from './minor_components';
import * as All from './constants';

function Intro() {
  return(
    <div>
      <h1 className=" pb-2 text-gray-100 font-bold text-5xl">{All.NAME}</h1>
      <h3 className=" text-gray-200 font-semibold text-md">{All.TAGLINE}</h3>
      <p className="max-w-4/5 pt-5 pr-11">{All.INTERESTS}</p>
    </div>
  )
};

function Navbar() {
  return (
    <nav>
      <ul className="mt-20 space-y-5">
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#experience">EXPERIENCE</a></li>
        <li><a href="#projects">PROJECTS</a></li>
      </ul>
    </nav>
  );
}

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
    <>
      <MobileSectionTitle value="About"/>
      <div>
        <p>{All.ABOUT}</p>
      </div>
    </>
  );
};

function Experience() {
  return (
    <>
      <MobileSectionTitle value="Experience"/>
      <div className="flex flex-col gap-10">
                <ExperienceCard {...All.EXPERIENCE_1} />
                <ExperienceCard {...All.EXPERIENCE_1} />
                <ExperienceCard {...All.EXPERIENCE_1} />
                <ResumePreview />
      </div>
    </>
  )
};

function Projects() {
  return(
    <>
      <MobileSectionTitle value="Projects"/>
      <div className="flex flex-col gap-10">
        <ProjectCard {...All.PROJECT_1} />
        <ProjectCard {...All.PROJECT_1} />
        <ProjectCard {...All.PROJECT_1} />
        <ProjectCard {...All.PROJECT_1} />
      </div>
    </>
  );
}

export {Intro, Navbar, Social, About, Experience, Projects};