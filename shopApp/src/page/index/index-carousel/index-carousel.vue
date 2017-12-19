<template>
    <div class="index_carousel">
      <ul class="index_carousel_images clearfix">
        <slider>
        <li v-for="item in goods[0].value">
          <a href="#">
            <img :src="item.image" alt="">
          </a>
        </li>
          </slider>
      </ul>
      <!--<ul class="index_carousel clearfix">
        <li class="current"></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>-->
    </div>
</template>
<script>
  import Slider from 'page/slider/slider'
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState(['goods'])
    },
    components: {
      /*无缝滑屏封装*/
      Slider
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
      width: 100%;
   /*   -webkit-transform: translateX(-16.667%);
      transform: translateX(-16.667%);*/
      li {
        float: left;
       width: 100%;
        a {
          display: block;
          width: 100%;
          img {
            display: block;
            width: 100%;
            height: auto;
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
