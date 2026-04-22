# Del Security Website (Astro)

Static website for Del Security focused on:
- Home
- Services
- Blog
- Contact

## Stack

- Astro + TypeScript
- Tailwind CSS
- MDX/Content Collections
- RSS + Sitemap

## Run locally

```bash
npm install
npm run dev
npm run build
npm run preview
```

## Run with Docker

```bash
docker compose up -d --build
```

Then open `http://localhost:8080`.

Development mode:

```bash
docker compose -f docker-compose.dev.yml up -d --build
```

Then open `http://localhost:4321`.

## Routes

- `/` Home
- `/services`
- `/blog`
- `/blog/[slug]`
- `/contact`
- `/rss.xml`
- `/robots.txt`

## Content

- Centralized copy is in `src/config/site.ts`:
  - Navigation labels
  - Contact details
  - Service card summaries
- Blog entries live under `src/content/blog/`.

## Notes

- No submission or form intake is implemented; only static email contacts are used.
- Service scope is limited to **Security Framework** and **0-day Research**.
