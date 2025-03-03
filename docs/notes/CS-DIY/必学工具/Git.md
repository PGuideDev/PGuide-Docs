---
title: Git
createTime: 2025/03/02 21:14:04
permalink: /csdiy/tools-must/git/
icon: skill-icons:git
---

# Git
## 为什么使用Git
### 典型的使用场景
- 你在学校电脑上写好了代码，但是不想关机就丢失了，这时可以上传到代码管理仓库，下次清空电脑后只需要从你的仓库拉取代码即可，不用背电脑咯。
- 你有好几台电脑，不想带着笨重的游戏本到处跑，可以只带一个轻薄本出门，拉取其他设备上写好的代码即可。
- 你有一个团队，需要合作完成一个项目，在你所在的分支工作，提交 PR 即可。

Git 是一款分布式的代码版本控制工具，Linux 之父 Linus 嫌弃当时主流的中心式的版本控制工具太难用还要花钱，就自己开发出了 Git 用来维护 Linux 的版本（给大佬跪了）。

Git 的设计非常优雅，但初学者通常因为很难理解其内部逻辑因此会觉得非常难用。对 Git 不熟悉的初学者很容易出现因为误用命令将代码给控制版本控制没了的状况（好吧是我）。

但相信我，和 Vim 一样，Git 是一款你最终掌握之后会感叹“它值得！”的神器。

## 如何学习Git
[先试试这个可视化小游戏](https://learngitbranching.js.org/?locale=zh_CN)

不建议初学者在一知半解的情况下贸然使用 Git，因为它的内部逻辑并不能熟能生巧，而是需要花时间去理解。我推荐的学习路线如下：
:::steps
1. 阅读这篇 [Git tutorial](https://missing.csail.mit.edu/2020/version-control/)，视频的话可以看这个尚硅谷Git教程

2. 阅读这本开源书籍 [Pro Git](https://git-scm.com/book/en/v2) 的 Chapter1 - Chapter5，是的没错，学 Git 需要读一本书（捂脸）。

3. 此时你已经掌握了 Git 的原理和绝大部分用法，接下来就可以在实践中反复巩固 Git 的命令了。但用好它同样是一门哲学，我个人觉得这篇如何写好 [Commit Message](https://cbea.ms/git-commit/) 的博客非常值得一读。

4. 好的此时你已经爱上了 Git，你已经不满足于学会它了，你想自己实现一个 Git！巧了，我当年也有这样的想法，这篇 [tutorial](https://wyag.thb.lt/) 可以满足你！

5. 什么？光实现一个 Git 无法满足你？小伙子/小仙女有前途，巧的是我也喜欢造轮子，这两个 GitHub 项目 [build-your-own-x](https://github.com/codecrafters-io/build-your-own-x) 和 [project-based-learning](https://github.com/practical-tutorials/project-based-learning) 收录了你能想到的各种造轮子教程，比如：自己造个编辑器、自己写个虚拟机、自己写个 docker、自己写个 TCP 等等等等。

:::
[关于版本控制 - Git Guide](https://zj-git-guide.readthedocs.io/zh-cn/latest/get-started/%E5%85%B3%E4%BA%8E%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6/)



:::
## 软件集成
通过设置，git 可以在各 IDE 中进行集成，无需使用 git-bash 命令行工具，你可能需要知道[什么是IDE](/campus-wiki/common-softwares/IDE/)，[如何申请教育版](/campus-wiki/apply-student-email/#学生邮箱的作用)

## 设置SSH密钥
第一次需要生成 SSH 密钥对，可以按照以下步骤在你的终端或命令提示符中执行相应的命令：

:::steps
1. **打开终端**（在 Linux 或 macOS 上）或 **命令提示符/PowerShell**（在 Windows 上）。
2. **输入以下命令**（以生成 RSA 类型的密钥）：
```shell
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```
其中 -t rsa 指定密钥类型为 RSA，-b 4096 指定密钥长度为 4096 位，-C 是可选的注释字段，通常你可以用自己的电子邮件地址来标识这个密钥。

3. **按回车键(一路回车)**，它会提示你输入保存密钥的文件路径。默认情况下，密钥会保存在 `~/.ssh/id_rsa`（Linux 和 macOS）或 `C:\Users\<Username>\.ssh\id_rsa`（Windows）中。如果你想使用默认位置，可以直接按回车键。

4. **接下来，它会提示你输入一个密码短语。** 你可以选择输入一个密码短语以增加安全性，或者直接按回车键不使用密码短语。

5. **生成完成后，你会看到类似下面的输出:** ![2025-03-02_21-34-53.png](/src/2025-03-02_21-34-53.png)

6. **查看公钥和私钥** 你可以使用以下命令查看公钥内容（确保不要共享私钥）：

```shell
cat ~/.ssh/id_rsa.pub
```

私钥:`~/.ssh/id_rsa`

公钥:`~/.ssh/id_rsa.pub`  

7. **将公钥添加到服务器:** 如果你要将生成的公钥添加到远程服务器上，通常需要将 `id_rsa.pub` 的内容添加到该服务器的 `~/.ssh/authorized_keys` 文件中。

:::

## 查看SSH公钥
安装 git 后，在桌面右键 

![2025-03-02_21-43-02.png](/src/2025-03-02_21-43-02.png)

![2025-03-02_21-44-08.png](/src/2025-03-02_21-44-08.png)

![2025-03-02_21-44-52.png](/src/2025-03-02_21-44-52.png)

## Github设置
进入个人 github 主页，点击设置：

![2025-03-02_21-46-06.png](/src/2025-03-02_21-46-06.png)

![2025-03-02_21-47-18.png](/src/2025-03-02_21-47-18.png)

Title可以填写设备名，比如笔记本

Key Type不变

Key把刚刚复制的粘贴进去

## 测试
win + r 输入并打开cmd
:::code-tabs
@tab SSH克隆仓库

```shell
git clone git@github.com:kvcache-ai/ktransformers.git
```

:::

显示
![2025-03-02_21-52-46.png](/src/2025-03-02_21-52-46.png)

即为成功设置