# DEPLOY / Safe update of the existing GitHub repository

**Target repository only:** `https://github.com/harmonyhhh66/poi-universe`.

**Do not touch:** `https://github.com/harmonyhhh66/harmonyhhh66` (the independent, non-POI personal Profile).

This audited package is a **source snapshot**, not a remote Git clone. Do not unzip on top of your existing `.git` and force push. Keep history and personal modifications.

## 1. Make a safety copy

On GitHub, you can download the existing repository as a ZIP from **Code → Download ZIP**. Save this separately before updating. Keep a local backup of any uncommitted work.

## 2. Fresh clone and merge

Open Terminal inside an empty parent folder:

```bash
git clone https://github.com/harmonyhhh66/poi-universe.git
cd poi-universe
git status
```

Open the downloaded audited ZIP and **copy the contents *inside* `poi-universe/` into this cloned repo**, merging directories and replacing matching files. Do **not** copy an extra outer `poi-universe/` folder. Do **not** delete `.git/`.

## 3. Remove known obsolete paths safely

This audited layout replaces legacy `github-profile/` with archived POI artwork under `design/archived-profile-art/`. The old folder is intentionally excluded because it used to contain instructions that would overwrite your now-neutral GitHub personal Profile. If it still exists in your cloned checkout, remove **only** the known legacy folder:

```bash
git rm -r --ignore-unmatch github-profile
```

The old mission handoff documents are superseded by `AUDIT.md` and `DEPLOY.md`. If those exact files still exist, you may remove them after reviewing `git status`:

```bash
git rm --ignore-unmatch MISSION-001.md MISSION-002.md MISSION-002.5.md
```

An older Chinese recovery guide `从这里开始-完整恢复指南.md` is also obsolete; you can delete it via GitHub or `git rm -- '从这里开始-完整恢复指南.md'`.

**Do not run `git clean -fd`, `git reset --hard` or `git push --force`.** They are unnecessary here.

## 4. Review, commit, push

```bash
git status
# Review filenames before committing. They should be this project's files only.
git add -A
git diff --cached --stat
git commit -m "docs: audit and unify POI Universe archive"
git push origin main
```

If there is nothing to commit, stop; no extra push is necessary. If `git push` is rejected, do not force-push; ask for help with the error.

## 5. Verify on GitHub

1. [`poi-universe` Code tab](https://github.com/harmonyhhh66/poi-universe): check root-level `index.html` and `README.md`.
2. **Settings → Pages**: `Deploy from a branch` → `main` → `/ (root)`.
3. **Actions**: latest Pages deployment should be green.
4. [Homepage](https://harmonyhhh66.github.io/poi-universe/): navigation to ROOT ACCESS works.
5. [ROOT ACCESS](https://harmonyhhh66.github.io/poi-universe/projects/root-access/): headline reads `YOU ARE BEING WATCHED.`; try `help`, `mode shaw`, `connect 4a`.
6. Confirm your [general personal Profile](https://github.com/harmonyhhh66) is **unchanged**.

If the page is cached, hard-refresh after a successful deployment. No custom domain or new Pages project is needed.
