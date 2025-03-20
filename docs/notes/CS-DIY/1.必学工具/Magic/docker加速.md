---
title: docker加速
createTime: 2025/03/03 23:46:13
permalink: /csdiy/tools-must/magic/docker-speed/
icon: lineicons:docker
---

:::info 相关知识
- 计算机必学工具[:[catppuccin:docker-compose]:docker](/csdiy/tools-must/docker/)
- daemon守护进程

:::

在国内使用 Docker 的朋友们，可能都遇到过配置镜像源来加速镜像拉取的操作。然而，最近几个月发现许多曾经常用的国内镜像站（包括各种云服务商和高校镜像站）已经无法使用。

<LinkCard icon="iconoir:network-solid" href="https://www.coderjia.cn/archives/dba3f94c-a021-468a-8ac6-e840f85867ea" title="Mirror List">国内可用Docker镜像源汇总</LinkCard>

为了自动化收集可用docker镜像源，并且确保容器镜像安全，rand777发起一个新项目 `async-my-docker`