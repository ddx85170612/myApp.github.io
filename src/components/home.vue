<template>
  <div class="home">
    <section class="search">
      <x-header :left-options="{showBack: false}">这是什么APP.</x-header>
      <a class="search-icon  icon iconfont icon-sousuo-xianxing"></a>
      <a class="mes icon iconfont icon-119"></a>
    </section>
    <section class="slider">
      <swiper loop auto :list="demo06_list"></swiper>
    </section>
    <section class="cat">
      <flexbox :gutter="0" wrap="wrap">
        <flexbox-item :span="1/3">
          <div class="flex-demo">
            <ul>
              <li>
                <i class="icon iconfont icon-shezhi-xianxing f26"></i>
              </li>
              <li>分类1</li>
            </ul>
          </div>
        </flexbox-item>
        <flexbox-item :span="1/3">
          <div class="flex-demo">
            <ul>
              <li>
                <i class="icon iconfont icon-shezhi-xianxing f26"></i>
              </li>
              <li>分类2</li>
            </ul>
          </div>
        </flexbox-item>
        <flexbox-item :span="1/3">
          <div class="flex-demo">
            <ul>
              <li>
                <i class="icon iconfont icon-shezhi-xianxing f26"></i>
              </li>
              <li>分类3</li>
            </ul>
          </div>
        </flexbox-item>
      </flexbox>
    </section>
    <section class="recommend">
      <div class="title">
        <span class="icon iconfont icon-diamond-o f26"></span>
        <span>推荐商品</span>
      </div>
      <div class="content">
  
      </div>
    </section>
  </div>
</template>
<script>
import URL from '../config/URL.js';
import axios from 'axios';
import { XHeader, Swiper, SwiperItem, Flexbox, FlexboxItem } from 'vux';

//滑动图片数据
const baseList = [{
  url: 'javascript:',
  img: 'https://static.vux.li/demo/1.jpg',
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/2.jpg',
}, {
  url: 'javascript:',
  img: 'https://static.vux.li/demo/3.jpg',
}];
const urlList = baseList.map((item, index) => ({
  url: 'http://m.baidu.com',
  img: item.img,

}))

export default {
  data() {
    return {
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      showMenus: false,
      demo06_list: urlList,
    }
  },
  created() {
    getData: {
      axios.post(URL.obtainCat)
        .then(function (res) {
          // console.log(res);
        })
        .catch(function (err) {
          console.log(err);
        });
      axios.post(URL.queryItemSpu)
        .then(function (res) {
          console.log(res.data);
        })
        .catch(function (err) {
          console.log(err);
        })
    }
  },
  components: {
    XHeader,
    Swiper,
    Flexbox,
    FlexboxItem
  }
}
</script>

<style lang="less">
.f26 {
  font-size: 26px
}

.home {

  .search {
    position: relative;
    line-height: 47px;
    .search-icon,
    .mes {
      position: absolute;
      font-size: 30px;

      top: 0;
      color: #fff;
      font-weight: bold;
    }
    .mes {
      right: 16px;
    }
    .search-icon {
      left: 16px;
    }
  }
  .cat {
    height: auto;
    .vux-flexbox {
      .flex-demo {
        ul {
          padding: 0;
        }
        li {
          text-align: center;
        }
      }
    }
  }
  .recommend {
    height: 50px;
    line-height: 50px;
    font-size: 26px;
    background-color: #EFF2F7;
    .title {
      text-align: center;
    }
  }
}
</style>
