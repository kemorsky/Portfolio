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
  params: { slug: string };
}) {
    const post = await getPostBySlug(params.slug)

    if (!post) return notFound();

    const html = marked(post.content);

    return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <p className="text-sm text-gray-500 mb-4">{post.date}</p>
      {post.tags && (
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="bg-gray-200 text-gray-800 text-xs font-medium px-2 py-1 rounded"
            >
              #{tag}
            </span>
          ))}
        </div>
      )}
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
};