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
      this.$store.dispatch('reqGoods')
    },
  }
</script>

<style scoped lang="less">
</style>
