# 项导文档

人人为我，我为人人。身在互联网的开源时代，我们深知互帮互助、共同进步的重要意义，这篇文档凝聚了同学和老师们的

## 依赖环境
- Node.js v18.20.0+ 
- pnpm 8+ 或 Yarn 2+

## 项目结构

`docs`: 静态编译的网站页面内容

`.vuepress`
 - `public/`: 静态资源文件夹
 - `theme`: 主题参数设置文件夹
 - client.ts: 客户端配置文件
 - config.ts: 全局配置文件
 - navbar.ts: 导航栏配置文件
 - notes.ts: 文档结构配置文件
 - plume.config.ts: 主题配置文件

## 项目安装
- 推荐使用nvm做Node.js环境管理
  - [nvm windows](https://github.com/coreybutler/nvm-windows)
- IDE:WebStorm 或 VSCode



- 使用nvm安装npm
    ```shell
    nvm install lts
    ```
  - 配置NodeJS Release 软件仓库镜像
    - 校园网联合镜像站：
    参考 [https://help.mirrors.cernet.edu.cn/nodejs-release/](https://help.mirrors.cernet.edu.cn/nodejs-release/)

      ```shell
      nvm node_mirror https://mirrors.cernet.edu.cn/nodejs-release/
      ```
    - 阿里云
      ```shell
      nvm node_mirror https://mirrors.aliyun.com/nodejs-release/
      ```
- 全局安装pnpm
    ```shell
    npm install -g pnpm
    ```
- 安装pnpm依赖
    ```shell
    pnpm i
    ```
- 启动项目开发环境
    ```shell
    pnpm run docs:dev
    ```

## 创建合并请求
- 首先需要拉取远程仓库代码到本地仓库
- Local本地新建dev/***[你的分支名]
- 对新建分支内项目修改之后，进行commit push
  (快捷键 ctrl + shift + K)
- push时简介说明参考：[AngluarCommit Standard](https://zj-git-guide.readthedocs.io/zh-cn/latest/message/Angular%E6%8F%90%E4%BA%A4%E4%BF%A1%E6%81%AF%E8%A7%84%E8%8C%83/)
  (如：此处修改readme，便书写docs:README 新增项目启动介绍)
- 注意在提交时查看上传平台,详见[2025-03-01_02-17-57.mp4](docs%2F.vuepress%2Fpublic%2Fsrc%2F2025-03-01_02-17-57.mp4)
- 进入github等平台仓库，点击Pull requests，点击New pull request可见提交的PR，输入此次PR提交的内容即可，图片展示可见：![pull_requests.png](docs%2F.vuepress%2Fpublic%2Fsrc%2Fpull_requests.png)

## 文件路径配置

首先在 `docs/.vuepress/notes.ts` 中配置notes的路径

## 其他注意事项
- 所有静态文件放在`docs/.vuepress/public`中
- 其他地方引用静态文件时，从相对路径public开始
  - 例如:public下有AI.svg文件，引用时使用 `AI.svg` 路径即可
- markdown文档隔行写
- 请将`public`文件夹设置为 **Excluded**：右键 -> mark as -> excluded folder
  - 否则svg等静态文件的命名空间等信息会报错。

## 文档

- [vuepress](https://vuepress.vuejs.org/)
- [vuepress-theme-plume](https://theme-plume.vuejs.press/)
