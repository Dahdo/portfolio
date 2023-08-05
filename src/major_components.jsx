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
      <ul className=" mt-20 space-y-5 w-fit">
        <li className=" hover:ml-2"><a className="hover:text-white" href="#about">ABOUT</a></li>
        <li className=" hover:ml-2"><a className="hover:text-white" href="#about">EXPERIENCE</a></li>
        <li className=" hover:ml-2"><a className="hover:text-white" href="#about">PROJECTS</a></li>
      </ul>
    </nav>
  );
}

function Social() {
  return (
    <div className="flex justify-start gap-5 text-3xl text-gray-300">
      <div className="hover:text-white"><a href={All.LINK_GITHUB} target="_blank"><AiFillGithub/></a></div>
      <div className="hover:text-white"><a href={All.LINK_LINKEDIN} target="_blank"><AiFillLinkedin/></a></div>
      <div className="hover:text-white"><a href={All.LINK_X} target="_blank"><AiFillTwitterCircle/></a></div>
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
        {All.EXPERIENCE.map((exp) => <ExperienceCard {...exp} /> )}
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
        {All.PROJECTS.map((proj) => <ProjectCard {...proj} /> )}
      </div>
    </>
  );
}

export {Intro, Navbar, Social, About, Experience, Projects};