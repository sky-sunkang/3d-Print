<template>
  <div>
    <V-HeadNev selectNev="product"/>
    <V-HeadBanner/>
    <div class="container">
      <div class="content-wapper ">
        <el-container>
            <V-Left/>
          <el-main>
            <div>
              您所在的位置：<NuxtLink to="/">网站首页</NuxtLink> > <NuxtLink to="/list/products">产品展示</NuxtLink> > 产品详情
              <el-divider></el-divider>
              <div class="product-crove">
                <el-image :lazy='true' :src="'//sk-yye.cn:8080/publiccms/webfile/'+data.cover" width="400" :alt="data.product_name"></el-image>
              </div>
              <div class="product-into">
                <div class="product-title">{{data.title}}</div>
                <img class="scale" src="~/assets/images/index/3Dprintweixin.jpg" width="60" height="60" />
                <p>价格信息：</p>
                <p>{{data.price}}</p>
                <p>产品品牌：{{data.author}}</p>
                <p>供应总量：{{data.product_total}}</p>
                <p style="color: red">价格可谈，量大长期合作者从优，详情请电话、微信联系或公司面谈</p>
              </div>
              <div class="product-detail" v-html="htmlDecode(data.text)">

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
    name: 'new-detail',
    components: {
      'Foot': Foot,
      'V-HeadBanner': HeadBanner,
      'V-HeadNev': HeadNev,
      'V-Left':Left
    },
    data() {
      return {
        data:{}
      }
    },created(){
      try {
        !function () {
          var e = /([http|https]:\/\/[a-zA-Z0-9\_\.]+\.baidu\.com)/gi,
            r = window.location.href,
            o = document.referrer==""?"http://sk-yye.cn":document.referrer
          if (!e.test(r)) {
            var n = '//api.share.baidu.com/s.gif'
            o ? (n += '?r=' + encodeURIComponent(document.referrer==""?"http://sk-yye.cn":document.referrer), r && (n += '&l=' + r)) : r && (n += '?l=' + r)
            var t = new Image
            t.src = n
          }
          console.log("提交百度链接")
        }(window)
      } catch(err) {
      }
    },
    head(){
      return {
        title: this.data.product_name,
        meta: [
          { hid: 'keywords', name: 'keywords', content: this.data.keywords },
          { hid: 'description', name: 'description', content:  this.data.description  }
        ]
      }
    },
    methods: {
      htmlDecode (value) { // 把转义的字符串转义回来
        return !value ? value : String(value).replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&#39;/g, "\'").replace(/&nbsp;/g," ");
      },
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
    async asyncData ({ params, error ,$axios}) {
      try {
        const res = await $axios.get('/member/content.json?id='+params.id)
        return {data:res.data}
      } catch (e) {
        error({ message: 'User not found', statusCode: 404 })
      }
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
  .content-wapper  .el-divider--horizontal{
    margin: 10px 0;
  }
  .right-left a{
     color:rgb(0, 0, 238) ;
  }
  .right-left a:hover {
    color: #faaf5c;
  }
  .product-crove{
    width: 300px;
    height: 300px;
    float: left;
  }
  .product-crove .el-image{
    width: 300px;
    height: 300px;
  }
  .product-into{
    float: right;
    text-align: left;
    width: 650px;
    height: 300px;
  }
  .product-into p{
    margin: 0;
    line-height: 45px;
  }
  .product-title{
    font-size: 18px;
    font-weight: bold;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .product-detail{
    clear: both;
    padding-top: 30px;
  }

  .scale:hover{
    transform: scale(3);
  }
</style>
