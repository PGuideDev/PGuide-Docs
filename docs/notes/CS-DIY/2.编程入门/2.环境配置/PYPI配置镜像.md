---
title: PYPI包管理
createTime: 2025/04/28 00:19:22
permalink: /csdiy/program-begin/PYPI-mirror/
icon: devicon:pypi
---

对于Python而言，现在出现了许许多多新型的包管理器(package manager)，编者目前最推荐 uv。当然，作为开放的互联网，其他的包管理器（pip，poetry，conda）也有其独特的优势和使用场景。

编写者：[::noto:red-heart:: Lily, rand777  ](/friends/persons/)                        

## Astral-UV


[https://docs.astral.sh/uv/getting-started/installation/](https://docs.astral.sh/uv/getting-started/installation/)
### 安装

#### Windows

:::tabs

@tab pip安装
1.打开命令提示符，输入以下命令

```shell
pip install uv
```
安装成功后，将uv添加到环境变量，这样即使切换到虚拟环境也可以使用:

2.打开命令提示符窗口，输入

```shell
where uv
```
找到uv的存储位置并复制到文件资源管理器的搜索栏，

[lwj2024223201](../../../../../../../../../java%E6%95%B0%E6%8D%AE%E5%AD%98%E6%94%BE/untitled2222222222/lwj2024223201)![img_9.png](img_9.png)

![2025-05-15_16-44-21.png](../../../../.vuepress/public/src/2025-05-15_16-44-21.png)

3.直接在电脑搜索栏中，搜索"控制面板"，打开"控制面板"

4.点击"系统与安全"

![2025-05-15_16-45-15.png](../../../../.vuepress/public/src/2025-05-15_16-45-15.png)

5.点击"系统"

![2025-05-15_16-45-49.png](../../../../.vuepress/public/src/2025-05-15_16-45-49.png)

6.点击"高级系统"

![2025-05-15_16-46-24.png](../../../../.vuepress/public/src/2025-05-15_16-46-24.png)

7.点击"环境变量"

![2025-05-15_16-47-10.png](../../../../.vuepress/public/src/2025-05-15_16-47-10.png)

8.点击"Path",点击"编辑"

![2025-05-15_16-47-57.png](../../../../.vuepress/public/src/2025-05-15_16-47-57.png)

9.点击"新建",粘贴复制的Scripts文件地址，然后一路点确定

![2025-05-15_16-48-29.png](../../../../.vuepress/public/src/2025-05-15_16-48-29.png)

@tab Powershell安装

```shell
powershell -ExecutionPolicy ByPass -c "irm https://astral.sh/uv/install.ps1 | iex"
```

:::



最后打开一个新的命令提示符窗口，输入以下命令，验证更改

```shell
uv
```

![2025-05-15_16-49-48.png](../../../../.vuepress/public/src/2025-05-15_16-49-48.png)

出现这样的信息则表示添加成功

* PowerShell脚本安装

1.打开PowerShell,执行以下代码:

```shell
irm https://astral.sh/uv/install.ps1 | iex
```
2.输入以下代码查看是否安装成功:

```shell
uv --version
```

这样就可以查看安装的UV版本

* 使用pipx:

```shell
pipx install uv
```

安装完成后打开新的终端窗口，运行uv --version来验证是否安装成功

#### Linux 

1.打开终端，输入以下命令:

```shell
sudo apt install curl
curl -LsSf https://astral.sh/uv/install.sh | sh
```

![2025-05-15_16-51-55.png](../../../../.vuepress/public/src/2025-05-15_16-51-55.png)

输入以下命令验证是否安装成功:

```shell
uv --version
```
![2025-05-15_16-52-12.png](../../../../.vuepress/public/src/2025-05-15_16-52-12.png)

若显示uv的版本信息，则表示安装成功

### UV的基础用法

1.创建虚拟环境

打开命令提示符，输入以下命令,创建虚拟环境:

```shell
uv venv .venv
```

激活环境:
```shell
.venv\Scripts\activate
```
![2025-05-15_17-00-01.png](../../../../.vuepress/public/src/2025-05-15_17-00-01.png)

2.兼容pip常用命令

```shell
#安装一个包
uv pip install <package>
```

```shell
#卸载包
uv pip uninstall <package>
```

![2025-05-15_17-02-32.png](../../../../.vuepress/public/src/2025-05-15_17-02-32.png)

3.依赖编译和锁定

```shell
#使用uv pip freeze >命令生成requirements.txt文件，这个命令会列出当前虚拟环境中所有已安装的包以及版本号，并将它们写入到文件中
uv pip freeze >requirements.txt
```
```shell
#uv pip compile会读取requirements.txt文件中的依赖
uv pip compile requirments.txt -o require
```
![2025-05-15_17-05-52.png](../../../../.vuepress/public/src/2025-05-15_17-05-52.png)

4.本地项目包管理

如果你需要管理本地项目依赖，可以使用uv add命令

```shell
uv add numpy
```
![2025-05-15_17-06-42.png](../../../../.vuepress/public/src/2025-05-15_17-06-42.png)

### 小结

UV是是一个用Rust编写的现代Python打包工具，它的核心目标是极速替代pip、pip-tools和venv等工具的功能。

如果你厌倦了等待pip解析和安装依赖，那么uv绝对值得你尝试。开始使用uv venv和uv pip install,体验一下“瞬间”完成依赖安装的快感吧！

### 参考资料

- [rand777的博客](https://blog.rand777.space/article/20250717/)

## 配置镜像

参考[PYPI镜像配置](/public-service/cqmu-mirror/wiki/#pypi)

