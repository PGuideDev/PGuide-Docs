---
title: 私有容器镜像管理
createTime: 2025/02/25 18:48:25
permalink: /public-service/data-center/docker-registry/
icon: teenyicons:docker-outline
tags:
  - PGuide OAuth
  - Docker
  - OSS 
---

:::important 面向对象
仅面向工作室成员使用，使用工作室统一认证账户登录。
:::

## Gitlab

:::tip
Gitlab 提供了私有的容器镜像仓库，使用 Gitlab 的 OAuth 认证方式登录。
:::

## Docker Registry



工作室内网已搭建私有的 Docker Registry，使用 PGuide OAuth 认证方式登录。

:::info 
- 支持 Docker Registry 的所有功能
- 多镜像并发下载
- 动态负载均衡
- 断点续传支持
- Docker镜像代理服务
- 哈希验证安全性
:::

```mermaid
sequenceDiagram
    participant 客户端
    participant 镜像源A
    participant 镜像源B
    participant 镜像源C
    participant Docker官方服务器
    participant 哈希验证

    客户端->>镜像源A: 并发请求分片1
    客户端->>镜像源B: 并发请求分片2
    客户端->>镜像源C: 并发请求分片3
    镜像源A-->>客户端: 返回分片1数据
    镜像源B-->>客户端: 返回分片2数据
    镜像源C-->>客户端: 返回分片3数据
    客户端->>哈希验证: 提交分片校验
    哈希验证-->>客户端: 校验结果
    alt 校验失败
        客户端->>Docker官方服务器: 重新请求正确分片
        Docker官方服务器-->>客户端: 返回正确数据
    end
    客户端->>客户端: 组合分片(断点续传支持)
```
