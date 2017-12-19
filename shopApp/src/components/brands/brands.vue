<template>
  <div class="category_container brands_container">
    <div class="category_head brands_head">
      <div class="head_tap clearfix">
        <span class="span1 f_l"><router-link to="/category">分类</router-link></span>
        <span class="span2 f_r current"><a href="javascript: ;">品牌</a></span>
      </div>
      <router-link to="/search"><i class="head_right_img"></i></router-link>
    </div>
    <div class="mian clearfix">
      <!--content one 组件-->
      <div class="recommend_content content_1 clearfix">
        <div v-for="item in brandslist">
          <div class="content_head">
            <span>—— {{item.title}} ——</span>
          </div>
          <div class="brands_list clearfix">
            <ul class="f_l clearfix">
              <li v-for="i in item.list">
                <router-link to="/shop_list">
                  <img :src="i.logo">
                </router-link>
                <span>{{i.name}}</span> <br>
                <i>{{i.address}}</i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="while"></div>-->
  </div>
</template>

<script>
  import {mapState} from 'vuex'

  export default {
    computed: {
      ...mapState(['brandslist'])
    }
  }
</script>
<style scoped lang="less">
  @import "~common/css/public";

  @rem: 750/16rem;
  .brands_container {
    width: 100%;
    background: #F3F4F5;
    position: relative;
    .brands_head {
      width: 100%;
      height: 100/@rem;
      background: #FFFFFF;
      position: relative;
      .head_tap {
        margin-left: 273/@rem;
        height: 100%;
        width: 196/@rem;
        span a {
          line-height: 100/@rem;
          font-size: 28/@rem;
          font-weight: 600;
          color: black;
        }
        .current a {
          color: red;
          padding-bottom: 25/@rem;
          border-bottom: 2px solid red;
        }
      }
      .head_right_img {
        position: absolute;
        top: 27/@rem;
        right: 37/@rem;
        width: 37/@rem;
        height: 37/@rem;
        background-image: url("./search.png");
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    .mian {
      width: 100%;
      .recommend_content {
        width: 100%;
        background: #FFFFFF;
        .content_head {
          width: 100%;
          height: 117/@rem;
          text-align: center;
          line-height: 117/@rem;
          span {
            color: #999999;
            font-size: 26/@rem;
          }
        }
        .brands_list {
          width: 100%;
          ul {
            width: 100%;
            padding-left: 20/@rem;
            margin-top: 30/@rem;
            li {
              width: 210/@rem;
              height: 225/@rem;
              float: left;
              padding-left: 15/@rem;
              line-height: 40/@rem;
              text-align: center;
              a {
                display: block;
                width: 200/@rem;
                height: 112/@rem;
                margin-left: 15/@rem;
                border: 1px solid red;
                text-align: center;
                img {
                  display: inline-block;
                  width: 100%;
                  padding: 10/@rem;
                  height: auto;
                }
              }
              span {
                display: inline-block;
                font-size: 25/@rem;
                width: 100%;
                margin-left: 50/@rem;
              }
              i {
                font-size: 24/@rem;
                margin-left: 30/@rem;
                font-style: normal;
                color: #999999;
              }
            }
          }
        }
      }
    }
    .while {
      height: 5/@rem;
    }
  }
</style>
