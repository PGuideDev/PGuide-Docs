import {defineNavbarConfig} from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
    {text: '首页', link: '/'},
    // {
    //     icon: '',
    //     text: '',
    //     items: [
    //         {icon: '',text: '',link: ''},
    //         {icon: '',text: '',link: ''},
    //     ]
    // },
    {
        icon: '/icon/note.svg',
        text: '学习笔记',
        items: [
            {
                icon: 'logos:linux-tux',
                text: 'Linux',
                items: [{
                    icon: 'logos:ubuntu',
                    text: 'echo> what is linux ',
                    link: '/learning-notes/linux/',
                    badge: 'Linux发行版'
                },
                    {
                        icon: 'octicon:command-palette-24',
                        text: 'Linux入门及命令',
                        link: '/learning-notes/linux/commands/',
                        badge: '.sh'
                    },
                ]
            },
            {
                icon: '/icon/AI.svg',
                text: '机器学习',
                items: [
                    {
                        icon: 'material-icon-theme:test-jsx',
                        text: '在线训练平台',
                        link: '/learning-notes/machine-learning/online-training-platform/',
                        badge: '赛博炼丹'
                    },
                    {
                        icon: '/icon/mindspore.svg',
                        text: 'MindSpore',
                        link: '/learning-notes/machine-learning/mindspore/',
                        badge: '国产分布式、全场景AI框架'
                    },
                    {
                        icon: 'devicon:tensorflow',
                        text: 'TensorFlow',
                        link: '/learning-notes/machine-learning/tensorflow/',
                        badge: 'Google感知和语言理解软件库'
                    },
                    {
                        icon: 'logos:pytorch-icon',
                        text: 'PyTorch',
                        link: '/learning-notes/machine-learning/pytorch/',
                        badge: '构建深度学习模型的功能框架'
                    }]
            },
            {
                icon: 'devicon:ros',
                text: '机器人操作系统',
                items: [
                    {
                        icon: 'icon-park-twotone:install',
                        text: 'ROS2系统安装',
                        link: '/learning-notes/ROS2/VMWare-install/',
                        badge: 'VMWare'
                    },
                    {
                        icon: 'https://www.originbot.org/assets/img/favicon.png',
                        text: '古月居OriginBot',
                        link: '/learning-notes/ROS2/origin-bot-toolkit/',
                        badge: 'Guyuehome'
                    },
                ]
            },
            {
                icon: 'logos:google-developers',
                text: '前端开发',
                items: [
                    {
                        icon: 'skill-icons:html',
                        text: 'HTML CSS JS',
                        link: '/learning-notes/frontend-dev/HTML/'
                    },
                    {
                        icon: 'logos:react',
                        text: 'React 框架',
                        link: '/learning-notes/react/'
                    },
                    {
                        icon: 'logos:vue',
                        text: 'Vue3 框架',
                        link: '/learning-notes/vue3/'
                    }
                ]
            },
            {
                icon: 'fluent-color:data-scatter-32',
                text: '后端开发',
                items: [
                    {
                        icon: 'devicon:spring',
                        text: 'Spring 框架',
                        link: 'https://spring.io/'
                    },
                    {
                        icon: 'vscode-icons:file-type-django',
                        text: 'Django 框架',
                        link: 'https://www.djangoproject.com/',
                    },
                    {
                        icon: 'devicon:flask',
                        text: 'Flask 框架',
                        link: 'https://flask.palletsprojects.com/zh-cn/stable/',
                    },
                    {
                        icon: 'catppuccin:devcontainer',
                        text: '容器化技术',
                        link: '/learning-notes/container/',
                    },
                ]
            },

            {
                icon: 'solar:eye-scan-bold',
                text: '计算机视觉',
                items: [
                    {
                        icon: '/icon/yolo.svg',
                        text: 'YOLO',
                        link: '/learning-notes/computer-vision/YOLO/',
                        badge: 'You Only Look Once'
                    },
                    {
                        icon: 'devicon:opencv',
                        text: 'OpenCV',
                        link: '/learning-notes/computer-vision/OpenCV/',
                        badge: 'Apache'
                    },
                    {
                        icon: 'vscode-icons:file-type-matlab',
                        text: 'MATLAB',
                        link: '/learning-notes/computer-vision/MATLAB/',
                        badge: 'MATLAB Inc.'
                    }
                ]
            },
            {
                icon: 'pixel:cybersecurity',
                text: '网络安全',
                items: [
                    {
                        icon: 'ic:twotone-vpn-lock',
                        text: '搭建VPN',
                        link: '/learning-notes/cybersecurity/vpn-setup/'
                    },
                    {
                        icon: '/avatar/qax.svg',
                        text: '奇安信实训平台',
                        link: 'https://192.168.194.65/',
                        badge: {type: 'warning', text: '校园网内可用'}
                    },
                    {
                        icon: 'https://hello-ctf.com/logo.png',
                        text: 'Hello~CTF',
                        link: 'https://hello-ctf.com/'
                    },
                ]
            },

        ]
    },
    {
        icon: '/icon/project.svg',
        text: '项目文档',
        items: [
            {
                icon: 'openmoji:european-name-badge',
                text: '项目相关规范',
                link: '/project-docs/standards/name-project/',
            },
            {
                icon: 'carbon:license-third-party',
                text: '项目知识产权',
                link: '/project-docs/project-intellectual-property/',
            },
            {
                icon: 'codicon:github-project',
                text: '我们正在做的项目',
                items: [
                    {
                        icon: 'material-icon-theme:folder-project',
                        text: '前言',
                        link: '/project-docs/',
                    },

                    {
                        icon: 'hugeicons:add-team',
                        text: '全国大学生竞赛组队系统',
                        link: '/project-docs/match-competitions/',
                        badge: {type: 'warning', text: '整理中'}
                    },
                    {
                        icon: 'arcticons:free-download-manager',
                        text: '项目管理平台',
                        link: '/project-docs/project-management-platform/',
                        badge: {type: 'warning', text: '整理中'}
                    },
                    {
                        icon: '/icon/zhiyu.png',
                        text: '植愈：AI情绪小帮手',
                        link: '/project-docs/plant-cure/',
                        badge: {type: 'warning', text: '整理中'}
                    },
                    {
                        icon: '/icon/robot.png',
                        text: '智慧中草药生态养护平台',
                        link: '/project-docs/smart-car/',
                        badge: {type: 'warning', text: '整理中'}
                    },
                    {
                        icon: '/icon/analyse.svg',
                        text: '学情分析系统',
                        link: '/project-docs/study-analytic-system/',
                        badge: {type: 'warning', text: '整理中'}
                    },
                    {
                        icon: 'line-md:speed-twotone-loop',
                        text: '掌中方圆',
                        link: '/project-docs/control-my-panel/',
                        badge: {type: 'warning', text: '整理中'}
                    },
                    {
                        icon: 'icon-park:transport',
                        text: 'SPD智能医疗耗材管理系统',
                        link: '/project-docs/spd/',
                        badge: {type: 'warning', text: '整理中'}
                    },
                    {
                        icon: 'material-symbols:dropper-eye-outline-sharp',
                        text: '医智慧眼',
                        link: '/project-docs/see-the-components/',
                        badge: {type: 'warning', text: '整理中'}
                    },
                    {
                        icon: 'svg-spinners:blocks-wave',
                        text: '千手万象',
                        link: '/project-docs/various-gestures/',
                        badge: {type: 'warning', text: '整理中'}
                    },
                    {
                        icon: 'line-md:loading-alt-loop',
                        text: '啥时候吃饭',
                        link: '/project-docs/when2eat/',
                        badge: {type: 'tip', text: 'YOLO'}
                    },
                    {
                        icon: 'token-branded:wow',
                        text: 'Oh my API',
                        link: '/project-docs/oh-my-api/',
                        badge: {type: 'tip', text: 'ECharts'}
                    },
                ],
            },

        ]
    },
    {
        icon: '/icon/code.svg',
        text: 'CS-DIY',
        items: [
            {icon: '/icon/code.svg', text: '前言', link: '/cs-diy/'},
            {
                icon: 'mdi:tools',
                text: '必学工具',
                items: [
                    {icon: 'icon-park-solid:correct',text: '基础工具',link: '/csdiy/tools-must/'},


                    // {icon: '',text: '',link: ''},
                    // {icon: '',text: '',link: ''},
                ]
            },
            {
                icon: '/icon/path.svg',
                text: '学习路线',
                items: [
                    {
                        icon: 'mdi:collections-bookmark',
                        text: '合集收录',
                        link: '/csdiy/study-path/'
                    },
                ]
            },
            {
                icon: 'carbon:cics-program',
                text: '编程入门',
                items: [
                    {
                        icon: 'ant-design:code-outlined',
                        text: '基础语法',
                        link: '/csdiy/program-begin/grammar/',
                    },
                    {
                        icon: 'lsicon:setting-outline',
                        text: '环境配置',
                        link: '/csdiy/program-begin/PYPI-mirror/',
                    },
                ]
            },
            {
                icon: '/icon/dev-standard.svg',
                text: '开发规范',
                items: [
                    {
                        icon: 'ic:baseline-rule-folder',
                        text: '简介',
                        link: '/csdiy/dev-rules/what-dev-rules/'
                    },
                    {
                        icon: 'material-icon-theme:python',
                        text: 'Python PEP 8',
                        link: 'https://peps.python.org/pep-0008/',
                    },
                ]
            },
            {
                icon: 'fa6-solid:computer',
                text: '计算机常识',
                items: [
                    {icon: 'line-md:question',text: '缺失的一课',link: 'https://www.criwits.top/missing/'},
                    {
                        icon: 'material-symbols-light:computer-outline-rounded',
                        text: '电脑开荒网',
                        link: 'https://www.cyhaoka.vip/',
                    },
                    {
                        icon: 'logos:microsoft-windows-icon',
                        text: '系统安装',
                        link: '/csdiy/computer-common-knowledge/Win11re-setup/',
                    },
                    {
                        icon: 'emojione-v1:dvd',
                        text: '镜像刻录',
                        link: '/csdiy/computer-common-knowledge/make-image/',
                    },

                ]
            },
            {
                icon: '',
                text: '实用资源',
                items: [
                    {
                        icon: 'logos:element',
                        text: '图标、组件库',
                        link: '/csdiy/indeeded-src/icons-components/element-plus/'
                    },
                    {
                        icon: 'streamline-logos:github-logo-1',
                        text: 'CTF档案',
                        link: 'https://github.com/CTF-Archives'
                    },
                    {
                        icon: 'fluent-color:book-16',
                        text: 'CS Books',
                        link: 'https://github.com/forthespada/CS-Books'
                    },
                    {
                        icon: 'line-md:github-loop',
                        text: 'Awesome Courses',
                        link: 'https://github.com/forthespada/Awsome-Courses',
                    },
                ]
            },
        ]
    },
    {
        icon: '/icon/public-service.svg',
        text: '公共服务',
        items: [
            {
                icon: '/icon/openai.svg',
                text: '生成式人工智能',
                items: [
                    {
                        icon: '/icon/openai.svg',
                        text: 'GPT API公共调用网站及应用部署集合',
                        link: '/public-service/GPT/',
                    },
                    {
                        icon: 'https://lobechat.com/icons/icon-192x192.png',
                        text: 'Lobe Chat',
                        link: '/public-service/GPT/lobe-chat/',
                        badge: '对话大模型聚合平台',
                    },
                ]

            },

            {
                icon: '/icon/mirror.svg',
                text: '重庆医科大学开源软件镜像站',
                items: [
                    {
                        icon: '/icon/mirror.svg',
                        text: '镜像站介绍',
                        link: '/public-service/cqmu-mirror/',
                        badge: {type: 'tip', text: '在线'}
                    },
                    {
                        icon: 'simple-icons:wikibooks',
                        text: 'CQMU Mirror Wiki',
                        link: '/public-service/cqmu-mirror/wiki/'
                    },
                    {
                        icon: 'fluent:window-dev-edit-20-regular',
                        text: '维护与开发手册',
                        link: '/public-service/cqmu-mirror/maintenance-dev-books/',
                        badge: {type: 'warning', text: '整理中'}
                    },
                ]
            },

            {
                icon: '/icon/overleaf.svg',
                text: 'Overleaf LaTeX协作平台',
                items: [
                    {
                        icon: '/icon/overleaf.svg',
                        text: '协作平台简介及使用',
                        link: '/public-service/overleaf/',
                        badge: {type: 'danger', text: '外网未开通'}
                    },
                    {
                        icon: 'twemoji:newspaper',
                        text: 'LaTeX模板集合',
                        link: '/public-service/overleaf/latex-template-collections/',
                        badge: {type: 'warning', text: '整理中'}
                    },
                    {
                        icon: 'catppuccin:release',
                        text: '更新日志',
                        link: '/public-service/overleaf/releases/'
                    },
                    {
                        icon: 'fluent:window-dev-edit-20-regular',
                        text: '维护与开发手册',
                        link: '/public-service/overleaf/maintenance-dev-books/'
                    },
                ]
            },
            {
                icon: 'skill-icons:git',
                text: 'Git 代码托管平台',
                items: [
                    {
                        icon: 'mdi:github',
                        text: 'Github PGuideDev',
                        link: '/public-service/code-manage/github-pguide-dev/'
                    },
                    {
                        icon: 'devicon:gitlab',
                        text: 'Gitlab EE代码托管平台',
                        link: '/public-service/code-manage/gitlab-ee/',
                        badge: {type: 'danger', text: '外网未开通'}
                    },
                    {
                        icon: 'simple-icons:gitee',
                        text: 'Gitee CQMU',
                        link: 'https://e.gitee.com/chongqing-medical-university_4/',
                        badge: {type: 'tip', text: '重庆医科大学'},
                    },
                ]
            },
            {
                icon: 'fluent-color:data-area-32',
                text: '数据中心',
                items: [
                    {
                        icon: 'https://alist.nn.ci/logo.svg',
                        text: 'Alist动态软件镜像站',
                        link: '/public-service/data-center/pguide-alist/',
                        badge: {type: 'tip', text: '在线'}
                    },
                    {
                        icon: 'line-md:download-loop',
                        text: '常用软件推荐及下载',
                        link: '/public-service/data-center/common-softwares-recommand-and-download/',
                        badge: {type: 'tip', text: '在线'}
                    },
                    {
                        icon: 'teenyicons:docker-outline',
                        text: 'docker私有镜像管理',
                        link: '/public-service/data-center/docker-registry/',
                        badge: {type: 'warning', text: 'PGuide VPN'}
                    },
                    {
                        icon: 'ri:baidu-fill',
                        text: '百度网盘企业版',
                        link: '/public-service/data-center/baidu-netdisk-enterprise/',
                        badge: {type: 'warning', text: 'PGuide VPN'}
                    },
                ]
            },
        ]
    },
    {
        icon: '/icon/wiki.svg',
        text: '大学百科',
        items: [
            {
                icon: '/icon/email.svg',
                text: '申请学生邮箱',
                link: '/campus-wiki/apply-student-email/'
            },
            {
                icon: '/icon/teacher.svg',
                text: '良师赠语',
                link: '/campus-wiki/teacher-talks/'
            },
            {
                icon: 'https://colleges.chat/assets/images/favicon.webp',
                text: '大学百科指北',
                link: 'https://colleges.chat/',
                badge: '生活'
            },
            {
                icon: 'https://ac-wiki.org/assets/logo_clear.png',
                text: 'Ac-Wiki',
                link: 'https://ac-wiki.org/',
                badge: '大学生的百科全书'
            },
            {
                icon: '',
                text: '',
                link: '',
                badge: ''
            },
            {
                icon: 'carbon:container-software',
                text: '常用软件',
                items: [
                    {
                        icon: 'fluent-color:code-20',
                        text: 'IDE',
                        link: '/campus-wiki/common-software/IDE/',
                        badge: '集成开发环境'
                    },
                    {
                        icon: 'ooui:articles-rtl',
                        text: '文献管理',
                        link: '/campus-wiki/document-management/',
                        badge: ''
                    },
                    {
                        icon: 'twemoji:notebook-with-decorative-cover',
                        text: '笔记软件',
                        link: '/campus-wiki/common-softwares/note-softwares/',
                    },
                    {
                        icon: 'vscode-icons:file-type-word',
                        text: '办公软件',
                        link: '/campus-wiki/common-softwares/office/MS/apply-ee/',
                        badge: 'Office'
                    },
                ]
            },
            {
                icon: '/icon/cert.svg',
                text: '证书及技能考试',
                items: [
                    {
                        icon: 'icon-park-twotone:six-key',
                        text: '四、六级考试',
                        link: '/campus-wiki/credential-skillful-exams/CET/',
                        badge: 'CET、SET'
                    },
                    {
                        icon: 'https://bm.ruankao.org.cn/asset/image/public/logo.png',
                        text: '软考',
                        link: '/campus-wiki/credential-skillful-exams/ruankao/',
                        badge: '宇宙机，我爱考'
                    },
                    {
                        icon: 'hugeicons:computer-programming-01',
                        text: '计算机等级考试',
                        link: '/campus-wiki/credential-skillful-exams/NCRE/',
                        badge: '适合大学生'
                    },

                ]
            },
            {
                icon: '/icon/competition.svg',
                text: '竞赛指南',
                items: [
                    {
                        icon: 'material-symbols:code',
                        text: '编程竞赛',
                        link: '/campus-wiki/competition/code/',
                    },
                    {
                        icon: 'file-icons:3d-model',
                        text: '数学建模',
                        link: '/campus-wiki/competition/math-modeling/',
                        badge: ''
                    },
                    {
                        icon: 'mynaui:math',
                        text: '纯学科竞赛',
                        link: '/campus-wiki/competition/subjects/',
                        badge: ''
                    },
                    {
                        icon: 'mingcute:ai-line',
                        text: '人工智能',
                        link: '/campus-wiki/competition/AI-future/',
                    },
                    {
                        icon: 'mingcute:ai-line',
                        text: '网络安全',
                        link: '/campus-wiki/competition/AI-future/',
                    },
                    {
                        icon: 'game-icons:team-idea',
                        text: '创新创业',
                        link: '/campus-wiki/competition/innovate/',
                        badge: ''
                    },
                ]
            },
        ]
    },
    {
        icon: 'icon-park-solid:more-four',
        text: '更多',
        items: [
            {
                icon: '/icon/link.svg',
                text: '友情链接',
                items: [
                    {
                        icon: '/icon/friend.svg',
                        text: '个人',
                        link: '/friends/persons/'
                    },
                    {
                        icon: '/icon/organ.svg',
                        text: '组织',
                        link: '/friends/organizations/'
                    },
                    {
                        icon: 'fa-solid:quote-left',
                        text: 'Q&A',
                        link: '/friends/quotes/',
                        badge: '常见问题'
                    },
                ],
            },
            // {
            //     icon: 'fluent-color:data-trending-20',
            //     text: '站点统计',
            //     items: [
            //         {
            //             icon: 'simple-icons:umami',
            //             text: 'umami Cloud',
            //             link: 'https://cloud.umami.is/share/BVmRNrfCbwRPmobS/docs.pguide.studio',
            //         },
            //         {
            //             icon: 'devicon:google',
            //             text: 'google analytics',
            //             link: 'https://analytics.google.com/analytics/web/#/p472592389',
            //         },
            //     ]
            // },

            {
                icon: 'logos:serverless',
                text: '服务状态',
                items: [
                    {
                        icon: 'https://uptime.kuma.pet/img/icon.svg',
                        text: '公开服务监控',
                        link: 'http://100.126.170.14:3001/status/pguide',
                        badge: {type: 'warning', text: 'PGuide VPN'}
                    },
                    {
                        icon: 'logos:grafana',
                        text: '服务器实时流量',
                        link: 'http://100.126.170.14:3000/',
                        badge: {type: 'warning', text: 'PGuide VPN'}
                    },
                    {
                        icon: 'logos:docker-icon',
                        text: 'docker镜像服务站',
                        link: 'http://100.126.170.14:5003/',
                        badge: {type: 'warning', text: 'PGuide VPN'}
                    },
                    {
                        icon: 'streamline-cyber:network',
                        text: 'ping检测',
                        link: 'https://ping.chinaz.com/docs.pguide.cloud',
                    },
                ]
            },
        ]
    },
// {
//     icon: '',
//     text: '',
//     items: [
//         {icon: '',text: '',link: ''},
//         {icon: '',text: '',link: ''},
//     ]
// },
// {
//     icon: '',
//     text: '',
//     items: [
//         {icon: '',text: '',link: ''},
//         {icon: '',text: '',link: ''},
//     {
//         icon: '',
//         text: '',
//         link: '',
//         badge: ''
//     },
//     ]
// },
])
