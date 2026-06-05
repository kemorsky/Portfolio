'use client'

import { useState, useEffect } from "react";
import { ExperienceCard, ExperienceCardContent, ExperienceCardImage, ExperienceCardTitle, ExperienceCardSubTitle, ExperienceCardTime, ExperienceCardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsTrigger, TabsList } from "@/components/ui/tabs";
import HeadingText from "@/components/ui/shared/heading-text"

import { FaCalendarAlt } from "react-icons/fa";
import { AiOutlineCalendar } from "react-icons/ai";
import { BsCalendar2, BsBriefcase } from "react-icons/bs";
import { IoLocationOutline } from "react-icons/io5";

import Image from "next/image";

import experienceData from '@/app/experience.json'
import Wrapper from "@/components/ui/shared/wrapper";
import { ExperienceData } from "@/lib/types";


export default function Experience() {
    const data: ExperienceData = experienceData;
    const [ activeTab, setActiveTab ] = useState("education");

    useEffect(() => {
        const storedActiveTab = localStorage.getItem("activeTab");
        if (storedActiveTab) {
            setActiveTab(storedActiveTab);
          }
    }, []);

    return (
        <Wrapper className="md:intersect:motion-opacity-in-0 md:intersect:motion-translate-x-in-[-25%]">
            <HeadingText id="experience-heading" text="Experience" />
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
                                <ExperienceCardTitle>{data.experience.education[key].profession}</ExperienceCardTitle>
                                <ExperienceCardTime>
                                    <BsCalendar2 className="w-4 h-4 text-white/70" />
                                    {data.experience.education[key].date}
                                </ExperienceCardTime>
                                <section className="flex md:flex-row flex-col items-start md:gap-3">
                                    <ExperienceCardSubTitle>
                                        <BsBriefcase className="w-4 h-4 text-white/70"/>
                                        {data.experience.education[key].place}
                                    </ExperienceCardSubTitle>
                                    <ExperienceCardSubTitle className="md:gap-1">
                                        <IoLocationOutline className="w-4 h-4 text-white/70"/>
                                        {data.experience.education[key].location}
                                    </ExperienceCardSubTitle>
                                </section>
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
                                <ExperienceCardTitle>{data.experience.work[key].profession}</ExperienceCardTitle>
                                <ExperienceCardTime>
                                    <BsCalendar2 className="w-4 h-4 text-white/70" />
                                    {data.experience.work[key].date}
                                </ExperienceCardTime>
                                <section className="flex md:flex-row flex-col items-start md:gap-3">
                                    <ExperienceCardSubTitle>
                                        <BsBriefcase className="w-4 h-4 text-white/70"/>
                                        {data.experience.work[key].place}
                                    </ExperienceCardSubTitle>
                                    <ExperienceCardSubTitle className="md:gap-1">
                                        <IoLocationOutline className="w-4 h-4 text-white/70"/>
                                        {data.experience.work[key].location}
                                    </ExperienceCardSubTitle>
                                </section>
                                <ExperienceCardDescription>{data.experience.work[key].description}</ExperienceCardDescription>
                                <section className="flex items-center gap-1 mt-2">
                                    {data.experience.work[key].expertise?.map((expertise, index) => (
                                        <span className="bg-Customs-Primary rounded-[0.5rem] px-2 py-1 border border-Customs-Card-Border" key={expertise}>
                                            {data.experience.work[key].expertise?.[index]}
                                        </span>
                                    ))}
                                </section>
                            </ExperienceCardContent>
                        </ExperienceCard>
                    ))}
                </TabsContent>
            </Tabs>
        </Wrapper>
    )    
};