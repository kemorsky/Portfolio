import ObserverProvider from "../ObserverProvider";

import { getAllPosts } from '@/lib/posts';
import Link from "next/link";

export default async function Blog() {
    const posts = await getAllPosts();

    return (
        <ObserverProvider>
            <div className="flex items-start justify-center min-h-screen h-full bg-Customs-Primary scroll-smooth overflow-hidden">
                <main className="z-45 w-full h-full flex flex-col items-center px-4 lg:px-0 gap-8 justify-start relative mt-[7rem]">
                    <div className="z-40 max-w-2xl h-full w-full flex flex-col items-start justify-center gap-8 sm:gap-12 md:gap-16 relative">
                        <div className="w-[22rem] h-[22rem] left-[-17.5rem] top-[4.438rem] absolute bg-Customs-backgroundEclipse/80 rounded-full blur-[25rem]" />
                        <div className="w-[22rem] h-[22rem] left-[32.375rem] top-[44.5rem] absolute bg-Customs-backgroundEclipse/80 rounded-full blur-[25rem]" />
                        <ul className="space-y-4 w-full">
                            {posts.map(post => (
                            <li key={post.id} className="hover:bg-Customs-Card border border-transparent hover:border-Customs-Card-Border transform transition-colors p-3 rounded-xl intersect-once md:intersect:motion-opacity-in-0 md:intersect:motion-translate-y-in-[-75%]">
                                <Link href={`/blog/${post.id}`}>
                                    <h2 className="text-xl font-semibold text-white font-dm-sans hover:underline">{post.title}</h2>
                                    <p className="text-sm font-medium font-dm-sans text-white/75">{post.date}</p>
                                    <p className="text-sm font-medium font-dm-sans text-white">{post.description}</p>
                                </Link>
                            </li>
                            ))}
                        </ul>
                    </div>
                </main>
            </div>
        </ObserverProvider>
        
    )
}