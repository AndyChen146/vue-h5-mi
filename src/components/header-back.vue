<template>
  <div class="header-back" :class="{'active': active}">
    <p>{{title}}</p>
    <span class="iconfont icon-backer myicon back" @click="$router.go(-1)"></span>
    <span class="iconfont icon-sousuo-copy myicon search" @click="$router.openPage('/search')"></span>
  </div>
</template>

<script>
export default {
  name: 'header-back',
  props: {
    title: {
      type: String,
      default: '标题'
    }
  },
  data() {
    return {
      active: false
    }
  },
  mounted() {
    setTimeout(()=>{
      this.active = true
    },10)
  }
}
</script>
<style type="text/sass" lang="scss">
  @import '../assets/public/util';
  .header-back{
    line-height: getIphonese(42px);
    background: #f2f2f2;
    padding: getIphonese(30px) 0;
    @include ani01-transform;
    @include f14px;
    transform: translateY(-100%);
    color: #666666;
    text-align: center;
    position: relative;
    &.active{
      transform: translateY(0%);
    }
    .myicon{
      position: absolute;
      width: getIphonese(88px);
      line-height: getIphonese(42px);
      top: getIphonese(30px);
      color: #919191;
      font-size: .58rem;
    }
    .back{
      left: 0;
    }
    .search{
      right: 0;
    }

  }
</style>


