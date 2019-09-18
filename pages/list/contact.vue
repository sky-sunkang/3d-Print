<template>
  <div>
    <V-HeadBanner class="top-bottom"/>
    <V-HeadNev selectNev="contact" class="top-bottom"/>
    <div class="container  bottom-top">
      <div class="content-wapper ">
        <el-container>
          <el-aside width="200px" class="left-right">
            <V-Left />
          </el-aside>
          <el-main class="right-left">
            <div class="contactList">
              <div class="listTitle" >
                <span class="listTitleName" >联系方式</span>
              </div>
              <div class="contactDiv"  v-html="htmlDecode(contact)">
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
        return value
        .replace(value ? /&(?!#?\w+;)/g : /&/g, '&amp;')
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, "\"")
        .replace(/&#39;/g, "\'");
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
      //产品
      const res = await $axios.get('/member/contentList.json?categoryId=123')
//      var aa = $('<p/>').html(res.data.data[0].text).text()
      return {contact:res.data.data[0].text}
    }
  }
</script>

<style scoped>
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
</style>
