---
title: Win11系统重装
createTime: 2025/03/05 21:05:14
permalink: /csdiy/computer-common-knowledge/update/Win11re-setup/
icon: brandico:win8
---

## Win11系统重装
### 【前置提醒：本次教程使用机型参数，供参考】
- 💻电脑型号： 联想2022款 Y9000P LapTop;
- 📟主板型号： 镁光LNVNB161216;
- ⌨️处理器CPU： 十二代酷睿 十四核 I7-12700H; 
- 📼显卡型号： 英伟达 RTX 3060 LapTop 16GB；
- ⚙️硬盘(原装)型号： 海力士SKHynix_HFS512GEJ9X115N; 
  - 传输模式：PCle 4.0 x4;
- ⚙️硬盘(新加):ZHITAI TiPlus7100 1TB; 
  - 传输模式：PCle 4.0 x4;
- 📱手机型号： 小米13ULTRA 系统：澎湃OS1.0;

### 【准备工具】
- ⚠ 充足的云端/云盘/U盘（至少8GB），用以备份重要资料
- ⚠ 空U盘一个，用以重装系统；

### 【资料备份】
- 将资料上传至云端/云盘，或插入用以备份的U盘备份资料；
  
  （若U盘为Usb插头且电脑带有USB闪电接口，则插入闪电接口，事倍功半）

### 【下载安装Win11媒体包】
- 前往官网网页[【下载 Windows 11】](https://www.microsoft.com/zh-cn/software-download/windows11?msockid=2edc3087288a650d15ec25a829c964d4)； 
  - 如果你在学校 连接 MCQMU 或有线网可前往 [Alist 数据中心下载](http://192.168.183.171:5244/mirrors/system-iso/Windows11)
- 点击第二个下载选项：创建Window 11 安装媒体 → 立即下载；
![img_11.png](..%2F..%2F..%2F..%2F.vuepress%2Fpublic%2Fsrc%2Fimg_11.png)
- 插入用以重装的 ⚠ 空U盘（至少8GB）⚠；
- 打开安装包 【mediacreationtool.exe】；
- 按照安装包内程序步骤操作： 
  - 接受 → 版本选择【Win11家庭版 or Win11专业版（推荐专业版）】 → 选择U盘 → 按照程序操作直到显示“你的U盘已准备就绪”；

### 【进入BIOS系统】
- ⚠ 保持U盘插入状态 ⚠；
- 在开始界面，点击“重启电脑”，电脑黑屏之后，此刻疯狂点按 【F12】进入BIOS界面；
  -  (Y9000P系列为F12，其余品牌与系列请自行搜索进入BIOS按键)
  ![img_12.png](..%2F..%2F..%2F..%2F.vuepress%2Fpublic%2Fsrc%2Fimg_12.png)
- 进入BIOS界面 → 选择 【Boot Option #1】为你的主硬盘——海力士（即原装硬盘） → ⚠进入删除磁盘分区页面 → ⚠删除所有能够删除的磁盘分区⚠ → 按照页面内步骤操作等待Win11重装完成；

### 【激活Window 11 专业版（家庭版可跳过进入下一步骤）】
- ⚠ USB连接手机与电脑 → 打开手机热点 → 选择USB共享网络 ⚠
![img_13.png](..%2F..%2F..%2F..%2F.vuepress%2Fpublic%2Fsrc%2Fimg_13.png)
- 打开Window 11 自带 【Edge】 浏览器
- 搜索 重庆医科大学信息门户 → 微软正版化平台（校内）→ 进入[【正版化管理服务平台】](https://zbh.cqmu.edu.cn/#/)
- 点击下载【微软产品激活客户端】 → 【适用于Windows 10/11】，即可激活成功！
![img_14.png](..%2F..%2F..%2F..%2F.vuepress%2Fpublic%2Fsrc%2Fimg_14.png)

### 【NVDIA驱动下载】
- 搜索NVDIA GeForce驱动程序下载，进入 [【NVIDIA GeForce 驱动程序 - N 卡驱动 | NVIDIA】](https://www.nvidia.cn/geforce/drivers/)
- 点击【立即下载】
![img_15.png](..%2F..%2F..%2F..%2F.vuepress%2Fpublic%2Fsrc%2Fimg_15.png)

### 【屏幕刷新率设置】
- 回到桌面 → 右键桌面 → 选择【显示设置】→ 高级显示器设置 → 调整屏幕分辨率
![img_16.png](..%2F..%2F..%2F..%2F.vuepress%2Fpublic%2Fsrc%2Fimg_16.png)

### 【系统图标显示】
- 回到桌面 → 右键桌面 → 选择【个性化】→ 【主题】
- 
![img_17.png](..%2F..%2F..%2F..%2F.vuepress%2Fpublic%2Fsrc%2Fimg_17.png)
- 选择 【桌面图标设置】 → 全选 → 确定并应用
- 点击【个性化】，选择【任务栏】
- ![2025-03-09_21-02-32.png](/src/2025-03-09_21-02-32.png)
- 【任务视图】和【小组件】可以选择性关闭，【任务栏对齐】方式可以根据自己的习惯调整。
-![2025-03-09_21-11-58.png](/src/2025-03-09_21-11-58.png)
### 【新加卷磁盘显示】
- 回到桌面 → 右键【此电脑】 → 【显示更多选项】 → 【管理】→ 单击：存储【磁盘管理】
![img_18.png](..%2F..%2F..%2F..%2F.vuepress%2Fpublic%2Fsrc%2Fimg_18.png)

- 右键新加卷 → 【新建简单卷】 → 根据自己的爱好和磁盘情况选择【压缩卷】 or 不做任何操作 or【扩展卷】
  - 【压缩卷】：将磁盘内存一分为多，压缩出D\E\F盘；⚠ 压缩之前请保证本磁盘为空未被使用 ⚠
  - 【扩展卷】：将其他分区的磁盘内存放在目标盘；⚠ 扩
  - 展之前请保证其他分区的磁盘为空 ⚠

> 恭喜你！完成了系统的重装，现在快去重新安装你需要的软件，把电脑打造成你的趁手工具吧！