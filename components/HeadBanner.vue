<template>
  <el-carousel :interval="3000"  arrow="always" :autoplay="true" :loop="true" height="200px">
    <el-carousel-item v-for="banner in banners" :key="banner">
      <el-image :src="banner">
        <div slot="placeholder" class="image-slot">加载中...</div>
      </el-image>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
  export default {
    name: 'head-banner',
    data(){
      return {
        banners:[require("~/assets/images/banner-1.jpg"),require("~/assets/images/banner-2.jpg")]
      }
    }
  }
</script>

<style scoped>
  .el-image,.el-image img{
    width: 100%; height: 200px

  }
</style>
