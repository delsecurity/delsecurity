import readingTime from 'reading-time';
import type { CollectionEntry } from 'astro:content';

export function sortPostsByDate(posts: CollectionEntry<'blog'>[]) {
  return [...posts].sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime(),
  );
}

export function getReadingTimeText(body: string) {
  return readingTime(body).text;
}

export function isPublished(draft: boolean) {
  return !import.meta.env.PROD || !draft;
}

export function getPostSlug(post: CollectionEntry<'blog'>) {
  return post.id.replace(/\.mdx?$/, '');
}
