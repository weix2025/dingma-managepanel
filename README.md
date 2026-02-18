# Cordys Platform

企业智能工作平台 — CRM · 企业门户 · 后台管理

Enterprise Intelligent Workspace — CRM · Portal · Admin

## Tech Stack

- **Runtime**: Bun
- **Framework**: Modern.js (file-based routing)
- **Bundler**: Rspack
- **Charts**: Apache ECharts (tree-shaking)
- **Styling**: CSS Variables (dark/light theme)
- **Language**: TypeScript

## Branches

| Branch | Node | Modern.js | React | Description |
|--------|------|-----------|-------|-------------|
| `main` | ≥24 | 3.x | 19 | 主线开发 / Primary development |
| `node24` | ≥24 | 3.x | 19 | Node 24 适配 / Node 24 compatible |
| `node18` | ≥18 | 2.x | 18 | Node 18 适配 / Node 18 compatible |

## Quick Start

```bash
bun install
bun run dev
```

## Build

```bash
bun run build
bun run serve
```

## Project Structure

```
src/
├── styles/          # CSS variables & global reset
├── context/         # ThemeContext (dark/light)
├── hooks/           # useECharts
├── components/
│   ├── ui/          # Button, Tag, Toggle, SearchInput, Tabs, DataTable, Pagination
│   ├── layout/      # CrmLayout, CrmThreeColLayout, CrmDetailLayout, AuthLayout, PortalLayout, AdminLayout
│   ├── crm/         # CrmSidebar, CrmTopbar, Pipeline, Timeline, ChatMessage
│   ├── portal/      # PortalNavbar, PortalFooter
│   └── admin/       # AdminSidebar, AdminNavbar
└── routes/          # File-based routing (22 pages, 27 routes)
    ├── login/
    ├── register/
    ├── crm/         # 商机列表/详情/仪表板/权限/模块设置/智能体 + 7 占位页
    ├── portal/      # 首页/指南/API/博客/讨论区
    └── admin/       # 工作台
```

## Routes

| Route | Page | Source |
|-------|------|--------|
| `/login` | 登录 Login | New |
| `/register` | 注册 Register | New |
| `/crm/opportunities` | 商机列表 Opportunities | crm-opportunities.html |
| `/crm/opportunity/:id` | 商机详情 Detail | crm-opportunity-detail.html |
| `/crm/dashboard` | 仪表板 Dashboard | crm-dashboard.html |
| `/crm/ai-assistant` | 智能体 AI Assistant | crm-ai-assistant.html |
| `/crm/system/permissions` | 角色权限 Permissions | crm-permissions.html |
| `/crm/system/module-settings` | 模块设置 Module Settings | crm-module-settings.html |
| `/portal` | 门户首页 Portal Home | 官网首页.html |
| `/portal/docs` | 指南 Docs | 官网首页.html |
| `/portal/api` | API 文档 | 官网首页.html |
| `/portal/blog` | 博客 Blog | 官网首页.html |
| `/portal/forum` | 讨论区 Forum | 官网首页.html |
| `/admin` | 工作台 Workplace | 后台首页.html |

## License

Private — Internal use only.
