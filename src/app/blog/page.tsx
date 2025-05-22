import ObserverProvider from "../ObserverProvider";
import Navbar from "@/blocks/navbar";

import { getAllPosts } from '@/lib/posts';
import Link from "next/link";

export default async function Blog() {
    const posts = await getAllPosts();

    return (
        <ObserverProvider>
            <div className="flex items-center justify-center h-full bg-Customs-Primary scroll-smooth overflow-hidden">
                <main className="z-45 w-full h-full flex flex-col items-center px-4 lg:px-0 gap-8 justify-start relative mt-[7rem]">
                <Navbar/>
                    <div className="z-40 max-w-[55rem] h-full w-full flex flex-col items-start justify-center gap-8 sm:gap-12 md:gap-16 relative">
                        <section>
                            <h2>Test Blog</h2>
                        </section>
                        <ul className="space-y-4">
                            {posts.map(post => (
                            <li key={post.id}>
                                <Link href={`/blog/${post.id}`}>
                                    <h2 className="text-xl font-semibold text-white font-dm-sans hover:underline">{post.title}</h2>
                                    <p className="text-sm text-gray-500">{post.date}</p>
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