<template>
  <el-carousel :interval="5000" arrow="always" height="200px">
    <el-carousel-item v-for="banner in banners" :key="banner">
      <el-image style="width: 100%; height: 200px" :src="banner">
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
        banners:[require("~/assets/images/banner-1.jpg"),require("~/assets/images/banner-2.jpg")],
        producrImg:require("~/assets/images/banner-1.jpg")

      }
    }
  }
</script>

<style scoped>

</style>
