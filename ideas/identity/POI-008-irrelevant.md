# POI-008 — IRRELEVANT

- **ID:** POI-008
- **Category:** IDENTITY
- **Status:** EXPLORING
- **Kind:** 跨平台设计系统 / 数字身份资产
- **POI Inspiration:** Machine 的识别框与分类语言、Samaritan 的控制感、Root/Shaw 的交互气质；色板和设计规则均为原创提案。
- **One-line concept:** 用统一的视觉与交互语言，把 GitHub、个人网站、桌面和终端连成一个隐秘的 POI 宇宙。
- **Deliverable:** 设计 tokens、组件示例、GitHub README SVG 静态资产、网站主题、桌面主题参考。
- **Why I want to build it:** 让不同小作品彼此认得出来，又不依赖大量直白的剧照和 Logo。
- **MVP:** 定稿 9 色板、字体与状态词典；制作 `AssetCard`、`SystemMessage`、`Transmission` 三个 HTML/CSS 或 SVG 组件样例。
- **Not in v1:** 不复刻剧中每一帧 UI；不实现复杂动画引擎；不为所有平台建完整组件库。
- **Possible tech:** JSON Design Tokens、CSS 变量、SVG、静态 HTML；未来 React 组件可选。
- **Privacy / safety / rights:** 长文本对比度与可读性优先；提供减少动画选项；使用原创图形，不直接分发受版权保护的图像或字体文件。
- **Related:** POI-001、POI-006、POI-007。

## How it works

1. 所有项目复用 `design/tokens.json` 的底色、边框和强调色。
2. 使用相同的状态语义和可读的帮助说明。
3. GitHub 用静态 SVG，网页可完整交互，桌面使用轻量浮窗。
4. `4A`、`6741` 等彩蛋可以出现，但不能隐藏关键功能入口。

## Definition of done

- [ ] 一份 JSON tokens 可被独立项目读取
- [ ] 三个基础组件有视觉实例和使用说明
- [ ] 同一套组件在手机与桌面均可读
- [ ] Canon / Interpretation / Original 的边界清楚

## Starting references

- [`../../design/guidelines.md`](../../design/guidelines.md)
- [`../../design/tokens.json`](../../design/tokens.json)
