# MISSION 003 — CONTINGENCY PROTOCOL

**Scope:** static quality checks, shared visual tokens, CI. No AI API, telemetry or surveillance added.

## Locally run (Node.js 22+)

```bash
node --version
npm run check
```

If you edit `design/tokens.json`, run `npm run tokens:build` and commit the regenerated `design/tokens.css`. Both pages import the generated file; page-specific accents remain local.

## Smoke checklist after GitHub Pages deploy

1. Open `/poi-universe/`; verify homepage displays and "INSPECT SIGNAL" toggles 4A twice, including keyboard Enter/Space.
2. Follow `ENTER ROOT ACCESS` and `← THE LIBRARY` links in both directions.
3. In ROOT ACCESS, enter `help`, `whoami`, `mode shaw`, `status`, `connect 4a`, `clear` and an invalid command; check expected responses.
4. Check ArrowUp/ArrowDown command history and the COPY LOG button (clipboard may be blocked by browser permissions).
5. Test narrow/mobile viewport and keyboard focus. Check browser settings with reduced motion enabled.
6. On GitHub, open Actions → Contingency Protocol CI and confirm green; also check Pages deployment status separately. CI success **does not** guarantee Pages publishing succeeded.

## Boundaries

- Automated tests use a tiny simulated DOM, not a full browser. No screenshot, accessibility audit, or cross-browser automation is claimed.
- `npm run check` does not require running GitHub Pages or connecting to a server.
- `design/tokens.css` is generated and should **not** be edited by hand.
- CI runs for pushes and PRs and has `contents: read` permissions only. Nothing is automatically deployed by this workflow.
