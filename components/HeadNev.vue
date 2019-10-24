<template>
  <div>
    <div class="nevTitle">
      <div class="contentWarping">
        <!--<span style="font-size:32px;font-family:'Arial Black';color:#99BB00;">3D &nbsp;<span style="color:#333333;">PRINTING</span></span>-->
        <span >深圳汇通三维打印科技有限公司</span>
      </div>
    </div>
    <div class="nev">
      <div class="nev-wapper">
        <div class="menu-bar">
          <NuxtLink to="/">
            <div class="menu" v-bind:class=" selectNev=='index'?'select':''">
              首页
            </div>
          </NuxtLink>
          <NuxtLink to="/list/products">
            <div class="menu" v-bind:class="selectNev=='product'?'select':''">
              产品展示
            </div>
          </NuxtLink>
          <NuxtLink to="/list/company">
            <div class="menu" v-bind:class="selectNev=='company'?'select':''">
              企业档案
            </div>
          </NuxtLink>
          <NuxtLink to="/list/news">
            <div class="menu" v-bind:class="selectNev=='news'?'select':''">
              新闻动态
            </div>
          </NuxtLink>
          <NuxtLink to="/list/contact">
            <div class="menu" v-bind:class="selectNev=='contact'?'select':''">
              联系方式
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'head-nev',
    props: {
      selectNev: String
    }
  }
</script>

<style scoped>
  .nevTitle {
    height: 80px;
    line-height: 80px;
    font-size:32px;
    color:#0c365c;
    font-weight: bold
  }
  .contentWarping {
    width: 1200px;
    margin: 0 auto;
  }
  .nev{
    height: 50px;
    width: 100%;
    background-color: #0c365c;
  }
  .nev-wapper{
    width: 1200px;
    margin: 0 auto;
  }
  .menu{
    line-height: 50px;
    width: 150px;
    color: white;
    text-align: center;
    font-size:16px;
    float: left;
    font-weight: 400;
    height: 50px;
    margin-left: 1px;
  }
  .menu.select{
    background-color: #057896;
    color: white;
  }
  .menu:hover{
    background-color: #057896;
    color: white;
    cursor: pointer;
  }
</style>
