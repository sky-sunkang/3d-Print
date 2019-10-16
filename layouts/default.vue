<template>
  <div>
    <nuxt />
    <Foot/>
  </div>
</template>
<script>
  import Foot from '~/components/Foot'
  import HeadBanner from '~/components/HeadBanner'
  import HeadNev from '~/components/HeadNev'
  export default {
    data(){
      return {
      }
    },
    watch: {
      "$route": function(){
        //路由变化会触发
      }
    },
    components: {
      'Foot': Foot,
      'V-HeadBanner': HeadBanner,
      'V-HeadNev': HeadNev
    }
  }
</script>
<style>
html {
  font-family: Microsoft YaHei;
  font-size: 14px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
