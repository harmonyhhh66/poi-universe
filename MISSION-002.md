# MISSION 002 — THE FRONT DOOR

**Status:** DELIVERED AS FILES · publishing requires a Git push and GitHub Profile README setup.

## What changed

- `projects/root-access/index.html`: headline changed from `OBSERVED.` to `WATCHED.`; added a link back to THE LIBRARY.
- `index.html`, `site.css`, `site.js`, `favicon.svg`: new site homepage at the root of `poi-universe` for GitHub Pages.
- `github-profile/README.md`: separate, ready-to-copy GitHub Profile README for `harmonyhhh66`.
- `github-profile/SETUP.md`: exact instructions to create/use the **special username repository**.
- Updated project and repository navigation.

## Publish the website

Merge these files into the existing local `poi-universe` checkout, **do not nest `poi-universe/poi-universe`**. Then from the `poi-universe` folder:

```bash
git status
git add .
git commit -m "feat: add Machine front door and watched headline"
git push
```

GitHub Pages source should stay `main` / `/ (root)`.

- Website: `https://harmonyhhh66.github.io/poi-universe/`
- Terminal: `https://harmonyhhh66.github.io/poi-universe/projects/root-access/`

These addresses are expected after publishing; they cannot be verified from the local ZIP alone.

## Publish the GitHub profile

Read `github-profile/SETUP.md`. This requires a **separate repository named `harmonyhhh66`**; the `github-profile/README.md` inside `poi-universe` is only the source/template and will not automatically show on your personal GitHub profile.

## No hidden monitoring

The page uses static HTML/CSS/JS, no analytics, camera, microphone, logins, API keys or network requests from its scripts. Links to GitHub and Pages behave as normal links.
