import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import carMain from '../components/car/car_main.vue'
import userMain from '../components/user/user_main.vue'
import giftMain from '../components/gift/gift_main.vue'
import gasMain from '../components/gas/gas_main.vue'

Vue.use(Router)

const routes = new Router({
  routes: [{
      path: '/',
      redirect: { name: 'home' }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{
        path: '/carMain',
        name: 'carMain',
        component: carMain,
      }, {
        path: '/userMain',
        name: 'userMain',
        component: userMain,
      }, {
        path: '/gasMain',
        name: 'gasMain',
        component: gasMain,
      }, {
        path: '/giftMain',
        name: 'giftMain',
        component: giftMain,
      }]
    }
  ]
})

export default routes

