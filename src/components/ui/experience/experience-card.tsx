import { type Experience, type ExperienceData } from "@/lib/types";
import Image from "next/image";

interface ExperienceCardProps {
    experience: Experience;
}

export default function ExperienceCard2(props: ExperienceCardProps) {
    
    return (
        <div className="inline-flex items-start justify-center px-4 py-3 gap-3 relative">
            <section className="w-[3.5rem] h-[3.5rem] rounded-full bg-cover no-repeat shadow-md absolute left-[1rem] top-[1rem]">
                <Image src={props.experience.work[key].image} alt="work image" width={56} height={56} className='w-full h-full object-cover rounded-full' />
            </section>
            <section className="pl-[1rem] inline-flex flex-col items-start gap-1 border-l-[2px] border-gray-500 ml-16">
                <h3 className="text-[1rem] md:text-[1.25rem] font-inter font-bold"></h3>
                <span className="text-sm font-semibold font-inter text-white/70"></span>
                <span className="text-sm font-semibold font-inter text-white/70"></span>
                <p className="max-w-[35rem] text-sm font-medium font-inter text-white/90"></p>
            </section>
        </div>
    )
}