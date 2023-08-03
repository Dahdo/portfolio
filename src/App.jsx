import {AiFillTwitterCircle, AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import { ExperienceCard, ProjectCard, ResumePreview } from './components';
import {experience1, project1}from './constants';

function App() {
  return (
    <main className=" bg-slate-900 flex min-h-screen flex-col gap-10 md:flex-row text-gray-300 px-10 md:px-20 m-0">
      <section className=" basis-1/2 py-10 md:py-20 md:fixed md:w-5/12">
        <h1 className=" pb-2 text-gray-100 font-bold text-5xl">Daniel Ndashimye</h1>
        <h3 className=" text-gray-200 font-semibold text-md">A Computer Science Student</h3>
        <p className="max-w-4/5 pt-5 pr-11">Passionate about everything tech, System, Mobile, Web Desktop and much more!</p>

        <ul className="mt-20">
          <li>ABOUT</li>
          <li>STACK</li>
          <li>PROJECTS</li>
          <li>EXPERIENCE</li>
        </ul>
        <div className=" flex justify-start pt-8 gap-5 text-3xl text-gray-300">
          <AiFillGithub/>
          <AiFillLinkedin/>
          <AiFillTwitterCircle/>
        </div>
      </section>
      <section className=" basis-1/2 py-10 md:py-20 md:ml-auto md:pl-10">
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <br></br>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
        <div className="flex flex-col gap-10 mt-20">
          <ExperienceCard {...experience1} />
          <ExperienceCard {...experience1} />
          <ExperienceCard {...experience1} />
        </div>
        <div className=" mb-28 mt-5">
          <ResumePreview />
        </div>
        <div className="flex flex-col gap-10 mt-20">
          <ProjectCard {...project1} />
          <ProjectCard {...project1} />
          <ProjectCard {...project1} />
          <ProjectCard {...project1} />
        </div>
      </section>
    </main>
  )
}

export default App
