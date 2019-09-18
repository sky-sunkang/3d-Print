import Vue from 'vue'
import axios from 'axios'
// 全局配置配合index.js解决开发axios跨域，服务器环境可以使用nginx的反向代理
axios.defaults.timeout = 5000// 在超时前，所有请求都会等待 5 秒
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8' //  配置请求头
// axios.defaults.baseURL = '/api'// 配置接口地址
// axios.defaults.withCredentials = false
Vue.prototype.$axios = axios// 将axios配置成vue的原型



