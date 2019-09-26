import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

Vue.use(VueLazyload,{
  preLoad: 1.3,
  error: '',
  loading: '',
  attempt: 1
})

Vue.config.productionTip = false

router.beforeEach((to, from, next)=>{
    store.commit('nowStatus', 'loading')
    next()
})

router.afterEach((to, from, next)=>{
    store.commit('nowStatus', 'end')
    setTimeout(()=>{
      store.commit('nowStatus', 'hide')
    },900)
    setTimeout(()=>{
      store.commit('nowStatus', 'normal')
    },1000)
})

document.addEventListener("touchstart", function(){}, true)

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
