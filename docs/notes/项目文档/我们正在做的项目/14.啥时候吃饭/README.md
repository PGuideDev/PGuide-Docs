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
::: echarts 人群分布热力图
```js
/* eslint-disable */

function getNoiseHelper() {
  class Grad {
    constructor(x, y, z) {
      this.x = x
      this.y = y
      this.z = z
    }

    dot2(x, y) {
      return this.x * x + this.y * y
    }

    dot3(x, y, z) {
      return this.x * x + this.y * y + this.z * z
    }
  }
  const grad3 = [
    new Grad(1, 1, 0),
    new Grad(-1, 1, 0),
    new Grad(1, -1, 0),
    new Grad(-1, -1, 0),
    new Grad(1, 0, 1),
    new Grad(-1, 0, 1),
    new Grad(1, 0, -1),
    new Grad(-1, 0, -1),
    new Grad(0, 1, 1),
    new Grad(0, -1, 1),
    new Grad(0, 1, -1),
    new Grad(0, -1, -1),
  ]
  const p = [
    151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140,
    36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120,
    234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33,
    88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71,
    134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133,
    230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161,
    1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130,
    116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250,
    124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227,
    47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44,
    154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98,
    108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34,
    242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14,
    239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121,
    50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243,
    141, 128, 195, 78, 66, 215, 61, 156, 180,
  ]
  // To remove the need for index wrapping, double the permutation table length
  const perm = Array.from({ length: 512 })
  const gradP = Array.from({ length: 512 })
  // This isn't a very good seeding function, but it works ok. It supports 2^16
  // different seed values. Write something better if you need more seeds.
  function seed(seed) {
    if (seed > 0 && seed < 1) {
      // Scale the seed out
      seed *= 65536
    }
    seed = Math.floor(seed)
    if (seed < 256)
      seed |= seed << 8

    for (let i = 0; i < 256; i++) {
      let v
      if (i & 1)
        v = p[i] ^ (seed & 255)
      else
        v = p[i] ^ ((seed >> 8) & 255)

      perm[i] = perm[i + 256] = v
      gradP[i] = gradP[i + 256] = grad3[v % 12]
    }
  }
  seed(0)
  // ##### Perlin noise stuff
  function fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10)
  }
  function lerp(a, b, t) {
    return (1 - t) * a + t * b
  }
  // 2D Perlin Noise
  function perlin2(x, y) {
    // Find unit grid cell containing point
    let X = Math.floor(x)
    let Y = Math.floor(y)
    // Get relative xy coordinates of point within that cell
    x = x - X
    y = y - Y
    // Wrap the integer cells at 255 (smaller integer period can be introduced here)
    X = X & 255
    Y = Y & 255
    // Calculate noise contributions from each of the four corners
    const n00 = gradP[X + perm[Y]].dot2(x, y)
    const n01 = gradP[X + perm[Y + 1]].dot2(x, y - 1)
    const n10 = gradP[X + 1 + perm[Y]].dot2(x - 1, y)
    const n11 = gradP[X + 1 + perm[Y + 1]].dot2(x - 1, y - 1)
    // Compute the fade curve value for x
    const u = fade(x)
    // Interpolate the four results
    return lerp(lerp(n00, n10, u), lerp(n01, n11, u), fade(y))
  }
  return {
    seed,
    perlin2,
  }
}

const noise = getNoiseHelper()
const xData = []
const yData = []
noise.seed(Math.random())

const data = []
for (let i = 0; i <= 200; i++) {
  for (let j = 0; j <= 100; j++)
    data.push([i, j, noise.perlin2(i / 40, j / 20) + 0.5])

  xData.push(i)
}
for (let j = 0; j < 100; j++)
  yData.push(j)

option = {
  tooltip: {},
  xAxis: {
    type: 'category',
    data: xData,
  },
  yAxis: {
    type: 'category',
    data: yData,
  },
  visualMap: {
    min: 0,
    max: 1,
    calculable: true,
    realtime: false,
    inRange: {
      color: [
        '#313695',
        '#4575b4',
        '#74add1',
        '#abd9e9',
        '#e0f3f8',
        '#ffffbf',
        '#fee090',
        '#fdae61',
        '#f46d43',
        '#d73027',
        '#a50026',
      ],
    },
  },
  series: [
    {
      name: 'Gaussian',
      type: 'heatmap',
      data,
      emphasis: {
        itemStyle: {
          borderColor: '#333',
          borderWidth: 1,
        },
      },
      progressive: 1000,
      animation: false,
    },
  ],
}

const height = 500
```
:::
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

- [x] 完成基础的人类识别
- [x] 前端UI设计
- [x] 前端页面开发
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