import {defineNoteConfig, defineNotesConfig} from 'vuepress-theme-plume'

const campusWiki = defineNoteConfig({
    dir: '大学百科',
    link: '/campus-wiki/',
    sidebar: 'auto',

})

const publicService = defineNoteConfig({
    dir: '公共服务',
    link: '/public-service/',
    sidebar: 'auto'
})

const backendManage = defineNoteConfig({
    dir: '后台管理',
    link: '/backend-manage/',
    sidebar: 'auto'
})

const CSDIY = defineNoteConfig({
    dir: 'CS-DIY',
    link: '/csdiy/',
    sidebar: 'auto'
})

const projectDocs = defineNoteConfig({
    dir: '项目文档',
    link: '/project-docs/',
    sidebar: 'auto',
})

const learningNotes = defineNoteConfig({
    dir: '学习笔记',
    link: '/learning-notes',
    sidebar: 'auto',
})

export default defineNotesConfig({
    dir: '/notes/',
    link: '/',
    notes: [campusWiki, publicService, CSDIY, projectDocs, learningNotes, backendManage],
})