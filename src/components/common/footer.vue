<template>
  <footer id="footer">
    <yd-tabbar >

      <yd-tabbar-item :active="item.isActive" :title="item.name" :link="item.link" v-for="item in $store.state.tabbar" v-bind:key="item.link">
        <yd-icon :name="item.icon" custom slot="icon" size="0.54rem">
        </yd-icon> {{item.name}}
      </yd-tabbar-item>

    </yd-tabbar>
  </footer>
</template>
<script>
import store from '../../store/index';
export default {
  store,

}
</script>
<style lang="less">
footer {
  position: absolute;
  width: 100%;
  height: 50px;
  bottom: 0;
}
</style>
