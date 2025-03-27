import skillsData from '../app/skills.json'

type Skill = {
    id: number;
    name: string;    
}

  export default function Skills() {
    return (
        <div className="z-50 w-full flex-col md:flex-row inline-flex items-start gap-6 text-white">
            <article className='flex flex-col gap-4 intersect-once md:intersect:motion-opacity-in-0 md:intersect:motion-duration-1000 md:intersect:motion-translate-x-in-[-10rem]'>
                <h1 className='text-3xl font-bold font-dm-sans '>Skills</h1>
                <span className=''>
                    <p className='md:w-[30rem]'>I am focused on learning how to optimize user experience by creating intuitive, seamless interfaces that are both user-friendly and easy to maintain for developers.
                        I am also passionate about exploring various aspects of web development and applying this knowledge to enhance my projects.</p>
                </span>
            </article>
            <div className="w-full inline-flex flex-col items-start gap-4 text-white md:mt-[3.125rem]">
                <div className="flex flex-col gap-3 intersect-once md:intersect:motion-opacity-in-0 md:intersect:motion-duration-1000 md:intersect:motion-translate-x-in-[10rem]">
                    <h2 className='text-[1.125rem] font-semibold'>Languages</h2>
                    <div className='inline-flex items-center gap-2'>
                        {skillsData.skills.languages.map((language: Skill) => {
                            return (
                                <div key={language.id} className='inline-flex items-center rounded-[0.5rem] border border-gray-700 text-[1rem] font-semibold bg-blue-700/75 min-w-10 h-8 px-3 py-2 text-white/90'>{language.name}</div>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col gap-3 intersect-once md:intersect:motion-opacity-in-0 md:intersect:motion-duration-1000 md:intersect:motion-translate-x-in-[10rem]">
                    <h2 className='text-[1.125rem] font-semibold'>Frameworks</h2>
                    <div className='inline-flex items-center gap-2'>
                        {skillsData.skills.frameworks.map((framework: Skill) => {
                            return (
                                <div key={framework.id} className='inline-flex items-center rounded-[0.5rem] border border-gray-700 text-[1rem] font-semibold bg-cyan-600 min-w-10 h-8 px-3 py-2 text-white/90'>{framework.name}</div>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col gap-3 intersect-once md:intersect:motion-opacity-in-0 md:intersect:motion-duration-1000 md:intersect:motion-translate-x-in-[10rem]">
                    <h2 className='text-[1.125rem] font-semibold'>Backend</h2>
                    <div className='inline-flex items-center gap-2'>
                        {skillsData.skills.backends.map((backend: Skill) => {
                            return (
                                <div key={backend.id} className='inline-flex items-center rounded-[0.5rem] border border-gray-700 text-[1rem] font-semibold bg-red-600/80 min-w-10 h-8 px-3 py-2 text-white/90'>{backend.name}</div>
                            );
                        })}
                    </div>
                </div>
                <div className="flex flex-col gap-3 intersect-once md:intersect:motion-opacity-in-0 md:intersect:motion-duration-1000 md:intersect:motion-translate-x-in-[10rem]">
                    <h2 className='text-[1.125rem] font-semibold'>Tools</h2>
                    <div className='inline-flex items-center flex-wrap gap-2'>
                        {skillsData.skills.tools.map((tool: Skill) => {
                            return (
                                <div key={tool.id} className='inline-flex items-center rounded-[0.5rem] border border-gray-700 text-[1rem] font-semibold bg-amber-600 min-w-10 h-8 px-3 py-2 text-white/90'>{tool.name}</div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    )    
};
