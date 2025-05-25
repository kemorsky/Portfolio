'use client'

import { useState, useEffect } from "react";
import { ExperienceCard, ExperienceCardContent, ExperienceCardImage, ExperienceCardTitle, ExperienceCardSubTitle, ExperienceCardTime, ExperienceCardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";

import Image from "next/image";

import experienceData from '@/app/experience.json'

type Experience = {
    image: string;
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
    const [activeTab, setActiveTab] = useState("education");

    useEffect(() => {
        const storedActiveTab = localStorage.getItem("activeTab");
        if (storedActiveTab) {
            setActiveTab(storedActiveTab);
          }
    }, []);

    return (
        <div className="w-full inline-flex flex-col items-center justify-center self-center gap-4 text-white intersect-once md:intersect:motion-opacity-in-0 md:intersect:motion-translate-x-in-[-25%]">
            <h2 className="text-3xl font-bold font-dm-sans text-white self-start">Experience</h2>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="rounded-[0.5rem] inline-flex flex-col gap-4 ">
                <TabsList role="tablist">
                    <p className="sr-only" id="experience-tab-instructions">
                        Use arrow keys to navigate tabs. Press Tab to move to content.
                    </p>
                    <TabsTrigger id="tab-education"
                                 role="tab" 
                                 value="education" 
                                 aria-label="Education Tab" 
                                 aria-selected={activeTab === "education"}
                                 aria-controls="panel-education"
                                 tabIndex={activeTab === "education" ? 0 : -1}>
                                    Education</TabsTrigger>
                    <TabsTrigger id="tab-work"
                                 role="tab" 
                                 value="work" 
                                 aria-label="Work Tab" 
                                 aria-selected={activeTab === "work"}
                                 aria-controls="panel-work"
                                 tabIndex={activeTab === "work" ? 0 : -1}>Work</TabsTrigger>
                </TabsList>
                <TabsContent id="panel-education"
                             role="tabpanel"
                             aria-labelledby="tab-education"
                             value="education"
                             hidden={activeTab !== "education"}>
                    {Object.keys(data.experience.education).map((key) => (
                        <ExperienceCard key={key}>
                            <ExperienceCardImage>
                                <Image src={data.experience.education[key].image} alt="school image" width={56} height={56}
                                className='w-full h-full object-cover rounded-full' />
                            </ExperienceCardImage>
                            <ExperienceCardContent>
                                <ExperienceCardTime>{data.experience.education[key].date}</ExperienceCardTime>
                                <ExperienceCardTitle>{data.experience.education[key].profession}</ExperienceCardTitle>
                                <ExperienceCardSubTitle>{data.experience.education[key].name}</ExperienceCardSubTitle>
                                <ExperienceCardDescription>{data.experience.education[key].description}</ExperienceCardDescription>
                            </ExperienceCardContent>
                        </ExperienceCard>
                    ))}
                </TabsContent>
                <TabsContent id="panel-work"
                             role="tabpanel"
                             aria-labelledby="tab-work"
                             value="work"
                             hidden={activeTab !== "work"}>
                    {Object.keys(data.experience.work).map((key) => (
                        <ExperienceCard key={key}>
                            <ExperienceCardImage>
                                <Image src={data.experience.work[key].image} alt="work image" width={56} height={56}
                                className='w-full h-full object-cover rounded-full' />
                            </ExperienceCardImage>
                            <ExperienceCardContent>
                                <ExperienceCardTime>{data.experience.work[key].date}</ExperienceCardTime>
                                <ExperienceCardTitle>{data.experience.work[key].profession}</ExperienceCardTitle>
                                <ExperienceCardSubTitle>{data.experience.work[key].name}</ExperienceCardSubTitle>
                                <ExperienceCardDescription>{data.experience.work[key].description}</ExperienceCardDescription>
                            </ExperienceCardContent>
                        </ExperienceCard>
                    ))}
                </TabsContent>
            </Tabs>
        </div>
    )    
};