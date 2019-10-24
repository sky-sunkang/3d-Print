<template>
  <div>
    <V-HeadNev selectNev="index"/>
    <V-HeadBanner />
    <div class="container">
      <div class="content-wapper ">
        <!--我们的优势 begin-->
        <div class="classify" style="background: url(images/bg.png) no-repeat center center">
          <div class="classifyContent">
            <p align="center">
              <span class="classifyTitle" >我们的优势</span>
            </p>
            <p align="center">
              <span class="classifyTitleUsa">OUR&nbsp;ADVANTAGES</span>
            </p>
          </div>
        </div>
        <div class="advantageDiv">
          <div class="advLeft">
            <div class="advLi">
              <div class="advLiLeft">
                <img src="~/assets/images/index/team.png" width="50" height="50"/>
              </div>
              <div class="advLiRight">
                <p class="advLiTitleMain">高素质的研发生产团队</p>
                <p class="advLiTitle">公司下属有员工100余名。其中高级技术人员30多名；核心生产团队行业经验平均有5年以上；</p>
              </div>
            </div>
            <div class="advLi avdMagin">
              <div class="advLiLeft">
                <img src="~/assets/images/index/factory.png" width="50" height="50"/>
              </div>
              <div class="advLiRight">
                <p class="advLiTitleMain">强大的产品生产能力</p>
                <p class="advLiTitle">经过多年的不断更新改造和扩建，厂房现已发展成为占地2000多平方米，拥有一百台进口打印设备，可打印多种材料</p>
              </div>
            </div>
            <div class="advLi avdMagin">
              <div class="advLiLeft">
                <img src="~/assets/images/index/advLi3.png" width="50" height="50"/>
              </div>
              <div class="advLiRight">
                <p class="advLiTitleMain">严格的产品质检工序</p>
                <p class="advLiTitle">质检员会严格对产品的牌号、规格、数量、标示情况、质量证明文件、包装有无破损等进行检查验收</p>
              </div>
            </div>
          </div>
          <el-image :src="adv" class="advRight">
            <div slot="placeholder" class="image-slot">
              <img class="loddingImg" src="~/assets/images/loading.gif" width="100" height="100" />
            </div>
          </el-image>
        </div>
        <!--我们的优势 end-->
        <!--产品展示 begin-->
        <div class="classify" style="background: url(images/bg.png) no-repeat center center;margin-top: 50px">
          <div class="classifyContent">
            <p align="center">
              <span class="classifyTitle" >产品展示</span>
            </p>
            <p align="center">
              <span class="classifyTitleUsa">PRODUCT&nbsp;CENTER</span>
            </p>
          </div>
        </div>
        <div class="productList">
          <div class="productDiv">
            <el-card class="product" :body-style="{ padding: '0px' }" v-for="(product,index) in products" :key="index" >
              <NuxtLink :to="{path:'/detail/product/'+product.id}">
                <div class="productImg">
                  <el-image :src="'//sk-yye.cn:8080/publiccms/webfile/'+product.cover" :alt="product.title">
                    <div slot="placeholder" class="image-slot"><img class="loddingImg" src="~/assets/images/loading.gif" width="100" height="100" /></div>
                  </el-image>
                </div>
                <div >
                  <span v-bind:title="product.title">{{product.title}}</span>
                  <span class="time">{{dateFormat(product.publishDate,'yyyy-MM-dd hh:mm:ss') }}</span>
                </div>
              </NuxtLink>
            </el-card>
          </div>
        </div>
        <!--产品展示 end-->
      </div>
      <!--关于我们 begin-->
      <div class="aboutBg" :style="'background: url('+this.aboutBg+') no-repeat center center;'">
        <div class="content-wapper">
          <div class="classify" style="background: url(images/bg_bai_1.png) no-repeat center center">
            <div class="classifyContent">
              <p align="center">
                <span class="classifyTitle colorWhite" >关于我们</span>
              </p>
              <p align="center">
                <span class="classifyTitleUsa colorWhite">ABOUT&nbsp;US</span>
              </p>
            </div>
          </div>
          <div class="aboutContent">
            深圳汇通三维打印科技有限公司，位于改革开放发源地中国深圳。是从事3D打印、手板模型制造、模型设计开发的专业型公司。目前公司拥有数十台尖端工业级3D打印机及相关配套设备，网点遍布深圳、东莞、昆山、佛山等地，已成为珠三角地区规模最大的3D打印公司。
            深圳汇通三维从2010年开始，通过为客户提供3D打印和手板加工服务，不断提升自身在小批量产品加工领域的专业性，不断扩大自身的加工能力和服务能力。通过软件、技术和流程的不断优化，深圳汇通三维将3D打印、手板模型加工的成本降低了30%，周期缩短了50%。
            深圳汇通三维使用的3D打印技术成熟可靠，单件可打印尺寸处于业内领先水平，在消费类电子产品、家电产品、汽车制造、医疗器械、通讯产品、工艺礼品、玩具公仔等领域得到广泛用，为珠三角地区乃至全国客户提供了数万套优质手板模型。深圳汇通三维坚持关心客户所关心的，在业内以质量高、速度快、交期短、价格优树立了良好口碑，为客户缩短产品开发周期、降低产品开发成本、减少直接开模风险提供了有利帮助。深圳汇通三维始终坚信，3D打印将为中国制造提供丰富的解决方案并贡献自己强大的力量，我们也将一如既往的站在3D打印技术最前沿与中国制造一同成长！
          </div>
          <div>
            <div class="aboutTag">
                <span >100台进口机器</span>
            </div>
            <div class="aboutTag aboutTagMagin">
                <span>数十种材料</span>
            </div>
            <div class="aboutTag aboutTagMagin">
                <span>数万家客户</span>
            </div>
          </div>
        </div>
      </div>
      <!--关于我们 end-->
      <!--新闻动态 begin-->
      <div class="content-wapper">
        <div class="classify" style="background: url(images/bg.png) no-repeat center center;">
          <div class="classifyContent">
            <p align="center">
              <span class="classifyTitle" >新闻动态</span>
            </p>
            <p align="center">
              <span class="classifyTitleUsa">NEWS&nbsp;TRENDS</span>
            </p>
          </div>
        </div>
        <div>
          <div class="newsUlOne">
            <div v-for="(newObj,index) in news" v-if="index<2" class="newsUlOneLi" :class="index==1?'newsUlOneLiMagin':''" >
              <NuxtLink :to="{path:'/detail/news/'+newObj.id}">
                <el-image class="newsUlOneImg" :src="'//sk-yye.cn:8080/publiccms/webfile/'+newObj.cover" :alt="newObj.title" style="">
                  <div slot="placeholder" class="image-slot"><img class="loddingImg" src="~/assets/images/loading.gif" width="100" height="100"/></div>
                </el-image>
                <div class="newsUlOneRighr">
                  <div class="newsUlOneTitle" :alt="newObj.title">{{newObj.title}}</div>
                  <div class="newsUlOneDec" :alt="newObj.description">{{newObj.description}}</div>
                </div>
              </NuxtLink>
            </div>
          </div>
          <div class="newsUl">
            <div v-for="(newObj,index) in news" v-if="index>=2" class="newsli" :class="index%2!=0?'newsliMagin':''" >
                <img src="~/assets/images/index/left_listicon.gif" width="4" height="7"/>
                <NuxtLink :to="{path:'/detail/news/'+newObj.id}">
                {{newObj.title}}
                </NuxtLink>
                <span>{{dateFormat(newObj.publishDate,'yyyy-MM-dd') }}</span>

            </div>
          </div>
        </div>
      </div>
      <!--新闻动态 end-->
    </div>
  </div>
</template>

<script>
  import HeadNev from '~/components/HeadNev'
  import HeadBanner from '~/components/HeadBanner'
  import Left from '~/components/Left'
  import ElImage from 'element-ui/packages/image/src/main'

  export default{
    data(){
      return {
        banners:[require("~/assets/images/banner-1.jpg")],
        adv:require("~/assets/images/adv.jpg"),
        aboutBg:require("~/assets/images/aboutBg.jpg")
      }
    },
    head(){
      return {
        title: '深圳汇通三维打印科技_深圳3D打印_深圳手板模型_龙华3D打印公司_宝安_龙岗_罗湖_福田_南山_光明_坪山_广州_东莞_惠州_中山_佛山_珠海3D打印',
        meta: [
          { hid: 'keywords', name: 'keywords', content:'深圳3D打印_深圳3D打印公司_龙华3D打印_宝安3D打印_龙岗3D打印_罗湖3D打印_福田3D打印_南山3D打印_光明3D打印手板模型_坪山3D打印_广州_东莞_惠州_中山_佛山_汕头3D打印公司'},
          { hid: 'description', name: 'description', content:  '深圳汇通三维打印科技有限公司是从事3D打印,3D打印服务,手板模型制造,模型设计开发的专业型公司。目前公司拥有数十几台尖端工业级3D打印机及相关配套设。在消费类电子产品、家电产品、汽车制造、医疗器械、通讯产品、工艺礼品、 玩具公仔等领域得到广泛用。深圳汇通三维始终坚信，3D打印将为中国制造提供丰富 的解决方案并贡献自己强大的力量，我们也将一如既往的站在3D打印技术最前沿与中国制造一同成长！'},
          { hid: 'copyright', name: 'copyright', content:  '深圳汇通三维打印科技有限公司'}
        ]
      }
    },created(){
      /*try {
        var bp = document.createElement('script');
        var curProtocol = window.location.protocol.split(':')[0];
        if (curProtocol === 'https') {
          bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';
        }
        else {
          bp.src = 'http://push.zhanzhang.baidu.com/push.js';
        }
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(bp, s);
        console.log("提交百度链接")
      } catch(err) {
      }*/
    },
    computed: {
    },methods:{
//      async fetchSomething() {
//        const ip = await this.$axios.$get('http://icanhazip.com')
//        this.ip = ip
//      },
      //时间格式化函数，此处仅针对yyyy-MM-dd hh:mm:ss 的格式进行格式化
      dateFormat(time,format) {
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
        if(format=="yyyy-MM-dd hh:mm:ss"){
          return year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
        }else if(format=="yyyy-MM-dd"){
          return year+"-"+month+"-"+day;
        }
      }
    },
    async asyncData({ $axios }) {
      //产品
      const res = await $axios.$get('/api/directive/contentList?showParameters=false&categoryId=122&pageIndex=1&count=10')
      //企业档案
      const companyRes = await $axios.$get('/api/directive/contentList?showParameters=false&categoryId=123&pageIndex=1&count=1')
      //新闻动态
      const newsRes = await $axios.$get('/api/directive/contentList?showParameters=false&categoryId=124&pageIndex=1&count=10')
      return {company:companyRes.page.list[0], products:res.page.list,news:newsRes.page.list}
    },
    components: {
      ElImage,
      'V-HeadBanner': HeadBanner,
      'V-HeadNev': HeadNev,
      'V-Left':Left
    }
  }
</script>

<style>
  /*我们的优势begin*/
  .advantageDiv{
    height: 430px;
  }
  .advLeft{
    width: 580px;
    height: 430px;
    margin-right: 16px;
   float: left;
  }
  .advLi{
    width: 535px;
    height: 91px;
    border: 1px solid #36b0f3;
    padding: 20px;
  }
  .avdMagin{
    margin-top: 16px;
  }
  .advLiLeft{
    display: inline-block;
    width: 50px;
    height: 100px;
    vertical-align: top
  }
  .advLiRight{
    display: inline-block;
    width:455px;
    margin-left: 20px
  }
  .advLiTitleMain{
    font-size: 18px;
    color: #666666;
    font-weight: bold;
    margin: 5px 0px 0px;
  }
  .advLiTitle{
    color:#999999;
    line-height: 25px
  }
  .advRight{
    width: 600px;
    height: 430px;
    float: left;
  }
  /*我们的优势 end*/
  /*产品展示 begin*/
  .productList {
    height: 580px;
  }
  .productDiv{
  }
  .product{
    width: 210px;
    margin-left: 24px;
    float: left;
    cursor: pointer;
    margin-bottom: 30px;
  }
  .product .productImg{
    width: 210px;
    height: 210px;
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
    line-height: 38px;
    display: inline-block;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #666666;
  }
  .product span.time{
    font-size: 13px;
    color: #999;
    height: 15px;
    line-height: 11px;
  }
  /*产品展示 end*/
  /*关于我们*/
  .aboutBg{
    height: 503px;
    width: 100%;
    margin-top: 30px;
    padding-top: 30px
  }
  .aboutContent{
    color: white;
    width: 1200px;
    line-height: 1.8;
    text-indent: 30px;
  }
  .aboutTag{
    width: 238px;
    height: 89px;
    line-height: 89px;
    text-align: center;
    z-index: 100;
    border: 2px solid rgb(255, 255, 255);
    display: inline-block;
    margin-top: 40px;
  }
  .aboutTagMagin{
    margin-left: 230px;
  }
  .aboutTag span{
    font-size:32px;
    color:#FFFFFF;
  }
  /*关于我们*/
  /*新闻动态 begin*/
  .newsUlOneLiMagin{
    margin-left: 20px;
  }
  .newsUlOneLi{
    width: 544px;
    display: inline-block;
    background-color: #00acff;
    border: 1px solid #36b0f3;
    padding: 20px
  }
  .newsUlOneLi:hover img{
    transform: scale(1.2);
  }
  .newsUlOneImg{
    width: 129px;
    height: 129px;
    display: inline-block;
    vertical-align: top;
  }
  .newsUlOneRighr{
    width: 384px;
    display: inline-block;
    color: #FFFFFF;
    margin-left: 15px;
  }
  .newsUlOneTitle{
    width: 100%;
    font-size: 16px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: bold;
  }
  .newsUlOneDec{
    width: 100%;
    font-size: 13px;
    line-height: 25px;
    margin-top: 10px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    overflow: hidden;
  }
  .newsUl{
    margin-top: 30px;
    font-size: 12px
  }
  .newsli{
    width: 584px;
    height: 39px;
    line-height:39px;
    display: inline-block;
    border-bottom: 1px dotted #CCC;
  }
  .newsli img{
    margin-bottom: 16px;
  }
  .newsli a{
    display: inline-block;
    width: 495px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #545454;
  }
  .newsli a:hover{
    color: #346200;
    font-weight: bold;
  }
  .newsli span{
    float: right;
    color: #999
  }
  .newsliMagin{
    margin-left: 20px;
  }
  /*新闻动态 end*/

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
</style>



