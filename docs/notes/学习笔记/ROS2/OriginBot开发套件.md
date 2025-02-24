---
title: OriginBot开发套件
createTime: 2025/02/25 05:19:11
permalink: /learning-notes/ROS2/origin-bot-toolkit/
icon: https://www.originbot.org/assets/img/favicon.png
---

OriginBot使用与开发过程主要在PC端完成，完成以上Ubuntu和ROS2的环境配置后，还需要将OriginBot的PC端功能包下载到电脑上，并且完成编译，便于后续操作使用。

:::steps

1. 创建PC端工作空间

```shell
mkdir -p ~/dev_ws/src
```

2. 下载originbot_desktop和依赖包

OriginBot电脑端的功能包都放置在[originbot_desktop代码仓库](https://gitee.com/guyuehome/originbot_desktop)中：

```shell
cd ~/dev_ws/src
git clone https://gitee.com/guyuehome/originbot_desktop.git 
```
3. r
:::