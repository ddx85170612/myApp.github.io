// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from './directive/directive'
import App from './App'
import router from './router/hook'
import service from '../src/service/service.js'
import VueScroller from 'vue-scroller'
import store from './store/index'
import YDUI from 'vue-ydui';
import Vuex from 'vuex'
import 'vue-ydui/dist/ydui.rem.css';
import 'vue-ydui/dist/ydui.base.css';
Vue.config.productionTip = false


Vue.use(Vuex)
Vue.use(service)
Vue.use(YDUI);
Vue.use(VueScroller)

import Header from './components/common/header.vue'
Vue.component(
  'x-header',Header
)


/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
