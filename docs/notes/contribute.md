---
title: 贡献与开发指南
createTime: 2025/02/22 16:59:04
permalink: /contribute/
---

[//]: # (TODO: zsl视频教程)

首先感谢您的无私奉献，项导文档基于Vuepress的[plume主题构建](https://theme-plume.vuejs.press/)
，由多名成员共同维护，内容完全开源。

<RepoCard repo="MultipledMe/PGuide-Docs"></RepoCard>




## 我是文档的编写者

项导文档使用markdown语法进行编写，首先得大概掌握下[markdown基础语法](/csdiy/tools-must/markdown/)

在您完成markdown类型文档编写后可以

- 通过github创建合并请求
- email到[我们的邮箱](mailto:losmosga@foxmail.com)
- QQ发送给 [rand777](https://qm.qq.com/cgi-bin/qm/qr?k=9s5V15fEzwzHuawmc-QQZ615NPTp9oEZ)

### 我想直接写一篇文档

不想这样麻烦也可以的，联系[rand777](https://qm.qq.com/q/2iLBaNcsnO)
并获取语雀编辑权限，或将word文档/PDF文档/PPT发送给[rand777](https://qm.qq.com/q/2iLBaNcsnO)

### 其他注意事项

请参考`文档编写规范`

## 我是文档站的开发者

在参与合作开发之前，需要您学习一些基础知识:

- [:[material-icon-theme:git]:git的使用](/csdiy/tools-must/git/)
- [:[https://theme-plume.vuejs.press/plume.png]:VuePress Plume主题](https://theme-plume.vuejs.press/guide/intro/)
- [:[devicon:typescript]:Typescript基础语法](https://www.runoob.com/typescript/ts-basic-syntax.html)
- [:[octicon:markdown-16]:markdown基础语法](/csdiy/tools-must/markdown/)

随后，联系 [rand777](mailto:losmosga@foxmail.com) 加入项导文档github开发组。

:::tip 联系格式
正文写明你是谁，想要编写哪部分，从哪里知道项导文档的（比如网上看到的-具体途径，熟人推荐-哪位熟人）。
:::

### 配置开发环境

:::info 开发环境
这里假设你的电脑是windows10或11的操作系统
:::

:::steps

1. 下载WebStorm

这个软件是咱们主要写代码的地方，软件本身用于前端开发，您可以[在这里](/campus-wiki/common-softwares/IDE/WebStorm/)
详细了解。其他同类型的开发软件，如VSCode，也可以。

请先完成[学生邮箱申请](/campus-wiki/apply-student-email/)并申请JetBrains教育版

下载可以到 [WebStorm官方网站](https://www.jetbrains.com/zh-cn/webstorm/)
或 [Alist动态开源软件镜像站](http://192.168.183.171:5244/softwares/JetBrainsIDEs/WebStorm-2024.3.4.exe)
下载

2. 下载NVM

我们在进行开发的时候，需要一个服务端来支撑web应用的运行，Node.js是目前非常流行的开源web服务器运行时环境。在运行不同的前端项目时，往往需要的node.js版本是不一样的，而
NVM（全名：Node.js Version Manager）可以帮助我们更高效地管理不同的node.js版本和依赖环境。

软件安装及应用教程看[这里](/csdiy/study-path/front-dev/NVM/)

> 安装完成后记得重启IDE和终端

3. 导入项目

打开WebStorm后，你可以

使用HTTPS协议导入

```shell
git clone https://github.com/MultipledMe/PGuide-Docs.git
```

也可以使用SSH协议导入，需要[配置SSH](/csdiy/tools-must/git/#设置ssh密钥)
和[github设置](/csdiy/tools-must/git/#github设置)

```shell
git clone git@github.com:MultipledMe/PGuide-Docs.git
```

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

6. 项目设置

将 .cache .temp .public 文件夹设置为排除

@[artPlayer](https://cos.cqmu.online/docs/2025-03-10_03-56-14.mp4)

7. 阅读开发规范章

请合作开发者依次阅读 [`Git规范`](/contribute/#git规范)、
[`静态资源管理规范`](/contribute/#静态资源管理规范)、[`文档编写规范`](/contribute/#文档编写规范)、
[`常见问题及解决方案`](#🆘-常见问题及解决方案)

:::

### 合作开发流程

> rand777向成员派发TODO任务，各成员更新main分支，并Rebase到自己的开发分支，完成任务后提出PR并在开发群内通知rand777进行审核

```mermaid
graph TD
    A[rand777派发TODO任务] --> B[成员更新main分支]
    B --> C[Rebase到自己的开发分支]
    C --> D[开发完成任务]
    D --> E[创建合并请求并群内通知]
    E --> F[Code Reviewer审核PR]
    F --> G{审核通过?}
    G -->|是| H[合并到main分支]
    G -->|否| D
    H --> A
```

## 项目结构

先大致了解下项目的结构

::: file-tree

- docs
    - .vuepress
        - .cache #缓存文件夹
        - .temp #临时文件夹
        - public #静态资源文件夹
            - avatar #头像文件夹
            - src #图片文件夹
            - icon #矢量图标文件夹
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
            - 子目录
        - 公共服务 #项导公开的服务
            - 子目录
        - 后台管理 #后台管理界面
            - 子目录
        - 大学百科 #大学百科全书
            - 子目录
        - 学习笔记
            - 子目录
        - 项目文档 #包含项目的介绍、人员等
            - 子目录
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


## Git规范

项导文档开发Git规范采用 [:[logos:angular-icon]:Angular 规范](https://zj-git-guide.readthedocs.io/zh-cn/latest/message/Angular%E6%8F%90%E4%BA%A4%E4%BF%A1%E6%81%AF%E8%A7%84%E8%8C%83/)

### 提交规范

采用 **Conventional Commits** 标准：

- `feat`: 新功能，比如引入了PDF导入
- `fix`: Bug 修复，比如不显示图标了
- `docs`: 文档更新
- `style`: 代码格式（空格、分号等）
- `refactor`: 代码重构，比如把图片A换为了图片B
- `perf`: 性能优化，比如删除了不必要的大图片
- `test`: 测试相关，比如测试跨域访问
- `chore`: 构建/工具变更，比如ESlint配置修改

**示例**：

```bash
git commit -m "feat: 添加用户登录功能"
```

**Commitizen辅助**（可选）：

```bash
pnpm commit  # 启动交互式提交
```

### 分支策略

| 分支类型      | 描述               | 命名示例                  |
|-----------|------------------|-----------------------|
| `main`    | 稳定生产版本           | -                     |
| `dev/*`   | 集成分支，每人一条 | -                     |
| `feat/*`  | 功能开发分支           | `feat/user-auth`      |
| `fix/*`   | Bug 修复分支         | `fix/mobile-layout`   |
| `chore/*` | 配置/工具调整          | `chore/eslint-config` |
| `test/*`  | 测试功能分支           | `test/refactor-icon`  |

::: warning 其他注意事项

- 开发分支在main分支签出，不要在其他人的dev分支拉取
- `feat fix chore test` 分支在开发完并且合并请求通过后，请自行删除！
  - 成员完成阶段性开发后，如涉及功能性更改，请自行迁出test测试分支，再请求合并到main分支

:::

**合并要求**：

- 通过 Pull Request 合并到 `main`
- 至少一个团队成员 Code Review
- 通过所有 CI 测试项
  - Vercel CI自动测试，不用管



## 文档编写规范

### 新增页面

在 `docs/` 下创建 .md 文件，按约定式路由生成路径。

创建一篇新文档后，需要关注开头的这几行

```markdown{4}
---
title: #文章标题
createTime: #创建时间（自动生成）
permalink: #永久链接
icon: #可选项，侧边栏图标
---
```

注意更新permalink，要和同级目录相同的前缀；

例如：
/campus-wiki/prefixA/pageA/
/campus-wiki/prefixA/pageB/


### 创建拉取请求Pull Request

在完成所在分支任务后，需要创建合并请求才能将更改应用到生产环境，下面是两种创建PR的方式

:::tabs

@tab :[devicon:webstorm]:WebStorm创建

![2025-03-10_04-04-59.png](../.vuepress/public/src/2025-03-10_04-04-59.png)


@tab :[line-md:github-loop]:Github创建

<LinkCard icon="line-md:github-loop" href="https://github.com/MultipledMe/PGuide-Docs/pulls" title="Create Pull Request" >PGuide Docs Github Page</LinkCard>
![2025-03-10_04-10-16.png](../.vuepress/public/src/2025-03-10_04-10-16.png)

:::

:::tip 完成后
创建完成后记得给 rand777发个消息
:::

## 静态资源管理规范

这里是为了规范您的**图片、视频、PDF、矢量图**引用方法，Plume Vuepress推荐你引用静态资源的方式如下（非必要）：

```markdown
#使用相对public的路径
[image](/src/yyyy-mm-dd_hh-min-sec.png)
```

:::info 静态资源类型、大小规范

- 图片文件：70%分辨率jpg或png图片，放入 `PGuide-Docs/.docs/.vuepress/public/src`中，图片命名方式参考[截图工具设置](/contribute/#截图工具设置)
- 矢量图：.svg .eps文件，放入 `PGuide-Docs/.docs/.vuepress/public/src`中，命名为英文即可

---

- 视频文件：.mp4文件，帧率16/24FPS，放入项导腾讯云对象存储，参考[对象存储](/contribute/#对象存储)
- PDF文件：请尽量精简，不需要的页面不上传，放入项导腾讯云对象存储，参考[对象存储](/contribute/#对象存储)

  :::

### 截图工具设置

::: steps

1. 下载pixpin

前往[Pixpin官网](https://pixpin.cn/)下载并安装该软件

![2025-03-10_04-17-38.png](../.vuepress/public/src/2025-03-10_04-17-38.png)

2. 配置pixpin

右键任务栏中的pixpin图标（没有的话看看上拉键），点击配置

![2025-03-10_04-20-30.png](../.vuepress/public/src/2025-03-10_04-20-30.png)

点击开机后自动启动

转到WebStorm，找到src文件夹，右键open in -> explorer
![2025-03-10_04-21-49.png](../.vuepress/public/src/2025-03-10_04-21-49.png)

进入src文件夹，找到上方地址栏，复制绝对地址

![2025-03-10_04-23-46.png](../.vuepress/public/src/2025-03-10_04-23-46.png)

回到Pixpin，转到保存

![2025-03-10_04-25-05.png](../.vuepress/public/src/2025-03-10_04-25-05.png)

- 设置保存图像质量80
- 手动、快速保存路径删除`Pixpin_`前缀
- 更改文件夹，粘贴刚才复制的绝对地址

转到快捷键/动作

删除所有快捷键，添加新动作

截图设置为F1，删除其他的

添加新动作，动作名称选截图并快速保存，设置为F2
![2025-03-10_04-30-08.png](../.vuepress/public/src/2025-03-10_04-30-08.png)
:::

### 对象存储

所有**PDF、.mp4视频**放在项导腾讯云对象存储上，如有此类文件，将其发送给 rand777，链接处留空，并留下以下格式的TODO

> 今天天气多么好呀，于是我打开了高等数学
> 这里==需要PDF文件==

然后写上TODO: 需要{文件名.pdf}，并`ctrl`+`/`注释，在代码里看起来是这样的：

```text
今天天气多么好呀，于是我打开了高等数学
[//]: # (TODO: 需要高等数学.pdf)
```



## 🆘 常见问题及解决方案

### 遇到git推送异常？（SSL ERROR）

1. 🌐 检查您的星际通讯器（Clash代理）及允许局域网是否开启

![2025-03-05_03-51-27.png](../.vuepress/public/src/2025-03-05_03-51-27.png)

2. 🛠️ 配置Git直通车（本地代理）：
   ```bash
   git config --global http.proxy http://127.0.0.1:7890
   git config --global https.proxy http://127.0.0.1:7890
   ```
3. 🚀 尝试乘坐SSH穿梭机推送：
   ```bash
   git push -u origin:master
   ```

### 🧐 Giscus访问异常？

当看到奇怪的Giscus错误提示时不用惊慌，这是跨域资源请求的小精灵在调皮，对我们的文档城堡没有影响：
![2025-03-10_03-47-41.png](../.vuepress/public/src/2025-03-10_03-47-41.png)

---

## 附录

### 参考链接

- [VuePress 官方文档](https://v2.vuepress.vuejs.org/)
- [Plume 主题配置指南](https://vuepress-theme-plume.rane.wang/)
- [pnpm 使用手册](https://pnpm.io/zh/motivation)
