<template>
  <div class="index_carousel">
    <ul class="index_carousel_images clearfix">
      <li v-for="item in goods[0].value">
        <a href="#"><img :src="item.image" alt=""></a>
      </li>
 <!-- <li><a href="#"><img src="./LB1.jpg" alt=""></a></li>
      <li><a href="#"><img src="./LB2.png" alt=""></a></li>
      <li><a href="#"><img src="./LB3.jpg" alt=""></a></li>
      <li><a href="#"><img src="./LB4.jpg" alt=""></a></li>
      <li><a href="#"><img src="./LB1.jpg" alt=""></a></li>-->
    </ul>
    <ul class="index_carousel clearfix">
      <li class="current"></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
      computed: {
        ...mapState(['goods'])
      }
    }
</script>
<style scoped lang="less">
  @rem: 750/16rem;
  .index_carousel {
    width: 100%;
    overflow: hidden;
    background: #ffffff;
    /*索引定位*/
    position: relative;
    .index_carousel_images {
      /*4倍宽度  横向 四张图片*/
      width: 600%;
      -webkit-transform: translateX(-16.667%);
      transform: translateX(-16.667%);
      li {
        float: left;
        width: 16.6667%;
        a {
          display: block;
          width: 100%;
          img {
            display: block;
            width: 100%;
          }
        }
      }
    }
    /*小图标*/
    .index_carousel {
      position: absolute;
      bottom: 30/@rem;
      left: 50%;
      margin-left: -20/@rem;
      background: rgba(255, 255, 255, 0.1);
      li {
        float: left;
        width: 10/@rem;
        height: 10/@rem;
        border-radius: 50%;
        border: 1px solid white;
        margin-left: 5/@rem;
      }
      .current {
        background-color: deeppink
      }
    }
  }
</style>
