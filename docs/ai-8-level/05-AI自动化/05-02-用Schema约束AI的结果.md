---
title: 5-02 结构化输出——用Schema约束AI的结果
date: 2026-08-03
tags: [AI, 口播教程, AI 使用能力第 5 级]
---

## 为什么需要结构化输出

在聊天中，AI 的输出是一段自然语言。你可以理解它，但程序很难自动处理。

比如 AI 说"这是一个账号问题，紧急度中等，用户情绪负向"。你能看懂，但程序怎么自动提取"账号问题""中等""负向"这三个字段？

在自动化中，你需要 AI 的输出是一个结构化的数据对象——比如 JSON 格式，每个字段有明确的类型和允许值。

这样，程序就可以自动检查：分类是否在枚举范围内？紧急度是否合法？置信度是否低于阈值需要转人工？

结构化输出把 AI 的"自由发挥"限制在安全范围内。它是自动化系统的第一道防线。

## JSON Schema

JSON Schema 是定义 JSON 数据结构的标准。它告诉你：一个合法的 JSON 对象应该有哪些字段？每个字段的类型是什么？允许什么值？

比如客户反馈分拣的输出 Schema：

```json
{
  "type": "object",
  "required": ["category", "urgency", "sentiment", "confidence"],
  "properties": {
    "category": {
      "enum": ["账号问题", "产品问题", "支付退款", "物流问题", "服务投诉", "功能建议", "其他"]
    },
    "urgency": {
      "enum": ["低", "中", "高", "紧急"]
    },
    "sentiment": {
      "enum": ["正向", "中性", "负向"]
    },
    "confidence": {
      "type": "number",
      "minimum": 0,
      "maximum": 1
    }
  }
}
```

这个 Schema 定义了四个字段：

category——只允许 7 个枚举值。
urgency——只允许 4 个枚举值。
sentiment——只允许 3 个枚举值。
confidence——0 到 1 之间的数字。

如果 AI 输出了一个不在枚举范围内的值——比如它自己发明了一个分类叫"物流退款"——Schema 校验就会失败，系统就能立即检测到并拒绝这个输出。

## 一个合法输出示例

```json
{
  "category": "账号问题",
  "urgency": "中",
  "sentiment": "负向",
  "confidence": 0.94
}
```

这个输出通过了 Schema 校验：category 在枚举范围内，urgency 在枚举范围内，sentiment 在枚举范围内，confidence 是 0 到 1 之间的数字。

## 一个非法输出示例

```json
{
  "category": "物流退款",
  "urgency": "非常紧急",
  "sentiment": "负向",
  "confidence": "高"
}
```

这个输出没有通过 Schema 校验：

category "物流退款"不在枚举范围内 ✗
urgency "非常紧急"不在枚举范围内 ✗
confidence "高"不是数字 ✗

系统检测到这些错误后，可以：

重试——让 AI 重新生成，希望这次输出合法。
格式修复——让 AI 修正格式错误（比如把"高"改成 0.8）。
进入人工队列——如果多次重试仍然失败，转人工处理。

## 为什么枚举值很重要

枚举值的作用是：限制 AI 的自由度，防止它发明新的分类。

如果你不限制 category 的枚举值，AI 可能会输出"账号退款""产品物流""服务问题"等各种自创的分类。这些分类可能互相重叠，也可能和你的业务系统不匹配。

通过枚举值，你告诉 AI：只有这 7 个分类是合法的，其他都不接受。这样程序就可以自动处理，不需要人工清理。

## 条件约束

Schema 还可以定义条件约束。比如：

如果 requires_human_review 为 true，那么 review_reason 必须非空，suggested_queue 必须是"人工审批"。

如果 safety_flags 非空，那么 requires_human_review 必须为 true。

这些条件约束确保了业务逻辑的一致性。比如：如果有安全风险，就必须人工审批；如果人工审批，就必须有审批理由。

## 结构化输出和提示词

结构化输出不仅靠 Schema 校验，还需要在提示词中明确要求。

你的提示词应该告诉 AI：

"请以 JSON 格式输出，包含以下字段：category、urgency、sentiment、confidence。category 只能是以下值之一：账号问题、产品问题、支付退款、物流问题、服务投诉、功能建议、其他。urgency 只能是：低、中、高、紧急。sentiment 只能是：正向、中性、负向。confidence 是 0 到 1 之间的数字。"

这样 AI 就知道应该输出什么格式、什么值。

但即使提示词明确要求，AI 仍然可能输出非法值。所以 Schema 校验是必要的第二道防线。
