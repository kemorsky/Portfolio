"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent } from "react";

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();

    const navbarHeight = 100;

    const handleNavClick = (e: MouseEvent, sectionId: string) => {
        e.preventDefault();

        if (pathname === "/") {
            const element = document.getElementById(sectionId);
            if (element) {
                const yOffset = -navbarHeight;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({ top: y, behavior: "smooth" });

                // Update the URL hash without reloading
                history.replaceState(null, "", `#${sectionId}`);
            }
        } else {
                // Navigate to home with the hash
                router.push(`/#${sectionId}`);
            }
    };

    return (
        <header className="w-full max-w-[90rem] z-50 h-[6.25rem] bg-background/80 backdrop-blur-md rounded-2xl fixed top-0 self-center overflow-hidden">
            <nav className="w-full h-full inline-flex items-center justify-center text-white">
                <div className="max-w-[50rem] inline-flex items-center justify-between gap-[3.5rem]">
                    <section className="inline-flex items-center gap-6 font-inter">
                        <Link
                            href="/#home"
                            onClick={(e) => handleNavClick(e, "home")}
                            className="hover:text-gray-500 hover:transition-colors group relative cursor-pointer"
                            aria-label="Navigate to Home"
                        >
                            Home
                            <span className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-gradient-to-r from-sky-500 to-red-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out z-10"></span>
                        </Link>
                        <Link
                            href="/#about"
                            onClick={(e) => handleNavClick(e, "about")}
                            className="hover:text-gray-500 hover:transition-colors group relative"
                            aria-label="Navigate to About Section"
                        >
                            About
                            <span className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-gradient-to-r from-sky-500 to-red-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out z-10"></span>
                        </Link>
                        <Link
                            href="/#projects"
                            onClick={(e) => handleNavClick(e, "projects")}
                            className="hover:text-gray-500 hover:transition-colors group relative cursor-pointer"
                            aria-label="Navigate to Projects Section"
                        >
                            Projects
                            <span className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-gradient-to-r from-sky-500 to-red-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out z-10"></span>
                        </Link>
                        <Link
                            href="/blog"
                            className="hover:text-gray-500 hover:transition-colors group relative"
                            aria-label="Navigate to Blog Page Section"
                        >
                            Blog
                            <span className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-gradient-to-r from-sky-500 to-red-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out z-10"></span>
                        </Link>
                        <Link
                            href="/#contact-me"
                            onClick={(e) => handleNavClick(e, "contact-me")}
                            className="hover:text-gray-500 hover:transition-colors group relative cursor-pointer"
                            aria-label="Navigate to Contact Form"
                        >
                            Contact
                            <span className="absolute bottom-[-3px] left-0 w-full h-[2px] bg-gradient-to-r from-sky-500 to-red-300 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out z-10"></span>
                        </Link>
                    </section>
                </div>
            </nav>
        </header>
    );
}
