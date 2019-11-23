<template>
  <div>
    <nuxt />
    <Foot/>
    <a class="contactFlolt" target="_blank" href="https://wpa.qq.com/msgrd?v=3&amp;uin=2850763601&amp;site=qq&amp;menu=yes" rel="nofollow">
      <img src="~/assets/images/index/QQ.png" width="20" height="20"/>
    </a>
    <div class="contactFlolt">
      <img src="~/assets/images/index/3Dprintweixin.jpg" width="20" height="20"/>
    </div>
    <el-backtop :bottom="20"><i class="el-icon-top" ></i></el-backtop>
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
.contactFlolt {
  position: fixed;
  background-color: #FFF;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #409EFF;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  font-size: 20px;
  box-shadow: 0 0 6px rgba(0,0,0,.12);
  cursor: pointer;
  z-index: 5;
}
a.contactFlolt {
  right: 40px;
  bottom: 120px;
}
div.contactFlolt {
  right: 40px;
  bottom: 70px;
  z-index: 10;
}
div.contactFlolt img:hover{
  transform: scale(6);
}
</style>
