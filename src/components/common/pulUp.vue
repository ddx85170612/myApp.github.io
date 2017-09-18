<template>
  <div class="pullUp">
    <div class="pullUp-content" id="pullUp-content">
      <div class="promotion-icon" @click="tag()">
        <span class="icon-custom-angle-up"></span>
      </div>
    </div>
  </div>
</template>

<script>
import pullUp from './pulUp'
export default {
  methods: {
    tag() {
      this.$emit('listenToChildEvent', !this.show);
      document.getElementsByClassName('pullUp-content')[0].style.height = '0';

    }
  },
  props: ['show'],
  created() {
    setTimeout(function() {
      document.getElementsByClassName('pullUp-content')[0].style.height = '90%'

    }, 100);
  }
}
</script>

<style lang="less">
.pullUp {

  z-index: 20;
  height: 100%;
  width: 100%;
  position: fixed;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  .pullUp-content {
    transition: height 2s;
    height: 0;
    width: 100%;
    background: #fff;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: center;
    .promotion-icon {
      margin-top: -18px;
      height: 0.3rem;
      line-height: 0.3rem;
      width: 20%;
      display: inline-block;
      transform: perspective(.1em) rotateX(3deg);
      background: #fff;
    }
  }
}
</style>

