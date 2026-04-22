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

## Run with Docker (for browser preview)

```bash
docker compose up --build
```

Then open:

```text
http://localhost:4321
```

To stop:

```bash
docker compose down
```

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
