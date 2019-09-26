import Vue from 'vue'
import Router from 'vue-router'
import _ from 'lodash'

Vue.use(Router)

Router.prototype.openPage = function(link, query) {
    this.push({
        path: link,
        query: _.assign({
            time: new Date().getTime()
        },query || {})
    })
}


export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            name: 'Home',
            component: () => import('@/view/home/index.vue'),
        },
        {
            path: '/classification',
            name: 'Classification',
            component(resolve) {
                require(['@/view/classification'], resolve)
            }
        },
        {
            path: '/mine',
            name: 'Mine',
            component(resolve){
                require(['@/view/mine'], resolve)
            }
        },
        {
            path: '/shoppingcart',
            name: 'Shoppingcart',
            component(resolve){
                require(['@/view/shoppingcart'], resolve)
            }
        },
        {
            path: '/search',
            name: 'Search',
            component(resolve){
                require(['@/view/search'], resolve)
            }
        },
        {
            path: '/pay',
            name: 'Pay',
            component(resolve){
                require(['@/view/pay'], resolve)
            }
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component(resolve){
                require(['@/view/detail/index.vue'], resolve)
            }
        }
    ]
})










