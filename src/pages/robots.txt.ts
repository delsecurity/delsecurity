import { withBase } from '../config/site';

export function GET() {
  const sitemapPath = withBase('/sitemap-index.xml');
  const sitemapUrl = import.meta.env.SITE
    ? new URL(sitemapPath, import.meta.env.SITE).toString()
    : sitemapPath;

  const body = `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
