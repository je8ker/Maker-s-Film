import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        }
    ]
})
출처: https://engineer-mole.tistory.com/337 [매일 꾸준히, 더 깊이:티스토리]