'use client';

import projectsData from "../../src/app/projects.json"
import { type Project } from "@/lib/types"

import ProjectCard from "@/components/ui/projects/project-card";

export default function Projects() {

    const allProjects = projectsData.projects.map((project: Project) => project);
    const wipProjects = projectsData.projects.filter((project: Project) => project.wip === true);

    return (
        <div id="projects" className="z-50 w-full max-w-[75rem] inline-flex items-start justify-center self-center flex-col gap-6">
            <h2 className="text-3xl font-bold font-dm-sans text-white self-center">My Projects</h2>
            <section className="flex gap-3 self-center text-white">
                <button className="p-4 bg-blue-200" onClick={() => {}}>
                    All
                </button>
                <button className="p-4 bg-blue-200" onClick={() => {wipProjects}}>
                    WIP
                </button>
            </section>
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