import Vue from 'vue'
import Vuex from 'vuex'
import ShopCarTool from '@/util/shop-car-tool/index'

let shopCar = new ShopCarTool()

Vue.use(Vuex)

const Apploading = {   //顶部加载条
    state: {
        nowStatus: 'loading'
    },
    mutations: {
        nowStatus (state, data) {
            state.nowStatus = data
        }
    },
    getters: {
        nowStatus (state) {
            return state.nowStatus
        }
    }
}

const ShopCar = {     //购物车数量
    state: {
        length: shopCar.length()
    },
    mutations: {
        setShopCarLength (state, length) {
            state.length = length;
        }
    },
    getters: {
        getShopCarLength (state){
            return state.length
        }
    }
}

export default new Vuex.Store({
    modules: {
        Apploading,
        ShopCar
    }
})
