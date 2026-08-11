import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ACW 书架',
  description: '从对话到协作的上下文管理',
  lang: 'zh-CN',
  cleanUrls: true,

  themeConfig: {
    nav: [
      { text: '书架', link: '/' },
      { text: 'GitHub', link: 'https://github.com/kvker/books' },
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

      '/ai-8-level/': [
        {
          text: '认识 AI',
          collapsed: false,
          items: [
            { text: 'AI 到底是什么——四个够用的概念', link: '/ai-8-level/01-认识AI/01-01-四个够用的概念' },
            { text: '四类风险——为什么流畅不等于正确', link: '/ai-8-level/01-认识AI/01-02-为什么流畅不等于正确' },
            { text: '第一次有效对话——完整闭环实操', link: '/ai-8-level/01-认识AI/01-03-完整闭环实操' },
            { text: '你的第一个真实任务——三句式入门指令', link: '/ai-8-level/01-认识AI/01-04-三句式入门指令' },
            { text: '10 个使用机会——从一次体验到持续使用', link: '/ai-8-level/01-认识AI/01-05-从一次体验到持续使用' },
          ],
        },
        {
          text: '高质量对话',
          collapsed: false,
          items: [
            { text: '任务规格六要素——把感觉变成可执行的要求', link: '/ai-8-level/02-高质量对话/02-01-把感觉变成可执行的要求' },
            { text: '模式选择——不同任务用不同方式', link: '/ai-8-level/02-高质量对话/02-02-不同任务用不同方式' },
            { text: '有效反馈——从"再优化一下"到有据可依', link: '/ai-8-level/02-高质量对话/02-03-从再优化一下到有据可依' },
            { text: '事实三级核验——来源存在、支持、适用', link: '/ai-8-level/02-高质量对话/02-04-来源存在、支持、适用' },
            { text: '两轮修订——在已有制品上迭代', link: '/ai-8-level/02-高质量对话/02-05-在已有制品上迭代' },
          ],
        },
        {
          text: 'Agent 工作区',
          collapsed: false,
          items: [
            { text: '聊天和工作区的本质区别', link: '/ai-8-level/03-Agent工作区/03-01-聊天和工作区的本质区别' },
            { text: '上下文组织——五类文件的职责', link: '/ai-8-level/03-Agent工作区/03-02-五类文件的职责' },
            { text: '权限矩阵——先计划后授权再执行', link: '/ai-8-level/03-Agent工作区/03-03-先计划后授权再执行' },
            { text: '差异审查——逐项检查每一个变更', link: '/ai-8-level/03-Agent工作区/03-04-逐项检查每一个变更' },
            { text: '故障恢复——不是所有问题都需要从头重来', link: '/ai-8-level/03-Agent工作区/03-05-不是所有问题都需要从头重来' },
          ],
        },
        {
          text: '复杂任务编排',
          collapsed: false,
          items: [
            { text: '任务分解——把大目标切成可管理的阶段', link: '/ai-8-level/04-复杂任务编排/04-01-把大目标切成可管理的阶段' },
            { text: '输入输出契约——让每个阶段可交接', link: '/ai-8-level/04-复杂任务编排/04-02-让每个阶段可交接' },
            { text: '中间检查点——在错误还没有扩散时发现问题', link: '/ai-8-level/04-复杂任务编排/04-03-在错误还没有扩散时发现问题' },
            { text: '异常处理——局部恢复而不是全局重跑', link: '/ai-8-level/04-复杂任务编排/04-04-局部恢复而不是全局重跑' },
            { text: '三类QA——事实、结构、格式分开检查', link: '/ai-8-level/04-复杂任务编排/04-05-事实、结构、格式分开检查' },
          ],
        },
        {
          text: 'AI 自动化',
          collapsed: false,
          items: [
            { text: '自动化和聊天的本质区别', link: '/ai-8-level/05-AI自动化/05-01-自动化和聊天的本质区别' },
            { text: '结构化输出——用Schema约束AI的结果', link: '/ai-8-level/05-AI自动化/05-02-用Schema约束AI的结果' },
            { text: '错误处理——重试降级和恢复', link: '/ai-8-level/05-AI自动化/05-03-重试降级和恢复' },
            { text: '人工审批——高风险环节的守门人', link: '/ai-8-level/05-AI自动化/05-04-高风险环节的守门人' },
            { text: '成本管控——监控和优化自动化成本', link: '/ai-8-level/05-AI自动化/05-05-监控和优化自动化成本' },
          ],
        },
        {
          text: 'Agent 应用',
          collapsed: false,
          items: [
            { text: '从业务目标开始而不是从技术开始', link: '/ai-8-level/06-Agent应用/06-01-从业务目标开始而不是从技术开始' },
            { text: '知识检索——让Agent有据可答', link: '/ai-8-level/06-Agent应用/06-02-让Agent有据可答' },
            { text: '工具调用——让Agent能做事', link: '/ai-8-level/06-Agent应用/06-03-让Agent能做事' },
            { text: '身份权限——防止越权和提示注入', link: '/ai-8-level/06-Agent应用/06-04-防止越权和提示注入' },
            { text: '评测集设计——怎么知道Agent做得好不好', link: '/ai-8-level/06-Agent应用/06-05-怎么知道Agent做得好不好' },
          ],
        },
        {
          text: 'Agent 平台',
          collapsed: false,
          items: [
            { text: '为什么需要平台——从烟囱到公共能力', link: '/ai-8-level/07-Agent平台/07-01-从烟囱到公共能力' },
            { text: '六层架构——模型数据工具编排应用治理', link: '/ai-8-level/07-Agent平台/07-02-模型数据工具编排应用治理' },
            { text: '身份链路——从用户到工具的可追溯授权', link: '/ai-8-level/07-Agent平台/07-03-从用户到工具的可追溯授权' },
            { text: '发布门禁——用证据控制变更', link: '/ai-8-level/07-Agent平台/07-04-用证据控制变更' },
            { text: '建设路线——分阶段落地而不是一步到位', link: '/ai-8-level/07-Agent平台/07-05-分阶段落地而不是一步到位' },
          ],
        },
        {
          text: '企业 AI 赋能',
          collapsed: false,
          items: [
            { text: '从经营目标出发而不是从技术出发', link: '/ai-8-level/08-企业AI赋能/08-01-从经营目标出发而不是从技术出发' },
            { text: '场景发现——沿着业务链找痛点', link: '/ai-8-level/08-企业AI赋能/08-02-沿着业务链找痛点' },
            { text: '否决项——先排除不能做的', link: '/ai-8-level/08-企业AI赋能/08-03-先排除不能做的' },
            { text: '投入产出——不要只算Token价格', link: '/ai-8-level/08-企业AI赋能/08-04-不要只算Token价格' },
            { text: '90天试点——用最小风险回答最重要的不确定性', link: '/ai-8-level/08-企业AI赋能/08-05-用最小风险回答最重要的不确定性' },
          ],
        },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kvker/books' },
    ],

    footer: {
      message: '基于 CC BY-NC-SA 4.0 许可协议发布',
      copyright: 'Copyright © 2026 Wubuntu(污斑兔)',
    },
  },
})
