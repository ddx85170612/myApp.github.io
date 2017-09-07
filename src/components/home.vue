<template>
    
</template>
<script>
import URL from '../config/URL.js';
import axios from 'axios';


export default {
  data() {
    return {
      recommendData: {}
    };
  },
  methods: {
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

    background-color: #EFF2F7;
    .title {
      text-align: center;
      font-size: 26px;
    }
  }
}
</style>
