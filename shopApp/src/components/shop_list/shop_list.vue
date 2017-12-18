<template>
  <div class="shop_container">
    <div class="shop_header">
      <!--在vue不用 a 标签  直接路由回调 this.$router.back 既可以-->
      <a href="javascript: ;" @click="back" class="back_img"></a>
      <span>商品列表</span>
      <div class="header_hr"></div>
      <i class="head_right_img"></i>
    </div>
    <div class="shop_search">
      <i class="img_left"></i>
      <div class="search">
        <input type="text" @click="search" placeholder="点击搜索商品">
      </div>
    </div>

    <!--tap组件-->
    <div class="shop_tap">
      <div class="tap_list">
        <span class="acquiescence">默认 <i></i></span>
        <span>销量</span>
        <span class="price">价格
                   <i class="i_1"></i> <br>
                   <i class="i_2"></i>
               </span>
        <span>筛选</span>
      </div>
      <div class="hr"></div>
    </div>
    <!--商品列表组件-->
    <div class="shop_list">
      <div class="list clearfix">
        <!--美国品牌麦德氏 IN-Basic高单位活化益生菌 5g*5袋   互动:(99%好评)  售出:13.1w-->
        <div class="shop_img f_l">
          <router-link to="/detail"><img src="./list_shop1.jpg"></router-link>
        </div>
        <div class="shop_right f_l">
          <div class="title"><router-link to="/detail">美国品牌麦德氏 IN-Basic高单位活化益生菌5g*5袋</router-link></div>
          <div class="num">￥66.6</div>
          <div class="img_gongyi"><i></i></div>
          <div class="last"><i>互动:(99%好评)</i> <em>售出:13.1w</em></div>
        </div>
        <span class="cart">
                    <img src="./r_cart.png">
                </span>
        <div class="hr"></div>
      </div>
      <div class="list clearfix">
        <!--美国品牌麦德氏 IN-Basic高单位活化益生菌 5g*5袋   互动:(99%好评)  售出:13.1w-->
        <div class="shop_img f_l">
          <a href="detail.html"><img src="./list_shop1.jpg"></a>
        </div>
        <div class="shop_right f_l">
          <div class="title"><a href="detail.html">美国品牌麦德氏 IN-Basic高单位活化益生菌5g*5袋</a></div>
          <div class="num">￥66.6</div>
          <div class="img_gongyi"><i></i></div>
          <div class="last"><i>互动:(99%好评)</i> <em>售出:13.1w</em></div>
        </div>
        <span class="cart">
                    <img src="./r_cart.png">
                </span>
        <div class="hr"></div>
      </div>
      <div class="list clearfix">
        <!--美国品牌麦德氏 IN-Basic高单位活化益生菌 5g*5袋   互动:(99%好评)  售出:13.1w-->
        <div class="shop_img f_l">
          <a href="detail.html"><img src="./list_shop1.jpg"></a>
        </div>
        <div class="shop_right f_l">
          <div class="title"><a href="detail.html">美国品牌麦德氏 IN-Basic高单位活化益生菌5g*5袋</a></div>
          <div class="num">￥66.6</div>
          <div class="img_gongyi"><i></i></div>
          <div class="last"><i>互动:(99%好评)</i> <em>售出:13.1w</em></div>
        </div>
        <span class="cart">
                    <img src="./r_cart.png">
                </span>
        <div class="hr"></div>
      </div>
      <div class="list clearfix">
        <!--美国品牌麦德氏 IN-Basic高单位活化益生菌 5g*5袋   互动:(99%好评)  售出:13.1w-->
        <div class="shop_img f_l">
          <a href="detail.html"><img src="./list_shop1.jpg"></a>
        </div>
        <div class="shop_right f_l">
          <div class="title"><a href="detail.html">美国品牌麦德氏 IN-Basic高单位活化益生菌5g*5袋</a></div>
          <div class="num">￥66.6</div>
          <div class="img_gongyi"><i></i></div>
          <div class="last"><i>互动:(99%好评)</i> <em>售出:13.1w</em></div>
        </div>
        <span class="cart">
                    <img src="./r_cart.png">
                </span>
        <div class="hr"></div>
      </div>
      <div class="list clearfix">
        <!--美国品牌麦德氏 IN-Basic高单位活化益生菌 5g*5袋   互动:(99%好评)  售出:13.1w-->
        <div class="shop_img f_l">
          <a href="detail.html"><img src="./list_shop1.jpg"></a>
        </div>
        <div class="shop_right f_l">
          <div class="title"><a href="detail.html">美国品牌麦德氏 IN-Basic高单位活化益生菌5g*5袋</a></div>
          <div class="num">￥66.6</div>
          <div class="img_gongyi"><i></i></div>
          <div class="last"><i>互动:(99%好评)</i> <em>售出:13.1w</em></div>
        </div>
        <span class="cart">
                    <img src="./r_cart.png">
                </span>
        <div class="hr"></div>
      </div>
      <div class="list clearfix">
        <!--美国品牌麦德氏 IN-Basic高单位活化益生菌 5g*5袋   互动:(99%好评)  售出:13.1w-->
        <div class="shop_img f_l">
          <a href="detail.html"><img src="./list_shop1.jpg"></a>
        </div>
        <div class="shop_right f_l">
          <div class="title"><router-link to="/detail">美国品牌麦德氏 IN-Basic高单位活化益生菌5g*5袋</router-link></div>
          <div class="num">￥66.6</div>
          <div class="img_gongyi"><i></i></div>
          <div class="last"><i>互动:(99%好评)</i> <em>售出:13.1w</em></div>
        </div>
        <span class="cart">
                    <img src="./r_cart.png">
                </span>
        <div class="hr"></div>
      </div>
      <div class="list clearfix">
        <!--美国品牌麦德氏 IN-Basic高单位活化益生菌 5g*5袋   互动:(99%好评)  售出:13.1w-->
        <div class="shop_img f_l">
          <a href="detail.html"><img src="./list_shop1.jpg"></a>
        </div>
        <div class="shop_right f_l">
          <div class="title"><a href="detail.html">美国品牌麦德氏 IN-Basic高单位活化益生菌5g*5袋</a></div>
          <div class="num">￥66.6</div>
          <div class="img_gongyi"><i></i></div>
          <div class="last"><i>互动:(99%好评)</i> <em>售出:13.1w</em></div>
        </div>
        <span class="cart">
                    <img src="./r_cart.png">
                </span>
        <div class="hr"></div>
      </div>
      <div class="list clearfix">
        <!--美国品牌麦德氏 IN-Basic高单位活化益生菌 5g*5袋   互动:(99%好评)  售出:13.1w-->
        <div class="shop_img f_l">
          <router-link to="detail"><img src="./list_shop1.jpg"></router-link>
        </div>
        <div class="shop_right f_l">
          <div class="title"><router-link to="/detail">美国品牌麦德氏 IN-Basic高单位活化益生菌5g*5袋</router-link></div>
          <div class="num">￥66.6</div>
          <div class="img_gongyi"><i></i></div>
          <div class="last"><i>互动:(99%好评)</i> <em>售出:13.1w</em></div>
        </div>
        <span class="cart">
                    <img src="./r_cart.png">
                </span>
        <div class="hr"></div>
      </div>
      <div class="list clearfix">
        <!--美国品牌麦德氏 IN-Basic高单位活化益生菌 5g*5袋   互动:(99%好评)  售出:13.1w-->
        <div class="shop_img f_l">
          <a href="detail.html"><img src="./list_shop1.jpg"></a>
        </div>
        <div class="shop_right f_l">
          <div class="title"><a href="detail.html">美国品牌麦德氏 IN-Basic高单位活化益生菌5g*5袋</a></div>
          <div class="num">￥66.6</div>
          <div class="img_gongyi"><i></i></div>
          <div class="last"><i>互动:(99%好评)</i> <em>售出:13.1w</em></div>
        </div>
        <span class="cart">
                    <img src="./r_cart.png">
                </span>
        <div class="hr"></div>
      </div>
      <div class="list clearfix">
        <!--美国品牌麦德氏 IN-Basic高单位活化益生菌 5g*5袋   互动:(99%好评)  售出:13.1w-->
        <div class="shop_img f_l">
          <a href="detail.html"><img src="./list_shop1.jpg"></a>
        </div>
        <div class="shop_right f_l">
          <div class="title"><a href="detail.html">美国品牌麦德氏 IN-Basic高单位活化益生菌5g*5袋</a></div>
          <div class="num">￥66.6</div>
          <div class="img_gongyi"><i></i></div>
          <div class="last"><i>互动:(99%好评)</i> <em>售出:13.1w</em></div>
        </div>
        <span class="cart">
                    <img src="./r_cart.png">
                </span>
        <div class="hr"></div>
      </div>
      <div class="list clearfix">
        <!--美国品牌麦德氏 IN-Basic高单位活化益生菌 5g*5袋   互动:(99%好评)  售出:13.1w-->
        <div class="shop_img f_l">
          <a href="#"><img src="./list_shop1.jpg"></a>
        </div>
        <div class="shop_right f_l">
          <div class="title"><a href="#">美国品牌麦德氏 IN-Basic高单位活化益生菌5g*5袋</a></div>
          <div class="num">￥66.6</div>
          <div class="img_gongyi"><i></i></div>
          <div class="last"><i>互动:(99%好评)</i> <em>售出:13.1w</em></div>
        </div>
        <span class="cart">
                    <img src="./r_cart.png">
                </span>
        <div class="hr"></div>
      </div>
    </div>
    <div class="load_more">
      <span>点击加载更多</span>
    </div>
  </div>
</template>

<script>
    export default {
      methods: {
        /*路由回返*/
        back() {
          this.$router.back()
        },
        /*点击跳转到search路由组件*/
        search(){
          this.$router.push('/search')
        }
      }
    }
</script>
<style lang="less">
  @rem:750/16rem;
  .shop_container{
    width: 100%;
    background: #FFFFFF;
    .shop_header{
      background: #FFFFFF;
      text-align: center;
      line-height:100/@rem;
      position: relative;
      width: 100%;
      height: 100/@rem;
      .head_right_img{
        position: absolute;
        top:27/@rem;
        right: 37/@rem;
        width: 37/@rem;
        height: 37/@rem;
        background-image: url("./QRCode.png");
        background-repeat: no-repeat;
        background-size: cover;
      }
      .back_img{
        display: inline-block;
        position: absolute;
        top: 30/@rem;
        left: 23/@rem;
        width: 50/@rem;
        height: 50/@rem;
        height: 50/@rem;
        background-image: url("./back.png");
        background-repeat: no-repeat;
        background-size: 50/@rem 50/@rem;
      }
      .header_hr{
        position: absolute;
        bottom: 0;
        height: 1px;
        width: 100%;
        background: #E8E8E8;
      }
      span{
        color: #000;
        font-size: 28/@rem;
        font-weight: 600;
      }
    }
    .shop_search{
      width: 100%;
      height: 122/@rem;
      position: relative;
      .img_left{
        position: absolute;
        top: 35/@rem;
        left: 45/@rem;
        width: 40/@rem;
        height: 40/@rem;
        background-image: url("./search.png");
        background-repeat: no-repeat;
        background-size: cover;
      }
      .search{
        width: 711/@rem;
        height: 80/@rem;
        line-height: 100/@rem;
        input{
          display: inline-block;
          width: 100%;
          height: 100%;
          background:#F6F6F6;
          border-radius: 20/@rem;
          margin-left: 20/@rem;
          padding-left: 80/@rem;
        }
      }
    }
    .shop_tap{
      width: 100%;
      height: 82/@rem;
      position: relative;
      .hr{
        height: 1px;
        width: 100%;
        position: absolute;
        background: rgba(158, 158, 158,.3);
        bottom: 0;
      }
      .tap_list{
        width: 100%;
        display: flex;
        text-align: center;
        span{
          flex: 1;
          font-size: 30/@rem;
        }
        .acquiescence{
          position: relative;
          color: red;
          i{
            position: absolute;
            top: 15/@rem;
            left: 130/@rem;
            width: 20/@rem;
            height: 10/@rem;
            background-image: url("./moren_down.png");
            background-repeat: no-repeat;
            background-size: cover;
          }
        }
        .price{
          position: relative;
          .i_1{
            position: absolute;
            top: 5/@rem;
            left: 130/@rem;
            width: 20/@rem;
            height: 10/@rem;
            background-image: url("./jiage_up.png");
            background-repeat: no-repeat;
            background-size: cover;
          }
          .i_2{
            position: absolute;
            top: 25/@rem;
            left: 133/@rem;
            width: 16/@rem;
            height: 10/@rem;
            background-image: url("./jiage_down.png");
            background-repeat: no-repeat;
            background-size: cover;
          }
        }
      }
    }
    .shop_list{
      width: 100%;
      margin-top: 25/@rem;
      position: relative;
      .cart{
        position: absolute;
        bottom: 60/@rem;
        right: 30/@rem;
        width: 60/@rem;
        height: 60/@rem;
        img{
          display: inline-block;
          width: 100%;
          height: auto;
        }
      }
      .list{
        width: 100%;
        height: 247/@rem;
        position: relative;
        .hr{
          height: 1px;
          width: 100%;
          position: absolute;
          background: rgba(158, 158, 158,.3);
          bottom: 0;
        }
        .shop_img{
          width: 200/@rem;
          height: 200/@rem;
          margin-left: 24/@rem;
          img{
            display: inline-block;
            width: 100%;
            height: auto;
          }
        }
        .shop_right{
          width: 520/@rem;
          div{
            font-size: 26/@rem;
            font-weight: 500;
            margin-left: 30/@rem;
            margin-top: 10/@rem;
          }
          .num{
            color: red;
            font-weight: 500;
          }
          .title{
            line-height: 40/@rem;
            a{
              color: black;
            }
          }
          .last{
            i{
              font-style: normal;
              font-size: 24/@rem;
              color:#9E9E9E ;
            }
            em{
              font-style: normal;
              font-size: 24/@rem;
              color:#9E9E9E ;
              margin-left: 15/@rem;
            }
          }
        }
      }
    }
    .load_more{
      width: 100%;
      height: 133/@rem;
      background: #F5F5F5;
      text-align: center;
      line-height: 125/@rem;
      span{
        font-size: 28/@rem;
      }
    }

  }
</style>
