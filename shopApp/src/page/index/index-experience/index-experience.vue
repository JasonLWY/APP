<template>
  <div class="index_experience_hall">
    <div class="experience_hall_top">
      <i class="img_left"></i>
      <i class="img_right"></i>
    </div>
    <div class="index_carousel experience_hall">
      <ul class="index_carousel_images clearfix">
        <slider>
          <li v-for="item in goods[30].value">
            <a href="#">
              <img :src="item.image" alt="">
            </a>
          </li>
        </slider>
      </ul>
    </div>
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
        Slider
      }
    }
</script>
<style lang="less">
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
  }
  .index_experience_hall {
    width: 100%;
    /*height: 400/@rem;*/
    position: relative;
    background: #ffffff;
    .experience_hall_top {
      width: 100%;
      margin-top: 18/@rem;
      height: 176/@rem;
      .img_left {
        margin: 28/@rem 0 0 0;;
        position: absolute;
        top: 0;
        left: 20/@rem;
        width: 330/@rem;
        height: 110/@rem;
        background-image: url("./tiyan.jpg");
        background-repeat: no-repeat;
        background-size: cover;
      }
      text-align: center;
      line-height: 90/@rem;
      .img_right {
        position: absolute;
        top: 34/@rem;
        right: 32/@rem;
        width: 100/@rem;
        height: 50/@rem;
        background-image: url("./more1.png");
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
  }
</style>
