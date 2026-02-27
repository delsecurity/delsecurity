// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

const repository = process.env.GITHUB_REPOSITORY ?? '';
const [owner, repoName] = repository.split('/');
const isUserOrOrgSite =
  owner && repoName && repoName.toLowerCase() === `${owner.toLowerCase()}.github.io`;

const derivedBase =
  process.env.PUBLIC_BASE_PATH ??
  (process.env.GITHUB_ACTIONS === 'true' && repoName && !isUserOrOrgSite ? `/${repoName}` : '/');

const site = process.env.SITE_URL ?? (owner ? `https://${owner}.github.io` : 'https://example.com');

export default defineConfig({
  site,
  base: derivedBase,
  integrations: [mdx(), sitemap()],
  markdown: {
    syntaxHighlight: 'shiki',
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
