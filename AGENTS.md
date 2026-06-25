<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project: satrialfata.id — Portfolio Website

## Stack

| Layer          | Tech                                      |
| -------------- | ----------------------------------------- |
| Framework      | Next.js 16.2.6 (App Router)               |
| UI Library     | React 19.2.4                              |
| Language       | TypeScript (strict)                       |
| Styling        | Tailwind CSS v4 (`@tailwindcss/postcss`)  |
| Icons          | lucide-react + react-icons (FontAwesome)  |
| Theme          | next-themes v0.4.6 (`attribute="class"`)  |
| GitHub Chart   | react-github-calendar ^5.0.6              |
| Font           | Inter via `next/font/google`              |
| ESLint         | eslint-config-next (core-web-vitals + ts) |

## Directory Structure

```
src/
  app/
    globals.css           Tailwind v4 import + CSS custom properties (light/dark)
    layout.tsx            Root layout (Inter font, ThemeProvider, Sidebar wrapper)
    page.tsx              Beranda — hero, stats, skills carousel, GitHub contributions
    tentang/page.tsx      Tentang — bio card + skills grid
    portofolio/page.tsx   Portofolio — project cards with tags & links
    sertifikat/page.tsx   Sertifikat — certificate cards with images
    kontak/page.tsx       Kontak — contact form + social links
  components/
    ThemeProvider.tsx      Client wrapper around next-themes
    Sidebar.tsx            Client — nav, social icons, theme toggle, mobile menu
    SkillCarousel.tsx      Client — marquee animation row
    GithubContribution.tsx Client — react-github-calendar wrapper
  img/                    Profile images
public/
  sertifikat/             Certificate JPG images
```

## Ground Rules (DO NOT Hallucinate)

### Styling
- Colors use CSS custom properties (`var(--card)`, `var(--border)`, `var(--text)`, `var(--muted)`, `var(--green)`, etc.) — NEVER Tailwind arbitrary values or hardcoded hex for theme colors.
- Inline styles via `style={{}}` objects, NOT class-based color tokens.
- Tokens defined in `globals.css` under `:root` (light) and `.dark` (dark).
- Tailwind v4 syntax: `@import "tailwindcss"` — NOT `@tailwind base/components/utilities`.
- Dark variant: `@custom-variant dark (&:is(.dark *));` — NOT `dark:` class.
- Border radius: custom `rounded-xl`, `rounded-2xl` via Tailwind, or inline `borderRadius`.

### Components
- Default to **server components**. Only add `"use client"` when using hooks, events, or browser APIs.
- `"use client"` components: ThemeProvider, Sidebar, SkillCarousel, GithubContribution.
- All components use `import type` for TypeScript types (e.g. `import type { Metadata } from "next"`).
- Use `@/` path alias for imports (maps to `src/`).
- Use `next/link` for internal navigation, `<a>` for external links (with `target="_blank"` + `rel="noopener noreferrer"`).

### Routing
- App Router: files in `src/app/`, each folder = route segment.
- Current routes: `/` (beranda), `/tentang`, `/portofolio`, `/sertifikat`, `/kontak`.
- Adding a new route = create `src/app/<route>/page.tsx`.

### Theme
- `next-themes` configured with `attribute="class"`, `defaultTheme="dark"`, `enableSystem={false}`.
- Dark mode adds `.dark` class to `<html>`.
- Use `useTheme()` from `next-themes` — `resolvedTheme` gives `"dark"` | `"light"`.

### Scripts
- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — start production server
- `npm run lint` — ESLint

### Data
- All data (projects, certificates, skills, social links) is hardcoded as arrays inside each page file.
- Certificate images stored in `public/sertifikat/`, referenced as `/sertifikat/<file>`.
- Avatar uses GitHub profile image (`https://github.com/satrialfata.png`).
- Profile image in `src/img/profile.jpg`, referenced as `/img/profile.jpg`.

### DO NOT
- Do NOT add new npm packages unless explicitly asked.
- Do NOT add routing libraries (next/router, react-router, etc.) — Next.js App Router is already in use.
- Do NOT change the theme system or CSS variable approach.
- Do NOT convert server components to client components unless hooks/events are needed.
- Do NOT use `@apply` or `@tailwind` directives — Tailwind v4 does not support them.
- Do NOT use `css()` or `clsx()` or class-variance-authority — the codebase uses plain style objects.
- Do NOT touch `.next/`, `node_modules/`, or build artifacts.
