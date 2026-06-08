import { cn } from "@/lib/utils"
import { type Project } from "@/lib/types"
import Image from "next/image"
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { Button } from "../button";

interface ProjectCardProps {
    className?: string;
    project: Project;
    onClick?: () => void;
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <section 
            key={props.project.id} 
            aria-label={`Project: ${props.project.name}`} 
            onClick={props.onClick}
            tabIndex={0}
            className={
                cn("w-full max-w-[27.125rem] h-full max-h-[35rem] aspect-[auto] flex-shrink-0 inline-flex flex-col items-start justify-start gap-4 p-3 md:p-4 rounded-xl border border-Customs-Card-Border bg-Customs-Card lg:shadow-[0px_0px_20px_0px_#2a4365] lg:hover:translate-y-[-0.5rem] transition-all duration-200 intersect-once lg:intersect:motion-scale-in-75 lg:intersect:motion-opacity-in-0",
                props.className
            )}>
            <section className="h-[14rem] rounded-xl shadow-md overflow-hidden">
                <Image src={props.project.image} alt="project image" width={350} height={224} className='h-full object-cover rounded-xl'/>
            </section>
            <section className="h-[10rem]  mb-2 inline-flex flex-col justify-between gap-4">
                <article className="text-white font-primary">
                    <h2 className="font-semibold mb-2 text-[1.25rem]">
                        {props.project.name}
                    </h2>
                    <span className="h-full min-h-[10rem] text-white/75">{props.project.description}</span>
                </article>
                <section className="">
                    {props.project.keyTools?.map((tool: string) => {
                        return (
                            <div key={tool} className='inline-flex items-center justify-center rounded text-xs tracking-wide font-medium font-primary text-white/90 bg-Customs-Primary/80 min-w-[3.75rem] h-8 px-2 py-1 mr-2'>
                                {tool}</div>
                            )
                    })}
                </section>
            </section>
            <section className="w-full flex justify-center gap-3 border-t border-Customs-Card-Border py-4 self-center">
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
        </section>
        // <section 
        //     key={props.project.id} 
        //     aria-label={`Project: ${props.project.name}`} 
        //     onClick={props.onClick}
        //     tabIndex={0}
        //     className={
        //         cn("w-full max-w-[25rem] aspect-[auto] flex-shrink-0 inline-flex flex-col items-start justify-start gap-4 rounded-xl border border-Customs-Card-Border bg-Customs-Card lg:shadow-[0px_0px_20px_0px_#2a4365] lg:hover:translate-y-[-0.5rem] transition-all duration-200 intersect-once lg:intersect:motion-scale-in-75 lg:intersect:motion-opacity-in-0",
        //         props.className
        //     )}>
        //     <Image src={props.project.image} alt="project image" width={400} height={120} className='h-full object-cover rounded-xl'/>
        //     <section className="px-4 mb-4 flex flex-col gap-4">
        //         <article>
        //             <h2 className="text-white font-dm-sans font-semibold">
        //                 {props.project.name}
        //             </h2>
        //             <span>{props.project.description}</span>
        //         </article>
        //         <section className="">
        //             {props.project.keyTools?.map((tool: string) => {
        //                 return (
        //                     <div key={tool} className='inline-flex items-center justify-center rounded text-xs tracking-wide font-medium font-inter text-white/90 bg-Customs-Primary/80 min-w-[3.75rem] h-8 px-2 py-1 mr-2'>
        //                         {tool}</div>
        //                     )
        //             })}
        //         </section>
        //     </section>
        // </section>
    )
};