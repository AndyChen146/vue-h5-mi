import VueDB from '../../util/vue-db/vue-db-long'

let DB = new VueDB()

class ShopCarTool{
    constructor(store) {
        var shopCar = DB.getItem('shop-car').toJson()
        if(!shopCar) {
            DB.setItem('shop-car', JSON.stringify(shopCar = {}))
        }
        this.$store = store
        this.shopCarDB = shopCar
    }
    //更新
    upData() {
        DB.setItem('shop-car', JSON.stringify(this.shopCarDB))
        this.$store.commit('setShopCarLength', this.length())
    }
    //新增
    add(value) {
        var key = value.id
        if(!key) {
            return
        }
        if(this.shopCarDB[key]) {
            this.shopCarDB[key].length += 1
        }else {
            var filter = {}
            var filterResout = ['title', 'money', 'id']
            for(var i = 0; i<filterResout.length; i++) {
                var innerKey = filterResout[i]
                filter[innerKey] = value[innerKey]
            }
            filter.img = value.banner[0] ? value.banner[0].src : ''
            filter.link = '/detail/'+value.id
            filter.length = 1
            this.shopCarDB[key] = filter
        }
        this.upData()
    }
    //减去一个商品，判断为0则删除商品
    minus(value) {
        var key = value.id
        if(!key) {
            return
        }

        if(this.shopCarDB[key]) {
            this.shopCarDB[key].length -= 1
            if(this.shopCarDB[key].length <= 0) {
                this.remove(key)
            }
            this.upData()
        }
    }
    //删除单个商品
    remove(key) {
        this.shopCarDB[key].length = 0
        delete this.shopCarDB[key]
        this.upData()
    }
    //删除所有商品
    removeAll() {
        this.shopCarDB = {}
        this.upData()
    }
    //获取单个商品
    get(key) {
        return this.shopCarDB[key]
    }
    //获取全部商品
    getAll() {
        return this.shopCarDB
    }
    //设置单个商品里的某一个字段
    set(parentKey, key, value) {
        if(this.shopCarDB[parentKey]) {
            this.shopCarDB[parentKey][key] = value
            this.upData()
        }
    }
    setLength(key, value) {
        if(this.shopCarDB[key]) {
            this.shopCarDB[key].length = value
        }
        this.upData()
    }
    //查看商品字段长度
    length() {
        var n = 0
        for(var i in this.shopCarDB) {
            n += this.shopCarDB[i].length
        }
        return n
    }
}

export default ShopCarTool
