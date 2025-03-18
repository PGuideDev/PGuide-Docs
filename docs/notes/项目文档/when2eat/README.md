---
title: 啥时候吃饭
createTime: 2025/03/08 06:52:55
permalink: /project-docs/when2eat/
icon: line-md:loading-alt-loop
tags:
  - PGuide OAuth
  - 计算机视觉
  - YOLO
  - ECharts
---

哈哈，这个项目是一个科学决策什么时候去食堂吃饭的项目，让你合理避开重医吃饭高峰期。

::: echarts 重医食堂实时人数示例动态折线图
```js
const oneDay = 86400000
const data = []
let now = new Date(1997, 9, 3)
let value = Math.random() * 1000

function randomData() {
  now = new Date(+now + oneDay)
  value = value + Math.random() * 21 - 10
  return {
    name: now.toString(),
    value: [
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
      Math.round(value),
    ],
  }
}

for (let i = 0; i < 1000; i++) data.push(randomData())

const option = {
  tooltip: {
    trigger: 'axis',
    formatter(params) {
      params = params[0]
      const date = new Date(params.name)
      return (
        `${date.getDate()
        }/${
          date.getMonth() + 1
        }/${
          date.getFullYear()
        } : ${
          params.value[1]}`
      )
    },
    axisPointer: {
      animation: false,
    },
  },
  xAxis: {
    type: 'time',
    splitLine: {
      show: false,
    },
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '100%'],
    splitLine: {
      show: false,
    },
  },
  toolbox: {
    show: true,
    feature: {
      mark: {
        show: true,
      },
      dataView: {
        show: true,
        readOnly: false,
      },
      restore: {
        show: true,
      },
      saveAsImage: {
        show: true,
      },
    },
  },
  series: [
    {
      name: 'Fake Data',
      type: 'line',
      showSymbol: false,
      data,
    },
  ],
}
const timeId = setInterval(() => {
  if (myChart._disposed)
    return clearInterval(timeId)

  for (let i = 0; i < 5; i++) {
    data.shift()
    data.push(randomData())
  }
  myChart.setOption({
    series: [
      {
        data,
      },
    ],
  })
}, 1000)
```
:::


## 项目简介

使用YOLO、OpenCV等计算机视觉识别框架，检测画面中人数，在网页端、APP端显示实时人流量，通过机器学习算法推测最合理的吃饭时间区间。

## 项目重点

- 高精度识别实时人数
  - 30FPS以上的识别帧 
- 网络传输json数据
  - 后端跨域访问
  - 身份验证
- 前端设计
  - 组件、UI设计
- 机器学习推测
  - 数据采集
  - 算法选型
- 通知配置
  - SMTP邮件通知
  - QQ机器人

## 项目进度

- [ ] 完成基础的人类识别
- [ ] 前端UI设计
- [ ] 前端页面开发
- [ ] 完成一周的数据采集
- [ ] 机器学习推测

## 项目结构

:::file-tree
- when2eat/
  - backend/                  # Flask后端核心
    - app/
      - api/                 # API路由
        - v1/                # API版本控制
      - common/              # 通用工具
      - models/              # 数据库模型
      - services/            # 业务逻辑层
      - __init__.py
    - ml_models/             # 训练好的模型文件
      - yolo_v5s/            # 不同版本模型
    - scripts/               # 数据库迁移及其他脚本
    - tests/                 # 后端测试
      - unit/                # 单元测试
      - integration/         # 集成测试
    - requirements/
      - dev.txt              # 开发依赖
      - prod.txt             # 生产依赖

  - frontend/                 # Vue 3前端
    - public/                # 公开资源
    - src/
      - assets/              # 静态资源
      - components/          # 通用组件
      - views/               # 页面视图
      - services/            # API服务层
      - utils/               # 前端工具

  - cv_processing/           # 计算机视觉模块
    - detectors/             # 检测算法实现
    - utils/                 # OpenCV工具
    - calibration/           # 摄像头校准数据

  - infrastructure/          # 基础设施配置
    - docker/                # Docker配置
      - nginx/               # Nginx配置
      - flask/               # Flask配置
    - k8s/                   # Kubernetes配置
    - terraform/             # 基础设施即代码配置

  - docs/                    # 项目文档
    - api-spec/              # OpenAPI规范
    - architecture/          # 架构设计图
    - deployment.md          # 部署文档

  - notebooks/               # Jupyter分析笔记
  - .github/                 # CI/CD配置
    - workflows/             # 工作流配置
  - Makefile                 # 构建自动化
  - docker-compose.yml       # Docker Compose配置
  - .env.sample              # 环境变量模板
:::

## 其他可能会遇到的问题

- 如何进行数据采集
  - python写一个定时任务，调用摄像头抓拍
  - 注意数据脱敏，不要上传任何人脸数据
- 光线较暗时如何进行算法优化
  - 红外可能效果并不理想
- 机器学习比较陌生
  - 可以采用现有大模型，调用其API即可
  - 不不不，我就要学[机器学习](/learning-notes/ml/)