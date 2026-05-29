# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

拾词（ShiCi）是一个 Chrome 扩展的 landing page 网站，展示一个帮助英语学习者收集生词的浏览器扩展功能。

## 常用命令

```bash
# 构建
pnpm build

# 安装依赖
pnpm install
```

## 技术栈

- **构建工具**: Vite 6.x
- **框架**: React 18.x
- **样式**: Tailwind CSS 4.x（使用 `@tailwindcss/vite` 插件，无需在 postcss.config.mjs 中配置）
- **动画**: Motion（原 Framer Motion）
- **图标**: Lucide React
- **包管理**: pnpm

## 项目结构

- `src/app/App.tsx` - 主应用入口，包含 landing page 所有内容
- `src/app/components/` - UI 组件目录
  - `extractor-popup.tsx` - 模拟扩展弹出窗口的交互组件
  - `vocab-vault.tsx` - 词袋展示组件
  - `share-card.tsx` - 分享卡片组件
  - `how-to-use.tsx` - 使用说明组件
  - `brand-logo.tsx` - 品牌 logo
- `src/styles/` - CSS 文件目录
  - `index.css` - 主入口，导入 fonts.css 和 tailwind.css
  - `tailwind.css` - Tailwind 配置，使用 `@source` 指定扫描范围
  - `theme.css` - shadcn/ui 主题变量（亮色/暗色模式）
- `vite.config.ts` - 路径别名 `@` 指向 `src` 目录

## Tailwind CSS 4.x 注意事项

本项目使用 Tailwind CSS 4.x，与传统 3.x 配置方式不同：
- 配置直接写在 CSS 文件中（`src/styles/tailwind.css`），不再使用 `tailwind.config.js`
- 使用 `@tailwindcss/vite` 插件，PostCSS 配置文件保持空导出
- CSS 变量定义在 `src/styles/theme.css`，通过 `@theme inline` 映射到 Tailwind

## 动画

使用 `motion/react`（Framer Motion 的新包名）：
- `motion.div` 替代 `AnimatePresence` + `motion` 组件
- 支持 `initial`, `animate`, `transition` props
- 使用 `variants` 和 `staggerChildren` 实现批量动画


## 开发注意事项

- 写代码时遵循单一职责原则：每个函数只做一件清楚的事。多步操作时，主函数只做调度，把每一步拆成独立函数。
- 每个函数尽量短，超 30 行问问自己"是不是混了多件事"。
- 避免"反向依赖"。
- 遵循 YAGNI：用最简单的实现满足当前需求。不要为未来可能的扩展提前设计抽象层。需求出现再重构。
- 遵循 KISS：用最简单、最直观的方式实现功能。能用普通函数解决的，不要用类。能用 if-else 解决的，不要用 Strategy 模式。优先选可读性，而不是'看起来专业'。
- 变量名重命名，要精确说明它装的是什么。不要用 data / temp / helper 这种通用名。如果你想不出精确的名字，说明这个变量本身就有问题——可能根本不该存在。
- 遵循 Fail Fast 原则：不要 catch 你不知道怎么处理的异常。在数据边界(API 输入、DB 输出)校验输入，出错立即抛具体异常。报错信息要包含'是什么值导致的'。绝不允许 silent fail / try： ... except： pass / 静默吞错误。