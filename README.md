# Sanjida Hossain: Portfolio

A one-page portfolio for a Full Stack Developer. Light lavender design with a serif display type, built with Vite, React, TypeScript, Tailwind CSS and Framer Motion. It builds to a static site that deploys on Netlify.

## Setup

```bash
npm install
cp .env.example .env     # then fill in the values below
npm run dev              # http://localhost:5173
npm run build            # type-check and production build into dist/
npm run preview          # serve the production build
```

## Environment variables

| Variable | Purpose |
| --- | --- |
| `VITE_WEB3FORMS_KEY` | Access key for the contact form. Get a free one at [web3forms.com](https://web3forms.com) using the email address that should receive messages. Without it the form shows a friendly "not configured" message. |
| `VITE_SITE_URL` | Public URL (for example `https://sanjida.netlify.app`). Used for the canonical link, Open Graph tags, JSON-LD, `sitemap.xml` and `robots.txt`. On Netlify the built-in `URL` is used when this is empty. |

Keys are read at build time and are never committed. `.env` is git-ignored.

## Editing content

All text lives in typed files in `src/data/`. Components only render it.

| File | Controls |
| --- | --- |
| `profile.ts` | Name, title, tagline, about text, email, links, nav, photo path, CV path |
| `projects.ts` | Work cards: summary, highlights, stack, status, Live and Code links |
| `experience.ts`, `education.ts` | Experience and education entries |
| `skills.ts` | Skill groups, spoken languages |
| `stats.ts` | Numbers under the hero (counters) |
| `faq.ts` | FAQ questions and answers |

**Photo:** put an optimised WebP at `public/images/profile.webp` and set `photo: '/images/profile.webp'` in `profile.ts`. Until then a monogram is shown.

**CV:** replace `public/Sanjida-Hossain-CV.pdf`. The bundled copy has no phone number or street address; keep it that way if you update it.

**Colors and fonts:** `tailwind.config.js` and `src/index.css`. Fonts (Geist, Instrument Serif) are self-hosted in `public/fonts/`.

## Deploy on Netlify

1. Push this repository to GitHub.
2. In Netlify choose **Add new site → Import an existing project** and pick the repo. `netlify.toml` already sets build command `npm run build` and publish directory `dist`.
3. Under **Site configuration → Environment variables** add `VITE_WEB3FORMS_KEY` (and optionally `VITE_SITE_URL`).
4. Deploy. Redeploy after changing a variable, because Vite inlines them at build time.

## Notes

- Motion uses transform and opacity only, respects `prefers-reduced-motion`, and the background pauses when the tab is hidden.
- The contact form validates on submit, has loading, success and error states, and a hidden honeypot field (`botcheck`).
- Lighthouse on the production build: Performance 99 to 100, Accessibility 100, Best Practices 100, SEO 100.
