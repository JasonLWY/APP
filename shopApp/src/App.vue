<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
    <f-footer></f-footer>
  </div>
</template>

<script>
  import FFooter from 'components/footer/footer'
  import axiox from 'axios'
  export default {
    name: 'app',
    components: {
      FFooter
    },
    mounted () {
      // 发送ajax请求获取seller并更新状态
      this.$store.dispatch('reqDynamic')
      this.$store.dispatch('reqCategory')
      this.$store.dispatch('reqCategoryList')
      this.$store.dispatch('reqBrands')
    },
  }
</script>

<style scoped lang="less">
  @import "~common/css/public.less";
</style>
