"use client"

import Link from "next/link";

export default function Navbar() {

    const scrollToSection = function (element_id: string) {
        const element = document.getElementById(element_id);
        element?.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
    };

    return (
        <header className="w-full max-w-[90rem] z-50 h-[6.25rem] bg-background/80 backdrop-blur-md rounded-2xl fixed top-0 self-center overflow-hidden">
            <nav className="w-full h-full inline-flex items-center justify-center text-white">
                <div className="max-w-[50rem] inline-flex items-center justify-between gap-[3.5rem]">
                    <section className="inline-flex items-center gap-6 font-inter">
                        <span onClick={() => scrollToSection('home')} aria-label="Navigate to Home" tabIndex={0} className="hover:text-gray-500 hover:transition-colors group relative cursor-pointer">Home
                            <span className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-gradient-to-r from-sky-500 to-red-300 scale-x-0
                            group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out z-10"></span>
                        </span>
                        <Link className="hover:text-gray-500 hover:transition-colors group relative" aria-label="Navigate to About Section" href="#">About
                            <span className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-gradient-to-r from-sky-500 to-red-300 scale-x-0
                            group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out z-10"></span>
                        </Link>
                        <span onClick={() => scrollToSection('projects')} aria-label="Navigate to Projects Section" tabIndex={0} className="hover:text-gray-500 hover:transition-colors group relative cursor-pointer">Projects
                            <span className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-gradient-to-r from-sky-500 to-red-300 scale-x-0
                            group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out z-10"></span>
                        </span>
                        {/* <Link className="hover:text-gray-500 hover:transition-colors group relative" aria-label="Navigate to Blog Page Section" tabIndex={0} href="#">Blog
                            <span className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-gradient-to-r from-sky-500 to-red-300 scale-x-0
                            group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out z-10"></span>
                        </Link> */}
                        <span onClick={() => scrollToSection('contact-me')} aria-label="Navigate to Contact Form" tabIndex={0} className="hover:text-gray-500 hover:transition-colors group relative cursor-pointer">Contact
                            <span  className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-gradient-to-r from-sky-500 to-red-300 scale-x-0
                            group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out z-10"></span>
                        </span>
                    </section>
                </div>
            </nav>
        </header>
    )    
};