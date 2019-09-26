<template>
    <div class="app-init pay">
        <header-back title="关于"></header-back>
        <div class="padding-box">
            <p>仿小米商城，纯属练习，请勿用于商用</p>
            <br>
            <p>用到的技术</p>
            <ul>
                <li>vue-cli</li>
                <li>vue</li>
                <li>vue-router</li>
                <li>vuex</li>
                <li>scss</li>
                <li>lodash</li>
                <li>axios</li>
            </ul>
            <br>
            <p>制作时间： 2019-07-22</p>
        </div>
    </div>
</template>

<script>
import headerBack from '../../components/header-back'
export default {
    name: 'pay',
    components: {
        headerBack
    }
}
</script>
<style type="text/sass" lang="scss">
.padding-box{
    padding: .4rem;
    color: #333;
}
</style>

