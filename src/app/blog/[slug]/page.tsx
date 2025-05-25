import { getAllPostSlugs, getPostBySlug } from "@/lib/posts";
import { notFound } from "next/navigation";
import { marked } from 'marked';

export function generateStaticParams(): { slug: string }[] {
    const slugs = getAllPostSlugs();
    return slugs.map(slug => ({ slug }));
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const post = await getPostBySlug(slug)

    if (!post) return notFound();

    const html = marked(post.content, { breaks: true, gfm: true });

    return (
      <main className="z-45 flex items-center justify-center h-full w-full bg-Customs-Primary scroll-smooth relative overflow-hidden">
        <div className="z-40 max-w-2xl mx-auto p-4 text-white mt-[7rem] relative">
          <div className="w-[22rem] h-[22rem] left-[-12.5rem] top-[0.438rem] absolute bg-Customs-backgroundEclipse/80 rounded-full blur-[25rem]" />
          <div className="w-[22rem] h-[22rem] left-[32.375rem] top-[44.5rem] absolute bg-Customs-backgroundEclipse/80 rounded-full blur-[25rem]" />
          <section className="z-50 relative" aria-label='Blog Post'>
            <h1 className="text-3xl font-bold font-dm-sans mb-2">{post.title}</h1>
            <p className="text-sm font-dm-sans text-white/75 mb-4">{post.date}</p>
            {post.tags && (
              <div className="flex flex-wrap gap-2 mb-4" aria-label='Tags'>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-200 text-gray-800 text-xs font-inter font-medium px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <article
              aria-label='Post Content'
              className="prose pb-10 font-inter text-white/90"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </section>
          
        </div>
    </main>
  );
};