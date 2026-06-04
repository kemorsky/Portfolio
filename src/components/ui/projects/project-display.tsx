import { cn } from "@/lib/utils"
import { type Project } from "@/lib/types"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

interface ProjectProps {
    className?: string;
    project: Project;
}

export default function ProjectDisplay(props: ProjectProps) {
    return (
        <div key={props.project.id} 
            className={
                cn("w-full max-w-[50rem] h-full min-h-[30rem] inline-flex flex-col snap-x snap-center lg:snap-none items-start justify-start gap-2 lg:gap-6", 
                props.className)
            }>
            <section className="h-full max-h-[40rem] overflow-hidden rounded-xl">
                <Image src={props.project.image} alt="project image" width={800} height={500} 
                    className='h-full object-cover'/>
            </section>
            <article className="">
                <h3 className="text-white font-dm-sans font-semibold text-2xl mb-2">{props.project.name}</h3>
                <p className="text-white">{props.project.description}</p>
            </article>
            <section>
                {props.project.tools.map((tool: string) => {
                    return (
                        <div key={tool} className='inline-flex items-center justify-center rounded text-xs tracking-wide font-medium font-inter text-white/90 bg-Customs-Primary/80 min-w-[3.75rem] h-8 px-2 py-1 mr-2'>
                            {tool}</div>
                        )
                })}
            </section>
            <section className="flex gap-3 border-t border-Customs-Card-Border py-4">
                <Link href={props.project.codeLink ?? ""}>
                    <Button variant="gitHub">
                        <FaGithub className="text-white transition-transform duration-300 mr-1"/>
                        View Code
                    </Button>
                </Link>
                <Link href={props.project.demoLink ?? ""}>
                    <Button variant="liveDemo">Live Demo</Button>
                </Link>
            </section>
        </div>
    )
}