# 书籍书架项目

本仓库是 VitePress 多书书架，托管在 Cloudflare Pages。每次 push 到 `main` 自动构建部署。

## 目录结构

```
docs/
├── index.md                  # 书架首页，bookshelf 卡片入口
├── .vitepress/config.mts     # VitePress 配置，包含多书侧边栏
├── acw/                      # 现有书籍：AI Context Workspace
│   ├── index.md              # 书籍介绍页
│   ├── 前言.md / 结语.md
│   └── 各篇章目录/
├── .gitignore
├── AGENTS.md
└── package.json
```

## 线上地址

- 自定义域名：`https://books.wubuntu.cn`
- GitHub 仓库：`git@github.com:kvker/books.git`
- 作者：Wubuntu(污斑兔)

## 添加新书步骤

1. 在 `docs/` 下建立新目录，放入 markdown 文件
2. 在 `docs/.vitepress/config.mts` 的 `sidebar` 对象中追加路径映射
3. 在 `docs/index.md` 的 `features` 数组追加一张卡片
4. push 到 `main`，Cloudflare Pages 自动部署

## 构建命令

```bash
npm run build   # 构建到 docs/.vitepress/dist
npm run dev     # 本地预览 http://localhost:5173
```
