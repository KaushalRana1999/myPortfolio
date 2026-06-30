# Dev Portfolio — Terminal-Inspired Next.js Site

A dark, techy, terminal-inspired portfolio built with **Next.js (App Router)**, **TailwindCSS**, **Framer Motion**, and **Lucide icons**. Designed for a B.Tech CSE / full-stack developer job application.

## Run locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Customize before deploying

1. **Personal details** — search the codebase for bracketed placeholders like `[Your Name]`, `[University Name]`, `[Year of Graduation]`, `your.email@example.com`, `your-username` (GitHub/LinkedIn) and replace them. Key files:
   - `app/layout.tsx` — page title/meta description
   - `components/Hero.tsx` — name, title, boot sequence lines
   - `components/Education.tsx` — university/institute, years
   - `components/Experience.tsx` — internship + certification details
   - `components/Contact.tsx` — email, GitHub, LinkedIn links
2. **Resume** — drop your real PDF at `public/resume.pdf` (delete `resume.pdf.placeholder`).
3. **Project screenshots** — add images to `public/projects/` (e.g. `sk-junction.png`, `hospital-management.png`, `portfolio.png`) matching the filenames referenced in `components/Projects.tsx`, or update the paths there.
4. **Contact form** — the form currently only shows a "sent" state client-side. Wire it to a real backend before relying on it: easiest options are [Formspree](https://formspree.io), [EmailJS](https://www.emailjs.com), or a Next.js API route (`app/api/contact/route.ts`) using Nodemailer/Resend.
5. **Project links** — update `github` and `live` URLs in `components/Projects.tsx`.

## Deploy to Vercel

1. Push this project to a GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo.
3. Framework preset: **Next.js** (auto-detected). No extra config needed.
4. Deploy — done.

## Tech stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS (custom terminal color tokens in `tailwind.config.js`)
- Framer Motion (scroll-triggered + hover animations)
- Lucide React (icons)
- Custom canvas particle network background (no external particle library)

## Features included

- Animated hero with a typed terminal boot sequence + particle network background
- About, Education (timeline), Projects (hover cards), Skills (animated progress bars), Experience & Certifications (timeline), Resume download, Contact form
- Dark/light mode toggle (persisted to `localStorage`)
- Mobile-responsive nav with hamburger menu
- `prefers-reduced-motion` respected globally
- SEO metadata in `app/layout.tsx`
