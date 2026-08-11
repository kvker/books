---
title: 5.2 和 Obsidian 的关系
date: 2026-08-10
tags: [ai-context-workspace, tools, integration]
description: 分析 Obsidian 知识库与工作区上下文的职责分工
---

Obsidian 是个人知识管理工具，AI Context Workspace 是项目上下文管理工具。它们解决不同的问题，但可以互相补充。

**Obsidian 管"我学过什么"。**

你用 Obsidian 记笔记、做知识整理、建立双向链接。笔记按你的认知结构组织，按你理解世界的方式连接。Obsidian 是"人的大脑的外挂"。

**AI Context Workspace 管"AI 现在需要知道什么"。**

工作区按项目任务组织，按 AI 的读取方式结构。每个文件只包含当前项目需要的信息，按路由索引，按需加载。工作区是"AI 的上下文的外挂"。

**两者可以互相引用。**

一个典型的场景：你在 Obsidian 里有一篇笔记，记录了某个技术方案的调研结果。现在你在做一个项目，需要 AI 理解这个方案。你不需要把笔记内容复制到工作区里，只需要在工作区的 `background/` 中引用 Obsidian 笔记的路径。

```
<!-- background/tech-decision.md -->
## 技术方案：选择 Meilisearch 作为搜索引擎

详细调研记录见：[[obsidian-vault://projects/search-engine-research]]
```

AI 读取这个路径后，可以找到对应的 Obsidian 笔记，读取详细内容。这样，Obsidian 笔记仍然是你的知识资产，工作区只需要引用它。

**职责分离，但信息互通。**

- Obsidian 里放的是"你学到的东西"——知识，跨项目的，长期积累的
- 工作区里放的是"AI 需要知道的东西"——上下文，项目相关的，按任务组织的

两者重叠的部分是"当前项目相关的知识"。这些知识在 Obsidian 里有一份完整版，在工作区里有一份精炼版。完整版适合人类学习，精炼版适合 AI 快速理解。

**如果你不想维护两份，也不用担心。**

工作区的背景文档可以直接用 Obsidian 格式写（Markdown 双链语法），然后让 AI 在工作区里读取。你不需要在 Obsidian 和工作区之间做选择，它们可以共存。

**一个更高级的用法：**

用 Obsidian 作为你的个人知识库，把 AI Context Workspace 嵌入到 Obsidian Vault 中。这样，你在 Obsidian 里管理知识，AI 在工作区里处理任务，两者共享同一个文件系统。AI 可以根据需要从 Obsidian 笔记中提取背景信息，补充到工作区里。

这不是一个"二选一"的问题，是一个"如何分工"的问题。
