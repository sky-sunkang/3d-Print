<template>
  <div>
    <nuxt />
    <Foot/>
  </div>
</template>
<script>
  import Foot from '~/components/Foot'
  export default {
    data(){
      return {
      }
    },
    components: {
      'Foot': Foot
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
