import Vue from 'vue'

Vue.directive('h', {
  bind: function (el, binding) {

    console.log(el.offsetTop);

  },
  update: function (newValue, oldValue) {
    // 根据获得的新值执行对应的更新
    // 对于初始值也会被调用一次
  },
  unbind: function () {
    // 做清理工作
    // 比如移除在 bind() 中添加的事件监听器
  }
})


export default Vue
