import {viteBundler} from '@vuepress/bundler-vite'
import {defineUserConfig} from 'vuepress'
import {plumeTheme} from 'vuepress-theme-plume'
import notes from "./notes";
import {umamiAnalyticsPlugin} from "@vuepress/plugin-umami-analytics";
import {googleAnalyticsPlugin} from "@vuepress/plugin-google-analytics";
import {baiduAnalyticsPlugin} from "@vuepress/plugin-baidu-analytics";
import {pwaPlugin} from '@vuepress/plugin-pwa'
// export default {
//     plugins:
// }

export default defineUserConfig({

    //

    plugins: [
        pwaPlugin({
            // pwa 插件

            showInstall: true,
            manifest: {
                name: 'PGuide Docs',
                short_name: '项导文档',
                description: 'An open-source documentation site',
                lang: 'en',
                background_color: '#ffffff',
                theme_color: '#cbfaab',
                orientation: 'portrait-primary',
                start_url: '/',
                display: 'fullscreen',
                icons:[
                    {
                        src: 'icon/logo.png',
                        type: 'image/png',
                        sizes: '200x200'
                    }
                ],
            },
            update: 'hint',
            favicon: 'icon/favicon.ico',
        }),

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
        baiduAnalyticsPlugin({
            // Baidu 分析
            id: 'efe5ce8fae653f1c20f5038be01c82e7'
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
        /* 添加您的部署域名, 有助于 SEO, 生成 sitemap */
        hostname: 'https://docs.pguide.studio',

        /* 文档仓库配置，用于 editLink */
        docsRepo: 'https://github.com/Lyrlark/PGuide-Docs',
        docsDir: 'docs',
        docsBranch: 'master',

        // copyright: {
        //     license: {
        //         name: 'Mozilla Public License\n' +
        //             'Version 2.0', // 许可证名称
        //         url: 'https://www.mozilla.org/en-US/MPL/2.0/' // 许可证地址
        //     }
        // },

        changelog: true,

        /* 页内信息 */
        // editLink: true,
        // lastUpdated: true,
        // contributors: {
        //     mode: 'block',
        // },
        // changelog: false,
        /**
         * 博客
         * @see https://theme-plume.vuejs.press/config/basic/#blog
         */
        // blog: false, // 禁用博客
        // blog: {
        //   postList: true, // 是否启用文章列表页
        //   tags: true, // 是否启用标签页
        //   archives: true, // 是否启用归档页
        //   categories: true, // 是否启用分类页
        //   postCover: 'right', // 文章封面位置
        //   pagination: 15, // 每页显示文章数量
        // },

        /* 博客文章页面链接前缀 */
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
            themes: {light: 'vitesse-light', dark: 'vitesse-dark'},
            notationDiff: true,
            notationErrorLevel: true,
            notationFocus: true,
            notationHighlight: true,
            notationWordHighlight: true,
            highlightLines: true,
            collapsedLines: 10,
            lineNumbers: false,
            twoslash: true,
            // langs: ['vue', 'typescript', 'latex', 'matlab', 'java', 'c++', 'cmake']
            whitespace: false,
        },

        plugins: {


            // 开发环境和生产环境都启用git贡献功能
            git: process.env.NODE_ENV === 'production',

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

            /* 文章字数统计、阅读时间，设置为 false 则禁用 */
            // readingTime: true,

            /**
             * markdown enhance
             * @see https://theme-plume.vuejs.press/config/plugins/markdown-enhance/
             */
            markdownEnhance: {
                echarts: true,
                mermaid: true,
            },


            /**
             *  markdown power
             * @see https://theme-plume.vuejs.press/config/plugin/markdown-power/
             */

            markdownPower: {
                codeTree: true, // 启用代码树语法 ::: code-tree
                collapse: true, // 启用折叠语法 ::: collapse
                pdf: true,          // 启用 PDF 嵌入 @[pdf](/xxx.pdf)
                caniuse: true,      // 启用 caniuse 语法  @[caniuse](feature_name)
                plot: true,         // 启用隐秘文本语法 !!xxxx!!
                bilibili: true,     // 启用嵌入 bilibili视频 语法 @[bilibili](bid)
                youtube: true,      // 启用嵌入 youtube视频 语法 @[youtube](video_id)
                artPlayer: true,    // 启用嵌入 artPlayer 本地视频 语法 @[artPlayer](url)
                audioReader: true,  // 启用嵌入音频朗读功能 语法 @[audioReader](url)
                icons: true,        // 启用内置图标语法  :[icon-name]:
                codepen: true,      // 启用嵌入 codepen 语法 @[codepen](user/slash)
                replit: true,       // 启用嵌入 replit 语法 @[replit](user/repl-name)
                codeSandbox: true,  // 启用嵌入 codeSandbox 语法 @[codeSandbox](id)
                jsfiddle: true,     // 启用嵌入 jsfiddle 语法 @[jsfiddle](user/id)
                npmTo: true,        // 启用 npm-to 容器  ::: npm-to
                demo: true,         // 启用 demo 容器  ::: demo
                timeline: true, // 启用时间线, https://theme-plume.vuejs.press/guide/markdown/timeline/
                imageSize: 'local', // 启用 自动填充 图片宽高属性，避免页面抖动
                annotation: true, // https://theme-plume.vuejs.press/guide/markdown/annotation/
                abbr: true, // 启用缩略词功能
                field: true, // 启用字段容器功能
            },


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
            // comment: {
            //     provider: 'Giscus', // "Artalk" | "Giscus" | "Twikoo" | "Waline"
            //     comment: true,
            //     repo: 'Lyrlark/PGuide-Docs',
            //     repoId: 'R_kgDON5Sklw',
            //     category: 'Q&A',
            //     categoryId: 'DIC_kwDON5Skl84CneCO',
            //     mapping: 'pathname',
            //     reactionsEnabled: true,
            //     inputPosition: 'top',
            // },
            comment: {
                provider: 'Waline',
                serverURL: 'https://comment.pguide.studio'
            }
        },

        /**
         * 加密功能
         * @see https://theme-plume.vuejs.press/guide/features/encryption/
         */
        encrypt: {
            rules: {
                '/csdiy/tools-must/magic/': 'magic',
            }
        },
    }),
})
