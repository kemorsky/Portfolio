import ObserverProvider from "./ObserverProvider";

import Hero from "@/blocks/hero";
import Skills from "@/blocks/skills";
import Experience from "@/blocks/experience";
import Projects from "@/blocks/my-projects";
import Contact from "@/blocks/contact-me";

export default function Home() {
  return (
    <ObserverProvider>
      <div className="flex items-center justify-center h-full scroll-smooth overflow-hidden">
        <main className="z-45 w-full h-full flex flex-col items-center px-4 lg:px-0 gap-8 justify-start relative mt-[7rem]">
          <div className="z-40 max-w-[90rem] h-full w-full flex flex-col items-start justify-center gap-12 sm:gap-20 md:gap-32 relative">
            <div className="w-[22rem] h-[22rem] left-[3.5rem] top-[4.438rem] absolute bg-Customs-backgroundEclipse/80 rounded-full blur-[25rem]" />
            <div className="w-[22rem] h-[22rem] left-[50.375rem] top-[70.5rem] absolute bg-Customs-backgroundEclipse/80 rounded-full blur-[25rem]" />
            <div className="w-[22rem] h-[22rem] left-[45.375rem] top-[190.5rem] absolute bg-Customs-backgroundEclipse/80 rounded-full blur-[25rem]" />
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
