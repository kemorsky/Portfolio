import ObserverProvider from "../ObserverProvider";

export default function Projects() {
    return (
        <ObserverProvider>
            <div className="flex items-start justify-center min-h-screen h-full bg-Customs-Primary scroll-smooth overflow-hidden">
                <main className="z-45 w-full h-full flex flex-col items-center px-4 lg:px-0 gap-8 justify-start relative mt-[7rem]">
                    <h1>Projects</h1>
                </main>
            </div>
        </ObserverProvider>
    )
}