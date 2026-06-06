import skillsData from '../app/skills.json'
import Wrapper from "@/components/ui/shared/wrapper"
import HeadingText from "@/components/ui/shared/heading-text"

import { type Skill } from '../../src/lib/types'
import SkillCard from "@/components/ui/skills/skill-card"

  export default function Skills() {
    return (
        <div className="z-50 w-full max-w-[50rem] flex-col inline-flex items-start self-center gap-6 text-white">
            <HeadingText id="skills-heading" text="Skills" />
            <section className="flex justify-between w-full">
                <article aria-labelledby="skills-heading" className='flex flex-col gap-4 intersect-once md:intersect:motion-opacity-in-0 md:intersect:motion-duration-1000 md:intersect:motion-translate-x-in-[-10rem]'>
                    
                    <span className=''>
                        <p className='max-w-[40rem] lg:w-[30rem] font-primary text-base text-white/85'>
                            I am focused on optimizing user experience by creating intuitive and seamless interfaces that are both 
                            user-friendly and easy to maintain.<br /><br />
                            Having picked up an interest in backend development during my internship I am currently exploring and working on fullstack projects, one of them being an app in React Native. 
                            I would love to put these skills to use in the professional world of frontend and fullstack development.
                        </p>
                    </span>
                </article>
                <div className="w-full inline-flex flex-col items-start gap-4 text-white ">
                    <div className="flex flex-col gap-3 intersect-once md:intersect:motion-opacity-in-0 md:intersect:motion-duration-1000 md:intersect:motion-translate-x-in-[10rem]">
                        <section aria-labelledby="languages-heading">
                            <h2 id="languages-heading" className='text-[1.125rem] font-semibold font-dm-sans'>Languages</h2>
                        </section>
                        <div className='inline-flex items-center gap-2'>
                            {skillsData.skills.languages.map((language: Skill) => {
                                return (
                                    <div key={language.id} 
                                        className='inline-flex items-center justify-center rounded-[1rem] border border-black text-[0.875rem] font-medium font-inter bg-[#020750] min-w-16 h-8 px-3 py-2 text-white'
                                        aria-label={`Skill: ${language.name}`}>
                                            {language.name}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 intersect-once md:intersect:motion-opacity-in-0 md:intersect:motion-duration-1000 md:intersect:motion-translate-x-in-[10rem]">
                        <section aria-labelledby="frameworks-heading">
                            <h2 id="frameworks-heading" className='text-[1.125rem] font-semibold font-dm-sans'>Frameworks</h2>
                        </section>
                        <div className='inline-flex items-center gap-2'>
                            {skillsData.skills.frameworks.map((framework: Skill) => {
                                return (
                                    <div key={framework.id}
                                        className='inline-flex items-center justify-center rounded-[1rem] border border-black text-[0.875rem] font-medium font-inter bg-[#76967a] min-w-16 h-8 px-3 py-2 text-white'
                                        aria-label={`Skill: ${framework.name}`}>
                                            {framework.name}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 intersect-once md:intersect:motion-opacity-in-0 md:intersect:motion-duration-1000 md:intersect:motion-translate-x-in-[10rem]">
                        <section aria-labelledby="backend-heading">
                            <h2 id="backend-heading" className='text-[1.125rem] font-semibold font-dm-sans'>Backend</h2>
                        </section>
                        <div className='inline-flex items-center flex-wrap gap-2'>
                            {skillsData.skills.backends.map((backend: Skill) => {
                                return (
                                    <div key={backend.id}
                                        className='inline-flex items-center justify-center rounded-[1rem] border border-black text-[0.875rem] font-medium font-inter bg-[#DE9E36] min-w-16 h-8 px-3 py-2 text-white'
                                        aria-label={`Skill: ${backend.name}`}>
                                            {backend.name}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="flex flex-col gap-3 intersect-once md:intersect:motion-opacity-in-0 md:intersect:motion-duration-1000 md:intersect:motion-translate-x-in-[10rem]">
                        <section aria-labelledby="tools-heading">
                            <h2 id="tools-heading" className='text-[1.125rem] font-semibold font-dm-sans'>Tools</h2>
                        </section>
                        <div className='inline-flex items-center flex-wrap gap-2'>
                            {skillsData.skills.tools.map((tool: Skill) => {
                                return (
                                    <div key={tool.id}
                                        className='inline-flex items-center justify-center rounded-[1rem] border border-black text-[0.875rem] font-medium font-inter bg-[#C08497] min-w-16 h-8 px-3 py-2 text-white'
                                        aria-label={`Skill: ${tool.name}`}>
                                            {tool.name}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
             </section>

             <section className="flex justify-between w-full">
                
                <article aria-labelledby="skills-heading" className='flex flex-col gap-8 intersect-once md:intersect:motion-opacity-in-0 md:intersect:motion-duration-1000 md:intersect:motion-translate-x-in-[-10rem]'>
                    
                    <div className="w-full flex flex-col items-center justify-center gap-2">
                        <h2 id="core-skills-heading" className='text-[1.125rem] font-semibold font-dm-sans'>Core Skills</h2>
                        <section className="w-full flex flex-wrap justify-center gap-2">
                            {skillsData.skills.coreSkills.map((skill: Skill) => (
                                <SkillCard key={skill.id} skill={skill} />
                            ))}
                        </section>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-2">
                        <h2 id="core-skills-heading" className='text-[1.125rem] font-semibold font-dm-sans'>Currently Exploring</h2>
                        <section className="w-full flex flex-wrap justify-center gap-2">
                            {skillsData.skills.currentlyExploring.map((skill: Skill) => (
                                <SkillCard key={skill.id} skill={skill} />
                            ))}
                        </section>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-2">
                        <h2 id="core-skills-heading" className='text-[1.125rem] font-semibold font-dm-sans'>Previously Worked With</h2>
                        <section className="w-full flex flex-wrap justify-center gap-2">
                            {skillsData.skills.previouslyWorkedWith.map((skill: Skill) => (
                                <SkillCard key={skill.id} skill={skill} />
                            ))}
                        </section>
                    </div>
                </article>
                
             </section>
        </div>
    )    
};
