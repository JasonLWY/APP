<template>
  <div class="index_head">
    <div class="head_top">
      <!--{{menus}}-->
      <span class="span1">狗狗站</span>
      <div class="span2"></div>
      <span class="span3">深圳</span>
      <input @click="search" class="search" type="text" placeholder="搜索商品和品牌">
      <i class="search_img"></i>
      <a href="#"> <i class="chat_img"></i></a>
    </div>
    <div class="head_bottom clearfix" ref="muns_slider">
      <ul id="#wrapper" class="bottom_ul">
        <li v-for="(item, index) in menus">
          <a href="#">{{item.menu_name}}</a>
        </li>
      </ul>
    </div>
    <div class="hr"></div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  export default {
    mounted() {
     this._initScroll()
    },
    methods: {
      /*跳转到search路由组件*/
      search() {
        this.$router.push('/search');
      },
      _initScroll() {
        this.menusDcroll = new BScroll(this.$refs.muns_slider, {
          click: true,
          scrollX: true,
        })
      }
    },
    computed: {
      ...mapState(['menus'])
    }
  }
</script>
<style lang="less">
  @rem: 750/16rem;
  .index_head {
    width: 100%;
    height: 190/@rem;
    position: relative;
    .head_top {
      width: 100%;
      height: 70/@rem;
      margin-top: 0/@rem;
      position: relative;
      input {
        padding: 10/@rem 0;
        margin-left: 15/@rem;
        border-radius: 10/@rem;
        background: #E9E9E9;
        color: #000000;
        width: 439/@rem;
        padding-left: 24/@rem;
      }
      span {
        color: #908B8D;
        font-size: 28/@rem;
        font-weight: 600;
      }
      .span1 {
        margin-left: 20/@rem;
      }
      .span2 {
        position: absolute;
        top: 10/@rem;
        left: 108/@rem;
        height: 50/@rem;
        width: 2px;
        background: #908B8D;
      }
      .search_img {
        position: absolute;
        top: 30/@rem;
        right: 118/@rem;
        display: inline-block;
        width: 24/@rem;
        height: 24/@rem;
        background-image: url("./search.png");
        background-repeat: no-repeat;
        background-size: cover;
      }
      .chat_img {
        display: inline-block;
        position: absolute;
        top: 20/@rem;
        right: 30/@rem;
        width: 40/@rem;
        height: 40/@rem;
        background-image: url("./chat.png");
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    .head_bottom {
      width: 100%;
      margin-top: 40/@rem;
      overflow: hidden;

      .bottom_ul {
        width: 144%;
        display: flex;
        text-align: center;
        padding-right: 40/@rem;
        li {
          flex: 1;
          float: left;
          a {
            display: inline-block;
            font-size: 28/@rem;
            font-weight: 600;
            color: #706D73;
          }
          .current {
            color: #389C42;
            border-bottom: 2px solid #389C42;;
          }
        }
      }
    }
    .hr {
      width: 684/@rem;
      height: 1px;
      position: absolute;
      background: rgba(112, 109, 115, .5);
      bottom: 0;
      left: 46/@rem;
    }
  }
</style>
