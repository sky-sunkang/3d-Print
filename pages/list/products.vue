<template>
  <div>
    <V-HeadBanner  class="top-bottom"/>
    <V-HeadNev selectNev="product"  class="top-bottom"/>
    <div class="container  bottom-top">
      <div class="content-wapper ">
        <el-container>
          <el-aside width="200px" class="left-right">
            <V-Left />
          </el-aside>
          <el-main class="right-left">
            <!--产品展示-->
            <div class="productList">
              <div class="listTitle" >
                <span class="listTitleName" >产品列表</span>
              </div>
              <div class="productDiv">
                <el-card class="product" :body-style="{ padding: '0px' }" v-for="(product,index) in products" :key="index">
                  <div class="productImg">
                    <el-image :src="'//sk-yye.cn:8080/publiccms/webfile/'+product.cover"> <div slot="placeholder" class="image-slot">玩命加载中...</div></el-image>
                  </div>
                  <div >
                    <span v-bind:title="product.title">{{product.title}}</span>
                    <span class="time">{{dateFormat(product.publishDate) }}</span>
                  </div>
                </el-card>
                <el-card class="product" :body-style="{ padding: '0px' }" v-for="(product,index) in products" :key="index">
                  <div class="productImg">
                    <el-image :src="'//sk-yye.cn:8080/publiccms/webfile/'+product.cover"> <div slot="placeholder" class="image-slot">玩命加载中...</div></el-image>
                  </div>
                  <div >
                    <span v-bind:title="product.title">{{product.title}}</span>
                    <span class="time">{{dateFormat(product.publishDate) }}</span>
                  </div>
                </el-card>
              </div>
              <div style="clear: both;text-align: center">
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
    name: 'products',
    data(){
      return {
        moreLoading:false,
        pageIndex:1,
        moreproducts:[]
      }
    },
    components: {
      'Foot': Foot,
      'V-HeadBanner': HeadBanner,
      'V-HeadNev': HeadNev,
      'V-Left':Left
    },methods:{
      //加载更多
      more(){
        this.moreLoading=true;
        this.pageIndex=this.pageIndex+1;
        this.$axios.get('/api/directive/contentList?showParameters=false&pageIndex='+this.pageIndex+'&count=8&categoryId=122')
        .then((response) => { // 或者我们可以使用 ES6 的 箭头函数arrow function，箭头方法可以和父方法共享变量.否则不能在钩子函数中调用this.banners
          if(response.data.page.pageIndex!=this.pageIndex){
            this.$message.error('已经拉到最下面咯，客官！');
          }else{
            this.moreproducts.push(response.data.page.list)
          }
          this.moreLoading=false;
        })
        .catch(function (error) {
          console.log(error)
        })

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
    async asyncData({ $axios }) {
      //产品
      const res = await $axios.get('/api/directive/contentList?showParameters=false&categoryId=122&pageIndex=1&count=8')
      return {products:res.data.page.list}
    }/*,
    generate: {
      fallback: false, // if you want to use '404.html'
      fallback: 'list/product.html' // if your hosting needs a custom location
    }*/
  }
</script>

<style scoped>
  .content-wapper{
    width: 1200px;
    min-height: 500px;
    margin: 0 auto;
  }
</style>
