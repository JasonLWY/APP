<template>
  <div class="cart_container">
    <div class="cart_header">
      <!--在vue不用 a 标签  直接路由回调 this.$router.back 既可以-->
      <a href="javascript: ;" @click="back" class="back_img"></a>
      <span>购物车</span>
      <div class="header_hr"></div>
      <i class="head_right_img"></i>
    </div>
    <!--没有登陆时候-->
    <div class="cart_content">
      <span class="not_login_image"></span>
      <br>
      <a class="login_btn" href="#">去逛逛</a>
      <a class="login_btn" href="#">我的收藏</a>
    </div>
  </div>
</template>

<script>
    export default {
      methods: {
        back() {
          this.$router.back()
        }
      }

    }
</script>
<style scoped lang="less">
  @rem:750/16rem;

  .cart_container{
    width: 100%;
    background: #FFFFFF;
    .cart_header{
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
    .cart_content{
      height:1227/@rem;
      width: 100%;
      text-align: center;
      .not_login_image{
        margin-top: 345/@rem;
        display: inline-block;
        background-color: #F3F5F8;
        width: 400/@rem;
        height: 400/@rem;
        background:url("./cart.jpg");
        background-size: cover  ;
      }
      .login_btn{
        display: inline-block;
        border: 1px solid #CBCBCB;
        height: 80/@rem;
        width: 260/@rem;
        text-align: center;
        line-height: 70/@rem;
        border-radius: 20/@rem;
        font-size: 28/@rem;
        font-weight: 600;
        color:#CBCBCB;
      }
    }
  }
</style>
