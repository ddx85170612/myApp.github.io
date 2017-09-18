<template>
  <div class="car-feedback">
   <x-header title="问题反馈"></x-header>
    <div class="text-group">
      <yd-cell-group title="问题与意见">
        <yd-cell-item>
          <yd-textarea slot="right" placeholder="请输入不少于10个字的描述" maxlength="240"></yd-textarea>
        </yd-cell-item>
      </yd-cell-group>
    </div>
    <div class="feedback-upload">

    </div>
   <div class="form-btn-group">
      <div class="form-btn" style="background:#eb4452">提交</div>
    </div>
  </div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style lang="less">
.car-feedback {
  height: 100%;
  .text-group {
    padding: 10px 20px;
  }
  .feedback-upload {
    width: 100%;
  }
  .feedbakc-confirm {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1rem;
    line-height: 1rem;
    background: #eb4452;
    color: #fff;
    text-align: center;
    font-size: .4rem;
  }
}
</style>
