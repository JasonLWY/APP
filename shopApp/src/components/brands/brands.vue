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
        <div class="content_head">
          <span>—— 推荐品牌 ——</span>
        </div>
        <div class="brands_list clearfix">
          <ul class="f_l clearfix">
            <li>
              <router-link to="/shop_list">
                <img src="./brands_list1.jpg">
              </router-link>
              <span>冠能</span> <br>
              <i>美国</i>
            </li>
            <li>
              <a href="#">
                <img src="./brands_list1.jpg">
              </a>
              <span>冠能</span> <br>
              <i>美国</i>
            </li>
            <li>
              <a href="#">
                <img src="./brands_list1.jpg">
              </a>
              <span>冠能</span> <br>
              <i>美国</i>
            </li>
            <li>
              <a href="#">
                <img src="./brands_list1.jpg">
              </a>
              <span>冠能</span> <br>
              <i>美国</i>
            </li>
            <li>
              <a href="#">
                <img src="./brands_list1.jpg">
              </a>
              <span>冠能</span> <br>
              <i>美国</i>
            </li>
            <li>
              <a href="#">
                <img src="./brands_list1.jpg">
              </a>
              <span>冠能</span> <br>
              <i>美国</i>
            </li>
            <li>
              <a href="#">
                <img src="./brands_list1.jpg">
              </a>
              <span>冠能</span> <br>
              <i>美国</i>
            </li>
            <li>
              <a href="#">
                <img src="./brands_list1.jpg">
              </a>
              <span>冠能</span> <br>
              <i>美国</i>
            </li>
            <li>
              <a href="#">
                <img src="./brands_list1.jpg">
              </a>
              <span>冠能</span> <br>
              <i>美国</i>
            </li>
            <li>
              <a href="#">
                <img src="./brands_list1.jpg">
              </a>
              <span>冠能</span> <br>
              <i>美国</i>
            </li>
            <li>
              <a href="#">
                <img src="./brands_list1.jpg">
              </a>
              <span>冠能</span> <br>
              <i>美国</i>
            </li>
            <li>
              <a href="#">
                <img src="./brands_list1.jpg">
              </a>
              <span>冠能</span> <br>
              <i>美国</i>
            </li>
          </ul>
        </div>
      </div>
      <div class="recommend_content content_1 clearfix">
        <div class="content_head">
          <span>—— 主粮品牌 ——</span>
        </div>
        <div class="brands_list clearfix">
          <ul class="f_l clearfix">
            <li>
              <a href="#">
                <img src="./brands_list2.jpg">
              </a>
              <span>冠能</span> <br>
              <i>美国</i>
            </li>
            <li>
              <a href="#">
                <img src="./brands_list2.jpg">
              </a>
              <span>冠能</span> <br>
              <i>美国</i>
            </li>
            <li>
              <a href="#">
                <img src="./brands_list2.jpg">
              </a>
              <span>冠能</span> <br>
              <i>美国</i>
            </li>
            <li>
              <a href="#">
                <img src="./brands_list2.jpg">
              </a>
              <span>冠能</span> <br>
              <i>美国</i>
            </li>
            <li>
              <a href="#">
                <img src="./brands_list2.jpg">
              </a>
              <span>冠能</span> <br>
              <i>美国</i>
            </li>
            <li>
              <a href="#">
                <img src="./brands_list2.jpg">
              </a>
              <span>冠能</span> <br>
              <i>美国</i>
            </li>
            <li>
              <a href="#">
                <img src="./brands_list2.jpg">
              </a>
              <span>冠能</span> <br>
              <i>美国</i>
            </li>
            <li>
              <a href="#">
                <img src="./brands_list2.jpg">
              </a>
              <span>冠能</span> <br>
              <i>美国</i>
            </li>
            <li>
              <a href="#">
                <img src="./brands_list2.jpg">
              </a>
              <span>冠能</span> <br>
              <i>美国</i>
            </li>
            <li>
              <a href="#">
                <img src="./brands_list2.jpg">
              </a>
              <span>冠能</span> <br>
              <i>美国</i>
            </li>
            <li>
              <a href="#">
                <img src="./brands_list2.jpg">
              </a>
              <span>冠能</span> <br>
              <i>美国</i>
            </li>
            <li>
              <a href="#">
                <img src="./brands_list2.jpg">
              </a>
              <span>冠能</span> <br>
              <i>美国</i>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--<div class="while"></div>-->
  </div>
</template>

<script>
  export default {}
</script>
<style scoped lang="less">
  @import "~common/css/public";
  @rem: 750/16rem;
  .brands_container {
    width: 100%;
    background: #F3F4F5;
    position: relative;
    .brands_head{
      width: 100%;
      height: 100/@rem;
      background: #FFFFFF;
      position: relative;
      .head_tap{
        margin-left: 273/@rem;
        height: 100%;
        width: 196/@rem;
        span a{
          line-height: 100/@rem;
          font-size: 28/@rem;
          font-weight: 600;
          color: black;
        }
        .current a{
          color: red;
          padding-bottom: 25/@rem;
          border-bottom: 2px solid red;
        }
      }
      .head_right_img{
        position: absolute;
        top:27/@rem;
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
            padding-left: 78/@rem;
            margin-top: 30/@rem;
            li {
              width: 210/@rem;
              height: 225/@rem;
              float: left;
              line-height: 40/@rem;
              a {
                display: block;
                width: 160/@rem;
                height: 82/@rem;
                img {
                  display: inline-block;
                  width: 100%;
                  height: auto;
                }
              }
              span {
                font-size: 30/@rem;
                margin-left: 50/@rem;
              }
              i {
                font-size: 28/@rem;
                margin-left: 50/@rem;
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
