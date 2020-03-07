<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <a>
          <router-link to="/goods">商品</router-link>
        </a>
      </div>
      <div class="tab-item">
        <a>
          <router-link to="/ratings">评论</router-link>
        </a>
      </div>
      <div class="tab-item">
        <a>
          <router-link to="/seller">商家</router-link>
        </a>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from "./components/header/Header";
  const ERR_OK = 0;
  export default {
    name: 'app',
    data () {
      return {
        seller: null
      }
    },
    components: {
      "v-header": Header
    },
    created () {
      this.$get('/api/seller')
      .then((res) => {
        if(res.error === ERR_OK){
          this.seller = res.seller
          // console.log(this.seller);
        }
      })
    }
  }
</script>>

<style>
  @import "./commen/stylus/reset.css";
  #app .tab{
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    position: relative;
  }
  #app .tab:after{
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    content: ' ';
  }
  .tab .tab-item{
    flex: 1;
  }
  .tab .tab-item a {
    display: block;
    font-size: 14px;
    color: rgb(77, 85, 93);
  }
  .tab .tab-item a:hover {
    color: rgb(240, 20, 20);
  }
  .tab .tab-item a .router-link-active{
    color: rgb(240, 20, 20);
  }
</style>
