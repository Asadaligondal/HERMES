# Hermes Web — Ticket 1: Auth & Workspace Foundation

Next.js (App Router) + Postgres + Prisma + NextAuth, extending the visual design
from `../prototype/` into a real app.

## What's implemented (Ticket 1 only)
- Signup & login screens (NextAuth Credentials provider, JWT sessions)
- **Dev-only stub auth: no DB check right now.** Typing any email signs you in —
  `authorize()` in `src/lib/auth.ts` just returns a user for whatever was typed,
  no Postgres/Docker required. The `Prisma`/`bcrypt`-backed real version is still
  in git history when the DB comes back.
- Protected `(app)` layout — redirects to `/login` if not signed in
- Real `<Sidebar>` component (ported from the static prototype) with active-route
  highlighting and a working account menu (a derived workspace name, sign out)
- `/dashboard` is a placeholder — metrics, the setup checklist, and the Academy
  carousel are Ticket 2

## Local setup
```bash
npm install
npm run dev
```
Then open http://localhost:3000 — it redirects to `/signup` (via `/login`) if
you're not authenticated yet. Type anything and submit; there's no real
validation and nothing is persisted (no DB running).

**Postgres/Docker are not wired up right now** by request — `docker-compose.yml`
was removed and nothing at runtime touches Postgres. `prisma/schema.prisma` is
kept as-is for when Ticket 1's real DB-backed auth comes back.

## Only nav pages that exist right now
`/dashboard` is the only real page — `Chat`, `Sessions`, `Tasks`, `Skills`, and
`Integrations` in the sidebar link to routes that don't exist yet (Tickets 2-7).
