import {viteBundler} from '@vuepress/bundler-vite'
import {defineUserConfig} from 'vuepress'
import {plumeTheme} from 'vuepress-theme-plume'
import notes from "./notes";
import {umamiAnalyticsPlugin} from "@vuepress/plugin-umami-analytics";
import {googleAnalyticsPlugin} from "@vuepress/plugin-google-analytics";
import {pwaPlugin} from '@vuepress/plugin-pwa'


export default defineUserConfig({

    plugins: [
        // pwaPlugin({
        //     // pwa 插件
        //     showInstall: true,
        //     manifest: {
        //         name: 'PGuide Docs',
        //         short_name: '项导文档',
        //         description: 'An open-source documentation site',
        //         lang: 'en',
        //         background_color: '#ffffff',
        //         theme_color: '#ffffff',
        //         orientation: 'portrait-primary',
        //         start_url: '/',
        //         display: 'fullscreen',
        //         icons: [
        //             {
        //                 src: 'icon/logo.png',
        //                 type: 'image/png',
        //                 sizes: '200x200'
        //             }
        //         ],
        //     },
        //     update: 'force',
        //     favicon: 'icon/favicon.ico',
        // }),

        umamiAnalyticsPlugin({
            // umami 分析
            id: 'edaececa-cf6b-4ba3-9678-d57c73d7bc3c',
            link: 'https://cloud.umami.is/script.js',
            autoTrack: true,
            cache: true,
            hostUrl: 'https://docs.pguide.studio',
        }),
        googleAnalyticsPlugin({
            // Google 分析
            id: 'G-RDX6MRNXSF',
            debug: true,
        }),
    ],
    base: '/',
    lang: 'zh-CN',
    title: 'PGuide Docs',
    description: '项导文档',

    head: [
        // 配置站点图标
        ['link', {rel: 'icon', type: 'image/png', href: '/icon/logo.svg'}],
    ],

    bundler: viteBundler(),
    shouldPrefetch: false, // 站点较大，页面数量较多时，不建议启用

    theme: plumeTheme({

        markdown: {
            echarts: true, // 启用 ECharts 支持
            mermaid: true, // 启用 Mermaid 支持
            plantuml: true, // 启用 PlantUML 支持
            markmap: true, // 启用 Markmap 支持
            pdf: true, // 启用 PDF 支持
            bilibili: true, // 启用 Bilibili 视频支持
            youtube: true, // 启用 YouTube 视频支持
            codeTree: true, // 启用代码树语法 ::: code-tree
            collapse: true, // 启用折叠语法 ::: collapse
            caniuse: true,      // 启用 caniuse 语法  @[caniuse](feature_name)
            plot: true,         // 启用隐秘文本语法 !!xxxx!!
            artPlayer: true,    // 启用嵌入 artPlayer 本地视频 语法 @[artPlayer](url)
            audioReader: true,  // 启用嵌入音频朗读功能 语法 @[audioReader](url)
            codepen: true,      // 启用嵌入 codepen 语法 @[codepen](user/slash)
            codeSandbox: true,  // 启用嵌入 codeSandbox 语法 @[codeSandbox](id)
            jsfiddle: true,     // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)
            npmTo: true,        // 启用 npm-to 容器  ::: npm-to
            demo: true,         // 启用 demo 容器  ::: demo
            timeline: true, // 启用时间线, https://theme-plume.vuejs.press/guide/markdown/timeline/
            imageSize: 'local', // 启用 自动填充 图片宽高属性，避免页面抖动
            annotation: true, // https://theme-plume.vuejs.press/guide/markdown/annotation/
            abbr: true, // 启用缩略词功能
            field: true, // 启用字段容器功能
            table: {
                // 表格默认对齐方式 'left' | 'center' | 'right'
                align: 'left',
                // 表格宽度是否为最大内容宽度
                // 行内元素不再自动换行，超出容器宽度时表格显示滚动条
                maxContent: false,
                /**
                 * 复制为 html/markdown
                 * true 相当于 `all`，相当于同时启用 html 和 markdown
                 */
                copy: true, // true | 'all' | 'html' | 'md'
            }
        },

        /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
        hostname: 'https://docs.pguide.dev',

        /* 文档仓库配置，用于 editLink */
        docsRepo: 'https://github.com/PGuideDev/PGuide-Docs',
        docsDir: 'docs',
        docsBranch: 'master',

        // copyright: {
        //     license: {
        //         name: 'Mozilla Public License\n' +
        //             'Version 2.0', // 许可证名称
        //         url: 'https://www.mozilla.org/en-US/MPL/2.0/' // 许可证地址
        //     }
        // },

        /* 页内信息 */
        editLink: true,

        lastUpdated: true,
        contributors: {
            mode: 'block',
            info: [
                {
                    username: 'rand777gg', // github username
                    alias: ['LyrLark','rand777'], // 别名，本地 git 配置中的用户名
                },
                {
                    username: 'Nightowlwithrain',
                    alias: ['shen'],
                },
                {
                    username: 'Lilyxxcccc',
                    alias: ['Lily'],
                },
                {
                    username: 'MenTouGouMouse',
                    alias: ['ChenHongYu'],
                },
                {
                    username: 'DingGe3',
                    alias: ['lhr'],
                },
                {
                    username: 'dream520nb',
                    alias: ['dream'],
                },
                {
                    username: 'TianGuaUaena',
                    alias: ['leikuanlin'],
                },
                {
                    username: 'emptyelse',
                    alias: ['lizhi'],
                },
            ]
        },
        changelog: {
            maxCount: 10,
            repoUrl: 'https://github.com/PGuideDev/PGuide-Docs',
            commitUrlPattern: ':repo/commit/:hash',
            issueUrlPattern: ':repo/issues/:issue',
            tagUrlPattern: ':repo/releases/tag/:tag'
        },
        article: '/article/',

        /**
         * 编译缓存，加快编译速度
         * @see https://theme-plume.vuejs.press/config/basic/#cache
         */
        cache: 'filesystem',
        notes,

        /**
         * 为 markdown 文件自动添加 frontmatter 配置
         * @see https://theme-plume.vuejs.press/config/basic/#autofrontmatter
         */
        // autoFrontmatter: {
        //   permalink: true,  // 是否生成永久链接
        //   createTime: true, // 是否生成创建时间
        //   title: true,      // 是否生成标题
        // },

        /**
         * Shiki 代码高亮
         * @see https://theme-plume.vuejs.press/config/plugins/code-highlight/
         */

        codeHighlighter: {
            themes: {light: 'github-light', dark: 'dark-plus'},
            notationDiff: true,
            notationErrorLevel: true,
            notationFocus: true,
            notationHighlight: true,
            notationWordHighlight: true,
            highlightLines: true,
            collapsedLines: 10,
            lineNumbers: false,
            whitespace: false,
        },

        plugins: {

            git: true,

            /* 本地搜索, 默认启用 */
            search: false,

            /**
             * Algolia DocSearch
             * 启用此搜索需要将 本地搜索 search 设置为 false
             * @see https://theme-plume.vuejs.press/config/plugins/search/#algolia-docsearch
             */
            // docsearch: {
            //   appId: '',
            //   apiKey: '',
            //   indexName: '',
            // },

            /**
             * 在 Markdown 文件中导入其他 markdown 文件内容。
             * @see https://theme-plume.vuejs.press/guide/markdown/include/
             */
            // markdownInclude: true,

            /**
             * Markdown 数学公式
             * @see https://theme-plume.vuejs.press/config/plugins/markdown-math/
             */
            markdownMath: {
                type: 'katex',
            },

            /**
             * 水印
             * @see https://theme-plume.vuejs.press/guide/features/watermark/
             */
            // watermark: true,

            /**
             * 评论 comments
             * @see https://theme-plume.vuejs.press/guide/features/comments/
             */
            comment: {
                provider: 'Waline',
                serverURL: 'https://comment.pguide.studio'
            }
        },

        /**
         * 加密功能
         * @see https://theme-plume.vuejs.press/guide/features/encryption/
         */
        // encrypt: {
        //     rules: {
        //         '/csdiy/tools-must/magic/': 'magic',
        //     }
        // },
    }),
})
