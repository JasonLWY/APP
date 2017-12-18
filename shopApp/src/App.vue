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
    }
  }
</script>

<style scoped lang="less">
</style>
