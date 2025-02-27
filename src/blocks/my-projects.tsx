import { ProjectsCard, ProjectsCardContent, ProjectsCardHeader, ProjectsCardTitle, ProjectsCardSubTitle, ProjectsCardDescription, ProjectsCardSkills } from "@/components/ui/card"
import projectsData from "../../src/app/projects.json"

import Image from "next/image"
import Link from "next/link"

type Project = {
    id: number,
    image: string,
    name: string,
    description: string,
    tools: string[]
}

export default function Projects() {
    return (
        <div className="w-full inline-flex items-start justify-center flex-col gap-6">
            <h2 className="text-3xl font-semibold text-white">My Projects</h2>
            <div id="projects" className="w-full inline-flex flex-row overflow-x-scroll snap-x snap-center md:flex-col md:snap-none items-start justify-start gap-6">
                {projectsData.projects.map((project: Project) => {
                    return (
                        <ProjectsCard key={project.id} className="">
                            <ProjectsCardContent>
                                <ProjectsCardHeader>
                                    <Link href="https://github.com/kemorsky?tab=repositories">
                                        <Image src={project.image} alt="project 1 image" width={1000} height={650} 
                                            className='w-full h-full object-fit cursor-pointer hover:scale-105 transition-all duration-200'/>
                                    </Link>
                                </ProjectsCardHeader>
                                <ProjectsCardDescription>
                                    <ProjectsCardTitle>{project.name}</ProjectsCardTitle>
                                    <ProjectsCardSubTitle>{project.description}</ProjectsCardSubTitle>
                                    <ProjectsCardSkills>
                                        {project.tools.map((tool: string) => {
                                            return (
                                                <div key={tool} className='inline-flex items-center justify-center rounded-[0.35rem] md:rounded-[0.5rem] text-[0.8rem] md:text-[0.85rem] font-semibold text-white bg-Customs-projectTools min-w-10 h-8 px-3 py-2'>
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