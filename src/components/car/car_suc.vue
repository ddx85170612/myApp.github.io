<template>
  <div class="suc">
    <x-header title="预约成功"></x-header>
    <div class="success-logo">
      <div class="logo-content">
        <div class="icon-custom-check-circle icon-custom-2x" style="color:#eb4452"></div>
        <div class="row" style="margin-top:20px">预约成功</div>
      </div>

    </div>
    <div class="suc-form">
      <yd-cell-group>
        <yd-cell-item>
          <span slot="left">您预约的门店:</span>
          <span slot="right">广东店</span>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">套餐:</span>
          <span slot="right">套餐A</span>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">预约时间:</span>
          <span slot="right">12:00</span>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">联系人:</span>
          <span slot="right">莎饭</span>
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">联系电话:</span>
          <span slot="right">138783977774</span>
        </yd-cell-item>

      </yd-cell-group>
    </div>
    <div class="form-btn-group">
      <div class="form-btn" style="background:#eb4452" @click="to('carOrderConfirm')">立即支付</div>
      <div class="form-btn">取消预约</div>
    </div>
  </div>
</template>

<script>
import router from '../../router/hook'
export default {
  created() {
    this.h()
  },
  methods: {
    to(url) {
      router.push(url)
    }
  }
}
</script>

<style lang="less">
.suc {
  display: flex;
  flex-direction: column;
 
}
</style>
