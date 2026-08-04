# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project state

This is a freshly scaffolded Next.js app (via `create-next-app`) — the App Router, layout, and home page are still the generated defaults (`src/app/layout.tsx`, `src/app/page.tsx`). There is no custom architecture yet beyond what `create-next-app` produces.

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — run ESLint (flat config in `eslint.config.mjs`, extends `eslint-config-next`'s core-web-vitals + typescript rules)

No test framework is configured yet (no test script, no Jest/Vitest/Playwright).

## Stack and structure

- **Next.js 16.3.0 / React 19.2.8**, App Router, TypeScript, strict mode. Per `AGENTS.md`, this Next.js version has breaking changes relative to training data — check `node_modules/next/dist/docs/` before relying on remembered APIs.
- **Path alias**: `@/*` maps to `./src/*` (`tsconfig.json`).
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss` (no `tailwind.config.*` — v4 is configured through `postcss.config.mjs` and CSS in `src/app/globals.css`).
- **Fonts**: Geist Sans/Mono loaded via `next/font/google` in `src/app/layout.tsx`, exposed as CSS variables (`--font-geist-sans`, `--font-geist-mono`).
- **`motion`** (Framer Motion's successor package) is a dependency but not yet used anywhere.
