# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Next.js 16 (App Router), TypeScript, Tailwind, motion for animations.
Deployed to Hostinger Node.js Web Apps, auto-builds on push to main.

## Project state

This is a freshly scaffolded Next.js app (via `create-next-app`) — the App Router, layout, and home page are still the generated defaults (`src/app/layout.tsx`, `src/app/page.tsx`). There is no custom architecture yet beyond what `create-next-app` produces.

## Commands

- `npm run dev` — start the dev server (http://localhost:3000)
- `npm run build` — production build (see Build constraints below)
- `npm run start` — serve the production build
- `npm run lint` — run ESLint (flat config in `eslint.config.mjs`, extends `eslint-config-next`'s core-web-vitals + typescript rules)

No test framework is configured yet (no test script, no Jest/Vitest/Playwright).

## Build constraints (do not change these)

- The build script MUST be `next build --webpack`. Hostinger's build server
  has glibc older than 2.29, so Next's native SWC bindings fail to load and it
  falls back to WASM. Turbopack requires native bindings and will fail the
  build. Never revert the build script to plain `next build`.
- The Next config MUST be `next.config.mjs`, not `next.config.ts`. The WASM
  fallback cannot compile a TypeScript config, which fails the build before it
  starts. Never convert it to .ts.
- Node is pinned to 22.x in package.json engines to match Hostinger's runtime.

## Stack and structure

- **Next.js 16.3.0 / React 19.2.8**, App Router, TypeScript, strict mode. Per `AGENTS.md`, this Next.js version has breaking changes relative to training data — check `node_modules/next/dist/docs/` before relying on remembered APIs.
- **Path alias**: `@/*` maps to `./src/*` (`tsconfig.json`).
- **Styling**: Tailwind CSS v4 via `@tailwindcss/postcss` (no `tailwind.config.*` — v4 is configured through `postcss.config.mjs` and CSS in `src/app/globals.css`).
- **Fonts**: Geist Sans/Mono loaded via `next/font/google` in `src/app/layout.tsx`, exposed as CSS variables (`--font-geist-sans`, `--font-geist-mono`).
- **`motion`** (Framer Motion's successor package) is a dependency but not yet used anywhere.

## Workflow

- Always run `npm run build` locally before pushing. It uses the same webpack
  path as production and catches deploy failures in seconds instead of minutes.
- Push to main triggers a Hostinger rebuild. Builds are slow (webpack + WASM),
  budget several minutes.
- There is no rollback button in hPanel. To undo a bad deploy, `git revert` and
  push.
- Environment variables must be set in the hPanel dashboard, not only in
  .env.local. The two lists are maintained manually and drift is the most common
  cause of production-only breakage.
