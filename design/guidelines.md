# IRRELEVANT / Design Language v0.1

> **A design system for things that matter.**
>
> 状态：EXPLORING。原创粉丝设计体系，并非 POI 官方 UI 规范或逐帧复刻。

## 设计原则

1. **Observe. Don't overwhelm.** 内容第一，监控叠加信息第二。
2. **Every signal means something.** 颜色、动画和识别框需要对应实际状态。
3. **Hide stories, not functions.** 可以藏彩蛋；不能藏关键控制、权限和退出方法。
4. **Remember what matters.** 记忆可查看、可编辑、可清除。
5. **Remain human.** 机械的反馈语言下保留清晰、友善的帮助说明。

## 一、主题与颜色

**Machine（默认）**：深墨绿背景，柔和荧光绿只用于确切的状态强调。`VOID`、`SURFACE`、`BORDER`、`MUTED`、`TEXT`、`SIGNAL` 见 `tokens.json`。

**Root（情绪/隐藏频道）**：`ROOT` 淡紫作为稀有点缀，不整页铺紫。

**Shaw（执行/反馈）**：`SHAW` 暖杏色用于执行器特征，少动效，直接反馈。

**Samaritan（虚构控制演示）**：`THREAT` 暗红与严格网格的主题变体；不能因此取消用户撤销或退出的能力。

### 使用比例（建议而非定律）

- 背景与普通表面 80–90%
- 中性文字与边框 8–15%
- 强调/状态色 2–5%

不要把 `SIGNAL` 当做大面积正文颜色；文本对比度在实际前端实现时应检查 WCAG 标准。

## 二、字体

- 状态、时间戳、命令、资产编号：**IBM Plex Mono**，备用系统等宽字体。
- 正文、导航、长文：**Inter** + **Noto Sans SC** / 系统中文字体。
- 数值使用 `font-variant-numeric: tabular-nums`；避免动态计数改变布局。
- 重要系统状态可全大写英文，但中文帮助文字要清晰可读。
- 字体许可需要在实际网页或安装包中分别遵循；本仓库**不包含字体文件**。

## 三、空间与边框

- 基础间距：4 px 网格，推荐 `4 / 8 / 12 / 16 / 24 / 32`。
- 面板：半径 8 px（卡片），12 px（较大容器）。
- 识别框：四角短线而非完整圆角卡片。线宽建议 1–2 px。
- 边框颜色 `BORDER`，避免到处使用高亮发光描边。
- 信息密度：状态栏可紧凑，正文需留白。

## 四、组件语义

| Component | 作用 | 行为 |
|---|---|---|
| `AssetCard` | 项目/对象摘要 | 状态、编号、关联链接明确 |
| `SystemMessage` | 操作成功/失败/待确认 | 短英文状态 + 清楚的中文说明 |
| `TargetFrame` | 焦点/选中 | 必须有对应焦点对象 |
| `SignalStrip` | 活动与任务进度 | 根据真实数据更新；不要伪造进度 |
| `Transmission` | 隐藏留言/彩蛋 | 可由显式操作触发；不承担关键功能 |
| `ContingencyDialog` | 风险操作确认 | 影响范围、撤销途径、确认/取消 |

## 五、状态词典

- `UNKNOWN`：尚未识别；`IDENTIFIED`：已找到；`TRACKING`：正在持续追踪用户主动授权的任务。
- `RELEVANT`：需要关注；`ARCHIVED`：已归档；`SIGNAL LOST`：连接中断；`CONTINGENCY REQUIRED`：需要备用方案。
- `OPERATION COMPLETED`：动作已完成；`AWAITING APPROVAL`：待用户确认。
- 不要把 `SUCCESS` 用于尚未成功的动作，或把模拟数据展示成真实监控结果。

## 六、角色语气（均为原创范例，非原剧台词）

| 场景 | Machine | Root | Shaw |
|---|---|---|---|
| 欢迎 | `IDENTITY CONFIRMED.` | `There you are, sweetie.` | `You're here. Great.` |
| 成功 | `OPERATION COMPLETED.` | `Nicely done, sweetie.` | `Done.` |
| 异常 | `CONTINGENCY REQUIRED.` | `Well, that complicates things.` | `Problem. Fix it.` |

系统人格不应改变真实权限边界。Shaw 少说话，但不能隐瞒错误或风险。

## 七、动效

| Token | 时长 | 意义 |
|---|---|---|
| `detect` | 120 ms | 识别框出现 |
| `identify` | 320 ms | 身份匹配完成 |
| `connect` | 480 ms | 两个节点接通 |
| `redact` | 160 ms | 内容遮盖或隐藏 |
| `takeover` | 800 ms | 虚构的 Samaritan 主题切换 |

- 除了通讯/悬念演出，避免给所有文字使用打字机效果。
- Glitch 只用于模拟异常；不应妨碍阅读或交互。
- 尊重 `prefers-reduced-motion`：减少/停止非必要动画。
- 动效数字是**本项目提议参数**，不是来自原剧的测量值。

## 八、跨平台策略

### GitHub Profile / README

Markdown 为主，静态 SVG 展示少量装饰。不要依赖 README 中的自定义 JavaScript；主要内容必须在禁用装饰图像时仍可读。避免公开私人记录。

### 个人网站

允许识别框、隐藏 4A 频道、适度转场与主题切换。核心导航、搜索、可访问性与移动端布局优先于电影感。再次访问不必强制播放片头。

### Desktop / Terminal / Agent

交互优先；默认不进行未经授权的监视或文件读取。任务执行需提供预览、确认和操作结果，必要时支持撤销。终端颜色可能受主题影响，保留纯文本可读性。

## 九、彩蛋与来源分类

- **CANON**：可从原剧核对的设定，如 Root 的 Analog Interface 身份、S4E11《If-Then-Else》、S5E04《6,741》。具体画面与台词建议发布前复核。
- **INTERPRETATION**：我们对 Machine/Samaritan 风格差异的创作理解。
- **ORIGINAL**：`STILL HERE` 双光点、部分终端消息、彩蛋交互等原创延伸。

## 十、未来组件开发前的 checklist

- [ ] 是否能解释每一处信号的意义？
- [ ] 弱网/无网络/失败态是否清楚？
- [ ] 键盘与屏幕阅读器是否可使用？
- [ ] 色盲用户是否仍可凭文字区分状态？
- [ ] 交互是否遵循减少动画偏好？
- [ ] 用户是否拥有权限确认和退出方式？
