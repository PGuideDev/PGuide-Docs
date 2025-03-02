---
title: NVM
createTime: 2025/03/02 17:16:56
permalink: /csdiy/study-path/front-dev/NVM/
icon: simple-icons:nvm
---

Node Version Manager，不同的前端项目往往需要不同的 node.js 版本，它可以帮我快速切换版本

# Windows
## 安装
前往 [nvm for windows(github)](https://github.com/coreybutler/nvm-windows)<br>
你看到的版本号可能不一样，因为 nvm 一直在更新!

根据如下步骤进行操作
![img_3.png](..%2F..%2F..%2F..%2F.vuepress%2Fpublic%2Fsrc%2Fimg_3.png)
![img_2.png](..%2F..%2F..%2F..%2F.vuepress%2Fpublic%2Fsrc%2Fimg_2.png)

下载完成后安装，一直下一步即可

## 验证安装
![img_4.png](..%2F..%2F..%2F..%2F.vuepress%2Fpublic%2Fsrc%2Fimg_4.png)

## npm安装与使用
淘宝镜像用于加速 npm 包下载速度
::: code-tabs

@tab 配置npm淘宝镜像源
```shell
npm config set registry https://registry.npmmirror.com
```

@tab 安装LTS长期支持版本
```shell
nvm install lts
```

@tab 使用npm
```shell
nvm use lts
```

:::

出现 now use node[ 版本号 ] 即可