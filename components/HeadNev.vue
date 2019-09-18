<template>
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
        <!--<NuxtLink to="/list/company">-->
        <div class="menu">
          联系方式
        </div>
        <!--</NuxtLink>-->
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
  .nev{
    height: 50px;
    width: 100%;
    background-color: black;
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
    background-color: white;
    color: black;;
  }
  .menu:hover{
    background-color: white;
    color: black;
    cursor: pointer;
  }
</style>
