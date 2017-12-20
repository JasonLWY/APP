<template>
  <div class="footer_wrap clearfix">
    <div class="footer" ref="footer">
      <div class="current" @click="select($event)">
        <router-link to="/"><img src="./index_0.png" alt=""><br>主页</router-link>
      </div>
      <div @click="select($event)">
        <router-link to="/category"><img src="./Category_0.png" alt=""><br>分类</router-link>
      </div>
      <div @click="select($event)">
        <router-link to="/cart"><img src="./cart_0.png" alt=""><br>购物车</router-link>
      </div>
      <div @click="select($event)">
        <router-link to="/login"><img src="./account_0.png" alt=""><br>我的</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        AclassName: 'current',
        blank: '',
        current: 'current',
      }
    },
    methods: {
      //footer下标点击颜色切换
      select: function (event) {
        let divs = this.$refs.footer.children
        for (let d of divs) {
          d.className = ""
        }
        let el = event.currentTarget;
        el.className = 'current'
      },
    }
  }
</script>
<style scoped lang="less">
  @rem: 750/16rem;
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
      }
      .current {
        a {
          color: #FCB0BA;
          font-weight: 600;
        }
      }
    }
  }
</style>
