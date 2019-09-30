<template>
  <div class="foot">
    <p>主营产品： 3D打印 手板模型 SLA激光快速成型 3D打印模型 3D打印手板</p>
    <span >Copyright © 2018.粤ICP备18040421号</span>
    <span class="fenge">|</span>
    <span >sk-yye.cn</span>
    <!--<span class="fenge">|</span>
    <span ><img src="~/assets/images/access.png"/>累计访问量<span class="access">100</span></span>-->
  </div>
</template>

<script>
  export default {
    name: 'foot'
  }
</script>

<style scoped>
  .foot{
    height: 60px;
    background-color: black;
    margin-top: 30px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    padding-top: 4px;
  }
  .foot p{
    margin: 5px 0;
    opacity: .8;
  }
  .foot span{
    opacity: .8;
  }
  .fenge{
    margin-left: 20px;
    margin-right: 20px;
  }
  .access{
    color: #BF4D3B;
    margin-left: 5px;
  }
  .foot img{
    vertical-align: middle;
    margin-right: 5px;
  }
</style>
