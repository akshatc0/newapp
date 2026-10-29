# akshatchopra — personal site

Next.js (App Router) + Tailwind v4.

```bash
npm install
npm run dev   # http://localhost:3000
```

## Editing content

Everything the site says lives in `src/content/profile.ts`: experience, projects,
leadership, honours, education, skills and the headline figures. The home page,
`/projects` and `/resume` all render from it, so update it once and every page follows.

`/resume` is an HTML resume built from the same data; its "Save as PDF" button prints
it to a one-page PDF. `/photography` and `/music` are standalone.
