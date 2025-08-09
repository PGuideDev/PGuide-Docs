---
title: 全国大学生竞赛组队系统
createTime: 2025/03/04 00:08:05
permalink: /project-docs/match-competitions/
icon: hugeicons:add-team
tags:
  - PGuide OAuth
  - Java
---

:::danger 这是一篇未完成的文档

:::

<RepoCard repo="DKwms/pguide"></RepoCard>

## 项目简介

> 全国大学生竞赛组队系统，是一个为大学生竞赛提供组队服务的平台。该项目旨在为大学生提供一个竞赛组队交流平台，同时定期展示相关竞赛信息，为大学生竞赛、创新创业项目提供支持和帮助。项目分为组队管理、竞赛信息、项目管理等多个模块，并在ruoyi框架的基础上进行了对后台管理系统的二次开发。

技术栈：

SpringBoot、Mybatis、Mybatis Plus、Spring Cloud Alibaba、Gateway、Nacos、OpenFeign、Vue2、Redis、MySQL、Nginx、Elastic Search。

后台管理系统基于ruoyi进行的二次开发

## 项目结构

::: file-tree

- PGuide-Back 后端目录
  - pguide-api 接口层
  - pguide-auth 鉴权中心
  - pguide-business-providers 业务模块
  - pguide-code-generator 代码生成器（待完成，暂时使用的是ruoyi）
  - pguide-commons 工具包
    - pguide-common-core 基础工具包
    - pguide-common-download 下载工具包
    - pguide-common-page 分页工具包
    - pguide-common-redis redis工具包
    - pguide-common-search elasticsearch工具包
    - pguide-common-security 鉴权工具包
  - pguide-demo demo
  - pguide-entity 实体类
  - pguide-gateway
    - sc-gateway 网关
  - pguide-service service层
  - pguide-third-integration 整合第三方依赖
- PGuide-Front 前端目录
  - pguide-auth-ui 鉴权中心前端
  - pguide-match-ui 项目组队前端
  - pguide-ui-demo 测试页面
- PGuide-Manage 管理系统目录
  - PGuide-Manage
  - ruoyi-ui 基于ruoyi开发的开发管理系统及demo
- .gitignore
- README.md
:::
