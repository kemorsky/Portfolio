import { cn } from "@/lib/utils"
import { type Project } from "@/lib/types"
import Image from "next/image"

interface ProjectCardProps {
    className?: string;
    project: Project;
    onClick: () => void;
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <section 
            key={props.project.id} 
            aria-label={`Project: ${props.project.name}`} 
            onClick={props.onClick}
            tabIndex={0}
            className={
                cn("w-full max-w-[27.125rem] h-[30rem] sm:h-[28rem] aspect-[auto] flex-shrink-0 inline-flex flex-col items-start justify-start gap-4 p-3 md:p-4 rounded-xl border border-Customs-Card-Border bg-Customs-Card lg:shadow-[0px_0px_20px_0px_#2a4365] lg:hover:translate-y-[-0.5rem] transition-all duration-200 intersect-once lg:intersect:motion-scale-in-75 lg:intersect:motion-opacity-in-0",
                props.className
            )}>
            <Image src={props.project.image} alt="project image" width={800} height={550} className='h-full object-cover'/>
            <h2 className="text-white font-dm-sans font-semibold">
                {props.project.name}
            </h2>
            <span>{props.project.description}</span>
            <section>
                {props.project.keyTools?.map((tool: string) => {
                    return (
                        <div key={tool} className='inline-flex items-center justify-center rounded text-xs tracking-wide font-medium font-inter text-white/90 bg-Customs-Primary/80 min-w-[3.75rem] h-8 px-2 py-1 mr-2'>
                            {tool}</div>
                        )
                })}
            </section>
        </section>
    )
};