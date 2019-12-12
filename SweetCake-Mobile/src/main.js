import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import Vant from "vant"
import 'vant/lib/index.css'
import axios from "axios"
import {
  GoodsAction,
  GoodsActionIcon,
  GoodsActionButton
} from 'vant';

Vue
  .use(GoodsAction)
  .use(GoodsActionIcon)
  .use(GoodsActionButton);

import { NavBar } from 'vant';

Vue.use(NavBar);

Vue.prototype.$http = axios;
Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App),
}).$mount('#app')

//解决图片HTTPS不能访问的问题
let head = document.getElementsByTagName('head')[0];
let meta = document.createElement('meta');
	
meta.setAttribute('name','referrer')
meta.setAttribute('content','no-referrer')
head.appendChild(meta);
