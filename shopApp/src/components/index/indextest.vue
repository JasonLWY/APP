<template>
    <div>
      {{goods}}
      <!--头部组件-->
      <index-header></index-header>
      <!-- {{goods}}-->
      <!--轮播组件-->
      <index-carousel></index-carousel>
      <!--分类组件-->
      <index-category></index-category>
      <!--抢购组件-->
      <index-buys></index-buys>
      <!--discount组件-->
      <div class="index_discount">
        <div class="discount_img" v-if="goods[5]">
          <img :src="goods[5].content_images[0][0].image">
        </div>
      </div>
      <!--recommend组件-->
      <div class="index_recommend clearfix">
        <div class="recommend_imgR f_l">
          <img :src="goods[7].content_images[0][0].image" alt="">
        </div>
        <div class="hr"></div>
        <div class="recommend_imgL f_r">
          <div class="img1"><img :src="goods[7].content_images[1][0].image" alt=""></div>
          <div class="hr"></div>
          <div class="img2 clearfix"><img :src="goods[7].content_images[1][1].image" alt=""></div>
        </div>
      </div>
      <!--sale组件-->
      <div class="index_sale">
        <div class="sale_top">
          <i class="img_left"></i>
          <i class="img_right"></i>
        </div>
        <!--{{goods[13].content_images[0][0].image}}-->
        <div class="sale_list">
          <img :src="goods[13].content_images[0][0].image" alt="">
        </div>
        <div class="sale_list">
          <img :src="goods[15].content_images[0][0].image" alt="">
        </div>
        <div class="sale_list">
          <img :src="goods[17].content_images[0][0].image" alt="">
        </div>
        <div class="sale_list">
          <img :src="goods[19].content_images[0][0].image" alt="">
        </div>
        <div class="sale_list">
          <img :src="goods[21].content_images[0][0].image" alt="">
        </div>
        <div class="sale_list">
          <img :src="goods[23].content_images[0][0].image" alt="">
        </div>
        <div class="sale_list">
          <img :src="goods[25].content_images[0][0].image" alt="">
        </div>
      </div>
      <!--体验馆组件-->
      <index-experience></index-experience>
      <!--萌宠说video组件-->
      <div class="index_experience_hall adorable_pet">
        <i class="play"></i>
        <div class="experience_hall_top adorable_pet_top">
          <i class="img_left"></i>
          <i class="img_right"></i>
        </div>
        <!--{{goods[32].value} [{}]}//需要遍历-->
        <div class="sale_list adorable_pet_list" v-for="item in goods[32].value">
          <img :src="item.cover.image" alt="">
        </div>
        <div v-for="item in goods[32].value">
          <div class="adorable_pet_text">{{item.share_target.param.title}}</div>
          <div class="adorable_pet_look"><i>观看数</i><i></i><i>{{item.visit}}</i></div>
        </div>
      </div>
      <!--小剧场 video-->
      <div class="index_experience_hall adorable_pet Theatre">
        <i class="play"></i>
        <div class="experience_hall_top adorable_pet_top Theatre_top">
          <i class="img_left"></i>
          <i class="img_right"></i>
        </div>
        <div class="sale_list adorable_pet_list" v-for="item in goods[35].value">
          <img :src="item.cover.image" alt="">
        </div>
        <div v-for="item in goods[35].value">
          <div class="adorable_pet_text">{{item.share_target.param.title}}</div>
          <div class="adorable_pet_look"><i>观看数</i><i></i><i>{{item.visit}}</i></div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {}
</script>
<style lang="less">

</style>
