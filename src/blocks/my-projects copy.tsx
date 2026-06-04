'use client';

import { useState } from "react";

import projectsData from "../../src/app/projects.json"
import { type Project } from "@/lib/types"

import ProjectCard from "@/components/ui/projects/project-card";
import ProjectDisplay from "@/components/ui/projects/project-display";
import HeadingText from "@/components/ui/shared/heading-text"

export default function ProjectsTest() {
    const [ activeProject, setActiveProject ] = useState<Project>(projectsData.projects[0]);

    const handleActiveProject = (project: Project) => {
        setActiveProject(project);
    };

    return (
        <div id="projects" className="z-50 w-full max-w-[75rem] max-h-[50rem] h-full self-center">
            <HeadingText id="my-project-heading" text="My Projects" />
            <div className="w-full max-h-[50rem] h-full inline-flex lg:flex-row flex-col snap-x snap-center lg:snap-none items-start justify-between gap-2 lg:gap-6 mt-6">
                <section className="overflow-x-auto lg:overflow-y-auto max-w-full lg:max-w-[25rem] max-h-[46rem] h-full flex flex-row lg:flex-col gap-4">
                    {projectsData.projects.map((project: Project) => {
                        return (
                            <ProjectCard
                                onClick={() => {handleActiveProject(project)}}
                                key={project.id}
                                project={project}
                            />
                        )
                    })}
                </section>
                {activeProject && (
                    <ProjectDisplay 
                        key={activeProject.id}
                        project={activeProject}
                    />
                )}
            </div>
        </div>
    )    
};