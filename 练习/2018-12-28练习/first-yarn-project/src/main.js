// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Iview from 'iview'
import 'iview/dist/styles/iview.css'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(Iview)
Vue.use(ElementUI)

Vue.config.productionTip = false //阻止 vue 在启动时生成生产提示。
Vue.mixin({
    data(){
      return{
        data:[
          {src:require('@/img/110.jpg'),id:"110",title:'通灵妃'},{src:require('@/img/111.jpg'),id:"111",title:'英雄？我早就不当了'},{src:require('@/img/112.jpg'),id:"112",title:'妹子与科学'},
          {src:require('@/img/113.jpg'),id:"113",title:'尸兄（我叫白小飞）'},{src:require('@/img/114.jpg'),id:"114",title:'重生之都市修仙'},{src:require('@/img/115.jpg'),id:"115",title:'我的反派女友'},
          {src:require('@/img/116.jpg'),id:"116",title:'天籁音灵'},{src:require('@/img/117.jpg'),id:"117",title:'怪奇笔记'},
          {src:require('@/img/210.jpg'),id:"210",title:'航海王'},{src:require('@/img/211.jpg'),id:"211",title:'银魂'},{src:require('@/img/212.jpg'),id:"212",title:'死神/境·界'},
          {src:require('@/img/213.jpg'),id:"213",title:'博人传-火影次世代-'},{src:require('@/img/214.jpg'),id:"214",title:'黑色四叶草'},{src:require('@/img/215.jpg'),id:"215",title:'名侦探柯南'},
          {src:require('@/img/216.jpg'),id:"216",title:'我的英雄学园'},{src:require('@/img/217.jpg'),id:"217",title:'七人传奇'}
        ]
      }
    }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
