import skillsData from '../app/skills.json'

type Skill = {
    id: number;
    name: string;    
}

  export default function Skills() {
    return (
        <div className="inline-flex flex-col items-start justify-center gap-6 text-white">
            <h1 className='text-3xl font-bold'>Skills</h1>
            <div className="flex flex-col gap-3">
                <h2 className='text-[1.125rem] font-semibold'>Languages</h2>
                <div className='inline-flex items-center gap-2'>
                    {skillsData.skills.languages.map((language: Skill) => {
                        return (
                            <div key={language.id} className='inline-flex items-center rounded-[0.5rem] border border-gray-700 text-[0.85rem] bg-blue-700/75 min-w-10 h-9 px-3 py-2'>{language.name}</div>
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className='text-[1.125rem] font-semibold'>Frameworks</h2>
                <div className='inline-flex items-center gap-2'>
                    {skillsData.skills.frameworks.map((framework: Skill) => {
                        return (
                            <div key={framework.id} className='inline-flex items-center rounded-[0.5rem] border border-gray-700 text-[0.85rem] bg-cyan-600 min-w-10 h-9 px-3 py-2'>{framework.name}</div>
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className='text-[1.125rem] font-semibold'>Tools</h2>
                <div className='inline-flex items-center gap-2'>
                    {skillsData.skills.tools.map((tool: Skill) => {
                        return (
                            <div key={tool.id} className='inline-flex items-center rounded-[0.5rem] border border-gray-700 text-[0.85rem] bg-amber-600 min-w-10 h-9 px-3 py-2'>{tool.name}</div>
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className='text-[1.125rem] font-semibold'>Backend</h2>
                <div className='inline-flex items-center gap-2'>
                    {skillsData.skills.backends.map((backend: Skill) => {
                        return (
                            <div key={backend.id} className='inline-flex items-center rounded-[0.5rem] border border-gray-700 text-[0.85rem] bg-red-600/80 min-w-10 h-9 px-3 py-2'>{backend.name}</div>
                        );
                    })}
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <h2 className='text-[1.125rem] font-semibold'>General</h2>
                <div className='inline-flex items-center gap-2'>
                    {skillsData.skills.generals.map((general: Skill) => {
                        return (
                            <div key={general.id} className='inline-flex items-center rounded-[0.5rem] border border-gray-700 text-[0.85rem] bg-blue-500 min-w-10 h-9 px-3 py-2'>{general.name}</div>
                        );
                    })}
                </div>
            </div>
        </div>
    )    
};
