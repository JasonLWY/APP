<template>
  <div class="index_P_buying">
    <div class="P_buying_top">
      <i class="img_left"></i>
      <span class="Seckill">
                        距离本场结束
                        <ul class='f_l clearfix'>
						<li>0</li>
						<li>0</li>
						<li>:</li>
						<li>0</li>
						<li>0</li>
						<li>:</li>
						<li>0</li>
						<li>0</li>
					</ul>
                    </span>
      <i class="img_right"></i>
    </div>
    <div class="P_buying_list">
      <div ref="buys_Sliider">
        <ul class="list_ul clearfix" v-for="(item, index) in buys">
          <li v-for="i in item.goods">
            <a href="#">
              <img :src="i.image.image">
            </a>
            <span>￥{{i.sale_price}}</span><br>
            <span>{{i.little_price}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'

  export default {
    computed: {
      ...mapState(['buys'])
    },
    mounted() {
      this._initScroll()
    },
    methods: {
      /* _initSlidershop() {
         this.ssss = new BScroll(this.$refs.buys_Sliider, {
           click: true,
           scrollX: true
         })
       }*/
      _initScroll() {
        this.menusScroll = new BScroll(this.$refs.buys_Sliider, {
          click: true,
          scrollX: true,
        })
      }
    }
  }
</script>
<style scoped lang="less">
  @rem: 750/16rem;
  .index_P_buying {
    width: 100%;
    height: 400/@rem;
    position: relative;
    background: #ffffff;
    .P_buying_top {
      width: 100%;
      margin-top: 30/@rem;
      .img_left {
        margin: 28/@rem 0 0 0;;
        position: absolute;
        top: 0;
        left: -25/@rem;
        width: 230/@rem;
        height: 60/@rem;
        background-image: url("./suprice.png");
        background-repeat: no-repeat;
        background-size: cover;
      }
      text-align: center;
      line-height: 90/@rem;
      .Seckill {
        display: block;
        position: relative;
        font-size: 28/@rem;
        margin-left: -100/@rem;
        /*i{
          font-style: normal;
          border: 1px solid #A7A7A5;
          padding: 5/@rem 5/@rem 5/@rem 5/@rem;
        }*/
        ul {
          width: 149/@rem;
          position: absolute;
          left: 525/@rem;
          top: 19/@rem;
          line-height: 50/@rem;
          background: #A2EE7C;
          border-radius: 10/@rem;
          padding-left: 20/@rem;
          box-shadow: 1px 1px #33DA82;
          li {
            height: 50/@rem;
            float: left;
          }
        }
      }
      .img_right {
        position: absolute;
        top: 34/@rem;
        right: 32/@rem;
        width: 100/@rem;
        height: 50/@rem;
        background-image: url("./more1.png");
        background-repeat: no-repeat;
        background-size: cover;
      }
    }
    .P_buying_list {
      width: 100%;
      overflow: hidden;
      margin-top: 50/@rem;
      .list_ul {
        width: 125%;
        height: 245/@rem;
        display: flex;
        text-align: center;
        padding-right: 40/@rem;
        li {
          flex: 1;
          float: left;
          position: relative;
          a {
            display: inline-block;
            width: 160/@rem;
            height: 160/@rem;
            display: inline-block;
            font-size: 28/@rem;
            font-weight: 600;
            color: #706D73;
            img {
              display: inline-block;
              width: 100%;
            }
          }
          span:nth-of-type(1) {
            font-style: normal;
            color: red;
            font-size: 28/@rem;
            font-weight: 600;
            position: absolute;
            bottom: 40/@rem;
            left: 50/@rem;
          }
          span:nth-of-type(2) {
            color: #A7A7A5;
            font-style: normal;
            font-size: 14/@rem;
            position: absolute;
            bottom: 0/@rem;
            left: 50/@rem;
          }
        }
      }
    }
  }
</style>
