---
title: 贡献与开发指南
createTime: 2025/02/22 16:59:04
permalink: /contribute/
---

首先感谢您的无私奉献，项导文档基于Vuepress的[plume主题构建](https://theme-plume.vuejs.press/)
，由多名成员共同维护，内容完全开源免费，并且承诺保障时效性和准确性。

<RepoCard repo="MultipledMe/PGuide-Docs"></RepoCard>

在参与合作开发之前，需要您学习一些基础知识:

## 我是文档站的开发者

- [git的使用](/csdiy/tools-must/git/)
- [VuePress Plume主题](https://theme-plume.vuejs.press/guide/intro/)
- [Typescript基础语法](https://www.runoob.com/typescript/ts-basic-syntax.html)
- [markdown基础语法](/csdiy/tools-must/markdown/)

随后，联系 [rand777](mailto:losmosga@foxmail.com) 加入项导文档加入github开发组。

:::tip 联系格式
正文写明你是谁，想要编写哪部分，从哪里知道项导文档的（比如网上看到的-具体途径，熟人推荐-哪位熟人）。
:::

### 配置开发环境

:::info 开发环境
这里假设你的电脑是windows10或11的操作系统
:::

:::steps

1. 下载WebStorm

这个软件是咱们主要写代码的地方，软件本身用于前端开发，您可以[在这里](/campus-wiki/common-softwares/IDE/PyCharm/)
详细了解。其他同类型的开发软件，如VSCode，也可以。

请先完成学生邮箱申请并申请JetBrains教育版

下载可以到 [WebStorm官方网站](https://www.jetbrains.com/zh-cn/webstorm/) 或 [Alist动态开源软件镜像站](http://192.168.183.171:5244/softwares/JetBrainsIDEs/WebStorm-2024.3.4.exe) 下载

2. 下载NVM

我们在进行开发的时候，需要一个服务端来支撑web应用的运行，Node.js是目前非常流行的开源web服务器运行时环境。在运行不同的前端项目时，往往需要的node.js版本是不一样的，而
NVM（全名：Node.js Version Manager）可以帮助我们更高效地管理不同的node.js版本和依赖环境。

软件安装及应用教程看[这里](/csdiy/study-path/front-dev/NVM/)

> 安装完成后记得重启IDE和终端



3. 导入项目

打开WebStorm后，你应该

   :::code-tabs
    
    @tab 使用HTTPS协议导入
    ```shell
    git clone https://github.com/MultipledMe/PGuide-Docs.git
    ```
    @tab 使用SSH协议导入
    
    ```shell
    git clone git@github.com:MultipledMe/PGuide-Docs.git
    ```
   :::

4. 安装项目依赖

安装 pnpm

在WebStorm终端中输入

```shell
npm install -g pnpm
```

安装好后，再输入
```shell
pnpm install
```

这样就完成了项目依赖的安装

5. 启动本地开发环境

终端中输入

```shell
pnpm run docs:dev
```

打开[http://localhost:8080](http://localhost:8080)即可访问本地的开发环境了。代码修改时，内容也会一起跟着改。

6. 阅读开发规范章

请合作开发者依次阅读`Git规范`、`静态资源管理规范`、`文档编写规范`、`其他注意事项`、`常见问题及解决方案`

:::

## 我是文档的编写者

- markdown基础语法
- VuePress markdown拓展语法
- 合并请求的创建（也可以联系文档管理员）

### 我想直接写一篇文档

不想这样麻烦也可以的，联系[rand777](https://qm.qq.com/q/2iLBaNcsnO)并获取语雀编辑权限，或将word文档发送给[rand777](https://qm.qq.com/q/2iLBaNcsnO)。

### 其他注意事项

请参考

## 文档编写规范

俗话说，无规矩，不成方圆。一个优秀的团队离不开统一的规范，项导文档开发也是如此。

## 静态资源规范

这里是为了规范您的图片引用方法，Plume Vuepress推荐你引用静态资源的方式如下：



截图工具

## 对象存储



下载[pixpin](https://pixpin.cn/)
---

## 项目结构

::: file-tree

- docs
    - .vuepress
        - .cache #缓存文件夹
        - .temp #临时文件夹
        - public #静态资源文件夹
          - avatar #头像文件夹
          - src #图片文件夹
          - *.svg #矢量图标
        - theme #主题设置文件夹
          - style #主题自定义文件夹
            - custom.css #自定义主题
          - shim.d.ts #自定义vue组件导入
        - client.ts #客户端配置
        - config.ts #全局功能配置
        - navbar.ts #导航栏配置
        - notes.ts #笔记配置
        - plume.config.ts #主题选项配置
  - notes
    - CS-DIY #计算机自学指南
    - 公共服务 #项导公开的服务
    - 后台管理 #后台管理界面
    - 大学百科 #大学百科全书
    - 学习笔记 
    - 项目文档 #包含项目的介绍、人员等
    - begin.md #“开始阅读”页
    - contribute.md #“贡献”页
    - friends-organizations #友情链接-组织页
    - friends-persons #友情链接-个人页
    - friends-quotes #友情链接-常见问题页
    - Templates.md #Vuepress Plume模板页
  - README.md
- .gitattributes #git属性设置
- .gitignore #不进行git的文件(夹)
- .npmrc #npm包管理设置
- package.json #所有npm包依赖
- pnpm-lock.yaml #所有pnpm包依赖
- README.md #中文项导文档介绍
- README-en.md #英文项导文档介绍
- …
  :::


---

## 🎬 快速启航指南

### 🏗️ 搭建脚手架

```bash
# 零基础同学建议安装nvm
nvm install lts

# 选择镜像源（顺风车时间）
nvm node_mirror https://mirrors.cernet.edu.cn/nodejs-release/  # 校园专线
nvm node_mirror https://mirrors.aliyun.com/nodejs-release/     # 阿里云快车

# 装备新时代工具箱
npm install -g pnpm  # 速度更快的npm替代品
pnpm i              # 一键安装所有魔法原料
pnpm run docs:dev   # 打开传送门进本地预览
```

### ✨ 热更新小技巧

修改导航栏配置后记得`Ctrl+C`重启服务，看到"VuePress dev server listening"才算开启新世界大门哦~

---

## 🌉 开发分支规范

### 代码地铁乘坐指南

1. 在本地开设`dev/[你的名字]`新线路
2. 完成精彩修改后：（快捷操作指南）
    - `Ctrl+Shift+K` 召唤提交魔法阵
    -
    推荐消息格式：（让代码会说话，代码规范为 [Angular Commit](https://zj-git-guide.readthedocs.io/zh-cn/latest/message/Angular%E6%8F%90%E4%BA%A4%E4%BF%A1%E6%81%AF%E8%A7%84%E8%8C%83/)）
    ```
    docs: README新增星空导航
    fix: 修复404星际迷航问题
    feat: 新增宇宙超链接模块
    ```
3. 前往[Github站台](https://github.com/xxxx)点击「New pull request」提交专属班列

---

## 📍 避坑手册精选

### 资源位面法则

- 🎨 所有矢量图请存入`/public/*`，引用时直接`/AI.svg`即可
- 📹 视频资源统一放在`src/video`，播放代码示范：
- 
  ```markdown
  ```

---

## 🆘 常见问题及解决方案

### 遇到git推送异常？（SSL ERROR）

1. 🌐 检查您的星际通讯器（Clash代理）及允许局域网是否开启

[//]: # (   ![2025-03-05_03-51-27.png]&#40;docs/.vuepress/public/src/2025-03-05_03-51-27.png&#41;)
2. 🛠️ 配置Git直通车（本地代理）：
   ```bash
   git config --global http.proxy http://127.0.0.1:7890
   git config --global https.proxy http://127.0.0.1:7890
   ```
3. 🚀 尝试乘坐SSH穿梭机：
   ```bash
   git clone git@github.com:MultipledMe/PGuide-Docs.git
   ```

### 🧐 真理之门异常？

当看到奇怪的Giscus错误提示时不用惊慌，这是跨域资源请求的小精灵在调皮，对我们的文档城堡没有影响：

[//]: # (![2025-03-04_00-55-06.png]&#40;docs/.vuepress/public/src/2025-03-04_00-55-06.png&#41;)

---

## 开发流程

### 启动开发服务器

```bash
pnpm docs:dev  # 运行后访问 http://localhost:8080
```

### 编写文档

- **新增页面**：在 `docs/` 下创建 `.md` 文件，按约定式路由生成路径。
- **遵循Frontmatter**：
  ```markdown
  ---
  title: 示例页面
  editLink: false
  permalink: /../../
  ---
  ```
---

## 代码规范

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

### Git Flow

| 分支类型      | 描述          | 命名示例                  |
|-----------|-------------|-----------------------|
| `main`    | 稳定生产版本      | -                     |
| `dev`     | 集成分支，功能合并测试 | -                     |
| `feat/*`  | 功能开发分支      | `feat/user-auth`      |
| `fix/*`   | Bug 修复分支    | `fix/mobile-layout`   |
| `chore/*` | 配置/工具调整     | `chore/eslint-config` |

**合并要求**：

- 通过 Pull Request 合并到 `dev`
- 至少一个团队成员 Code Review
- 通过所有 CI 测试项

---


## 附录

### 参考链接

- [VuePress 官方文档](https://v2.vuepress.vuejs.org/)
- [Plume 主题配置指南](https://vuepress-theme-plume.rane.wang/)
- [pnpm 使用手册](https://pnpm.io/zh/motivation)

```

此手册内容兼顾操作流程与最佳实践，助力团队高效协作。可根据实际项目需求调整各项配置参数，保持定期更新维护。