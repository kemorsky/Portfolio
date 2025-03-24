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
      <div className="mx-auto flex items-center justify-center w-screen bg-Customs-Primary z-50 scroll-smooth relative">
        <Navbar/>
        <main className="w-full h-full bg-Customs-Primary flex flex-col lg:flex-row items-center lg:items-start px-4 lg:px-0 gap-8 justify-center relative top-[7rem]">
          <div className="max-w-[55rem] bg-Customs-Primary w-full flex flex-col items-start justify-center gap-8 sm:gap-12 md:gap-16 relative">
            <div className="w-[31.875rem] h-[31.875rem] left-[-17.5rem] top-[4.438rem] absolute bg-white/60 rounded-full blur-[25rem]" />
            <div className="w-[31.875rem] h-[31.875rem] left-[32.375rem] top-[64.5rem] absolute bg-white/60 rounded-full blur-[25rem]" />
            <div className="w-[31.875rem] h-[31.875rem] left-[-16.375rem] top-[155.5rem] absolute bg-white/60 rounded-full blur-[25rem]" />
            <About/>
            <Hero/>
            <Experience/>
            <Skills/>
            <Projects/>
            <Contact/>
          </div>
        </main> 
      </div>
    </ObserverProvider>
  );
}
