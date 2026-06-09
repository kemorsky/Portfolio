import skillsData from '../app/skills.json'

import { type Skill } from '../../src/lib/types'
import SkillCard from "@/components/ui/skills/skill-card"

  export default function Skills() {
    return (
        <div className="z-50 w-full max-w-[50rem] flex-col inline-flex items-start self-center gap-6 text-white">
            {/* <HeadingText id="skills-heading" text="Skills" /> */}
            <section className="flex justify-between w-full">
            
                <article aria-labelledby="skills-heading" className='flex flex-col gap-8'>
                    
                    <div className="w-full flex flex-col items-center justify-center gap-6 intersect-once md:intersect:motion-opacity-in-0 md:intersect:motion-translate-y-in-[-25%] ">
                        <h2 id="core-skills-heading" className='text-xl font-semibold font-primary'>Core Skills</h2>
                        <section className="w-full flex flex-wrap justify-center gap-2">
                            {skillsData.skills.coreSkills.map((skill: Skill) => (
                                <SkillCard key={skill.id} skill={skill} />
                            ))}
                        </section>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-6 intersect-once md:intersect:motion-opacity-in-0 md:intersect:motion-translate-y-in-[-25%] ">
                        <h2 id="core-skills-heading" className='text-xl font-semibold font-primary'>Currently Exploring</h2>
                        <section className="w-full flex flex-wrap justify-center gap-2">
                            {skillsData.skills.currentlyExploring.map((skill: Skill) => (
                                <SkillCard key={skill.id} skill={skill} />
                            ))}
                        </section>
                    </div>
                    <div className="w-full flex flex-col items-center justify-center gap-6 intersect-once md:intersect:motion-opacity-in-0 md:intersect:motion-translate-y-in-[-25%] ">
                        <h2 id="core-skills-heading" className='text-xl font-semibold font-primary'>Previously Worked With</h2>
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
