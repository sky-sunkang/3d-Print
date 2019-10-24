<template>
  <div>
    <V-HeadNev selectNev="company"/>
    <V-HeadBanner/>
    <div class="container">
      <div class="content-wapper ">
        <el-container>
          <V-Left/>
          <el-main >
            <div class="companyList">
              <div class="listTitle" >
                <span class="listTitleName" >企业档案</span>
              </div>
              <div class="companyDiv"  v-html="htmlDecode(company.text)">
              </div>
            </div>
          </el-main>
        </el-container>
      </div>
    </div>
  </div>
</template>

<script>
  import Foot from '~/components/Foot'
  import HeadBanner from '~/components/HeadBanner'
  import HeadNev from '~/components/HeadNev'
  import Left from '~/components/Left'
  export default {
    name: 'company',
    data() {
      return {
        company:{}
      }
    },
    head(){
      return {
        title: this.company.title,
        meta: [
          { hid: 'keywords', name: 'keywords', content: '中山3D打印_中山3D打印公司_石岐3D打印_东区3D打印_南区3D打印_西区3D打印_中山五桂山3D打印_小榄3D打印_横栏3D打印_东升3D打印_深圳_东莞_惠州_广州_佛山_汕头3D打印公司' },
          { hid: 'description', name: 'description', content:  '深圳汇通三维打印科技有限公司是从事3D打印,3D打印服务,手板模型制造,模型设计开发的专业型公司。目前公司拥有数十几台尖端工业级3D打印机及相关配套设。在消费类电子产品、家电产品、汽车制造、医疗器械、通讯产品、工艺礼品、 玩具公仔等领域得到广泛用。深圳汇通三维始终坚信，3D打印将为中国制造提供丰富 的解决方案并贡献自己强大的力量，我们也将一如既往的站在3D打印技术最前沿与中国制造一同成长！' },
          { hid: 'copyright', name: 'copyright', content:  '深圳汇通三维打印科技有限公司'}
          ]
      }
    },
    components: {
      'Foot': Foot,
      'V-HeadBanner': HeadBanner,
      'V-HeadNev': HeadNev,
      'V-Left':Left
    },
    created() {
    },
    methods: {
      htmlDecode (value) { // 把转义的字符串转义回来
        return !value ? value : String(value).replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&#39;/g, "\'").replace(/&nbsp;/g," ");
      }
    },
    filters: {
      htmlDecode:function (value) {
        return !value ? value : String(value).replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&#39;/g, "\'").replace(/&nbsp;/g," ");
      }
    },
    async asyncData({ $axios}) {
      //产品
      const res = await $axios.get('/member/contentList.json?categoryId=123')
//      var aa = $('<p/>').html(res.data.data[0].text).text()
      return {company:res.data.data[0]}
    }
  }
</script>

<style scoped>
  .content-wapper {
    width: 1200px;
    min-height: 500px;
    margin: 0 auto;
  }
  .container {
    margin-top: 20px;
  }

  .companyDiv{
     margin-top: 20px;
   }

   table td.data_value {
    width: 40%;
    text-align: left;
    padding: 0 15px;
    background: #fff;
    color: #666;
    line-height: 20px;
  }
   table td {
    height: 40px;
  }
</style>
