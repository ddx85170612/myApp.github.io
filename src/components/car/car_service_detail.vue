<template>
  <div class="car-service-detail">
    <x-header title="预约小保养"></x-header>
    <div class="service-title">
      保养套餐A
    </div>
    <div class="service-detail">
      <div class="title-name">项目详情</div>
      <ul>
        <li>更换冷冻液</li>
        <li>维修</li>
        <li>嘎吉</li>
        <li>换车灯</li>
      </ul>
    </div>
    <div class="service-form">
      <yd-cell-group>

        <yd-cell-item>
          <span slot="left">联系人</span>
          <input style="text-align:right" slot="right" type="text" placeholder="请输入姓名">
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">手机号：</span>
          <input slot="right" type="number" style="text-align:right" placeholder="请输入手机号">
        </yd-cell-item>
        <yd-cell-item>
          <span slot="left">预计到店：</span>
          <input slot="right" style="text-align:right" type="text" placeholder="11:30">
        </yd-cell-item>
        <yd-cell-item>
          <yd-textarea slot="right" placeholder="备注" maxlength="100"></yd-textarea>
        </yd-cell-item>
      </yd-cell-group>
    </div>

    <div class="servicc-step">
      <yd-step>
        <yd-step-item>
          <span slot="bottom">选择保养套餐</span>
        </yd-step-item>
        <yd-step-item>
          <span slot="bottom">线上预约保养</span>
        </yd-step-item>
        <yd-step-item>
          <span slot="bottom">短信确认通知</span>
        </yd-step-item>
        <yd-step-item>
          <span slot="bottom">到店保养</span>
        </yd-step-item>
        <yd-step-item>
          <span slot="bottom">线上支付完成</span>
        </yd-step-item>
      </yd-step>
    </div>

    <div class="service-confirm" @click="to('carSuc')">
      确定预约
    </div>
  </div>
</template>

<script>
import router from '../../router/hook'
export default {
  methods: {
    to(url){
      router.push(url)
    }
  }
}
</script>

<style lang="less">
.car-service-detail {
  display: flex;
  flex-direction: column;
  .service-title {
    height: 1rem;
    line-height: 1rem;
    font-size: 0.35rem;
    text-align: center;
    margin: 15px 0;
    background: #fff;
  }
  .service-detail {
    .title-name {
      font-size: 0.3rem;
      padding: 5px 10px;
    }
    ul {
      background: #fff;
      li {
        font-size: 0.3rem;
        padding: 5px 10px;
        color: rgb(151, 151, 151);
      }
    }
  }
  .service-form {
    margin-top: 10px;
  }
  .servicc-step {
    margin-top: 20px;
  }

  .yd-step-item-bottom {
    width: 60px !important;
    white-space: initial !important;
  }

  .service-confirm {
    margin-top: 20px;
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
