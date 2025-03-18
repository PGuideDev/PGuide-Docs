// noinspection JSDeprecatedSymbols

import {defineNavbarConfig} from 'vuepress-theme-plume'

export const navbar = defineNavbarConfig([
    {text: '首页', link: '/'},
    {
        icon: '/icon/note.svg',
        text: '学习笔记',
        items: [
            {icon: '/icon/note.svg', text: '前言', link: '/learning-notes/'},
            {icon: 'logos:linux-tux', text: 'Linux', link: '/learning-notes/linux/'},
            {icon: '/icon/AI.svg', text: '机器学习', link: '/learning-notes/ml/'},
            {
                icon: 'logos:google-developers',
                text: '前端开发',
                link: '/learning-notes/frontend-dev/'
            },
            {
                icon: 'fluent-color:data-scatter-32',
                text: '后端开发',
                link: '/learning-notes/backend-dev/'
            },
            {icon: 'devicon:ros', text: 'ROS2', link: '/learning-notes/ROS2/'},
            {icon: 'marketeq:vision', text: '计算机视觉', link: '/learning-notes/computer-vision/'}
        ]
    },
    {
        icon: '/icon/project.svg',
        text: '项目文档',
        items: [
            {
                icon: 'openmoji:european-name-badge',
                text: '项目相关规范',
                link: '/project-docs/standards/name-project/'
            },
            {
                icon: 'carbon:license-third-party',
                text: '项目知识产权',
                link: '/project-docs/project-intellectual-property/'
            },
            {
                icon: 'hugeicons:add-team',
                text: '全国大学生竞赛组队系统',
                link: '/project-docs/match-competitions/'
            },
            {icon: '/icon/zhiyu.png', text: '植愈：AI情绪小帮手', link: '/project-docs/plant-cure/'},
            {
                icon: '/icon/robot.png',
                text: '智慧中草药生态养护平台',
                link: '/project-docs/smart-car/'
            },
            {
                icon: '/icon/univ-town.svg',
                text: '像素大学城',
                link: '/project-docs/pixel-university-town/'
            },
            {
                icon: '/icon/command_block.gif',
                text: 'CQMUA服务器中心',
                link: '/project-docs/cqmua-center/'
            },
            {
                icon: '/icon/analyse.svg',
                text: '学情分析系统',
                link: '/project-docs/study-analytic-system/'
            },
            {
                icon: 'line-md:speed-twotone-loop',
                text: '掌中方圆',
                link: '/project-docs/control-my-panel/'
            },
            {
                icon: 'icon-park:transport',
                text: 'SPD智能医疗耗材管理系统',
                link: '/project-docs/spd/'
            },
            {
                icon: 'material-symbols:dropper-eye-outline-sharp',
                text: '医智慧眼',
                link: '/project-docs/see-the-components/'
            },
            {
                icon: 'svg-spinners:blocks-wave',
                text: '千手万象',
                link: '/project-docs/various-gestures/'
            },
            {
                icon: 'line-md:cloud-alt-tags-twotone-loop',
                text: '云原生资源管理系统',
                link: '/project-docs/cloud-manage/'
            },
            {icon: 'line-md:loading-alt-loop', text: 'when2eat', link: '/project-docs/when2eat/'},
            {
                icon: 'line-md:cloud-alt-print-twotone-loop',
                text: 'Oh my API',
                link: '/project-docs/oh-my-api/'
            },
        ]
    },
    {
        icon: '/icon/code.svg',
        text: 'CS-DIY',
        items: [
            {icon: '/icon/code.svg', text: '前言', link: '/cs-diy/'},
            {icon: 'twemoji:thinking-face', text: '公开课', link: '/csdiy/public-class/'},
            {icon: 'mdi:tools', text: '必学工具', link: '/csdiy/tools-must/'},
            {icon: 'carbon:cics-program', text: '编程入门', link: '/csdiy/program-begin/'},
            {icon: '/icon/dev-standard.svg', text: '开发规范', link: '/csdiy/dev-rules/'},
            {icon: '/icon/path.svg', text: '学习路线', link: '/csdiy/study-path/'},
            {
                icon: 'fa6-solid:computer',
                text: '计算机常识',
                link: '/csdiy/computer-common-knowledge/'
            }
        ]
    },
    {
        icon: '/icon/public-service.svg',
        text: '公共服务',
        items: [
            {icon: '/icon/openai.svg', text: '生成式人工智能', link: '/public-service/GPT/'},
            {
                icon: 'fluent-color:data-area-20',
                text: '数据中心',
                link: '/public-service/data-center/'
            },
            {
                icon: 'skill-icons:git',
                text: 'Git 代码托管平台',
                link: '/public-service/code-manage/gitlab-ee/'
            },
            {
                icon: '/icon/mirror.svg',
                text: '重庆医科大学开源软件镜像站',
                link: '/public-service/cqmu-mirror/'
            },
            {
                icon: '/icon/overleaf.svg',
                text: 'Overleaf LaTeX协作平台',
                link: '/public-service/overleaf/'
            },
            {
                icon: 'fluent-emoji-flat:medical-symbol',
                text: '全球医学公开数据导航',
                link: '/public-service/global-medical-open-data-web/'
            },
            {
                icon: 'vscode-icons:file-type-word',
                text: '文书及申报资料网',
                link: '/public-service/official-documents/'
            },

            {text: '', link: ''}
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
            {icon: '/icon/teacher.svg', text: '老师们说', link: '/campus-wiki/teacher-talks/'},
            {
                icon: 'carbon:container-software',
                text: '常用软件',
                link: '/campus-wiki/common-software/'
            },
            {
                icon: '/icon/cert.svg',
                text: '证书及技能考试',
                link: '/campus-wiki/credential-skillful-exams/'
            },
            {icon: 'ic:baseline-school', text: '校内生活', link: '/campus-wiki/campus-life/'},
            {icon: '/icon/competition.svg', text: '竞赛篇', link: '/campus-wiki/competition/'},
            {
                icon: '/icon/kaoyan.svg',
                text: '考研篇',
                link: '/campus-wiki/postgraduate-entrance-exam/'
            },
            {icon: '/icon/kaogong.svg', text: '考公篇', link: '/campus-wiki/civil-service-exam/'},
            {
                icon: '/icon/baoyan.svg',
                text: '保研篇',
                link: '/campus-wiki/postgraduate-recommendation/'
            },
            {icon: '/icon/liuxue.svg', text: '留学篇', link: '/campus-wiki/study-abroad/'},
            {icon: '/icon/internship.svg', text: '实习篇', link: '/campus-wiki/internship/'},
            {icon: 'streamline:ai-science-spark-solid', text: '科研篇', link: '/campus-wiki/scientific-research/'}
        ]
    },
    {
        icon: '/icon/manage.svg',
        text: '后台管理',
        items: [
            {
                icon: '/icon/OAuth2.svg',
                text: 'OAuth登录(测试版)',
                link: 'https://hrtcsm.logto.app/demo-app'
            },
            {icon: 'icon-park:data-lock', text: '数据中心', link: '/backend-manage/data-center/'},
            {icon: '/icon/control.svg', text: '项导运维控制中台', link: '/backend-manage/pguide-maintenance-kit/'},
            {icon: '/icon/vpn.svg', text: 'VPN服务', link: '/backend-manage/vpb-service/'},
            {icon: '/icon/cloud.svg', text: '云计算资源调度中心', link: '/backend-manage/cloud-compute-invoke-center/'},
            {icon: 'material-symbols:monitoring-rounded', text: '监控中心', link: '/backend-manage/monitor-center/'},
            {
                icon: '/icon/maintain.svg',
                text: '服务器维护',
                link: '/backend-manage/server-maintenance/'
            },
        ],
    },
    {
        icon: '/icon/link.svg',
        text: '友情链接',
        items: [
            {icon: '/icon/friend.svg', text: '个人', link: '/friends/persons/'},
            {icon: '/icon/organ.svg', text: '组织', link: '/friends/organizations/'},
            {icon: 'fa-solid:quote-left', text: 'Q&A', link: '/friends/quotes/'},
        ]
    },
])
