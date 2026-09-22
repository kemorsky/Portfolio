import { cn } from "@/lib/utils"
import ObserverProvider from "../../ObserverProvider";
import { type Project } from "@/lib/types";
import projectsData from "../../../app/projects.json"
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaGithub, FaArrowLeft } from "react-icons/fa";
import { TbFile } from "react-icons/tb";

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
    const projectId = (await params).projectId;

    const project = projectsData.projects.find(
        (project : Project) => project.id === Number(projectId)
    );

    if (!project) {
        console.log("Project not found");
    }

    return (
        <ObserverProvider>
            <div className="flex items-start justify-center min-h-screen bg-Customs-Primary scroll-smooth">
                <main className="z-45 w-full flex flex-col items-center px-4 lg:px-0 gap-8 justify-start relative mt-[7rem]">
                    <div className="z-40 max-w-2xl w-full flex flex-col items-start justify-center gap-8 sm:gap-12 md:gap-16 relative">
                        {/* <div className="w-[22rem] h-[22rem] left-[-17.5rem] top-[4.438rem] absolute bg-Customs-backgroundEclipse/80 rounded-full blur-[25rem]" />
                        <div className="w-[22rem] h-[22rem] left-[32.375rem] top-[44.5rem] absolute bg-Customs-backgroundEclipse/80 rounded-full blur-[25rem]" /> */}
                        <section 
                            key={project?.id} 
                            aria-label={`Project: ${project?.name}`} 
                            tabIndex={0}
                            className={
                                cn("w-full h-full flex-shrink-0 inline-flex flex-col items-start justify-start gap-4 p-3 mb-6 md:p-4 intersect-once lg:intersect:motion-scale-in-75 lg:intersect:motion-opacity-in-0",
                                
                            )}>
                            <Link href={`/#projects`}>
                                <Button variant="back-to-projects" className="px-0">
                                    <FaArrowLeft />
                                    Back to Projects
                                </Button>
                            </Link>
                            <section className="h-full mb-4 max-h-auto rounded-xl shadow-md overflow-hidden">
                                <Image src={project?.image ?? ""} alt="project image" width={672} height={224} className='h-full object-fit rounded-xl'/>
                            </section>
                            <section className="w-full mb-2 inline-flex flex-col justify-between gap-4 border-b border-Customs-Card-Border">
                                <article className="text-white font-primary flex flex-col md:flex-row md:items-end justify-start gap-4">
                                    <h2 className="font-bold text-[1.5rem] ">
                                        {project?.name}
                                    </h2>
                                    <section className="flex gap-3">
                                        <Link target="_blank" href={project?.codeLink ?? ""}>
                                            <Button variant="gitHub">
                                                <FaGithub className="text-white transition-transform duration-300 mr-1"/>
                                                View Code
                                            </Button>
                                        </Link>
                                        {project?.demoLink && (
                                            <Link target="_blank" href={project?.demoLink ?? ""}>
                                                <Button variant="liveDemo">
                                                    <TbFile className="text-[#111111] transition-transform duration-300"/>
                                                    Live Demo
                                                </Button>
                                            </Link>
                                        )}
                                    </section>
                                </article>
                                
                                <section className="mb-6">
                                    {project?.keyTools?.map((tool: string) => {
                                        return (
                                            <div key={tool} className='inline-flex items-center justify-center rounded text-xs tracking-wide font-medium font-primary text-white/90 bg-Customs-Primary/80 min-w-[3.75rem] h-8 px-2 py-1 mr-2'>
                                                {tool}</div>
                                            )
                                    })}
                                </section>
                            </section>
                            <span className="font-secondary text-[1rem] font-medium text-white whitespace-break-spaces">{project?.description}</span>
                            <span className="h-full min-h-[10rem] font-secondary text-[1rem] font-medium text-white whitespace-break-spaces">{project?.synopsis}</span>
                        </section>
                    </div>
                </main>
            </div>
        </ObserverProvider>
    )
}