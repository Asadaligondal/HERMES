# Hermes Web

Next.js (App Router) + NextAuth, extending the visual design from `../prototype/`
into a real app.

## Auth — dev-only stub, no DB
`authorize()` in `src/lib/auth.ts` accepts any email/password typed and signs
you in; nothing is persisted. Postgres/Prisma were removed entirely (not just
disconnected) since nothing used them — see git history before commit
`6688b10` if the real DB-backed version is needed again later.

## Local setup
```bash
npm install
npm run dev
```
Open http://localhost:3000 — redirects to `/signup` (via `/login`) if not
authenticated. Type anything and submit.

## Deploying (Vercel)
- **Root Directory** must be `web` (the repo also has `prototype/` at the top level)
- Env vars: `NEXTAUTH_SECRET` (generate fresh, don't reuse the local one) and
  `NEXTAUTH_URL` (set after the first deploy once you know the assigned URL)
- No `DATABASE_URL` needed — nothing touches a database right now
- `engines.node: "22.x"` is pinned in `package.json`; Next 16/React 19/TS 7 are
  new enough that Vercel's default Node version may not match otherwise

## Pages
Dashboard, Chat, Sessions, Files, Tasks, Skills, Integrations, Config, Keys —
all real routes with static/sample content, styled consistently via
`src/app/globals.css`. None are wired to a real backend yet.
