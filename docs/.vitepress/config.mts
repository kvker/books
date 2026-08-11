import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ACW 书架',
  description: '从对话到协作的上下文管理',
  lang: 'zh-CN',
  cleanUrls: true,
  base: '/acw-book/',

  themeConfig: {
    nav: [
      { text: '书架', link: '/' },
      { text: 'GitHub', link: 'https://github.com/kvker/acw-book' },
    ],

    sidebar: {
      '/acw/': [
        { text: '前言', link: '/acw/前言' },
        {
          text: '为什么AI协作比你想象的难',
          collapsed: false,
          items: [
            { text: '对话不是上下文', link: '/acw/为什么AI协作比你想象的难/对话不是上下文' },
            { text: '你遇到的问题不是工具问题', link: '/acw/为什么AI协作比你想象的难/你遇到的问题不是工具问题' },
            { text: '上下文是AI协作的核心货币', link: '/acw/为什么AI协作比你想象的难/上下文是AI协作的核心货币' },
            { text: '现有方案为什么不够', link: '/acw/为什么AI协作比你想象的难/现有方案为什么不够' },
          ],
        },
        {
          text: 'AI Context Workspace 的抽象模型',
          collapsed: false,
          items: [
            { text: '三层结构：背景、约定、状态', link: '/acw/AI-Context-Workspace的抽象模型/三层结构' },
            { text: '模型无关与Agent无关', link: '/acw/AI-Context-Workspace的抽象模型/模型无关与Agent无关' },
            { text: '路由机制：按需读取，不搞全量注入', link: '/acw/AI-Context-Workspace的抽象模型/路由机制' },
            { text: '机器契约：JSON 让机器可读，Markdown 让人可读', link: '/acw/AI-Context-Workspace的抽象模型/机器契约' },
          ],
        },
        {
          text: '工作流',
          collapsed: false,
          items: [
            { text: '七阶段工作流', link: '/acw/工作流/七阶段工作流' },
            { text: '流程轻重：L0-L3 的决策逻辑', link: '/acw/工作流/流程轻重' },
            { text: '状态机：生命周期管理', link: '/acw/工作流/状态机' },
            { text: 'Review与归档：怎么才算做完', link: '/acw/工作流/Review与归档' },
          ],
        },
        {
          text: '落地',
          collapsed: false,
          items: [
            { text: '初始化：从零到一', link: '/acw/落地/初始化' },
            { text: '日常任务：从想法到交付', link: '/acw/落地/日常任务' },
            { text: '大任务拆小，小任务串起来', link: '/acw/落地/大任务拆小' },
            { text: '放下半年，拿起来继续', link: '/acw/落地/恢复与交接' },
          ],
        },
        {
          text: '与外部工具共存',
          collapsed: false,
          items: [
            { text: '和Git的关系', link: '/acw/与外部工具共存/和Git的关系' },
            { text: '和Obsidian的关系', link: '/acw/与外部工具共存/和Obsidian的关系' },
            { text: '和多AI客户端的关系', link: '/acw/与外部工具共存/和多AI客户端的关系' },
          ],
        },
        {
          text: '未来',
          collapsed: false,
          items: [
            { text: '上下文作为一等公民', link: '/acw/未来/上下文作为一等公民' },
            { text: '从个人到团队', link: '/acw/未来/从个人到团队' },
            { text: '从项目到组织', link: '/acw/未来/从项目到组织' },
            { text: '开放生态的可能性', link: '/acw/未来/开放生态的可能性' },
          ],
        },
        { text: '结语', link: '/acw/结语' },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kvker/acw-book' },
    ],

    footer: {
      message: '基于 CC BY-NC-SA 4.0 许可协议发布',
      copyright: 'Copyright © 2026',
    },
  },
})
