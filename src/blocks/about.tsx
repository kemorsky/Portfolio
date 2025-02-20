import { AboutCard, AboutCardHeader, AboutCardTitle, AboutCardSubTitle, AboutCardDescription, AboutCardFooter} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'

import Link from "next/link";
import Image from "next/image";

export default function About() {
    return (
        <div className="max-w-[30rem] w-full">
            <AboutCard>
                <AboutCardHeader>fdfd</AboutCardHeader>
                <AboutCardTitle>Kamil Romanowicz</AboutCardTitle>
                <AboutCardSubTitle>Front End Developer</AboutCardSubTitle>
                <AboutCardDescription>Designing and learning how code works. For clients and myself alike.</AboutCardDescription>
                <AboutCardFooter>
                    <Button variant="hire-me"><Download/>Download CV</Button>
                    <div className="inline-flex items-center gap-3 px-3">
                        <Link className='w-6 h-6 flex justify-center' href="https://www.linkedin.com/in/kamil-romanowicz-52284b2a9/"><Image className="hover:scale-105 transition-all" src={'/icons/linkedin.png'} alt="freepik linkedin" width={24} height={24}/></Link>
                        <Link className='w-6 h-6 flex justify-center' href="https://github.com/kemorsky?tab=repositories"><Image className="hover:scale-105 transition-all" src={'/icons/github.png'} alt="freepik github" width={24} height={24}/></Link>
                    </div>
                </AboutCardFooter>
            </AboutCard>
        </div>
    )    
};