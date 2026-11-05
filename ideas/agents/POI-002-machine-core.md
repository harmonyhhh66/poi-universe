# POI-002 — The Machine Core

- **ID:** POI-002
- **Category:** AGENTS
- **Status:** IDEA
- **Kind:** 个人 AI 服务 / 开发基础设施
- **POI Inspiration:** The Machine 的记忆、身份连续性、约束与监督；功能为原创现代实现。
- **One-line concept:** 为不同个人 Agent 提供一套明确授权、可解释、可删除的长期记忆层。
- **Deliverable:** 本地可运行的记忆服务（CLI + API）与最小管理页面。
- **Why I want to build it:** 想把「Machine 记住了什么」变成可检查、可控制的真实系统机制。
- **MVP:** 手动新增记忆、按关键词搜索、查看来源、编辑与删除；本地持久化。
- **Not in v1:** 不自动抓取全电脑行为；不做人脸识别；不做不可见的持久记忆；不自动替用户判断人生重要性。
- **Possible tech:** Python + SQLite + FastAPI（API 可延后）；文本检索起步，向量检索按需增加。
- **Privacy / safety / rights:** 本地优先；敏感信息显式批准；提供导出、删除与数据结构文档；不要声称 AI 真正拥有意识。
- **Related:** POI-001、POI-004、POI-005。

## How it works

1. 用户主动保存一个记忆片段、来源、标签和可选过期时间。
2. 系统记录创建/修改时间与来源，提供列表和搜索。
3. 接入其他 Agent 时，由用户决定哪些记忆可读取。
4. 删除和修改即时生效；可检查底层数据。

## Definition of done

- [ ] 新增/检索/修改/删除完整闭环
- [ ] 每条记忆有来源和可追溯 ID
- [ ] 有数据导出说明与权限边界

## Future sparks

摘要记忆、冲突检测、版本化、不同 Agent 的分支记忆与合并。
