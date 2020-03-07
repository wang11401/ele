<template>
  <div class="star" :class="starType">
    <span v-for="(itemClass, index) in itemClasses"
    :key="index" :class="itemClass" class="star-item"></span>
  </div>
</template>

<script>
  const LENGTH = 5;
  const CLS_ON = 'on';
  const CLS_HALF = 'half';
  const CLS_OFF = 'off';
  export default {
    name: "Star",
    props: {
      size: {
        type: Number
      },
      score: {
        type: Number
      }
    },
    computed: {
      starType() {
        return 'star-' + this.size;
      },
      itemClasses() {
        let result = [];
        let score = Math.floor(this.score * 2) / 2;//四舍五入技巧
        let hasDecimal = score % 1 !== 0;//是否有半星
        let integer = Math.floor(score);//全星个数
        for (let index = 0; index < integer; index++) {
          result.push(CLS_ON);
        }
        if(hasDecimal){
          result.push(CLS_HALF);
        }
        while(result.length < LENGTH){
          result.push(CLS_OFF);
        }
        return result;
      }
    }
  }
</script>

<style scoped>
  .star{
    font-size: 0;
  }
  .star .star-item{
    display: inline-block;
    background-repeat: no-repeat;
  }
  .star-48 .star-item{
    height: 20px;
    width: 20px;
    margin-right: 22px;
    background-size: 20px 20px;
  }
  .star-48 span:last-of-type{
    margin-right: 0;
  }
  .star-48 .on{
    background-image: url("../../assets/images/star48_on@2x.png")
  }
  @media screen and ( -webkit-min-device-pixel-ratio : 3 ),
  ( min--moz-device-pixel-ratio : 2 ) {
    .star-48 .on{
      background-image: url("../../assets/images/star48_on@3x.png")
    }
  }
  .star-48 .half{
    background-image: url("../../assets/images/star48_half@2x.png")
  }
  @media screen and ( -webkit-min-device-pixel-ratio : 3 ),
  ( min--moz-device-pixel-ratio : 2 ) {
    .star-48 .half{
      background-image: url("../../assets/images/star48_half@3x.png")
    }
  }
  .star-48 .off{
    background-image: url("../../assets/images/star48_off@2x.png")
  }
  @media screen and ( -webkit-min-device-pixel-ratio : 3 ),
  ( min--moz-device-pixel-ratio : 2 ) {
    .star-48 .off{
      background-image: url("../../assets/images/star48_off@3x.png")
    }
  }
  
  .star-36 .star-item{
    height: 15px;
    width: 15px;
    margin-right: 6px;
    background-size: 15px 15px;
  }
  .star-36 span:last-of-type{
    margin-right: 0;
  }
  .star-36 .on{
    background-image: url("../../assets/images/star36_on@2x.png")
  }
  @media screen and ( -webkit-min-device-pixel-ratio : 3 ),
  ( min--moz-device-pixel-ratio : 2 ) {
    .star-36 .on{
      background-image: url("../../assets/images/star36_on@3x.png")
    }
  }
  .star-36 .half{
    background-image: url("../../assets/images/star36_half@2x.png")
  }
  @media screen and ( -webkit-min-device-pixel-ratio : 3 ),
  ( min--moz-device-pixel-ratio : 2 ) {
    .star-36 .half{
      background-image: url("../../assets/images/star36_half@3x.png")
    }
  }
  .star-36 .off{
    background-image: url("../../assets/images/star36_off@2x.png")
  }
  @media screen and ( -webkit-min-device-pixel-ratio : 3 ),
  ( min--moz-device-pixel-ratio : 2 ) {
    .star-36 .off{
      background-image: url("../../assets/images/star36_off@3x.png")
    }
  }

  .star-24 .star-item{
    height: 10px;
    width: 10px;
    margin-right: 3px;
    background-size: 10px 10px;
  }
  .star-24 span:last-of-type{
    margin-right: 0;
  }
  .star-24 .on{
    background-image: url("../../assets/images/star24_on@2x.png")
  }
  @media screen and ( -webkit-min-device-pixel-ratio : 3 ),
  ( min--moz-device-pixel-ratio : 2 ) {
    .star-24 .on{
      background-image: url("../../assets/images/star24_on@3x.png")
    }
  }
  .star-24 .half{
    background-image: url("../../assets/images/star24_half@2x.png")
  }
  @media screen and ( -webkit-min-device-pixel-ratio : 3 ),
  ( min--moz-device-pixel-ratio : 2 ) {
    .star-24 .half{
      background-image: url("../../assets/images/star24_half@3x.png")
    }
  }
  .star-24 .off{
    background-image: url("../../assets/images/star24_off@2x.png")
  }
  @media screen and ( -webkit-min-device-pixel-ratio : 3 ),
  ( min--moz-device-pixel-ratio : 2 ) {
    .star-24 .off{
      background-image: url("../../assets/images/star24_off@3x.png")
    }
  }
</style>