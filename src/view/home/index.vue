<template>
  <div class="app-init home-index">
    <header class="public-header">
      <form class="search-box clear">
        <div class="logo fl">
          <span class="iconfont icon-xiaomi"></span>
        </div>
        <div class="input-box" @click="$router.openPage('/search')">
          <span class="iconfont icon-sousou-copy absolute"></span>
          <input type="text" class="input-controller" placeholder="搜索商品名称" readonly>
        </div>
        <div class="myself-center fr" @click="$router.openPage('/mine')">
          <span class="iconfont icon-smile"></span>
        </div>
      </form>
      <nav class="menu-box scroll-box-x noscroll">
        <ul class="wrap-box clear">
          <li class="item" :class="{'active': index == navListActiveIndex}" v-for="(i, index) in navList" :key="index">
            <span >{{i.name}}</span>
          </li>
        </ul>
      </nav>
    </header>

    <div class="app-init scroll-box tab-box mi-tj footer-hack">
      <swiper :list="bannerList"></swiper>
      <div class="nav-mi-tj clear">
        <a href="javascript:;" class="fl">
          <img @click="$router.openPage('/pay')" src="http://qiniu.verydog.cn//show.liluo.cc/2018011022292984819.png" alt="">
        </a>
        <a href="javascript:;" class="fl">
          <img @click="$router.openPage('/pay')" src="http://qiniu.verydog.cn//show.liluo.cc/2018011022292372054.png" alt="">
        </a>
        <a href="javascript:;" class="fl">
          <img @click="$router.openPage('/pay')" src="http://qiniu.verydog.cn//show.liluo.cc/2018011022291629252.png" alt="">
        </a>
        <a href="javascript:;" class="fl">
          <img @click="$router.openPage('/pay')" src="http://qiniu.verydog.cn//show.liluo.cc/2018011022290460400.png" alt="">
        </a>
      </div>
      <div class="shop-item clear">
        <img @click="$router.openPage('/detail/1001')" src="http://qiniu.verydog.cn//show.liluo.cc/2018011114551289342.png" class="fl href" alt="">
        <img @click="$router.openPage('/detail/1004')" src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e2ad0dbf777fda097e55cea9ce716e33.jpg?thumb=1&w=358&h=252" class="fr href" style="margin-bottom: 0.05rem" alt="">
        <img @click="$router.openPage('/detail/1005')" src="http://qiniu.verydog.cn//show.liluo.cc/2018011114550596671.png" class="fr href" alt="">
      </div>
      <div class="shop-item clear">
        <img @click="$router.openPage('/detail/1003')"  v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/a589d24e74c4d96191dd46635054e804.jpg'" alt="">
      </div>

      <div class="shop-item clear">
        <img @click="$router.openPage('/detail/1006')" v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011115034174111.png'" alt="">
      </div>

      <div class="shop-item clear">
        <img @click="$router.openPage('/detail/1007')" v-lazy="'http://qiniu.verydog.cn//show.liluo.cc/2018011115033089933.png'" alt="">
      </div>
      <div class="shop-item clear">
        <div class="shop-box clear">
          <div class="shop-box-item" v-for="(target, index) in shoplist" :key="index" @click="$router.openPage(target.href)">
            <img v-lazy="target.src" alt="">
            <p class="title">{{target.title}}</p>
            <p class="con">{{target.con}}</p>
            <p class="money">
              <span class="small">￥</span>{{target.money}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "@/components/swiper"

export default {
  name: 'Home',
  data () {
    return {
      navListActiveIndex: 0,
      bannerList: [
        {
          src: 'http://qiniu.verydog.cn//show.liluo.cc/01.png',
          href: '/detail/1001'
        },
        {
          src: 'http://qiniu.verydog.cn//show.liluo.cc/02.jpg',
          href: '/detail/1002'
        },
        {
          src: 'http://qiniu.verydog.cn//show.liluo.cc/03.jpg',
          href: '/detail/1003'
        },
        {
          src: 'http://qiniu.verydog.cn//show.liluo.cc/04.jpg',
          href: '/detail/1004'
        }
      ],
      shoplist : [
        {
          src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
          title: '米家感应灯',
          con: '举步之明，光明立现',
          money: 49,
          href: '/detail/1008'
        },
        {
          src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
          title: '米家感应灯',
          con: '举步之明，光明立现',
          money: 49,
          href: '/detail/1008'
        },
        {
          src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
          title: '米家感应灯',
          con: '举步之明，光明立现',
          money: 49,
          href: '/detail/1008'
        },
        {
          src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
          title: '米家感应灯',
          con: '举步之明，光明立现',
          money: 49,
          href: '/detail/1008'
        },
        {
          src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
          title: '米家感应灯',
          con: '举步之明，光明立现',
          money: 49,
          href: '/detail/1008'
        },
        {
          src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
          title: '米家感应灯',
          con: '举步之明，光明立现',
          money: 49,
          href: '/detail/1008'
        },
        {
          src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
          title: '米家感应灯',
          con: '举步之明，光明立现',
          money: 49,
          href: '/detail/1008'
        },
        {
          src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
          title: '米家感应灯',
          con: '举步之明，光明立现',
          money: 49,
          href: '/detail/1008'
        },
        {
          src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
          title: '米家感应灯',
          con: '举步之明，光明立现',
          money: 49,
          href: '/detail/1008'
        },
        {
          src: 'http://qiniu.verydog.cn//show.liluo.cc/65eeeedca463345b0cfd36e042185af3.jpg',
          title: '米家感应灯',
          con: '举步之明，光明立现',
          money: 49,
          href: '/detail/1008'
        }
      ],
      navList: [
        {
          name: '推荐'
        },
        {
          name: '手机'
        },
        {
          name: '智能'
        },
        {
          name: '电视'
        },
        {
          name: '电脑'
        },
        {
          name: '全面屏'
        },
        {
          name: '生活周边'
        },
        {
          name: '盒子'
        },
        {
          name: '艺术'
        }
      ],
    }
  },
  components: {
    swiper
  },
  mounted() {

  },
  methods: {

  }
}
</script>
<style type="text/scss" lang="scss" scoped>
.home-index{
  .tab-box{
    top: 2.5rem;
  }
  .tab-box.mi-tj{
    .nav-mi-tj{
      a{
        display: block;
        width: 25%;
      }
    }
  }
  .shop-box{
    background-color: #fff;
  }
}
</style>
