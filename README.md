# POI UNIVERSE

> **Building irrelevant things for reasons that matter.**
>
> `IDENTITY CONFIRMED. / THE LIBRARY IS ONLINE.`

一个由《Person of Interest》（《疑犯追踪》）启发的个人 **Creative Technology Lab**。这里收集值得珍惜的灵感，也慢慢制造有用的工具、AI Agent、研究实验、游戏、艺术作品与实体小装置。

**原则：先喜欢，再动手；先做小，再做大。** 这是非官方粉丝创作计划，与剧集版权方无关联。项目中使用的原创界面文案不是剧集原台词；如需使用剧照、Logo、对白或演员声音，请先确认相应权利和许可。

## LIVE TERMINALS

- **THE FRONT DOOR** — [POI Universe homepage](https://harmonyhhh66.github.io/poi-universe/) (MISSION 002).
- **ROOT ACCESS** — [interactive terminal](https://harmonyhhh66.github.io/poi-universe/projects/root-access/) (MISSION 001).
- **GitHub Profile** — See [`github-profile/SETUP.md`](github-profile/SETUP.md) for the separate profile repository setup.
- **Latest handoff** — [`MISSION-002.md`](MISSION-002.md).

## START HERE

- **找点子**：打开 [`ideas/INDEX.md`](ideas/INDEX.md)，这里有首批 8 张已整理的 Idea Cards。
- **收录新想法**：复制 [`templates/idea-card.md`](templates/idea-card.md)，为它分配一个新的 `POI-XXX` 编号，放入对应 `ideas/` 分类目录。
- **设计界面**：阅读 [`design/guidelines.md`](design/guidelines.md)，颜色等基础 token 在 [`design/tokens.json`](design/tokens.json)。
- **查看作品**：[`projects/README.md`](projects/README.md) 记录真正动手的项目及发布状态。
- **明确怎么维护**：[`WORKFLOW.md`](WORKFLOW.md) 描述从脑洞到可交付作品的轻量流程。

## SIX ARCHIVES

| 系列 | 收录什么 | 目录 |
|---|---|---|
| IDENTITY | GitHub、个人站点、主题、视觉语言 | [`ideas/identity/`](ideas/identity/) |
| AGENTS | AI Agent、开发者工具、执行器 | [`ideas/agents/`](ideas/agents/) |
| LIFE SYSTEMS | 待办、个人知识、记忆与决策 App | [`ideas/life-systems/`](ideas/life-systems/) |
| EXPERIMENTS | 可复现的 AI 研究与论文候选方向 | [`ideas/research/`](ideas/research/) |
| ART & GAMES | Shoot 数字艺术、互动叙事、游戏 | [`ideas/art-games/`](ideas/art-games/) |
| AMBIENT | 语音、耳机、桌面硬件与环境计算 | [`ideas/ambient/`](ideas/ambient/) |

## FIRST EIGHT NUMBERS

| ID | 项目 | 最终交付 | 状态 |
|---|---|---|---|
| [POI-001](ideas/agents/POI-001-agent-shaw.md) | Agent Shaw | 有安全确认与操作预览的本地桌面/CLI Agent | IDEA |
| [POI-002](ideas/agents/POI-002-machine-core.md) | The Machine Core | 可查看、编辑、删除的个人 AI 记忆服务 | IDEA |
| [POI-003](ideas/life-systems/POI-003-the-numbers.md) | The Numbers | 每天聚焦 1–3 件事的任务 App | IDEA |
| [POI-004](ideas/life-systems/POI-004-midnight-reset.md) | Midnight Reset | 每天保存少量有意义记忆的 AI 日记 | IDEA |
| [POI-005](ideas/research/POI-005-forgetting-machine.md) | Forgetting Machine | 记忆策略比较实验与报告 | IDEA |
| [POI-006](ideas/art-games/POI-006-no-matter-how-many-times.md) | No Matter How Many Times | 双光点互动数字艺术网页 | IDEA |
| [POI-007](ideas/ambient/POI-007-analog-interface.md) | Analog Interface | 由用户主动唤醒的语音助手 | IDEA |
| [POI-008](ideas/identity/POI-008-irrelevant.md) | IRRELEVANT | 设计 Tokens、组件规范与三端主题 | EXPLORING |

## MISSION CONTROL

- **MISSION 000 — INITIALIZE THE ARCHIVE:** initial structure, Idea Cards and design tokens — complete.
- **MISSION 001 — ROOT ACCESS:** playable terminal with five documented commands and hidden `connect 4a` — complete.
- **MISSION 002 — THE FRONT DOOR:** public homepage, GitHub Profile README template, and `WATCHED.` headline — ready for deployment.
- **Next:** refine the public identity, then choose a small standalone project.

## QUICK START

```bash
unzip poi-universe.zip
cd poi-universe
git init
git add .
git commit -m "chore: initialize the library"
# 在 GitHub 创建空仓库后：
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/poi-universe.git
git push -u origin main
```

> 推送前，请将上面的 `<YOUR_USERNAME>` 替换为自己的 GitHub 用户名。项目目前只有 Markdown 与 JSON，不需要安装依赖，也没有执行脚本。

## WHAT WE CARE ABOUT

1. **Every idea deserves a record. Not every idea needs a deadline.**
2. 明确区分「灵感 / 在做 / 已发布」，避免灵感库变任务负担。
3. 区分**真实剧情设定**与**原创隐喻**；不能核对的细节标记为待确认。
4. 先保证可用性、隐私与权限，再考虑电影感。隐藏的是彩蛋，不是重要的操作控制。
5. 小作品可以独立完成，不必为了共享一个世界观而强行耦合。

---

`EVERYONE IS RELEVANT TO SOMEONE.`
