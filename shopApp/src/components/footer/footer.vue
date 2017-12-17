<template>
  <div class="footer_wrap clearfix">
    <div class="footer">
      <div><a class="current" href="#"><img src="./index_1.png" alt=""><br>主页</a></div>
      <div><a href="#"><img src="./Category_0.png" alt=""><br>分类</a></div>
      <div><a href="#"><img src="./cart_0.png" alt=""><br>购物车</a></div>
      <div><a href="#"><img src="./account_0.png" alt=""><br>我的</a></div>
    </div>
  </div>
</template>
<script>
  export default {}
</script>
<style scoped lang="less">
  @rem: 750/16rem;
  .index_container {
    .footer_wrap {
      width: 100%;
      background: #FFFFFF;
      position: absolute;
      bottom: 0;
      .footer {
        width: 100%;
        height: 120/@rem;
        bottom: 0;
        position: fixed;
        background: #fff;
        display: flex;
        text-align: center;
        border-bottom: 1px silver solid;
        border-bottom: 0;
        border-radius: 1/@rem;
        div {
          flex: 1;
          a {
            padding-top: 20/@rem;
            font-size: 28/@rem;
            color: #A7A7A5;
            display: inline-block;
            img {
              width: 40/@rem;
              margin-right: 9/@rem;
            }
          }
          .current {
            color: #FCB0BA;
          }
        }
      }
    }
  }
</style>
