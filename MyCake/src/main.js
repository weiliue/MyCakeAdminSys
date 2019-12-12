import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

import './assets/font/iconfont.css'
import '@/assets/css/ProShow.css'

Vue.use(ElementUI);

Vue.prototype.$http = axios;
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

let head = document.getElementsByTagName('head')[0];
let meta = document.createElement('meta');
	
meta.setAttribute('name','referrer')
meta.setAttribute('content','no-referrer')
head.appendChild(meta);

