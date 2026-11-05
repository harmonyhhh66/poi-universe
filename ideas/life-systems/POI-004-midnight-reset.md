# POI-004 — Midnight Reset

- **ID:** POI-004
- **Category:** LIFE SYSTEMS
- **Status:** IDEA
- **Kind:** AI 日记 / 记忆 App
- **POI Inspiration:** Machine 的记忆限制与身份连续性；每日摘要机制为原创产品设计。
- **One-line concept:** 每天从日记中提取少量值得保留的记忆，而不是无限累积所有记录。
- **Deliverable:** 本地优先的日记 Web App（可选 AI 摘要）。
- **Why I want to build it:** 我们留下什么，往往比记录多少更有意义。
- **MVP:** 每天写一条日记、生成/手写不超过 3 条记忆胶囊、手动确认后存档、按日期回顾。
- **Not in v1:** 不做不可逆自动删除；不自动收集设备活动；不做心理健康诊断。
- **Possible tech:** PWA + IndexedDB/SQLite；可选本地模型或 LLM API 生成摘要。
- **Privacy / safety / rights:** **删除必须明确且可理解**；摘要有误可编辑；本地数据需提供备份/导出；如接外部 API，明确提示会发送哪些文本。
- **Related:** POI-002、POI-005。

## How it works

1. 用户写下当天内容。
2. 系统提议最多 3 条值得保留的片段（第一版可完全手写）。
3. 用户审阅、改写和确认。
4. 第二天查看胶囊与时间线；原文是否删除由用户自行决定。

## Definition of done

- [ ] 能创建与检索每日记录和记忆胶囊
- [ ] AI 摘要是可选的、可纠错的
- [ ] 数据可导出，删除前有明确确认

## Future sparks

记忆预算滑块；不同摘要策略；写给未来的自己的讯息。
