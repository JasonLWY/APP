<template>
  <div class="brandsall_container">
    <div class="brandsall_header">
      <!--在vue不用 a 标签  直接路由回调 this.$router.back 既可以-->
      <a href="javascript:;" @click="back" class="back_img"></a>
      <span>购物车</span>
      <div class="header_hr"></div>
      <i class="head_right_img"></i>
    </div>
    <div class="content">
      <brands-list :data="brandsall" ref="list"></brands-list>
      <!--<list-view :data="brandsall" ref="list"></list-view>-->
   </div>
    <!--右侧导航实现-->
    <!--<div class="list-shortcut" @touchstart.stop.prevent="onShortcutTouchStart" @touchmove.stop.prevent="onShortcutTouchMove"
         @touchend.stop>
      <ul>
        &lt;!&ndash;<li v-for="(item, index) in shortcutList" :data-index="index" class="item"
            :class="{'current':currentIndex===index}">{{item}}
        </li>&ndash;&gt;
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
        <li class="item">A</li>
      </ul>
    </div>-->
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BrandsList from 'page/brandslist/brands-list'
//  import ListView from 'page/listview/listview'
    export default {
      mounted(){
//        this.$store.dispatch('reqCategory')
        this.$store.dispatch('reqBrandsall')
      },
      computed: {
        ...mapState(['brandsall'])
      },
      methods: {
        back() {
          //路由回跳实现
          this.$router.back()
        }
      },
      components: {
        BrandsList,
//        ListView
      }
    }
</script>
<style scoped lang="less">
  @rem: 750/16rem;
  @import "~common/css/public.less";
  @import "~common/css/variable";
  .brandsall_container {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #FFFFFF;
    .brandsall_header {
      background: #FFFFFF;
      text-align: center;
      line-height: 100/@rem;
      position: relative;
      width: 100%;
      height: 100/@rem;
      .head_right_img {
        position: absolute;
        top: 27/@rem;
        right: 37/@rem;
        width: 37/@rem;
        height: 37/@rem;
        background-image: url("./QRCode.png");
        background-repeat: no-repeat;
        background-size: cover;
      }
      .back_img {
        display: inline-block;
        position: absolute;
        top: 30/@rem;
        left: 23/@rem;
        width: 50/@rem;
        height: 50/@rem;
        background-image: url("./back.png");
        background-repeat: no-repeat;
        background-size: 50/@rem 50/@rem;
      }
      .header_hr {
        position: absolute;
        bottom: 0;
        height: 1px;
        width: 100%;
        background: #E8E8E8;
      }
      span {
        color: #000;
        font-size: 28/@rem;
        font-weight: 600;
      }
    }
    .content{
      width: 100%;
      height: 100%;
      .content-list{
        width: 100%;
        height: 100%;
        .list{
          width: 100%;
          h2{
            width: 100%;
            height: 50/@rem;
            color: #999999;
            font-size: 28/@rem;
            background: #F3F4F5;
            line-height: 50/@rem;
            padding-left: 30/@rem;
          }
          .item{
            width: 100%;
            height: 140/@rem;
            margin-top: 20/@rem;
            border: 1px solid #F3F4F5;
            .item-left {
              width: 205/@rem;
              height: 105/@rem;
              margin-top: 15/@rem;
              margin-left: 20/@rem;
              border: 1px solid #F3F4F5;
              text-align: center;
              img {
                display: inline-block;
                width: 201/@rem;
              }
            }
            .item-right{
              line-height: 2/@rem;
              p{
                padding: 39/@rem 0 0 20/@rem;
                font-size: 25/@rem;
              }
              p:nth-of-type(2) {
                font-size: 19/@rem;
                color: silver;
              }
            }
          }
        }
      }
    }
    .list-shortcut{
      position: absolute;
      z-index: 30;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 20/@rem;
      padding: 20/@rem 0;
      border-radius: 10/@rem;
      text-align: center;
      background: white;
      font-family: 微软雅黑;
      .item{
        padding: 3/@rem;
        line-height: 1;
        color: black;
        font-size: @font-size-small;
        .current{
          color: wheat;
        }
      }
    }
  }
</style>
