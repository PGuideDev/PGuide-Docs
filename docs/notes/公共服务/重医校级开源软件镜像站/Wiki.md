---
title: CQMU Mirror Wiki
createTime: 2025/02/25 18:35:12
permalink: /public-service/cqmu-mirror/wiki/
icon: simple-icons:wikibooks
---

:::info 关于CQMU Mirror Wiki
重庆医科大学开源软件镜像站Wiki文档旨在帮助同学们更快了解镜像源的相关信息和配置步骤
:::

:::tip
即将上线
:::

## :[devicon:anaconda]: Anaconda 软件仓库

Anaconda 是一个用于科学计算的 Python 发行版，支持 Linux, Mac, Windows, 包含了众多流行的科学计算、数据分析的 Python 包。

Anaconda本身可到[清华大学镜像站](https://mirrors.tuna.tsinghua.edu.cn/anaconda/archive/)下载，但是其软件源默认为国外的源，下载速度较慢，因此我们提供了Anaconda的镜像源。

### 配置

镜像站提供了 Anaconda 仓库与第三方源（conda-forge、msys2、pytorch 等，各镜像站镜像的第三方源并不相同，可以参考下方「第三方镜像源」一节）的镜像，各系统都可以通过修改用户目录下的 .condarc 文件来使用镜像站。

不同系统下的.condarc目录如下：

:[devicon:linux]: ${HOME}/.condarc

:[wpf:macos]: ${HOME}/.condarc

:[logos:microsoft-windows-icon]: C:\Users\<YourUserName>\.condarc

:::tip 注意

Windows 用户无法直接创建名为 `.condarc` 的文件，可先执行 
```shell no
conda config --set show_channel_urls yes 
```
生成该文件之后再修改。

:::

由于更新过快难以同步，TUNA 等一众镜像站不同步**pytorch-nightly, pytorch-nightly-cpu, ignite-nightly**这三个包。

如果您正在从某一镜像源切换到另一镜像源，请检查镜像源是否同步了您所需要的 repo，以及该 repo 是否支持您使用的平台 (e.g. linux-64)。

---

为了保证以下配置在所有镜像站可用，配置中只加入了少量必须的第三方源，您可以在下方的列表中自行寻找并添加其他第三方源。

::: code-tabs
@tab ~/.condarc
```yaml
channels:
  - defaults
show_channel_urls: true
default_channels:
  - https://mirrors.cqmu.edu.cn/anaconda/pkgs/main
  - https://mirrors.cqmu.edu.cn/anaconda/pkgs/r
  - https://mirrors.cqmu.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: https://mirrors.cqmu.edu.cn/anaconda/cloud
  pytorch: https://mirrors.cqmu.edu.cn/anaconda/cloud
```

@tab 快速配置
```shell
cat <<'EOF' > ~/.condarc
channels:
  - defaults
show_channel_urls: true
default_channels:
  - https://mirrors.cqmu.edu.cn/anaconda/pkgs/main
  - https://mirrors.cqmu.edu.cn/anaconda/pkgs/r
  - https://mirrors.cqmu.edu.cn/anaconda/pkgs/msys2
custom_channels:
  conda-forge: https://mirrors.cqmu.edu.cn/anaconda/cloud
  pytorch: https://mirrors.cqmu.edu.cn/anaconda/cloud
EOF
```

:::

即可添加 Anaconda Python 免费仓库。

运行 `conda clean -i` 清除索引缓存，保证用的是镜像站提供的索引。

运行 `conda create -n myenv numpy` 测试一下吧。

---

### 第三方源列表

您可以遵循上述配置文件中的格式添加第三方源（推荐），或者通过以下命令添加第三方源

```shell
conda config --set custom_channels.[package] https://mirrors.cqmu.edu.cn/anaconda/cloud/
```

其中，`package`是你想安装的包名


#### CERNET通用

* auto
* biobakery
* bioconda
* c4aarch64
* caffe2
* conda-forge
* deepmodeling
* dglteam
* fastai
* fermi
* idaholab
* intel
* matsci
* menpo
* MindSpore
* mordred-descriptor
* msys2
* numba
* ohmeta
* omnia
* Paddle
* peterjc123
* plotly
* psi4
* pytorch
* pytorch3d
* pytorch-lts
* pytorch-test
* pyviz
* qiime2
* rapidsai
* rdkit
* simpleitk
* stackless
* ursky

### Anaconda Extra

:::info
参考[Anaconda软件镜像配置](/public-service/cqmu-mirror/wiki/#配置)
:::

## :[logos:pypi]: PYPI 

### pip

### PDM

### Poetry

### Homebrew

## :[devicon:flutter]: Flutter 软件仓库

### flutter_infra

### download.flutter.io

### Flutter SDK

## :[simple-icons:epel]: EPEL 软件仓库

## :[logos:ubuntu]: Ubuntu 软件仓库

## :[devicon:qt]: Qt 软件仓库

## :[devicon:ros]: ROS2 软件仓库

## :[vscode-icons:file-type-tex]: CTAN 镜像