'use client'

import { HeroCard, HeroCardTitle, HeroCardSubTitle, HeroCardDescription, HeroCardFooter} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <div id="home" className="w-full z-50 flex items-center justify-center bg-Customs-Card border border-Customs-Card-Border rounded-xl intersect-once md:intersect:motion-opacity-in-0 md:intersect:motion-translate-y-in-[-25%] shadow-[0px_10px_20px_0px_#2a4365]">
            <HeroCard>
                {/* <HeroCardHeader>
                    <Image className="object-fit w-full h-full" src="/images/about/profile-picture.jpg" alt="profile picture" width={144} height={144} />
                </HeroCardHeader> */}
                <section className="w-full inline-flex flex-col items-start justify-center gap-4">
                    <section className="inline-flex flex-col items-start justify-center gap-1.5">
                        <HeroCardTitle>Kamil Romanowicz</HeroCardTitle>
                        <HeroCardSubTitle>Front End Developer</HeroCardSubTitle>
                        <span className="group leading-[1.25rem]">
                            <HeroCardSubTitle className="inline-block group-hover:hidden transition-transform">Based in Gothenburg, Sweden <Image className="inline-block group-hover:hidden transition-transform" src={'/images/about/64px-Flag_of_Sweden.svg.png'} alt="sweden flag" width={32} height={24}/></HeroCardSubTitle>
                            <HeroCardSubTitle className="hidden group-hover:inline-block transition-transform">But originally from Poland! <Image className="hidden group-hover:inline-block transition-transform" src={'/images/about/64px-Flag_of_Poland.svg.png'} alt="poland flag" width={32} height={24}/></HeroCardSubTitle>
                        </span>
                        <HeroCardDescription>I&apos;m a Front End Developer currently looking for work. I like to bring designs to life and learn new ways of coding websites and applications.</HeroCardDescription>
                    </section>
                    <HeroCardFooter>
                        <section className="inline-flex items-center gap-1 text-2xl">
                            <Link className='group/follow w-10 h-10 hover:scale-110 transition-all duration-200 flex items-center justify-center rounded-[0.5rem] hover:bg-Customs-socialsButtons' aria-label="Navigate to LinkedIn" href="https://www.linkedin.com/in/kamil-romanowicz-52284b2a9/"><FaLinkedinIn className="text-white transition-transform group-hover/follow:rotate-12 group-active/follow:hover:-rotate-0 duration-300"/></Link>
                            <Link className='group/follow w-10 h-10  hover:scale-110 transition-all duration-200 flex items-center justify-center rounded-[0.5rem] hover:bg-Customs-socialsButtons' aria-label="Navigate to GitHub" href="https://github.com/kemorsky?tab=repositories"><FaGithub className="text-white transition-transform group-hover/follow:rotate-12 group-active/follow:hover:-rotate-0 duration-300"/></Link>
                            <a className="group/follow w-10 h-10 hover:scale-110 transition-all duration-200 flex items-center justify-center rounded-[0.5rem] hover:bg-Customs-socialsButtons" aria-label="Send E-mail" href="mailto:kamil.romanowicz95@gmail.com"><AiOutlineMail className="text-white transition-transform group-hover/follow:rotate-12 group-active/follow:hover:-rotate-0 duration-300"/></a>
                        </section>
                        <a href="/files/CV - Kamil Romanowicz.pdf" aria-label="Download CV PDF" download>
                            <Button variant="hire-me" size="default"><Download/>Download CV</Button>
                        </a>
                    </HeroCardFooter>
                </section>
            </HeroCard>
        </div>
    )    
};