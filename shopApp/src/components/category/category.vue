<template>
  <div class="category_container">
    <div class="category_head">
      <div class="head_tap clearfix">
        <span class="span1 f_l current"><a href="#">分类</a></span>
        <span class="span2 f_r"><router-link to="/brands">品牌</router-link></span>
      </div>
      <router-link to="/search"><i class="head_right_img"></i></router-link>
    </div>

    <div class="main clearfix">
      <!--left-->
      <!--  左边的区域 -->
      <div class="main_left f_l">
        <div>
          <ul>
            <li v-for="(item, index) in category" :class="{current: index === indexb}" :key="index"
                @click="select(index)">
              <a href="#">{{item.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <!--右边的区域 -->
      <div class="main_right">
        <div>
          <span>{{categorylist[0].title}}</span>
        </div>
        <!-- 列表内容 -->
        <ul>
          <li v-for="item in categorylist[0].list">
            <router-link to="/shop_list">
              <img :src="item.photo">
            </router-link>
            <p>{{item.name}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'

  export default {
    data() {
      return {
        indexb: 0,
      }
    },
    computed: {
      ...mapState(['category', 'categorylist'])
    },
    mounted() {
      this._select()
    },
    methods: {
      _select() {

      }
    }

  }
</script>
<style lang="less">
  @import "~common/css/public";

  @rem: 750/16rem;
  .category_container {
    width: 100%;
    background: #F3F4F5;
    /*head部分*/
    .category_head {
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
    /*mian部分*/
    .main {
      width: 100%;
      background: #F3F5F8;
      height: auto;
      margin-top: 10/@rem;
      .main_left {
        width: 185/@rem;
        ul {
          width: 100%;
          text-align: center;
          line-height: 125/@rem;
          .current {
            background: #FFFFFF;
            border-left: 2px solid red;
            a {
              color: red;
            }
          }
          li {
            height: 125/@rem;
            display: block;
            width: 100%;
            font-size: 28/@rem;
            font-weight: 600;
            a {
              display: block;
              color: #000000;
            }
          }
        }
      }
      .main_right {
        overflow: hidden;
        background: #FFFFFF;
        height: 1106/@rem;
        width: 555/@rem;
        margin-left: 125/@rem;
        span {
          font-size: 20/@rem;
          display: inline-block;
          color: #99999B;
          margin: 57/@rem 0 0 26/@rem;
        }
        ul {
          li {
            float: left;
            margin-left: 20/@rem;
            margin-top: 10/@rem;
            text-align: center;
            img {
              width: 162/@rem;
              height: auto;
            }
            p {
              font-size: 27/@rem;
            }
          }
        }
      }
    }
    .while {
      height: 95/@rem;
    }
  }
</style>
