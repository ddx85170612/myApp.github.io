<template>
  <div class="home">
    <router-view></router-view>
    <c-footer></c-footer>
  </div>
</template>
<script>
import URL from '../config/URL.js';
import axios from 'axios';
import footer from './common/footer'
export default {
  data() {
    return {
      items: []
    }
  },
  components: {
    cFooter: footer
  }
}
</script>

<style lang="less">
.home {
  height: 100%;
}
</style>
