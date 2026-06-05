export type Project = {
    id: number,
    image: string,
    name: string,
    description: string,
    synopsis?: string,
    keyTools?: string[],
    tools: string[],
    codeLink?: string,
    demoLink?: string,
    wip?: boolean
}

export type Experience = {
    image: string;
    place: string;
    location: string;
    profession: string;
    date: string;
    description: string[];
    expertise?: string[];
  };
  
export type Education = {
    [key: string]: Experience;
};

export type Work = {
    [key: string]: Experience;
};

export type ExperienceData = {
    experience: {
        education: Education;
        work: Work;
    };
};