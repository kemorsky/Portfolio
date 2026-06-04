import { cn } from "@/lib/utils"
import { type Project } from "@/lib/types"
import Image from "next/image"

interface ProjectProps {
    className?: string;
    project: Project;
}

export default function ProjectDisplay(props: ProjectProps) {
    return (
        <div key={props.project.id} 
            className={
                cn("w-full max-w-[40.625rem] h-full min-h-[30rem] inline-flex flex-col snap-x snap-center lg:snap-none items-start justify-start gap-2 lg:gap-6", 
                props.className)
            }>
            <section className="h-full max-h-[35rem] bg-cover overflow-hidden">
                <Image src={props.project.image} alt="project image" width={650} height={400} 
                    className='h-full object-cover'/>
            </section>
            <p>{props.project.name}</p>
            <p>{props.project.description}</p>
            <section>
                {props.project.tools.map((tool: string) => {
                    return (
                        <div key={tool} className='inline-flex items-center justify-center rounded text-xs tracking-wide font-medium font-inter text-white/90 bg-Customs-Primary/80 min-w-[3.75rem] h-8 px-2 py-1'>
                            {tool}</div>
                        )
                })}
            </section>
        </div>
    )
}