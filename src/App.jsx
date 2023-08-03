import {Intro, NavBar, Social, About, Experience, Projects} from './major_components';

function App() {
  return (
    <main className=" bg-slate-900 flex min-h-screen flex-col gap-10 md:flex-row text-gray-300 px-10 md:px-20 m-0">
      <section className=" basis-1/2 py-10 md:py-20 md:fixed md:w-5/12">
        <Intro/>
        <NavBar/>
        <div className="pt-8"/>
        <Social/>
      </section>

      <section className=" basis-1/2 py-10 md:py-20 md:ml-auto md:pl-10">
        <About/>
        <div className="mt-20"/>
        <Experience/>
        <div className="mt-20"/>
        <Projects/>
      </section>
    </main>
  )
}

export default App
