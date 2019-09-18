<template>
  <div>
    <V-HeadBanner class="top-bottom"/>
    <V-HeadNev selectNev="news" class="top-bottom"/>
    <div class="container  bottom-top">
      <div class="content-wapper ">
        <el-container>
          <el-aside width="200px" class="left-right">
            <V-Left />
          </el-aside>
          <el-main class="right-left">
            <div class="newsList">
              <div class="listTitle" >
                <span class="listTitleName" >新闻动态</span>
              </div>
              <ul class="news-ul" >
                <a href="#" >
                  <li v-for="newObj in news">
                    <span class="new-title">{{newObj.title}}</span>
                    <span class="new-date">{{dateFormat(newObj.publishDate) }}</span>
                    <span class="new-desc">{{newObj.description}}</span>
                  </li>
                  <li v-for="newObj in morenews">
                    <span class="new-title">{{newObj.title}}</span>
                    <span class="new-date">{{dateFormat(newObj.publishDate) }}</span>
                    <span class="new-desc">{{newObj.description}}</span>
                  </li>
                </a>
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
    },
    created() {
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
        this.$axios.get('/api/directive/contentList?showParameters=false&categoryId=124&pageIndex='+this.pageIndex+'&count=5')
        .then((response) => { // 或者我们可以使用 ES6 的 箭头函数arrow function，箭头方法可以和父方法共享变量.否则不能在钩子函数中调用this.banners
          if(response.data.page.pageIndex!=this.pageIndex){
            this.$message.error('已经拉到最下面咯，客官！');
          }else{
            this.morenews.push(response.data.page.list)
          }
          this.moreLoading=false;
        })
        .catch(function (error) {
          console.log(error)
        })

      }
    },
    filters: {
      htmlDecode:function (html) {
        return html
        .replace(html ? /&(?!#?\w+;)/g : /&/g, '&amp;')
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, "\"")
        .replace(/&#39;/g, "\'");
      }
    },
    async asyncData({ $axios}) {
      const newsRes = await $axios.$get('/api/directive/contentList?showParameters=false&categoryId=124&pageIndex=1&count=5')
      return {news:newsRes.page.list}
    }
  }
</script>

<style scoped>
  .container {
    margin-top: 20px;
  }

  .newsList{
    margin-top: 10px;
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
