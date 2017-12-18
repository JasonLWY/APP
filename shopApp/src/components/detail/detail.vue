<template>
  <div class="de_container">
    <!--轮播-->
    <div class="dm_banner">
      <ul class="dm_banner_images clearfix">
        <li><a href="#"><img src="./detail1.jpg" alt=""></a>
        </li>
        <li><a href="#"><img src="./detail.jpg" alt=""></a>
        </li>
        <li><a href="#"><img src="./detail2.jpg" alt=""></a>
        </li>
        <li><a href="#"><img src="./detail3.jpg" alt=""></a>
        </li>
        <li><a href="#"><img src="./detail1.jpg" alt=""></a>
        </li>
        <li><a href="#"><img src="./detail.jpg" alt=""></a>
        </li>
      </ul>
      <ul class="banner_index banner_index_detail clearfix">
        <li class="current"></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <!--点击回退按钮-->
    <div class="banner_right">
      <a href="javascript: ;" @click="back"><img src="./backb.png" alt=""></a>
    </div>
    <!--title-->
    <div class="banner_title">犬心保 驱虫牛肉块 S 体重11kg以下 整盒装</div>
    <!--price-->
    <div class="banner_title price">￥888888</div>
    <!--desc-->
    <div class="banner_selled">新老包装随机  轻松驱虫 驱蛔虫/心丝虫/钩虫 1月只需1片</div>
    <div class="hr4"></div>
    <!--产品亮点-->
    <div class="de_goods_light">
      <h1>授权文件</h1>
      <div class="light_act">
        <span>E宠从创立之初，就一直对货源进行非常严苛的管控，坚持只从品牌商或其授权方直接采购，哪怕有更“实惠”的进货渠道，我们也从未因此而调整供应商！坚持所有产品入库出库的品质最高要求，拒绝任何瑕疵品正常销售！</span>
      </div>
      <div class="nothing1"></div>
    </div>
    <!--产品参数-->
    <div class="de_goods_light">
      <h1>参数公告</h1>
      <div class="light_act1">
        <span><img src="./dp.png" alt=""></span>
      </div>
      <div class="light_act1">
        <span>美旺大象营，近距离与大象接触，大象保护区，看快乐的大象，大象洗澡，懒猫家特色行程</span>
      </div>
      <div class="nothing1"></div>
    </div>
    <!--介绍导航1-->
    <div class="tap">
      <div class="tap_1"><a href="#">商品详情</a></div>
      <div class="tap_2"><a href="javascript:;">商品</a></div>
      <div class="tap_3"><a href="#">用户评价</a></div>
    </div>
    <!--导航对应div 用id区别-->
    <div id="1" style="display: none;">
      <div class="de_goods_light1">
        <h1>商品详情</h1>
        <div class="nothing1"></div>
        <div class="nothing1"></div>
      </div>
      <div class="de_goods_light">
        <div class="light_act1">
          <img src="./detaillQQQ.jpg" alt="">
        </div>
      </div>
      <div class="de_goods_light">
        <div class="light_act">
          <h2>商品详细介绍</h2>
          <img src="./detaillDD.jpg" alt="">
          <span>美旺大象营，近距离与大象接触，大象保护区，看快乐的大象，大象洗澡，懒猫家特色行程</span>
        </div>
        <div class="nothing1"></div>
      </div>
    </div>
    <div id="3">
      <div class="de_goods_light1">
        <h1>用户评价</h1>
        <div class="nothing1"></div>
        <div class="nothing1"></div>
      </div>
      <div class="user_score clearfix">
        <div class="score_left f_l">
          <div class="score_left_score">4.8分</div>
          <div class="score_left_comm">99人评论</div>
          <div class="score_left_star clearfix">
            <em></em>
            <em></em>
            <em></em>
            <em></em>
            <em></em>
          </div>
        </div>
        <div class="score_right f_r">
          <div class="score_right1">
            <span>售前服务</span>
            <span class="score_right1_star1">
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                        </span>
            <span>4.8分</span>
          </div>
          <div class="score_right1">
            <span>售前服务</span>
            <span class="score_right1_star1">
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                        </span>
            <span>4.8分</span>
          </div>
          <div class="score_right1">
            <span>售前服务</span>
            <span class="score_right1_star1">
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                        </span>
            <span>4.8分</span>
          </div>
        </div>
      </div>
      <div class="comm_list">
        <div class="comm_list_1 clearfix">
          <span class="f_l">j**sonlwy</span>
          <span class="score_right1_star1 f_r">
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                        </span>
        </div>
        <div class="comm_list_2_title">狗狗主粮</div>
        <div class="comm_list_3_content">
          包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好
        </div>
        <div class="comm_list_4_time">2016-11-11 12:22:22</div>
        <div class="hr7"></div>
      </div>
      <div class="comm_list">
        <div class="comm_list_1 clearfix">
          <span class="f_l">j**sonlwy</span>
          <span class="score_right1_star1 f_r">
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                        </span>
        </div>
        <div class="comm_list_2_title">狗狗主粮</div>
        <div class="comm_list_3_content">
          包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好
        </div>
        <div class="comm_list_4_time">2016-11-11 12:22:22</div>
        <div class="hr7"></div>
      </div>
      <div class="comm_list">
        <div class="comm_list_1 clearfix">
          <span class="f_l">j**sonlwy</span>
          <span class="score_right1_star1 f_r">
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                        </span>
        </div>
        <div class="comm_list_2_title">狗狗主粮</div>
        <div class="comm_list_3_content">
          包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好
        </div>
        <div class="comm_list_4_time">2016-11-11 12:22:22</div>
        <div class="hr7"></div>
      </div>
      <div class="comm_list">
        <div class="comm_list_1 clearfix">
          <span class="f_l">j**sonlwy</span>
          <span class="score_right1_star1 f_r">
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                        </span>
        </div>
        <div class="comm_list_2_title">狗狗主粮</div>
        <div class="comm_list_3_content">
          包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好
        </div>
        <div class="comm_list_4_time">2016-11-11 12:22:22</div>
        <div class="hr7"></div>
      </div>
      <div class="comm_list">
        <div class="comm_list_1 clearfix">
          <span class="f_l">j**sonlwy</span>
          <span class="score_right1_star1 f_r">
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                        </span>
        </div>
        <div class="comm_list_2_title">狗狗主粮</div>
        <div class="comm_list_3_content">
          包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好
        </div>
        <div class="comm_list_4_time">2016-11-11 12:22:22</div>
        <div class="hr7"></div>
      </div>
      <div class="comm_list">
        <div class="comm_list_1 clearfix">
          <span class="f_l">j**sonlwy</span>
          <span class="score_right1_star1 f_r">
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                        </span>
        </div>
        <div class="comm_list_2_title">狗狗主粮</div>
        <div class="comm_list_3_content">
          包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好
        </div>
        <div class="comm_list_4_time">2016-11-11 12:22:22</div>
        <div class="hr7"></div>
      </div>
      <div class="comm_list">
        <div class="comm_list_1 clearfix">
          <span class="f_l">j**sonlwy</span>
          <span class="score_right1_star1 f_r">
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                        </span>
        </div>
        <div class="comm_list_2_title">狗狗主粮</div>
        <div class="comm_list_3_content">
          包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好
        </div>
        <div class="comm_list_4_time">2016-11-11 12:22:22</div>
        <div class="hr7"></div>
      </div>
      <div class="comm_list">
        <div class="comm_list_1 clearfix">
          <span class="f_l">j**sonlwy</span>
          <span class="score_right1_star1 f_r">
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                        </span>
        </div>
        <div class="comm_list_2_title">狗狗主粮</div>
        <div class="comm_list_3_content">
          包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好
        </div>
        <div class="comm_list_4_time">2016-11-11 12:22:22</div>
        <div class="hr7"></div>
      </div>
      <div class="comm_list">
        <div class="comm_list_1 clearfix">
          <span class="f_l">j**sonlwy</span>
          <span class="score_right1_star1 f_r">
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                        </span>
        </div>
        <div class="comm_list_2_title">狗狗主粮</div>
        <div class="comm_list_3_content">
          包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好
        </div>
        <div class="comm_list_4_time">2016-11-11 12:22:22</div>
        <div class="hr7"></div>
      </div>
      <div class="comm_list">
        <div class="comm_list_1 clearfix">
          <span class="f_l">j**sonlwy</span>
          <span class="score_right1_star1 f_r">
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                            <em></em>
                        </span>
        </div>
        <div class="comm_list_2_title">狗狗主粮</div>
        <div class="comm_list_3_content">
          包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好包装完好
        </div>
        <div class="comm_list_4_time">2016-11-11 12:22:22</div>
        <div class="hr7"></div>
      </div>

      <div class="clickmore_comm_list">
        点击加载更多！
        <div class="hr7"></div>
      </div>
    </div>
    <div class="nothing6"></div>
  </div>
</template>
<script>
  export default {
    methods: {
      back() {
        this.$router/s
      }
    }
  }
</script>
<style lang="less">
  @rem: 750/16rem;
  .de_container {
    width: 100%;
    position: relative;
    .dm_banner {
      width: 100%;
      overflow: hidden;
      /*索引定位*/
      position: relative;
      .dm_banner_images {
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
      .banner_index {
        position: absolute;
        bottom: 30/@rem;
        left: 50%;
        margin-left: -20/@rem;
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
    .banner_title {
      margin-top: 40/@rem;
      font-size: 35/@rem;
      margin-left: 33/@rem;
      font-weight: 600;
    }
    .price {
      color: red;
    }
    .banner_selled {
      margin-top: 33/@rem;
      margin-left: 30/@rem;
      font-size: 20/@rem;
      color: red;
    }
    .banner_price {
      position: absolute;
      bottom: 30/@rem;
      right: 30/@rem;
      span {
        color: red;
        font-size: 38/@rem;
      }
      i:nth-of-type(1) {
        font-size: 17/@rem;
      }
      i:nth-of-type(2) {
        font-size: 14/@rem;
        color: #A4A3A8;
      }
    }
    .banner_collection {
      width: 75/@rem;
      height: 75/@rem;
      border-radius: 50%;
      border-shadow: 1/@rem;
      background: #FFFFFF;
      position: absolute;
      top: 440/@rem;
      right: 30/@rem;
      box-shadow: 0px 1px lightgrey;
      a {
        display: block;
        line-height: 57px;
        padding-left: 3px;
        width: 100%;
        position: relative;
        img {
          display: inline-block;
          position: absolute;
          top: 0;
          bottom: -85/@rem;
          left: 0;
          right: 0;
          margin: auto;
          width: 60/@rem;
        }
      }
    }
    .banner_right {
      width: 65/@rem;
      height: 65/@rem;
      border-radius: 50%;
      border-shadow: 1/@rem;
      background: #FFFFFF;
      position: absolute;
      top: 30/@rem;
      left: 30/@rem;
      a {
        width: 100%;
        img {
          width: 100%;
        }
      }
    }
    .dm_banner {
      width: 100%;
      height: 500/@rem;
      .banner_index_detail {
        bottom: 40/@rem;
      }
      /*小图标调整*/
      .de_banner_index {
        bottom: 270/@rem;
      }
      .banner_price {
        position: absolute;
        bottom: 30/@rem;
        right: 30/@rem;
        span {
          color: red;
          font-size: 38/@rem;
        }
        i:nth-of-type(1) {
          font-size: 17/@rem;
        }
        i:nth-of-type(2) {
          font-size: 14/@rem;
          color: #A4A3A8;
        }
      }
    }
    .tap {
      margin-top: 30/@rem;
      width: 100%;
      height: 100/@rem;
      display: flex;
      line-height: 100/@rem;
      div {
        flex: 1;
        text-align: center;
        a {
          background: #FFC1A8;
          display: inline-block;
          box-shadow: 2px 2px #FAB193;
          border-radius: 20/@rem;
          width: 180/@rem;
          color: #000;
          font-size: 28/@rem;
        }
      }
    }
    .de_goods_light {
      width: 100%;
      position: relative;
      &:before {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        width: 90%;
        height: 1px;
        left: 30/@rem;
        background: #bdb2b2;
        transform: scaleY(.5);
      }
      .nothing1 {
        width: 100%;
        height: 51/@rem;
      }
      h1 {
        text-align: center;
        margin-top: 68/@rem;
        font-size: 28/@rem;
      }
      .light_act {
        margin-top: 69/@rem;
        margin-left: 37/@rem;
        width: 90%;
        h2 {
          text-align: center;
          margin-bottom: 20/@rem;
          font-size: 30/@rem;
          color: #595959;
        }
        img {
          width: 100%;
        }
        span {
          font-size: 26/@rem;
          color: #A4A3A8;
        }
      }
      .light_act1 {
        margin-top: 40/@rem;
        margin-left: 37/@rem;
        width: 90%;
        img {
          width: 100%;
        }
        span {
          color: #A4A3A8;
          font-size: 26/@rem;
        }
      }
    }
    .de_goods_light1 {
      width: 100%;
      position: relative;
      margin-top: 120/@rem;
      .nothing1 {
        width: 100%;
        height: 51/@rem;
      }
      h1 {
        text-align: center;
        font-size: 28/@rem;
        margin-top: 68/@rem;
      }
      .light_act {
        margin-top: 69/@rem;
        margin-left: 37/@rem;
        width: 90%;
        span {
          color: #A4A3A8;
        }
      }
    }
    /*评分顶部说明*/
    .user_score {
      width: 100%;
      height: 200/@rem;
      .score_left {
        background: #F3F5F8;
        border-radius: 5/@rem;
        border: 1px silver solid;
        margin-left: 25/@rem;
        width: 214/@rem;
        height: 100%;
        text-align: center;
        line-height: 70/@rem;
        .score_left_score {
          font-size: 28/@rem;
          font-weight: 600;
        }
        .score_left_comm {
          color: #9EB1C9;
          font-size: 16/@rem;
        }
        .score_left_star {
          em {
            display: inline-block;
            width: 25/@rem;
            height: 25/@rem;
            background-image: url("./start_red.png");
            background-size: 25/@rem 25/@rem;
            background-repeat: no-repeat;
          }
        }
      }
      .score_right {
        width: 506/@rem;
        height: 180/@rem;
        text-align: center;
        line-height: 60/@rem;
        margin-top: 10/@rem;
        .score_right1 {
          display: flex;
          span {
            flex: 1;
            font-size: 24/@rem;
          }
          .score_right1_star1 {
            em {
              display: inline-block;
              width: 27/@rem;
              height: 27/@rem;
              background-image: url("./start_red.png");
              background-size: 27/@rem 27/@rem;
              background-repeat: no-repeat;
            }
          }
        }
      }
    }
    .comm_list {
      width: 100%;
      margin-top: 64/@rem;
      position: relative;
      .comm_list_1 {
        span {
          padding: 0 30/@rem;
          color: #9E9E9E;
          font-size: 28/@rem;
        }
        .score_right1_star1 {
          em {
            display: inline-block;
            width: 27/@rem;
            height: 27/@rem;
            background-image: url("./start_red.png");
            background-size: 27/@rem 27/@rem;
            background-repeat: no-repeat;
          }
        }
      }
      .comm_list_2_title {
        color: #9E9E9E;
        font-size: 16/@rem;
        padding-left: 30/@rem;
        margin-top: 17/@rem;
      }
      .comm_list_3_content {
        width: 100%;
        margin-top: 43/@rem;
        padding: 0 30/@rem;
        font-size: 30/@rem;
      }
      .comm_list_4_time {
        padding-left: 30/@rem;
        font-size: 15/@rem;
        color: #9E9E9E;
        margin-top: 34/@rem;
      }
      .hr7 {
        position: absolute;
        bottom: -35/@rem;;
        height: 1px;
        width: 90%;
        left: 30/@rem;
        background: #9E9E9E;
      }
    }
    .clickmore_comm_list {
      width: 100%;
      height: 40/@rem;
      margin-top: 80/@rem;
      text-align: center;
      font-size: 28/@rem;
    }
    .footer {
      width: 90%;
      position: fixed;
      bottom: 0;
      background: #FFFFFF;
      text-align: center;
      height: 100/@rem;
      border: 1px silver solid;
      line-height: 100/@rem;
      margin-left: 30/@rem;
      border-radius: 10/@rem;
      border-bottom: 0;
      display: flex;
      .img_atm {
        img {
          margin-right: 40/@rem;
        }
      }
      .A {
        a {
          display: inline-block;
          width: 100%;
          height: 100%;
          color: #FFFFFF;
          background: #55C1DD;;

        }
      }
      .B {
        a {
          display: inline-block;
          width: 100%;
          height: 100%;
          color: #FFFFFF;
          background: #FC5D7B;
        }
      }
      div {
        flex: 1;
        img {
          margin-top: 30/@rem;
          width: 45/@rem;
        }
      }
    }
    .nothing6 {
      height: 140/@rem;
    }
  }
</style>
