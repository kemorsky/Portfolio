"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { MouseEvent } from "react";
import { NavBarEffect } from "@/components/ui/navbar-effect";

export default function Navbar() {
    const pathname = usePathname();
    const router = useRouter();

    const navbarHeight = 120;

    const handleNavClick = (e: MouseEvent, sectionId: string) => {
        e.preventDefault();

        if (pathname === "/") {
            const element = document.getElementById(sectionId);
            if (element) {
                const yOffset = -navbarHeight;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({top: y, behavior: "smooth" });

                history.replaceState(null, "", `#${sectionId}`);
            }
        } else {
                router.push(`/#${sectionId}`);
            }
    };

    return (
        <header className="header w-full h-[6rem] z-50 backdrop-blur-md fixed top-0 self-center ">
            <nav className="w-full h-full inline-flex items-center justify-center text-white">
                
                    <section className="inline-flex items-center gap-6 font-primary text-white/80 py-5">
                        <Link
                            href="/#home"
                            onClick={(e) => handleNavClick(e, "home")}
                            className="hover:text-gray-500 hover:transition-colors group relative"
                            aria-label="Navigate to Home"
                        >
                            Home
                            <NavBarEffect />
                        </Link>
                        <Link
                            href="/about"
                            className="hover:text-gray-500 hover:transition-colors group relative"
                            aria-label="Navigate to About Section"
                        >
                            About
                            <NavBarEffect />
                        </Link>
                        <Link
                            href="/#projects"
                            onClick={(e) => handleNavClick(e, "projects")}
                            className="hover:text-gray-500 hover:transition-colors group relative"
                            aria-label="Navigate to Projects Section"
                        >
                            Projects
                            <NavBarEffect />
                        </Link>
                        <Link
                            href="/blog"
                            className="hover:text-gray-500 hover:transition-colors group relative"
                            aria-label="Navigate to Blog Page Section"
                        >
                            Blog
                            <NavBarEffect />
                        </Link>
                        <Link
                            href="/#contact-me"
                            onClick={(e) => handleNavClick(e, "contact-me")}
                            className="hover:text-gray-500 hover:transition-colors group relative"
                            aria-label="Navigate to Contact Form"
                        >
                            Contact
                            <NavBarEffect />
                        </Link>
                    </section>
                
            </nav>
        </header>
    );
}
