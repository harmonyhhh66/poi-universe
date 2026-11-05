# POI-007 — Analog Interface

- **ID:** POI-007
- **Category:** AMBIENT
- **Status:** IDEA
- **Kind:** 语音交互原型 / 桌面辅助工具
- **POI Inspiration:** Root 作为 The Machine 的 Analog Interface，通过耳机接收信息的设定。
- **One-line concept:** 以耳机为主要交互通道、需要用户明确唤醒的极简语音助手。
- **Deliverable:** 本地运行的推送式语音交互程序（后续可发展成桌面 App）。
- **Why I want to build it:** 不再依赖聊天窗口，让 Machine 以更克制的方式存在于日常生活。
- **MVP:** 按键唤醒 → 录音识别 → 处理 3 个固定指令（如时间、今日任务、打开指定笔记）→ TTS 简短播报。
- **Not in v1:** 不做全天候监听；不主动录制周围声音；不模拟演员声音；不自动执行危险操作。
- **Possible tech:** Python、系统音频 API、STT、TTS；按需加入 LLM。
- **Privacy / safety / rights:** 麦克风开启状态明确；录音默认不持久化；有禁用开关；外部语音服务应显式告知。
- **Related:** POI-001、POI-002、POI-008。

## How it works

1. 用户按快捷键唤醒，耳机里播放原创短提示音。
2. 界面明确显示麦克风已开启，收到输入后自动停止录音。
3. 在可验证的指令白名单里执行请求，播报简短结果。
4. 没有把握时请求澄清，而不是假装完成。

## Definition of done

- [ ] 用户能清楚判断何时开始/结束录音
- [ ] 三种指令均有成功与失败反馈
- [ ] 不允许未授权的后台录音
- [ ] 支持完全禁用语音功能

## Future sparks

与 Agent Shaw 连接；硬件按键；耳机优先的个人提醒。
