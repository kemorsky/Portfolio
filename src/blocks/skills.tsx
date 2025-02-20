import skillsData from '../app/skills.json'

type Skill = {
    id: number;
    name: string;    
}

  export default function Skills() {
    return (
        <div className="inline-flex flex-col items-start justify-center gap-6 px-6 text-white">
            <h1 className='text-3xl'>Skills</h1>
            <div className="flex flex-col gap-3">
                <h2 className='text-[1.4rem]'>Languages</h2>
                <div className='inline-flex items-center gap-2'>
                    {skillsData.skills.languages.map((language: Skill) => {
                        return (
                            <div key={language.id} className='inline-flex items-center rounded-[0.5rem] border border-indigo-800 text-[0.9rem] bg-orange-600 min-w-10 h-8 px-3 py-2'>{language.name}</div>
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className='text-[1.4rem]'>Frameworks</h2>
                <div className='inline-flex items-center gap-2'>
                    {skillsData.skills.frameworks.map((framework: Skill) => {
                        return (
                            <div key={framework.id} className='inline-flex items-center rounded-[0.5rem] border border-indigo-800 text-[0.9rem] bg-indigo-700 min-w-10 h-8 px-3 py-2'>{framework.name}</div>
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className='text-[1.4rem]'>Tools</h2>
                <div className='inline-flex items-center gap-2'>
                    {skillsData.skills.tools.map((tool: Skill) => {
                        return (
                            <div key={tool.id} className='inline-flex items-center rounded-[0.5rem] border border-indigo-800 text-[0.9rem] bg-yellow-600 min-w-10 h-8 px-3 py-2'>{tool.name}</div>
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className='text-[1.4rem]'>Backend</h2>
                <div className='inline-flex items-center gap-2'>
                    {skillsData.skills.backends.map((backend: Skill) => {
                        return (
                            <div key={backend.id} className='inline-flex items-center rounded-[0.5rem] border border-indigo-800 text-[0.9rem] bg-red-700 min-w-10 h-8 px-3 py-2'>{backend.name}</div>
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className='text-[1.4rem]'>General</h2>
                <div className='inline-flex items-center gap-2'>
                    {skillsData.skills.generals.map((general: Skill) => {
                        return (
                            <div key={general.id} className='inline-flex items-center rounded-[0.5rem] border border-indigo-800 text-[0.9rem] bg-blue-500 min-w-10 h-8 px-3 py-2'>{general.name}</div>
                        );
                    })}
                </div>
            </div>
        </div>
    )    
};
