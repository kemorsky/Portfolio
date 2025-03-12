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
            <h2 className="text-3xl font-bold text-white">My Projects</h2>
            <div id="projects" className="w-full h-full inline-flex flex-row overflow-x-scroll snap-x snap-center lg:overflow-visible lg:grid lg:grid-cols-2 lg:snap-none items-start justify-start gap-2 lg:gap-6">
                {projectsData.projects.map((project: Project) => {
                    return (
                        <ProjectsCard key={project.id} className="">
                            <Link href="https://github.com/kemorsky?tab=repositories">
                                <ProjectsCardContent>
                                    <ProjectsCardHeader>
                                        <Image src={project.image} alt="project 1 image" width={800} height={550} 
                                               className='w-full h-full object-cover'/>
                                    </ProjectsCardHeader>
                                    <ProjectsCardDescription>
                                        <ProjectsCardTitle>{project.name}</ProjectsCardTitle>
                                        <ProjectsCardSubTitle>{project.description}</ProjectsCardSubTitle>
                                        <ProjectsCardSkills>
                                            {project.tools.map((tool: string) => {
                                                return (
                                                    <div key={tool} className='inline-flex items-center rounded-[0.5rem] text-xs tracking-wide font-semibold text-white/90 bg-Customs-projectTools min-w-10 h-8 px-2 py-1'>
                                                        {tool}</div>
                                                    )
                                            })}
                                        </ProjectsCardSkills>
                                    </ProjectsCardDescription>
                                </ProjectsCardContent>
                            </Link>
                        </ProjectsCard>
                    )
                })}
            </div>
        </div>
    )    
};