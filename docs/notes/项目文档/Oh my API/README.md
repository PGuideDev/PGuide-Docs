---
title: Oh my API!
createTime: 2025/03/09 17:57:46
permalink: /project-docs/oh-my-api/
icon: line-md:cloud-alt-print-twotone-loop
tags:
  - ECharts
  - GPT
  - MySQL
  - Python
---

<RepoCard repo="DingGe3/Oh-My-Api"></RepoCard>


## 项目介绍

现行各生成式人工代理商不提供接口，每次需要登录后才能查看使用情况，每次余额不足了都不知道，较为不便，此项目是一个基于 EChart.js 的纯前端界面，用于展示 OpenAI-HK 代理节点的积分使用情况。计划后端采用 MySQL8 进行持久化存储。

## 开发计划

1. API使用日期及月份分布（折线图）
2. 对IP、模型的简单分类，使用滑块组件或下拉框切换视图
3. 接入项导后端登录验证系统及MySQL持久化存储
4. 使用cookie和逆向技术，python自动获取openai-hk日志

## 项目配置

推荐IDE: VSCode，使用教程参考：[PGuide文档](/campus-wiki/common-software/IDE/VSCode/)

### 安装依赖

参考[CQMU镜像站Wiki#PYPI](/public-service/cqmu-mirror/wiki/#pypi)加速安装！

操作步骤：使用pip进行环境管理

```python
pip install -r requirements.txt
```

## 分支说明

### main

纯HTML、CSS、JS实现。

### vue-component-dev

使用现代Vue3组合式语法和API开发oh-my-api


## OpenAI-HK使用日志字段

时间、模型、IP、prompt、completion、token、积分消耗、当前余额积分、请求ID、key、info

[//]: # (TODO: lhr待完善)

