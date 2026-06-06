import { Skill } from "@/lib/types";
import Image from "next/image";

interface SkillCardProps {
    skill: Skill;
}

export default function SkillCard(props: SkillCardProps) {
    return (
        <div key={props.skill.id} 
            className="w-[6rem] md:w-[8rem] h-[6rem] md:h-[8rem] p-2 rounded-xl flex flex-col items-center justify-center gap-2 bg-Customs-Card border border-Customs-Card-Border hover:border-green-400 lg:hover:translate-y-[-0.25rem] transition-all">
            <Image className="w-[3rem] md:w-[3.75rem]" src={props.skill.icon ?? ""} alt="skills image" width={60} height={60}/>
            <span className="text-xs md:text-[0.875rem] font-primary font-semibold">{props.skill.name}</span>
        </div>
    )
}