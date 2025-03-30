'use client'

import { AboutCard, AboutCardHeader, AboutCardTitle, AboutCardSubTitle, AboutCardDescription, AboutCardFooter} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import Link from "next/link";
import Image from "next/image";

export default function About() {
    return (
        <div id='home' className="w-full z-50 flex items-center justify-center bg-Customs-Card rounded-xl intersect-once md:intersect:motion-opacity-in-0 md:intersect:motion-translate-y-in-[-25%] shadow-[0px_10px_20px_0px_#2a4365]">
            <AboutCard>
                <AboutCardHeader>
                    <Image className="object-fit w-full h-full" src="/images/about/profile-picture.jpg" alt="profile picture" width={144} height={144} />
                </AboutCardHeader>
                <section className="w-full inline-flex flex-col items-start justify-center gap-4">
                    <section className="inline-flex flex-col items-start justify-center gap-1.5">
                        <AboutCardTitle>Kamil Romanowicz</AboutCardTitle>
                        <AboutCardSubTitle>Front End Developer</AboutCardSubTitle>
                        <span className="group leading-[1.25rem]">
                            <AboutCardSubTitle className="inline-block group-hover:hidden transition-transform">Based in Gothenburg, Sweden <Image className="inline-block group-hover:hidden transition-transform" src={'/images/about/64px-Flag_of_Sweden.svg.png'} alt="sweden flag" width={32} height={24}/></AboutCardSubTitle>
                            <AboutCardSubTitle className="hidden group-hover:inline-block transition-transform">But originally from Poland! <Image className="hidden group-hover:inline-block transition-transform" src={'/images/about/64px-Flag_of_Poland.svg.png'} alt="poland flag" width={32} height={24}/></AboutCardSubTitle>
                        </span>
                        <AboutCardDescription>I&apos;m a Front End student currently seeking employment. I like to bring designs to life and learn new ways of coding websites and applications.</AboutCardDescription>
                    </section>
                    <AboutCardFooter>
                        <section className="inline-flex items-center gap-1 text-2xl">
                            <Link className='w-10 h-10 hover:scale-105 transition-all duration-100 flex items-center justify-center rounded-[0.5rem] hover:bg-gray-500' aria-label="LinkedIn" href="https://www.linkedin.com/in/kamil-romanowicz-52284b2a9/"><FaLinkedinIn className="text-white" /></Link>
                            <Link className='w-10 h-10  hover:scale-105 transition-all duration-100 flex items-center justify-center rounded-[0.5rem] hover:bg-gray-500' href="https://github.com/kemorsky?tab=repositories"><FaGithub className="text-white" /></Link>
                            <a className="w-10 h-10 hover:scale-105 transition-all duration-100 flex items-center justify-center rounded-[0.5rem] hover:bg-gray-500" href="mailto:kamil.romanowicz95@gmail.com"><AiOutlineMail className="text-white"/></a>
                        </section>
                        <Button variant="hire-me" size="default"><Download/>Download CV</Button>
                    </AboutCardFooter>
                </section>
            </AboutCard>
        </div>
    )    
};