import { AboutCard, AboutCardHeader, AboutCardTitle, AboutCardSubTitle, AboutCardDescription, AboutCardFooter} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Mail } from 'lucide-react'

import { LinkedIn } from '../elements/Linkedin'

import Link from "next/link";
import Image from "next/image";

export default function About() {
    return (
        <div className="max-w-[30rem] w-full z-45">
            <AboutCard>
                <div className="inline-flex items-center justify-center gap-4">
                    <AboutCardHeader>fdfd</AboutCardHeader>
                    <div className="inline-flex flex-col items-start justify-center gap-3">
                        <AboutCardTitle>Kamil Romanowicz</AboutCardTitle>
                        <AboutCardSubTitle>Front End Developer</AboutCardSubTitle>
                        <AboutCardDescription>Designing and learning how code works. For clients and myself alike.</AboutCardDescription>
                    </div>
                </div>
                
                <AboutCardFooter>
                    <Button variant="hire-me" size="default"><Download/>Download CV</Button>
                    <div className="inline-flex items-center gap-1 px-3 py-3">
                        <Link className='w-11 h-11 flex items-center justify-center' href="https://www.linkedin.com/in/kamil-romanowicz-52284b2a9/"><LinkedIn color='hsl(222, 76%, 70%)' /></Link>
                        <Link className='w-8 h-8 flex items-center justify-center hover:scale-105 transition-all bg-Customs-aboutButtons rounded' href="https://github.com/kemorsky?tab=repositories"><Image src={'/icons/github.png'} alt="freepik github" width={28} height={28}/></Link>
                        <a className="p-1.5" href="mailto:kamil.romanowicz95@gmail.com"><Mail className="w-8 h-8 hover:scale-105 transition-all" stroke="hsl(222, 76%, 70%)"/></a>
                    </div>
                </AboutCardFooter>
            </AboutCard>
        </div>
    )    
};