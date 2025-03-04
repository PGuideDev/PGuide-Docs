# 👫 项导文档 - 共建知识花园

万物互联的时代，知识的传递如同满天星火。本项目的每一页文档，都是社区伙伴们智慧的结晶。在此诚邀您与我们携手，共同浇灌这株属于每个人成长的知识树🌱

![社区协作](docs/.vuepress/public/src/pull_requests.png)

## 🌟 温馨贴士
**“当您在文档中发现星辰，也请为后来者点亮一盏路灯”** — 您的每一个补丁都是通往更美好开源世界的台阶

---

## 🛠️ 开发工具箱

### 基础设施
- **Node.js** v18.20.0+（推荐使用Node版本管理器）
- **包管理器**：pnpm 8+ 或 Yarn 2+（需要现代项目管理体验）

### 推荐装备
- 🛡️虚拟环境守护者：[nvm-windows](https://github.com/coreybutler/nvm-windows)
- 🖥️代码工坊：WebStorm / VSCode（建议安装Vue相关插件）

---

## 📂 核心档案库

```
项导文档/
├── docs/                    # 故事书页（网站内容存档）
└── .vuepress/              # 魔法工坊
    ├── public/              # 百宝箱（图片/字体等静态资源）
    ├── theme/               # 城堡装修图纸（主题配置）
    ├── client.ts           # 接待员（客户端选项）
    ├── config.ts           # 百科全书（全局配置）
    ├── navbar.ts           # 指路牌（导航栏配置）
    ├── notes.ts            # 藏宝图（文档结构导航）
    └── plume.config.ts     # 调色盘（主题样式配置）
```

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
   - 推荐消息格式：（让代码会说话，代码规范为 [Angular Commit](https://zj-git-guide.readthedocs.io/zh-cn/latest/message/Angular%E6%8F%90%E4%BA%A4%E4%BF%A1%E6%81%AF%E8%A7%84%E8%8C%83/)）
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
  ```markdown
  ```
- 🔍 遇到奇怪报错时，尝试这个重启秘籍：
  ```bash
  pnpm update && pnpm upgrade
  ```

### 神秘配方
```markdown
<!-- Pixpin截图魔法 -->
![配置示例1](public/src/星空配置图1.png)
![配置示例2](public/src/星空配置图2.png)
*按F2即可完成星际截图归档*
```

---

## 🆘 常见问题

### 遇到git推送异常？（错误类型：SSL ERROR）
1. 🌐 检查您的星际通讯器（Clash代理）及允许局域网是否开启
![2025-03-05_03-51-27.png](docs/.vuepress/public/src/2025-03-05_03-51-27.png)
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

![2025-03-04_00-55-06.png](docs/.vuepress/public/src/2025-03-04_00-55-06.png)

---

## 🌈 星光留言板
> "我们不是在编写代码，而是在编织联结世界的网络" —— 期待您的第一次贡献！遇到任何未知星域，欢迎在Issues发射信号弹~

[![拥抱开源](https://img.shields.io/badge/%E2%9A%99%EF%B8%8F-%E5%BC%80%E6%BA%90%E4%B9%8B%E6%97%85-brightgreen)](https://opensource.org)

--- 
