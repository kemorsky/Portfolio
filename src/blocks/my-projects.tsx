import { ProjectsCard, ProjectsCardContent, ProjectsCardHeader, ProjectsCardTitle, 
         ProjectsCardSubTitle, ProjectsCardDescription, ProjectsCardSkills } from "@/components/ui/card"
import projectsData from "../../src/app/projects.json"

import Image from "next/image"
import Link from "next/link"

type Project = {
    id: number,
    image: string,
    name: string,
    description: string,
    tools: string[],
    link?: string
}

export default function Projects() {
    return (
        <div className="z-50 w-full inline-flex items-start justify-center flex-col gap-6">
            <h2 className="text-3xl font-bold font-dm-sans text-white">My Projects</h2>
            <div id="projects" className="w-full min-h-[30rem] inline-flex flex-row overflow-x-scroll snap-x snap-center lg:overflow-visible lg:grid lg:grid-cols-2 lg:snap-none items-start justify-start gap-2 lg:gap-6">
                {projectsData.projects.map((project: Project) => {
                    return (
                        <ProjectsCard key={project.id} aria-label={`Project: ${project.name}`} tabIndex={0}>
                                <ProjectsCardContent>
                                    <Link aria-label="Navigate to Project's GitHub Page" href={project.link ?? ''}>
                                        <ProjectsCardHeader>
                                            <Image src={project.image} alt="project image" width={800} height={550} 
                                                className='h-full object-cover'/>
                                        </ProjectsCardHeader>
                                    </Link>
                                    <ProjectsCardDescription>
                                        <section className="h-[6rem]">
                                            <ProjectsCardTitle>{project.name}</ProjectsCardTitle>
                                            <ProjectsCardSubTitle>{project.description}</ProjectsCardSubTitle>
                                        </section>
                                        <ProjectsCardSkills>
                                            {project.tools.map((tool: string) => {
                                                return (
                                                    <div key={tool} className='inline-flex items-center justify-center rounded-[1rem] text-xs tracking-wide font-medium font-inter text-white/90 bg-Customs-projectTools min-w-[3.75rem] h-8 px-2 py-1'>
                                                        {tool}</div>
                                                    )
                                            })}
                                        </ProjectsCardSkills>
                                    </ProjectsCardDescription>
                                </ProjectsCardContent>
                        </ProjectsCard>
                    )
                })}
            </div>
        </div>
    )    
};