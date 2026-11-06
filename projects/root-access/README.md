# ROOT ACCESS — MISSION 001

> A tiny, unofficial Person of Interest-inspired terminal toy.

**Status:** playable v0.1.0 · **Runtime:** plain HTML + CSS + JavaScript · **Dependencies:** none

## Run locally

Open `index.html` in a browser. That's it. No build command, account, API key, or server is required.

Alternatively, from this folder: `python3 -m http.server 8000` and open <http://localhost:8000>.

## Commands

| Command | Function |
| --- | --- |
| `help` | List the five public commands. |
| `whoami` | Show identity information in the selected voice. |
| `status` | Show simulated system status. |
| `mode machine`, `mode root`, `mode shaw` | Switch response styles. |
| `clear` | Clear terminal transcript. |

Use ↑ / ↓ for command history and Enter to submit. Quick-command buttons also work on touch devices.

### Classified

There is one undocumented POI/Shoot Easter egg; explore the interface or the code if you're curious. It is fictional and does not open a network connection.

## Deploy on GitHub Pages

**Option A: within `poi-universe` (recommended for the existing repo)**

1. Copy the `projects/root-access/` directory into your existing `poi-universe` repository.
2. Commit and push it to the repository default branch.
3. GitHub repository → **Settings → Pages** → Build and deployment → Deploy from a branch → choose default branch and `/ (root)` → Save.
4. Your demo URL is normally `https://YOUR_USERNAME.github.io/poi-universe/projects/root-access/` (replace `YOUR_USERNAME` with your actual GitHub handle).

If Pages is already enabled for that repository, steps 3–4 aren't needed. Check the Pages settings for the actual URL; publication may not be instantaneous.

**Option B: standalone repository**

Place these 4 files at repository root, enable Pages from the default branch `/ (root)`, and use the URL shown by GitHub.

## What it does *not* do

- No AI API calls, server calls, file reads, analytics, tracking, shell execution, or surveillance.
- Does not remember anything between refreshes.
- Does not reproduce copyrighted visuals, actor voices, or official assets.
- Persona responses and narrative text are original, unofficial fan-made copy.

## Ideas for v0.2

- More accessible exploration paths and translated copy.
- A story-driven "case file" mode.
- A separate SVG badge for linking to this demo from GitHub Profile.

## Relation to POI Universe

- Shared theme: `../../design/` (colors aligned with IRRELEVANT v0.1).
- Scope: a standalone micro-project; *not* Agent Shaw's future real tool-execution system.
