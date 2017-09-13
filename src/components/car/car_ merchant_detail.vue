<template>
  <div class="car-detail ">
    <x-header title="美容店"></x-header>
    <div class="slider">
      <div class="complaint" @click="complaint">
        投诉
      </div>
      <yd-slider autoplay="3000">
        <yd-slider-item>
          <a href="http://www.ydcss.com">
            <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
          </a>
        </yd-slider-item>
        <yd-slider-item>
          <a href="http://www.ydcss.com">
            <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
          </a>
        </yd-slider-item>
        <yd-slider-item>
          <a href="http://www.ydcss.com">
            <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
          </a>
        </yd-slider-item>
      </yd-slider>
    </div>
    <div class="info" >
      <div class="info-msg">
        <span>
          地址:广东省佛山市顺德区北郊店
        </span>
        <!-- <span class="fr"></span> -->
        <span class="icon-custom-location-arrow  fr"> 20km</span>

      </div>
      <div class="info-msg">
        <span>
          营业时间:9:20-19:20
        </span>
        <span class="icon-custom-phone fr " style="font-size:0.4rem"> </span>
      </div>
    </div>
    <div class="tab-bar" >
      <div class="bar">
        <ul>
          <li v-bind:class="{isActive:item.active}" v-bind:key="item.name" v-for="item in type" @click="choose(item)"> {{item.name}}</li>
        </ul>
      </div>
      <div class="content">
        <div class="item" @click="to('carServiceDetail')">
          <div class="item-title">标准洗车</div>
          <div class="item-content elli2">洗车洗洗啊洗刷刷洗刷刷洗车洗洗啊洗刷刷洗刷刷洗车洗洗啊洗刷刷洗刷刷</div>
          <div class="item-price">
            <span class="icon-custom-yen "> 9999</span>
            <button class="btn fr">预约</button>
          </div>
        </div>
        <div class="item" @click="to('carServiceDetail')">
          <div class="item-title">标准洗车</div>
          <div class="item-content elli2">洗车洗洗啊洗刷刷洗刷刷洗车洗洗啊洗刷刷洗刷刷洗车洗洗啊洗刷刷洗刷刷</div>
          <div class="item-price">
            <span class="icon-custom-yen "> 9999</span>
            <button class="btn fr">预约</button>
          </div>
        </div>
        <div class="item" @click="to('carServiceDetail')">
          <div class="item-title">标准洗车</div>
          <div class="item-content elli2">洗车洗洗啊洗刷刷洗刷刷洗车洗洗啊洗刷刷洗刷刷洗车洗洗啊洗刷刷洗刷刷</div>
          <div class="item-price">
            <span class="icon-custom-yen "> 9999</span>
            <button class="btn fr">预约</button>
          </div>
        </div>
        <div class="item" @click="to('carServiceDetail')">
          <div class="item-title">标准洗车</div>
          <div class="item-content elli2">洗车洗洗啊洗刷刷洗刷刷洗车洗洗啊洗刷刷洗刷刷洗车洗洗啊洗刷刷洗刷刷</div>
          <div class="item-price">
            <span class="icon-custom-yen "> 9999</span>
            <button class="btn fr">预约</button>
          </div>
        </div>
        <div class="item" @click="to('carServiceDetail')">
          <div class="item-title">标准洗车</div>
          <div class="item-content elli2">洗车洗洗啊洗刷刷洗刷刷洗车洗洗啊洗刷刷洗刷刷洗车洗洗啊洗刷刷洗刷刷</div>
          <div class="item-price">
            <span class="icon-custom-yen "> 9999</span>
            <button class="btn fr">预约</button>
          </div>
        </div>

      </div>
    </div>
    <div class="tab-foot">
      <div @click="collect()" class="tab-foot-left ">
        <span v-bind:class="[isCollect?'icon-custom-star-o':'icon-custom-star']" style="color:#eb4452"></span> 收藏
      </div>
      <div class="tab-foot-right" @click="to('carOrderConfirm')">去支付</div>
    </div>
  </div>
</template>

<script>
import layer from 'layer-mobile';
import router from '../../router/hook'
export default {
  data() {
    return {
      type: [
        { name: '洗车', active: true },
        { name: '美容', active: false },
        { name: '保养', active: false },
        { name: '维修', active: false },
      ],
      isCollect: false,
    }
  },
  methods: {
    to(url) {
      router.push(url)
    },
    choose(data) {
      console.log(2222);
      this.type.map((item) => {
        item.active = false;
      })
      data.active = true;
    },
    collect() {
      this.isCollect = !this.isCollect
    },
    complaint() {
      layer.open({
        content: '亲,遇到问题请反馈'
        , btn: ['文字反馈', '电话沟通']
        , yes: function(index) {
          router.push('carFeedback');
          layer.close(index)
        }
        , no: function() {
          layer.open({
            content: '400-8888-888'
            , btn: ['呼叫']
            , no: function() {
              console.log(3113);
            }

          });
        }

      });
    }
  }
}
</script>

<style lang="less">
.car-detail {
  height: 100%;
  display: flex;
  flex-direction: column;
  .slider {
    position: relative;
    .complaint {
      position: absolute;
      right: 0;
      top: 50px;
      z-index: 10;
      color: #fff;
      height: 0.5rem;
      line-height: 0.5rem;
      width: 1rem;
      background: rgba(0, 0, 0, 0.5);
      border-radius: 20px;
      text-align: center;
      margin-right: -10px;
    }
  }

  .info {
    font-size: 0.3rem;
    color: #9c9c9c;
    .info-msg {
      padding: 10px 25px 0 25px;
    }
  }

  .tab-bar {
    flex: 1 1 auto;
    margin-top: 10px;
    height: 0rem;
    border-top: 1px solid #e2e2e2;
    display: flex;
    flex-direction: row;
    overflow: hidden;
    .bar {
      border-right: 1px solid #e2e2e2;
      width: 2rem;
      ul {
        li {
          height: 1rem;
          line-height: 1rem;
          border-bottom: 1px solid #e2e2e2;
          text-align: center;
          font-size: 0.3rem;
          color: #9c9c9c;
        }
      }
    }
    .content {
      flex: 1 1 auto;
      background: #fefefe;
      overflow: scroll;
      .item {
        overflow: hidden;
        height: 1.7rem;
        border: 1px solid #e2e2e2;
        margin: 10px;
        .item-title {
          font-size: .25rem;
          font-weight: bold;
          padding: 5px 10px;
        }
        .item-content {
          padding: 0 5px 0 10px;
          width: 5rem;
        }
        .item-price {
          padding: 5px 10px;
          line-height: 0.4rem;
        }
      }
    }
  }

  .tab-foot {
    height: 1rem;
    line-height: 1rem;
    display: flex;
    .tab-foot-left,
    .tab-foot-right {
      flex: 1;
      text-align: center;
      font-size: 0.3rem;
      background: #fff;
    }
    .tab-foot-right {
      background: #eb4452;
      color: #fff;
    }
  }
}

.isActive {
  color: #eb4452 !important;
}
</style>
