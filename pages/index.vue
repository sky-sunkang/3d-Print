<template>
  <div>
    <V-HeadBanner class="top-bottom"/>
    <V-HeadNev class="top-bottom" selectNev="index"/>
    <div class="container bottom-top">
      <div class="content-wapper ">
        <el-container>
            <V-Left />
          <el-main class="right-left">
            <!--产品展示-->
            <div class="productList">
              <div class="listTitle" >
                <span class="listTitleName" >产品展示</span>
                <NuxtLink to="/list/products"><span class="listTitleMore">MORE+</span></NuxtLink>
              </div>
              <div class="productDiv">
                <el-card class="product" :body-style="{ padding: '0px' }" v-for="(product,index) in products" :key="index" >
                  <NuxtLink :to="{path:'/detail/product/'+product.id}">
                    <div class="productImg">
                      <el-image :src="'//sk-yye.cn:8080/publiccms/webfile/'+product.cover"> <div slot="placeholder" class="image-slot">玩命加载中...</div></el-image>
                    </div>
                    <div >
                      <span v-bind:title="product.title">{{product.title}}</span>
                      <span class="time">{{dateFormat(product.publishDate) }}</span>
                    </div>
                  </NuxtLink>
                </el-card>
              </div>
            </div>

            <!--公司介绍-->
            <div class="companyProfile">
              <div class="listTitle">
                <span class="listTitleName" >企业档案</span>
              </div>
              <div class="companyProfileDiv">
                <div class="companyProfileText">
                  <el-image :src="'//sk-yye.cn:8080/publiccms/webfile/'+company.cover"> <div slot="placeholder" class="image-slot">玩命加载中...</div></el-image>
                  {{company.description}}
                </div>
              </div>
            </div>

            <!--文章列表-->
            <div class="newsList">
              <div class="listTitle">
                <span class="listTitleName" >新闻列表</span>
                <NuxtLink to="/list/news"><span class="listTitleMore">MORE+</span></NuxtLink>
              </div>
              <ul class="news-ul" >
                <a href="#" >
                  <li v-for="newObj in news">
                    <NuxtLink :to="{path:'/detail/news/'+newObj.id}">
                      <span class="new-title">{{newObj.title}}</span>
                      <span class="new-date">{{dateFormat(newObj.publishDate) }}</span>
                      <span class="new-desc">{{newObj.description}}</span>
                    </NuxtLink>
                  </li>
                </a>
              </ul>
            </div>
          </el-main>
        </el-container>
      </div>
    </div>
  </div>
</template>

<script>
  import HeadNev from '~/components/HeadNev'
  import HeadBanner from '~/components/HeadBanner'
  import Left from '~/components/Left'
  export default{
    data(){
      return {
        banners:[require("~/assets/images/banner-1.jpg"),require("~/assets/images/banner-2.jpg")],
        producrImg:require("~/assets/images/product.png")
      }
    },
    head(){
      return {
        title: '汇通3D打印科技有限公司,深圳3D打印服务,深圳有哪些3D打印加工,龙华有哪些3D打印手板模型,龙华3D打印,罗湖有哪些3D打印模型,广州有哪些3D打印,东莞有哪些3D打印模型,东莞,惠州,中山,佛山,珠海,江门3D打印手板',
        meta: [
          { hid: 'keywords', name: 'keywords', content:'深圳3D打印加工,龙华3D打印模型,宝安3D手板模型,龙岗3D手板模型,韶关3D打印模型,惠州3D打印模型,东莞3D打印手板模型,佛山3D打印手板模型,中山3D打印模型,江门3D打印手板'},
          { hid: 'description', name: 'description', content:  '深圳汇通3D打印科技有限公司是从事3D打印,3D打印服务,手板模型制造,模型设计开发的专业型公司。目前公司拥有数十几台尖端工业级3D打印机及相关配套设。在消费类电子产品、家电产品、汽车制造、医疗器械、通讯产品、工艺礼品、 玩具公仔等领域得到广泛用。深圳汇通三维始终坚信，3D打印将为中国制造提供丰富 的解决方案并贡献自己强大的力量，我们也将一如既往的站在3D打印技术最前沿与中国制造一同成长！'}
        ]
      }
    },
    created () {
    },
    computed: {
    },methods:{
//      async fetchSomething() {
//        const ip = await this.$axios.$get('http://icanhazip.com')
//        this.ip = ip
//      },
      //时间格式化函数，此处仅针对yyyy-MM-dd hh:mm:ss 的格式进行格式化
      dateFormat(time) {
        var date=new Date(time);
        var year=date.getFullYear();
        /* 在日期格式中，月份是从0开始的，因此要加0
         * 使用三元表达式在小于10的前面加0，以达到格式统一  如 09:11:05
         * */
        var month= date.getMonth()+1<10 ? "0"+(date.getMonth()+1) : date.getMonth()+1;
        var day=date.getDate()<10 ? "0"+date.getDate() : date.getDate();
        var hours=date.getHours()<10 ? "0"+date.getHours() : date.getHours();
        var minutes=date.getMinutes()<10 ? "0"+date.getMinutes() : date.getMinutes();
        var seconds=date.getSeconds()<10 ? "0"+date.getSeconds() : date.getSeconds();
        // 拼接
        return year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
      }
    },
    async asyncData({ $axios }) {
      //产品
      const res = await $axios.$get('/api/directive/contentList?showParameters=false&categoryId=122&pageIndex=1&count=8')
      //企业档案
      const companyRes = await $axios.$get('/api/directive/contentList?showParameters=false&categoryId=123&pageIndex=1&count=1')
      //新闻动态
      const newsRes = await $axios.$get('/api/directive/contentList?showParameters=false&categoryId=124&pageIndex=1&count=5')
      return {company:companyRes.page.list[0], products:res.page.list,news:newsRes.page.list}
    },
    components: {
      'V-HeadBanner': HeadBanner,
      'V-HeadNev': HeadNev,
      'V-Left':Left
    }
  }
</script>

<style>
  body{
    margin: 0;
    color: #666666;
    letter-spacing:1px;
  }
  body li{
    list-style:none;
  }
  body a {
    text-decoration: none;
  }
  body a:hover {
    /*color: #faaf5c;*/
  }
  .container {
    margin-top: 20px;
  }
  .content-wapper{
    width: 1200px;
    min-height: 500px;
    margin: 0 auto;
  }
  .image-slot{
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  /*左边导航*/
  .el-aside{
    margin-top: 10px;
  }

  /*右边内容*/
  .el-main {
    padding: 0px 0px 0px 20px;
    margin-top: 10px;
  }

  .listTitle {
    border-bottom: 1px solid black;
  }

  .listTitleName {
    display: inline-block;
    width: 100px;
    height: 45px;
    background-color: black;
    color: white;
    line-height: 45px;
    text-align: center
  }

  .listTitleMore {
    float: right;
    color: black;
    display: inline-block;
    height: 45px;
    line-height: 45px;
    margin-right: 5px;
    cursor: pointer;
  }

  /*新闻列表*/
  .newsList{
    /*margin-top: 10px;*/
    clear: both;
  }
  .news-ul {
    padding-left: 0px;
    margin: 0px;
  }

  .news-ul a {
    color: #666666;
  }

  .news-ul li {
    height: 70px;
    line-height: 30px;
    border-bottom: 1px dotted #e0e0e0;
    padding: 10px 10px;
  }

  .new-title {
    float: left;
    display: inline-block;
    line-height: 25px;
    height: 27px;
    color: black;
  }
  .news-ul .new-title:hover , .news-ul .new-desc:hover, .news-ul .new-date:hover{
    color: #faaf5c;
  }

  .new-desc{
    display: block;
    width: 100%;
    overflow: hidden;
    word-break: normal;
    text-overflow: ellipsis;
    font-size: 13px;
    line-height: 20px;
    height: 40px;
    float: left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  .new-date {
    float: right;
    display: inline-block;
    font-size: 12px;
    line-height: 25px;
    height: 25px;
  }
  /*产品*/
  .productList {

  }
  .productDiv{
    margin-top: 20px;
  }
  .product{
    width: 210px;
    margin-left: 26px;
    float: left;
    cursor: pointer;
    margin-bottom: 30px;
  }
  .product .productImg{
    width: 210px;
    height: 160px;
    overflow: hidden;
  }
  .product .el-image{
    width: 100%;
    height: 100%;
  }
  .product:hover .el-image{
    transform: scale(1.1);
  }
  .product span{
    width: 100%;
    height: 30px;
    line-height: 30px;
    display: inline-block;
    text-align: center;
    overflow:hidden;
    text-overflow:ellipsis;
    color: #666666;
  }
  .product span.time{
    font-size: 13px;
    color: #999;
    height: 15px;
    line-height: 11px;
  }

  /*公司简介*/
  .companyProfile{
    clear: both;
  }
  .companyProfileDiv{
    padding: 10px;
  }
  .companyProfileText .el-image{
    width: 300px;
    height: 290px;
    float:left;
    margin-right: 20px;
  }

  .companyProfileText{
    vertical-align: top;
    line-height: 30px;
    margin-bottom: 30px;
  }

  /*地图*/
  #allmap{
    width: 800px;
    height: 500px;
  }
  .el-message-box{
    width: 830px;
    height: 570px;
  }
  .el-message-box__content {
    padding-top: 0px;
  }

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



