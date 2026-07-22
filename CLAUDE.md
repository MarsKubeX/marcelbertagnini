# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Marcel Bertagnini (Vue 3 + Vite + TypeScript SPA), deployed to GitHub Pages.

The project is mid-redesign. **Read `PLAN.md` before starting any non-trivial work** — it tracks the agreed technical/design/content changes (moving off Hygraph to local structured content + a Markdown blog) and is the source of truth for what's already decided vs. still open. Update it as work progresses instead of letting decisions live only in chat history.

## Commands

```sh
npm run dev          # start Vite dev server
npm run build         # type-check (vue-tsc) + vite build, output to dist/
npm run preview       # preview the production build locally
npm run test:unit     # run Vitest once (add --watch to keep it running)
npm run lint          # eslint --fix over .vue/.js/.ts files
npm run format         # prettier --write src/
```

Run a single test file: `npx vitest run src/components/__tests__/HelloWorld.spec.ts` (or `npx vitest <pattern>` for watch mode).

There is no separate `type-check` script exposed standalone; it runs as part of `npm run build` (`vue-tsc --build --force`).

## Architecture

- **Routing**: `vue-router` with **hash history** (`src/router/index.ts`) — this matters because GitHub Pages serves a static SPA with no server-side rewrite rules, so paths are `/#/route`, not `/route`.
- **Data source**: content currently comes from **Hygraph** (headless CMS) via GraphQL. Each list component owns its own query directly (no shared data layer): `ExperienceList.vue`, `SkillList.vue`, and `ProjectsView.vue` each define a `gql` query inline and call `useQuery` from `@vue/apollo-composable`. The Hygraph endpoint is configured in `apollo.config.js`. `ContactList.vue` is the exception — its links are hardcoded, not fetched.
  - This is being replaced per `PLAN.md`: structured data (profile/experience/skills/projects) moves to local typed TS/JSON, and a new blog section is added as Markdown files with frontmatter, loaded via `import.meta.glob`. When implementing this, remove the per-component GraphQL query pattern rather than leaving it half-migrated.
- **State management**: Pinia is installed but unused in practice (only the scaffold-default `stores/counter.ts` exists, referenced nowhere). Don't assume Pinia is the state pattern for new features unless you're deliberately introducing it.
- **Path alias**: `@` maps to `src/` (set in both `vite.config.ts` and the TS configs) — use it instead of relative `../../` imports.
- **Styling**: no CSS framework; components use `<style scoped>` with plain CSS (including nested selectors via Vue's native nesting support) and manual `@media` breakpoints (`768px`, `1024px` show up repeatedly). Global tokens (colors like `--color-footer`) live in `src/assets/base.css` / `main.css`.
- **Deploy**: `.github/workflows/jekyll-gh-pages.yml` builds with `npm run build` and publishes `dist/` to GitHub Pages via `actions/deploy-pages`. The filename says "jekyll" but no Jekyll is involved — it's a plain static build. `vite.config.ts`'s `base` is hardcoded to the GitHub Pages URL, so builds are not portable to another host without changing it (relevant if the Raspberry Pi hosting option discussed in `PLAN.md` is ever picked up instead).
