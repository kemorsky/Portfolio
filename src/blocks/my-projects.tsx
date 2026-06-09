import projectsData from "../../src/app/projects.json"
import { type Project } from "@/lib/types"

import ProjectCard from "@/components/ui/projects/project-card";
import HeadingText from "@/components/ui/shared/heading-text";


export default function Projects() {

    return (
        <div id="projects" className="z-50 w-full max-w-[75rem] inline-flex items-start justify-center self-center flex-col gap-6 lg:px-4 px-0">
            <HeadingText id="my-project-heading" text="My Projects" />
            <div className="w-full min-h-[30rem] h-full inline-flex flex-row overflow-x-scroll snap-x snap-center lg:overflow-visible lg:grid lg:grid-cols-3 lg:grid-rows-3 lg:snap-none items-start justify-start gap-2 lg:gap-6">
                {projectsData.projects.map((project: Project) => {
                    return (
                        <ProjectCard key={project.id} project={project} />
                    )
                })}
            </div>
        </div>
    )    
};