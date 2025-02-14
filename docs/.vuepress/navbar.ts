import {defineNavbarConfig} from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
    {text: '首页', link: '/'},
    // {text: '博客', link: '/blog/'},
    {
        icon: 'material-symbols:book',
        text: '学习笔记',
        items: [
            {icon: 'mage:robot-happy', text: '机器学习', link: '/学习笔记/机器学习/README.md'},
            {icon: 'logos:google-developers', text: '全栈开发', link: '/学习笔记/全栈开发/README.md'},
            {icon: 'mdi:graphics-processing-unit', text: '计算机图形学', link: '/学习笔记/计算机图形学/README.md'},
        ]
    },
    {
        icon: 'eos-icons:project',
        text: '项目文档',
        items: [
            {icon: '/match.svg', text: '全国大学生竞赛组队系统', link: ''},
            {icon: '/mirror.svg', text: '重庆医科大学开源软件镜像站', link: ''},
            {icon: '/overleaf.svg', text: 'Overleaf在线协作企业版', link: ''},
            {icon: '/minecraft.svg', text: 'CYMC群组服', link: ''},
        ]
    },
    {
        icon: 'material-symbols:code',
        text: 'CS-DIY',
        items: [
            {text: '前言', link: '/notes/cs-diy/1.前言.md'},
        ]
    },
    {
        icon: 'material-symbols:public',
        text: '公共服务',
        items: [
            {
                icon: 'mage:robot-happy',
                text: '生成式人工智能',
                link: '/notes/public-service/1.GPT API公共调用及部署应用集合.md'
            },
            {text: '', link: ''}
        ]
    },
    {
        icon: 'basil:university-solid',
        text: '大学百科',
        items: [
            {text: '申请学生邮箱', link: '/notes/university-encyclopedia/1.申请学生邮箱.md'},
        ]
    },
    {icon: 'material-symbols:login', text: 'OAuth登录(未上线)', link: 'https://hrtcsm.logto.app/demo-app'},

])
