import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export type PostMetadata = {
  title: string;
  date: string;
  description?: string;
  tags?: string[];
}

export type PostData = {
  id: string;
  content: string;
} & PostMetadata

export function getAllPostSlugs(): string[] {
  return fs.readdirSync(postsDirectory).map(file => file.replace(/\.md$/, ''));
}

export async function getPostBySlug(slug: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);

  return {
    id: slug,
    ...(data as PostMetadata),
    content,
  };
}

export async function getAllPosts(): Promise<PostData[]> {
  const slugs = getAllPostSlugs();
  const posts = await Promise.all(slugs.map(getPostBySlug));

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}
