---
title: VPN搭建
createTime: 2025/05/03 13:23:22
permalink: /learning-notes/cybersecurity/vpn-setup/
icon: pixel:cybersecurity
---

## WireGuard

WireGuard 是一个开源的 VPN 协议，旨在提供更快、更安全的连接。它比传统的 VPN 协议（如 OpenVPN 和 IPSec）更轻量级，易于配置和使用。

### Tailscale

<LinkCard icon="simple-icons:tailscale" href="https://tailscale.com/" title="tailscale" description="Tailscale makes creating software-defined networks easy: securely connecting users, services, and devices."></LinkCard>

OpenVPN 是虚拟专用网络 (VPN) 的热门选择，但与 Tailscale 相比，OpenVPN 需要更多的设置、管理和维护。Tailscale 是基于 WireGuard® 协议构建的网状 VPN 服务。您可以获得 WireGuard 的性能和安全优势，而无需使用 OpenVPN 协议进行基本的 SSL/TLS 加密。

## OpenVPN

::: code-tree title="Vue App" height="400px" entry="src/main.ts"
```vue title="src/components/HelloWorld.vue"
<template>
  <div class="hello">
    <h1>Hello World</h1>
  </div>
</template>
```

```vue title="src/App.vue"
<template>
  <div id="app">
    <h3>vuepress-theme-plume</h3>
    <HelloWorld />
  </div>
</template>
```

```ts title="src/main.ts"
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
```

```json title="package.json"
{
  "name": "Vue App",
  "scripts": {
    "dev": "vite"
  }
}
```
:::