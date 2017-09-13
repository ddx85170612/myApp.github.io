<template>
  <div class="car-wash">
    <x-header :title="'汽车服务'"></x-header>
    <div class="list">
      <div class="list-item">
        <div class="box" @click="to('carWash')">
          <div class="box-icon">
            <yd-icon name="car" custom slot="icon" size="0.34rem">
            </yd-icon>
          </div>
          <div class="box-text">
            <span>洗车</span>
          </div>
        </div>
      </div>

    </div>
    <div class="select">
      <div class="select-item" @click="show1=true">
        <span>武汉市</span>
        <yd-icon class="item-icon" name="angle-down" custom slot="icon" size="0.34rem"></yd-icon>
        <yd-popup v-model="show1" position="right">
          <yd-button type="danger" style="margin: 30px;" @click.native="show1 = false">Close Right Popup</yd-button>
        </yd-popup>
      </div>
      <div class="select-item" @click="show2=true">
        <span>全部门店</span>
        <yd-icon class="item-icon" name="angle-down" custom slot="icon" size="0.34rem"></yd-icon>
        <yd-popup v-model="show2" position="right">
          <yd-button type="danger" style="margin: 30px;" @click.native="show2 = false">Close Right Popup</yd-button>
        </yd-popup>
      </div>
      <div class="select-item" @click="show3=true">
        <span>默认排序</span>
        <yd-icon class="item-icon" name="angle-down" custom slot="icon" size="0.34rem"></yd-icon>
        <yd-actionsheet :items="item" v-model="show3"></yd-actionsheet>

      </div>

    </div>

    <div id="msg" class="msg">

      <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">

        <yd-list theme="4" slot="list">
          <yd-list-item v-for="item in list" v-bind:key="item.title" href="#/carMerchantDetail">
            <img slot="img" :src="item.img" >
            <span slot="title">{{item.title}}</span>
            <yd-list-other slot="other">
              <div>
                <span class="list-price">
                  <em>¥</em>{{item.marketprice}}</span>
                <span class="list-del-price">¥{{item.productprice}}</span>
              </div>
              <div>content</div>
            </yd-list-other>
          </yd-list-item>
        </yd-list>

        <!-- 数据全部加载完毕显示 -->
        <span slot="doneTip">啦啦啦，啦啦啦，没有数据啦~~</span>

        <!-- 加载中提示，不指定，将显示默认加载中图标 -->
        <img slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg" />

      </yd-infinitescroll>
    </div>

  </div>
</template>
<script>
import router from '../../router/hook';
export default {
  methods: {
    to(url) {
      router.push(url)
    },
    loadList() {
      this.$http.jsonp('http://list.ydui.org/getdata.php?type=backposition', {
        params: {
          page: this.page,
          pagesize: this.pageSize
        }
      }).then(function(response) {
        const _list = response.body;

        this.list = [...this.list, ..._list];

        if (_list.length < this.pageSize || this.page == 3) {
          /* 所有数据加载完毕 */
          this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
          return;
        }

        /* 单次请求数据完毕 */
        this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');

        this.page++;
      });
    }
  },
  data() {
    return {
      show1: false,
      show2: false,
      show3: false,
      item: [{ label: '金额' }, { label: '时间' }, { label: '煞笔' }],
      page: 1,
      pageSize: 10,
      list: [
        {
          img: "",
          title: "气路美容汽车店",
          marketprice: 56.23,
          productprice: 89.36
        }, {
          img: "",
          title: "气路美容汽车店",
          marketprice: 56.23,
          productprice: 89.36
        }, {
          img: "",
          title: "气路美容汽车店",
          marketprice: 56.23,
          productprice: 89.36
        }, {
          img: "",
          title: "气路美容汽车店",
          marketprice: 56.23,
          productprice: 89.36
        }, {
          img: "",
          title: "气路美容汽车店",
          marketprice: 56.23,
          productprice: 89.36
        },
      ]

    }
  },
  created() {
    // for(let i =0;i<10;i++){
    //   // this.list.push(this.list[i])
    // }
    // console.log(this.h());
  }
}
</script>
<style lang="less">
.car-wash {
  display: flex;
  flex-direction: column;
  .list {
    width: 100%;
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    .list-item {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      .box {
        width: 80%;
        height: 50px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #D29FFF;
        .box-icon,
        .box-text {
          flex: 1;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }

  .select {
    width: 100%;
    display: flex;
    height: 30px;
    .select-item {
      flex: 1;
      padding: 5px 10px;
      text-align: center;
      border-bottom: 1px solid rgb(151, 151, 151);
      ;
      .item-icon {
        float: right;
      }
    }
  }
  .msg {
    height: 100%;
    overflow: scroll;
    .msg-item {
      height: 100px;
    }
  }
}
</style>
