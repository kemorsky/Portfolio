import ObserverProvider from "./ObserverProvider";

import Navbar from "@/blocks/navbar";
import About from "@/blocks/about";
import Hero from "@/blocks/hero";
import Skills from "@/blocks/skills";
import Experience from "@/blocks/experience";
import Projects from "@/blocks/my-projects";
import Contact from "@/blocks/contact-me";

export default function Home() {
  return (
    <ObserverProvider>
      <div className="mx-auto flex items-center justify-center max-w-[90rem] bg-Customs-Primary z-40">
        <Navbar/>
        <main className="w-full flex flex-col lg:flex-row items-center lg:items-start px-4 md:px-0 gap-8 justify-center relative top-[7rem] bg-Customs-Primary">
          <div className="max-w-[35rem] lg:sticky top-[7rem] flex items-center">
            {/* <div className="w-[31.875rem] h-[31.875rem] left-[-17.5rem] top-[-2.438rem] absolute bg-neutral-600/20 rounded-full blur-[25rem] z-10"/> */}
            <About/>
          </div>
          <div className="max-w-[55rem] w-full flex flex-col items-start justify-center gap-[3.75rem] relative">
            <Hero/>
            <Skills/>
            <Experience/>
            <Projects/>
            <Contact/>
          </div>
        </main> 
      </div>
    </ObserverProvider>
  );
}
