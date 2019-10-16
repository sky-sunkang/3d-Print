const webpack = require('webpack')
const axios = require('axios')

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
//    title: '3D打印手板模型|深圳龙华有哪些3D打印手板模型|广州有哪些3D打印手板模型|东莞有哪些3D打印手板模型|东莞|惠州|中山|佛山|珠海|江门有哪些3D打印手板模型|深圳汇通三维打印科技',
    meta: [
      {charset: 'utf-8'},
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
//      {
//        name: 'keywords',
//        content: '深圳3D打印手板模型|深圳龙华3D打印手板模型|深圳南山3D打印手板模型|龙华3D打印手板模型|龙华有哪些3D打印手板模型公司|深圳有哪些3D打印手板模型|广东惠州3D打印手板模型|广东东莞3D打印手板模型|广东佛山3D打印手板模型|广东中山3D打印手板模型',
//      },
//      {
//        name: 'description',
//        content: '深圳汇通三维打印科技是从事3D打印,手板模型制造的专业型公司。专注于为广东,深圳|广州|东莞|惠州|中山|佛山|珠海|江门等地提供3D打印手板模型服务'
//      },
//      {
//        name: 'copyright',
//        content: '深圳3D打印手板模型'
//      },
      {
        name: 'author',
        content: '深圳汇通三维打印科技'
      }
    ], script: [
      {src: 'http://api.map.baidu.com/api?v=2.0&ak=zG9ZHEURUd0WH20G6gQ8HRRa'},
      {src: 'https://cdn.staticfile.org/jquery/3.1.1/jquery.min.js' },
      {src: '/js/baidu.js' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/logo.jpg'
      },
      {
        rel: 'stylesheet',
        href: 'https://cdn.staticfile.org/element-ui/2.4.11/theme-chalk/index.css'
      }
    ]
    
  },css: [
    '~/css/main.css'
  ],js: [
    '~/js/baidu.js'
  ],
  /*
   ** Customize the progress-bar color
   */
  loading: {color: '#fff'},
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    {src: '~/plugins/element-ui', ssr: true}
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/axios'
  ],
  /* 需要使用 aixos必须配置以下两项axios和proxy*/
  axios: {
    retry: {retries:3},
    //开发模式下开启debug
    debug: process.env._ENV =="production"?false:true,
    proxy:true,
//    prefix:'/api',
    //设置不同环境的请求地址
//    baseURL:
//      process.env._ENV =="production"?"http://localhost:3000/api/":"http://localhost:3000/api/",
    credentials:true
  },
  //动态路由打成静态文件["news/14","news/12"]
  generate: {
    routes: function () {
      return axios.get('http://sk-yye.cn:8080/publiccms/member/detail.json')
      .then((res) => {
        return res.data;
      })
    }
  },
  //  开发环境的代理，服务器上用nginx反向代理
  proxy: {
    '/api/': {
      target: 'http://www.sk-yye.cn:8080/publiccms/api',
      pathRewrite: {
        '^/api/': '/',
        changeOrigin: true
      }
    },
    '/member/': {
      target: 'http://www.sk-yye.cn:8080/publiccms/member',
      pathRewrite: {
        '^/member/': '/',
        changeOrigin: true
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    analyze: true,
    // or
    analyze: {
      analyzerMode: 'static'
    },
    maxChunkSize: 200000,
    transpile: [/^element-ui/],
    babel: {
      plugins: [
        [
          'component',
          {
            'libraryName': 'element-ui',
            'styleLibraryName': 'theme-chalk'
          }
        ]
      ]
    },
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {
//      config.externals={'jquery':'$'}
    },
    vendor:['axios'], //防止重复打包
    /**
     * 打包独立css文件
     */
    extractCSS: true
  }
}
