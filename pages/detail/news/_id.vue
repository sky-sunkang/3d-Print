<template>
  <div>
    <V-HeadBanner class="top-bottom"/>
    <V-HeadNev selectNev="news" class="top-bottom"/>
    <div class="container  bottom-top">
      <div class="content-wapper ">
        <el-container>
          <V-Left />
          <el-main class="right-left">
            <div>
              您所在的位置：<NuxtLink to="/">网站首页</NuxtLink> > <NuxtLink to="/list/news">新闻动态</NuxtLink> > 正文
              <el-divider></el-divider>
              <div class="news-title">
                {{data.title}}
              </div>
              <div class="news-auth">
                <span>发布者：{{data.author}}</span>
                <span>发布日期：{{dateFormat(data.publishDate)}} </span>
                <span>字体大小：大 中 小</span>
              </div>
              <el-divider></el-divider>
              <div class="news-context" v-html="htmlDecode(data.text)">
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
    },
    head(){
      return {
        title: this.data.title,
        meta: [
          { hid: 'keywords', name: 'keywords', content: this.data.keywords },
          { hid: 'description', name: 'description', content:  this.data.description  }
        ]
      }
    },
    methods: {
      htmlDecode (value) { // 把转义的字符串转义回来
        if(value==null){
          return "";
        }
        return value
        .replace(value ? /&(?!#?\w+;)/g : /&/g, '&amp;')
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, "\"")
        .replace(/&#39;/g, "\'");
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
  .content-wapper  .el-divider--horizontal{
    margin: 10px 0;
  }
  .right-left a{
     color:rgb(0, 0, 238) ;
  }
  .right-left a:hover {
    color: #faaf5c;
  }
  .news-title{
    text-align: center;
    font-size: 18px;
    margin-top: 30px;
    font-weight: bold;
  }
  .news-auth{
    text-align: center;
    font-size: 12px;
    margin-top: 10px;
    color: #999ea2;
  }
  .news-auth span:first-child{
     display: inline-block;
     margin-right: 20px;
   }
  .news-auth span:last-child{
    display: inline-block;
    margin-left: 20px;
  }

  .news-context{

  }
</style>
