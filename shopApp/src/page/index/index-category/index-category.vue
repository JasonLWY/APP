<template>
  <div class="index_category">
    <div class="category_1">
      <ul class="clearfix">
        <li v-for="item in goods[2].menus">
          <a href="#"><img :src="item.image" alt=""></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
    export default {
      computed: {
        ...mapState(['goods'])
      }
    }
</script>
<style scoped lang="less">
  @rem:750/16rem;
  .index_category {
    width: 100%;
    height: 366/@rem;
    background: #ffffff;
    .category_1 {
      width: 100%;
      margin-top: 0/@rem;
      ul {
        width: 100%;
        text-align: center;
        li {
          float: left;
          a {
            img {
              width: 145/@rem;
            }
          }
        }
      }
    }

  }
</style>
