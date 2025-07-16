import {defineClientConfig} from '@vuepress/client'
import './theme/styles/custom.css'
import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
import Swiper from 'vuepress-theme-plume/features/Swiper.vue'

// import Layout from "./layouts/Layout.vue";

export default defineClientConfig({

    // 布局插槽：https://plume-layout-slots.netlify.app/
    // layouts: {
    //     Layout,
    // },

    enhance({app}) {
        app.component('RepoCard', RepoCard)
        app.component('Swiper', Swiper) // you should install `swiper`
        // app.component('CustomComponent', CustomComponent)
    },
})
