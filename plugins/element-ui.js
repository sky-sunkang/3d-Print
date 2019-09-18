import Vue from 'vue'
//按需加载
import {Carousel,CarouselItem,Container,Aside,Main,Image,Input,MessageBox,Card,Button,Message  } from 'element-ui'
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Image)
Vue.use(Input)
Vue.use(Card)
Vue.use(Button)
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$message = Message

