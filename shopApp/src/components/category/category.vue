<template>
  <div class="category_container">
    <div class="category_head">
      <div class="head_tap clearfix">
        <span class="span1 f_l current"><a href="#">分类</a></span>
        <span class="span2 f_r"><router-link to="/brands">品牌</router-link></span>
      </div>
      <router-link to="/search"><i class="head_right_img"></i></router-link>
    </div>

    <div class="main">
      <!--left-->
      <!--  左边的区域 -->
      <div class="main_left f_l">
        <ul>
          <li class='current'><a href="#">猫咪零食</a></li>
          <li><a href="#">猫咪零食</a></li>
          <li><a href="#">猫咪零食</a></li>
          <li><a href="#">猫咪零食</a></li>
          <li><a href="#">猫咪零食</a></li>
          <li><a href="#">猫咪零食</a></li>
          <li><a href="#">猫咪零食</a></li>
          <li><a href="#">猫咪零食</a></li>
        </ul>
      </div>
      <!--右边的区域 -->
      <div class="main_right">
        <span>热门分类</span>
        <!-- 列表内容 -->
        <!-- ul.clearfix>li*15>a[href='#']>img[src='images/nv-fy.jpg']+p{毛呢大衣} -->
        <ul>
          <li><a href="#">
            <img src="./cate1.jpg">
          </a></li>
          <li><a href="#">
            <img src="./cate2.jpg">
          </a></li>
          <li><a href="#">
            <img src="./cate3.jpg">
          </a></li>
          <li><a href="#">
            <img src="./cate4.jpg" alt="">
          </a></li>
          <li><a href="#">
            <img src="./cate5.jpg" alt="">
          </a></li>
          <li><a href="#">
            <img src="./cate6.jpg" alt="">
          </a></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
  }
</script>
<style scoped lang="less">
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
        /*.span1 a{
          color: red;
          padding-bottom: 25/@rem;
          border-bottom: 2px solid red;
        }*/
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
      height: 1116/@rem;
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
            img {
              width: 162/@rem;
              height: auto;
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
