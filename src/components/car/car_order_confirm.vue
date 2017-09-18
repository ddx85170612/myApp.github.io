<template>
  <div class="car-order">
    <!-- <yd-navbar title="订单确认">
          <router-link to="/carMerchantDetail" slot="left">
            <yd-navbar-back-icon>返回</yd-navbar-back-icon>
          </router-link>
        </yd-navbar> -->
    <x-header :title='"支付"' :rightIcon="'sss'"></x-header>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">标准洗车:</span>
        <span slot="right">$200</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">打蜡:</span>
        <span slot="right">$200</span>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">抛光:</span>
        <span slot="right">$200</span>
      </yd-cell-item>
    </yd-cell-group>
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">额外消费:</span>
        <span slot="right">$200</span>
      </yd-cell-item>
    </yd-cell-group>
    <yd-cell-group>
      <yd-cell-item :arrow="true">
        <span slot="left">红包抵扣:</span>
        <span slot="right">暂无红包</span>
      </yd-cell-item>
    </yd-cell-group>
    <div class="form-btn-group">
      <div class="form-btn" style="background:#eb4452" @click="pay('carPaySuc')"> 去支付 $300</div>
    </div>
  </div>
</template>

<script>
import router from '../../router/hook';
export default {
  methods: {
    pay(url) {
      router.push(url)
    }
  }
}
</script>

<style lang="less">
.car-order {
  display: flex;
  flex-direction: column;
  .order-confirm {
    height: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    .order-item {
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      font-size: .35rem;
      color: #fff;
      background: #eb4452;
      width: 90%;
      border-radius: 10px;
    }
  }
}
</style>
