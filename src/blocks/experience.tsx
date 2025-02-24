import { ExperienceCard, ExperienceCardContent, ExperienceCardTitle, ExperienceCardSubTitle ,ExperienceCardDescription } from "@/components/ui/card";

import experienceData from '@/app/experience.json'

type Experience = {
    name: string;
    profession: string;
    date: string;
    description: string;
  };
  
  type Education = {
    [key: string]: Experience;
  };
  
  type Work = {
    [key: string]: Experience;
  };
  
  type ExperienceData = {
    experience: {
        education: Education;
        work: Work;
    };
  };

export default function Experience() {
    const data: ExperienceData = experienceData;

    return (
        <div className="w-full inline-flex flex-col items-start justify-center gap-[2.5rem] text-white">
            <div className="inline-flex flex-col items-start justify-center gap-6">
                <h2 className="text-3xl font-semibold">Education</h2>
                {Object.keys(data.experience.education).map((key) => (
                    <ExperienceCard key={key}>
                        <ExperienceCardContent>
                            <ExperienceCardTitle>{data.experience.education[key].profession}</ExperienceCardTitle>
                            <ExperienceCardSubTitle>{data.experience.education[key].name}</ExperienceCardSubTitle>
                            <ExperienceCardDescription>{data.experience.education[key].date}</ExperienceCardDescription>
                            <ExperienceCardDescription>{data.experience.education[key].description}</ExperienceCardDescription>
                        </ExperienceCardContent>
                    </ExperienceCard>
                ))}
            </div>
            <div className="inline-flex flex-col items-start justify-center gap-6">
                <h2 className="text-3xl font-semibold">Work</h2>
                {Object.keys(data.experience.work).map((key) => (
                    <ExperienceCard key={key}>
                        <ExperienceCardContent>
                            <ExperienceCardTitle>{data.experience.work[key].profession}</ExperienceCardTitle>
                            <ExperienceCardSubTitle>{data.experience.work[key].name}</ExperienceCardSubTitle>
                            <ExperienceCardDescription>{data.experience.work[key].date}</ExperienceCardDescription>
                            <ExperienceCardDescription>{data.experience.work[key].description}</ExperienceCardDescription>
                        </ExperienceCardContent>
                    </ExperienceCard>
                ))}
            </div>
        </div>
    )    
};