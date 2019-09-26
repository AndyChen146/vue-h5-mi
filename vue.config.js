const path = require('path')
const webpack = require('webpack')

module.exports = {
    publicPath: '/',        //基本路径
    assetsDir: './',        //静态文件资源
    outputDir: './dist',    //生产环境打包输出的文件目录
    lintOnSave: false,      //是否采用eslint-loader检测 编译错误信息
    chainWebpack: config => { //允许对内部的webpack 配置更细粒度
        // const svgRule = config.module.rule('svg')
        // svgRule.uses.clear()
        // svgRule.use('svg-sprite-loader').loader('svg-sprite-loader').options({
        //     symbolId: 'icon-[name]'
        // })
    },
    configureWebpack: {     //
        externals: {
            'AMap': 'AMap'
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            })
        ]
    },
    productionSourceMap: false, //生产环境是否生产sourceMap 文件
    parallel: true,         //是否为babel/typeScript 使用 thread-loader
    devServer: {
        open: process.platform === 'darwin' ,  //serve启动是否自动打开浏览器 后面代表：标识node.js 进程运行其上的操作系统平台
        host: '0.0.0.0',       //代表本地ip及localhost
        port: 8080,            //监听请求的端口号
        https: false,          //是否采用https访问  默认http
        hotOnly: false,        //是否启用模块热替换
        //proxy: {               //设置代理
            // '/api': {
            //     target: 'http://www.xxx.com',
            //     secure: false  //如果采用https
            // }
        //},
        before: app => {}
    },



    // pluginOptions: {},    //第三方插件配置
    // transpileDependencies: [],   //通过babel 显示转译一个依赖
    // css: {},                    // css 相关配置

}
