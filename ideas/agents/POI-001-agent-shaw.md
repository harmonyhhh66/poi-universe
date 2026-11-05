# POI-001 — Agent Shaw

- **ID:** POI-001
- **Category:** AGENTS
- **Status:** IDEA
- **Kind:** 可安装的开发者工具 / 本地操作 AI Agent
- **POI Inspiration:** Agent Shaw 这个双关（剧中 Agent Shaw × AI Agent），以及 Shaw 简洁、执行导向的气质；具体功能均为原创设计。
- **One-line concept:** 一个不爱废话、但执行前会提供预览，执行后能验证结果的本地助手。
- **Deliverable:** 可在个人电脑运行的 CLI 或轻量桌面 App + 说明文档 + 示例任务。
- **Why I want to build it:** 把喜爱的角色个性真正转化成 Agent 交互设计，而不只是贴皮肤。
- **MVP:** 在用户选定的测试文件夹中，接受自然语言批量重命名/整理请求，生成变更预览，用户明确确认后执行，并输出变更日志。
- **Not in v1:** 不做全局电脑控制；不自动删除；不发送邮件；不做后台持续监控；不做多 Agent 编排。
- **Possible tech:** Python + Typer/Rich；LLM API 或本地模型；后续可用 Tauri 包装。
- **Privacy / safety / rights:** 文件范围白名单、默认 dry-run、操作确认、日志和尽可能可撤销；角色风格用原创语言，不复制演员声音。
- **Related:** POI-002（长期记忆）、POI-007（语音）、Root Planner（未编号）。

## How it works

1. 用户指定一个测试文件夹并输入目标，如「把这里的图片按日期重新命名」。
2. Agent 读取**授权范围内**的文件元信息并生成 `old → new` 操作清单。
3. 用户在预览中批准或取消；冲突文件名必须先解决。
4. 执行后逐项验证，并输出结果与可恢复记录。

## Definition of done

- [ ] 3 种测试样例的变更预览准确
- [ ] 未确认时不改变文件
- [ ] 失败时说明哪些操作完成、哪些未完成
- [ ] README 有本地运行与安全边界说明

## Future sparks

- VS Code 任务执行插件；测试失败诊断；与 Root Planner 协作。
- 人机交互实验：极简反馈是否减少认知负担？（需单独设计用户研究。）
