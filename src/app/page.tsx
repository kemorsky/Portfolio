import ObserverProvider from "./ObserverProvider";

import About from "@/blocks/about";
import Hero from "@/blocks/hero";
import Skills from "@/blocks/skills";
import Experience from "@/blocks/experience";
import Projects from "@/blocks/my-projects";
import Contact from "@/blocks/contact-me";

export default function Home() {
  return (
    <ObserverProvider>
      <div className="flex items-center justify-center h-full bg-Customs-Primary scroll-smooth overflow-hidden">
        <main className="z-45 w-full h-full flex flex-col items-center px-4 lg:px-0 gap-8 justify-start relative mt-[7rem]">
          <div className="z-40 max-w-[55rem] h-full w-full flex flex-col items-start justify-center gap-8 sm:gap-12 md:gap-16 relative">
            <div className="w-[22rem] h-[22rem] left-[-17.5rem] top-[4.438rem] absolute bg-Customs-backgroundEclipse/80 rounded-full blur-[25rem]" />
            <div className="w-[22rem] h-[22rem] left-[32.375rem] top-[64.5rem] absolute bg-Customs-backgroundEclipse/80 rounded-full blur-[25rem]" />
            <div className="w-[22rem] h-[22rem] left-[38.375rem] top-[159.5rem] absolute bg-Customs-backgroundEclipse/80 rounded-full blur-[25rem]" />
            <Hero/>
            <About/>
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
