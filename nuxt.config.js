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
      {src: 'https://api.map.baidu.com/api?v=2.0&ak=zG9ZHEURUd0WH20G6gQ8HRRa'},
//      {src: 'https://cdn.staticfile.org/jquery/3.1.1/jquery.min.js' },
//      {src: '/js/map.js' },
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
//        href: 'https://cdn.staticfile.org/element-ui/2.4.11/theme-chalk/index.css'
      }
    ]
    
  },css: [
    '~/css/main.css'
  ],js: [
//    '~/js/baidu.js'
  ],
  /*
   ** Customize the progress-bar color
   */
  loading: {color: '#36b0f3'},
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
  //动态路由打成静态文件["news/14","news/12"]
  generate: {
    routes: function () {
      return axios.get('https://sk-yye.cn/member/detail.json')
      .then((res) => {
        return res.data;
      })
    },
    interval: 200//,//两个渲染周期之间的间隔，以避免使用来自Web应用程序的API调用互相干扰
//    concurrency:1000//路由的生成是并发的
  },
  /* 需要使用 aixos必须配置以下两项axios和proxy*/
  axios: {
    retry: {retries:3},
    //开发模式下开启debug
    debug: process.env._ENV =="production"?false:true,
    baseURL:'https://www.sk-yye.cn',
    proxy: true, // 表示开启代理
//    prefix: '/api', // 表示给请求url加个前缀 /api
//    credentials: true // 表示跨域请求时是否需要使用凭证
    changeOrigin:true, //允许跨域
  },
  //  开发环境的代理，服务器上用nginx反向代理
  proxy: {
    //cms自带接口
    '/api/': {
      target: 'https://www.sk-yye.cn/api',
      pathRewrite: {
        '^/api/': '/',
        changeOrigin: true
      }
    },
    //cms自定义模板接口
    '/member/': {
      target: 'https://www.sk-yye.cn/member',
      pathRewrite: {
        '^/member/': '/',
        changeOrigin: true
      }
    },
    //cms静态资源
    '/publiccmswebfile/': {
      target: 'http://www.sk-yye.cn:8080/publiccms/webfile',
      pathRewrite: {
        '^/publiccmswebfile/': '/',
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
	/*splitChunks: {
	  layouts: false,
	  pages: true,
	  commons: true
	}, */
    //切割element打包文件50KB
    maxChunkSize: 50000,
    transpile: [/^element-ui/],
    optimization: {
      splitChunks: {
        chunks: 'all',
        automaticNameDelimiter: '.',
        maxAsyncRequests: 7,
        cacheGroups: {
         /* vuetify: {
            test: /node_modules[\\/]vuetify/,
            chunks: 'all',
            priority: 20,
            name: true
          },*/
          elementui: {
            test: /node_modules[\\/]element-ui/,
            chunks: 'all',
            priority: 20,
            name: true
          }
        }
      }
    },
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
    vendor:['axios','element-ui'], //防止重复打包
    /**
     * 打包独立css文件
     */
    extractCSS: true,
    // 默认情况下，关闭gzip，因为许多流行的静态主机
    // 已经在nginx开启了gzip
    // 在设置为“true”之前，请确保:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css']
  }
}
