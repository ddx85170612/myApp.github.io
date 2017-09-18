<template>
  <div class="promotion">

    <div class="promotion-icon" id="result" @click="tag">
      <span class="icon-custom-angle-up"></span>
    </div>
    <div class="promotion-text"> 截止目前,您累计节省99元
    </div>
    <pull-up v-if="isShow" :show="isShow" v-on:listenToChildEvent="aaa"></pull-up>
  </div>
</template>

<script>
import layer from 'layer-mobile';
import pullUp from './pulUp';
export default {
  methods: {
    tag() {
      this.isShow = !this.isShow
    },
    aaa(data) {
      this.isShow=data
    }
  },
  mounted() {
  },
  data() {
    return {
      isShow: false
    }
  },
  components: {
    pullUp
  }
}
</script>

<style lang="less">
.promotion {
  position: fixed;
  bottom: 0;
  height: 1rem;
  line-height: 1rem;
  width: 100%; // background: #fff;
  text-align: center;
  font-size: .3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .promotion-icon {
    height: 0.3rem;
    line-height: 0.3rem;
    width: 20%;
    display: inline-block;
    transform: perspective(.1em) rotateX(3deg); // width: 50px;
    background: #fff;
  }
  .promotion-text {
    width: 100%;
    background: #fff;
  }
}
</style>
