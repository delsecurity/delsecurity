import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from '../config/site';
import { getPostSlug, isPublished, sortPostsByDate } from '../utils/blog';

export async function GET(context: { site: URL }) {
  const posts = sortPostsByDate(await getCollection('blog', ({ data }) => isPublished(data.draft)));
  const rawBase = import.meta.env.BASE_URL;
  const base = rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
  const site = new URL(base, context.site).toString();

  return rss({
    title: `${SITE.name} Blog`,
    description: 'Security research, coordination operations, and business/partner-ready reporting notes.',
    site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.summary,
      pubDate: new Date(post.data.date),
      link: `${base}blog/${getPostSlug(post)}/`,
      categories: post.data.tags,
    })),
  });
}
