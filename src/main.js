// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入Element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
//引入Axios
import axios from 'axios'
import "babel-polyfill";
import qs from 'qs';
Vue.prototype.$ajax = axios
//引入vuex
import Vuex from 'vuex'
import store from './vuex/store'
Vue.use(Vuex)
import '../static/css/global.css' /*引入公共样式*/
import utils from  './components/util' /*引入公共函数*/
Vue.prototype.utils = utils

Vue.config.productionTip = false
//全局组件
import Theme from './components/Theme.vue'
Vue.component('my-theme', Theme);


axios.interceptors.request.use(function (config) {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    if(config.method === 'post') {
      console.log( config.data )
        config.data = qs.stringify( {
            ...config.data
        })
        console.log( config.data )
    } 
    return config;
  }, function (error) {
    loadinginstace.close()
    return Promise.reject(error); 
  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
