# Hermes × Viktor Reskin Prototype

Static HTML/CSS prototype exploring a Viktor-style visual reskin over Hermes
Agent's existing dashboard structure. No build step — open any page in
`prototype/` directly in a browser.

## Scope (locked)

Six screens only, per the agreed prototype scope:

1. `dashboard.html` — new home screen (metrics + onboarding)
2. `chat.html` — reskinned chat
3. `sessions.html`
4. `tasks.html` — reskin of Hermes's Cron screen
5. `skills.html`
6. `integrations.html` — merged Channels + MCP + Plugins catalog

Out of scope: Logs, Webhooks, Pairing, System, Documentation, Team, Billing,
Spaces, Email, Phone.

## Design tokens

`prototype/assets/tokens.css` merges:
- **Hermes**: real structure/data (sessions, skills, cron, channels, MCP,
  plugins), semantic ok/warn/error intent from `hermes_cli/skin_engine.py`.
- **Viktor**: real visual tokens pulled from a crawled production CSS build —
  zinc-900/zinc-50 dark palette, `#D1C2F4` lavender highlight accent, Inter +
  Roboto Mono typefaces, radius scale, 760px chat feed width.

`prototype/assets/app.css` is the shared layout/component stylesheet consumed
by every page.

## Not yet wired up

This is visual/UX only — no live data, no backend calls. Next step after
scope sign-off is wiring these screens to Hermes's real dashboard APIs.
