import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
    // Для слешей в путях
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/todos',
            // Lazzy loading
            component: () => import('./views/Todos.vue')
        }
    ]

})