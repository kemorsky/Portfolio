import { AboutCard, AboutCardHeader, AboutCardTitle, AboutCardSubTitle, AboutCardDescription, AboutCardFooter} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

import Link from "next/link";
import Image from "next/image";

export default function About() {
    return (
        <div className="w-full z-45 flex items-center justify-center bg-Customs-Card rounded-xl intersect-once intersect:motion-opacity-in-0 intersect:motion-translate-y-in-[-100%]">
            <AboutCard>
                <section className="w-full inline-flex items-center justify-center gap-4">
                    <AboutCardHeader>fdfd</AboutCardHeader>
                    <section className="inline-flex flex-col items-start justify-center gap-1.5">
                        <AboutCardTitle>Kamil Romanowicz</AboutCardTitle>
                        <AboutCardSubTitle>Front End Developer, Based in Sweden</AboutCardSubTitle>
                        <AboutCardDescription>Designing and learning how code works. For clients and myself alike.</AboutCardDescription>
                    </section>
                </section>
                <AboutCardFooter>
                    <section className="inline-flex items-center gap-2 py-3 text-2xl">
                        <Link className='w-11 h-11 flex items-center justify-center rounded-[0.5rem] bg-blue-300 hover:bg-blue-200' aria-label="LinkedIn" href="https://www.linkedin.com/in/kamil-romanowicz-52284b2a9/"><FaLinkedinIn className="text-white" /></Link>
                        <Link className='w-11 h-11 flex items-center justify-center rounded-[0.5rem] bg-blue-300 hover:bg-blue-200' href="https://github.com/kemorsky?tab=repositories"><FaGithub className="text-white" /></Link>
                        <a className="w-11 h-11 flex items-center justify-center rounded-[0.5rem] bg-blue-300 hover:bg-blue-200" href="mailto:kamil.romanowicz95@gmail.com"><AiOutlineMail className="text-white"/></a>
                    </section>
                    <Button variant="hire-me" size="default"><Download/>Download CV</Button>
                </AboutCardFooter>
            </AboutCard>
        </div>
    )    
};