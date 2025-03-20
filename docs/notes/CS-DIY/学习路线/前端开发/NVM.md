---
title: NVM
createTime: 2025/03/02 17:16:56
permalink: /csdiy/study-path/front-dev/NVM/
icon: simple-icons:nvm
---

Node Version Manager，不同的前端项目往往需要不同的 node.js 版本，它可以帮我们快速切换版本。

## Windows
### 安装
前往 :[line-md:github-twotone]: [nvm for windows](https://github.com/coreybutler/nvm-windows)

你看到的版本号可能不一样，因为 nvm 一直在更新!

根据如下步骤进行操作
![2025-03-12_23-06-11.png](/src/2025-03-12_23-06-11.png)
![2025-03-12_23-05-21.png](/src/2025-03-12_23-05-21.png)

下载完成后安装，一直下一步即可

::: warning 重启IDE和终端
安装完后，需要重启IDE或终端以重载环境变量，这样你输入nvm后才有效
:::

### 验证安装
![2025-03-12_23-05-01.png](/src/2025-03-12_23-05-01.png)

### npm安装与使用
淘宝镜像用于加速 npm 包下载速度
::: steps

1. 安装Node.js

这里的lts是指长期支持版long term support

```shell
nvm install lts
```

2. 使用npm
```shell
nvm use [ 版本号 ]
```

出现 now use node[ 版本号 ] 即可

3. 配置npm淘宝镜像源

npm软件包默认在国外，配置了国内镜像下载更快

```shell
npm config set registry https://registry.npmmirror.com
```


:::

