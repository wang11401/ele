import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import axios from 'axios'
import {post,get} from './network/index'
//定义全局变量
Vue.prototype.$post=post;
Vue.prototype.$get=get;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
