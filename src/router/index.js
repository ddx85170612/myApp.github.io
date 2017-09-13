import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
// import carMain from '../components/car/car_main.vue'
// import userMain from '../components/user/user_main.vue'
// import giftMain from '../components/gift/gift_main.vue'
// import gasMain from '../components/gas/gas_main.vue'

Vue.use(Router)

const routes = new Router({
  routes: [{
      path: '/',
      redirect: {
        name: 'home'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [{
          path: '/carMain',
          name: 'carMain',
          component: resolve => require(['../components/car/car_main.vue'], resolve),
        },
        {
          path: '/userMain',
          name: 'userMain',
          component: resolve => require(['../components/user/user_main.vue'], resolve),
        }, {
          path: '/gasMain',
          name: 'gasMain',
          component: resolve => require(['../components/gas/gas_main.vue'], resolve),
        }, {
          path: '/giftMain',
          name: 'giftMain',
          component: resolve => require(['../components/gift/gift_main.vue'], resolve),
        }
      ]
    }, {
      path: '/carWash',
      name: 'carWash',
      component: resolve => require(['../components/car/car_wash.vue'], resolve),
    }, {
      path: '/carMerchantDetail',
      name: 'carMerchantDetail',
      component: resolve => require(['../components/car/car_ merchant_detail.vue'], resolve),
    }, {
      path: '/carFeedback',
      name: 'carFeedback',
      component: resolve => require(['../components/car/car_feedback.vue'], resolve),
    }, {
      path: '/carOrderConfirm',
      name: 'carOrderConfirm',
      component: resolve => require(['../components/car/car_order_confirm.vue'], resolve),
    }, {
      path: '/carServiceDetail',
      name: 'carServiceDetail',
      component: resolve => require(['../components/car/car_service_detail.vue'], resolve),
    }, {
      path: '/carSuc',
      name: 'carSuc',
      component: resolve => require(['../components/car/car_suc.vue'], resolve),
    }

  ]
})

export default routes
