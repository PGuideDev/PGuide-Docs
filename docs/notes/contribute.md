---
title: 贡献指南 
createTime: 2025/02/22 16:59:04
permalink: /contribute/
---

首先感谢您的无私奉献，项导文档基于Vuepress的[plume主题构建](https://theme-plume.vuejs.press/)，由多名成员共同维护，内容完全开源免费，并且承诺保障时效性和准确性。

<RepoCard repo="MultipledMe/PGuide-Docs"></RepoCard>

在参与合作开发之前，您首先得学习一些基础知识:


```markdown
# VuePress + Plume 主题协作开发手册

## 前言
本手册旨在为使用 VuePress、Plume 主题及 pnpm 进行文档站协作开发的团队提供规范指引，确保开发流程一致性，提高协作效率。

---

## 环境准备

### 开发工具
- **Node.js** (v14+)，推荐使用 **[Volta](https://volta.sh/)** 管理版本
- **pnpm** (v7+)
  ```bash
  npm install -g pnpm
  # 国内用户配置镜像加速
  pnpm config set registry https://registry.npmmirror.com/
  ```
- **Git** (最新稳定版)
- **IDE**：VSCode（推荐插件：Volar, ESLint, Prettier）

### 项目克隆
确保团队成员使用 SSH 或 HTTPS 统一方式克隆仓库：
```bash
git clone [仓库地址]
cd [项目目录]
pnpm install  # 安装依赖
```

---

## 项目结构
```bash
docs/
  .vuepress/
    config.js     # VuePress 主配置
    plume-theme/  # Plume 主题配置
      components/ # 自定义组件
      styles/     # 覆盖主题样式
  public/         # 静态资源（图片、字体等）
  README.md       # 文档首页
  其他目录/        # 业务文档（按需组织）
pnpm-lock.yaml
package.json
```

---

## 开发流程

### 启动开发服务器
```bash
pnpm docs:dev  # 运行后访问 http://localhost:8080
```

### 编写文档
- **新增页面**：在 `docs/` 下创建 `.md` 文件，按约定式路由生成路径。
- **配置侧边栏**：在 `.vuepress/config.js` 的 `themeConfig.sidebar` 中添加导航。
- **遵循Frontmatter**：
  ```markdown
  ---
  title: 示例页面
  editLink: false
  ---
  ```

### 自定义主题
1. **覆盖默认样式**  
   在 `.vuepress/plume-theme/styles/palette.scss` 中修改变量：
   ```scss
   $accent-color: #3eaf7c;
   ```

2. **扩展主题组件**
    - 在 `.vuepress/plume-theme/components` 中添加 `.vue` 文件，并自动全局注册。
    - 使用 `<ClientOnly>` 包裹客户端组件以防 SSR 报错。

3. **静态资源配置**  
   图片等资源放入 `public/`，通过 `/image.png` 引用。

---

## 代码规范

### 代码检查
- **ESLint**: 使用配置的规则检查代码
  ```bash
  pnpm lint
  ```

### 提交规范
采用 **Conventional Commits** 标准：
- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式（空格、分号等）
- `refactor`: 代码重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建/工具变更

**示例**：
```bash
git commit -m "feat: 添加用户登录功能"
```

**Commitizen辅助**（可选）：
```bash
pnpm commit  # 启动交互式提交
```

---

## 分支策略

### Git Flow 简化版
| 分支类型 | 描述 | 命名示例 |
|---------|------|---------|
| `main` | 稳定生产版本 | - |
| `dev` | 集成分支，功能合并测试 | - |
| `feat/*` | 功能开发分支 | `feat/user-auth` |
| `fix/*` | Bug 修复分支 | `fix/mobile-layout` |
| `chore/*` | 配置/工具调整 | `chore/eslint-config` |

**合并要求**：
- 通过 Pull Request 合并到 `dev`
- 至少一个团队成员 Code Review
- 通过所有 CI 测试项

---

## 部署流程

### 手动部署
```bash
pnpm docs:build        # 构建
pnpm docs:build:clean  # 清理并构建
# 部署到 GitHub Pages：
git subtree push --prefix docs/.vuepress/dist origin gh-pages
```

### 自动化（GitHub Actions）
创建 `.github/workflows/deploy.yml`:
```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with: { node-version: 18 }
      - run: pnpm install
      - run: pnpm docs:build
      - uses: peaceiris/actions-gh-pages@v3
        with: 
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: docs/.vuepress/dist
```

---

## 常见问题（QA）
**Q1：本地样式未生效？**
- 检查浏览器缓存，尝试 `Ctrl + F5` 强制刷新。
- 确认样式文件未被缓存，服务端需配置无缓存策略。

**Q2：`pnpm install` 报错？**
- 清空 `node_modules` 或尝试重新安装：
  ```bash
  rm -rf node_modules
  pnpm install --frozen-lockfile
  ```

**Q3：Plume主题自定义无效？**
- 确认配置文件路径正确：`.vuepress/plume-theme/`。
- 检查浏览器控制台是否有 Vue 报错（如组件未注册）。

---

## 附录

### 技术栈版本
- VuePress: 2.0.0-beta.60
- Plume 主题：1.5.0
- pnpm: 8.7.6

### 参考链接
- [VuePress 官方文档](https://v2.vuepress.vuejs.org/)
- [Plume 主题配置指南](https://vuepress-theme-plume.rane.wang/)
- [pnpm 使用手册](https://pnpm.io/zh/motivation)

```

此手册内容兼顾操作流程与最佳实践，助力团队高效协作。可根据实际项目需求调整各项配置参数，保持定期更新维护。