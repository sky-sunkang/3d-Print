<template>
  <div class="foot">
    <p>主营产品： 手板加工、CNC手板、3D打印，SLA快速成型、产品抄数测绘、造型及结构等3D/2D图形设计，设计的3D图形可直接进行CNC加工、快速成型及模具制造</p>
    <span >Copyright © 2018.粤ICP备18040421号</span>
    <span class="fenge">|</span>
    <span >深圳汇通三维打印科技有限公司</span>
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
    background-color: rgb(51, 51, 51);
    margin-top: 30px;
    font-size: 12px;
    color: #fff;
    text-align: center;
    padding-top: 4px;
  }
  .foot p{
    margin: 8px 0;
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
