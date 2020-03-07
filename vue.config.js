// vue.config.js
module.exports = {
    //选项
    productionSourceMap: process.env.NODE_ENV !== 'production',
    devServer:{
        port:8080
    },
    lintOnSave: false
}