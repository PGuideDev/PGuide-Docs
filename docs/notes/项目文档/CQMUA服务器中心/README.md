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

头部：导航栏、主内容区（信息展示、交互功能、数据可视化）、页脚（联系方式、版权声明）、功能组件（普通按钮、图标按钮、导航菜单等），其中主内容区有CQMUA联盟高校板块、账户板块、MUA联盟高校板块
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





