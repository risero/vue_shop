import Vue from 'vue'
import App from './App'
import http from '@/common/request.js'
Vue.prototype.$http = http
import '@/static/font/iconfont.css'
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
