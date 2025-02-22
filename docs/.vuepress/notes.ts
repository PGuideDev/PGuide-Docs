import {defineNoteConfig, defineNotesConfig} from 'vuepress-theme-plume'

const campusWiki = defineNoteConfig({
    dir: '大学百科',
    link: '/campus-wiki/',
    sidebar: 'auto'
})

const publicService = defineNoteConfig({
    dir: '公共服务',
    link: '/public-service/',
    sidebar: [
        {
            prefix: 'overleaf',
            icon: 'ep:guide',
            items: [
                'LaTeX',
                {
                    text: '注册',
                    link: 'register',
                },
                { text: '---', link: '---' },
            ]
        }
    ]
})

const CSDIY = defineNoteConfig({
    dir: 'CS-DIY',
    link: 'csdiy',
    sidebar: 'auto'
})

export default defineNotesConfig({
    dir: '/notes/',
    link: '/',
    notes: [campusWiki, publicService],
})