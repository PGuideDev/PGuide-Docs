---
title: GPT API公共调用网站及应用部署集合
createTime: 2025/02/24 02:20:55
permalink: /public-service/GPT/
icon: /icon/openai.svg
---

此页面汇集了目前市面上 98%以上的大模型，且涵盖了 github 上主流的开源框架和技术，欢迎挨个体验。UpStream Sync 功能启用可以自动同步
fork 的项目，尝试到市面上最新的大模型功能。One API 配合统一身份认证系统方便配置，欢迎体验。

## 预备知识

在使用之前，得先了解几个基本概念：
### token
ChatGPT的本质是对字符串的处理、加工、输出，每个最小作用单元即为token，它可以是一个单词、一个词组、一个标点符号、一个子词或者一个字符。关于token更详细的介绍，可以[查看这篇文章](https://cloud.baidu.com/qianfandev/topic/268386)
由于不同模型的能力不同，相同的token它们的定价也是不同的，[在这里](https://openai.com/api/pricing/)
您可以查看OpenAI的chatGPT的token定价。

### proxy代理
因为某些原因，部分国外网站或服务无法直接访问，所以我们需要一个可以帮我们访问这些网站的中间人，让它们帮我们进行访问。香港是个好地方，一般而言，可以直接访问全球网络，大陆地区就不太行力。在类似的这些地方（如马来西亚、新加坡、越南等）有专门提供代理服务的厂商，此项目依赖于[OpenAI-HK](https://openai-hk.com/open/index)
的api代理。这些厂商在全球部署很多反向代理服务器，可以进行并发数据访问，大大降低访问延迟的同时减少了账号访问限制，最重要的是，
**省钱**。

### max_token和上下文数量
max_token就是一次对话中GPT返回给您的最多token数量，这个可以直接拉满，否则可能出现回复到一半停止的情况。上下文数量context和GPT的能力相关，性能越强的模型一般而言记忆更好。

### 服务端
以openAI为例，官网给出的接口地址为https://api.openai.com ，openAI-HK则是将汇聚流量负载均衡，以减轻单节点的压力，在不同的服务端分批次请求用户响应，在自建网关[https://api.openai-hk.com](https://api.openai.com)
   完成重汇聚。

## GPT能干啥

包括但不限于**大学生的编程作业，常规数学问题，写诗歌，绘画，识别文字、图像、视频，生成图、声、视频、3D模型**。

具体可以参考[提示词工程指南](https://www.promptingguide.ai/zh)，简单来说就是用一段话催眠GPT使它返回对于我们相对满意的答案。在github上也有大佬弄好了现成的:

<RepoCard repo="f/awesome-chatgpt-prompts"></RepoCard>

<LinkCard icon="https://steampp.net/svg/logo.png" title="Watt Tookit" href="https://steampp.net/">
访问不了github？下载这个正向代理软件，一键加速github即可
</LinkCard>

这个软件本质上是修改本地 Host
文件实现正向代理，如果你感兴趣，可以参考这篇文章[host文件](https://www.yuque.com/pguide/public/bgifg8ximig3s7t2)


## 应用部署集合
这下面的都已经部署好了，直接使用即可，所有人的对话均采用AES256加密，管理员也不知道你问了什么，放心用。

左边侧边栏有对应的使用文档

<LinkCard icon="https://lobechat.com/icons/icon-192x192.png" title="LobeChat" href="https://chat.pguide.studio/">

LobeChat OpenSource LLM chat platform.

</LinkCard>