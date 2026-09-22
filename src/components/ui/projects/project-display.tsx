import { cn } from "@/lib/utils"
import { type Project } from "@/lib/types"
import Image from "next/image"
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Button } from "../button";

interface ProjectDisplayProps {
    className?: string;
    project: Project;
    onClick?: () => void;
    activeProject: Project
}

export default function ProjectDisplay(props: ProjectDisplayProps) {
    return (
        <section 
            key={props.activeProject.id} 
            aria-label={`Project: ${props.activeProject.name}`} 
            onClick={props.onClick}
            tabIndex={0}
            className={
                cn("w-full h-[35rem] items-stretch inline-flex lg:flex-row flex-col justify-start gap-4 p-3 md:p-4 rounded-xl border border-Customs-Card-Border bg-Customs-Card",
                props.className
            )}>
            <section className="w-full max-w-[60%] flex rounded-xl shadow-md overflow-hidden">
                <Image src={props.activeProject.image} alt="project image" width={1000} height={600} className='object-contain rounded-xl'/>
            </section>
            <section className="h-full flex flex-1 flex-col gap-8 justify-between">
                <article className="text-white font-primary">
                    <h2 className="font-semibold mb-2 text-[1.5rem]">
                        {props.activeProject.name}
                    </h2>
                    <span className=" text-white/75">{props.activeProject.description}</span>
                </article>
                <section className="inline-flex flex-col gap-4">

                    <section>
                        {props.activeProject.keyTools?.map((tool: string) => {
                            return (
                                <div key={tool} className='inline-flex items-center justify-center rounded text-xs tracking-wide font-medium font-primary text-white/90 bg-Customs-Primary/80 min-w-[3.75rem] h-8 px-2 py-1 mr-2'>
                                    {tool}</div>
                                )
                        })}
                    </section>
                    <section className="w-full flex justify-center gap-3 border-t border-Customs-Card-Border py-4 self-center">
                        <Link href={props.activeProject.codeLink ?? ""}>
                            <Button variant="gitHub">
                                <FaGithub className="text-white transition-transform duration-300 mr-1"/>
                                View Code
                            </Button>
                        </Link>
                        {props.activeProject.demoLink && (
                            <Link href={props.activeProject.demoLink ?? ""}>
                                <Button variant="liveDemo">Live Demo</Button>
                            </Link>
                        )}
                    </section>
                </section>
            </section>
            
        </section>
    )
};