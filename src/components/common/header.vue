<template>
  <div class="header">
    <div class="right-icon " @click="back">
      <span   class="icon-custom-angle-left icon-custom-3x"> </span>
      <span   class="icon-text">返回</span>
    </div>
    <div class="title elli">
      {{title}}
    </div>
    <div class="left-icon">
      <!-- <span class="icon-text">返回</span> -->
      <span  v-show="rightS" class=" icon-custom-2x" > </span>
    </div>
  </div>
</template>

<script>
import router from '../../router/hook'
export default {
  methods: {
    back() {
      router.go(-1)
    }
  },
  data() {
    return {
      leftS: false,
      rightS: false
    }
  },
  props: ['title', 'rightIcon', 'leftIcon', 'leftText', 'rightText'],
  created() {
    if (this.leftIcon != undefined) {
      this.leftS = true
    }
    if (this.rightIcon != undefined) {
      this.rightS = true
    }
  }
}
</script>

<style lang="less">
.header {
  height: 1rem;
  line-height: 1rem;
  display: flex;
  background: #fff;
  border-bottom: 1px solid rgb(151, 151, 151);
  .right-icon,
  .left-icon {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon-text {
      font-size: 0.3rem;
      margin-left: 5px;
    }
  }
  .title {
    flex: 4;
    text-align: center;
    font-size: 0.4rem;
  }
}
</style>

