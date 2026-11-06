# Test strategy

- `npm run check`: validates generated design tokens, local HTML assets/links, JavaScript syntax, terminal command logic and homepage 4A control.
- Uses Node 22 built-in `node:test` + `vm`; no npm dependencies and no runtime network requests.
- The small fake DOM exercises source JS but **is not a real browser**. Run the manual smoke checklist in `MISSION-003.md` for browser/mobile/accessibility checks.
- GitHub Actions runs the same commands for pushes to `main`, pull requests, and manual dispatch. The workflow has read-only repository permissions.
