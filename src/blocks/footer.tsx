"use client"

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent } from "react";
import { NavBarEffect } from "@/components/ui/navbar-effect";

import { FaLinkedinIn, FaGithub, FaArrowRight } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
    const pathname = usePathname();
    const router = useRouter();

    const navbarHeight = 120;

    const handleNavClick = (e: MouseEvent, sectionId: string) => {
        e.preventDefault();

        if (pathname === "/") {
            const element = document.getElementById(sectionId);
            if (element) {
                const yOffset = -navbarHeight;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({top: y, behavior: "smooth" });

                history.replaceState(null, "", `#${sectionId}`);
            }
        } else {
                router.push(`/#${sectionId}`);
            }
    };

    return (
        <footer className="w-full max-w-[75rem] mx-auto mb-8">
            <section className="w-full flex flex-col items-center gap-4 justify-center p-4 rounded-xl bg-Customs-Card">
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