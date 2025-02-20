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
      <div className="mx-auto flex items-center justify-center max-w-[90rem] bg-Customs-Primary">
        <Navbar/>
        <main className="w-full flex flex-col md:flex-row items-center md:items-start px-4 md:px-0 gap-8 justify-center relative top-[7rem]">
          <div className="max-w-[45rem] md:sticky top-[7rem] flex items-center">
            <About/>
          </div>
          <div className="max-w-[45rem] w-full flex flex-col items-start justify-center gap-[3.75rem] relative">
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
