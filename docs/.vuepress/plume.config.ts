import {defineThemeConfig} from 'vuepress-theme-plume'
import {navbar} from './navbar'
import notes from './notes'
import {SpeedInsights} from '@vercel/speed-insights/vue'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
    logo: '/icon/logo.svg',
    appearance: true,  // 配置 深色模式

    social: [
        {
            icon: {
                svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ff3a00" d="M11.984 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12A12 12 0 0 0 12 0zm6.09 5.333c.328 0 .593.266.592.593v1.482a.594.594 0 0 1-.593.592H9.777c-.982 0-1.778.796-1.778 1.778v5.63c0 .327.266.592.593.592h5.63c.982 0 1.778-.796 1.778-1.778v-.296a.593.593 0 0 0-.592-.593h-4.15a.59.59 0 0 1-.592-.592v-1.482a.593.593 0 0 1 .593-.592h6.815c.327 0 .593.265.593.592v3.408a4 4 0 0 1-4 4H5.926a.593.593 0 0 1-.593-.593V9.778a4.444 4.444 0 0 1 4.445-4.444h8.296Z"/></svg>`,
                name: 'gitee',
            },
            link: 'https://gitee.com/rand777/PGuide-Docs',
        },
        {
            icon: {
                svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><mask id="lineMdGithubLoop0" width="24" height="24" x="0" y="0"><g fill="#fff"><ellipse cx="9.5" cy="9" rx="1.5" ry="1"/><ellipse cx="14.5" cy="9" rx="1.5" ry="1"/></g></mask><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="32" stroke-dashoffset="32" d="M12 4c1.67 0 2.61 0.4 3 0.5c0.53 -0.43 1.94 -1.5 3.5 -1.5c0.34 1 0.29 2.22 0 3c0.75 1 1 2 1 3.5c0 2.19 -0.48 3.58 -1.5 4.5c-1.02 0.92 -2.11 1.37 -3.5 1.5c0.65 0.54 0.5 1.87 0.5 2.5c0 0.73 0 3 0 3M12 4c-1.67 0 -2.61 0.4 -3 0.5c-0.53 -0.43 -1.94 -1.5 -3.5 -1.5c-0.34 1 -0.29 2.22 0 3c-0.75 1 -1 2 -1 3.5c0 2.19 0.48 3.58 1.5 4.5c1.02 0.92 2.11 1.37 3.5 1.5c-0.65 0.54 -0.5 1.87 -0.5 2.5c0 0.73 0 3 0 3"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.7s" values="32;0"/></path><path stroke-dasharray="10" stroke-dashoffset="10" d="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"><animate attributeName="d" dur="3s" repeatCount="indefinite" values="M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5;M9 19c-1.406 0-3-.5-4-.5-.532 0-1 0-2-.5;M9 19c-1.406 0-2.844-.563-3.688-1.188C4.47 17.188 4.22 16.157 3 15.5"/><animate fill="freeze" attributeName="stroke-dashoffset" begin="0.8s" dur="0.2s" values="10;0"/></path></g><rect width="8" height="4" x="8" y="11" fill="currentColor" mask="url(#lineMdGithubLoop0)"><animate attributeName="y" dur="10s" keyTimes="0;0.45;0.46;0.54;0.55;1" repeatCount="indefinite" values="11;11;7;7;11;11"/></rect></svg>`,
                name: 'github',
            }, link: 'https://github.com/PGuideDev/PGuide-Docs'
        },
        {
            icon: {
                svg: `<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 128 128"><path fill="#e24329" d="m124.755 51.382l-.177-.452L107.47 6.282a4.46 4.46 0 0 0-1.761-2.121a4.58 4.58 0 0 0-5.236.281a4.6 4.6 0 0 0-1.518 2.304L87.404 42.088H40.629L29.077 6.746a4.5 4.5 0 0 0-1.518-2.31a4.58 4.58 0 0 0-5.236-.281a4.5 4.5 0 0 0-1.761 2.121L3.422 50.904l-.17.452c-5.059 13.219-.763 28.192 10.537 36.716l.059.046l.157.111l26.061 19.516l12.893 9.758l7.854 5.93a5.28 5.28 0 0 0 6.388 0l7.854-5.93l12.893-9.758l26.218-19.634l.065-.052c11.273-8.526 15.562-23.472 10.524-36.677"/><path fill="#fc6d26" d="m124.755 51.382l-.177-.452a57.8 57.8 0 0 0-23.005 10.341L64 89.682c12.795 9.68 23.934 18.09 23.934 18.09l26.218-19.634l.065-.052c11.291-8.527 15.586-23.488 10.538-36.704"/><path fill="#fca326" d="m40.066 107.771l12.893 9.758l7.854 5.93a5.28 5.28 0 0 0 6.388 0l7.854-5.93l12.893-9.758s-11.152-8.436-23.947-18.09a18379 18379 0 0 0-23.935 18.09"/><path fill="#fc6d26" d="M26.42 61.271A57.7 57.7 0 0 0 3.422 50.904l-.17.452c-5.059 13.219-.763 28.192 10.537 36.716l.059.046l.157.111l26.061 19.516L64 89.655z"/></svg>`,
                name: 'gitlab',
            }
            , link: 'https://git.cqmu.edu.cn'
        },
        {icon: 'qq', link: 'https://qm.qq.com/q/Ur5Q6kyTsG'},
    ],
    navbarSocialInclude: ['github', 'gitee', 'qq', 'gitlab'], // 允许显示在导航栏的 social 社交链接
    aside: true, // 页内侧边栏， 默认显示在右侧
    outline: [2, 6], // 页内大纲， 默认显示 h2, h3

    /* 站点页脚，message显示在线情况 */
    footer: {
        // message: '<a href="https://docs.pguide.cloud" target="_blank" style="transition: all 0.3s ease; display: inline-block; background: linear-gradient(270deg, #ff6b6b, #4ecdc4, #ff6b6b); background-size: 200% 100%; animation: moveGradient 3s infinite linear; -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: bold; position: relative;" onmouseover="this.style.transform=\'scale(1.1)\'; this.style.animationDuration=\'1s\'" onmouseout="this.style.transform=\'scale(1)\'; this.style.animationDuration=\'3s\'">国内镜像站点</a> | <a href="https://docs.pguide.studio" target="_blank" style="transition: all 0.3s ease; display: inline-block; background: linear-gradient(270deg, #a8e6cf, #3498db, #a8e6cf); background-size: 200% 100%; animation: moveGradient 3s infinite linear; -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: bold; position: relative;" onmouseover="this.style.transform=\'scale(1.1)\'; this.style.animationDuration=\'1s\'" onmouseout="this.style.transform=\'scale(1)\'; this.style.animationDuration=\'3s\'">国际主站点</a> | <a href="https://ecosystem.pguide.studio" target="_blank" style="transition: all 0.3s ease; display: inline-block; background: linear-gradient(270deg, #dcd6f7, #424874, #dcd6f7); background-size: 200% 100%; animation: moveGradient 3s infinite linear; -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: bold; position: relative;" onmouseover="this.style.transform=\'scale(1.1)\'; this.style.animationDuration=\'1s\'" onmouseout="this.style.transform=\'scale(1)\'; this.style.animationDuration=\'3s\'">项导生态</a><style>@keyframes moveGradient { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; }}</style>',
        message: '',
        copyright: 'PGuide Studio © 2023-2025',
    },
    notFound: {
        code: '啊偶，好像没有这个页面',
        title: '🌌 您探索到了未知领域',
        quote: [
            '"💻 我点故我在，但🔗已不在" —— 赛博笛卡尔',
            '"🕳️ 宇宙最伟大的谜团不是黑洞，而是404的奇点" —— 星际访客日志',
            '"👁️ 当你在凝视404时，404也在凝视你的🔄" —— 尼采的键盘',
            '"🔄 所有的网页终将消逝，正如我们终将成为别人的缓存" —— 二进制佛陀'
        ][Math.floor(Math.random() * 4)],
        linkLabel: '🚀让量子隧穿带你重返现实🌐',
        linkText: '🌠回到已知宇宙 →'
    },
    /**
     * @see https://theme-plume.vuejs.press/config/basic/#profile
     */
    profile: {
        avatar: '/icon/logo.svg',
        name: 'PGuide Docs',
        // description: '项导文档',
        circle: true,
        // location: '',
        // organization: '',
    },

    navbar,
    notes,

    /**
     * 公告板
     * @see https://theme-plume.vuejs.press/guide/features/bulletin/
     */
    bulletin: {
        layout: 'top-right',
        title: '项导文档迁移公告',
        contentType: 'markdown',
        content: `\
**2025-08-09**
- 项导文档主域名 docs.pguide.studio 即将到期，请用户切换至 docs.pguide.cloud
- 大学百科中考研、保研、就业、出国留学、校内生活等将迁移至智汇重医 APP，交由人工智能医学学院官方、信息中心维护，项导文档暂不参与维护。
`,
    },

    /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
    transition: {
        page: true,        // 启用 页面间跳转过渡动画
        postList: true,    // 启用 博客文章列表过渡动画
        appearance: 'fade',  // 启用 深色模式切换过渡动画, 或配置过渡动画类型
    },

})
