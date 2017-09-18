<template>
  <div class="car-pay-suc">
    <x-header title="支付成功"></x-header>
    <div class="success-logo">
      <div class="logo-content">
        <div class="icon-custom-check-circle icon-custom-2x" style="color:#eb4452"></div>
        <div class="row" style="margin-top:20px">支付成功</div>
      </div>

    </div>
    <div class="pay-list">
      <div class="list-line">
        <div class="tl line-item">服务商家:</div>
        <div class="tr line-item">五十事务所</div>
      </div>
      <div class="list-line-group">
        <div class="line-group">
          <div class="tl line-item">商品名称:</div>
          <div class="tr line-item"></div>
        </div>
        <div class="line-group" style="color: #bbbbbb;">
          <div class="tl line-item">洗车</div>
          <div class="tr line-item">$200</div>
        </div>
        <div class="line-group" style="color: #bbbbbb;">
          <div class="tl line-item">高技</div>
          <div class="tr line-item">$200</div>
        </div>
        <div class="line-group" style="color: #bbbbbb;">
          <div class="tl line-item">打蜡</div>
          <div class="tr line-item">$200</div>
        </div>
      </div>
      <div class="list-line">
        <div class="tl line-item">实付金额:</div>
        <div class="tr line-item">$1200</div>
      </div>
      <div class="list-line" style="margin-top:20px">
        <div class="tl line-item">支付方式:</div>
        <div class="tr line-item">微信支付</div>
      </div>
      <div class="list-line">
        <div class="tl line-item">订单编号:</div>
        <div class="tr line-item">241442424124</div>
      </div>
      <div class="list-line">
        <div class="tl line-item">订单时间:</div>
        <div class="tr line-item">2013-1-4 9:00</div>
      </div>
    </div>
    <div class="pay-msg">
      售后服务请联系:400-199-444-0000
    </div>

    <promotion></promotion>
  </div>
</template>

<script>
import Promotion from '../common/promotion'
export default {
  components: {
    Promotion
  }
}
</script>
<style lang="less">
.car-pay-suc {
  display: flex;
  flex-direction: column;
  .pay-list {
    .list-line {
      height: 1rem;
      line-height: 1rem;
      font-size: 0.3rem;
      display: flex;
      background: #fff;
      border-bottom: 1px solid #d0d0d0;
      .line-item {
        flex: 1 1 auto;
        &:first-child {
          margin-left: 15px;
        }
        &:last-child {
          margin-right: 15px;
          color: #bbbbbb;
        }
      }
    }
    .list-line-group {
      padding: 15px 0;
      font-size: 0.3rem;
      display: flex;
      flex-direction: column;
      background: #fff;
      border-bottom: 1px solid #d0d0d0;
      .line-group {
        height: .5rem;
        line-height: .5rem;
        display: flex;
        .line-item {
          flex: 1 1 auto;
          &:first-child {
            margin-left: 15px;
          }
          &:last-child {
            margin-right: 15px;
            color: #bbbbbb;
          }
        }
      }
    }
  }

  .pay-msg {
    font-size: 0.3rem;
    width: 100%;
    text-align: center;
    padding: 20px 0;
    margin-bottom: 1rem;
  }
}
</style>
