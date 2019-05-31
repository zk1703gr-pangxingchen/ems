// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import VCharts from 'v-charts'
import Vuex from 'vuex'
import store from './vuex/store'

import axios from 'axios'
Vue.prototype.$axios = axios    //把axios挂载到vue的原型中，在vue中每个组件都可以使用axios发送请求
axios.defaults.withCredentials = true
Vue.prototype.baseUrl = 'http://localhost:9000'    //设置后端的网址
import qs from 'qs'
Vue.prototype.$qs = qs;

// Vue.config.productionTip = false
// Vue.use(ElementUI)
// Vue.use(VCharts)


Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(VCharts)
Vue.use(Vuex)

router.beforeEach((to, from, next) => {
	if (to.name=='login' || store.state.loginflag) {
		next();
	} else{
		next("/login");
	}
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
	store,
  components: { App },
  template: '<App/>'
})
