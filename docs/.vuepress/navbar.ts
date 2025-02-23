import {defineNavbarConfig} from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
    {text: '首页', link: '/'},
    // {text: '博客', link: '/blog/'},
    {
        icon: '/note.svg',
        text: '学习笔记',
        items: [
            {icon: '/AI.svg', text: '机器学习', link: '/notes/CS-DIY/学习路线/机器学习/README.md'},
            {icon: 'logos:google-developers', text: '全栈开发', link: '/学习笔记/全栈开发/README.md'},
            {icon: 'mdi:graphics-processing-unit', text: '计算机图形学', link: '/学习笔记/计算机图形学/README.md'},
        ]
    },
    {
        icon: '/project.svg',
        text: '项目文档',
        items: [
            {icon: '/match.svg', text: '全国大学生竞赛组队系统', link: ''},
            {icon: '/zhiyu.png', text: '植愈：AI情绪小帮手', link: ''},
            {icon: '/robot.png', text: '智慧中草药生态养护平台', link: ''},
            {icon: '/univ-town.svg', text: '像素大学城', link: ''},
            {icon: '/command_block.gif', text: 'CQMUA服务器中心', link: ''},
            {icon: '/analyse.svg',text: '学情分析系统',link: ''},
            {icon: '/zzfy.svg',text: '掌中方圆',link: ''}
        ]
    },
    {
        icon: '/code.svg',
        text: 'CS-DIY',
        items: [
            {text: '前言', link: '/notes/cs-diy/1.前言.md'},
            {icon:'/dev-standard.svg', text: '开发规范' , link: '/notes/cs-diy/2.开发规范.md'},
            {icon: '/path.svg', text: '学习路线', link: '/notes/cs-diy/3.学习路线.md'},

        ]
    },
    {
        icon: '/public-service.svg',
        text: '公共服务',
        items: [
            {
                icon: '/openai.svg',
                text: '生成式人工智能',
                link: '/notes/公共服务/GPT.md'
            },
            {icon: '/data-center.svg', text: '数据中心', link: ''},
            {icon: '/mirror.svg', text: '重庆医科大学开源软件镜像站', link: ''},
            {icon: '/overleaf.svg', text: 'Overleaf在线协作企业版', link: '/notes/公共服务/Overleaf在线协作企业版.md'},
            {text: '', link: ''}
        ]
    },
    {
        icon: '/wiki.svg',
        text: '大学百科',
        items: [
            {icon: '/email.svg', text: '申请学生邮箱', link: '/notes/大学百科/申请学生邮箱.md'},
            {icon: '/teacher.svg', text: '老师们说', link: '/notes/大学百科/老师们说/README.md'},
            {icon: '/cert.svg', text: '证书及技能考试', link: '/notes/大学百科/证书及技能考试/README.md'}
        ]
    },
    {
        icon: '/manage.svg',
        text: '后台管理',
        items: [
            {icon: '/OAuth2.svg', text: 'OAuth登录(测试版)', link: 'https://hrtcsm.logto.app/demo-app'},
            {icon: 'icon-park:data-lock', text: '数据中心', link: ''},
            {icon: '/control.svg', text: '项导运维控制中台', link: ''},
            {icon: '/vpn.svg', text: 'VPN服务', link: ''},
            {icon: '/cloud.svg', text: '云计算资源调度中心', link: ''},
        ],
    },
    {
        icon: '/link.svg',
        text: '友情链接',
        items: [
            {icon: '/friend.svg', text: '个人', link: '/friends/persons/'},
            {icon: '/organ.svg', text: '组织', link: '/friends/organizations/'},
        ]
    },
])
