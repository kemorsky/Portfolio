"use client"

import Link from "next/link";

import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-Customs-Primary w-full max-w-[75rem] mx-auto mb-8 px-4 xl:px-0">
            <section className="bg-Customs-Card w-full flex flex-col items-center gap-4 justify-center p-4 rounded-xl shadow-main ">
                <section className="inline-flex items-center gap-1 text-2xl justify-self-end">
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
                    
                </section>
                <p className="font-primary text-white/80 flex items-center self-center gap-1">
                    <span className="text-xs">@ </span>
                    <span className="">2026 Kamil Romanowicz</span>
                </p>
            </section>
        </footer>
    )
}