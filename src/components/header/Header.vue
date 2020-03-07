<template>
  <div class="header">
    <div class="content-wrapper">
      <!-- 店铺头像 -->
      <div class="avatar">
        <img  v-if="seller.avatar" :src="seller.avatar" width="64" height="64">
      </div>
      <!-- 店铺信息 -->
      <div class="content">

        <div class="title">
          <span class="brand"></span>
          <span class="name">{{seller.name}}</span>
        </div>

        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>

        <div v-if="seller.supports" class="support">
          <span class="icon" :class="classMap[seller.supports[0].type]"></span>
          <span class="text">{{seller.supports[0].description}}</span>
        </div>
      </div>
      <!-- 店铺支持的活动 -->
      <div v-if="seller.supports" class="support-count" @click="showDetail">
        <span class="count">{{seller.supports.length}}个</span>
        <i class="icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <!-- 店铺公告 -->
    <div class="bulletin-wrapper" @click="showDetail">
      <span class="bulletin-title"></span><span class="bulletin-text">{{seller.bulletin}}</span>
      <i class="icon-keyboard_arrow_right"></i>
    </div>
    <!-- 头部模糊背景 -->
    <div class="background">
      <img :src="seller.avatar" alt="" width="100%" height="100%">
    </div>
    <!-- 详情页 -->
    <transition name="fade">
      <div v-show="detailShow" class="detail" transition="fade">
        <!-- 详情内容 -->
        <div class="detail-wrapper clearfix">
          <div class="detail-main">
            <h1 class="name">{{seller.name}}</h1>
            <!-- 星星 -->
            <div class="star-wrapper">
              <star :score="seller.score" :size="48"></star>
            </div>
            <!-- 标题 -->
            <div class="title">
              <div class="line"></div>
              <div class="text">优惠信息</div>
              <div class="line"></div>
            </div>
            <!-- 优惠信息 -->
            <ul v-if="seller.supports" class="supports">
              <li v-for="(item, index) in seller.supports" class="supports-item" :key="index">
                <span class="icon" :class="classMap[seller.supports[index].type]"></span>
                <span class="text">{{seller.supports[index].description}}</span>
              </li>
            </ul>
            <!-- 标题 -->
            <div class="title">
              <div class="line"></div>
              <div class="text">商家公告</div>
              <div class="line"></div>
            </div>
            <!-- 商家公告 -->
            <div class="bulletin">
              <p class="content">{{seller.bulletin}}</p>
            </div>
          </div>
        </div>
        <!-- 关闭按钮 -->
        <div class="detail-close">
          <i class="icon-close" @click="closeDetail"></i>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import Star from "components/star/Star"
  export default {
    name: 'Header',
    props: {
      seller: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    created () {
      this.classMap = ['decrease','discount','special','invoice','guarantee']
    },
    data () {
      return {
        detailShow: false
      }
    },
    methods: {
      showDetail() {
        this.detailShow = true;
      },
      closeDetail() {
        this.detailShow = false;
      }
    },
    components: {
      star: Star
    }
  }
</script>

<style scoped>
@import "../../commen/stylus/icon.css";
  .header{
    color: #fff;
    position: relative;
    background: rgba(7, 17, 27, 0.5);
    overflow: hidden;
  }
  .header .content-wrapper{
    padding: 24px 12px 18px 24px;
    position: relative;
  }
  /* 头部-头像 */
  .header .content-wrapper .avatar{
    display: inline-block;
  }
  .header .content-wrapper .avatar img{
    border-radius: 2px;
  }
  /* 头部-信息 */
  .header .content-wrapper .content{
    display: inline-block;
    margin-left: 16px;
  }
  .header .content-wrapper .content .title{
    margin: 2px 0 8px;
  }
  .header .content-wrapper .content .title .brand{
    display: inline-block;
    vertical-align: top;
    width: 30px;
    height: 18px;
    background-image : url('./brand@2x.png');
    background-size: 30px 18px;
    background-repeat: no-repeat;
  }
  @media screen and ( -webkit-min-device-pixel-ratio : 3 ),
  ( min--moz-device-pixel-ratio : 2 ) {
    .header .content-wrapper .content .title .brand {
      background-image : url('./brand@3x.png');
    }
  }
  .header .content-wrapper .content .title .name{
    margin-left: 6px;
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
  }
  .header .content-wrapper .content .description{
    margin-bottom: 10px;
    font-size: 12px;
    line-height: 12px;
  }
  .header .content-wrapper .content .support .icon{
    display: inline-block;
    vertical-align: bottom;
    width: 12px;
    height: 12px;
    margin-right: 4px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
  }
  /* 根据类名添加图片 */
  .header .content-wrapper .content .support .decrease{
    background-image: url('./decrease_1@2x.png');
  }
  @media screen and ( -webkit-min-device-pixel-ratio : 3 ),
  ( min--moz-device-pixel-ratio : 2 ) {
    .header .content-wrapper .content .support .decrease {
      background-image : url('./decrease_1@3x.png');
    }
  }
  .header .content-wrapper .content .support .discount{
    background-image: url('./discount_1@2x.png');
  }
  @media screen and ( -webkit-min-device-pixel-ratio : 3 ),
  ( min--moz-device-pixel-ratio : 2 ) {
    .header .content-wrapper .content .support .discount {
      background-image : url('./discount_1@3x.png');
    }
  }
  .header .content-wrapper .content .support .guarantee{
    background-image: url('./guarantee_1@2x.png');
  }
  @media screen and ( -webkit-min-device-pixel-ratio : 3 ),
  ( min--moz-device-pixel-ratio : 2 ) {
    .header .content-wrapper .content .support .guarantee {
      background-image : url('./guarantee_1@3x.png');
    }
  }
  .header .content-wrapper .content .support .invoice{
    background-image: url('./invoice_1@2x.png');
  }
  @media screen and ( -webkit-min-device-pixel-ratio : 3 ),
  ( min--moz-device-pixel-ratio : 2 ) {
    .header .content-wrapper .content .support .invoice {
      background-image : url('./invoice_1@3x.png');
    }
  }
  .header .content-wrapper .content .support .special{
    background-image: url('./special_1@2x.png');
  }
  @media screen and ( -webkit-min-device-pixel-ratio : 3 ),
  ( min--moz-device-pixel-ratio : 2 ) {
    .header .content-wrapper .content .support .special {
      background-image : url('./special_1@3x.png');
    }
  }
  .header .content-wrapper .content .support .text{
    font-size: 10px;
    line-height: 12px;
  }
  /* 支持活动 */
  .header .content-wrapper .support-count{
    position: absolute;
    right: 12px;
    bottom: 14px;
    padding: 0 8px;
    height: 24px;
    line-height: 24px;
    border-radius: 14px;
    background: rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  .header .content-wrapper .support-count .count{
    font-size: 10px;
    vertical-align: top;
  }
  .header .content-wrapper .support-count .icon-keyboard_arrow_right{
    font-size: 10px;
    margin-left: 2px;
    line-height: 24px;
  }
  /* 头部-公告 */
  .header .bulletin-wrapper{
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: rgba(7, 17, 27, 0.2);
  }
  .header .bulletin-wrapper .bulletin-title{
    display: inline-block;
    vertical-align: top;
    margin-top: 7px;
    width: 22px;
    height: 12px;
    background-size: 22px 12px;
    background-repeat: no-repeat;
    background-image: url("./bulletin@2x.png");
  }
  @media screen and ( -webkit-min-device-pixel-ratio : 3 ),
  ( min--moz-device-pixel-ratio : 2 ) {
    .header .bulletin-wrapper .bulletin-title{
      background-image: url("./bulletin@3x.png");
    }
  }
  .header .bulletin-wrapper .bulletin-text{
    font-size: 10px;
    vertical-align: top;
    margin:  0 4px;
  }
  .header .bulletin-wrapper .icon-keyboard_arrow_right{
    position: absolute;
    font-size: 10px;
    right: 10px;
    bottom: 8px;
  }
  /* 头部背景 */
  .header .background{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px);
  }
  /* 详情页 */
  .header .detail{
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgba(7, 17, 27, 0.8);
    backdrop-filter: blur(10px);
  }
  /* 详情页过渡效果 */
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .fade-leave, .fade-enter-to {
    opacity: 1;
  }
  .fade-enter-active, .fade-leave-active {
    transition: all 0.5s;
  }
  /* 详情页内容部分 */
  .header .detail .detail-wrapper{
    min-height: 100%;
    width: 100%;
    overflow: auto;
  }
  .header .detail .detail-wrapper .detail-main{
    margin-top: 64px;
    padding-bottom: 64px;
  }
  .header .detail .detail-wrapper .detail-main .name{
    line-height: 16px;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
  }
  .header .detail .detail-wrapper .detail-main .star-wrapper{
    margin-top: 18px;
    padding: 2px 0;
    text-align: center;
  }
  .header .detail .detail-wrapper .detail-main .title{
    width: 80%;
    display: flex;
    margin: 28px auto 24px auto;
  }
  .header .detail .detail-wrapper .detail-main .title .line{
    flex: 1;
    position: relative;
    top: -6px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }
  .header .detail .detail-wrapper .detail-main .title .text{
    padding: 0 12px;
    font-size: 14px;
    font-weight: bold;
  }
  .header .detail .detail-wrapper .detail-main .supports{
    width: 80%;
    margin: 0 auto;
  }
  .header .detail .detail-wrapper .detail-main .supports .supports-item{
    padding: 0 12px;
    margin-bottom: 12px;
    font-size: 0;
  }
  .header .detail .detail-wrapper .detail-main .supports li:last-of-type{
    margin-bottom: 0;
  }
  .header .detail .detail-wrapper .detail-main .supports .supports-item .icon{
    display: inline-block;
    width: 16px;
    height: 16px;
    vertical-align: top;
    margin-right: 6px;
    background-size: 16px 16px;
    background-repeat: no-repeat;
  }
  .header .detail .detail-wrapper .detail-main .supports .supports-item .text{
    line-height: 16px;
    font-size: 12px;
  }
  .header .detail .detail-wrapper .detail-main .supports .supports-item .decrease{
    background-image: url('./decrease_2@2x.png');
  }
  @media screen and ( -webkit-min-device-pixel-ratio : 3 ),
  ( min--moz-device-pixel-ratio : 2 ) {
    .header .detail .detail-wrapper .detail-main .supports .supports-item .decrease {
      background-image : url('./decrease_2@3x.png');
    }
  }
  .header .detail .detail-wrapper .detail-main .supports .supports-item .discount{
    background-image: url('./discount_2@2x.png');
  }
  @media screen and ( -webkit-min-device-pixel-ratio : 3 ),
  ( min--moz-device-pixel-ratio : 2 ) {
    .header .detail .detail-wrapper .detail-main .supports .supports-item .discount {
      background-image : url('./discount_2@3x.png');
    }
  }
  .header .detail .detail-wrapper .detail-main .supports .supports-item .guarantee{
    background-image: url('./guarantee_2@2x.png');
  }
  @media screen and ( -webkit-min-device-pixel-ratio : 3 ),
  ( min--moz-device-pixel-ratio : 2 ) {
    .header .detail .detail-wrapper .detail-main .supports .supports-item .guarantee {
      background-image : url('./guarantee_2@3x.png');
    }
  }
  .header .detail .detail-wrapper .detail-main .supports .supports-item .invoice{
    background-image: url('./invoice_2@2x.png');
  }
  @media screen and ( -webkit-min-device-pixel-ratio : 3 ),
  ( min--moz-device-pixel-ratio : 2 ) {
    .header .detail .detail-wrapper .detail-main .supports .supports-item .invoice {
      background-image : url('./invoice_2@3x.png');
    }
  }
  .header .detail .detail-wrapper .detail-main .supports .supports-item .special{
    background-image: url('./special_2@2x.png');
  }
  @media screen and ( -webkit-min-device-pixel-ratio : 3 ),
  ( min--moz-device-pixel-ratio : 2 ) {
    .header .detail .detail-wrapper .detail-main .supports .supports-item .special {
      background-image : url('./special_2@3x.png');
    }
  }
  .header .detail .detail-wrapper .detail-main .bulletin{
    width: 80%;
    margin: 0 auto;
  }
  .header .detail .detail-wrapper .detail-main .bulletin .content{
    padding: 0 12px;
    line-height: 24px;
    font-size: 12px
  }
  /* 详情页关闭按钮 */
  .header .detail .detail-close{
    position: relative;
    width: 32px;
    height: 32px;
    margin: -64px auto 0 auto;
    /* margin: 0 auto; */
    clear: both;
    font-size: 32px;
  }
</style>