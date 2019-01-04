import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/page/Home'
import Details from '@/page/ComicDetails'
import NotFound from '@/page/NotFound'
import Comic from '@/page/ComicList'
import Content from '@/page/ComicContent'

Vue.use(VueRouter)

export default new VueRouter({
    mode:'hash',
    routes:[
        {
            path:'/',
            component:Home
        },
        {
            path:'/ComicList',
            component:Comic,
        },
        {
            path:'/ComicDetails/id/:id',
            component:Details,
        },
        {
            path:'/comicContent/id/:id',
            component:Content,
        },
        {
            path:'/error.html',
            component:NotFound
        },
        {
            path:'*',
            redirect:'error.html'
        },
        
    ]
})