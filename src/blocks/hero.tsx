'use client'

import { Button } from "@/components/ui/button"

import { FaLinkedinIn, FaGithub, FaArrowRight } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { TbFileCv } from "react-icons/tb";

import Wrapper from "@/components/ui/shared/wrapper"

import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <Wrapper id="home" className="bg-transparent border-none pt-10 max-w-[50rem] md:intersect:motion-opacity-in-0 md:intersect:motion-translate-y-in-[-25%]">
            <section className="w-full flex flex-col items-start gap-4 self-start">
                <section className="w-full flex md:flex-row flex-col-reverse gap-4 md:gap-0 items-start justify-between text-left">
                    <article className="">
                        <h1 className="text-3xl md:text-4xl font-primary font-semibold mb-2">Hi, I&apos;m <p className="inline text-white/80">Kamil Romanowicz</p></h1>
                        <h2 className="text-[1.125rem] md:text-xl font-primary font-medium">Frontend Developer by profession, Fullstack Developer by passion.</h2>
                    </article>
                    <article className="group bg-Customs-Card self-end md:self-start w-full max-w-[19rem] py-2 px-3 rounded-xl border border-Customs-Card-Border shadow-main">
                        <p className="inline-block group-hover:hidden transition-all font-primary">Based in Gothenburg, Sweden 
                            <Image className="inline-block group-hover:hidden transition-all ml-2" src={'/images/about/64px-Flag_of_Sweden.svg.png'} alt="sweden flag" width={36} height={24}/>
                        </p>
                        <p className="hidden group-hover:inline-block transition-all font-primary">But I&apos;m originally from Poland! 
                            <Image className="hidden group-hover:inline-block transition-all ml-2" src={'/images/about/64px-Flag_of_Poland.svg.png'} alt="poland flag" width={36} height={24}/>
                        </p>
                    </article>
                </section>
                <span className="max-w-[30rem] text-[1.125rem] md:text-xl font-primary text-white/70">
                    I like to bring designs to life and learn new ways of coding websites and applications to make the web easier to navigate.
                </span>
            </section>
            <section className="inline-flex items-center justify-start gap-4 self-start">
                
                <section className="inline-flex items-center gap-1 text-2xl">
                    <Link className='group/follow w-10 h-10 hover:scale-110 transition-all duration-200 flex items-center justify-center rounded-[0.5rem] hover:bg-Customs-socialsButtons' 
                        aria-label="Navigate to LinkedIn" 
                        href="https://www.linkedin.com/in/kamil-romanowicz-52284b2a9/"
                    >
                        <FaLinkedinIn className="text-white transition-transform group-hover/follow:rotate-12 group-active/follow:hover:-rotate-0 duration-300"/>
                    </Link>
                    <Link className='group/follow w-10 h-10  hover:scale-110 transition-all duration-200 flex items-center justify-center rounded-[0.5rem] hover:bg-Customs-socialsButtons' 
                        aria-label="Navigate to GitHub" 
                        href="https://github.com/kemorsky"
                    >
                        <FaGithub className="text-white transition-transform group-hover/follow:rotate-12 group-active/follow:hover:-rotate-0 duration-300"/>
                    </Link>
                    <a className="group/follow w-10 h-10 hover:scale-110 transition-all duration-200 flex items-center justify-center rounded-[0.5rem] hover:bg-Customs-socialsButtons" 
                        aria-label="Send E-mail" 
                        href="mailto:kamil.romanowicz95@gmail.com"
                    >
                        <AiOutlineMail className="text-white transition-transform group-hover/follow:rotate-12 group-active/follow:hover:-rotate-0 duration-300"/>
                    </a>
                    
                </section>
                <a href="https://drive.google.com/file/d/1EiNme1FjTrRmUs3eQFrjHzG9UWHl3Xe1sNhEHKYnULQ/view" aria-label="Navigate to CV" download>
                    <Button variant="hire-me" size="default">
                        Resume <TbFileCv />
                    </Button>
                </a>
                <Link className="max-w-[14rem] h-11 group/follow w-full py-2 px-3 hover:scale-110 transition-all duration-200 inline-flex items-center gap-1 rounded-[0.5rem] hover:bg-Customs-socialsButtons" 
                    aria-label="Navigate to About me page" 
                    href="/about"
                >
                    <p className="w-full leading-[1.25rem]">Read more about me</p>
                    <FaArrowRight className="w-4 h-4 mt-1 text-white transition-transform group-hover/follow:-rotate-12 group-active/follow:hover:-rotate-0 duration-300"/>
                </Link>
            </section>
        </Wrapper>
    )    
};