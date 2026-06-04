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
        <div id="projects" className="z-50 w-full max-h-[50rem] h-full">
            <HeadingText id="my-project-heading" text="My Projects" />
            <h2 className="text-3xl font-bold font-dm-sans text-white mb-6">My Projects</h2>
                <div className="w-full max-h-[50rem] h-full inline-flex flex-row snap-x snap-center lg:snap-none items-start justify-start gap-2 lg:gap-6">
                    <section className="overflow-y-auto max-h-[46rem] h-full flex flex-col gap-4">
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