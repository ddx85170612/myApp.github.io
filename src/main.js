// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/hook'
import service from '../src/service/service.js'
import VueScroller from 'vue-scroller'

import YDUI from 'vue-ydui';
import Vuex from 'vuex'
import 'vue-ydui/dist/ydui.rem.css';
Vue.use(Vuex)
Vue.prototype.service = service;

Vue.use(YDUI);
Vue.config.productionTip = false
Vue.use(VueScroller)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
