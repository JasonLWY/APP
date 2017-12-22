<template>
  <scroll
    @scroll="scroll"
    :listen-scroll="listenScroll"
    :probe-type="probeType"
    :data="data"
    class="listview"
    ref="listview"
  >
    <div class="content-list">
      <div class="list" v-for="group in data" ref="listGroup">
        <h2>{{group.order}}</h2>
        <div class="item clearfix" v-for="item in group.list">
          <div class="item-left f_l">
            <img v-lazy="item.logo" alt="">
          </div>
          <div class="item-right f_l">
            <p>{{item.name}}</p>
            <p>{{item.address}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="list-shortcut" @touchstart.stop.prevent="onShortcutTouchStart"
         @touchmove.stop.prevent="onShortcutTouchMove"
         @touchend.stop>
      <ul>
        <li v-for="(item, index) in shortcutList" :data-index="index" class="item"
            :class="{'current':currentIndex===index}">{{item}}
        </li>
      </ul>
    </div>
    <div class="list-fixed" ref="fixed" v-show="fixedTitle">
      <div class="fixed-title">{{fixedTitle}} </div>
    </div>
    <div v-show="!data.length" class="loading-container">
      <loading></loading>
    </div>
  </scroll>
</template>

<script type="text/ecmascript-6">
  import Scroll from 'page/scroll/scroll'
  import Loading from 'page/loading/loading'
  import {getData} from 'common/js/dom'

  const TITLE_HEIGHT = 30
  const ANCHOR_HEIGHT = 18
  export default {
    props: {
      data: {},
    },
    computed: {
      shortcutList() {
        return this.data.map((group) => {
          return group.order.substr(0, 1)
        })
      },
      fixedTitle() {
        if (this.scrollY > 0) {
          return ''
        }
        return this.data[this.currentIndex] ? this.data[this.currentIndex].order : ''
      }
    },
    data() {
      return {
        scrollY: -1,
        currentIndex: 0,
        diff: -1
      }
    },
    created() {
      this.probeType = 3
      this.listenScroll = true
      this.touch = {}
      this.listHeight = []
    },
    methods: {
      selectItem(item) {
        this.$emit('select', item)
      },
      onShortcutTouchStart(e) {
        let anchorIndex = getData(e.target, 'index')
        let firstTouch = e.touches[0]
        this.touch.y1 = firstTouch.pageY
        this.touch.anchorIndex = anchorIndex

        this._scrollTo(anchorIndex)
      },
      onShortcutTouchMove(e) {
        let firstTouch = e.touches[0]
        this.touch.y2 = firstTouch.pageY
        let delta = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0
        let anchorIndex = parseInt(this.touch.anchorIndex) + delta

        this._scrollTo(anchorIndex)
      },
      refresh() {
        this.$refs.listview.refresh()
      },
      scroll(pos) {
        this.scrollY = pos.y
      },
      _calculateHeight() {
        this.listHeight = []
        const list = this.$refs.listGroup
        let height = 0
        this.listHeight.push(height)
        for (let i = 0; i < list.length; i++) {
          let item = list[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
      },
      _scrollTo(index) {
        if (!index && index !== 0) {
          return
        }
        if (index < 0) {
          index = 0
        } else if (index > this.listHeight.length - 2) {
          index = this.listHeight.length - 2
        }
        this.scrollY = -this.listHeight[index]
        this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
      }
    },
    watch: {
      data() {
        setTimeout(() => {
          this._calculateHeight()
        }, 20)
      },
      scrollY(newY) {
        const listHeight = this.listHeight
        // 当滚动到顶部，newY>0
        if (newY > 0) {
          this.currentIndex = 0
          return
        }
        // 在中间部分滚动
        for (let i = 0; i < listHeight.length - 1; i++) {
          let height1 = listHeight[i]
          let height2 = listHeight[i + 1]
          if (-newY >= height1 && -newY < height2) {
            this.currentIndex = i
            this.diff = height2 + newY
            return
          }
        }
        // 当滚动到底部，且-newY大于最后一个元素的上限
        this.currentIndex = listHeight.length - 2
      },
      diff(newVal) {
        let fixedTop = (newVal > 0 && newVal < TITLE_HEIGHT) ? newVal - TITLE_HEIGHT : 0
        if (this.fixedTop === fixedTop) {
          return
        }
        this.fixedTop = fixedTop
        this.$refs.fixed.style.transform = `translate3d(0,${fixedTop}px,0)`
      }
    },
    components: {
      Scroll,
      Loading
    }
  }
</script>
<style scoped  lang="less">
  @import "~common/css/public.less";
  @import "~common/css/variable.less";
  @rem: 750/16rem;
  .listview {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: white;
    .content-list{
      width: 100%;
      .list{
        width: 100%;
        h2{
          width: 100%;
          height: 50/@rem;
          color: #999999;
          font-size: 28/@rem;
          background: #F3F4F5;
          line-height: 50/@rem;
          padding-left: 30/@rem;
        }
        .item{
          width: 100%;
          height: 140/@rem;
          margin-top: 20/@rem;
          border: 1px solid #F3F4F5;
          .item-left {
            width: 205/@rem;
            height: 105/@rem;
            margin-top: 15/@rem;
            margin-left: 20/@rem;
            border: 1px solid #F3F4F5;
            text-align: center;
            img {
              display: inline-block;
              width: 201/@rem;
            }
          }
          .item-right{
            line-height: 2/@rem;
            p{
              padding: 39/@rem 0 0 20/@rem;
              font-size: 25/@rem;
            }
            p:nth-of-type(2) {
              font-size: 19/@rem;
              color: silver;
            }
          }
        }
      }
    }
    .list-shortcut{
      position: absolute;
      z-index: 30;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 20/@rem;
      padding: 20/@rem 0;
      border-radius: 10/@rem;
      text-align: center;
      background: white;
      font-family: 微软雅黑;
      .item{
        padding: 3/@rem;
        line-height: 1;
        color: black;
        font-size: @font-size-small;
        }
      .current{
        color: red;
      }
    }
  }
</style>
