---
title: I miss you and I've not missed you~
description: 添加社会链接
permalink: /friends/quotes/
createTime: 2025/03/06 16:40:46
---

## 图标含义

:::tip
下面的表格解释了友情链接中[个人信息社会链接](/friends/persons/)的图标含义。
:::

| 图标                                        | 含义                                                                                |
|-------------------------------------------|-----------------------------------------------------------------------------------|
| ::mingcute:qq-fill =24px::                | 添加QQ好友，点击即可添加                                                                     |
| ::akar-icons:github-fill =24px::          | 个人github主页                                                                        |
| ::fa-solid:blog =24px::                   | 个人博客页                                                                             |
| ::mdi:web =24px::                         | 门户网站页，多为子页面                                                                       |
| ::mingcute:bilibili-line =24px::          | 个人B站主页，[Bilibili](https://www.bilibili.com/)                                      |
| ::fxemoji:email =24px::                   | 电子邮箱，点击即可联系                                                                       |
| ::fa-brands:orcid =24px::                 | ORCID，[什么是ORCID](https://info.orcid.org/zh-CN/%E4%BB%80%E4%B9%88%E6%98%AF-orcid/) |
| ::academicons:google-scholar =24px::      | [谷歌学术](https://scholar.google.com/)个人主页                                           |
| ::prime:twitter =24px::                   | [X社交平台](https://x.com/)，原twitter                                                  |
| ::vscode-icons:file-type-pdf2 =24px::     | 个人PDF简历                                                                           |
| ::line-md:phone-call-twotone-loop =24px:: | 个人/座机电话                                                                           |
| ::mdi:facebook =24px::                    | [Facebook](https://www.facebook.com/)个人主页                                         |
| ::mdi:wechat =24px::                      | 个人微信（暂未接入点击添加）                                                                    |

## 我该怎样添加社会链接

:::info 不同的添加方式

- 管理员/开发人员收到你的社交链接后，会根据你的需求添加到友情链接中。
- 前往github仓库的 [friends文件夹](https://github.com/Lyrlark/PGuide-Docs/edit/master/docs/notes/friends-persons.md)
  自行编辑，提交PR即可。
  :::

:::tip 目前可编辑的字段
| 字段 | 含义 |
|----------------|-----------------------------------|
| name | 您的呢称 |
| link | 您的个人主页或网站链接 |
| avatar | 您的头像路径或URL |
| desc | 一段简短的描述或格言 |
| location | 地理位置 |
| organization | 所属组织或机构，可多种 |
| socials | 社交网络或联系方式，可多种 |
| backgroundColor| 好友卡片的背景颜色 |
| color | 好友卡片的文字颜色 |
| nameColor | 好友卡片的姓名颜色 |

示例：

```yaml
- name: rand777
  link: https://www.rand777.space
  avatar: https://www.rand777.space/avatar.png
  desc: 一个热爱开源的学生
  location: 中国
  organization: 中国原神大学
  socials:
    - icon: bxl-github
      link:
    - icon: bxl-blogger
      link:
```

:::

### QQ

QQ添加好友链接的方式如下：

@[artPlayer](https://cos.cqmu.online/docs/video/qq-share.mp4)
