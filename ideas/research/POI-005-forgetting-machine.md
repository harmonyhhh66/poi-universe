# POI-005 — Forgetting Machine

- **ID:** POI-005
- **Category:** EXPERIMENTS
- **Status:** IDEA
- **Kind:** 可复现实验 / 技术报告 / 潜在论文方向
- **POI Inspiration:** Machine 的记忆重置与在限制下学习的困境。
- **One-line concept:** 对比无记忆、压缩摘要记忆和完整检索记忆对跨会话 AI Agent 任务表现的影响。
- **Deliverable:** 开源实验脚本、合成测试数据、指标表、图表和技术报告；正式论文需另行文献综述和创新性验证。
- **Why I want to build it:** 把一个情绪性的剧情命题转化成能测量和重复的工程问题。
- **MVP:** 设计 20–30 组无个人隐私的合成多轮任务，固定模型与提示词，比较三种记忆策略的事实回忆正确率和成本。
- **Not in v1:** 不声称测量 AI 意识、主观感受或真正人格；不直接以几次对话就作结论。
- **Possible tech:** Python、JSONL/SQLite、LLM API、Pandas/Matplotlib（按需）。
- **Privacy / safety / rights:** 仅用合成数据；固定评估标准；保存配置、模型版本和随机种子（如适用），记录运行成本。
- **Related:** POI-002、POI-004。

## Research question

在相同模型、任务与上下文预算条件下，**哪些记忆保留策略**可以提高跨会话关键事实准确率，同时减少错误记忆与推理成本？

## Suggested setup

- **Baselines**：RESET（无历史）；SUMMARY（短摘要）；RETRIEVAL（完整历史按需检索）。
- **Dataset**：带有可验证答案、干扰信息和跨日依赖的合成故事任务。
- **Metrics**：正确率、虚构信息率、token/费用、延迟、摘要长度、对更新事实的处理。
- **Controls**：同模型/提示词、输入分配、上下文预算；重复采样并报告波动。
- **Limitations**：小数据集与人工构造情景外推有限；策略差异可能受模型与检索器强烈影响。

## Definition of done

- [ ] 一条命令可复现实验配置与评价
- [ ] 每条测试有参考答案与评分逻辑
- [ ] 报告同时呈现成功案例与失败案例
- [ ] 区分事实结果、观察和推测

## Research caution

「记忆压缩如何影响 Agent」已有相关研究；是否具有论文创新性，需要先系统检索近期工作，不能预先保证。
