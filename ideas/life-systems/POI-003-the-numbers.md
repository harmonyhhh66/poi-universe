# POI-003 — The Numbers

- **ID:** POI-003
- **Category:** LIFE SYSTEMS
- **Status:** IDEA
- **Kind:** 日常任务 App
- **POI Inspiration:** 每天出现的 Numbers、Relevant / Irrelevant 分类；现代任务管理机制为原创延伸。
- **One-line concept:** 每天只显示 1–3 个值得优先关注的任务，而不是无限长的待办列表。
- **Deliverable:** 可安装 PWA / Web App（后续可转移动端）。
- **Why I want to build it:** 把 POI 中「一个号码」的仪式感带进日常生活，同时减少任务焦虑。
- **MVP:** 手动录入任务、设置截止时间与重要度、生成当日 1–3 个重点项、完成/延后与历史记录。
- **Not in v1:** 不自动读取通讯录、邮件或日历；不加入复杂预测算法和社交功能。
- **Possible tech:** React 或原生 Web Components + 本地存储/IndexedDB；按需增加云同步。
- **Privacy / safety / rights:** 本地优先；任务可以隐藏；优先级建议不冒充确定的未来预测。
- **Related:** POI-004、If-Then-Else 决策 App（未编号）。

## How it works

1. 用户创建待办与个人重要度。
2. 每天打开应用，系统根据透明规则推荐 1–3 项 `RELEVANT NUMBERS`。
3. 点开编号才看详细任务；可完成、暂缓或手动替换。
4. 日终生成简短、非评判性的回顾。

## Definition of done

- [ ] 本地创建、编辑、删除、完成任务
- [ ] 重点列表来源可解释、可人工更换
- [ ] 手机与电脑上均易用

## Future sparks

任务与个人记忆关联；E-ink 每日任务屏；离线优先同步。
