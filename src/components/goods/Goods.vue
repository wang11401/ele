<template>
  <div class="goods">
    <!-- 菜单 -->
    <div class="menu-wrapper">
      <ul>
        <li v-for="(item, index) in goods" :key="index" class="menu-item">
          <span class="text">
            <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
          </span>
        </li>
      </ul>
    </div>
    <!-- 食物列表 -->
    <bscroll class="content">
      <div class="foods-wrapper">
        <ul>
          <li v-for="(item, index) in goods" :key="index" class="food-list">
            <!-- 食物标题 -->
            <h1 class="title">{{item.name}}</h1>
            <!-- 详细信息 -->
            <ul>
              <li v-for="(food, index) in item.foods" :key="index" class="food-item">
                <!-- 食物图片 -->
                <div class="icon">
                  <img :src="food.icon" alt="" width="57" height="57">
                </div>
                <!-- 食物内容 -->
                <div class="content">
                  <!-- 名字 -->
                  <h2 class="name">{{food.name}}</h2>
                  <!-- 描述 -->
                  <p class="desc">{{food.description}}</p>
                  <!-- 额外信息 -->
                  <div class="extra">
                    <span>月售{{food.sellCount}}份</span>
                    <span>好评率{{food.rating}}</span>
                  </div>
                  <!-- 价格 -->
                  <div class="price">
                    <span class="nowPrice">￥{{food.price}}</span>
                    <span class="oldPrice" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </bscroll>

  </div>
</template>

<script>
  import Scroll from "../scroll/Scroll"
  const ERR_OK = 0;
  export default {
    name: "Goods",
    props: {
      seller: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    created() {
      this.classMap = ['decrease','discount','special','invoice','guarantee'];
      this.$get('/api/goods')
      .then((res) => {
        if(res.error === ERR_OK){
          console.log(res);
          this.goods = res.goods;
        }
      })
    },
    data () {
      return {
        goods: null
      }
    },
    components: {
      bscroll: Scroll
    }
  }
</script>

<style scoped>
  .goods{
    display: flex;
    overflow: hidden;
    position: absolute;
    width: 100%;
    top: 177px;
    bottom: 46px;
  }
  .goods .menu-wrapper{
    flex: 0 0 80px;
    widows: 80px;
    background: #f3f5f7;
  }
  .goods .menu-wrapper .menu-item{
    display: table;
    height: 54px;
    width: 56px;
    line-height: 14px;
    padding: 0 12px;
  }
  .goods .menu-wrapper .menu-item .text{
    display: table-cell;
    width: 5px;
    font-size: 12px;
    vertical-align: middle;
    position: relative;
  }
  .goods .menu-wrapper .menu-item .text::after{
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-top: 1px solid rgba(7, 17, 27, 0.1);
    content: ' ';
  }
  .goods .menu-wrapper .menu-item .text .icon{
    display: inline-block;
    vertical-align: bottom;
    width: 12px;
    height: 12px;
    margin-right: 2px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
  }
  .goods .menu-wrapper .menu-item .text .decrease{
    background-image: url('./decrease_3@2x.png');
  }
  @media screen and ( -webkit-min-device-pixel-ratio : 3 ),
  ( min--moz-device-pixel-ratio : 2 ) {
    .goods .menu-wrapper .menu-item .text .decrease {
      background-image : url('./decrease_3@3x.png');
    }
  }
  .goods .menu-wrapper .menu-item .text .discount{
    background-image: url('./discount_3@2x.png');
  }
  @media screen and ( -webkit-min-device-pixel-ratio : 3 ),
  ( min--moz-device-pixel-ratio : 2 ) {
    .goods .menu-wrapper .menu-item .text .discount {
      background-image : url('./discount_3@3x.png');
    }
  }
  .goods .menu-wrapper .menu-item .text .guarantee{
    background-image: url('./guarantee_3@2x.png');
  }
  @media screen and ( -webkit-min-device-pixel-ratio : 3 ),
  ( min--moz-device-pixel-ratio : 2 ) {
    .goods .menu-wrapper .menu-item .text .guarantee {
      background-image : url('./guarantee_3@3x.png');
    }
  }
  .goods .menu-wrapper .menu-item .text .invoice{
    background-image: url('./invoice_3@2x.png');
  }
  @media screen and ( -webkit-min-device-pixel-ratio : 3 ),
  ( min--moz-device-pixel-ratio : 2 ) {
    .goods .menu-wrapper .menu-item .text .invoice {
      background-image : url('./invoice_3@3x.png');
    }
  }
  .goods .menu-wrapper .menu-item .text .special{
    background-image: url('./special_3@2x.png');
  }
  @media screen and ( -webkit-min-device-pixel-ratio : 3 ),
  ( min--moz-device-pixel-ratio : 2 ) {
    .goods .menu-wrapper .menu-item .text .special {
      background-image : url('./special_3@3x.png');
    }
  }
  .goods .content{
    height: 100% - 177px;
  }
  .goods .foods-wrapper{
    flex: 1;
  }
  .goods .foods-wrapper .food-list .title{
    padding-left: 14px;
    height: 26px;
    line-height: 26px;
    border-left: 2px solid #d9dde1;
    font-size: 12px;
    color: rgb(147, 153, 159);
    background: #f3f5f7;
  }
  .goods .foods-wrapper .food-list .food-item{
    display: flex;
    margin: 18px;
    padding-bottom: 18px;
    position: relative;
  }
  .goods .foods-wrapper .food-list .food-item::after{
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 1px solid rgba(7, 17, 27, 0.1);
    content: ' ';
  }
  .goods .foods-wrapper .food-list li:last-of-type{
    margin-bottom: 0;
  }
  .goods .foods-wrapper .food-list li:last-of-type::after{
    display: none
  }
  .goods .foods-wrapper .food-list .food-item .icon{
    flex: 0 0 57px;
    margin-right: 10px;
  }
  .goods .foods-wrapper .food-list .food-item .content{
    flex: 1;
  }
  .goods .foods-wrapper .food-list .food-item .content .name{
    margin: 2px 0 8px 0;
    height: 14px;
    line-height: 14px;
    font-size: 14px;
    color: rgb(7, 17, 27);
  }
  .goods .foods-wrapper .food-list .food-item .content .desc,
  .goods .foods-wrapper .food-list .food-item .content .extra{
    font-size: 10px;
    color: rgb(7, 17, 27);
    line-height: 10px;
    height: 10px;
  }
  .goods .foods-wrapper .food-list .food-item .content .desc{
    margin-bottom: 8px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .goods .foods-wrapper .food-list .food-item .content .extra{
    padding: 8px auto;
  }
  .goods .foods-wrapper .food-list .food-item .content .price .nowPrice{
    font-size: 14px;
    /* color: rgb(147, 153, 159); */
    color: #e1251b;
    font-weight: 700;
    line-height: 24px;
    margin-right: 8px;
  }
  .goods .foods-wrapper .food-list .food-item .content .price .oldPrice{
    font-size: 10px;
    color: rgb(147, 153, 159);
    font-weight: 700;
    line-height: 24px;
    text-decoration: line-through;
  }
</style>