<template>
  <el-aside width="215px">
    <div class="leftContactNav">
      <ul>
        <li class="leftContactNavTitle">联系我们</li>
        <li >
          深圳汇通三维打印科技
        </li>
        <li >
          余小姐 （销售部经理）
        </li>
        <a class="tboxLi" target="_blank" href="https://wpa.qq.com/msgrd?v=3&amp;uin=2850763601&amp;site=qq&amp;menu=yes" rel="nofollow">
          <li >
            <img src="~/assets/images/index/QQ.png" width="20" height="20"/>：2850763601<span class="tips">（可点击）</span>
          </li>
        </a>
        <li>
          <img src="~/assets/images/index/weixin.png" width="20" height="20"/>：15919464663<img class="scale" src="~/assets/images/index/3Dprintweixin.jpg" width="30" height="30"/><span class="tips"></span>
        </li>
        <li>
          <img src="~/assets/images/index/phone.png" width="20" height="20"/>：15919464663
        </li>
        <li >
          <img src="~/assets/images/index/email.png" width="20" height="20"/>：2850763601@qq.com
        </li>
        <li>
          <img src="~/assets/images/index/address.png" width="20" height="20"/>：广东省深圳市龙华区龙华街道狮头岭和平工业园金星大厦B座7楼707<a @click="ditu" href="javascript:void(0);">查看详情</a>
        </li>
      </ul>
    </div>
  </el-aside>
</template>

<script>
  export default {
    name: 'left',
    methods:{
      ditu(){
        this.$alert('<div id="allmap"></div><span style="color: red">*上述地图中的红点是深圳汇通三维打印科技在百度地图中的具体位置标注，地图可以拖动，鼠标滑轮滑动放大</span>', '公司地址', {
          dangerouslyUseHTMLString: true,
          showConfirmButton:false
        });
        var interval =setInterval(function(){
          try {
            var map = new BMap.Map('allmap')
            var point = new BMap.Point(114.026909, 22.676792)
            map.centerAndZoom(point, 10)
            map.enableScrollWheelZoom()//  启用滚轮放大缩小，默认禁用
            map.enableContinuousZoom()//  启用地图惯性拖拽，默认禁用
            var local = new BMap.LocalSearch(map, {
              renderOptions: {map: map}
            })
            local.search('深圳汇通三维打印科技有限公司')
            clearInterval(interval)
          }catch {
          }
        },1000)

      }
    }
  }
</script>

<style scoped>
  .leftContactNav{
    border: 1px solid #e0e0e0;
    background-color: white;
    margin-bottom: 10px;
  }
  .leftContactNav ul{
    padding: 0px ;
    margin: 0px;
    width: 100%;
  }
  .leftContactNav li{
    list-style:none;
    line-height: 35px;
    padding-left: 6px;
    border-top: 1px dotted #e0e0e0;
    cursor: pointer;
    padding-right: 6px;
  }
  .leftContactNav a:hover{
    color: #faaf5c;
  }
  .leftContactNav li img{
    vertical-align: middle;
  }
  .scale{
    margin-left: 10px;
  }
  .scale:hover{
    transform: scale(3);
  }
  .tips{
    font-size: 10px;
    color: #666666 !important;
  }
  .leftContactNavTitle{
    color: white;
    background-color:  #0c365c;
    height: 45px !important;
    line-height: 45px !important;
    border-top: 0px !important;
  }
</style>
