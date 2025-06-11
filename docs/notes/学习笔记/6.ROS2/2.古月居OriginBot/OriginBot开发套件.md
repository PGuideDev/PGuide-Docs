---
title: OriginBot开发套件
createTime: 2025/02/25 05:19:11
permalink: /learning-notes/ROS2/origin-bot-toolkit/
icon: https://www.originbot.org/assets/img/favicon.png
---

OriginBot使用与开发过程主要在PC端完成，完成以上Ubuntu和ROS2的环境配置后，还需要将OriginBot的PC端功能包下载到电脑上，并且完成编译，便于后续操作使用。

:::tip
如果你觉得下载过慢，可以参照[VMWare安装](../1.1ROS2系统安装.md)中的`ROS2系统安装`下`配置镜像源`操作。
:::

:::steps

1. 创建PC端工作空间

```shell
mkdir -p ~/dev_ws/src
```

2. 下载originbot_desktop和依赖包

OriginBot电脑端的功能包都放置在[originbot_desktop代码仓库](https://gitee.com/guyuehome/originbot_desktop)中：

```shell
cd ~/dev_ws/src
sudo apt install git #安装git
git clone https://gitee.com/guyuehome/originbot_desktop.git 
```
3. 安装功能包和依赖

为满足后续机器人开发的使用，还需要安装一系列功能包与依赖库：

这个过程需要反复确认，不要走开！
```shell
sudo apt install python3-colcon-ros
sudo apt install python3-colcon-common-extensions              # ROS2编译器
sudo apt install ros-${ROS_DISTRO}-nav2*                       # 安装导航功能包
sudo apt install ros-${ROS_DISTRO}-xacro                       # 安装模型解析功能包
sudo apt install ros-${ROS_DISTRO}-teleop-twist-keyboard       # 安装键盘控制节点
sudo apt install ros-${ROS_DISTRO}-rmw-cyclonedds-cpp          # 安装Cyclone DDS
sudo apt install ros-${ROS_DISTRO}-cv-bridge                   # 安装图像处理包
sudo apt install ros-${ROS_DISTRO}-robot-state-publisher       # 安装机器人状态发布者包
sudo apt install ros-${ROS_DISTRO}-joint-state-publisher       # 安装关节状态发布者包
sudo apt install ros-${ROS_DISTRO}-joint-state-publisher-gui   # 安装关节状态发布者包
sudo apt install ros-${ROS_DISTRO}-image-transport             # 安装图像压缩包
sudo apt install ros-${ROS_DISTRO}-image-transport-plugins     # 安装图像压缩包
sudo apt install libzbar-dev 
```
一次下载完
```shell
cd ~/dev_ws/src/originbot_desktop/
./install_prereq.sh
```

4. 编译工作空间

```shell
cd ~/dev_ws
colcon build
```

5. 设置环境变量

为方便后续使用，我们需要配置环境变量，让系统知道工作空间的位置：
```shell
gedit ~/.bashrc
```

```shell
source ~/dev_ws/install/setup.sh
```

至此，OriginBot电脑端的功能包配置完毕。

:::