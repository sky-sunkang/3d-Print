<template>
  <div>
    <V-HeadNev selectNev="contact"/>
    <V-HeadBanner/>
    <div class="container">
      <div class="content-wapper ">
        <el-container>
          <V-Left :leftproducts="leftproducts"/>
          <el-main>
            <div class="contactList">
              <div class="listTitle" >
                <span class="listTitleName" >联系方式</span>
              </div>
              <div class="contactDiv" >
                <p>深圳汇通三维打印科技有限公司</p>
                <p>联系人：余小姐 （销售部经理）</p>
                <p>QQ：2850763601</p>
                <p>手机：15919464663（微信同）</p>
                <p>地址：广东省深圳市龙华区龙华街道狮头岭和平工业园金星大厦B座7楼707</p>
                <br>
                <div id="allmapCantact">
                </div>
                <span style="color: red">*上述地图中的红点是深圳汇通三维打印科技在百度地图中的具体位置标注，地图可以拖动，鼠标滑轮滑动放大</span>
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
    name: 'contact',
    head(){
      return {
        title: '惠州3D打印_惠州手板模型_惠城3D打印公司|惠阳|惠东|大亚湾|仲恺|博罗|龙门|广州|东莞|深圳|中山|佛山|珠海|3D打印_深圳汇通三维打印科技',
        meta: [
          { hid: 'keywords', name: 'keywords', content:'惠州3D打印_惠州3D打印公司_惠城3D打印_惠阳3D打印_惠东3D打印_大亚湾3D打印_仲恺3D打印_博罗3D打印_龙门3D打印手板模型_广州|东莞|深圳|中山|佛山|汕头|3D打印'},
          { hid: 'description', name: 'description', content:  '深圳汇通三维打印科技有限公司是从事3D打印,3D打印服务,手板模型制造,模型设计开发的专业型公司。目前公司拥有数十几台尖端工业级3D打印机及相关配套设。在消费类电子产品、家电产品、汽车制造、医疗器械、通讯产品、工艺礼品、 玩具公仔等领域得到广泛用。深圳汇通三维始终坚信，3D打印将为中国制造提供丰富 的解决方案并贡献自己强大的力量，我们也将一如既往的站在3D打印技术最前沿与中国制造一同成长！'},
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
      var interval =setInterval(function(){
        try {
          var map = new BMap.Map('allmapCantact')
          var point = new BMap.Point(114.026909, 22.676792)
          map.centerAndZoom(point, 10)
          map.enableScrollWheelZoom()//  启用滚轮放大缩小，默认禁用
          map.enableContinuousZoom()//  启用地图惯性拖拽，默认禁用
          var local = new BMap.LocalSearch(map, {
            renderOptions: {map: map}
          })
          local.search('深圳汇通三维打印科技有限公司')
          clearInterval(interval)
        }catch(error) {
          console.log(error)
        }
      },1000)
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
     const prores = await $axios.get('/api/directive/contentList?showParameters=false&categoryId=122&pageIndex=1&count=5')
      return {leftproducts:prores.data.page.list}
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

  .contactDiv{
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
  #allmapCantact{
    width: 950px;
    height: 600px;
  }
</style>
