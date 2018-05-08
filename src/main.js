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

Vue.config.productionTip = false


// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded' 
axios.interceptors.request.use(function (config) {
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    if(config.method === 'post') {
        config.data = qs.stringify( {
            ...config.data
        })
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
