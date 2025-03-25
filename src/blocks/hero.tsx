import { HeroCard, HeroCardTitle, HeroCardDescription} from "@/components/ui/card"

export default function Hero() {
    return (
        <div className="w-full intersect-once md:intersect:motion-opacity-in-0 md:intersect:motion-translate-y-in-[25%]">
            <HeroCard>
                <HeroCardTitle>Hey, I'm Kamil.</HeroCardTitle>
                <HeroCardDescription>
                    I am a 29 year old Front End student at JENSEN Yrkes Högskola in Gothenburg currently looking for work. I like to bring designs to life and
                    figure out how certain logics of code work as well as how to implement them in my projects.<br /><br />
                    I started my journey with development in 2023 after having decided to change careers from construction to something that lines up with my interests
                    of computers creativity.<br /><br />
                    I excel at working in a team where I can exchange ideas with other motivated and engaged people. My experience in construction, as well as outside of it, gave me
                    great insight into working with both my colleagues and clients alike - many of whom will have different, or sometimes opposing ideas that need accommodating.<br /><br />
                    In my spare time I enjoy to spend time with my family and pets, play video games, train, and do some very light game development in Creation Engine through software such as Creation Kit, Blender, and NifSkope.
                </HeroCardDescription>
            </HeroCard>
        </div>
    )    
};