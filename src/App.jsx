import {Intro, Navbar, Social, About, Experience, Projects} from './major_components';

function App() {
  return (
    <main className=" bg-slate-900 flex min-h-screen flex-col gap-10 md:flex-row font-light text-gray-300 px-2 md:pr-5 md:pl-10 m-0">
      <section className=" basis-1/2 py-10 md:py-20 md:fixed md:w-5/12">
        <Intro/>
        <div className=" hidden md:block"><Navbar/></div>
        <div className="pt-8"/>
        <Social/>
      </section>

      <section className=" basis-1/2 pb-10 md:pb-20 md:ml-auto md:pl-10">
        <div id="about" className=" pt-10 md:pt-20"><About/></div>
        <div id="experience" className="pt-20"><Experience/></div>
        <div id="projects" className="pt-20"><Projects/></div>
      </section>
    </main>
  )
}

export default App
