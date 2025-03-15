---
title: CQMUA服务器中心
createTime: 2025/03/04 00:02:13
permalink: /project-docs/cqmua-center/
icon: '/icon/command_block.gif'
---

## CQMUA是什么？

CQMUA，全称Chongqing Minecraft University Alliance，是重庆市高校的Minecraft联盟。CQMUA的本质是借助Minecraft的开放性和创造性，构建一个融合教育、社交与创新的数字化生态,是打造游戏研发、社群运营与高校资源的共创平台，能够汇聚实战经验、创新项目及行业资源，赋能成长与突破。


## 项目简介

服务器中心的使命是为重庆高校的Minecraft玩家提供一个服务器的状态监控界面。用户可一键查看各校服务器实时状态，自由选择进入不同高校的虚拟校园，探索其特色地图与课程内容，轻松找到并体验自己感兴趣的学术与创意项目。MUA服务器中心让“逛遍全球高校服务器”像刷社交网络一样简单，真正实现跨校资源触手可及。

<RepoCard repo="CQMUA/ServerCenter4CQMUA"></RepoCard>

## 项目技术

- 服务器中心前端：使用Vue.js开发，提供服务器状态监控界面。

## 项目进度

- 完成前端页面、UI的设计
- 完成重庆部分高校Minecraft服务器的收集

## CQMUA数组含义

:::tip 目前可编辑的字段
| 字段 | 含义 |
|----------------|-----------------------------------|
| id | 高校缩写 |
| name | 大学名字+组织名 |
| community | 组织缩写 |
| avatar | 高校校徽的图片链接 |
| avatar_university | 组织图案链接 |
| link | 高校Minecrft的网站链接 |
| servers | 高校Minecraft服务器的IP地址 |

示例：

```yaml
- id: CQMU
  name: 重庆医科大学Minecraft组织CYMC
  community: CYMC
  avatar: https://www.cqmu.online/wp-content/uploads/2024/10/%E4%B8%8B%E8%BD%BD__1_-removebg-preview.png
  avatar_university: https://upload.wikimedia.org/wikipedia/zh/thumb/e/e1/Chongqing_Medical_University_logo.svg/400px-Chongqing_Medical_University_logo.svg.png
  link: https://www.cqmu.online/
  servers:
    cqmua_main: 'mc.cqmua.cn',
    df_entry: 'mc.cytouhou.top',
    mua_sc: 'sc.mua.cymc.club',
    mua_hb: 'hb.mua.cymc.club',
    mua_zj: 'zj.mua.cymc.club',
    mua_sh: 'sh.mua.cymc.club',
    mua_bj: 'bj.mua.cymc.club'
    
```
:::

## 组件的功能
一、头部

- 导航栏 
  - 组成结构：采用水平布局设计，集成核心功能入口
  - 主菜单项：大项目/互通服/认证系统/友情链接/深色模式开关

二、主内容区（CQMUA联盟高校、MUA联盟高校）

- CQMUA联盟板块
  -  可视化布局：自适应网络系统
  - 校徽LOGO矩阵：
    - 点击交互：1.织标识（校徽+MC组织定制LOGO）2.服务器状态（显示服务器在线个数）3.快速入口（跳转链接）
- MUA联盟板块同上
- 用户中心
  - 注册CQMUA passport 
  - 在线玩家列表

三、页脚
- 2025 ©CQMUA | Open Source refers to Github | Wish you a good day!



# Development Plan

- [ ] Query by ID
- [ ] Province Classification
- [x] Integration with YuGaoLian Joint Server
    - [x] Template Design
- [ ] OAuth2 Authentication
    - [ ] CQMUA Account
        - [ ] Admin CRUD
    - [ ] JWT by Union CAS-logto
- [x] Performance Optimization
    - [x] No API requests on first page load
    - [x] Requests only made when user clicks on school icon
    - [x] No further requests after flip animation cycle completes





