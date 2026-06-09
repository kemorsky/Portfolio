import HeadingText from "@/components/ui/shared/heading-text"
import ObserverProvider from "../ObserverProvider"

export default function About() {
    return (
        <ObserverProvider>
            <main className="scroll-smooth z-45 w-full h-full flex flex-col items-center px-4 lg:px-0 gap-8 justify-start relative">
                <div id="about" className="w-full max-w-[75rem] flex flex-col gap-6 my-[7rem]">
                    <HeadingText id="about-me-heading" className="intersect-once md:intersect:motion-opacity-in-0 md:intersect:motion-translate-y-in-[-50%]" text="About Me"/>
                    <section className="w-full md:h-full inline-flex flex-col text-left gap-4 p-6 intersect-once md:intersect:motion-opacity-in-0 md:intersect:motion-translate-x-in-[-13%]">
                        <article className="w-full max-w-[35rem]">
                            <h2 className="mb-4 text-xl font-primary text-white">Hey, I&apos;m Kamil.</h2>
                            <p className="text-[1.125rem] leading-[1.5rem] font-primary text-white/85">
                                I am a 30 year old Front End Developer. I graduated from JENSEN Yrkeshögskola in Gothenburg in June 2025.
                                I started my journey with development in 2023 after having decided to change careers from construction to something that lines up with my interests
                                of computer creativity.<br /><br /> I like to bring designs to life and find out the secrets behind the implementation of features and technologies.
                                I love working in a team where I can exchange tricks and ideas with others.<br /><br />
                                In my spare time I enjoy spending time with my family and pets, play video games such as Counter-Strike and the Elder Scrolls series, go to the gym, and do some light game development as part of the Beyond Skyrim team where 
                                I use software such as Creation Kit, Blender, and NifSkope. Being a part of this team taught me a great deal about working with others 
                                towards a common goal of a large scale.
                            </p>
                        </article>
                    </section>
                </div>
            </main>
        </ObserverProvider>
    )    
};