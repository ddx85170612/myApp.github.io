<template>
  <footer>
    <yd-tabbar>
      <yd-tabbar-item title="加油" link="/gasMain">
        <yd-icon name="tint" custom slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="汽车服务" link="/carMain" :active="true">
        <yd-icon name="truck" custom slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="活动" link="/giftMain">
        <yd-icon name="gift" custom slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="我" link="/userMain">
        <yd-icon name="ucenter" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
    </yd-tabbar>
  </footer>
</template>
<script>
export default {

}
</script>
<style lang="less">
footer {
  position: absolute;
  width: 100%;
  bottom: 0;
}

</style>
