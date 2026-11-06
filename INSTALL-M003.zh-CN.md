# MISSION 003 / 更新操作指南

本次**只修改 `harmonyhhh66/poi-universe`**，不修改个人 Profile 仓库 `harmonyhhh66/harmonyhhh66`。

## 1. 解压更新包

解压 `poi-universe-M003-UPDATE.zip`，进入其中的 `poi-universe` 文件夹。**复制里面的文件和文件夹**，不要把整个 `poi-universe` 再套进另一个同名文件夹。

## 2. 复制到已经克隆的仓库

你之前的仓库在：

`/Users/harmonyhhh/Workspace/Projects/poi-clean/poi-universe`

使用 Finder 将更新包 `poi-universe/` **里面的内容**复制到上面的 Git 仓库根目录：允许合并文件夹、替换同名文件。不要删除 `.git`。

你应当看到仓库中新增 `.github/workflows/ci.yml`、`tests/`、`scripts/`、`design/tokens.css`、`package.json`、`MISSION-003.md` 等。Finder 默认隐藏以点开头的 `.github`，可以按 `Command + Shift + .` 显示隐藏文件。**不要漏掉 `.github`**，否则 GitHub Actions 不会出现。

## 3. 在终端验证并推送

```bash
cd /Users/harmonyhhh/Workspace/Projects/poi-clean/poi-universe
node --version
npm run check
git status
git add -A
git diff --cached --stat
git commit -m "test: add contingency protocol CI and shared tokens"
git push origin main
```

需要 Node.js 22 或更新的版本用于本地检查。没有 Node.js 时可以先把文件提交到 GitHub，等待 Actions 跑测试；但我们更推荐先本地检查通过。网站本身不需要 Node.js。

**如果你看到 `nothing to commit`，不需要再次提交。** 如果 `git push` 因 443 端口或 HTTP/2 失败，保留本地 commit，检查连接后重试；不要重新 clone，也不要 force push。

## 4. 验收

- GitHub `poi-universe` 仓库 → **Actions** → **Contingency Protocol CI**，最新运行应显示绿色通过。
- GitHub **Actions** 中的 Pages deployment 也应成功；CI 与 Pages 部署是两回事。
- 打开首页 https://harmonyhhh66.github.io/poi-universe/ 和终端 https://harmonyhhh66.github.io/poi-universe/projects/root-access/。
- 在终端运行 `help`、`mode shaw`、`connect 4a`、`clear`；首页点击隐藏的 4A 信号。

如果 CI 失败，不要覆盖旧文件反复重装。打开失败的运行日志，找到第一条红色报错发来定位即可。
