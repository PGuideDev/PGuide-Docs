import {defineClientConfig} from '@vuepress/client'
import './theme/styles/custom.css'
import RepoCard from 'vuepress-theme-plume/features/RepoCard.vue'
import Swiper from 'vuepress-theme-plume/features/Swiper.vue'
import Update from './public/component/Update.vue'

export default defineClientConfig({

    enhance({app}) {
        app.component('RepoCard', RepoCard)
        app.component('Swiper', Swiper)
        app.component('Update', Update)
    },
})
