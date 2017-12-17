<template>
  <div class="search_container">
    <div class="search_head">
      <span class="back_img"></span>
      <input type="text" placeholder="搜索目的地"/>
      <span class="search_img"></span>
      <span class="line"></span>
      <!--在vue 设计中使用this.$router.back路由回到之前点技搜索的页面-->
      <a href="javascript: ;" @click="back">取消</a>
      <div class="hr"></div>
    </div>
    <!--精选推荐组件-->
    <div class="search_recommend">
      <div class="recommend_title">
        <i></i>
        <span>精品推荐</span>
      </div>
      <div class="recommend_content">
        <div class="content_list">
          <span>牛油果</span>
          <span>牛油果</span>
          <span>牛油果</span>
          <span>牛油果</span>
          <span>牛油果</span>
        </div>
      </div>
    </div>
    <div class="search_recommend history">
      <div class="recommend_title">
        <i></i>
        <span>最近搜索</span>
      </div>
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
  @import "~common/css/public";
  @rem:750/16rem;
  .search_container {
    width: 100%;
    background: #F4F5F7;
    .search_head {
      width: 100%;
      height: 85/@rem;
      background: #FFFFFF;
      position: relative;
      .hr {
        height: 1px;
        width: 100%;
        position: absolute;
        bottom: 0;
        background: #E1E9F0;;
      }
      .line {
        display: inline-block;
        width: 1px;
        height: 60/@rem;
        background: #E1E9F0;
        position: absolute;
        top: 15/@rem;
        right: 100/@rem;
      }
      a {
        position: absolute;
        top: 20/@rem;
        right: 20/@rem;
        color: #000000;
        font-size: 34/@rem;
        font-weight: 500;
      }
      input {
        display: inline-block;
        width: 550/@rem;
        padding-top: 13/@rem;
        padding-left: 5/@rem;
        padding-bottom: 13/@rem;
        margin-top: 10/@rem;
        margin-left: 75/@rem;
      }
      .back_img{
        display: inline-block;
        width: 50/@rem;
        height: 50/@rem;
        position: absolute;
        top: 15/@rem;
        left: 10/@rem;
        background-image: url("./back.png");
        background-repeat: no-repeat;
        background-size: cover;
      }
      .search_img {
        display: inline-block;
        width: 40/@rem;
        height: 40/@rem;
        position: absolute;
        top: 25/@rem;
        right:135/@rem;
        background-image: url("./search.png");
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    .search_recommend{
      width: 100%;
      height: 320/@rem;
      margin-top: 10/@rem;
      background: #FBFBFD;
      .recommend_title{
        width: 100%;
        position: relative;
        i{
          position: absolute;
          top:16/@rem;
          left: 22/@rem;
          width: 44/@rem;
          height:44/@rem;
          background-image: url("./rmss.png");
          background-repeat: no-repeat;
          background-size: cover;
        }
        span{
          margin-left: 85/@rem;
          font-size: 33/@rem;
          font-weight: 500;
          color:#666A6D;
        }
      }
      .recommend_content{
        width: 100%;
        height: 260/@rem;
        .content_list{
          width: 100%;
          margin-top: 10/@rem;
          display: flex;
          text-align: center;
          background: #F4F5F7;
          span{
            display: inline-block;
            flex: 1;
            height: 60/@rem;
            margin-top: 30/@rem;
            color:#666A6D;
            line-height: 60/@rem;
            background: #FFFFFF;
            font-size: 25/@rem;
            border-radius: 10/@rem;
          }
        }
      }
    }
    .history{
      background: #fff;
    }
  }
</style>
