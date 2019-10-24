<template>
  <div>
    <V-HeadNev selectNev="news"/>
    <V-HeadBanner/>
    <div class="container">
      <div class="content-wapper ">
        <el-container>
          <V-Left/>
          <el-main >
            <div class="newsList">
              <div class="listTitle" >
                <span class="listTitleName" >新闻动态</span>
              </div>
              <ul class="news-ul" >
                  <li v-for="newObj in news">
                    <NuxtLink :to="{path:'/detail/news/'+newObj.id}">
                    <span class="new-title">{{newObj.title}}</span>
                    <span class="new-date">{{dateFormat(newObj.publishDate) }}</span>
                    <span class="new-desc">{{newObj.description}}</span>
                    </NuxtLink>
                  </li>
                  <li v-for="newObj in morenews">
                    <NuxtLink :to="{path:'/detail/news/'+newObj.id}">
                    <span class="new-title">{{newObj.title}}</span>
                    <span class="new-date">{{dateFormat(newObj.publishDate) }}</span>
                    <span class="new-desc">{{newObj.description}}</span>
                    </NuxtLink>
                  </li>
              </ul>
              <div style="clear: both;text-align: center;margin-top: 30px">
                <el-button type="info" v-on:click="more" icon="el-icon-bottom" :loading="moreLoading" round>点击加载更多</el-button>
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
    name: 'news',
    head(){
      return {
        title: '东莞3D打印_东莞手板模型_莞城3D打印公司_莞城|南城|万江|东城|塘厦|长安|虎门|石排|深圳|东莞|惠州|中山|佛山|珠海|3D打印_深圳汇通三维打印科技',
        meta: [
          { hid: 'keywords', name: 'keywords', content:'东莞3D打印_东莞3D打印公司_莞城3D打印_南城3D打印_万江3D打印_东城3D打印_塘厦3D打印_长安3D打印_虎门3D打印手板模型_石排3D打印|广州|深圳|惠州|中山|佛山|汕头3D打印公司'},
          { hid: 'description', name: 'description', content:  '深圳汇通三维打印科技有限公司是从事3D打印,3D打印服务,手板模型制造,模型设计开发的专业型公司。目前公司拥有数十几台尖端工业级3D打印机及相关配套设。在消费类电子产品、家电产品、汽车制造、医疗器械、通讯产品、工艺礼品、 玩具公仔等领域得到广泛用。深圳汇通三维始终坚信，3D打印将为中国制造提供丰富 的解决方案并贡献自己强大的力量，我们也将一如既往的站在3D打印技术最前沿与中国制造一同成长！'},
          { hid: 'copyright', name: 'copyright', content:  '深圳汇通三维打印科技有限公司'}
        ]
      }
    },
    data(){
      return {
        moreLoading:false,
        pageIndex:1,
        morenews:[]
      }
    },
    components: {
      'Foot': Foot,
      'V-HeadBanner': HeadBanner,
      'V-HeadNev': HeadNev,
      'V-Left':Left
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
    methods: {
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
      },//加载更多
      more(){
        this.moreLoading=true;
        this.pageIndex=this.pageIndex+1;
        this.$axios.get('/api/directive/contentList?showParameters=false&categoryId=124&pageIndex='+this.pageIndex+'&count=20')
        .then((response) => { // 或者我们可以使用 ES6 的 箭头函数arrow function，箭头方法可以和父方法共享变量.否则不能在钩子函数中调用this.banners
          if(response.data.page.pageIndex!=this.pageIndex){
            this.$message.error('已经拉到最下面咯，客官！');
          }else{
            this.morenews=this.morenews.concat(response.data.page.list)
          }
          this.moreLoading=false;
        })
        .catch(function (error) {
          console.log(error)
        })

      }
    },
    filters: {
      htmlDecode:function (value) {
        return !value ? value : String(value).replace(/&gt;/g, ">").replace(/&lt;/g, "<").replace(/&quot;/g, '"').replace(/&amp;/g, "&").replace(/&#39;/g, "\'").replace(/&nbsp;/g," ");
      }
    },
    async asyncData({ $axios}) {
      const newsRes = await $axios.$get('/api/directive/contentList?showParameters=false&categoryId=124&pageIndex=1&count=20')
      return {news:newsRes.page.list}
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
</style>
