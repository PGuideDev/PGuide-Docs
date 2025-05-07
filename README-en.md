# 🌍 PGuide Docs - Cultivating a Knowledge Garden Together

In this interconnected era, knowledge flows like stardust across the cosmos. Every page in this project embodies the collective wisdom of our community. We invite you to join hands in nurturing this ever-growing knowledge tree that belongs to all contributors. 🌱

![Community Collaboration](docs/.vuepress/public/src/pull_requests.png)

## 🌟 Golden Rule
**"When you discover constellations in our documentation, light a path for future travelers"** — Every patch you contribute becomes a stepping stone toward a better open-source world.

---

## 🛠️ Developer's Toolkit

### Core Infrastructure
- **Node.js** v18.20.0+ (Recommend using Node Version Manager)
- **Package Manager**: pnpm 8+ or Yarn 2+ (Modern package management required)

### Recommended Gear
- 🛡️ Environment Guardian: [nvm-windows](https://github.com/coreybutler/nvm-windows)
- 🖥️ Code Forge: WebStorm / VSCode (With Vue ecosystem plugins)

---

## 📂 Codex Structure

```
PGuide-Docs/
├── docs/                    # Chronicle Scrolls (Content Repository)
└── .vuepress/              # Magic Workshop
    ├── public/             # Treasure Chest (Static Assets)
    ├── theme/              # Castle Blueprints (Theme Configuration)
    ├── client.ts          # Portal Keeper (Client Options)
    ├── config.ts          # Grand Encyclopedia (Global Config)
    ├── navbar.ts          # Signposts (Navigation Setup)
    ├── notes.ts           # Treasure Map (Document Structure)
    └── plume.config.ts    # Palette (Theme Styling)
```

---

## 🚀 Quickstart Guide

### 🏗️ Setup Foundations
```bash
# Newcomers should install nvm first
nvm install lts

# Configure Mirror Sources (Choose your express lane):
nvm node_mirror https://mirrors.cernet.edu.cn/nodejs-release/  # Campus Network
nvm node_mirror https://mirrors.aliyun.com/nodejs-release/     # Alibaba Cloud Express

# Equip Modern Toolchain
npm install -g pnpm  # Faster npm alternative
pnpm i              # Install arcane ingredients
pnpm run docs:dev   # Open local preview portal
```

### ✨ Hot-Reload Tips
After modifying navigation config, remember to `Ctrl+C` and restart the server. Wait for "VuePress dev server listening" message to confirm portal activation.

---

## 🌉 Contribution Workflow

### Code Subway Protocol
1. Create local branch `dev/[your-name]`
2. When ready to commit:
   - `Ctrl+Shift+K` to summon commit magic
   - Recommended message format (Following [Angular Commit Convention](https://www.conventionalcommits.org)):
     ```
     docs: Add stargazing navigation to README
     fix: Resolve 404 wormhole issue
     feat: Implement cosmic hyperlink module
     ```
3. Visit [Github Station](https://github.com/xxxx) and click "New pull request"

---

## 🧭 Pitfall Survival Guide

### Resource Plane Rules
- 🎨 Store vector graphics in `/public/*` (Reference directly: `/AI.svg`)
- 📹 Video resources in `src/video`, usage example:
  ```markdown
  <!-- Sample video embed -->
  ```
- 🔍 Encountering errors? Try this reboot spell:
  ```bash
  pnpm update && pnpm upgrade
  ```

### Arcane Markdown Recipes
```markdown
<!-- Pixpin Snapshot Magic -->
![Configuration Demo 1](public/src/stellar-config-1.png)
![Configuration Demo 2](public/src/stellar-config-2.png)
*Press F2 to archive cosmic screenshots*
```

---

## 🆘 FAQ Compendium

### Git Push Failed? (SSL Error)
1. 🌐 Check your Stellar Communicator (Clash Proxy) settings
![2025-03-05_03-51-27.png](docs/.vuepress/public/src/2025-03-05_03-51-27.png)
2. 🛠️ Configure Git Express Lane:
   ```bash
   git config --global http.proxy http://127.0.0.1:7890
   git config --global https.proxy http://127.0.0.1:7890
   ```
3. 🚀 Try SSH Warp Drive:
   ```bash
   git clone git@github.com:Lyrlark/PGuide-Docs.git
   ```

### 🧐 Truth Gate Malfunction?
Don't panic when seeing Giscus CORS errors – these are just mischievous cross-origin sprites that won't affect our documentation castle:

![2025-03-04_00-55-06.png](docs/.vuepress/public/src/2025-03-04_00-55-06.png)

---

## 🌌 Starlight Forum
> "We're not just writing code – we're weaving the web that connects worlds" — Anticipating your first contribution! For uncharted territories, launch signal flares in our Issues section.

[![Embrace Open Source](https://img.shields.io/badge/%E2%9A%99%EF%B8%8F-Open_Source_Journey-brightgreen)](https://opensource.org)

--- 

*Translated with preservation of original metaphors and technical accuracy*
