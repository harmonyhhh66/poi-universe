# POI UNIVERSE 🟢

> **Building irrelevant things for reasons that matter.**
>
> `THE LIBRARY IS ONLINE.`

An unofficial, independent creative technology playground inspired by *Person of Interest*: interactive art, fictional terminals, playful utilities, AI-agent ideas and reproducible experiments.

**This repository is POI-specific.** The author's general research/academic GitHub Profile lives independently at [harmonyhhh66](https://github.com/harmonyhhh66). These two spaces do not need the same visual identity.

## Live interfaces

| Experience | What it is | Status |
|---|---|---|
| [POI Universe — The Front Door](https://harmonyhhh66.github.io/poi-universe/) | Static project homepage | DEPLOYED · MISSION 002 |
| [ROOT ACCESS](https://harmonyhhh66.github.io/poi-universe/projects/root-access/) | Fictional five-command terminal with a hidden 4A channel | RELEASED v0.1 · MISSION 001 |

*The homepage and ROOT ACCESS were verified by user screenshots after MISSION 002.7. MISSION 003 updates require a new deployment check.*

## Browse the archive

- [Idea Cards index](ideas/INDEX.md) · Eight detailed ideas across six collections
- [Idea Card template](templates/idea-card.md) · Standard template for future sparks
- [Actual projects and status](projects/README.md) · Only code and published artifacts
- [IRRELEVANT design guidelines](design/guidelines.md) and [tokens](design/tokens.json)
- [Archive workflow](WORKFLOW.md) · Brainstorm → Archive → Build
- [Audit report](AUDIT.md) · What was checked, fixed and left unverified
- [Deployment and recovery guide](DEPLOY.md) · Safe update of the existing repository
- [Roadmap](ROADMAP.md) · Optional next missions, no deadlines
- [MISSION 003 quality guide](MISSION-003.md) · Tests, token workflow and manual browser checks

## Idea catalog

| ID | Idea | Category | State |
|---|---|---|---|
| [POI-001](ideas/agents/POI-001-agent-shaw.md) | Agent Shaw | AGENTS | IDEA |
| [POI-002](ideas/agents/POI-002-machine-core.md) | The Machine Core | AGENTS | IDEA |
| [POI-003](ideas/life-systems/POI-003-the-numbers.md) | The Numbers | LIFE SYSTEMS | IDEA |
| [POI-004](ideas/life-systems/POI-004-midnight-reset.md) | Midnight Reset | LIFE SYSTEMS | IDEA |
| [POI-005](ideas/research/POI-005-forgetting-machine.md) | Forgetting Machine | EXPERIMENTS | IDEA |
| [POI-006](ideas/art-games/POI-006-no-matter-how-many-times.md) | No Matter How Many Times | ART & GAMES | IDEA |
| [POI-007](ideas/ambient/POI-007-analog-interface.md) | Analog Interface | AMBIENT | IDEA |
| [POI-008](ideas/identity/POI-008-irrelevant.md) | IRRELEVANT | IDENTITY | EXPLORING |

`ROOT ACCESS` is a **released mini-project** tracked under [`projects/`](projects/); it is *not* a ninth card automatically. The next permanent idea number is `POI-009`.

## Repository structure

```text
poi-universe/
├── index.html, site.css, site.js, favicon.svg  # static homepage
├── projects/root-access/                        # interactive terminal
├── ideas/                                      # 8 numbered idea cards
├── templates/idea-card.md
├── design/                                      # visual tokens and archived art
├── README.md, WORKFLOW.md, AUDIT.md
├── DEPLOY.md, ROADMAP.md
└── .gitignore
```

## Run locally

Open `index.html` and `projects/root-access/index.html` in a browser. The site itself needs no dependencies, AI API, sign-in or database. For developer checks, install Node.js 22+ and run `npm run check`. To change theme tokens run `npm run tokens:build`.

## Principles

1. Every idea deserves a record; not every idea needs a deadline.
2. Archive ideas separately from implemented projects.
3. Keep the personal GitHub identity independent from POI-themed experiments.
4. Preserve consent, reversibility, privacy and accessibility if features become real.
5. Label original fan-made copy clearly; do not portray copyrighted assets as official.

*Unofficial fan-made work; not affiliated with the TV series or its rightsholders. No genuine surveillance features.*
