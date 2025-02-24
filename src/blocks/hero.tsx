import { HeroCard, HeroCardTitle, HeroCardDescription} from "@/components/ui/card"

export default function Hero() {
    return (
        <div id="home" className="w-full">
            <HeroCard>
                <HeroCardTitle>Hey, I'm Kamil.</HeroCardTitle>
                <HeroCardDescription>
                    I am a 29 year old Front End student at JENSEN Yrkes Högskola in Gothenburg currently seeking employment in the field. I like to bring designs to life and
                    figure out how certain logics of code work and how to implement them in my projects.<br /><br />
                    I started my journey with development in 2023 after having decided to change careers from construction to something that lines up with my interests
                    of computers creativity.<br /><br />
                    I excel at working in a team where I can bounce off ideas with other motivated and engaged people. My experience in construction as well as privately gave me
                    great insight into working with both my colleagues as well as clients - many of whom will have different, or sometimes opposing ideas that need accommodating.<br /><br />
                    My resume may not be impressive but I am hoping to change that. I am working tiredlessly on my personal projects and further polish of my skills.<br /><br />
                    In my spare time I enjoy to spend time with my family and pets, play video games, train, and do some very light game development in Creation Engine as 
                    part of a big team for a project called Beyond Skyrim.
                </HeroCardDescription>
            </HeroCard>
        </div>
    )    
};