import { AboutCardDescription, AboutCard, AboutCardTitle} from "@/components/ui/card"

export default function About() {
    return (
        <div id="about" className="z-50 w-full flex flex-col gap-6 intersect-once md:intersect:motion-opacity-in-0 md:intersect:motion-translate-y-in-[25%]">
            <h2 className="text-3xl font-bold font-dm-sans text-white">About Me</h2>
            <AboutCard>
                <AboutCardTitle>Hey, I&apos;m Kamil.</AboutCardTitle>
                <AboutCardDescription>
                    I am a 29 year old Front End student at JENSEN Yrkeshögskola in Gothenburg currently looking for work. I like to bring designs to life and
                    figure out how certain logics of code work as well as how to implement them in my projects.<br /><br />
                    I started my journey with development in 2023 after having decided to change careers from construction to something that lines up with my interests
                    of computer creativity.<br /><br />
                    I love working in a team where I can exchange ideas with other developers. My experience in construction, as well as outside of it, gave me
                    great insight into working with both my colleagues and clients alike, where many of whom may have different, or sometimes opposing ideas.<br /><br />
                    In my spare time I enjoy to spend time with my family and pets, play video games, train, and do some light game development as part of the Beyond Skyrim team where 
                    I use software such as Creation Kit, Blender, and NifSkope. Being a part of this team taught me a great deal about working with others 
                    towards a common goal that is also big and complex.
                </AboutCardDescription>
            </AboutCard>
        </div>
    )    
};