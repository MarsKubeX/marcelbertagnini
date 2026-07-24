# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio site for Marcel Bertagnini (Vue 3 + Vite + TypeScript SPA), deployed to GitHub Pages.

The project is mid-redesign. **Read `PLAN.md` before starting any non-trivial work** — it tracks the agreed technical/design/content changes and is the source of truth for what's already decided vs. still open (real experience/project/blog content is still placeholder, see `PLAN.md` part 3). Update it as work progresses instead of letting decisions live only in chat history. `PLAN.md` is gitignored (local working notes), so don't expect it to exist in a fresh clone.

## Commands

```sh
npm run dev          # start Vite dev server
npm run build         # type-check (vue-tsc) + vite build, output to dist/
npm run preview       # preview the production build locally
npm run test:unit     # run Vitest once (add --watch to keep it running)
npm run lint          # eslint --fix over .vue/.ts files (flat config, eslint.config.js)
npm run format         # prettier --write src/
```

Run a single test file: `npx vitest run <path>` (or `npx vitest <pattern>` for watch mode). There's currently no test suite covering real components — the old scaffold example test was removed as obsolete.

There is no separate `type-check` script exposed standalone; it runs as part of `npm run build` (`vue-tsc --build --force`).

Node version is pinned via `.nvmrc` / `engines.node` (Active LTS) — use `nvm use` before installing/running.

## Architecture

- **Mostly a single-page landing, plus one detail route**: the router (`src/router/index.ts`) has two routes — `/` renders `HomeView.vue`, which stacks `HeroSection`, `ExperienceSection`, `ProjectsSection`, `BlogSection`; `/blog/:slug` (lazy-loaded) renders `BlogPostView.vue` for an individual post. In-page navigation ("Experience", "Projects", "Blog" in `NavbarMenu.vue`) scrolls to `id`-anchored sections rather than changing routes. Because the router uses hash-based history (`createWebHistory('#')`, needed since GitHub Pages has no server-side rewrite rules) *and* sections use their own `#id` anchors, a plain `RouterLink to="/#blog"` cannot both navigate and scroll across routes. Use the shared `goToSection(router, route, id)` helper in `src/composables/useScrollTo.ts` instead (it routes to `/` first if needed, waits a tick, then scrolls) — every cross-page "back to a landing section" link should go through it, not a raw anchor.
- **Content layer**: structured content lives in typed TS files under `src/content/` (`experience.ts`, `projects.ts`, `social.ts`), imported directly by components — no CMS, no GraphQL. There is **no Hygraph/Apollo anymore** (removed along with Pinia, which was unused). Blog posts are Markdown files with frontmatter under `src/content/blog/*.md`, loaded eagerly at build time via `import.meta.glob` in `src/content/blog.ts`; frontmatter is parsed with a small hand-rolled regex parser (not `gray-matter`, to avoid pulling Node-oriented polyfills into the browser bundle) and the body is rendered with `markdown-it`. Current experience/project/blog content is placeholder — see `PLAN.md` part 3.
- **Styling: Tailwind CSS v4** (`@tailwindcss/vite` plugin in `vite.config.ts`), not plain scoped CSS — this replaced the project's original no-framework convention when the visual redesign landed. Design tokens (colors, font families/sizes) are defined via Tailwind's `@theme` block in `src/assets/base.css`; spacing and border-radius intentionally use Tailwind's default scale rather than custom tokens. Dark theme only, no light/dark toggle. Shared visual primitives (`glass-panel`, `glass-panel-heavy`, `mesh-gradient`, `text-gradient`) are defined once in `base.css` under `@layer utilities` and composed via Tailwind classes in templates — prefer that over new scoped `<style>` blocks for anything matching the existing glass/gradient look.
- **Path alias**: `@` maps to `src/` (set in both `vite.config.ts` and the TS configs) — use it instead of relative `../../` imports.
- **Deploy**: `.github/workflows/jekyll-gh-pages.yml` builds with `npm run build` and publishes `dist/` to GitHub Pages via `actions/deploy-pages`. The filename says "jekyll" but no Jekyll is involved — it's a plain static build. `vite.config.ts`'s `base` is hardcoded to the GitHub Pages URL, so builds are not portable to another host without changing it.
