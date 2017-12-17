<template>
  <div class="own_container">
    <div class="own_head">
      <a href="#"> <i class="head_img_1"></i></a>
      <i class="head_img_2"></i>
      <div class="head_content clearfix">
        <div class="head_content_div1 f_l">
          <img src="./8.jpg">
        </div>
        <div class="head_content_div2 f_l">
          <p>jasonlwy</p>
          <span>VIP俱乐部
                            <img class="img" src="./v0.png" alt="">
                        </span>
          <i class="ead_content_div2_img"></i>
        </div>
      </div>
    </div>
    <!--用户服务组件-->
    <div class="own_pagelist">
      <ul class="f_l clearfix">
        <li>
          <a href="#">
            <img src="images/not_pay.png" alt=""><br>
            <span>待付款</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="images/not_get.png" alt=""><br>
            <span>待收货</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="images/not_discount.png" alt=""><br>
            <span>待评价</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="images/all_order.png" alt=""><br>
            <span>全部订单</span>
          </a>
        </li>
      </ul>
    </div>
    <!--服务组件2-->
    <div class="own_pagelist">
      <ul class="f_l clearfix">
        <li>
          <a href="#">
            <span>10</span><br>
            <span>待付款</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>0</span><br>
            <span>待收货</span>
          </a>
        </li>
        <li>
          <a href="#">
            <span>0.00</span><br>
            <span>待评价</span>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="images/bullde_inco.png" alt=""><br>
            <span>全部订单</span>
          </a>
        </li>
      </ul>
    </div>
    <!--list组件群体-->
    <div class="taobao_order">
      <img src="./vip_icon.png" alt=""><span>VIP俱乐部</span>
    </div>
    <div class="taobao_order">
      <img src="./E_icon.png" alt=""><span>我的E宠团</span>
    </div>
    <div class="taobao_order">
      <img src="./discount_icon.png" alt=""><span>我的评价</span>
    </div>
    <div class="taobao_order">
      <img src="./zixun_icon.png" alt=""><span>我的咨询</span>
    </div>
    <div class="taobao_order">
      <img src="./shoujie_icon.png" alt=""><span>我的收藏</span>
    </div>
    <!--补白-->
    <div class="while"></div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped lang="less">
  @rem:750/16rem;
  .own_container {
    width: 100%;
    position: relative;
    background: #F3F4F5;
    .own_pagelist{
      width: 100%;
      height: 177/@rem;
      margin-top: 20/@rem;
      background: #FFFFFF;
      ul{
        width: 100%;
        display: flex;
        text-align: center;
        li{
          margin-top: 30/@rem;
          float: left;
          flex: 1;
          a{
            display: inline-block;
            img{
              display: inline-block;
              width: 55/@rem;
              height: 50/@rem;
            }
            span{
              color: #000;
              font-weight: 600;
              font-size: 28/@rem;
            }
          }
        }
      }
    }
    .own_head{
      width: 100%;
      height:333/@rem;
      position: relative;
      background-image: url("./bg.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      .head_img_1{
        position: absolute;
        top:63/@rem;
        right: 123/@rem;
        width: 44/@rem;
        height:44/@rem;
        background-image: url("./setting.png");
        background-repeat: no-repeat;
        background-size: cover;
      }
      .head_img_2{
        position: absolute;
        top:63/@rem;
        right: 53/@rem;
        width: 44/@rem;
        height: 44/@rem;
        background-image: url("./newn.png");
        background-repeat: no-repeat;
        background-size: cover;
      }
      .head_content{
        width: 560/@rem;
        height: 160/@rem;
        position: absolute;
        top: 125/@rem;
        left: 30/@rem;
        .head_content_div1{
          width: 156/@rem;
          img{
            width: 150/@rem;
            height: auto;
            border-radius: 50%;
          }
        }
        .head_content_div2{
          width: 200/@rem;
          font-size: 28/@rem;

          .ead_content_div2_img{
            position: absolute;
            top:43/@rem;
            right: 13/@rem;
            width: 174/@rem;
            height: 59/@rem;
            background-image: url("./plus6.png");
            background-repeat: no-repeat;
            background-size: cover;
          }
          p{
            color: #FFFFFF;
          }
          span{
            display: inline-block;
            margin-top: 15/@rem;
            background: salmon;
            text-align: center;
            line-height: 50/@rem;
            width: 200/@rem;
            height: 50/@rem;
            border-radius: 20/@rem;
            color: #FFFFFF;
            .img{
              display: inline-block;
              width:30/@rem;
              height:30/@rem;
            }
          }
        }
      }
    }

    .taobao_order {
      width: 100%;
      height: 113/@rem;
      background: #FFFFFF;
      margin-top: 20/@rem;
      position: relative;
      img {
        width: 40/@rem;
        margin-left: 20/@rem;
        margin-top: 40/@rem;
      }
      span {
        position: absolute;
        left: 83/@rem;
        top: 44/@rem;
        font-size: 28/@rem;
      }
    }
    .while {
      height: 135/@rem;
    }
  }
</style>
